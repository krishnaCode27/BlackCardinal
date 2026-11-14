"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceItem {
  num: string;
  title: string;
  slug: string;
  shortDesc: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    num: "01",
    title: "Digital Marketing",
    slug: "digital-marketing",
    shortDesc: "Coordinated growth strategy & channel campaigns",
  },
  {
    num: "02",
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    shortDesc: "Strategic content, creative direction & community",
  },
  {
    num: "03",
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    shortDesc: "Creator partnerships and campaign coordination",
  },
  {
    num: "04",
    title: "SEO",
    slug: "seo",
    shortDesc: "Technical optimization & organic search visibility",
  },
  {
    num: "05",
    title: "Website Development",
    slug: "website-development",
    shortDesc: "High-performance, modern conversion-focused sites",
  },
  {
    num: "06",
    title: "Branding & Graphic Design",
    slug: "branding-graphic-design",
    shortDesc: "Visual identity systems, logos & creative assets",
  },
  {
    num: "07",
    title: "Google Business Profile",
    slug: "google-business-profile",
    shortDesc: "Local presence, map ranking & business optimization",
  },
  {
    num: "08",
    title: "NFC Google Review Solutions",
    slug: "nfc-google-review-solutions",
    shortDesc: "Frictionless customer review touchpoints & cards",
  },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className="w-6 h-4 relative flex flex-col justify-between"
      aria-hidden="true"
    >
      <motion.span
        className="block h-[2px] w-full rounded-full bg-white transition-colors duration-200"
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="block h-[2px] rounded-full bg-white transition-colors duration-200"
        animate={
          isOpen
            ? { rotate: -45, y: -7, width: "100%" }
            : { rotate: 0, y: 0, width: "65%", alignSelf: "flex-end" }
        }
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Active route helpers
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname.startsWith("/services");
  const isWork = pathname === "/work";
  const isInfluencers = pathname === "/influencers";
  const isContact = pathname === "/contact";
  const isFreeAudit = pathname === "/free-demo";

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleServicesMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 140);
  };

  const closeAll = () => {
    setServicesOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "site-header fixed top-0 left-0 right-0 z-50 w-full h-[82px] flex items-center transition-all duration-300 border-0 outline-none",
          scrolled
            ? "bg-[#08090B]/85 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="nav-wrap w-full max-w-[1440px] mx-auto px-[5%] lg:px-[6%] flex items-center justify-between">
          {/* ── LEFT: Official Bird Logo & Wordmark ── */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 no-underline border-0 outline-none focus-visible:ring-1 focus-visible:ring-[#E32636] focus-visible:rounded-lg"
            aria-label="Black Cardinal Digital Marketing Agency Home"
            onClick={closeAll}
          >
            <div className="relative flex items-center justify-center w-10 h-[34px] shrink-0">
              <Image
                src="/images/cardinal-bird.png"
                alt="Black Cardinal"
                width={40}
                height={34}
                className="w-10 h-auto max-h-[34px] object-contain drop-shadow-[0_2px_8px_rgba(227,38,54,0.3)] transition-transform duration-250 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col gap-0.5 justify-center">
              <div className="flex items-center gap-1.5 font-display text-[16px] font-extrabold tracking-[2px] leading-tight">
                <span className="text-white">BLACK</span>
                <span className="text-[#E32636]">CARDINAL</span>
              </div>
              <span className="font-mono text-[8px] font-semibold tracking-[0.7px] text-[#A5A5A5] normal-case leading-none">
                Lead Without Following
              </span>
            </div>
          </Link>

          {/* ── CENTER: Desktop Navigation Links ── */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-10"
            aria-label="Main navigation"
          >
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "relative text-[14px] font-medium tracking-[0.2px] transition-colors duration-200 outline-none hover:text-[#E32636]",
                isHome ? "text-white" : "text-[#A5A5A5]"
              )}
            >
              <span>Home</span>
              {isHome && (
                <span
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E32636]"
                  aria-hidden="true"
                />
              )}
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={cn(
                "relative text-[14px] font-medium tracking-[0.2px] transition-colors duration-200 outline-none hover:text-[#E32636]",
                isAbout ? "text-white" : "text-[#A5A5A5]"
              )}
            >
              <span>About</span>
              {isAbout && (
                <span
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E32636]"
                  aria-hidden="true"
                />
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={cn(
                  "relative flex items-center gap-1.5 text-[14px] font-medium tracking-[0.2px] transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 outline-none hover:text-[#E32636]",
                  isServices || servicesOpen
                    ? "text-white"
                    : "text-[#A5A5A5]"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  size={13}
                  className={cn(
                    "transition-transform duration-200 ease-out text-[#A5A5A5]",
                    servicesOpen && "rotate-180 text-[#E32636]"
                  )}
                  aria-hidden="true"
                />
                {isServices && (
                  <span
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E32636]"
                    aria-hidden="true"
                  />
                )}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute top-[calc(100%_+_18px)] left-1/2 -translate-x-1/2 w-[540px] p-6 rounded-2xl bg-[#111215]/98 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-50 border-0 outline-none"
                  >
                    {/* Dropdown Header */}
                    <div className="flex items-center justify-between pb-3.5 mb-2 border-0">
                      <span className="font-mono text-[10px] font-bold tracking-[2px] text-[#E32636] uppercase">
                        OUR CORE DISCIPLINES
                      </span>
                      <span className="text-[11px] text-[#A5A5A5]">
                        7 Strategic Capabilities
                      </span>
                    </div>

                    {/* Two-Column Grid */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-0">
                      {SERVICES_LIST.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={closeAll}
                          className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-white/[0.04] border-0 outline-none"
                        >
                          <span className="font-mono text-[11px] font-bold text-[#E32636] mt-0.5 shrink-0">
                            {service.num}
                          </span>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-[13.5px] font-semibold text-white group-hover:text-[#E32636] transition-colors duration-200 truncate">
                              {service.title}
                            </span>
                            <span className="text-[11.5px] text-[#A5A5A5] leading-snug line-clamp-1">
                              {service.shortDesc}
                            </span>
                          </div>
                          <ArrowUpRight
                            size={13}
                            className="text-[#A5A5A5] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#E32636] shrink-0 mt-1"
                            aria-hidden="true"
                          />
                        </Link>
                      ))}
                    </div>

                    {/* Dropdown Footer */}
                    <div className="pt-3.5 mt-3 flex items-center justify-between border-0">
                      <Link
                        href="/services"
                        onClick={closeAll}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E32636] hover:text-white transition-colors duration-200 border-0 outline-none"
                      >
                        <span>Explore All Services Overview</span>
                        <ArrowUpRight size={13} />
                      </Link>
                      <span className="font-mono text-[11px] text-[#A5A5A5]/60">
                        End-to-End Delivery
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Packages */}
            <Link
              href="/#packages"
              className="text-[14px] font-medium tracking-[0.2px] text-[#A5A5A5] transition-colors duration-200 outline-none hover:text-[#E32636]"
            >
              Packages
            </Link>

            {/* Our Work */}
            <Link
              href="/work"
              className={cn(
                "text-[14px] font-medium tracking-[0.2px] transition-colors duration-200 outline-none hover:text-[#E32636]",
                isWork ? "text-white" : "text-[#A5A5A5]"
              )}
            >
              Our Work
            </Link>

            <Link
              href="/influencers"
              className={cn(
                "text-[14px] font-medium tracking-[0.2px] transition-colors duration-200 outline-none hover:text-[#E32636]",
                isInfluencers ? "text-white" : "text-[#A5A5A5]"
              )}
            >
              Influencers
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={cn(
                "relative text-[14px] font-medium tracking-[0.2px] transition-colors duration-200 outline-none hover:text-[#E32636]",
                isContact ? "text-white" : "text-[#A5A5A5]"
              )}
            >
              <span>Contact</span>
              {isContact && (
                <span
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E32636]"
                  aria-hidden="true"
                />
              )}
            </Link>
            <Link
              href="/free-demo"
              className={cn(
                "relative text-[14px] font-medium tracking-[0.2px] transition-colors duration-200 outline-none hover:text-[#E32636]",
                isFreeAudit ? "text-white" : "text-[#A5A5A5]"
              )}
            >
              <span>Free SEO &amp; Marketing Audit</span>
              {isFreeAudit && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E32636]" aria-hidden="true" />}
            </Link>
          </nav>

          {/* ── RIGHT: Desktop CTA & Mobile Toggle ── */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Desktop Let's Talk CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E32636] text-white text-[13.5px] font-bold tracking-[0.3px] transition-all duration-300 hover:bg-[#C91F2E] hover:shadow-[0_5px_18px_rgba(227,38,54,0.28)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border-0 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090B]"
                aria-label="Contact Black Cardinal — Let's Talk"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={2.4}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-transparent text-white border-0 p-0 outline-none transition-colors duration-200 cursor-pointer focus-visible:ring-1 focus-visible:ring-[#E32636]"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
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
            className="fixed inset-0 top-[82px] z-40 bg-[#08090B]/98 backdrop-blur-2xl overflow-y-auto pb-10 border-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            <div className="max-w-md mx-auto px-6 py-8 flex flex-col justify-between min-h-[calc(100vh-82px)]">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 border-0">
                {/* 01 Home */}
                <Link
                  href="/"
                  className={cn(
                    "flex items-center justify-between py-3.5 text-xl font-bold transition-colors duration-200 border-0 outline-none",
                    isHome ? "text-white" : "text-[#A5A5A5] hover:text-white"
                  )}
                  onClick={closeAll}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#E32636]">
                      01
                    </span>
                    <span>Home</span>
                  </div>
                  {isHome && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" />
                  )}
                </Link>

                {/* 02 About */}
                <Link
                  href="/about"
                  className={cn(
                    "flex items-center justify-between py-3.5 text-xl font-bold transition-colors duration-200 border-0 outline-none",
                    isAbout ? "text-white" : "text-[#A5A5A5] hover:text-white"
                  )}
                  onClick={closeAll}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#E32636]">
                      02
                    </span>
                    <span>About</span>
                  </div>
                  {isAbout && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" />
                  )}
                </Link>

                {/* 03 Services Accordion */}
                <div className="flex flex-col border-0">
                  <button
                    type="button"
                    className={cn(
                      "flex items-center justify-between py-3.5 text-xl font-bold transition-colors duration-200 cursor-pointer bg-transparent border-0 outline-none w-full text-left",
                      isServices || mobileServicesExpanded
                        ? "text-white"
                        : "text-[#A5A5A5] hover:text-white"
                    )}
                    onClick={() => setMobileServicesExpanded((prev) => !prev)}
                    aria-expanded={mobileServicesExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-[#E32636]">
                        03
                      </span>
                      <span>Services</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "transition-transform duration-200 ease-out text-[#A5A5A5]",
                        mobileServicesExpanded && "rotate-180 text-[#E32636]"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesExpanded && (
                      <motion.div
                        className="pl-8 pr-2 py-2 flex flex-col gap-1 overflow-hidden border-0"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.24,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {SERVICES_LIST.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group flex items-center justify-between py-2.5 text-sm text-[#A5A5A5] hover:text-white transition-colors duration-200 border-0 outline-none"
                            onClick={closeAll}
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-[11px] font-semibold text-[#E32636]">
                                {service.num}
                              </span>
                              <span className="font-medium group-hover:text-white transition-colors">
                                {service.title}
                              </span>
                            </div>
                            <ArrowUpRight
                              size={14}
                              className="text-[#A5A5A5] group-hover:text-[#E32636] transition-colors"
                            />
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 pt-3 pb-1 text-xs font-semibold text-[#E32636] hover:text-white transition-colors border-0 outline-none"
                          onClick={closeAll}
                        >
                          <span>Explore All Services Overview</span>
                          <ArrowUpRight size={13} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 04 Our Work */}
                <Link
                  href="/work"
                  className={cn(
                    "flex items-center justify-between py-3.5 text-xl font-bold transition-colors duration-200 border-0 outline-none",
                    isWork ? "text-white" : "text-[#A5A5A5] hover:text-white"
                  )}
                  onClick={closeAll}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#E32636]">
                      04
                    </span>
                    <span>Our Work</span>
                  </div>
                  {isWork && <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" />}
                </Link>

                <Link
                  href="/influencers"
                  className={cn(
                    "flex items-center justify-between py-3.5 text-xl font-bold transition-colors duration-200 border-0 outline-none",
                    isInfluencers ? "text-white" : "text-[#A5A5A5] hover:text-white"
                  )}
                  onClick={closeAll}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#E32636]">05</span>
                    <span>Influencer Portfolio</span>
                  </div>
                  {isInfluencers && <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" />}
                </Link>

                {/* 06 Packages */}
                <Link
                  href="/#packages"
                  className="flex items-center justify-between py-3.5 text-xl font-bold text-[#A5A5A5] transition-colors duration-200 hover:text-white border-0 outline-none"
                  onClick={closeAll}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#E32636]">06</span>
                    <span>Packages</span>
                  </div>
                </Link>

                {/* 07 Contact */}
                <Link
                  href="/contact"
                  className={cn(
                    "flex items-center justify-between py-3.5 text-xl font-bold transition-colors duration-200 border-0 outline-none",
                    isContact ? "text-white" : "text-[#A5A5A5] hover:text-white"
                  )}
                  onClick={closeAll}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#E32636]">
                      07
                    </span>
                    <span>Contact</span>
                  </div>
                  {isContact && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" />
                  )}
                </Link>
                <Link
                  href="/free-demo"
                  className={cn(
                    "flex items-center justify-between py-3.5 text-xl font-bold transition-colors duration-200 border-0 outline-none",
                    isFreeAudit ? "text-white" : "text-[#A5A5A5] hover:text-white"
                  )}
                  onClick={closeAll}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#E32636]">08</span>
                    <span>Free SEO &amp; Marketing Audit</span>
                  </div>
                  {isFreeAudit && <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" />}
                </Link>
              </nav>

              {/* Mobile CTA */}
              <div className="pt-8 flex flex-col gap-2.5 border-0">
                <Link
                  href="/contact#contact-form"
                  className="group flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#E32636] text-white text-base font-bold shadow-[0_4px_16px_rgba(227,38,54,0.25)] hover:bg-[#C91F2E] transition-all duration-300 active:scale-[0.98] border-0 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090B]"
                  onClick={closeAll}
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight size={18} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <p className="text-center text-xs text-[#A5A5A5]">
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
