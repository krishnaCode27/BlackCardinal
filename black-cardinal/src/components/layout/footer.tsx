"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowUp, MessageSquare } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  const reduceMotion = useReducedMotion();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="top" className="relative bg-[#08090B] overflow-hidden text-white" role="contentinfo">
      {/* ================================================================
          1. ANIMATED FOOTER HEADLINE (Large Top CTA)
          ================================================================ */}
      <section
        id="cta"
        className="relative border-b border-white/[0.06] pt-[100px] pb-[80px] md:pt-[115px] md:pb-[95px] overflow-hidden"
        aria-labelledby="footer-cta-heading"
      >
        {/* Subtle cardinal ambient background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse,rgba(227,38,54,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="relative max-w-[1050px] mx-auto px-5 sm:px-8 xl:px-12 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center justify-center gap-2 mb-4 md:mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" aria-hidden="true" />
            <span className="font-mono text-[11px] font-bold tracking-[3px] text-[#E32636] uppercase">
              HAVE A PROJECT IN MIND?
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" aria-hidden="true" />
          </motion.div>

          {/* Main Heading: clamp(42px, 5vw, 68px), max-width ~1050px, balanced wrap */}
          <motion.h2
            id="footer-cta-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="font-display text-[clamp(36px,5.2vw,72px)] md:text-[clamp(48px,5.2vw,56px)] xl:text-[clamp(56px,5.2vw,72px)] font-bold tracking-tight text-white leading-[1.08] mb-5 md:mb-6 [text-wrap:balance]"
          >
            Let&apos;s Make Your Brand<br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-[#E32636] to-[#FF4D5E] bg-clip-text text-transparent">
              Impossible to Ignore.
            </span>
          </motion.h2>

          {/* Supporting Text: 17–19px, max-width ~600px, color #A5A5A5 */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="text-[#A5A5A5] text-[17px] md:text-[18.5px] max-w-[600px] mx-auto leading-relaxed mb-0"
          >
            Have an idea, a goal or a challenge? Let&apos;s create something meaningful together.
          </motion.p>

          {/* Primary CTA Button: placed directly below description with 28–32px margin */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="mt-7 md:mt-8 flex justify-center"
          >
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#E32636] text-white text-[15px] font-bold tracking-[0.3px] transition-all duration-300 hover:bg-[#C91F2E] hover:shadow-[0_6px_20px_rgba(227,38,54,0.28)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090B]"
            >
              <span>Start a Project</span>
              <ArrowUpRight
                size={18}
                strokeWidth={2.4}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          2. FOUR-COLUMN MAIN FOOTER STRUCTURE
          Container: max-w-[1400px], w-full, mx-auto, padding: 64px 40px 40px
          Grid: 1.4fr 0.8fr 1.2fr 1.2fr with 48px gap
          ================================================================ */}
      <div className="relative w-full max-w-[1440px] mx-auto px-5 md:px-8 xl:px-12 pt-10 pb-8 md:pt-14 md:pb-10 xl:pt-16 xl:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:[grid-template-columns:1.25fr_0.8fr_1.15fr_1.2fr] gap-8 md:gap-10 xl:gap-10 items-start">
          {/* ─────────────────────────────────────────────────────────────
              Column 1 — Brand (1.4fr)
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
            className="flex flex-col items-start w-full"
          >
            {/* Column Header: identical typography & margin as other 3 columns for equal vertical start */}
            <p className="font-mono text-[11px] font-bold tracking-[2.5px] text-[#E32636] uppercase mb-5">
              BRAND
            </p>

            {/* Official Black Cardinal Logo + Wordmark */}
            <Link
              href="/"
              className="group flex items-center gap-3.5 no-underline outline-none mb-4"
              aria-label="Black Cardinal home"
            >
              <div className="relative flex items-center justify-center w-10 h-[34px] shrink-0">
                <Image
                  src="/images/cardinal-bird.png"
                  alt="Black Cardinal bird emblem"
                  width={40}
                  height={34}
                  className="w-10 h-auto object-contain drop-shadow-[0_2px_8px_rgba(227,38,54,0.35)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-0.5 justify-center">
                <div className="flex items-center gap-1.5 font-display text-[17px] font-extrabold tracking-[2px] leading-tight">
                  <span className="text-white">BLACK</span>
                  <span className="text-[#E32636]">CARDINAL</span>
                </div>
                <span className="font-mono text-[8px] font-semibold tracking-[0.7px] text-[#A5A5A5] normal-case leading-none">
                  Lead Without Following
                </span>
              </div>
            </Link>

            {/* Description: maximum width 300px */}
            <p className="text-[#A5A5A5] text-[14px] leading-relaxed max-w-[300px] mb-5">
              An independent digital agency bringing strategy, creativity and technology together to help brands grow.
            </p>

            {/* Founder Credit displayed below with proper spacing */}
            <p className="m-0 text-[12px] leading-relaxed text-[#DFDFDF]">
              <span className="font-mono text-[10px] font-bold text-[#E32636] tracking-[1.3px]">CO-FOUNDERS</span>
              <br />Krishna Gupta &amp; Prem Gupta
            </p>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              Column 2 — Explore (0.8fr)
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
            className="flex flex-col items-start w-full"
          >
            <p className="font-mono text-[11px] font-bold tracking-[2.5px] text-[#E32636] uppercase mb-5">
              EXPLORE
            </p>
            <nav className="flex flex-col gap-4" aria-label="Explore navigation">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Packages", href: "/#packages" },
                { label: "Our Work", href: "/work" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative w-fit whitespace-nowrap text-[14px] text-[#A5A5A5] hover:text-[#E32636] transition-colors duration-200 outline-none py-0.5 focus-visible:ring-2 focus-visible:ring-[#E32636]"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#E32636] transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              Column 3 — Services (1.2fr)
              Consistent 16px vertical spacing between links (gap-4)
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
            className="flex flex-col items-start w-full"
          >
            <p className="font-mono text-[11px] font-bold tracking-[2.5px] text-[#E32636] uppercase mb-5">
              SERVICES
            </p>
            <nav className="flex flex-col gap-4" aria-label="Services footer navigation">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative w-fit whitespace-nowrap text-[14px] text-[#A5A5A5] hover:text-[#E32636] transition-colors duration-200 outline-none py-0.5 focus-visible:ring-2 focus-visible:ring-[#E32636]"
                >
                  <span>{service.title}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#E32636] transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              Column 4 — Let's Connect (1.2fr)
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
            className="flex flex-col items-start w-full"
          >
            <p className="font-mono text-[11px] font-bold tracking-[2.5px] text-[#E32636] uppercase mb-5">
              LET&apos;S CONNECT
            </p>

            {/* Founder Contact Cards */}
            <div className="flex flex-col gap-3 w-full">
              {/* Official WhatsApp contact */}
              <div className="min-h-[96px] rounded-xl p-3.5 bg-[#151518] border border-white/[0.06] flex flex-col justify-center gap-1 transition-all duration-200 hover:border-[#E32636]/40 hover:bg-[#1a1a1f]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-white">Official WhatsApp</span>
                </div>
                <a
                  href="https://wa.me/918815806560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[12.5px] text-[#25D366] hover:text-white transition-colors duration-200 mt-1"
                  aria-label="Chat with Black Cardinal on WhatsApp (+91 88158 06560)"
                >
                  <MessageSquare size={13} className="shrink-0" />
                  <span>+91 88158 06560</span>
                  <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Founder 2: Prem Gupta */}
              <div className="min-h-[96px] rounded-xl p-3.5 bg-[#151518] border border-white/[0.06] flex flex-col justify-center gap-1 transition-all duration-200 hover:border-[#E32636]/40 hover:bg-[#1a1a1f]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-white">Prem Gupta</span>
                  <span className="text-[11px] text-[#A5A5A5] font-mono">Co-Founder</span>
                </div>
                <a
                  href="https://wa.me/918770957964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[12.5px] text-[#25D366] hover:text-white transition-colors duration-200 mt-1"
                  aria-label="Chat with Prem Gupta on WhatsApp (+91 87709 57964)"
                >
                  <MessageSquare size={13} className="shrink-0" />
                  <span>+91 87709 57964</span>
                  <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Direct Inquiry Email below cards */}
            <div className="flex flex-col gap-1 pt-3">
              <span className="font-mono text-[9.5px] font-semibold tracking-[1.8px] text-[#A5A5A5] uppercase">
                DIRECT INQUIRY
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[13.5px] text-[#E32636] hover:text-white font-medium transition-colors duration-200 w-fit"
              >
                {siteConfig.email}
              </a>
              <address className="not-italic text-[12.5px] leading-relaxed text-[#A5A5A5]">
                {siteConfig.name}<br />
                {siteConfig.location}<br />
                {siteConfig.phones.map((phone, index) => (
                  <span key={phone.href}>
                    {index > 0 ? " · " : ""}
                    <a href={phone.href} className="hover:text-white">{phone.display}</a>
                  </span>
                ))}
              </address>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================================================================
          3. BOTTOM COPYRIGHT BAR
          Left: © 2026 Black Cardinal. All rights reserved.
          Right: Founded by Krishna Gupta & Prem Gupta | Back to top ↑
          Flexbox: justify-between, items-center, subtle top separator, py-5 (20px)
          ================================================================ */}
      <div className="border-t border-white/[0.06] bg-[#050607]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 xl:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-[#A5A5A5]">
          {/* Left copyright */}
          <p className="m-0 text-center sm:text-left">
            &copy; 2026 Black Cardinal. All rights reserved.
          </p>

          {/* Right founder credit and back to top */}
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
            <span>Founded by Krishna Gupta &amp; Prem Gupta</span>
            <span className="text-white/20" aria-hidden="true">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-inherit hover:text-white transition-colors duration-200 outline-none cursor-pointer border-0 bg-transparent p-0"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={13} className="text-[#E32636] transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
