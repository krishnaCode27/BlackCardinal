"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function roundToNearest10(n: number) {
  return Math.round(n / 10) * 10;
}

interface FieldConfig {
  id: string;
  label: string;
  prefix?: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

const fields: FieldConfig[] = [
  {
    id: "budget",
    label: "Monthly Marketing Budget",
    prefix: "₹",
    min: 5000,
    max: 500000,
    step: 1000,
    defaultValue: 25000,
  },
  {
    id: "visitors",
    label: "Current Monthly Website Visitors",
    min: 100,
    max: 50000,
    step: 100,
    defaultValue: 1000,
  },
  {
    id: "leads",
    label: "Current Monthly Leads",
    min: 0,
    max: 500,
    step: 1,
    defaultValue: 10,
  },
];

function formatNumber(n: number) {
  return n.toLocaleString("en-IN");
}

export function CalculatorSection() {
  const [budget, setBudget] = useState(25000);
  const [visitors, setVisitors] = useState(1000);
  const [leads, setLeads] = useState(10);

  const setters: Record<string, React.Dispatch<React.SetStateAction<number>>> =
    { budget: setBudget, visitors: setVisitors, leads: setLeads };
  const values: Record<string, number> = { budget, visitors, leads };

  function adjust(id: string, delta: number) {
    const field = fields.find((f) => f.id === id)!;
    setters[id]((prev) => clamp(prev + delta * field.step, field.min, field.max));
  }

  function handleInput(id: string, raw: string) {
    const field = fields.find((f) => f.id === id)!;
    const parsed = parseInt(raw.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(parsed)) {
      setters[id](clamp(parsed, field.min, field.max));
    }
  }

  // Illustrative projections
  const reachBase = roundToNearest10(visitors * 1.5);
  const reachLow = roundToNearest10(reachBase * 0.8);
  const reachHigh = roundToNearest10(reachBase * 1.2);

  const leadsBase = roundToNearest10(leads * 1.4);
  const leadsLow = roundToNearest10(leadsBase * 0.8);
  const leadsHigh = roundToNearest10(leadsBase * 1.2);

  return (
    <section className="calculator-section">
      <div className="calculator-inner">
        <div className="section-header">
          <span className="section-eyebrow">GROWTH EXPLORER</span>
          <h2 className="section-title">Illustrative Marketing Estimates</h2>
          <p className="section-subtitle">
            Adjust the inputs below to explore rough growth ranges. These are
            illustrative figures only — not predictions or guarantees.
          </p>
        </div>

        <div className="calculator-card">
          {/* Inputs */}
          <div className="calculator-inputs">
            {fields.map((field) => (
              <div key={field.id} className="calc-field">
                <label htmlFor={`calc-${field.id}`}>{field.label}</label>
                <div className="calc-input-wrap">
                  {field.prefix && (
                    <span
                      style={{
                        padding: "0 12px",
                        color: "var(--muted)",
                        fontSize: 16,
                        fontWeight: 700,
                        borderRight: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {field.prefix}
                    </span>
                  )}
                  <input
                    id={`calc-${field.id}`}
                    type="number"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={values[field.id]}
                    onChange={(e) => handleInput(field.id, e.target.value)}
                    aria-label={field.label}
                  />
                  <button
                    className="calc-btn"
                    onClick={() => adjust(field.id, -1)}
                    aria-label={`Decrease ${field.label}`}
                    type="button"
                  >
                    −
                  </button>
                  <button
                    className="calc-btn"
                    onClick={() => adjust(field.id, 1)}
                    aria-label={`Increase ${field.label}`}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="calculator-results">
            <div className="results-grid">
              <div className="result-item">
                <p className="result-label">Potential Reach Improvement</p>
                <p className="result-value">{formatNumber(reachBase)}</p>
                <p className="result-range">
                  Estimated range: {formatNumber(reachLow)} –{" "}
                  {formatNumber(reachHigh)} monthly visitors
                </p>
              </div>
              <div className="result-item">
                <p className="result-label">Potential Lead Growth</p>
                <p className="result-value">{formatNumber(leadsBase)}</p>
                <p className="result-range">
                  Estimated range: {formatNumber(leadsLow)} –{" "}
                  {formatNumber(leadsHigh)} leads/month
                </p>
              </div>
            </div>

            <div className="calculator-disclaimer">
              <strong>⚠️ Illustrative estimates only.</strong> These figures are
              generated using simple multipliers and do not represent guaranteed
              outcomes. Actual marketing results depend on many factors including
              industry, competition, budget allocation and execution quality. We
              do not guarantee any specific outcome.
            </div>

            <div className="calculator-cta">
              <Link href="/contact" className="btn-primary">
                Get a real consultation <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
