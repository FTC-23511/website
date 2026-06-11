"use client";

import { useRef } from "react";

/**
 * Card with a pointer-tracking gold spotlight (.spotlight in globals.css)
 * and an optional subtle 3D tilt. The default surface matches primitives'
 * Card so the two can be mixed in one grid.
 */
export function SpotlightCard({
  children,
  tilt = false,
  className = "",
}: {
  children: React.ReactNode;
  tilt?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (
      tilt &&
      e.pointerType === "mouse" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const rx = ((y - r.height / 2) / r.height) * -5;
      const ry = ((x - r.width / 2) / r.width) * 5;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`spotlight rounded-xl border border-hairline bg-surface p-6 transition-[transform,border-color] duration-300 hover:border-foreground/25 ${className}`}
    >
      {children}
    </div>
  );
}
