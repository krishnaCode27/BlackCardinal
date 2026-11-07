"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Layers, Handshake } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const reasons = [
  {
    num: "01",
    title: "STRATEGY FIRST",
    desc: "Every digital decision starts with understanding the business, audience and objectives.",
    icon: Compass,
  },
  {
    num: "02",
    title: "CREATIVE EXECUTION",
    desc: "Thoughtful design and creative ideas that make brands memorable.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "CONNECTED DIGITAL SERVICES",
    desc: "Branding, websites, social media and digital marketing working together.",
    icon: Layers,
  },
  {
    num: "04",
    title: "TRANSPARENT COLLABORATION",
    desc: "Clear communication, realistic expectations and a collaborative process.",
    icon: Handshake,
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      className="why-choose-section"
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
    >
      <div className="why-choose-inner">
        {/* Header */}
        <div className="why-choose-header">
          <motion.div
            className="section-label-wrap"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">THE BLACK CARDINAL ADVANTAGE</span>
          </motion.div>

          <motion.h2
            id="why-choose-heading"
            className="why-choose-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            Why Brands Choose <span className="text-accent-red">Black Cardinal.</span>
          </motion.h2>

          <motion.p
            className="why-choose-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          >
            We focus on principled strategy, authentic craft, and measurable digital foundations
            that elevate brands with clarity and purpose.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="why-choose-grid">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.num}
                className="why-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: 0.15 + index * 0.1,
                }}
              >
                <div className="why-card-top">
                  <span className="why-card-num">{item.num}</span>
                  <div className="why-card-icon-wrap" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>

                <div className="why-card-corner" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

