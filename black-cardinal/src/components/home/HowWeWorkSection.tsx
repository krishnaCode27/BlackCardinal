export function HowWeWorkSection() {
  return (
    <section className="principles" aria-labelledby="how-we-work-heading">
      <div className="why-choose-inner">
        <div className="why-choose-header">
          <div className="section-label-wrap">
            <span className="section-label-bar" aria-hidden="true" />
            <span className="section-label">HOW WE WORK</span>
          </div>
          <h2 id="how-we-work-heading" className="section-title">
            How we work
          </h2>
        </div>

        <div className="principles-grid">
          <article className="principle-card">
            <h3>Founder-led</h3>
            <p>You work directly with the two co-founders.</p>
          </article>
          <article className="principle-card">
            <h3>Clear communication</h3>
            <p>Plain updates, no jargon, no surprises.</p>
          </article>
          <article className="principle-card">
            <h3>Built around your goals</h3>
            <p>We plan around what your business needs.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
