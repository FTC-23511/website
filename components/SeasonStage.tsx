"use client";

import { useEffect, useRef, useState } from "react";
import type { Season } from "@/content/robots";

/**
 * Interactive 3D season gallery: the three season cards sit on a rotating
 * ring in real CSS 3D space (no WebGL, no dependencies). Rotate by dragging,
 * arrow buttons, or clicking a side card; clicking the front card jumps to
 * that season's details below. Keyboard and reduced-motion safe — buttons
 * are plain focusable controls and transitions collapse to instant.
 */
export function SeasonStage({ seasons }: { seasons: Season[] }) {
  const count = seasons.length;
  const step = 360 / count;
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(420);
  const drag = useRef<{ startX: number; startIndex: number } | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () =>
      setRadius(Math.max(260, Math.min(430, el.offsetWidth * 0.36)));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const active = ((index % count) + count) % count;

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { startX: e.clientX, startIndex: index };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 70) {
      setIndex(drag.current.startIndex - Math.round(dx / 70));
      drag.current = { startX: e.clientX, startIndex: index };
    }
  };

  const onPointerUp = () => {
    drag.current = null;
  };

  return (
    <div
      ref={stageRef}
      role="group"
      aria-roledescription="carousel"
      aria-label="Seasons in 3D"
      className="relative"
    >
      <div
        className="stage3d mx-auto h-[340px] max-w-3xl cursor-grab touch-pan-y select-none active:cursor-grabbing sm:h-[360px]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="stage3d-ring relative h-full w-full"
          style={{ transform: `rotateY(${-index * step}deg)` }}
        >
          {seasons.map((season, i) => {
            const isActive = i === active;
            return (
              <div
                key={season.slug}
                className="stage3d-card absolute left-1/2 top-1/2 h-72 w-64 -translate-x-1/2 -translate-y-1/2 sm:w-72"
                style={{
                  transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
                  opacity: isActive ? 1 : 0.45,
                  filter: isActive ? "none" : "blur(1px) brightness(0.85)",
                }}
              >
                <a
                  href={`#${season.slug}`}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`${season.game} ${season.years}${isActive ? " — jump to details" : ""}`}
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                      // Rotate the shortest way around the ring to card i.
                      const diff =
                        ((i - active + count + Math.floor(count / 2)) % count) -
                        Math.floor(count / 2);
                      setIndex(index + diff);
                    }
                  }}
                  className="flex h-full w-full flex-col justify-between rounded-2xl border border-hairline bg-surface p-6 shadow-[0_20px_60px_-25px_var(--glow)] transition-colors hover:border-accent-bright/60"
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {season.years}
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight">
                      {season.game}
                    </p>
                    {season.robot && (
                      <p className="mt-1 text-sm text-muted">
                        Robot: {season.robot}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs leading-relaxed text-muted">
                      {season.awards[0]}
                    </p>
                    <p className="font-mono text-xs text-faint">
                      {season.events} events
                      {isActive && (
                        <span className="ml-2 text-accent">
                          ↓ see the season
                        </span>
                      )}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous season"
          onClick={() => setIndex(index - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="flex gap-2" aria-hidden="true">
          {seasons.map((season, i) => (
            <span
              key={season.slug}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-accent" : "w-1.5 bg-faint/50"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next season"
          onClick={() => setIndex(index + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
