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
      "We offer a connected range of digital marketing services including Digital Marketing Strategy, Social Media Marketing, SEO, Website Development, Branding & Graphic Design, Google Business Profile management, and NFC Google Review Solutions. Each service can be engaged individually or as part of a broader program.",
  },
  {
    question: "How does your process work?",
    answer:
      "We follow a four-stage process: Discover (understanding your business and audience), Strategize (developing a clear direction), Create (building the brand experience and campaigns), and Grow (measuring performance and improving the approach). We collaborate closely with you at every stage.",
  },
  {
    question: "Can I choose individual services?",
    answer:
      "Yes. You can engage any individual service based on your current needs and priorities. We'll help you understand which services might work best together for your specific situation.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with businesses across different sizes and stages. What matters most is your commitment to building a stronger digital presence, not the size of your business.",
  },
  {
    question: "How can I start a project?",
    answer:
      "The best way to start is with a conversation. Use the enquiry form on our Contact page or send us an email. We'll ask a few questions about your goals and find out how we might help.",
  },
  {
    question: "How do I contact your team?",
    answer:
      "You can reach us by email at the address listed in our Contact page. We'll respond using your preferred contact method.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <div className="section-header">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button
                  className="faq-trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`faq-arrow${isOpen ? " open" : ""}`}
                  />
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
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
