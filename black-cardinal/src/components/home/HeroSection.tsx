"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay },
  }),
};

export function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-label="Black Cardinal Hero">
      {/* Background ambient elements */}
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-bg-glow" aria-hidden="true" />

      <div className="hero-inner">
        {/* ── Left: Editorial Hero Content ── */}
        <div className="hero-content-col">
          <motion.div
            className="section-label-wrap"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.08}
          >
            <span className="section-label-bar" aria-hidden="true" />
            <span className="hero-eyebrow">INDEPENDENT DIGITAL MARKETING AGENCY</span>
          </motion.div>

          <motion.h1
            className="hero-headline"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            Make Your Brand
            <br />
            <span className="hero-headline-accent">Impossible</span> to Ignore.
          </motion.h1>

          <motion.p
            className="hero-body"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.34}
          >
            We bring strategy, creativity and technology together to help businesses
            build a stronger digital presence, connect with their audience and grow
            with purpose.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.48}
          >
            <Link href="/contact" className="btn-primary hero-btn-cta">
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={17} strokeWidth={2.4} className="hero-btn-arrow" />
            </Link>
            <Link href="#services" className="btn-outline hero-btn-secondary">
              <span>Explore Our Services</span>
              <ArrowUpRight size={16} strokeWidth={2} className="hero-btn-arrow" />
            </Link>
          </motion.div>

          {/* Quick trust highlights in IBM Plex Mono */}
          <motion.div
            className="hero-badges-row"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
          >
            <div className="hero-badge-item">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">STRATEGY-LED</span>
            </div>
            <div className="hero-badge-sep">/</div>
            <div className="hero-badge-item">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">PERFORMANCE-DRIVEN</span>
            </div>
            <div className="hero-badge-sep">/</div>
            <div className="hero-badge-item">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">FOUNDER-OPERATED</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right: Signature Cardinal Art & Floating Orbitals ── */}
        <motion.div
          className="hero-art-col"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
          aria-hidden="true"
        >
          <div className="hero-art-wrap">
            {/* Orbital rings */}
            <div className="art-orbit art-orbit--outer" />
            <div className="art-orbit art-orbit--inner" />
            <div className="art-orbit art-orbit--dashed" />

            {/* Orbiting accent nodes */}
            <div className="art-orbit-node node-1" />
            <div className="art-orbit-node node-2" />

            {/* Central glowing atmospheric aura */}
            <div className="art-core-glow" />

            {/* Original Cardinal Bird Emblem */}
            <div className="art-bird-container">
              <Image
                src="/images/cardinal-bird.png"
                alt="Black Cardinal emblem"
                width={360}
                height={300}
                className="hero-bird-img"
                priority
              />
            </div>

            {/* Editorial Metadata Label in IBM Plex Mono */}
            <div className="art-meta-label">
              <span className="art-meta-id">BC — 001</span>
              <span className="art-meta-sep">/</span>
              <span className="art-meta-name">THE CARDINAL</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero bottom scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-line-v" />
        <span className="scroll-label">SCROLL TO DISCOVER</span>
      </div>
    </section>
  );
}
