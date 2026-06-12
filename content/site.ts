/**
 * Global site facts: identity, navigation, contact, socials, donations.
 *
 * This file (and the other files in content/) is meant to be edited by team
 * members directly — see docs/UPDATING.md. Plain text in quotes is safe to
 * change; keep the structure (brackets, commas) intact.
 *
 * Sourcing rule (docs/SPEC.md §5): nothing here is invented. Sources:
 * - seattlesolvers.com (the team's current site) — fetched 2026-06-11
 * - FTCScout REST API: https://api.ftcscout.org/rest/v1/teams/23511
 */

export const site = {
  name: "Seattle Solvers",
  teamNumber: 23511,
  tagline: "FIRST Tech Challenge Team 23511",
  // Mission wording from seattlesolvers.com.
  mission:
    "Our goal is to spread STEM throughout our community and beyond, making it accessible to all — through events, classes, and open resources.",
  location: "Sammamish, Washington",
  rookieYear: 2023,
  // seattlesolvers.com: "self-funded team without join/membership fees"
  funding: "Self-funded, no membership fees, powered by sponsors",
  email: "team@seattlesolvers.com",
  businessEmail: "business@seattlesolvers.com", // sponsorships, from current site
  softwareEmail: "software@seattlesolvers.com", // SolversLib contact
  url: "https://ftc-23511.github.io/website",
} as const;

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Robots", href: "/robots" },
  { label: "Outreach", href: "/outreach" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Resources", href: "/resources" },
] as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/ftc23511/" },
  { label: "YouTube", href: "https://www.youtube.com/@ftc23511" },
  { label: "Discord", href: "https://discord.gg/dJbSWcXsUp" },
  { label: "GitHub", href: "https://github.com/FTC-23511" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ftc23511/" },
  { label: "Linktree", href: "https://linktr.ee/ftc23511" },
] as const;

/**
 * Ways to give. All three run through registered nonprofits, so donations
 * are tax-deductible. URLs from the team's current donate page.
 */
export const donations = [
  {
    label: "Donate through HCB",
    note: "Our preferred option — Hack Club's nonprofit platform, where our finances are public.",
    href: "https://hcb.hackclub.com/donations/start/ftc23511",
  },
  {
    label: "Give Lively",
    note: "Via Washington FIRST Robotics.",
    href: "https://secure.givelively.org/donate/washington-first-robotics/ftc-23511",
  },
  {
    label: "Aplos",
    note: "Via the WA FIRST Boosters team donation form.",
    href: "https://www.aplos.com/aws/give/WAFIRSTBoosters/TeamDonationForm",
  },
] as const;
