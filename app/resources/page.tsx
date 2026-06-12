import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { PageHero, Section, SectionHeading } from "@/components/primitives";
import { site } from "@/content/site";
import { groups } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: `${site.name}'s public engineering work: engineering portfolios, full robot CAD in Onshape, and open-source FTC software — free for any team to learn from.`,
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Everything we publish, in one place"
        lead="We learned from teams who shared their work, so we share ours. Portfolios, CAD, and code — all public, all free to learn from. Everything links out to where it actually lives."
      />

      {groups.map((group, gi) => (
        <Section
          key={group.title}
          className={gi > 0 ? "border-t border-hairline" : ""}
        >
          <Reveal>
            <SectionHeading
              kicker={`0${gi + 1}`}
              title={group.title}
              lead={group.blurb}
            />
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {group.links.map((link, i) => (
              <Reveal key={link.href} delay={i * 50}>
                <li className="h-full">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <SpotlightCard className="h-full">
                      <p className="text-sm font-semibold text-accent">
                        {link.label} ↗
                      </p>
                      {link.note && (
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {link.note}
                        </p>
                      )}
                    </SpotlightCard>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </Section>
      ))}

      <Section className="border-t border-hairline">
        <Reveal>
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            Questions about any of it — or using SolversLib on your team? Email{" "}
            <a
              href={`mailto:${site.softwareEmail}`}
              className="font-medium text-accent hover:text-accent-strong"
            >
              {site.softwareEmail}
            </a>{" "}
            for software, or{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-accent hover:text-accent-strong"
            >
              {site.email}
            </a>{" "}
            for everything else.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
