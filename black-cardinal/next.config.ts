import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async rewrites() {
    return [{ source: "/card", destination: "/card/index.html" }];
  },
};

export default nextConfig;
