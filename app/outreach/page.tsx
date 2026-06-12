import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
  AccentLink,
  CTAButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { site } from "@/content/site";
import { programs, recognition } from "@/content/outreach";

export const metadata: Metadata = {
  title: "Outreach",
  description: `How ${site.name} gives back: LEGO robotics classes for 70+ kids, curriculum for the RISE School in India, and open engineering resources for FTC teams everywhere.`,
};

export default function OutreachPage() {
  return (
    <>
      <PageHero
        kicker="Outreach"
        title="The robot retires every season. The community work doesn't."
        lead={site.mission}
      />

      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 80}>
              <SpotlightCard tilt className="flex h-full flex-col">
                <h2 className="text-lg font-semibold">{program.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {program.description}
                </p>
                {program.link && (
                  <div className="mt-5">
                    <AccentLink
                      href={program.link.href}
                      external={program.link.external}
                    >
                      {program.link.label}
                    </AccentLink>
                  </div>
                )}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              kicker="Why it matters to us"
              title="We were the kids in the class once"
              lead="This team grew out of FIRST LEGO League. The students teaching our classes learned the same way a few years earlier — which is exactly why the curriculum works. Outreach isn't a checkbox for an award; it's our own story, running in reverse."
            />
          </Reveal>
          <Reveal delay={100}>
            <SpotlightCard className="bg-surface-raised">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Recognition
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {recognition.map((r) => (
                  <li key={r.award}>
                    <span className="text-foreground">{r.award}</span> —{" "}
                    {r.context}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface px-8 py-14 text-center sm:px-14">
            <div className="hero-glow absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Want a class for your kid — or your school?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Our LEGO robotics classes are how most families meet us. We also
                work with schools, libraries, and other teams — if you have
                something in mind, email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-accent hover:text-accent-strong"
                >
                  {site.email}
                </a>
                .
              </p>
              <div className="mt-8 flex justify-center">
                <CTAButton href="/classes">About the classes</CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
