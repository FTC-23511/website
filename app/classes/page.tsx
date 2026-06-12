import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Magnetic } from "@/components/Magnetic";
import {
  Card,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { site } from "@/content/site";
import {
  curriculum,
  faq,
  forms,
  intro,
  registrationState,
  testimonials,
} from "@/content/classes";

export const metadata: Metadata = {
  title: "LEGO Robotics Classes",
  description: `Hands-on LEGO robotics classes for kids entering grades 3–7, taught by the students of FTC Team ${site.teamNumber} in the ${site.location} area. Build, code, and compete.`,
};

// The page renders one of two states from content/classes.ts — signups open
// (link the signup form) or between sessions (link the interest list).
const cta =
  registrationState === "open"
    ? {
        href: forms.signup,
        label: "Sign up for the next session",
        note: "Signups are open — current dates, location, and pricing are in the form.",
      }
    : {
        href: forms.interest,
        label: "Join the interest list",
        note: "Signups aren't open right now. Leave your email and we'll let you know the moment the next session is announced.",
      };

function ClassCTA({ large = false }: { large?: boolean }) {
  return (
    <div>
      <Magnetic>
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-full bg-cta-bg font-medium text-cta-text transition-all hover:bg-cta-hover active:scale-95 ${
            large ? "px-8 py-3.5 text-base" : "px-6 py-3 text-sm"
          }`}
        >
          {cta.label}
        </a>
      </Magnetic>
      <p className="mt-3 text-sm leading-relaxed text-faint">{cta.note}</p>
    </div>
  );
}

export default function ClassesPage() {
  return (
    <>
      <PageHero
        kicker="LEGO robotics classes"
        title={`${intro.name}, taught by the team`}
        lead={`For ${intro.grades.toLowerCase()} — no robotics or coding experience needed. Kids build a real robot, learn to program it, and finish ready for FIRST LEGO League.`}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              kicker="What it is"
              title="Build it. Code it. Compete with it."
              lead={intro.summary}
            />
            <div className="mt-8">
              <ClassCTA large />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SpotlightCard className="bg-surface-raised">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Who teaches it
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {intro.whoTeaches}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Over{" "}
                <span className="font-semibold text-foreground">
                  70 students
                </span>{" "}
                have come through our classes so far — and class fees are one of
                the main ways our team funds its competition season.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </Section>

      {/* Curriculum */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="The curriculum"
            title="Seven sessions, zero to mock competition"
            lead="We designed the curriculum ourselves, around LEGO® SPIKE Prime kits and a Scratch-based coding app. Every session is hands-on — kids spend their time building and programming, not watching."
          />
        </Reveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((c, i) => (
            <Reveal key={c.title} delay={i * 50}>
              <SpotlightCard className="h-full">
                <p className="font-mono text-xs text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.detail}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Testimonials + photos — render only when the team supplies them. */}
      {testimonials.length > 0 && (
        <Section className="border-t border-hairline">
          <Reveal>
            <SectionHeading kicker="From parents" title="What families say" />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {testimonials.map((t) => (
              <Reveal key={t.quote}>
                <Card>
                  <blockquote className="text-sm leading-relaxed text-muted">
                    “{t.quote}”
                  </blockquote>
                  <p className="mt-3 text-xs text-faint">— {t.attribution}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}
      {/* PLACEHOLDER: class photos — add a photo strip here once approved
          images land in public/classes/. */}

      {/* FAQ */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="Common questions"
            title="The practical stuff"
            lead="Dates, location, and pricing change between sessions, so they always live in the signup form — everything evergreen is here."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 40}>
              <Card className="h-full">
                <h3 className="text-sm font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-8">
          <p className="text-sm leading-relaxed text-muted">
            Anything else? Email us at{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-accent hover:text-accent-strong"
            >
              {site.email}
            </a>{" "}
            — a team member will get back to you.
          </p>
        </Reveal>
      </Section>

      {/* Closing CTA */}
      <Section className="border-t border-hairline">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface px-8 py-14 text-center sm:px-14">
            <div className="hero-glow absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready when you are
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                {registrationState === "open"
                  ? "The signup form has this session's dates, location, and pricing — and a confirmation email lands as soon as you submit."
                  : "Sessions run several times a year. The interest list is the best way to hear about the next one first."}
              </p>
              <div className="mt-8 flex justify-center">
                <ClassCTA />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
