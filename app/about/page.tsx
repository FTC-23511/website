import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
  AccentLink,
  Card,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { site } from "@/content/site";
import {
  first101,
  leadership,
  mentors,
  story,
  subteams,
  values,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: `Who the ${site.name} are: a student-led FIRST Tech Challenge team from ${site.location} — and a plain-language intro to FIRST for anyone new to it.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="A team of students who like building things that work"
        lead={`We're a community robotics team from ${site.location} — middle and high schoolers from different schools, plus mentors who've been where we are. Founded ${site.rookieYear}; been busy since.`}
      />

      {/* The story */}
      <Section>
        <Reveal>
          <SectionHeading
            kicker="The story"
            title="From LEGO league to Houston"
          />
        </Reveal>
        <div className="mt-8 max-w-3xl space-y-5">
          {story.paragraphs.map((p) => (
            <Reveal key={p.slice(0, 30)}>
              <p className="text-base leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FIRST 101 */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="New to FIRST?"
            title="What all these words mean"
            lead={first101.lead}
          />
        </Reveal>
        <dl className="mt-10 grid gap-4 md:grid-cols-2">
          {first101.items.map((item, i) => (
            <Reveal key={item.term} delay={i * 60}>
              <SpotlightCard className="h-full">
                <dt className="text-base font-semibold text-accent">
                  {item.term}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {item.detail}
                </dd>
              </SpotlightCard>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Values */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="What we believe"
            title="Straight from the team charter"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <SpotlightCard className="h-full">
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Structure + people */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="The people"
            title="Ten students, three subteams, one robot"
            lead="Everyone owns something real, and subteams overlap on purpose — the best mechanisms come from build and programming arguing early."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {subteams.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <SpotlightCard tilt className="h-full">
                <h3 className="text-base font-semibold text-accent">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-12">
          <h3 className="text-xs font-medium uppercase tracking-wider text-faint">
            Leadership
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {leadership.map((m, i) => (
              <Reveal key={m.name} delay={i * 50}>
                <li className="h-full">
                  <SpotlightCard className="h-full text-center">
                    {/* PLACEHOLDER: member photos — initials render until
                        approved photos land in public/team/. */}
                    <div
                      aria-hidden="true"
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-hairline bg-surface-raised text-xl font-semibold text-accent"
                    >
                      {m.name[0]}
                    </div>
                    <p className="mt-3 text-sm font-semibold">{m.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {m.role}
                    </p>
                  </SpotlightCard>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-4 text-xs text-faint">
            Plus five more members across programming, design, build, finance,
            and outreach — full roster and photos coming once everyone signs
            off.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Card>
            <h3 className="text-xs font-medium uppercase tracking-wider text-faint">
              Mentors
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {mentors.summary}
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* Where to next */}
      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="Keep going"
            title="See the work"
            lead="The proof is in what we've built — robots, classes, and resources other teams actually use."
          />
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <AccentLink href="/robots">The robots</AccentLink>
            <AccentLink href="/classes">The classes</AccentLink>
            <AccentLink href="/outreach">The outreach</AccentLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
