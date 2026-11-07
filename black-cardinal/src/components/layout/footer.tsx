import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-grid">
        {/* Column 1 — Brand & Founder attribution */}
        <div className="footer-brand-col">
          <Link href="/" className="footer-logo" aria-label="Black Cardinal home">
            <Image
              src="/images/cardinal-bird.png"
              alt="Black Cardinal emblem"
              width={42}
              height={35}
              style={{ objectFit: "contain" }}
            />
            <div className="footer-brand-text-wrap">
              <span className="footer-logo-text">
                BLACK <span style={{ color: "var(--red)" }}>CARDINAL</span>
              </span>
              <span className="footer-brand-sub">DIGITAL MARKETING AGENCY</span>
            </div>
          </Link>
          <p className="footer-desc">
            An independent digital marketing agency helping ambitious brands build
            stronger digital presences, sharper identity systems, and meaningful growth.
          </p>
          <div className="footer-founder-credit">
            <span className="footer-founder-badge">FOUNDERS</span>
            <span className="footer-founder-names">
              Founded by Krishna Gupta &amp; Prem Gupta.
            </span>
          </div>
        </div>

        {/* Column 2 — Navigation */}
        <div>
          <p className="footer-col-title">NAVIGATION</p>
          <nav className="footer-nav-links" aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/#process">Our Process</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Column 3 — Services */}
        <div>
          <p className="footer-col-title">SERVICES</p>
          <nav className="footer-nav-links" aria-label="Services navigation">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
              >
                {service.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 4 — Get In Touch */}
        <div className="footer-contact-col">
          <p className="footer-col-title">GET IN TOUCH</p>
          <p className="footer-contact-item">
            <span className="footer-contact-label">Direct Inquiry</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="footer-email-link"
            >
              {siteConfig.email}
            </a>
          </p>
          <p className="footer-contact-item">
            <span className="footer-contact-label">Location</span>
            <span className="footer-location-text">{siteConfig.location}</span>
          </p>
          <Link href="/contact" className="footer-start-link">
            <span>Start a Project</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-left">
          <span>
            &copy; {new Date().getFullYear()} Black Cardinal. All rights reserved.
          </span>
          <span className="footer-bottom-sep">/</span>
          <span>Founded by Krishna Gupta &amp; Prem Gupta.</span>
        </div>
        <span className="footer-tagline">Built for ambitious brands.</span>
      </div>
    </footer>
  );
}
