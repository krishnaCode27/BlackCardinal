"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We start by analyzing your business model, audience psychographics, and competitor landscape. Rigorous discovery and honest dialogue shape our baseline.",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "With deep clarity in hand, we map out target channels, positioning, messaging hierarchy, and measurable growth benchmarks.",
  },
  {
    num: "03",
    title: "Create & Deploy",
    desc: "Strategy turns into high-fidelity execution. We design brand identities, develop high-speed web experiences, and launch focused marketing campaigns.",
  },
  {
    num: "04",
    title: "Optimize & Scale",
    desc: "We analyze performance signals, track customer journey data, and continuously optimize campaigns for compounding market returns.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProcessSection() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-heading">
      <div className="process-inner">
        {/* Header */}
        <div className="process-hd">
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">OUR PROCESS</span>
          </div>
          <h2 className="process-title" id="process-heading">
            How We <span className="process-title-accent">Work.</span>
          </h2>
          <p className="process-subtitle">
            A transparent, disciplined framework engineered around your business goals.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.12 }}
            >
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="process-connector" aria-hidden="true" />
              )}

              {/* Step indicator dot */}
              <div className="process-dot-wrap" aria-hidden="true">
                <div className="process-dot" />
              </div>

              {/* Step content */}
              <div
                className={`process-step-body ${
                  i % 2 === 1 ? "process-step-body--below" : ""
                }`}
              >
                <span className="process-num">{step.num}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
