import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Black Cardinal - Digital Marketing Agency Morena. Lead Without Following.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/images/cardinal-bird.png"));
  const logoData = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "80px",
        background: "#08090B",
        color: "#F5F5F5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 910 }}>
        <img src={logoData} width={140} height={116} alt="" />
        <div style={{ display: "flex", color: "#E32636", fontSize: 22, fontWeight: 700, letterSpacing: 6 }}>
          BLACK CARDINAL
        </div>
        <div style={{ display: "flex", fontSize: 54, fontWeight: 700, lineHeight: 1.12 }}>
          Digital Marketing Agency in Morena
        </div>
        <div style={{ display: "flex", color: "#A5A5A5", fontSize: 28 }}>
          Lead Without Following
        </div>
      </div>
    </div>,
    size,
  );
}
