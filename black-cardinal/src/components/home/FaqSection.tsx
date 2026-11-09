"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/config/faqs";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="faq-inner">
        <div className="faq-hd">
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">CLARITY &amp; TRANSPARENCY</span>
          </div>
          <h2 className="faq-title" id="faq-heading">
            Frequently Asked <span className="text-accent-red">Questions.</span>
          </h2>
          <p className="faq-subtitle">
            Answers about digital marketing, SEO and working with Black Cardinal in Morena.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-bubble" aria-hidden="true">
                    <ChevronDown size={18} className={`faq-arrow${isOpen ? " open" : ""}`} />
                  </span>
                </button>

                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  aria-hidden={!isOpen}
                  className="faq-answer"
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.32, ease: EASE }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="faq-answer-inner">{faq.answer}</div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
