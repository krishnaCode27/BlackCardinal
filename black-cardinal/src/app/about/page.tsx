import type { Metadata } from "next";
import { FoundersSection } from "@/components/about/FoundersSection";

export const metadata: Metadata = {
  title: "About Us — The People Behind the Vision",
  description:
    "Meet Black Cardinal, an independent digital marketing agency founded by Krishna Gupta and Prem Gupta with a shared vision to bring strategy, design and technology together.",
};

const principles = [
  {
    num: "01",
    title: "Curiosity First",
    desc: "We ask deeper questions before prescribing solutions. True brand differentiation begins with understanding your unique position and market opportunity.",
  },
  {
    num: "02",
    title: "Uncompromising Clarity",
    desc: "The digital space is crowded with noise. We make your communication straightforward, purposeful, accountable, and impossible to ignore.",
  },
  {
    num: "03",
    title: "Obsession with Craft",
    desc: "Every touchpoint matters — from high-performance code to intentional typography, smooth micro-interactions, and visual harmony.",
  },
  {
    num: "04",
    title: "Velocity & Impact",
    desc: "We focus on real outcomes over vanity metrics, building scalable digital assets that generate compounding long-term growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="about-hero-section">
        <div className="about-hero-inner">
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">ABOUT BLACK CARDINAL</span>
          </div>

          <h1 className="about-hero-title">
            We believe brands should{" "}
            <span className="about-title-accent">lead with intent.</span>
          </h1>

          <p className="about-hero-copy">
            A modern, independent digital marketing agency helping businesses
            build a commanding digital presence through purposeful strategy,
            elevated branding, and high-performance technology.
          </p>
        </div>
      </section>

      {/* ── Editorial Narrative Section ── */}
      <section className="about-story-section">
        <div className="about-story-inner">
          <div className="about-story-col-left">
            <span className="section-label">OUR POINT OF VIEW</span>
            <h2 className="about-story-heading">
              Make every move{" "}
              <span className="about-title-accent">mean something.</span>
            </h2>
          </div>

          <div className="about-story-col-right">
            <p className="about-story-lead">
              The digital world is crowded. Attention is scarce. In an era of
              superficial trends, strategic clarity is the ultimate competitive advantage.
            </p>
            <p className="about-story-text">
              Black Cardinal exists to help businesses communicate with authority,
              show up consistently across every digital channel, and create lasting
              value. We do not believe in fragmented, generic marketing. Instead, we
              bring strategy, creative storytelling, and cutting-edge digital execution
              together into one cohesive growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* ── Founders Section: Krishna Gupta & Prem Gupta ── */}
      <FoundersSection />

      {/* ── Core Principles ── */}
      <section className="about-principles-section">
        <div className="about-principles-inner">
          <div className="about-principles-header">
            <div className="section-label-wrap">
              <span className="section-label-bar" aria-hidden="true" />
              <span className="section-label">HOW WE OPERATE</span>
            </div>
            <h2 className="about-principles-title">
              Principles That <span className="about-title-accent">Guide Us.</span>
            </h2>
            <p className="about-principles-desc">
              The standards we uphold across every project, partnership, and digital experience.
            </p>
          </div>

          <div className="about-principles-grid">
            {principles.map((principle) => (
              <article key={principle.num} className="about-principle-card">
                <span className="about-principle-num">{principle.num}</span>
                <h3 className="about-principle-title">{principle.title}</h3>
                <p className="about-principle-desc">{principle.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
