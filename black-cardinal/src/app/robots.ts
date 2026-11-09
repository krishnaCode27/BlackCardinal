import type { MetadataRoute } from "next";
const base = "https://blackcardinal.in";
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${base}/sitemap.xml` };
}
