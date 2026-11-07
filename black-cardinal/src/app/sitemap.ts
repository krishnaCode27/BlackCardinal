import type { MetadataRoute } from "next";
import { services } from "@/config/services";
const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/contact", ...services.map(s => `/services/${s.slug}`)];
  return pages.map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
