import type { MetadataRoute } from "next";
import { services } from "@/config/services";
const base = "https://blackcardinal.in";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/contact", "/work", "/influencers", ...services.map(s => `/services/${s.slug}`)];
  return pages.map(path => ({ url: `${base}${path}`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: path === "" ? 1 : path === "/work" ? 0.9 : 0.7 }));
}
