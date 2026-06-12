/**
 * Season and robot records for the Robots page.
 *
 * Results, ranks, W-L-T and awards: FTCScout REST API (mirrors official
 * FIRST results) — fetched 2026-06-11. Robot names and mechanism details:
 * the team's own season pages on seattlesolvers.com.
 */

export type Season = {
  slug: string;
  years: string;
  game: string;
  /** Robot name(s), as the team named them. Null if never published. */
  robot: string | null;
  summary: string;
  mechanisms: string[];
  highlights: string[];
  awards: string[];
  events: number;
};

export const seasons: Season[] = [
  {
    slug: "decode",
    years: "2025–26",
    game: "DECODE",
    robot: "Cypher",
    summary:
      "The season everything came together. Cypher — built around a custom coaxial swerve drivetrain, one of very few in FTC worldwide — took the #1 qualification rank at the Washington Championship, then carried the team to the FIRST World Championship in Houston: rank 4 in the Lovelace Division and 2nd place for the Inspire Award, FTC's highest honor.",
    mechanisms: [
      "Custom coaxial swerve drivetrain (featured on the FTC Open Alliance show)",
      "Turret with up to 300° of rotation and an adjustable-angle launcher",
      "Intake with compliant and vectored wheels, refined across two versions",
      "Limelight camera for re-localization on the field",
      "Custom aluminum chassis, machined by Fabworks (~25 lb, 14″ × 14.5″)",
    ],
    highlights: [
      "FIRST World Championship, Lovelace Division: rank 4, 7–2–1",
      "Washington Championship: qualification rank 1 (5–1–0)",
      "Capek Super Qualifier: winning alliance + Sustain Award 1st",
      "Undefeated 6–0 league meet, rank 1 in both league meets",
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
    robot: "Riptide",
    summary:
      "The breakout year. Riptide was the team's first robot with a fully aluminum chassis — and across two versions it swept judged awards through the league season, capped by Design Award 2nd Place at the Washington Championship.",
    mechanisms: [
      "Virtual four-bar claw intake for grabbing samples",
      "Linear slides for scoring, faster with each revision",
      "Autonomous routines scoring up to 5 specimens or 6 samples",
      "Servo-powered hang for the endgame ascent",
      "First fully aluminum chassis (~23 lb), machined by Fabworks",
    ],
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
    robot: null,
    summary:
      "The rookie season. Four events, a finalist run at the Hawking Interleague Tournament, and a Motivate Award nod — the foundation the next two seasons were built on.",
    mechanisms: [],
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

/** Headline numbers used on Home and Sponsors. Each cites its source. */
export const stats = [
  {
    value: "2nd",
    label: "Inspire Award at the FIRST World Championship",
    detail: "FTC's highest honor — Lovelace Division, Houston, 2025–26 season",
  },
  {
    value: "70+",
    label: "Kids taught in our robotics classes",
    detail: "Self-designed curriculum, taught by team members",
  },
  {
    value: "13",
    label: "Awards in three seasons",
    detail: "Official FIRST award record, 2023–2026",
  },
  {
    value: "Top 3%",
    label: "Of FTC teams worldwide by scoring, 2025–26",
    detail: "Ranked 200 of 8,324 active teams (FTCScout)",
  },
] as const;
