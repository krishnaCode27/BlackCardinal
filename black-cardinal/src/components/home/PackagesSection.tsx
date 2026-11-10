"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { packages, packagesConfig } from "@/data/packages";
import styles from "./packages-section.module.css";

const WHATSAPP_NUMBER = "917067492239";

function packageWhatsAppUrl(name: string, price: number) {
  const formattedPrice = price.toLocaleString("en-IN");
  const message = `Hi Black Cardinal, I want the ${name} plan (₹${formattedPrice}). My business name is: `;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function PackagesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="packages" aria-labelledby="packages-heading" className={styles.section}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">SIMPLE, CLEAR PRICING</span>
          </div>
          <h2 id="packages-heading" className={styles.heading}>Simple packages for local businesses</h2>
          <p className={styles.subheading}>Pick a plan, pay once, and get a clear delivery date.</p>
          <p className={styles.slotsNote}>{packagesConfig.slotsNote}</p>
        </motion.header>

        <div className={styles.grid}>
          {packages.map((plan, index) => {
            const isGrowth = plan.id === "growth";
            const isComplete = plan.id === "complete";
            return (
              <motion.article
                key={plan.id}
                className={`${styles.card} ${isGrowth ? styles.growth : isComplete ? styles.complete : styles.starter}`}
                aria-labelledby={`${plan.id}-heading`}
                initial={reducedMotion ? false : { opacity: 0, filter: "blur(5px)" }}
                whileInView={reducedMotion ? undefined : { opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : index * 0.1 }}
              >
                {plan.badge && <span className={`${styles.badge} ${plan.highlight ? styles.popularBadge : styles.valueBadge}`}>{plan.badge}</span>}
                <div>
                  <h3 id={`${plan.id}-heading`} className={styles.planName}>{plan.name}</h3>
                  <p className={styles.tagline}>{plan.tagline}</p>
                  <p className={styles.price}>
                    <span className={styles.currency}>₹</span>{plan.price.toLocaleString("en-IN")}
                  </p>
                  <p className={styles.duration}>Delivery in {plan.duration}</p>
                </div>

                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={packageWhatsAppUrl(plan.name, plan.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.cta} ${plan.highlight ? styles.ctaPrimary : ""}`}
                  aria-label={`${plan.cta} via WhatsApp`}
                >
                  {plan.cta}
                </a>

                <div className={styles.bonus}>
                  <span className={styles.bonusLabel}>Free bonus</span>
                  <span>{plan.bonus}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className={styles.notes}>
          <p><strong>Not included:</strong> Paid ads, reel shoots, ongoing SEO, and domain/hosting costs are not included.</p>
          <p>Payment is taken before work starts. We need your photos and business details within 2 days to keep the timeline.</p>
          <p className={styles.honestNote}>Results depend on your industry, competition and effort.</p>
        </div>

        <p className={styles.customQuote}>Need ads, SEO or something bigger? <Link href="/contact#contact-form">Ask for a custom quote.</Link></p>
        <p className={styles.auditLink}>Not sure which plan? <Link href="/contact#contact-form">Get a free audit</Link></p>
      </div>
    </section>
  );
}
