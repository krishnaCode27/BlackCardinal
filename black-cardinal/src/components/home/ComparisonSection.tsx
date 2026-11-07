// Server Component — no hooks needed

const badItems = [
  "No consistent brand direction",
  "Disconnected campaigns with no unified message",
  "Inconsistent content calendar",
  "No clear success metrics",
  "Unplanned website experience",
];

const goodItems = [
  "Clear brand positioning and voice",
  "Connected marketing strategy across channels",
  "Consistent, purposeful communication",
  "Measurable objectives and KPIs",
  "Professional, conversion-focused website",
];

export function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div className="comparison-inner">
        <div className="section-header">
          <span className="section-eyebrow">GROWTH STRATEGY</span>
          <h2 className="section-title">
            Random Marketing vs.&nbsp;Strategic Growth.
          </h2>
        </div>

        <div className="comparison-grid">
          {/* Left — Random Marketing */}
          <div className="comparison-col col-bad">
            <h3 className="comparison-col-title">Random Marketing</h3>
            <ul className="comparison-items">
              {badItems.map((item) => (
                <li key={item} className="comparison-item">
                  <span className="comparison-icon" aria-hidden="true">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Strategic Growth */}
          <div className="comparison-col col-good">
            <h3 className="comparison-col-title">Strategic Digital Growth</h3>
            <ul className="comparison-items">
              {goodItems.map((item) => (
                <li key={item} className="comparison-item">
                  <span className="comparison-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="comparison-disclaimer">
          Every business is different. Results depend on many factors including
          industry, competition, budget allocation and execution quality.
        </p>
      </div>
    </section>
  );
}
