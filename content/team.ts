/**
 * Single source of truth for every team fact on the site.
 *
 * Sourcing rule (docs/SPEC.md §4): nothing here is invented. Each block cites
 * where it came from. If a future fact has no public source, it does not go
 * here — it goes in as a clearly-marked placeholder in the page instead.
 *
 * Sources:
 * - FTCScout REST API (mirrors official FIRST results):
 *   https://api.ftcscout.org/rest/v1/teams/23511 (+ /awards, /events/{season},
 *   /quick-stats) — fetched 2026-06-11
 * - https://www.seattlesolvers.com/ (the team's current site) — mission,
 *   classes, donation methods
 * - https://docs.seattlesolvers.com/ + https://github.com/FTC-23511 —
 *   SolversLib
 */

export const site = {
  name: "Seattle Solvers",
  teamNumber: 23511,
  tagline: "FIRST Tech Challenge Team 23511",
  // Mission wording from seattlesolvers.com (current team site).
  mission:
    "Our goal is to spread STEM throughout our community and beyond, making it accessible to all.",
  location: "Sammamish, Washington", // FIRST team registration via FTCScout
  rookieYear: 2023, // FTCScout
  // seattlesolvers.com: "self-funded team without join/membership fees"
  nonprofit: "501(c)(3) nonprofit, self-funded, no membership fees",
  email: "team@seattlesolvers.com",
  softwareEmail: "software@seattlesolvers.com", // SolversLib contact, docs.seattlesolvers.com
  url: "https://ftc-23511.github.io/website",
} as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/ftc23511/" },
  { label: "YouTube", href: "https://www.youtube.com/@ftc23511" },
  { label: "GitHub", href: "https://github.com/FTC-23511" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ftc23511/" },
  { label: "Linktree", href: "https://linktr.ee/ftc23511" },
] as const;

/** Headline numbers for the home page. Each cites its source. */
export const stats = [
  {
    value: "2nd",
    label: "Inspire Award, FIRST World Championship",
    detail: "Lovelace Division, Houston — DECODE 2025–26 (FTCScout)",
  },
  {
    value: "13",
    label: "Awards in three seasons",
    detail: "Official FIRST award record, 2023–2026 (FTCScout)",
  },
  {
    value: "Top 3%",
    label: "Worldwide by OPR, 2025–26",
    detail: "Ranked 200 of 8,324 active teams (FTCScout quick stats)",
  },
  {
    value: "1st",
    label: "Ranked at Washington Championship",
    detail: "Qualification rank 1, 5–1–0 — DECODE 2025–26 (FTCScout)",
  },
] as const;

export type Season = {
  slug: string;
  years: string;
  game: string;
  summary: string;
  highlights: string[];
  awards: string[];
  events: number;
};

/**
 * Season records. Event names, ranks, W-L-T and awards all from FTCScout
 * (official FIRST data). Engineering notes from the team's own public
 * materials (YouTube/FTC Open Alliance appearance for the swerve drivetrain).
 */
export const seasons: Season[] = [
  {
    slug: "decode",
    years: "2025–26",
    game: "DECODE",
    summary:
      "The season everything compounded. A custom coaxial swerve drivetrain — one of very few in FTC worldwide — carried the team to a #1 qualification rank at the Washington Championship and a run to the FIRST World Championship in Houston, where the team ranked 4th in the Lovelace Division and took home 2nd place for the Inspire Award, FTC's highest honor.",
    highlights: [
      "FIRST World Championship, Lovelace Division: rank 4, 7–2–1",
      "Washington Championship: qualification rank 1 (5–1–0)",
      "Capek Super Qualifier: winning alliance + Sustain Award 1st",
      "Undefeated 6–0 league meet (Brougham #1), rank 1 in both league meets",
      "Custom coaxial swerve drivetrain (featured on the FTC Open Alliance show)",
    ],
    awards: [
      "Inspire Award 2nd Place — FIRST World Championship, Lovelace Division",
      "Think Award 2nd Place — Washington Championship",
      "Dean's List Finalist — Washington Championship",
      "Event Winner (alliance) + Sustain Award 1st — Capek Super Qualifier",
      "Inspire Award 2nd Place + Finalist — Tesla League Tournament",
    ],
    events: 9,
  },
  {
    slug: "into-the-deep",
    years: "2024–25",
    game: "INTO THE DEEP",
    summary:
      "The breakout year. Eight events, a first event finalist run, and a sweep of judged awards across the league season — capped by the Design Award 2nd Place at the Washington Championship.",
    highlights: [
      "Rank 1 at the Woodinville league meet (5–1–0)",
      "Finalist + Innovate Award 1st — Pasteur Interleague",
      "Think Award 1st — Capek Semifinal",
      "Qualified for and competed at the Washington Championship",
    ],
    awards: [
      "Design Award 2nd Place — Washington Championship",
      "Innovate Award 1st + Finalist — Pasteur Interleague",
      "Think Award 1st — Capek Semifinal",
    ],
    events: 8,
  },
  {
    slug: "centerstage",
    years: "2023–24",
    game: "CENTERSTAGE",
    summary:
      "The rookie season. Four events, a finalist run at the Hawking Interleague Tournament, and a Motivate Award nod — the foundation the next two seasons were built on.",
    highlights: [
      "Finalist — WA Hawking Interleague Tournament",
      "Motivate Award 3rd Place as rookies",
      "Top-4 qualification rank in both Mercer Island league meets",
    ],
    awards: [
      "Finalist — WA Hawking Interleague Tournament",
      "Motivate Award 3rd Place — WA Hawking Interleague Tournament",
    ],
    events: 4,
  },
];

/**
 * Sponsor names exactly as the team submitted them to FIRST
 * (FTCScout team record, fetched 2026-06-11).
 */
export const sponsors = [
  "PTC",
  "Onshape",
  "Gene Haas Foundation",
  "Amazon Robotics",
  "FIRST Washington",
  "Polymaker",
  "Fabworks",
  "SWYFT Robotics",
  "Brown Bear Car Wash",
  "FRC 1294 Pack Of Parts",
  "FRCTees",
  "Tektite",
  "Learner Labs",
  "Ag-Grid Energy",
  "AOPS Bellevue",
  "CodeWiz",
] as const;

/** Outreach programs from seattlesolvers.com + the team's GitHub org. */
export const outreach = [
  {
    title: "SolversLib",
    description:
      "An open-source FTC programming library — the actively maintained fork of FTCLib, led by this team and used by teams worldwide. Full documentation, quickstart repo, and published Javadocs lower the barrier from Blocks to real Android Studio development.",
    link: {
      label: "docs.seattlesolvers.com",
      href: "https://docs.seattlesolvers.com/",
    },
  },
  {
    title: "LEGO Robotics Classes",
    description:
      "A self-designed curriculum for grades 3–7, built from the team's own FIRST LEGO League experience — teaching the basics of robotics in a fun, interactive way.",
    link: null,
  },
  {
    title: "Open CAD & Documentation",
    description:
      "The team publishes its CAD designs and engineering documents for any team to learn from and reuse, and shares its build season through newsletters and an FTC Open Alliance appearance.",
    link: {
      label: "github.com/FTC-23511",
      href: "https://github.com/FTC-23511",
    },
  },
] as const;

export const navLinks = [
  { label: "Team", href: "/team" },
  { label: "Robots", href: "/robots" },
  { label: "Outreach", href: "/outreach" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
] as const;
