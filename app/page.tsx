import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Marquee } from "@/components/Marquee";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
  AccentLink,
  CTAButton,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { site } from "@/content/site";
import { stats } from "@/content/robots";
import { tiers } from "@/content/sponsors";

export const metadata: Metadata = {
  description: `${site.name}, FTC Team ${site.teamNumber} from ${site.location}. Student robotics team — World Championship Inspire Award finalists, free and affordable LEGO robotics classes, open engineering resources.`,
};

const sponsorNames = tiers.flatMap((t) => t.sponsors.map((s) => s.name));

export default function Home() {
  return (
    <>
      {/* Hero — who we are, in plain language (SPEC v2 §2: assume zero
          robotics knowledge in the first screen and a half). */}
      <div className="relative overflow-hidden border-b border-hairline">
        <div className="dot-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 sm:pb-28 sm:pt-48">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Student robotics · {site.location}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl">
              We’re the Seattle Solvers.
              <br />
              <span className="text-muted">
                We build robots — and builders.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              We’re a team of middle and high schoolers from around{" "}
              {site.location}, competing in FIRST Tech Challenge — a worldwide
              program where students design, build, and program a robot from
              scratch every year. Between competitions, we teach LEGO robotics
              classes to kids in our community and publish our engineering work
              for other teams to use.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton href="/classes">Robotics classes for kids</CTAButton>
              <CTAButton href="/about" variant="ghost">
                Meet the team
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* FIRST 101 strip — the two-minute version for newcomers. */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              kicker="New to FIRST?"
              title="The two-minute version"
              lead="FIRST is a global nonprofit that runs robotics competitions for kids — think of it as a sports league where the sport is engineering. We compete in FIRST Tech Challenge (FTC), its program for middle and high schoolers: every fall a new game is announced, and teams have months to design, build, and program a robot to play it."
            />
            <div className="mt-6">
              <AccentLink href="/about">
                How the team works, and the longer story
              </AccentLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SpotlightCard className="bg-surface-raised">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Where that’s taken us
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                In the 2025–26 season our robot ranked first in qualifications
                at the Washington State Championship, and we earned a spot at
                the FIRST World Championship in Houston — where we placed 2nd
                for the Inspire Award, the competition’s highest honor, judging
                engineering, documentation, and community work together.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </Section>

      {/* Classes — front and center (SPEC v2 §2). */}
      <Section className="border-t border-hairline">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              kicker="LEGO robotics classes"
              title="We teach kids to build"
              lead="Our team runs hands-on LEGO robotics classes for students entering grades 3–7, taught by team members using a curriculum we designed ourselves. Over 70 kids have come through so far — building robots, learning to code, and finishing ready to join a FIRST LEGO League team."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/classes">Learn about the classes</CTAButton>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-4">
              <SpotlightCard>
                <p className="text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">
                    Taught by students who’ve been there.
                  </span>{" "}
                  We started in FIRST LEGO League ourselves — the curriculum is
                  built from what worked when we were the ones learning.
                </p>
              </SpotlightCard>
              <SpotlightCard>
                <p className="text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">
                    Signups fund the team.
                  </span>{" "}
                  Class fees are one of the main ways we pay for parts and
                  competition fees — every signup directly supports a student
                  robotics team.
                </p>
              </SpotlightCard>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Impact stats */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading kicker="The record" title="Three seasons in" />
        </Reveal>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <SpotlightCard className="h-full">
                <dd className="text-4xl font-semibold tracking-tight text-accent">
                  <CountUp value={stat.value} />
                </dd>
                <dt className="mt-2 text-sm font-medium text-foreground">
                  {stat.label}
                </dt>
                <p className="mt-1 text-xs leading-relaxed text-faint">
                  {stat.detail}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={120} className="mt-8">
          <AccentLink href="/robots">The robots behind the record</AccentLink>
        </Reveal>
      </Section>

      {/* Sponsor marquee + CTA — present, not the lead. */}
      <div className="border-t border-hairline py-12">
        <p className="px-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Made possible by
        </p>
        <Marquee className="mt-6">
          {sponsorNames.map((name) => (
            <Link
              key={name}
              href="/sponsors"
              className="mx-7 whitespace-nowrap text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {name}
            </Link>
          ))}
        </Marquee>
      </div>

      <Section className="border-t border-hairline">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface px-8 py-14 text-center sm:px-14">
            <div className="hero-glow absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {site.funding}.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Joining our team costs nothing — sponsors and class fees cover
                parts, competition fees, and the programs we run for free. If
                your company wants to back student engineering, we’d love to
                talk.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <CTAButton href="/sponsors">Sponsor the team</CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
