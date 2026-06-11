import Link from "next/link";

/** Shared layout/typography building blocks (SPEC §2). Server components. */

export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-hairline">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 sm:pb-24 sm:pt-44">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-20 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-base leading-relaxed text-muted">{lead}</p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-hairline bg-surface p-6 transition-colors hover:border-white/20 ${className}`}
    >
      {children}
    </div>
  );
}

export function AccentLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong";
  const arrow = (
    <span
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-0.5"
    >
      →
    </span>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${cls}`}
      >
        {children} {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={`group ${cls}`}>
      {children} {arrow}
    </Link>
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-background hover:bg-accent-strong"
      : "border border-hairline text-foreground hover:border-white/25 hover:bg-surface";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
