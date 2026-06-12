/**
 * Everything on the About page — team story, how FIRST works, values,
 * structure, and the people.
 *
 * Sources: seattlesolvers.com/about-us (story, leadership, mentors),
 * firstinspires.org (program facts), FTCScout (team record) — 2026-06-11.
 */

/** Plain-language explainer for people who have never heard of FIRST. */
export const first101 = {
  lead: "If you're new to all of this, here's the two-minute version.",
  items: [
    {
      term: "FIRST",
      detail:
        "A global nonprofit that runs robotics programs for kids from kindergarten through high school. Think of it as a sports league, except the sport is designing and building robots.",
    },
    {
      term: "FIRST LEGO League (FLL)",
      detail:
        "The elementary and middle school program, built around LEGO robots. It's where most of our team started — and what our classes prepare kids for.",
    },
    {
      term: "FIRST Tech Challenge (FTC)",
      detail:
        "The program we compete in. Teams of middle and high schoolers design, build, and program a robot from scratch each year to play that season's game, then compete at tournaments from local leagues up to the World Championship.",
    },
    {
      term: "The Inspire Award",
      detail:
        "FTC's highest honor — it judges the whole team: engineering, documentation, outreach, and how a team carries itself. We took 2nd place for it at the 2026 World Championship.",
    },
  ],
} as const;

export const story = {
  paragraphs: [
    "We started as a FIRST LEGO League team — two seasons of building LEGO robots and learning how competitions work. In 2023 we moved up to FIRST Tech Challenge as team 23511, a community team in Sammamish, Washington, with members from middle and high schools across the area.",
    "Three FTC seasons later, that rookie team has competed at the FIRST World Championship in Houston, placed 2nd for the Inspire Award there, and taught robotics to more kids than we have members — by a lot.",
    "We're an open team by default: our CAD, our code, and our engineering documents are public, because we learned from teams who shared theirs.",
  ],
} as const;

export const values = [
  {
    title: "Learning never stops",
    body: "There's always a way to keep growing, day by day. New members ship real work in their first month; veterans level up by teaching.",
  },
  {
    title: "Share what we solve",
    body: "Open-source software, public CAD, free curriculum. If we figured something out, the next team shouldn't have to start from scratch.",
  },
  {
    title: "Accessible to all",
    body: "No membership fees, ever. The barrier to engineering should be curiosity, not cost — that's why sponsors and class fees fund the team instead.",
  },
  {
    title: "And have fun",
    body: "It's in our team charter, word for word. We spend hundreds of hours a season on this because we genuinely like building things together.",
  },
] as const;

export const subteams = [
  {
    title: "Design & Build",
    body: "CAD, prototyping, and fabrication — from drivetrain geometry to the last 3D-printed bracket.",
  },
  {
    title: "Programming",
    body: "Robot code, autonomous routines, and SolversLib — the open-source library we maintain for other FTC teams.",
  },
  {
    title: "Outreach & Business",
    body: "Classes, sponsorships, newsletters, finances, and the engineering portfolio judges read at competition.",
  },
] as const;

export type Member = {
  name: string;
  role: string;
  /** PLACEHOLDER: photo filename in public/team/ once approved photos land. */
  photo: string | null;
};

/**
 * Leadership as published on the team's current site (first names only,
 * as the team lists them). PLACEHOLDER: remaining members + photos —
 * the team lists "10 students" total; add the rest when approved.
 */
export const leadership: Member[] = [
  { name: "Saket", role: "Captain · Design & CAD Lead", photo: null },
  { name: "Arush", role: "Programming Lead", photo: null },
  { name: "Viraj", role: "Build Lead", photo: null },
  { name: "Ishaan", role: "Outreach Lead", photo: null },
  { name: "Ajay", role: "Finance Lead", photo: null },
];

export const mentors = {
  summary:
    "Seven mentors with FIRST backgrounds support the team, led by Head Coach Zheng on the software side. Several are alumni of local FIRST teams — Pack of Parts (FRC 1294), the Jaybots (FTC 16700), and Voyager 6+ (FTC 12869) — plus an industry mentor from Amazon Robotics.",
} as const;
