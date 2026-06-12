/**
 * The Resources page: curated links out to where our public work lives.
 * The site hosts nothing technical itself — docs/SPEC.md §2.
 *
 * URLs from seattlesolvers.com/resources — fetched 2026-06-11.
 */

export type ResourceGroup = {
  title: string;
  blurb: string;
  links: { label: string; href: string; note?: string }[];
};

export const groups: ResourceGroup[] = [
  {
    title: "Engineering portfolios",
    blurb:
      "The documents judges read at competition — our design process, season by season.",
    links: [
      {
        label: "Washington competitions portfolio, 2025–26",
        href: "https://www.canva.com/design/DAHAkUqqtCA/EbwzWXhiqSZSVpFG4em5sw/view",
        note: "DECODE season",
      },
      {
        label: "States portfolio, 2024–25",
        href: "https://www.canva.com/design/DAGd_C6BLaM/KG5ukG30SibLLGbNXHeKkg/view",
        note: "INTO THE DEEP season",
      },
      {
        label: "Capek Semifinals portfolio, 2024–25",
        href: "https://www.canva.com/design/DAGcAUdop48/NkEVdb4sa3dMUJkOmJ2XIA/view",
        note: "INTO THE DEEP season",
      },
      {
        label: "Pasteur Interleague portfolio, 2024–25",
        href: "https://www.canva.com/design/DAGY8EZALfE/znY18nG2HqCDUeB0mAGrEA/view",
        note: "INTO THE DEEP season",
      },
    ],
  },
  {
    title: "CAD designs",
    blurb:
      "Full robot and mechanism CAD in Onshape, public and copyable — version history included.",
    links: [
      {
        label: "Cypher — full robot, 2025–26",
        href: "https://cad.onshape.com/documents/c021b03986672773c2100272/w/e693f3949bf6e50777651f00/e/b8bffd930c2a2d8248794936",
      },
      {
        label: "Solvers Shooter — launcher mechanism, 2025–26",
        href: "https://cad.onshape.com/documents/c021b03986672773c2100272/w/e693f3949bf6e50777651f00/e/72a3538754485ef6bd6ac801",
      },
      {
        label: "Riptide — full robot, 2024–25",
        href: "https://cad.onshape.com/documents/ae5ff79658ff2a51ece82558/w/1babafd80652d7e5216f214c/e/548f3b6bbedc29b9264b1a15",
      },
      {
        label: "Solvers Claw — intake mechanism, 2024–25",
        href: "https://cad.onshape.com/documents/1c128ca169fe30eeb09acb36/w/48d3d3a7c87b50dc03cf4462/e/936cb1734f091fbe3f39750a",
      },
      {
        label: "Octonaut — offseason robot",
        href: "https://cad.onshape.com/documents/0de3d3af3bd67458ea1fe009/w/54323539c351deda1ef6c002/e/4c3e7ff158f3b8545065ad90",
      },
      {
        label: "Electronics cases",
        href: "https://cad.onshape.com/documents/c021b03986672773c2100272/w/74f0a8f10b4c93fb8fe556c1/e/3aa36cb0c41651ad87fb9864",
      },
    ],
  },
  {
    title: "Software",
    blurb:
      "For teams writing robot code — our open-source work lives on GitHub.",
    links: [
      {
        label: "SolversLib documentation",
        href: "https://docs.seattlesolvers.com/",
        note: "Our open-source FTC programming library — the maintained fork of FTCLib.",
      },
      {
        label: "github.com/FTC-23511",
        href: "https://github.com/FTC-23511",
        note: "Robot code, SolversLib source, and the rest of our public repos.",
      },
    ],
  },
] as const;
