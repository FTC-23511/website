import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { DecodeText } from "@/components/DecodeText";
import { Marquee } from "@/components/Marquee";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
  AccentLink,
  CTAButton,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { seasons, site, sponsors, stats } from "@/content/team";

export const metadata: Metadata = {
  description: `${site.name}, FTC Team ${site.teamNumber} from ${site.location}. World Championship Inspire Award finalists building robots — and making STEM accessible to all.`,
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-hairline">
        <div className="dot-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 sm:pb-32 sm:pt-52">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {site.tagline} · {site.location}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
              <DecodeText text="We solve hard problems." />
              <br />
              <span className="text-muted">Then we share the answers.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              {site.mission} Three seasons in, that’s meant a World Championship
              Inspire Award run, an open-source library used by teams
              everywhere, and robotics classes for the next generation of
              builders.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton href="/sponsors">Sponsor the team</CTAButton>
              <CTAButton href="/robots" variant="ghost">
                See the robots
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stats band */}
      <Section>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </Section>

      {/* Season highlight */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="Latest season"
            title="DECODE 2025–26: from league meets to Houston"
            lead={seasons[0].summary}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {seasons[0].highlights.slice(0, 4).map((h, i) => (
            <Reveal key={h} delay={i * 60}>
              <SpotlightCard tilt>
                <p className="text-sm leading-relaxed text-muted">
                  <span
                    className="mr-3 font-mono text-xs text-accent"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {h}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-8">
          <AccentLink href="/robots">
            Every season, every robot — in 3D
          </AccentLink>
        </Reveal>
      </Section>

      {/* Open source / community */}
      <Section className="border-t border-hairline">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              kicker="Beyond the field"
              title="Built in the open"
              lead="Competition is one weekend at a time — the work that compounds is everything we publish. SolversLib, our maintained fork of FTCLib, powers code for FTC teams worldwide. Our CAD and engineering documents are public. Our LEGO robotics classes start grade-schoolers down the same path we took."
            />
            <div className="mt-8">
              <AccentLink href="/outreach">How we give back</AccentLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SpotlightCard tilt className="bg-surface-raised">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                solverslib · quickstart
              </p>
              <pre className="mt-4 overflow-x-auto font-mono text-sm leading-relaxed text-muted">
                <code>{`dependencies {
    implementation "org.solverslib:core:+"
    implementation "org.solverslib:pedroPathing:+"
}`}</code>
              </pre>
              <p className="mt-4 text-xs leading-relaxed text-faint">
                The actively maintained fork of FTCLib — command-based
                architecture, hardware wrappers, and gamepad tooling for FTC
                teams moving past Blocks.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </Section>

      {/* Sponsor marquee */}
      <div className="border-t border-hairline py-12">
        <p className="px-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Backed by
        </p>
        <Marquee className="mt-6">
          {sponsors.map((name) => (
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

      {/* Sponsor CTA */}
      <Section className="border-t border-hairline">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface px-8 py-14 text-center sm:px-14">
            <div className="hero-glow absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Self-funded. No membership fees. Powered by sponsors.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Every dollar goes to parts, competition fees, and free community
                programs. Join the companies backing the next generation of
                engineers.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <CTAButton href="/sponsors">Become a sponsor</CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
