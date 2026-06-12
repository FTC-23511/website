import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SeasonStage } from "@/components/SeasonStage";
import { SpotlightCard } from "@/components/SpotlightCard";
import { AccentLink, Section } from "@/components/primitives";
import { site } from "@/content/site";
import { seasons } from "@/content/robots";

export const metadata: Metadata = {
  title: "Robots",
  description: `Three seasons of ${site.name} robots — from our rookie year to Cypher, the coaxial swerve machine that competed at the FIRST World Championship.`,
};

export default function RobotsPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-hairline">
        <div className="dot-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pt-44">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-accent">
              The robots
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              A new game every year. A new robot every year.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted">
              Each fall, FIRST announces a new game — and every team designs,
              builds, and programs a robot from scratch to play it. These are
              ours. Drag the ring or pick a season; every result comes straight
              from the official FIRST record.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-12">
            <SeasonStage seasons={seasons} />
          </Reveal>
        </div>
      </div>

      {seasons.map((season, idx) => (
        <Section
          key={season.slug}
          id={season.slug}
          className={idx > 0 ? "border-t border-hairline" : ""}
        >
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {season.years}
              </p>
              <p className="font-mono text-xs text-faint">
                {season.events} official events
              </p>
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              {season.game}
              {season.robot && (
                <span className="text-muted"> · {season.robot}</span>
              )}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
              {season.summary}
            </p>
          </Reveal>

          <div
            className={`mt-10 grid gap-8 ${
              season.mechanisms.length > 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"
            }`}
          >
            {season.mechanisms.length > 0 && (
              <Reveal delay={40}>
                <h3 className="text-xs font-medium uppercase tracking-wider text-faint">
                  How the robot works
                </h3>
                <ul className="mt-4 space-y-3">
                  {season.mechanisms.map((m) => (
                    <li
                      key={m}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span aria-hidden="true" className="mt-px text-accent">
                        ▪
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            <Reveal delay={80}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-faint">
                Season highlights
              </h3>
              <ul className="mt-4 space-y-3">
                {season.highlights.map((h) => (
                  <li
                    key={h}
                    className="group flex gap-3 text-sm leading-relaxed text-muted transition-colors hover:text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-px select-none text-accent transition-transform group-hover:translate-x-1"
                    >
                      ▸
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-faint">
                Awards
              </h3>
              <div className="mt-4 space-y-3">
                {season.awards.map((a) => (
                  <SpotlightCard key={a} className="py-4">
                    <p className="text-sm leading-relaxed text-muted">{a}</p>
                  </SpotlightCard>
                ))}
              </div>
            </Reveal>
          </div>

          {/* PLACEHOLDER: robot photos / renders per season — no approved
              imagery yet (SPEC v2 §5). Add a media column when assets land. */}
        </Section>
      ))}

      <Section className="border-t border-hairline">
        <Reveal>
          <p className="text-sm leading-relaxed text-muted">
            Want to see how these machines are designed? Our full CAD is public
            — every robot, every mechanism, version history included.
          </p>
          <div className="mt-4">
            <AccentLink href="/resources">
              Browse the CAD and portfolios
            </AccentLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
