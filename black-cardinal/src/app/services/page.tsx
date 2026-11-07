import type { Metadata } from "next";
import { services } from "@/config/services";
import { ServicesPageClient } from "@/components/services/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services — Digital Solutions & Creative Thinking",
  description:
    "Explore digital marketing, social media, SEO, website development, branding and local growth solutions from Black Cardinal.",
};

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}
