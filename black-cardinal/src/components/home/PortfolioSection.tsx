"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, Sparkles, Layers } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  deliverables: string[];
  url?: string;
  isUpcoming?: boolean;
}

const portfolioProjects: PortfolioItem[] = [
  {
    id: "digital-presence-ecosystem",
    title: "Black Cardinal Brand & Digital Architecture",
    category: "Brand Identity & Web Engineering",
    tag: "INTERNAL CASE STUDY",
    description:
      "A complete digital marketing agency identity system, Next.js web application, and interactive client communication platform engineered from the ground up.",
    deliverables: ["Brand Identity", "Next.js Architecture", "Design System", "Interactive Tools"],
  },
  {
    id: "nfc-google-review-showcase",
    title: "NFC Local Review Touchpoint Systems",
    category: "Google Business & NFC Technology",
    tag: "PRODUCT SOLUTION",
    description:
      "Physical-to-digital contactless review touchpoints designed to reduce customer friction and strengthen local search authority for modern businesses.",
    deliverables: ["Hardware Integration", "Review Funnels", "Brand Artwork", "Local SEO"],
    url: "/services/nfc-google-review-solutions",
  },
  {
    id: "growth-partnership-slot",
    title: "Your Brand's Growth Story",
    category: "Strategy, Design & Scaled Marketing",
    tag: "NEXT ENGAGEMENT",
    description:
      "We partner with ambitious founders to build commanding brands, conversion-focused websites, and structured multi-channel marketing campaigns.",
    deliverables: ["Comprehensive Audit", "Custom Strategy", "Creative Direction", "Measurable Growth"],
    url: "/contact",
    isUpcoming: true,
  },
];

export function PortfolioSection() {
  return (
    <section className="portfolio-section" id="work" aria-labelledby="portfolio-heading">
      <div className="portfolio-inner">
        {/* Header */}
        <div className="portfolio-header">
          <motion.div
            className="section-label-wrap"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">SELECTED WORK</span>
          </motion.div>

          <motion.h2
            id="portfolio-heading"
            className="portfolio-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            Ideas Into <span className="text-accent-red">Experiences.</span>
          </motion.h2>

          <motion.p
            className="portfolio-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          >
            A selective look at our strategic craft, digital solutions, and creative execution.
            Every project is engineered with purpose and honest transparency.
          </motion.p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="portfolio-grid">
          {portfolioProjects.map((item, index) => (
            <motion.article
              key={item.id}
              className={`portfolio-card${item.isUpcoming ? " portfolio-card--upcoming" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                ease: EASE,
                delay: 0.15 + index * 0.12,
              }}
            >
              {/* Card visual frame */}
              <div className="portfolio-card-frame" aria-hidden="true">
                <div className="portfolio-card-grid-pattern" />
                <div className="portfolio-card-glow" />

                <div className="portfolio-card-center-icon">
                  {item.isUpcoming ? (
                    <Sparkles size={36} strokeWidth={1.4} className="portfolio-icon-accent" />
                  ) : index === 0 ? (
                    <Layers size={36} strokeWidth={1.4} className="portfolio-icon-accent" />
                  ) : (
                    <FolderGit2 size={36} strokeWidth={1.4} className="portfolio-icon-accent" />
                  )}
                </div>

                <div className="portfolio-badge-row">
                  <span className="portfolio-badge">{item.tag}</span>
                </div>
              </div>

              {/* Card content */}
              <div className="portfolio-card-body">
                <span className="portfolio-category">{item.category}</span>
                <h3 className="portfolio-card-title">{item.title}</h3>
                <p className="portfolio-card-desc">{item.description}</p>

                {/* Deliverables pill tags */}
                <div className="portfolio-tags-list">
                  {item.deliverables.map((deliv) => (
                    <span key={deliv} className="portfolio-pill">
                      {deliv}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                {item.url && (
                  <Link
                    href={item.url}
                    className="portfolio-action-link"
                    aria-label={`Explore ${item.title}`}
                  >
                    <span>{item.isUpcoming ? "Start Your Project" : "Explore Case Study"}</span>
                    <ArrowUpRight size={16} strokeWidth={2.2} />
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

