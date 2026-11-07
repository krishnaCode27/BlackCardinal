"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Share2,
  Search,
  Code,
  Palette,
  MapPin,
  Smartphone,
  Compass,
  Lightbulb,
  Layers,
  Users,
} from "lucide-react";
import type { Service } from "@/config/services";
import { StatisticsSection } from "@/components/home/StatisticsSection";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ServicesPageClientProps {
  services: Service[];
}

const SERVICE_META = [
  {
    icon: TrendingUp,
    num: "01",
    title: "Digital Marketing",
    highlights: ["Marketing plan", "Online campaigns", "Customer research", "Results tracking"],
  },
  {
    icon: Share2,
    num: "02",
    title: "Social Media Marketing",
    highlights: ["Post planning", "Captions and visuals", "Page updates", "Results checks"],
  },
  {
    icon: Search,
    num: "03",
    title: "Search Engine Optimization",
    highlights: ["Website health", "Page improvements", "Search terms", "Local search"],
  },
  {
    icon: Code,
    num: "04",
    title: "Website Development",
    highlights: ["Mobile-friendly site", "Page design", "Online forms", "Site speed"],
  },
  {
    icon: Palette,
    num: "05",
    title: "Branding & Graphic Design",
    highlights: ["Logo and colors", "Brand style", "Social graphics", "Marketing materials"],
  },
  {
    icon: MapPin,
    num: "06",
    title: "Google Business Profile",
    highlights: ["Google Maps listing", "Hours and details", "Photos and updates", "Review replies"],
  },
  {
    icon: Smartphone,
    num: "07",
    title: "NFC Google Review Solutions",
    highlights: ["Tap-to-review card", "Google review link", "Branded design", "Setup guidance"],
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    name: "Discover",
    desc: "Talk about your business, your customers and what you want to achieve.",
  },
  {
    num: "02",
    name: "Strategize",
    desc: "Choose the work that will best support your goal.",
  },
  {
    num: "03",
    name: "Create",
    desc: "Create the posts, pages or campaigns in the plan.",
  },
  {
    num: "04",
    name: "Refine",
    desc: "Check what is working and make useful changes.",
  },
];

const WHY_FEATURES = [
  {
    icon: Compass,
    title: "Start with a clear plan",
    desc: "We first learn what your business does and who you want to reach.",
  },
  {
    icon: Lightbulb,
    title: "Designs with purpose",
    desc: "We create clear designs and messages that fit your business.",
  },
  {
    icon: Layers,
    title: "Services that work together",
    desc: "Your website, social pages and marketing can support the same goals.",
  },
  {
    icon: Users,
    title: "Work with our team directly",
    desc: "You can speak directly with the people doing the work and get clear updates.",
  },
];

export function ServicesPageClient({ services }: ServicesPageClientProps) {
  return (
    <div className="relative bg-[#08090B] text-white overflow-hidden">
      {/* ================================================================
          1. SERVICES HERO SECTION
          ================================================================ */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-48 lg:pb-36 overflow-hidden">
        {/* Subtle cardinal ambient gradient */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-[radial-gradient(ellipse,rgba(227,38,54,0.07)_0%,transparent_70%)]" />
        </div>

        <div className="relative max-w-[1240px] mx-auto px-[5%] text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" aria-hidden="true" />
            <span className="font-mono text-[11px] font-bold tracking-[3px] text-[#E32636] uppercase">
              WHAT WE DO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E32636]" aria-hidden="true" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-[1040px] mx-auto"
          >
            Clear Help for Your Business.{" "}
            <span className="bg-gradient-to-r from-[#E32636] to-[#FF4D5E] bg-clip-text text-transparent">
              Meaningful Growth.
            </span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="text-[#A5A5A5] text-base md:text-lg lg:text-xl max-w-[760px] mx-auto leading-relaxed mb-10"
          >
              Get more customers online with straightforward help for marketing, websites, design and Google.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="#services-overview"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E32636] text-white text-[14px] font-bold tracking-[0.3px] transition-all duration-300 hover:bg-[#B51220] hover:shadow-[0_6px_25px_rgba(227,38,54,0.4)] hover:-translate-y-0.5 outline-none"
            >
              <span>Explore Our Services</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.04] text-white text-[14px] font-bold tracking-[0.3px] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15] hover:-translate-y-0.5 outline-none"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          2. SERVICES OVERVIEW (7 Asymmetric Cards)
          ================================================================ */}
      <section id="services-overview" className="relative py-24 md:py-32 border-t border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto px-[5%]">
          {/* Section Header */}
          <div className="text-center max-w-[760px] mx-auto mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-mono text-[10.5px] font-bold tracking-[2.5px] text-[#E32636] uppercase mb-4"
            >
              SERVICES OVERVIEW
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-5"
            >
              Everything Your Brand Needs to{" "}
              <span className="text-[#E32636]">Grow.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="text-[#A5A5A5] text-[15px] md:text-base leading-relaxed"
            >
              Pick one service or combine a few. Each one is explained in plain language, with an example of how it can help.
            </motion.p>
          </div>

          {/* Asymmetric Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {SERVICE_META.map((meta, index) => {
              const serviceData = services.find((s) => s.slug === (
                index === 0 ? "digital-marketing" :
                index === 1 ? "social-media-marketing" :
                index === 2 ? "seo" :
                index === 3 ? "website-development" :
                index === 4 ? "branding-graphic-design" :
                index === 5 ? "google-business-profile" :
                "nfc-google-review-solutions"
              ));
              const slug = serviceData?.slug || "digital-marketing";
              const IconComponent = meta.icon;

              // Asymmetric column distribution
              // 0: span-7, 1: span-5
              // 2: span-4, 3: span-4, 4: span-4
              // 5: span-6, 6: span-6
              const colSpanClass =
                index === 0 ? "lg:col-span-7" :
                index === 1 ? "lg:col-span-5" :
                index === 2 ? "lg:col-span-4" :
                index === 3 ? "lg:col-span-4" :
                index === 4 ? "lg:col-span-4" :
                index === 5 ? "lg:col-span-6" :
                "lg:col-span-6";

              return (
                <motion.article
                  key={meta.num}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: EASE, delay: (index % 3) * 0.1 }}
                  className={`group relative rounded-2xl bg-[#111215] p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#15161A] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] ${colSpanClass}`}
                >
                  {/* Gentle hover accent glow */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_right,rgba(227,38,54,0.06)_0%,transparent_60%)]"
                    aria-hidden="true"
                  />

                  <div>
                    {/* Top row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[12px] font-bold tracking-[2px] text-[#E32636]">
                        {meta.num}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#E32636] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#E32636]/10">
                        <IconComponent size={20} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-[#E32636] transition-colors duration-200">
                      {meta.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#A5A5A5] text-[14px] leading-relaxed mb-3">
                      {serviceData?.short}
                    </p>
                    <p className="text-[#DFDFDF]/75 text-[12.5px] leading-relaxed mb-6 border-l-2 border-[#E32636]/60 pl-3">
                      <strong className="text-white">Example: </strong>{serviceData?.example}
                    </p>

                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {meta.highlights.map((item) => (
                        <span
                          key={item}
                          className="text-[12px] font-medium text-[#dfdfdf] bg-white/[0.03] border border-white/[0.05] px-3 py-1 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore Service Link */}
                  <div className="pt-4 border-t border-white/[0.05]">
                    <Link
                      href={`/services/${slug}`}
                      className="group/link inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#E32636] hover:text-white transition-colors duration-200 outline-none"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          3. CREATIVE PROCESS SECTION (Horizontal Timeline)
          ================================================================ */}
      <section className="relative py-24 md:py-32 bg-[#0C0D10] border-t border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto px-[5%]">
          {/* Section Header */}
          <div className="text-center max-w-[760px] mx-auto mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-mono text-[10.5px] font-bold tracking-[2.5px] text-[#E32636] uppercase mb-4"
            >
              OUR APPROACH
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]"
            >
              From First Conversation to{" "}
              <span className="text-[#E32636]">Digital Experience.</span>
            </motion.h2>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:grid grid-cols-4 gap-6 relative">
            {/* Horizontal timeline bar */}
            <div
              className="absolute top-6 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[#E32636]/30 to-transparent"
              aria-hidden="true"
            />

            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: EASE, delay: idx * 0.12 }}
                className="relative flex flex-col items-center text-center px-4"
              >
                {/* Node indicator */}
                <div className="relative w-12 h-12 rounded-full bg-[#111215] border border-white/[0.08] flex items-center justify-center mb-6 z-10 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                  <span className="font-mono text-[12px] font-bold text-[#E32636]">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-[#A5A5A5] text-[14px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile / Tablet Vertical Timeline */}
          <div className="lg:hidden flex flex-col gap-8 relative pl-6">
            <div
              className="absolute top-2 bottom-2 left-[11px] w-[1px] bg-[#E32636]/30"
              aria-hidden="true"
            />

            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.1 }}
                className="relative pl-6"
              >
                {/* Vertical dot */}
                <div
                  className="absolute left-[-16px] top-1.5 w-6 h-6 rounded-full bg-[#111215] border border-[#E32636] flex items-center justify-center text-[10px] font-mono font-bold text-[#E32636]"
                  aria-hidden="true"
                >
                  {step.num}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {step.name}
                </h3>
                <p className="text-[#A5A5A5] text-[14px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          4. WHY BLACK CARDINAL SECTION (4 Feature Blocks)
          ================================================================ */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto px-[5%]">
          {/* Section Header */}
          <div className="text-center max-w-[760px] mx-auto mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-mono text-[10.5px] font-bold tracking-[2.5px] text-[#E32636] uppercase mb-4"
            >
              THE ADVANTAGE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Why Work With <span className="text-[#E32636]">Black Cardinal?</span>
            </motion.h2>
          </div>

          {/* 4 Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_FEATURES.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: EASE, delay: idx * 0.1 }}
                  className="rounded-2xl bg-[#111215] p-7 md:p-8 flex items-start gap-5 transition-colors duration-300 hover:bg-[#15161A]"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#E32636] shrink-0 mt-0.5">
                    <IconComp size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-[#A5A5A5] text-[14px] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. BUSINESS STATISTICS (Exact Values: 1, 2, 1 with count-up)
          ================================================================ */}
      <StatisticsSection />
    </div>
  );
}

