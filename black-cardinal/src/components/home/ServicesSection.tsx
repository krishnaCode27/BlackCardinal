"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  Share2,
  Search,
  Monitor,
  Palette,
  MapPin,
  Nfc,
  Megaphone,
  ArrowUpRight,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/config/services";

type ServiceIconKey =
  | "digital-marketing"
  | "social-media-marketing"
  | "influencer-marketing"
  | "seo"
  | "website-development"
  | "branding-graphic-design"
  | "google-business-profile"
  | "nfc-google-review-solutions";

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  "digital-marketing": TrendingUp,
  "social-media-marketing": Share2,
  "influencer-marketing": Megaphone,
  seo: Search,
  "website-development": Monitor,
  "branding-graphic-design": Palette,
  "google-business-profile": MapPin,
  "nfc-google-review-solutions": Nfc,
};

const SERVICE_TAGS: Record<ServiceIconKey, string[]> = {
  "digital-marketing": ["Strategy", "Campaigns", "Analytics"],
  "social-media-marketing": ["Instagram", "Facebook", "Content"],
  "influencer-marketing": ["Creators", "Campaigns", "Partnerships"],
  seo: ["On-page SEO", "Technical", "Local SEO"],
  "website-development": ["Web Design", "Development", "Performance"],
  "branding-graphic-design": ["Brand Identity", "Logo", "Creatives"],
  "google-business-profile": ["Local SEO", "Maps", "Reviews"],
  "nfc-google-review-solutions": ["NFC", "Reviews", "Customer Journey"],
};

const EASE = [0.22, 1, 0.36, 1] as const;

const headerVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function ServicesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-inner services-layout">
        <motion.div
          className="services-hd"
          variants={headerVariant}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">WHAT WE DO</span>
          </div>
          <h2 className="services-title" id="services-heading">
            Everything Your Brand{" "}
            <span className="services-title-accent">Needs to Grow.</span>
          </h2>
          <p className="services-subtitle">
            Influencer campaigns, SEO, social media marketing, website development, branding and local search support for businesses in Morena and Gwalior.
          </p>
          <span className="services-heading-rule" aria-hidden="true" />
        </motion.div>

        <section className="services-directory" aria-label="Explore our services">
          {services.map((service, i) => {
            const IconComp = SERVICE_ICONS[service.slug as ServiceIconKey] ?? TrendingUp;
            const tags = SERVICE_TAGS[service.slug as ServiceIconKey] ?? [];
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.details
                key={service.slug}
                className="svc-row"
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: reducedMotion ? 0 : 0.45, ease: EASE, delay: reducedMotion ? 0 : i * 0.055 }}
              >
                <summary className="svc-summary">
                  <span className="svc-number">{num}</span>
                  <span className="svc-icon-wrap" aria-hidden="true">
                    <IconComp size={19} strokeWidth={1.7} />
                  </span>
                  <span className="svc-summary-copy">
                    <span className="svc-title">{service.title}</span>
                    <span className="svc-desc">{service.short}</span>
                  </span>
                  <ChevronDown size={18} className="svc-chevron" aria-hidden="true" />
                </summary>
                <div className="svc-detail">
                  <p className="svc-example"><strong>Example:</strong> {service.example}</p>
                  <div className="svc-tags">
                    {tags.map((tag) => <span key={tag} className="svc-tag">{tag}</span>)}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="svc-link"
                    aria-label={`Explore ${service.title}`}
                  >
                    <span>Explore service</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </motion.details>
            );
          })}
        </section>
      </div>
    </section>
  );
}
