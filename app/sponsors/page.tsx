import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { PageHero, Section, SectionHeading } from "@/components/primitives";
import { site, sponsors, stats } from "@/content/team";

export const metadata: Metadata = {
  title: "Sponsors",
  description: `Sponsor ${site.name}, FTC Team ${site.teamNumber}: a World Championship Inspire Award finalist that turns every dollar into robots, free classes, and open-source tools.`,
};

const funding = [
  {
    title: "The robot",
    body: "Motors, custom-machined parts, electronics, and the spare assemblies that let us iterate instead of ration. A competitive FTC season is a hardware bill before it's anything else.",
  },
  {
    title: "Competition",
    body: "Event registration, league fees, and travel — including the trip to the FIRST World Championship in Houston that our results earned.",
  },
  {
    title: "Community programs",
    body: "Free LEGO robotics classes for grades 3–7, SolversLib maintenance, and open CAD — the programs that won us the Sustain Award stay free because sponsors cover them.",
  },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        kicker="Sponsors"
        title="Back a team that ships"
        lead={`${site.name} is a ${site.nonprofit} — every sponsorship dollar goes directly to parts, competition fees, and free community programs.`}
      />

      <Section>
        <Reveal>
          <SectionHeading
            kicker="The pitch"
            title="What your support buys"
            lead="Sponsoring an FTC team is one of the highest-leverage STEM investments there is: a small budget, a dozen-plus students doing real engineering, and public results you can point to."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {funding.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <SpotlightCard tilt className="h-full">
                <h3 className="text-base font-semibold text-accent">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-hairline p-5"
              >
                <dd className="text-2xl font-semibold tracking-tight text-accent">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs leading-relaxed text-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="Current sponsors"
            title="The companies behind the team"
            lead="From global engineering software to the neighborhood car wash — this is what a community-funded team looks like."
          />
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-4">
            {sponsors.map((name) => (
              <li
                key={name}
                className="flex min-h-20 items-center justify-center bg-surface px-4 py-6 text-center text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-raised hover:text-foreground"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
        {/* PLACEHOLDER: sponsor logos + tier structure (Gold/Silver/etc.) —
            tiers exist on the team's current sponsorship page but weren't
            captured; confirm tiers and logo permissions before adding. */}
      </Section>

      <Section className="border-t border-hairline">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface px-8 py-14 text-center sm:px-14">
            <div className="hero-glow absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Sponsor the {site.name}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                One email starts it. We’ll send the sponsorship packet with
                tiers, benefits, and exactly where your contribution goes — and
                we put sponsors on the robot, the pits, and this site.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href={`mailto:${site.email}?subject=Sponsoring%20FTC%20${site.teamNumber}`}
                  className="inline-flex items-center justify-center rounded-full bg-cta-bg px-6 py-3 text-sm font-medium text-cta-text transition-all hover:bg-cta-hover active:scale-95"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
