"use client";

import { useEffect, useRef } from "react";
import { statisticsConfig, type BusinessStatistic } from "@/config/statistics";

/**
 * Smooth Quartic Out Easing:
 * Produces an ultra-luxurious, natural deceleration curve
 */
function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

export function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const animStartedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || animStartedRef.current) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReduced = mediaQuery.matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animStartedRef.current) {
          animStartedRef.current = true;
          observer.disconnect(); // Runs only once! Never restarts on scroll away

          // Reveal section header
          if (headerRef.current) {
            headerRef.current.classList.add("is-revealed");
          }

          // Animate each stat card independently with staggered entrance
          statisticsConfig.items.forEach((stat, index) => {
            const card = cardRefs.current[index];
            const numEl = numRefs.current[index];
            const dotEl = dotRefs.current[index];
            if (!card || !numEl) return;

            // Reveal card
            card.classList.add("is-revealed");

            if (isReduced) {
              numEl.textContent = String(stat.value);
              numEl.style.opacity = "1";
              numEl.style.transform = "scale(1)";
              numEl.style.filter = "none";
              card.classList.add("is-complete");
              if (dotEl) dotEl.classList.add("is-active");
              return;
            }

            // Staggered delay: 0ms, 220ms, 440ms
            const staggerDelay = index * 220;
            const duration = 1750; // 1.75s animation

            setTimeout(() => {
              const targetCard = card;
              const targetNum = numEl;
              const targetDot = dotEl;
              if (!targetCard || !targetNum) return;

              let startTime: number | null = null;

              function step(now: number) {
                if (!startTime) startTime = now;
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeOutQuart(progress);

                // Compute exact integer count
                const currentInt = Math.min(
                  stat.value,
                  Math.round(eased * stat.value)
                );
                targetNum.textContent = String(currentInt);

                // Subtle scale-up and fade-in while counting
                const currentScale = (0.88 + 0.12 * eased).toFixed(3);
                const currentOpacity = (0.35 + 0.65 * eased).toFixed(3);
                const currentBlur = Math.max(0, (1 - eased) * 4).toFixed(2);

                targetNum.style.transform = `scale(${currentScale})`;
                targetNum.style.opacity = currentOpacity;
                targetNum.style.filter = `blur(${currentBlur}px)`;

                if (progress < 1) {
                  requestAnimationFrame(step);
                } else {
                  // Strictly lock final exact values
                  targetNum.textContent = String(stat.value);
                  targetNum.style.transform = "scale(1)";
                  targetNum.style.opacity = "1";
                  targetNum.style.filter = "none";
                  targetCard.classList.add("is-complete");
                  if (targetDot) targetDot.classList.add("is-active");
                }
              }

              requestAnimationFrame(step);
            }, staggerDelay);
          });
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stats-section"
      id="metrics"
      aria-labelledby="stats-heading"
    >
      <div className="stats-inner">
        {/* Section Header */}
        <div ref={headerRef} className="stats-header">
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">{statisticsConfig.eyebrow}</span>
          </div>

          <h2 id="stats-heading" className="stats-title">
            {statisticsConfig.heading}
          </h2>

          <p className="stats-desc">{statisticsConfig.description}</p>
        </div>

        {/* 3-Column Statistics Grid with Staggered Count-Up */}
        <div className="stats-grid">
          {statisticsConfig.items.map((stat: BusinessStatistic, index: number) => (
            <article
              key={stat.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="stat-card"
              style={{
                transitionDelay: `${index * 220}ms`,
              }}
              aria-label={`${stat.label}: ${stat.value}`}
            >
              {/* Top red accent hairline */}
              <div className="stat-card-accent" aria-hidden="true" />

              {/* Card Header: Order tag & indicator */}
              <div className="stat-card-header">
                <span className="stat-order">{stat.order}</span>
                <span
                  ref={(el) => {
                    dotRefs.current[index] = el;
                  }}
                  className="stat-dot"
                  aria-hidden="true"
                />
              </div>

              {/* Exact Counter Display — NO plus sign */}
              <div className="stat-value-wrap">
                <span
                  ref={(el) => {
                    numRefs.current[index] = el;
                  }}
                  className="stat-number-val"
                >
                  0
                </span>
              </div>

              {/* Exact Label */}
              <h3 className="stat-label">{stat.label}</h3>

              {/* Description */}
              <p className="stat-card-desc">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
