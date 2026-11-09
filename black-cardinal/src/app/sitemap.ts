import type { MetadataRoute } from "next";
import { services } from "@/config/services";
const base = "https://blackcardinal.in";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/contact", ...services.map(s => `/services/${s.slug}`)];
  return pages.map(path => ({ url: `${base}${path}`, lastModified: new Date("2026-11-09"), changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
