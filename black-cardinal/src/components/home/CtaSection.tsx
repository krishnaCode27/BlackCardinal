import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="cta-section">
      {/* Background glow */}
      <div className="cta-glow" aria-hidden="true" />

      <div className="cta-inner">
        <p className="cta-eyebrow">YOUR NEXT MOVE</p>

        <h2 className="cta-headline">
          Ready to Build Something Remarkable?
        </h2>

        <p className="cta-subtext">
          Let&apos;s create a stronger digital presence for your business.
        </p>

        <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", fontSize: 15 }}>
          Start a Conversation <ArrowUpRight size={18} />
        </Link>

        <p className="cta-secondary-text">No commitment. Just a conversation.</p>
      </div>
    </section>
  );
}
