"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CtaSection() {
  return (
    <section className="cta-section" id="cta" aria-labelledby="cta-heading">
      {/* Background ambient lighting and orbital glow */}
      <div className="cta-glow" aria-hidden="true" />
      <div className="cta-grid-pattern" aria-hidden="true" />

      <div className="cta-inner">
        <motion.p
          className="cta-eyebrow"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          YOUR NEXT MOVE
        </motion.p>

        <motion.h2
          id="cta-heading"
          className="cta-headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
        >
          Ready to Build Something <span className="text-accent-red">Remarkable?</span>
        </motion.h2>

        <motion.p
          className="cta-subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          Let&apos;s discuss your vision and explore how Black Cardinal can help strengthen your digital presence.
        </motion.p>

        <motion.div
          className="cta-actions-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
        >
          <Link href="/contact" className="btn-primary cta-btn">
            <span>Start a Conversation</span>
            <ArrowUpRight size={18} strokeWidth={2.4} />
          </Link>
        </motion.div>

        <motion.p
          className="cta-secondary-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
        >
          No commitment. Just an honest conversation about what is possible.
        </motion.p>
      </div>
    </section>
  );
}
