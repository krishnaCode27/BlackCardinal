"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export interface ServiceItem {
  title: string;
  slug: string;
  shortDesc: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    shortDesc: "Coordinated growth strategy & channel campaigns",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    shortDesc: "Strategic content, creative direction & community",
  },
  {
    title: "SEO",
    slug: "seo",
    shortDesc: "Technical optimization & organic search visibility",
  },
  {
    title: "Website Development",
    slug: "website-development",
    shortDesc: "High-performance, modern conversion-focused sites",
  },
  {
    title: "Branding & Graphic Design",
    slug: "branding-graphic-design",
    shortDesc: "Visual identity systems, logos & creative assets",
  },
  {
    title: "Google Business Profile",
    slug: "google-business-profile",
    shortDesc: "Local presence, map ranking & business optimization",
  },
  {
    title: "NFC Google Review Solutions",
    slug: "nfc-google-review-solutions",
    shortDesc: "Frictionless customer review touchpoints & cards",
  },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="hamburger-box" aria-hidden="true">
      <motion.span
        className="hamburger-bar"
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="hamburger-bar"
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.18 }}
      />
      <motion.span
        className="hamburger-bar"
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Active route helpers
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname.startsWith("/services");
  const isContact = pathname === "/contact";

  // Track scroll position for header blur and background shift
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown or menu on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 140);
  };

  const closeAll = () => {
    setServicesDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`site-header${scrolled ? " scrolled" : ""}`}
        role="banner"
      >
        <div className="nav-wrap">
          {/* ── LEFT: Original Bird Logo & Wordmark ── */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/"
              className="nav-brand"
              aria-label="Black Cardinal Digital Marketing Agency Home"
              onClick={closeAll}
            >
              <div className="nav-brand-logo-wrap">
                <Image
                  src="/images/cardinal-bird.png"
                  alt="Black Cardinal"
                  width={46}
                  height={38}
                  className="nav-brand-bird"
                  priority
                />
              </div>
              <div className="nav-brand-text-wrap">
                <div className="nav-brand-title">
                  <span className="brand-word-black">BLACK</span>
                  <span className="brand-word-cardinal">CARDINAL</span>
                </div>
                <span className="nav-brand-subtitle">
                  DIGITAL MARKETING AGENCY
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── CENTER: Desktop Navigation ── */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {/* Home */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
            >
              <Link
                href="/"
                className={`desktop-nav-link${isHome ? " active" : ""}`}
              >
                <span>Home</span>
                {isHome && <span className="nav-active-dot" aria-hidden="true" />}
              </Link>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.45 }}
            >
              <Link
                href="/about"
                className={`desktop-nav-link${isAbout ? " active" : ""}`}
              >
                <span>About</span>
                {isAbout && <span className="nav-active-dot" aria-hidden="true" />}
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <motion.div
              className="desktop-dropdown-container"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.45 }}
            >
              <button
                type="button"
                className={`desktop-nav-link desktop-dropdown-trigger${
                  isServices || servicesDropdownOpen ? " active" : ""
                }`}
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`dropdown-chevron${
                    servicesDropdownOpen ? " rotated" : ""
                  }`}
                  aria-hidden="true"
                />
                {isServices && <span className="nav-active-dot" aria-hidden="true" />}
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    className="desktop-dropdown-menu"
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    role="menu"
                    aria-label="Services dropdown"
                  >
                    <div className="dropdown-menu-header">
                      <span className="dropdown-header-tag">OUR SERVICES</span>
                      <span className="dropdown-header-accent" />
                    </div>

                    <div className="dropdown-menu-grid">
                      {SERVICES_LIST.map((service, index) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="dropdown-service-item"
                          onClick={() => setServicesDropdownOpen(false)}
                          role="menuitem"
                        >
                          <div className="dropdown-service-num">
                            0{index + 1}
                          </div>
                          <div className="dropdown-service-content">
                            <span className="dropdown-service-title">
                              {service.title}
                            </span>
                            <span className="dropdown-service-desc">
                              {service.shortDesc}
                            </span>
                          </div>
                          <ArrowUpRight
                            size={14}
                            className="dropdown-item-arrow"
                            aria-hidden="true"
                          />
                        </Link>
                      ))}
                    </div>

                    <div className="dropdown-menu-footer">
                      <Link
                        href="/services"
                        className="dropdown-view-all-link"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        Explore All Services Overview
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Our Process */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.45 }}
            >
              <Link href="/#process" className="desktop-nav-link">
                <span>Our Process</span>
              </Link>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.45 }}
            >
              <Link
                href="/contact"
                className={`desktop-nav-link${isContact ? " active" : ""}`}
              >
                <span>Contact</span>
                {isContact && <span className="nav-active-dot" aria-hidden="true" />}
              </Link>
            </motion.div>
          </nav>

          {/* ── RIGHT: Desktop CTA & Mobile Toggle ── */}
          <div className="nav-right-actions">
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="nav-cta-btn"
                aria-label="Start a project — Let's Talk"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight size={15} strokeWidth={2.4} className="nav-cta-arrow" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Mobile hamburger button with animated icon */}
            <button
              type="button"
              className={`nav-hamburger${menuOpen ? " is-open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
            >
              <HamburgerIcon isOpen={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE NAVIGATION PANEL ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-panel"
            className="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            <div className="mobile-nav-inner">
              <nav className="mobile-nav-links">
                {/* 01 Home */}
                <Link
                  href="/"
                  className={`mobile-nav-link${isHome ? " active" : ""}`}
                  onClick={closeAll}
                >
                  <span className="mobile-nav-num">01</span>
                  <span className="mobile-nav-text">Home</span>
                  {isHome && <span className="mobile-active-bullet" />}
                </Link>

                {/* 02 About */}
                <Link
                  href="/about"
                  className={`mobile-nav-link${isAbout ? " active" : ""}`}
                  onClick={closeAll}
                >
                  <span className="mobile-nav-num">02</span>
                  <span className="mobile-nav-text">About</span>
                  {isAbout && <span className="mobile-active-bullet" />}
                </Link>

                {/* 03 Services Accordion */}
                <div className="mobile-services-accordion">
                  <button
                    type="button"
                    className={`mobile-nav-link mobile-accordion-trigger${
                      isServices ? " active" : ""
                    }`}
                    onClick={() =>
                      setMobileServicesExpanded((prev) => !prev)
                    }
                    aria-expanded={mobileServicesExpanded}
                  >
                    <div className="mobile-accordion-left">
                      <span className="mobile-nav-num">03</span>
                      <span className="mobile-nav-text">Services</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`mobile-chevron${
                        mobileServicesExpanded ? " rotated" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesExpanded && (
                      <motion.div
                        className="mobile-services-sublist"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {SERVICES_LIST.map((service, idx) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="mobile-subservice-link"
                            onClick={closeAll}
                          >
                            <span className="mobile-subservice-bullet">
                              0{idx + 1}
                            </span>
                            <span className="mobile-subservice-title">
                              {service.title}
                            </span>
                            <ArrowUpRight
                              size={13}
                              className="mobile-subservice-arrow"
                            />
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="mobile-subservice-all"
                          onClick={closeAll}
                        >
                          Explore All Services Overview →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 04 Our Process */}
                <Link
                  href="/#process"
                  className="mobile-nav-link"
                  onClick={closeAll}
                >
                  <span className="mobile-nav-num">04</span>
                  <span className="mobile-nav-text">Our Process</span>
                </Link>

                {/* 05 Contact */}
                <Link
                  href="/contact"
                  className={`mobile-nav-link${isContact ? " active" : ""}`}
                  onClick={closeAll}
                >
                  <span className="mobile-nav-num">05</span>
                  <span className="mobile-nav-text">Contact</span>
                  {isContact && <span className="mobile-active-bullet" />}
                </Link>
              </nav>

              {/* Mobile CTA */}
              <div className="mobile-cta-wrap">
                <Link
                  href="/contact"
                  className="mobile-nav-cta"
                  onClick={closeAll}
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight size={17} strokeWidth={2.5} />
                </Link>
                <p className="mobile-cta-note">
                  Direct consultation · No commitment
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
