"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Founder {
  name: string;
  role: string;
  tag: string;
  initials: string;
}

const founders: Founder[] = [
  {
    name: "Krishna Gupta",
    role: "CO-FOUNDER",
    tag: "BC / FOUNDER — 01",
    initials: "KG",
  },
  {
    name: "Prem Gupta",
    role: "CO-FOUNDER",
    tag: "BC / FOUNDER — 02",
    initials: "PG",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function FoundersSection() {
  return (
    <section className="founders-section" id="founders" aria-labelledby="founders-heading">
      <div className="founders-inner">
        {/* Header */}
        <div className="founders-header">
          <motion.div
            className="section-label-wrap"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">LEADERSHIP &amp; VISION</span>
          </motion.div>

          <motion.h2
            id="founders-heading"
            className="founders-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            THE PEOPLE BEHIND THE VISION.
          </motion.h2>

          <motion.p
            className="founders-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          >
            Built Together. Driven by Vision.
          </motion.p>

          <motion.p
            className="founders-narrative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          >
            &ldquo;Black Cardinal was founded by Krishna Gupta and Prem Gupta with
            a shared vision to build a creative digital agency that brings strategy,
            design and technology together. Their focus is on helping businesses
            build a stronger digital presence through thoughtful branding and
            meaningful digital experiences.&rdquo;
          </motion.p>
        </div>

        {/* Two-Column Founder Cards Grid */}
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              className="founder-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 + index * 0.15 }}
            >
              {/* Elegant Abstract Editorial Visual Frame */}
              <div className="founder-visual-frame" aria-hidden="true">
                <div className="founder-visual-bg-grid" />
                <div className="founder-visual-glow" />

                {/* Cardinal brand emblem watermark */}
                <div className="founder-visual-watermark">
                  <Image
                    src="/images/cardinal-bird.png"
                    alt=""
                    width={180}
                    height={150}
                    className="founder-watermark-bird"
                  />
                </div>

                {/* Monogram emblem */}
                <div className="founder-monogram-badge">
                  <span className="founder-monogram-text">{founder.initials}</span>
                </div>

                {/* Corner crosshair accents */}
                <span className="founder-frame-corner top-left" />
                <span className="founder-frame-corner top-right" />
                <span className="founder-frame-corner bottom-left" />
                <span className="founder-frame-corner bottom-right" />

                {/* Tag */}
                <div className="founder-visual-tag">
                  <span>{founder.tag}</span>
                </div>
              </div>

              {/* Founder Information */}
              <div className="founder-info">
                <div className="founder-role-row">
                  <span className="founder-role-indicator" aria-hidden="true" />
                  <span className="founder-role">{founder.role}</span>
                </div>
                <h3 className="founder-name">{founder.name}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

