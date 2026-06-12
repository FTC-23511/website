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
import { donations, site } from "@/content/site";
import { stats } from "@/content/robots";
import { funding, packetUrl, reasons, tiers } from "@/content/sponsors";

export const metadata: Metadata = {
  title: "Sponsors",
  description: `Sponsor ${site.name}, FTC Team ${site.teamNumber} — a World Championship Inspire Award finalist. The full sponsorship pitch: what funding enables, current sponsors, and how to give.`,
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        kicker="Sponsorship"
        title="The pitch, start to finish"
        lead={`This page is our sponsorship package. ${site.funding} — here's what your support makes possible, who already backs us, and how to start.`}
      />

      {/* Why sponsor */}
      <Section>
        <Reveal>
          <SectionHeading
            kicker="Why sponsor a student team"
            title="A small budget doing outsized work"
            lead="We're students doing real engineering with public results — and we treat sponsorships the way a nonprofit treats grants: with accountability for every dollar."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <SpotlightCard className="h-full">
                <h3 className="text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.body}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The record, for credibility */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="The track record"
            title="What we've done with past support"
          />
        </Reveal>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60}>
              <SpotlightCard className="h-full">
                <dd className="text-3xl font-semibold tracking-tight text-accent">
                  {stat.value}
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

      {/* What funding enables */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="Where money goes"
            title="Three things, transparently"
            lead="Through HCB, our finances are public — anyone can see what we spend, anytime."
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
      </Section>

      {/* Current sponsors, by tier */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="Current sponsors"
            title="The companies behind the team"
            lead="From global engineering companies to local businesses — this is what community-funded robotics looks like."
          />
        </Reveal>
        <div className="mt-10 space-y-10">
          {tiers.map((tier, ti) => (
            <Reveal key={tier.tier} delay={ti * 50}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {tier.tier}
                </h3>
                {/* PLACEHOLDER: sponsor logo images — styled names render
                    until logo files land in public/sponsors/. */}
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tier.sponsors.map((s) => (
                    <li key={s.name} className="h-full">
                      <SpotlightCard className="h-full">
                        <p className="text-sm font-semibold">{s.name}</p>
                        {s.note && (
                          <p className="mt-1.5 text-xs leading-relaxed text-muted">
                            {s.note}
                          </p>
                        )}
                      </SpotlightCard>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How to give */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="Ways to give"
            title="Donations are tax-deductible"
            lead="All three options run through registered nonprofits. For corporate sponsorships — tiers, benefits, and logo placement — email us and we'll send the full package."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {donations.map((d, i) => (
            <Reveal key={d.href} delay={i * 60}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full hover:border-accent/40">
                  <p className="text-sm font-semibold text-accent">
                    {d.label} →
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {d.note}
                  </p>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
        {packetUrl && (
          <Reveal delay={100} className="mt-8">
            <p className="text-sm text-muted">
              Prefer a document?{" "}
              <a
                href={packetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:text-accent-strong"
              >
                Download the sponsorship package (PDF)
              </a>{" "}
              — the same pitch, formatted for grant applications.
            </p>
          </Reveal>
        )}
      </Section>

      {/* Contact CTA */}
      <Section className="border-t border-hairline">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface px-8 py-14 text-center sm:px-14">
            <div className="hero-glow absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                One email starts it
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Tell us who you are and what you have in mind — a student from
                our business team will reply with tiers, benefits, and exactly
                where your contribution would go.
              </p>
              <div className="mt-8 flex justify-center">
                <Magnetic>
                  <a
                    href={`mailto:${site.businessEmail}?subject=Sponsoring%20FTC%20${site.teamNumber}`}
                    className="inline-flex items-center justify-center rounded-full bg-cta-bg px-6 py-3 text-sm font-medium text-cta-text transition-all hover:bg-cta-hover active:scale-95"
                  >
                    {site.businessEmail}
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
