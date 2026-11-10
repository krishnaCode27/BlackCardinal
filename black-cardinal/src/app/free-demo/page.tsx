import type { Metadata } from "next";
import Link from "next/link";
import { BadgeIndianRupee, Clock3, Gauge, ListChecks, MapPin, MessagesSquare } from "lucide-react";
import { FreeAuditBookingForm } from "@/components/forms/free-audit-booking-form";
import { FreeAuditPriceCounter } from "@/components/ui/FreeAuditPriceCounter";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Free SEO & Digital Marketing Audit for Morena Businesses | Black Cardinal" },
  description: "Get a 100% free SEO and digital marketing audit for your business in Morena. No cost, no obligation — find out why customers aren't finding you online. Book your free slot today.",
  alternates: { canonical: "/free-demo" },
};

const benefits = [
  { icon: BadgeIndianRupee, title: "Audit Your Brand at ₹0", text: "Get a useful review at no cost and with no obligation." },
  { icon: MapPin, title: "Rank Higher in Morena", text: "See how your business appears in local searches and on Maps." },
  { icon: Gauge, title: "Website Health Check", text: "Find out what may make your website hard to use or find." },
  { icon: MessagesSquare, title: "Social Media Review", text: "Get clear feedback on your social pages and posts." },
  { icon: ListChecks, title: "Simple Action Plan", text: "Leave with clear next steps, without a confusing report." },
  { icon: Clock3, title: "Takes Just 20 Minutes", text: "A short conversation focused on your business goals." },
];

const steps = [
  { title: "Book", text: "Send your details below and tell us which business to review." },
  { title: "Have a 20-minute call", text: "We will talk through your website, local search and social pages." },
  { title: "Get your free report", text: "We will share the main findings and simple next steps." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Free SEO and Digital Marketing Audit",
      description: "A free review of a Morena business website, local SEO and social media presence.",
      areaServed: { "@type": "City", name: "Morena" },
      provider: { "@type": "LocalBusiness", name: siteConfig.name, url: siteConfig.url, telephone: siteConfig.phones.map(({ display }) => display) },
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free SEO and marketing audit" },
    },
    {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/cardinal-bird.png`,
      telephone: siteConfig.phones.map(({ display }) => display),
      address: { "@type": "PostalAddress", streetAddress: "Mahaveer Pura", addressLocality: "Morena", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
      areaServed: { "@type": "City", name: "Morena" },
    },
  ],
};

export default function FreeDemoPage() {
  const calUrl = process.env.NEXT_PUBLIC_CAL_URL;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <div className="min-h-screen overflow-hidden bg-[#05070d] text-white">
        <header className="relative px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.16),transparent_65%)]" />
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">For Morena business owners</span>
            <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Free SEO &amp; Marketing Audit — Built for Morena Businesses</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Get a free SEO and digital marketing audit in Morena at ₹0. Find out what is helping or holding back your business online, with no obligation.</p>
            <FreeAuditPriceCounter />
            <Link href="#booking" className="free-audit-cta mx-auto mt-9 flex min-h-16 w-fit items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-10 py-5 text-base font-extrabold text-[#04101b] shadow-xl shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:brightness-110 sm:text-lg"><span>Book My Free Audit</span></Link>
            <p className="mt-4 text-sm text-slate-400">No cost. No pressure. Just useful next steps.</p>
          </div>
        </header>

        <main>
          <section aria-labelledby="benefits-heading" className="px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-2xl">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">What you get</p>
                <h2 id="benefits-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">A clear picture of your online presence</h2>
                <p className="mt-4 leading-7 text-slate-400">For example, we can look at what appears when someone searches “fresh cakes in Morena”.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-sm">
                    <Icon size={22} role="img" aria-label={`${title} icon`} className="mb-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="audit-details-heading" className="border-y border-white/[0.06] bg-white/[0.02] px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">What we check</p>
                <h2 id="audit-details-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Practical checks for your business</h2>
                <p className="mt-4 leading-7 text-slate-400">We explain what we find in plain language and focus on things you can act on.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-white/[0.08] bg-[#080d18] p-5"><h3 className="font-semibold text-cyan-100">Free Website Audit</h3><p className="mt-2 text-sm leading-6 text-slate-400">We check the basics that help people use and find your website.</p></article>
                <article className="rounded-2xl border border-white/[0.08] bg-[#080d18] p-5"><h3 className="font-semibold text-cyan-100">Free Local SEO Check</h3><p className="mt-2 text-sm leading-6 text-slate-400">We review how your business shows up in Morena searches and Maps.</p></article>
                <article className="rounded-2xl border border-white/[0.08] bg-[#080d18] p-5"><h3 className="font-semibold text-cyan-100">Free Social Media Review</h3><p className="mt-2 text-sm leading-6 text-slate-400">We look at your profiles and share simple ways to make them clearer.</p></article>
              </div>
            </div>
          </section>

          <section aria-labelledby="how-heading" className="px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 text-center"><p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Simple from start to finish</p><h2 id="how-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2></div>
              <div className="grid gap-4 md:grid-cols-3">
                {steps.map((step, index) => <article key={step.title} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6"><span className="font-mono text-sm font-bold text-cyan-300">0{index + 1}</span><h3 className="mt-4 text-xl font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{step.text}</p></article>)}
              </div>
            </div>
          </section>

          <section id="booking" aria-labelledby="booking-heading" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(255,255,255,0.025))] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div><p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Reserve your free slot</p><h2 id="booking-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s look at your business</h2><p className="mt-4 leading-7 text-slate-300">Share three details and send us a WhatsApp message to arrange your 20-minute audit.</p><p className="mt-5 text-sm leading-6 text-slate-400">We can check your website, local search results and social pages together.</p></div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#05070d]/80 p-5 sm:p-7"><FreeAuditBookingForm />{calUrl && <div className="mt-8 overflow-hidden rounded-xl border border-white/10"><iframe title="Choose a time for your free SEO and marketing audit" src={calUrl} className="h-[620px] w-full" loading="lazy" /></div>}</div>
            </div>
          </section>

          <section aria-labelledby="faq-heading" className="px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-3xl"><p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Good to know</p><h2 id="faq-heading" className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">Questions about the free audit</h2>
              <div className="space-y-3">
                <details className="group rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5"><summary className="cursor-pointer list-none pr-6 font-semibold marker:hidden">Is it really free?<span aria-hidden="true" className="float-right text-cyan-300 group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-6 text-slate-400">Yes. There is no charge for this audit and no obligation to buy anything.</p></details>
                <details className="group rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5"><summary className="cursor-pointer list-none pr-6 font-semibold marker:hidden">What happens after?<span aria-hidden="true" className="float-right text-cyan-300 group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-6 text-slate-400">We share what we found and a short list of useful next steps. You can decide what to do with it.</p></details>
                <details className="group rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5"><summary className="cursor-pointer list-none pr-6 font-semibold marker:hidden">Do I have to hire you after?<span aria-hidden="true" className="float-right text-cyan-300 group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-6 text-slate-400">No. The audit is yours to use whether or not you work with us.</p></details>
              </div>
            </div>
          </section>

          <section aria-labelledby="final-cta-heading" className="px-5 pb-20 pt-6 sm:px-8 sm:pb-24">
            <div className="mx-auto flex max-w-6xl flex-col items-center rounded-3xl border border-white/[0.08] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),rgba(255,255,255,0.025)_65%)] px-6 py-12 text-center sm:py-16"><h2 id="final-cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Get a clearer view of your online presence</h2><p className="mt-4 max-w-xl text-slate-300">Book your free SEO and marketing audit for your Morena business.</p><Link href="#booking" className="free-audit-cta mt-7 inline-flex min-h-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-bold text-[#04101b] transition hover:-translate-y-0.5 hover:brightness-110"><span>Book My Free Audit</span></Link></div>
          </section>
        </main>
      </div>
    </>
  );
}
