import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Black Cardinal about your next digital project.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-page-hero" aria-labelledby="contact-page-title">
        <div className="contact-page-hero-glow" aria-hidden="true" />
        <div className="contact-page-container contact-page-hero-content">
          <p className="contact-eyebrow">Contact / Start a conversation</p>
          <h1 id="contact-page-title" className="contact-page-title">
            Every good project starts with <span>a conversation.</span>
          </h1>
          <p className="contact-page-lead">
            Tell us what you&apos;re building, changing or figuring out. We&apos;ll take it from there.
          </p>
        </div>
      </section>

      <section
        id="contact-form"
        className="contact-section"
        aria-labelledby="contact-form-title"
      >
        <div className="contact-page-container contact-grid">
          <div className="contact-intro">
            <p className="contact-eyebrow">Get in touch</p>
            <h2 id="contact-form-title">
              Let&apos;s find your <span>next move.</span>
            </h2>
            <p className="contact-intro-copy">
              Use the form to tell us about your project. We&apos;ll respond using your preferred contact method.
            </p>

            <div className="contact-details">
              <a className="contact-detail-card" href={`mailto:${siteConfig.email}`}>
                <span className="contact-detail-label">Email us</span>
                <span className="contact-detail-value">{siteConfig.email}</span>
              </a>
              <div className="contact-detail-card">
                <span className="contact-detail-label">Based in</span>
                <span className="contact-detail-value">{siteConfig.location}</span>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <h3>Tell us about your project</h3>
              <p>We usually respond within one business day.</p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
