"use client";

import { useEffect, useRef } from "react";

/**
 * Animates the first number inside `value` from 0 when scrolled into view —
 * "13" counts up, "2nd" counts the 2, "Top 3%" counts the 3. Static for
 * reduced motion or values with no digits.
 */
export function CountUp({
  value,
  className = "",
  durationMs = 1100,
}: {
  value: string;
  className?: string;
  durationMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = value.match(/(\d[\d,]*)/);
    if (
      !match ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[1].length);
    const format = (n: number) =>
      `${prefix}${n.toLocaleString("en-US")}${suffix}`;

    el.textContent = format(0);
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = format(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
