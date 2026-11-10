"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understand the business, audience and objectives.",
  },
  {
    num: "02",
    title: "STRATEGIZE",
    desc: "Build a practical strategy around the requirements.",
  },
  {
    num: "03",
    title: "CREATE",
    desc: "Develop the creative and digital experience.",
  },
  {
    num: "04",
    title: "GROW",
    desc: "Improve, measure and refine the digital presence.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProcessSection() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-heading">
      <div className="process-inner">
        <motion.div
          className="process-hd"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">OUR PROCESS</span>
          </div>
          <h2 className="process-title" id="process-heading">
            From Vision to <span className="process-title-accent">Digital Impact.</span>
          </h2>
          <p className="process-subtitle">
            A transparent, disciplined framework engineered around your business goals.
          </p>
        </motion.div>

        <motion.ol
          className="process-steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, i) => (
            <motion.li
              key={step.num}
              className="process-step"
              variants={{
                hidden: { opacity: 0, y: 34, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.13 }}
            >
              <div className="process-step-top">
                <span className="process-num">{step.num}</span>
                <span className="process-step-count">STEP {step.num} / 04</span>
                <span className="process-step-icon" aria-hidden="true">
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </span>
              </div>
              <div className="process-step-body">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
              <div className="process-step-track" aria-hidden="true">
                <span style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
