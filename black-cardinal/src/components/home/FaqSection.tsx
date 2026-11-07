"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What services does Black Cardinal provide?",
    answer:
      "Black Cardinal provides an interconnected suite of 7 digital agency services: Digital Marketing Strategy, Social Media Marketing, Search Engine Optimization (SEO), Website Development, Branding & Graphic Design, Google Business Profile management, and NFC Google Review Solutions. Each service is tailored to deliver purposeful, long-term brand impact.",
  },
  {
    question: "How can I start working with Black Cardinal?",
    answer:
      "Starting is simple: submit an inquiry through our Contact page or message our co-founders directly on WhatsApp. We begin with a brief discovery conversation to understand your business objectives, target audience, and current challenges before proposing a structured strategy.",
  },
  {
    question: "Does Black Cardinal provide website development?",
    answer:
      "Yes. We design and build modern, high-speed, fully responsive websites using modern frontend technologies like Next.js, React, and Tailwind CSS. Every website we create focuses on intuitive information architecture, accessibility, fast Core Web Vitals, and conversion pathways.",
  },
  {
    question: "Can I choose individual services?",
    answer:
      "Absolutely. While our services work synergistically as an integrated growth ecosystem, you can engage us for individual services—such as website development, SEO optimization, or branding—based on your immediate priorities and budget.",
  },
  {
    question: "How can I discuss my project?",
    answer:
      "You can discuss your project through a scheduled introductory call, via email, or directly via WhatsApp with our co-founders Krishna Gupta or Prem Gupta. We review your requirements and provide realistic recommendations with complete transparency.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "You can reach our team directly using the floating WhatsApp button at the bottom-right of the screen (+91 70674 92239 or +91 877 095 7964), by emailing hello@yourdomain.com, or by filling out the project questionnaire on our Contact page.",
  },
];

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
            Everything you need to know about partnering with Black Cardinal, our services,
            and our collaborative approach.
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
                    <ChevronDown
                      size={18}
                      className={`faq-arrow${isOpen ? " open" : ""}`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                    >
                      <div className="faq-answer-inner">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
