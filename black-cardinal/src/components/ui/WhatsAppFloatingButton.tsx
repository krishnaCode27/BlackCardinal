"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

/**
 * Official WhatsApp SVG Logo Vector
 * Authentic geometry with speech bubble and phone handset
 */
function WhatsAppIcon({
  size = 24,
  className = "",
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const PREFILLED_MESSAGE =
  "Hello Black Cardinal! I would like to connect with your team and discuss your digital marketing services.";

export interface WhatsAppContact {
  id: string;
  name: string;
  designation: string;
  display: string;
  number: string;
  ctaText: string;
  url: string;
}

export const WHATSAPP_CONTACTS: WhatsAppContact[] = [
  {
    id: "whatsapp-krishna",
    name: "Krishna Gupta",
    designation: "Co-Founder",
    display: "+91 70674 92239",
    number: "917067492239",
    ctaText: "Chat with Krishna",
    url: `https://wa.me/917067492239?text=${encodeURIComponent(PREFILLED_MESSAGE)}`,
  },
  {
    id: "whatsapp-prem",
    name: "Prem Gupta",
    designation: "Co-Founder",
    display: "+91 877 095 7964",
    number: "918770957964",
    ctaText: "Chat with Prem",
    url: `https://wa.me/918770957964?text=${encodeURIComponent(PREFILLED_MESSAGE)}`,
  },
];

export function WhatsAppFloatingButton() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const contactSection = document.querySelector("#contact-form");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsContactSectionVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  // Close popup automatically on route changes during render
  if (currentPath !== pathname) {
    setCurrentPath(pathname);
    setIsOpen(false);
  }

  // Close popup handler
  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Toggle popup handler
  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        closePopup();
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closePopup]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        closePopup();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closePopup]);

  // Do not render on admin or authentication pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`wa-float-container${isFooterVisible ? " is-footer-visible" : ""}${isContactSectionVisible ? " is-contact-section-visible" : ""}`}
      aria-label="WhatsApp Contact Widget"
    >
      {/* ── DESKTOP TOOLTIP ── */}
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            className="wa-tooltip"
            role="tooltip"
            id="wa-tooltip"
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 6, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wa-tooltip-header">
              <span className="wa-tooltip-dot" aria-hidden="true" />
              <span className="wa-tooltip-title">LET&apos;S CONNECT</span>
            </div>
            <span className="wa-tooltip-subtitle">Chat with Black Cardinal</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── WHATSAPP CONTACT POPUP ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="wa-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wa-popup-heading"
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top red accent hairline */}
            <div className="wa-popup-accent-bar" aria-hidden="true" />

            {/* Popup Header */}
            <div className="wa-popup-header">
              <div className="wa-popup-brand-row">
                <div className="wa-popup-pill">
                  <WhatsAppIcon size={13} />
                  <span>OFFICIAL CHAT</span>
                </div>
                <button
                  type="button"
                  className="wa-popup-close-btn"
                  onClick={closePopup}
                  aria-label="Close WhatsApp contact popup"
                >
                  <X size={16} />
                </button>
              </div>

              <h3 id="wa-popup-heading" className="wa-popup-title">
                Let&apos;s Connect
              </h3>
              <p className="wa-popup-subtitle">
                Choose who you&apos;d like to connect with.
              </p>
            </div>

            {/* Contact Options Cards */}
            <div className="wa-popup-options">
              {WHATSAPP_CONTACTS.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-contact-card"
                  onClick={closePopup}
                  aria-label={`Chat on WhatsApp with ${contact.name} (${contact.designation}) at ${contact.display}`}
                >
                  <div className="wa-contact-icon-wrap" aria-hidden="true">
                    <WhatsAppIcon size={20} />
                  </div>

                  <div className="wa-contact-info">
                    <div className="wa-contact-name-row">
                      <span className="wa-contact-name">{contact.name}</span>
                      <span className="wa-contact-designation">{contact.designation}</span>
                    </div>
                    <span className="wa-contact-number">{contact.display}</span>
                    <div className="wa-contact-cta-pill">
                      <span>{contact.ctaText}</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Popup Footer Note */}
            <div className="wa-popup-footer">
              <span className="wa-popup-footer-dot" aria-hidden="true" />
              <p className="wa-popup-footer-text">
                Direct founder access &bull; Response within hours
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN FLOATING WHATSAPP BUTTON (BOTTOM RIGHT) ── */}
      <motion.button
        ref={buttonRef}
        type="button"
        className={`wa-float-btn${isOpen ? " is-active" : ""}`}
        onClick={togglePopup}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={
          isOpen
            ? "Close WhatsApp contact options"
            : "Open WhatsApp contact options (Krishna Gupta or Prem Gupta)"
        }
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-describedby={!isOpen ? "wa-tooltip" : undefined}
        initial={{ opacity: 0, scale: 0.8, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        {/* Subtle pulsing background ring */}
        <span className="wa-pulse-ring" aria-hidden="true" />

        {/* Ambient radial glow */}
        <span className="wa-btn-glow" aria-hidden="true" />

        {/* Icon container */}
        <span className="wa-btn-icon-wrap" aria-hidden="true">
          {isOpen ? (
            <X size={26} strokeWidth={2.4} className="wa-close-icon" />
          ) : (
            <WhatsAppIcon size={30} className="wa-main-icon" />
          )}
        </span>
      </motion.button>
    </div>
  );
}
