"use client";

import { memo, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export const GlowingEffect = memo(function GlowingEffect({
  blur = 0,
  inactiveZone = 0.01,
  proximity = 64,
  spread = 40,
  variant = "default",
  glow = true,
  className,
  disabled = false,
  movementDuration = 2,
  borderWidth = 1,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (disabled || isReduced) return;
    const container = containerRef.current;
    if (!container) return;

    const parent = container.parentElement;
    if (!parent) return;

    let rafId: number | null = null;
    let currentAngle = 0;
    let targetAngle = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDim = Math.max(rect.width, rect.height) / 2;

      // Check proximity boundary
      const inProximity =
        e.clientX >= rect.left - proximity &&
        e.clientX <= rect.right + proximity &&
        e.clientY >= rect.top - proximity &&
        e.clientY <= rect.bottom + proximity;

      const inInactive = dist < maxDim * inactiveZone;

      if (inProximity && !inInactive) {
        // Calculate angle from center in degrees (0 to 360)
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);
        if (angle < 0) angle += 360;
        targetAngle = angle;

        container.style.setProperty("--active", "1");
      } else if (!glow) {
        container.style.setProperty("--active", "0");
      }
    };

    const handlePointerLeave = () => {
      if (!glow) {
        container.style.setProperty("--active", "0");
      }
    };

    // Smooth angle interpolation loop
    const lerpAngle = (start: number, end: number, factor: number) => {
      let diff = (end - start) % 360;
      if (diff < -180) diff += 360;
      if (diff > 180) diff -= 360;
      return (start + diff * factor + 360) % 360;
    };

    const animateLoop = () => {
      currentAngle = lerpAngle(currentAngle, targetAngle, 0.12);
      container.style.setProperty("--start", `${currentAngle.toFixed(2)}`);
      rafId = requestAnimationFrame(animateLoop);
    };

    // Attach listeners
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    parent.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    rafId = requestAnimationFrame(animateLoop);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      parent.removeEventListener("pointerleave", handlePointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [disabled, isReduced, proximity, inactiveZone, glow]);

  if (disabled) return null;

  // Cardinal red color palette for Black Cardinal brand
  const gradientStops =
    variant === "white"
      ? "rgba(255, 255, 255, 0.95) 0deg, rgba(200, 200, 200, 0.3) 120deg, transparent 240deg"
      : "#E32636 0deg, #B51220 90deg, rgba(227, 38, 54, 0.25) 180deg, transparent 270deg";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -inset-[1px] rounded-[inherit] overflow-hidden",
        className
      )}
      style={
        {
          "--start": "0",
          "--active": glow ? "1" : "0",
          "--spread": `${spread}`,
          "--border-width": `${borderWidth}px`,
          "--movement-duration": `${movementDuration}s`,
        } as React.CSSProperties
      }
    >
      {/* Outer blurred halo */}
      {blur > 0 && (
        <div
          className="absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: "var(--active)",
            filter: `blur(${blur}px)`,
            background: `conic-gradient(from calc((var(--start) - (var(--spread) * 0.5)) * 1deg) at 50% 50%, transparent 0deg, ${gradientStops})`,
          }}
        />
      )}

      {/* Crisp border mask */}
      <div
        className="absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--active)",
          border: "var(--border-width) solid transparent",
          background: `conic-gradient(from calc((var(--start) - (var(--spread) * 0.5)) * 1deg) at 50% 50%, transparent 0deg, ${gradientStops})`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </div>
  );
});

GlowingEffect.displayName = "GlowingEffect";

