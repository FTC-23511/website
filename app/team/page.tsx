import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import {
  AccentLink,
  Card,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { site } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: `Who the ${site.name} are: a student-led FTC team from ${site.location}, organized like an engineering company and obsessive about documentation.`,
};

const values = [
  {
    title: "Document everything",
    body: "We run a Maximum Documentation culture: every test, decision, and failure gets captured the day it happens. Our engineering portfolio isn't reconstructed from memory at the end of the season — it's curated from a complete record.",
  },
  {
    title: "Learning never stops",
    body: "There's always a way to continue our growth day by day. Rookie members ship real work in their first month; veterans level up by teaching.",
  },
  {
    title: "Share the answers",
    body: "Open-source library, public CAD, free classes. If we solved it, another team shouldn't have to solve it from scratch.",
  },
  {
    title: "Accessible to all",
    body: "We're self-funded with no membership fees, because the barrier to engineering should be curiosity — not cost.",
  },
];

const subteams = [
  {
    title: "Mechanical",
    body: "CAD, prototyping, and fabrication — from drivetrain geometry to the last bracket. Home of the coaxial swerve.",
  },
  {
    title: "Software",
    body: "Robot code, autonomous routines, and SolversLib — the open-source library we maintain for the whole FTC community.",
  },
  {
    title: "Outreach & Business",
    body: "Classes, sponsorships, newsletters, and the engineering portfolio that took us to a Worlds Inspire run.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        kicker="The team"
        title="Students from across the Seattle area, organized like an engineering company"
        lead={`A community team from ${site.location}, founded in ${site.rookieYear} — middle and high schoolers from different schools, united by a shared obsession with building things that work.`}
      />

      <Section>
        <Reveal>
          <SectionHeading kicker="How we operate" title="What we believe" />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <Card className="h-full">
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="Structure"
            title="Three subteams, one robot"
            lead="Everyone owns something real. Subteams overlap on purpose — the best mechanisms come from software and mechanical arguing early."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {subteams.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Card className="h-full">
                <h3 className="text-base font-semibold text-accent">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        {/* PLACEHOLDER: member roster (names, roles, photos) pending team
            approval — SPEC §4 forbids publishing people without sign-off. */}
        <Reveal delay={120} className="mt-10">
          <Card className="border-dashed">
            <p className="text-sm leading-relaxed text-faint">
              Meet-the-members profiles are coming once the team signs off on
              photos and bios. Until then, the robots speak for us.
            </p>
          </Card>
        </Reveal>
      </Section>

      <Section className="border-t border-hairline">
        <Reveal>
          <SectionHeading
            kicker="Recognition"
            title="Judged on more than matches"
            lead="FTC's biggest awards judge the whole team — engineering process, documentation, outreach, and culture. That's where we've made our mark: an Inspire Award 2nd Place at the FIRST World Championship, Think and Design awards at the Washington Championship, and a Dean's List Finalist nod for student leadership."
          />
          <div className="mt-8">
            <AccentLink href="/robots">Season-by-season results</AccentLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
