"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Share2,
  Search,
  Monitor,
  Palette,
  MapPin,
  Nfc,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/config/services";

type ServiceIconKey =
  | "digital-marketing"
  | "social-media-marketing"
  | "seo"
  | "website-development"
  | "branding-graphic-design"
  | "google-business-profile"
  | "nfc-google-review-solutions";

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  "digital-marketing": TrendingUp,
  "social-media-marketing": Share2,
  seo: Search,
  "website-development": Monitor,
  "branding-graphic-design": Palette,
  "google-business-profile": MapPin,
  "nfc-google-review-solutions": Nfc,
};

const SERVICE_TAGS: Record<ServiceIconKey, string[]> = {
  "digital-marketing": ["Strategy", "Campaigns", "Analytics"],
  "social-media-marketing": ["Instagram", "Facebook", "Content"],
  seo: ["On-page SEO", "Technical", "Local SEO"],
  "website-development": ["Web Design", "Development", "Performance"],
  "branding-graphic-design": ["Brand Identity", "Logo", "Creatives"],
  "google-business-profile": ["Local SEO", "Maps", "Reviews"],
  "nfc-google-review-solutions": ["NFC", "Reviews", "Customer Journey"],
};

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.07 },
  }),
};

export function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-inner">
        {/* Header */}
        <div className="services-hd">
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">WHAT WE DO</span>
          </div>
          <h2 className="services-title" id="services-heading">
            Everything Your Brand{" "}
            <span className="services-title-accent">Needs to Grow.</span>
          </h2>
          <p className="services-subtitle">
            A cohesive suite of strategic, creative, and digital services built to help your
            business scale with authority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid-new">
          {services.map((service, i) => {
            const IconComp = SERVICE_ICONS[service.slug as ServiceIconKey] ?? TrendingUp;
            const tags = SERVICE_TAGS[service.slug as ServiceIconKey] ?? [];
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.article
                key={service.slug}
                className="svc-card"
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className="svc-card-top">
                  <span className="svc-number">{num}</span>
                  <span className="svc-icon-wrap" aria-hidden="true">
                    <IconComp size={20} strokeWidth={1.6} />
                  </span>
                </div>

                <h3 className="svc-title">{service.title}</h3>
                <p className="svc-desc">{service.short}</p>

                <div className="svc-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="svc-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="svc-link"
                  aria-label={`Explore ${service.title}`}
                >
                  <span>Explore service</span>
                  <ArrowUpRight size={14} className="svc-link-arrow" aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
