"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fingerprint, Monitor, Share2, Search, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Discipline = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const disciplines: Discipline[] = [
  {
    icon: Fingerprint,
    title: "Brand Identity",
    desc: "A distinctive visual and verbal identity system that makes you instantly recognizable.",
  },
  {
    icon: Monitor,
    title: "Website Experience",
    desc: "Lightning-fast, high-converting digital storefronts that turn visitors into clients.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Consistent, narrative-driven content that builds an engaged, loyal community.",
  },
  {
    icon: Search,
    title: "Search Visibility",
    desc: "Advanced technical SEO and authoritative content that dominates organic search.",
  },
  {
    icon: TrendingUp,
    title: "Digital Campaigns",
    desc: "Targeted paid and organic campaigns engineered to maximize return on ad spend.",
  },
  {
    icon: Users,
    title: "Customer Engagement",
    desc: "Frictionless review systems and NFC touchpoints that convert clients into brand advocates.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.08 },
  }),
};

export function ApproachSection() {
  return (
    <section className="approach-section" id="approach" aria-labelledby="approach-heading">
      <div className="approach-inner">
        {/* Header */}
        <div className="approach-hd">
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">OUR STRATEGIC APPROACH</span>
          </div>
          <h2 className="approach-title" id="approach-heading">
            Six Disciplines.{" "}
            <span className="approach-title-accent">One Cohesive Direction.</span>
          </h2>
          <p className="approach-subtitle">
            Every service we deliver connects to a singular, overarching strategy — built to make
            your brand impossible to ignore.
          </p>
        </div>

        {/* Hub-and-Spoke Grid */}
        <div className="approach-layout">
          {/* Left column */}
          <div className="approach-col">
            {disciplines.slice(0, 3).map((d, i) => (
              <motion.div
                key={d.title}
                className="approach-card"
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className="approach-card-icon" aria-hidden="true">
                  <d.icon size={22} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="approach-card-title">{d.title}</h3>
                  <p className="approach-card-desc">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Hub */}
          <div className="approach-hub" aria-hidden="true">
            <div className="approach-hub-ring approach-hub-ring--outer" />
            <div className="approach-hub-ring approach-hub-ring--inner" />
            <div className="approach-hub-core">
              <Image
                src="/images/cardinal-bird.png"
                alt=""
                width={38}
                height={32}
                className="approach-hub-bird"
              />
              <div className="approach-hub-brand-wrap">
                <span className="approach-hub-brand">BLACK</span>
                <span className="approach-hub-brand approach-hub-brand--bold">CARDINAL</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="approach-col">
            {disciplines.slice(3).map((d, i) => (
              <motion.div
                key={d.title}
                className="approach-card approach-card--right"
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                custom={i + 3}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className="approach-card-icon" aria-hidden="true">
                  <d.icon size={22} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="approach-card-title">{d.title}</h3>
                  <p className="approach-card-desc">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
