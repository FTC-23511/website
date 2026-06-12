/**
 * Outreach programs and impact numbers.
 *
 * Sources: seattlesolvers.com (classes, RISE School partnership, Open
 * Alliance membership), github.com/FTC-23511 — fetched 2026-06-11.
 */

export const programs = [
  {
    title: "LEGO Robotics Classes",
    description:
      "Our biggest program: a self-designed curriculum that has taught robotics to over 70 kids in grades 3–7, built from our own years in FIRST LEGO League and taught entirely by team members. Class fees also help fund the team — so every signup does double duty.",
    link: { label: "About the classes", href: "/classes", external: false },
  },
  {
    title: "Curriculum for RISE School, India",
    description:
      "We're designing a robotics curriculum for the RISE School in India — taking what works in our local classes and adapting it for students who don't have a robotics team down the street.",
    link: null,
  },
  {
    title: "Open engineering",
    description:
      "We're part of the FTC Open Alliance, which means we share our build season as it happens: public CAD, public code, engineering portfolios, and newsletters other teams can learn from. Our software library, SolversLib, is used by FTC teams worldwide.",
    link: {
      label: "Browse our resources",
      href: "/resources",
      external: false,
    },
  },
] as const;

export const recognition = [
  {
    award: "Inspire Award 2nd Place",
    context:
      "FIRST World Championship, Lovelace Division — FTC's top award, judging outreach and engineering together.",
  },
  {
    award: "Sustain Award 1st",
    context:
      "Capek Super Qualifier — for community impact built to last, not one-off events.",
  },
  {
    award: "Motivate Award",
    context: "Recognized for STEM advocacy since our rookie season.",
  },
] as const;
