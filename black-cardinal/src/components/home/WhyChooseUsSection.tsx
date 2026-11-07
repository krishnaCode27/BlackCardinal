"use client";

import { motion } from "framer-motion";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";

const EASE = [0.22, 1, 0.36, 1] as const;

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
            <span className="section-label">WHY BLACK CARDINAL</span>
          </motion.div>

          <motion.h2
            id="why-choose-heading"
            className="why-choose-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            Why Brands Choose <span className="text-accent-red">Black Cardinal</span>
          </motion.h2>

          <motion.p
            className="why-choose-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          >
            We bring strategy, creativity and technology together to help businesses
            build a stronger digital presence.
          </motion.p>
        </div>

        {/* Aceternity UI Glowing Effect Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
        >
          <GlowingEffectDemo />
        </motion.div>
      </div>
    </section>
  );
}
