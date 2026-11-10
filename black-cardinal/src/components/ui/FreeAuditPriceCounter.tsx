"use client";

import { useEffect, useRef, useState } from "react";

export function FreeAuditPriceCounter() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    let started = false;
    let startTime = 0;

    const startCounter = () => {
      if (started) return;
      started = true;
      const duration = 2200;

      const tick = (now: number) => {
        if (startTime === 0) {
          startTime = now;
          setPrice(10_000);
          frame = requestAnimationFrame(tick);
          return;
        }
        const progress = Math.min((now - startTime) / duration, 1);
        const remaining = Math.round(10_000 * Math.pow(1 - progress, 2.2));
        setPrice(remaining);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      startCounter();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startCounter();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={counterRef} className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.09),transparent_64%)]" aria-hidden="true">
        <span className="select-none whitespace-nowrap font-display text-[clamp(7rem,23vw,21rem)] font-extrabold leading-none tracking-[-0.08em] text-cyan-100/[0.18] drop-shadow-[0_0_34px_rgba(34,211,238,0.2)]">
          ₹{price.toLocaleString("en-IN")}
        </span>
      </div>
      <span className="sr-only">
        Free SEO and marketing audit. Final price: ₹0.
      </span>
    </>
  );
}
