/**
 * Everything on the Sponsors page — docs/SPEC.md §4. The page is designed to
 * BE the sponsorship package: a sponsor should get the full pitch here
 * without opening a PDF.
 *
 * Sources: seattlesolvers.com/support-us/sponsors and /sponsorship (tier
 * structure and sponsor list as the team published them), fetched 2026-06-11.
 * Award/result stats: FTCScout (official FIRST data).
 */

/**
 * PLACEHOLDER: link to the current "Sponsorship Package - FTC 23511" PDF.
 * The team keeps a high-quality PDF for grant applications; once it has a
 * stable public URL, put it here and the download link appears on the page.
 */
export const packetUrl: string | null = null;

/** What sponsorship money actually pays for. */
export const funding = [
  {
    title: "The robot",
    body: "Motors, electronics, custom-machined parts, and the spares that let us test ideas instead of rationing them. A competitive season is a hardware bill before it's anything else.",
  },
  {
    title: "Competing",
    body: "Event registration and league fees, and travel when results take us beyond Washington — like the FIRST World Championship in Houston.",
  },
  {
    title: "Programs that stay free",
    body: "Our LEGO robotics classes, open-source software, and public CAD. Sponsors are why a kid's first robotics class doesn't depend on what their family can pay for team membership.",
  },
] as const;

/** Why a company sponsors a robotics team, in concrete terms. */
export const reasons = [
  {
    title: "Real engineering, visible results",
    body: "Students design, machine, and program a competition robot from scratch every season — and the results are public record, from league meets to the World Championship.",
  },
  {
    title: "Your name where it counts",
    body: "Sponsor logos go on the robot, our competition pit, team apparel, and this site — seen by thousands of students, mentors, and engineers across the season.",
  },
  {
    title: "Tax-deductible and accountable",
    body: "Donations run through registered nonprofits and are tax-deductible. Through HCB, our finances are public — you can see exactly where money goes.",
  },
  {
    title: "An investment in people",
    body: "Team alumni leave with CAD, programming, fabrication, and project-management experience that most people first meet in college or industry.",
  },
] as const;

export type SponsorTier = {
  tier: string;
  sponsors: { name: string; note?: string }[];
};

/**
 * Current sponsors by tier, exactly as the team lists them.
 * PLACEHOLDER: logo image files — names render as styled text until logo
 * assets are added to public/sponsors/.
 */
export const tiers: SponsorTier[] = [
  {
    tier: "Platinum",
    sponsors: [
      {
        name: "Gene Haas Foundation",
        note: "Supporting the team with grants since 2024.",
      },
    ],
  },
  {
    tier: "Diamond",
    sponsors: [
      {
        name: "Amazon Robotics",
        note: "Backing the 2025–26 season with funding and an industry mentor.",
      },
      {
        name: "FRCTees",
        note: "Discounted custom team jackets and apparel.",
      },
    ],
  },
  {
    tier: "Gold",
    sponsors: [
      { name: "FIRST Robotics Washington" },
      { name: "Polymaker" },
      { name: "Onshape" },
      { name: "Brown Bear Auto Supply" },
      { name: "Team 2976" },
      { name: "Pack of Parts" },
      { name: "Learner Labs" },
    ],
  },
  {
    tier: "Silver",
    sponsors: [
      { name: "Swyft Robotics" },
      { name: "Aggriden Energy" },
      {
        name: "Fabworks",
        note: "Machines our aluminum chassis. Use code FTC23511 at checkout for 5% off — it supports us, too.",
      },
      { name: "AoPS Academy Bellevue" },
    ],
  },
  {
    tier: "Bronze",
    sponsors: [{ name: "Tektite Business Solutions" }],
  },
];
