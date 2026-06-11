import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SeasonStage } from "@/components/SeasonStage";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Section } from "@/components/primitives";
import { seasons, site } from "@/content/team";

export const metadata: Metadata = {
  title: "Robots",
  description: `Three seasons of ${site.name} robots — from rookie-year CENTERSTAGE to the coaxial swerve machine that competed at the FIRST World Championship.`,
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
              Three seasons. Three machines. One trajectory.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted">
              Drag the ring, or pick a season — every result below comes
              straight from the official FIRST record.
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
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
              {season.summary}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal delay={60}>
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
              imagery yet (SPEC §4). Layout reserves no slot on purpose; add a
              media column here when assets land. */}
        </Section>
      ))}
    </>
  );
}
