import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  AccentLink,
  Card,
  CTAButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { outreach, site } from "@/content/team";

export const metadata: Metadata = {
  title: "Outreach",
  description: `How ${site.name} gives back: SolversLib, free LEGO robotics classes for grades 3–7, and open CAD and engineering documentation for the FTC community.`,
};

export default function OutreachPage() {
  return (
    <>
      <PageHero
        kicker="Outreach"
        title="The robot retires every season. The community work compounds."
        lead={site.mission}
      />

      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {outreach.map((program, i) => (
            <Reveal key={program.title} delay={i * 80}>
              <Card className="flex h-full flex-col">
                <h2 className="text-lg font-semibold">{program.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {program.description}
                </p>
                {program.link && (
                  <div className="mt-5">
                    <AccentLink href={program.link.href} external>
                      {program.link.label}
                    </AccentLink>
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              kicker="Why it matters"
              title="We were the kids in the class once"
              lead="This team grew out of FIRST LEGO League. The students teaching our grade 3–7 robotics classes learned the same way a few years earlier — which is exactly why the curriculum works. Outreach isn't a checkbox for an award; it's the team's origin story running in reverse."
            />
          </Reveal>
          <Reveal delay={100}>
            <Card className="bg-surface-raised">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Recognition
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>
                  <span className="text-foreground">
                    Inspire Award 2nd Place
                  </span>{" "}
                  — FIRST World Championship, Lovelace Division. FTC’s top
                  award, judging outreach and engineering together.
                </li>
                <li>
                  <span className="text-foreground">Sustain Award 1st</span> —
                  Capek Super Qualifier, for sustainable community impact.
                </li>
                <li>
                  <span className="text-foreground">Motivate Award</span> —
                  recognized for team spirit and STEM advocacy since rookie
                  year.
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface px-8 py-14 text-center sm:px-14">
            <div className="hero-glow absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Want a class, a mentor session, or a collab?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                We run programs for schools, libraries, and other teams. If
                you’re in the Seattle area — or anywhere SolversLib reaches —
                get in touch.
              </p>
              <div className="mt-8 flex justify-center">
                <CTAButton href="/contact">Contact the team</CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
