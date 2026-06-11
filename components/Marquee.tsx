/**
 * Infinite horizontal marquee (pure CSS — .marquee in globals.css). Content
 * is rendered twice; the duplicate is aria-hidden. Pauses on hover; wraps
 * statically under prefers-reduced-motion.
 */
export function Marquee({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
