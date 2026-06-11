"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "ABCDEFGHJKMNPQRSTUVWXYZ0123456789#$%&";

/**
 * Scramble-decode reveal: characters cycle through random glyphs and settle
 * left to right — a nod to the DECODE season. Screen readers always get the
 * real text; the animation runs on an aria-hidden layer. Reduced motion or
 * no-JS renders plain text.
 */
export function DecodeText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let raf = 0;
    const totalFrames = text.length * 3 + 12;
    const tick = () => {
      frame++;
      const settled = Math.floor((frame / totalFrames) * text.length * 1.15);
      el.textContent = [...text]
        .map((ch, i) => {
          if (ch === " " || i < settled) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      if (settled < text.length) {
        raf = requestAnimationFrame(tick);
      } else {
        el.textContent = text;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
