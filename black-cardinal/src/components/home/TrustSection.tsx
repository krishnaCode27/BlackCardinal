// Server Component — no "use client"

export function TrustSection() {
  return (
    <section className="trust-section" aria-labelledby="trust-heading">
      <div className="trust-inner">
        {/* ── Left: Headline block ── */}
        <div className="trust-left">
          <div className="trust-label-wrap">
            <span className="trust-label-bar" aria-hidden="true" />
            <span className="trust-label">WHO WE ARE</span>
          </div>
          <h2 className="trust-heading" id="trust-heading">
            Your Business Deserves More Than Just{" "}
            <span className="trust-heading-accent">Marketing.</span>
          </h2>
          <p className="trust-subtext">
            Black Cardinal is an independent agency that puts strategy,
            creativity and technology to work for ambitious brands.
          </p>
        </div>

        {/* ── Right: Editorial columns ── */}
        <div className="trust-columns">
          <div className="trust-col">
            <div className="trust-col-number">01</div>
            <h3 className="trust-col-title">Strategy First</h3>
            <p className="trust-col-body">
              Every engagement starts with understanding your business, your
              audience and your goals. We build a focused plan before we build
              anything else — so creative execution serves a clear purpose.
            </p>
          </div>

          <div className="trust-col">
            <div className="trust-col-number">02</div>
            <h3 className="trust-col-title">Distinctive Branding</h3>
            <p className="trust-col-body">
              A brand is more than a logo. We help businesses develop a
              consistent visual identity and voice that sets them apart and
              builds recognition across every channel and touchpoint.
            </p>
          </div>

          <div className="trust-col">
            <div className="trust-col-number">03</div>
            <h3 className="trust-col-title">Owned Digital Presence</h3>
            <p className="trust-col-body">
              From search visibility to social media to your website, we ensure
              your digital presence works together — attracting the right
              people and turning attention into meaningful business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
