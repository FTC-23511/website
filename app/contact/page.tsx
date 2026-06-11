import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Card, PageHero, Section } from "@/components/primitives";
import { site, socials } from "@/content/team";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${site.name}, FTC Team ${site.teamNumber} — sponsorships, classes, SolversLib support, and everything else.`,
};

const channels = [
  {
    title: "Everything else",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Sponsorships, classes, press, collaborations — one inbox, fast answers.",
  },
  {
    title: "SolversLib & software",
    value: site.softwareEmail,
    href: `mailto:${site.softwareEmail}`,
    note: "Library questions, bug reports, and contributions from other teams.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Talk to the team"
        lead={`Based in ${site.location}. We answer email like a team that wants sponsors and students to actually reach us.`}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <Card className="h-full">
                <h2 className="text-xs font-medium uppercase tracking-wider text-faint">
                  {c.title}
                </h2>
                <a
                  href={c.href}
                  className="mt-2 block break-all text-lg font-semibold text-accent transition-colors hover:text-accent-strong"
                >
                  {c.value}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.note}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <h2 className="text-xs font-medium uppercase tracking-wider text-faint">
            Follow the build
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-sm text-muted transition-colors hover:border-white/25 hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160} className="mt-10">
          <Card className="border-dashed">
            <p className="text-sm leading-relaxed text-faint">
              Want to support the team financially? Donations run through HCB
              and the Washington FIRST Boosters — email{" "}
              <a href={`mailto:${site.email}`} className="text-muted underline">
                {site.email}
              </a>{" "}
              and we’ll send the right link for your situation.
              {/* PLACEHOLDER: direct HCB / Aplos / Hack Club donation URLs —
                  the team's current site lists these methods but the exact
                  links need confirming before publishing. */}
            </p>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
