# SPEC — Seattle Solvers Team Website v1

Design intent from the App Lead interview (2026-06-11) plus researched best
practice. This is the authoritative spec for the overnight v1 build. Where this
doc is silent, follow the **quality bar** (§5) and the judgment of the best
product-company marketing sites — not typical robotics team sites.

## 1. Purpose and audience

Public website for **Seattle Solvers, FTC Team 23511** (Seattle, WA). Replaces
the team's Google Sites page. This v1 is also a proof of concept: built
overnight by AI to demonstrate what high-quality autonomous web development
looks like. The bar is explicitly **better than any existing robotics team
website**.

Audience priority (from interview):

1. **Sponsors** — primary. The homepage sells the team: who we are, impact,
   results, and a clear path to sponsoring.
2. **FTC community** — secondary. Outreach and resources matter; the site
   should feel generous, not just self-promotional.
3. Judges and prospective members are welcome side effects, not the lead.

## 2. Visual direction — "premium, techy", in the team's gold

Reference quality tier: **Linear, Vercel, Stripe, Resend** marketing sites.

- **Brand palette** (the team's scheme, coolors.co/u/seattle_solvers), shipped
  as TWO full themes with a persisted switcher (updated 2026-06-11; v1's cyan
  was a pre-brand stand-in):
  - **Dark** (default): warm near-black surfaces, gold `#f2ce00` accent,
    banana-cream `#ffe75c` hover.
  - **Light**: beige `#fcf9de` background, white surfaces, vanilla-custard
    `#f8f2b4` raised surfaces, golden-bronze accent (darkened to `#7d6a00`
    where used as text — raw `#b99d00` fails AA on beige; bright golds carry
    fills/borders/glows).
  - All colors flow through CSS variables in `app/globals.css`; never hardcode
    a hex in a component.
- **Micro-interactions are a requirement**: pointer-spotlight + tilt cards,
  magnetic CTAs, count-up stats, scramble-decode hero, sponsor marquee, scroll
  progress bar, animated nav underlines — every interactive element gives
  feedback. One signature 3D piece: the CSS-3D season gallery on `/robots`.
  Everything is dependency-free (CSS + small JS) and collapses cleanly under
  `prefers-reduced-motion`.
- **Typography**: load a modern grotesque via `next/font` (Geist or Inter).
  Big confident headings, tight tracking on display sizes, generous line-height
  on body. Type scale is the design's backbone — get it right first.
- **Motion**: subtle and purposeful. Scroll-reveal fades, hover micro-
  interactions, maybe one hero flourish. Respect `prefers-reduced-motion`.
  Nothing bouncy or gimmicky.
- **Texture**: thin borders (`white/10`), soft glows, grid/dot background
  patterns used sparingly. Cards with hairline borders over heavy shadows.
- **It must not look like a default Tailwind template.** If a section would
  pass for a tutorial result, redo it.

## 3. Information architecture (multi-page, full)

| Route       | Page      | Leads with                                                                     |
| ----------- | --------- | ------------------------------------------------------------------------------ |
| `/`         | Home      | Hero (team identity + one-line mission), impact stats, season highlights, sponsor CTA, footer with everything |
| `/team`     | Team      | What the team is, values/culture, how it's organized. Member specifics are PLACEHOLDER (see §4) |
| `/robots`   | Robots    | Season-by-season robot showcase: name, season/game, key mechanisms, results   |
| `/outreach` | Outreach  | Community impact: events, mentoring, reach numbers                            |
| `/sponsors` | Sponsors  | The pitch: why sponsor, what funding enables, tiers, current sponsors, contact CTA |
| `/contact`  | Contact   | Email (`team@seattlesolvers.com`), social links, simple and clean (no form backend — `mailto:` and links) |

Shared: sticky top nav (logo/wordmark left, links, "Sponsor us" accent button
right), rich footer (nav, contact, FIRST/FTC attribution). Mobile nav must be
genuinely good, not an afterthought.

## 4. Content rules — facts vs. fill

- **Researchable facts** — pull from public sources during the build:
  - **ftcscout.org** (and the FIRST Events API data it mirrors) for team
    23511's seasons, events, match record, and awards.
  - The team's existing public web presence (search "Seattle Solvers FTC
    23511" — existing Google Sites page, social accounts) for mission wording,
    outreach history, sponsor names.
  - The public `FTC-23511/md-app` repo charters for how the team talks about
    its documentation culture (good Team-page material).
- **Never invent**: awards, event results, sponsor names, member names, dates,
  reach numbers. If research doesn't surface a fact, use clearly-marked
  placeholder copy (`<!-- PLACEHOLDER: ... -->` in source) and list every
  placeholder in the PR body.
- **People**: no real member names or photos in v1 (none are approved). Team
  page describes roles/structure generically; use abstract/illustrative
  visuals, not stock photos of people.
- **Images**: no real team photos are available to the build. Design so the
  site looks finished without photography: gradients, SVG illustration,
  iconography, data/stat presentation. Leave obvious slots where real photos
  drop in later.
- Voice: confident, concrete, warm. Short sentences. No corporate filler, no
  exclamation-point cheerleading.

## 5. Quality bar (acceptance criteria for v1)

1. `pnpm verify` green; static export builds and deploys via the GitHub Pages
   workflow; every route renders at `https://ftc-23511.github.io/website/`.
2. All six routes implemented with real layout and copy (placeholders only
   where §4 requires).
3. Fully responsive: 360px phone → ultrawide. No horizontal scroll, no broken
   nav, tap targets sized for mobile.
4. Accessible: semantic landmarks, one `h1` per page, alt text, visible focus
   states, WCAG AA contrast on the dark palette, `prefers-reduced-motion`
   honored.
5. Metadata done: per-page `<title>`/description, Open Graph tags, favicon,
   `sitemap` + `robots` via Next conventions.
6. Design tokens centralized (Tailwind theme/CSS variables) — accent, surface
   colors, radii defined once.
7. Lighthouse-minded: static export, `next/font`, no layout shift from late-
   loading assets, no render-blocking junk.

## 6. Tech constraints (recap — full rules in `CLAUDE.md`)

Next.js App Router + TS strict + Tailwind, `output: 'export'`,
`basePath: '/website'` (GitHub Pages sub-path), pnpm. No backend/database/auth.
`framer-motion` and `clsx` are pre-approved if used; anything else: ask in PR.

## 7. Out of scope for v1

Custom domain (seattlesolvers.com — later, human DNS task), CMS, contact-form
backend, blog, member photos/bios, i18n, analytics.
