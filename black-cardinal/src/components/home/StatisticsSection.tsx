"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { statisticsConfig, type BusinessStatistic } from "@/config/statistics";

const EASE = [0.22, 1, 0.36, 1] as const;

function StatCounter({
  target,
  isInView,
  shouldReduceMotion,
}: {
  target: number;
  isInView: boolean;
  shouldReduceMotion: boolean | null;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !isInView) return;

    if (shouldReduceMotion) {
      node.textContent = String(target);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        node.textContent = String(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [isInView, target, shouldReduceMotion]);

  return (
    <span ref={nodeRef} className="stat-number-val">
      {shouldReduceMotion ? target : 0}
    </span>
  );
}

export function StatisticsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={containerRef}
      className="stats-section"
      id="metrics"
      aria-labelledby="stats-heading"
    >
      <div className="stats-inner">
        {/* Section Header */}
        <div className="stats-header">
          <motion.div
            className="section-label-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">{statisticsConfig.eyebrow}</span>
          </motion.div>

          <motion.h2
            id="stats-heading"
            className="stats-title"
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            {statisticsConfig.heading}
          </motion.h2>

          <motion.p
            className="stats-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          >
            {statisticsConfig.description}
          </motion.p>
        </div>

        {/* 3-Column Statistics Grid */}
        <div className="stats-grid">
          {statisticsConfig.items.map((stat: BusinessStatistic, index: number) => (
            <motion.div
              key={stat.id}
              className="stat-card"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: 0.2 + index * 0.12,
              }}
            >
              {/* Top Accent hairline */}
              <div className="stat-card-accent" aria-hidden="true" />

              <div className="stat-card-header">
                <span className="stat-order">{stat.order}</span>
                <span className="stat-dot" aria-hidden="true" />
              </div>

              {/* Exact Counter Display — NO plus sign */}
              <div className="stat-value-wrap">
                <StatCounter
                  target={stat.value}
                  isInView={isInView}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>

              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-card-desc">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
