import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
import { EnquiryForm } from "@/components/forms/enquiry-form";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: service.short } : {};
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-container">
          <p className="service-detail-eyebrow">Black Cardinal / Services</p>
          <h1>{service.title}</h1>
          <p className="service-detail-lead">{service.short}</p>
          <div className="service-example">
            <span>Simple example</span>
            <p>{service.example}</p>
          </div>
          <Link className="service-detail-cta" href="#enquiry">
            Discuss this service <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="service-detail-container service-opportunity">
          <div>
            <p className="service-detail-eyebrow">What this means</p>
            <h2>How this can help <span>your business.</span></h2>
          </div>
          <p className="service-detail-copy">{service.intro}</p>
        </div>
      </section>

      <section className="service-detail-section service-detail-section-dark">
        <div className="service-detail-container">
          <div className="service-detail-heading">
            <p className="service-detail-eyebrow">What we can do</p>
            <h2>Clear help, <span>step by step.</span></h2>
          </div>
          <ul className="service-offering-list">
            {service.offerings.map((offering, index) => (
              <li key={offering}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{offering}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="service-detail-container">
          <div className="service-detail-heading">
            <p className="service-detail-eyebrow">How it works</p>
            <h2>A simple path <span>from start to finish.</span></h2>
          </div>
          <ol className="service-process-list">
            {service.process.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="service-detail-section service-detail-section-dark">
        <div className="service-detail-container service-outcomes">
          <div>
            <p className="service-detail-eyebrow">What we work towards</p>
            <h2>Useful progress, <span>without false promises.</span></h2>
            <p className="service-detail-copy">
              Results depend on your starting point, customers and plan. We agree on useful signs of progress and review them together.
            </p>
          </div>
          <ul className="service-outcome-list">
            {service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="service-detail-container service-faq-layout">
          <div>
            <p className="service-detail-eyebrow">Good to know</p>
            <h2>Questions, <span>answered.</span></h2>
          </div>
          <div className="service-faq-list">
            {service.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="service-detail-section service-detail-section-dark service-enquiry-section">
        <div className="service-detail-container service-enquiry-grid">
          <div>
            <p className="service-detail-eyebrow">Let&apos;s talk about {service.title}</p>
            <h2>Tell us what you&apos;re <span>working towards.</span></h2>
            <p className="service-detail-copy">
              Share a little about your business. We&apos;ll talk through the next steps and whether this service is a good fit.
            </p>
          </div>
          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <h3>Tell us about your project</h3>
              <p>We usually respond within one business day.</p>
            </div>
            <EnquiryForm initialService={service.title} />
          </div>
        </div>
      </section>
    </main>
  );
}
