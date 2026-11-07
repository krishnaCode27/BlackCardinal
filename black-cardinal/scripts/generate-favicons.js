/* eslint-disable */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 implementation for PNG chunks
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(12 + len);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const crcData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  buf.writeUInt32BE(crc32(crcData), 8 + len);
  return buf;
}

function encodePng(width, height, rgbaBuffer) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // 8-bit depth
  ihdr.writeUInt8(6, 9); // RGBA color
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);
  for (let y = 0; y < height; y++) {
    rawData[y * rowSize] = 0; // Filter type 0 (None)
    rgbaBuffer.copy(rawData, y * rowSize + 1, y * width * 4, (y + 1) * width * 4);
  }
  const idatData = zlib.deflateSync(rawData, { level: 9 });
  return Buffer.concat([
    signature,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', idatData),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

function decodePng(filePath) {
  const buf = fs.readFileSync(filePath);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  let idat = [];
  let pos = 8;
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.slice(pos + 4, pos + 8).toString();
    if (type === 'IDAT') idat.push(buf.slice(pos + 8, pos + 8 + len));
    pos += 12 + len;
  }
  const decompressed = zlib.inflateSync(Buffer.concat(idat));
  const raw = Buffer.alloc(width * height * 4);
  const rowBytes = width * 4;
  let srcPos = 0;
  let dstPos = 0;
  const prevRow = Buffer.alloc(rowBytes);

  for (let y = 0; y < height; y++) {
    const filter = decompressed[srcPos++];
    const currentRow = Buffer.alloc(rowBytes);
    for (let x = 0; x < rowBytes; x++) {
      const xVal = decompressed[srcPos++];
      const a = (x >= 4) ? currentRow[x - 4] : 0;
      const b = prevRow[x];
      const c = (x >= 4) ? prevRow[x - 4] : 0;
      let val = xVal;
      if (filter === 1) val = (xVal + a) & 0xff;
      else if (filter === 2) val = (xVal + b) & 0xff;
      else if (filter === 3) val = (xVal + Math.floor((a + b) / 2)) & 0xff;
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        const pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
        val = (xVal + pr) & 0xff;
      }
      currentRow[x] = val;
    }
    currentRow.copy(raw, dstPos);
    currentRow.copy(prevRow, 0);
    dstPos += rowBytes;
  }
  return { width, height, data: raw };
}

/**
 * High-quality area downsampling with premultiplied alpha
 * Perfectly centers the cropped bird inside a square transparent canvas
 */
function resampleBirdToSquare(src, targetSize) {
  // 1. Detect tight bounding box of visible pixels (alpha > 8)
  let minX = src.width, maxX = 0, minY = src.height, maxY = 0;
  for (let y = 0; y < src.height; y++) {
    for (let x = 0; x < src.width; x++) {
      const alpha = src.data[(y * src.width + x) * 4 + 3];
      if (alpha > 8) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  // Add 1px safety border around bounding box
  const boundX0 = Math.max(0, minX - 1);
  const boundY0 = Math.max(0, minY - 1);
  const boundX1 = Math.min(src.width - 1, maxX + 1);
  const boundY1 = Math.min(src.height - 1, maxY + 1);
  const birdW = boundX1 - boundX0 + 1;
  const birdH = boundY1 - boundY0 + 1;

  // Fit into square canvas with generous visibility:
  // For small favicons (16 & 32), use 94% scale for maximum detail readability
  // For larger icons, use 90% scale for elegant breathing room
  const coverage = targetSize <= 32 ? 0.94 : 0.90;
  const fitSize = targetSize * coverage;
  const scale = fitSize / Math.max(birdW, birdH);

  const drawW = birdW * scale;
  const drawH = birdH * scale;

  // Perfect center alignment
  const offsetX = (targetSize - drawW) / 2;
  const offsetY = (targetSize - drawH) / 2;

  const out = Buffer.alloc(targetSize * targetSize * 4); // all zeros = transparent black

  // Multi-sample grid per output pixel: 4x4 sub-pixel sampling
  const SAMPLES = targetSize <= 48 ? 6 : 4;
  const step = 1 / SAMPLES;

  for (let dy = 0; dy < targetSize; dy++) {
    for (let dx = 0; dx < targetSize; dx++) {
      let accR = 0, accG = 0, accB = 0, accA = 0;
      let sampleCount = 0;

      for (let sy = 0; sy < SAMPLES; sy++) {
        const py = dy + (sy + 0.5) * step;
        const srcY = boundY0 + (py - offsetY) / scale;

        for (let sx = 0; sx < SAMPLES; sx++) {
          const px = dx + (sx + 0.5) * step;
          const srcX = boundX0 + (px - offsetX) / scale;

          sampleCount++;

          if (srcX < 0 || srcX >= src.width || srcY < 0 || srcY >= src.height) {
            continue; // transparent
          }

          // Bilinear interpolation on source
          const x0 = Math.floor(srcX);
          const y0 = Math.floor(srcY);
          const x1 = Math.min(src.width - 1, x0 + 1);
          const y1 = Math.min(src.height - 1, y0 + 1);
          const fx = srcX - x0;
          const fy = srcY - y0;

          const idx00 = (y0 * src.width + x0) * 4;
          const idx10 = (y0 * src.width + x1) * 4;
          const idx01 = (y1 * src.width + x0) * 4;
          const idx11 = (y1 * src.width + x1) * 4;

          const a00 = src.data[idx00 + 3] / 255;
          const a10 = src.data[idx10 + 3] / 255;
          const a01 = src.data[idx01 + 3] / 255;
          const a11 = src.data[idx11 + 3] / 255;

          // Premultiplied RGB
          const r00 = src.data[idx00] * a00;
          const g00 = src.data[idx00 + 1] * a00;
          const b00 = src.data[idx00 + 2] * a00;

          const r10 = src.data[idx10] * a10;
          const g10 = src.data[idx10 + 1] * a10;
          const b10 = src.data[idx10 + 2] * a10;

          const r01 = src.data[idx01] * a01;
          const g01 = src.data[idx01 + 1] * a01;
          const b01 = src.data[idx01 + 2] * a01;

          const r11 = src.data[idx11] * a11;
          const g11 = src.data[idx11 + 1] * a11;
          const b11 = src.data[idx11 + 2] * a11;

          const w00 = (1 - fx) * (1 - fy);
          const w10 = fx * (1 - fy);
          const w01 = (1 - fx) * fy;
          const w11 = fx * fy;

          const sampleA = (a00 * w00 + a10 * w10 + a01 * w01 + a11 * w11);
          const sampleR = (r00 * w00 + r10 * w10 + r01 * w01 + r11 * w11);
          const sampleG = (g00 * w00 + g10 * w10 + g01 * w01 + g11 * w11);
          const sampleB = (b00 * w00 + b10 * w10 + b01 * w01 + b11 * w11);

          accR += sampleR;
          accG += sampleG;
          accB += sampleB;
          accA += sampleA;
        }
      }

      const meanA = accA / sampleCount;
      if (meanA > 0.002) {
        const outIdx = (dy * targetSize + dx) * 4;
        const normR = Math.min(255, Math.max(0, Math.round((accR / sampleCount) / meanA)));
        const normG = Math.min(255, Math.max(0, Math.round((accG / sampleCount) / meanA)));
        const normB = Math.min(255, Math.max(0, Math.round((accB / sampleCount) / meanA)));
        const normA = Math.min(255, Math.max(0, Math.round(meanA * 255)));

        out[outIdx] = normR;
        out[outIdx + 1] = normG;
        out[outIdx + 2] = normB;
        out[outIdx + 3] = normA;
      }
    }
  }

  return out;
}

function createIco(pngEntries) {
  // pngEntries: [{ size: 16, buffer }, { size: 32, buffer }, ...]
  const count = pngEntries.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type (1 = ICO)
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const dirEntries = [];
  const imageBuffers = [];

  for (const entry of pngEntries) {
    const dir = Buffer.alloc(16);
    dir.writeUInt8(entry.size >= 256 ? 0 : entry.size, 0); // width
    dir.writeUInt8(entry.size >= 256 ? 0 : entry.size, 1); // height
    dir.writeUInt8(0, 2); // color count
    dir.writeUInt8(0, 3); // reserved
    dir.writeUInt16LE(1, 4); // planes
    dir.writeUInt16LE(32, 6); // bpp
    dir.writeUInt32LE(entry.buffer.length, 8); // size of image in bytes
    dir.writeUInt32LE(offset, 12); // offset

    dirEntries.push(dir);
    imageBuffers.push(entry.buffer);
    offset += entry.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

function run() {
  const projectRoot = path.resolve(__dirname, '..');
  const sourcePath = path.join(projectRoot, 'public', 'images', 'cardinal-bird.png');

  console.log('Loading source image from:', sourcePath);
  const src = decodePng(sourcePath);
  console.log(`Source dimensions: ${src.width} x ${src.height}`);

  // Generate the required sizes
  const sizes = [16, 32, 48, 180, 192, 512];
  const pngs = {};

  for (const size of sizes) {
    console.log(`Resampling bird to ${size}x${size}...`);
    const rawRgba = resampleBirdToSquare(src, size);
    const pngBuffer = encodePng(size, size, rawRgba);
    pngs[size] = pngBuffer;
    console.log(`  Done: ${pngBuffer.length} bytes`);
  }

  // Create multi-resolution ICO (16x16, 32x32, 48x48)
  const icoBuffer = createIco([
    { size: 16, buffer: pngs[16] },
    { size: 32, buffer: pngs[32] },
    { size: 48, buffer: pngs[48] }
  ]);
  console.log(`Multi-res ICO created: ${icoBuffer.length} bytes`);

  // Target destinations
  const publicDir = path.join(projectRoot, 'public');
  const appDir = path.join(projectRoot, 'src', 'app');

  // 1. In public/
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'icon.png'), pngs[32]);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), pngs[192]);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), pngs[512]);
  fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), pngs[180]);
  console.log('Saved all icons to public/');

  // 2. In src/app/ for Next.js App Router static convention
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'icon.png'), pngs[32]);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), pngs[180]);
  console.log('Saved icons to src/app/');

  console.log('Favicon generation completed successfully!');
}

run();
