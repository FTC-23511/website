# SPEC v2 — Seattle Solvers Team Website

Authoritative spec, superseding v1. Source: in-depth App Lead interview
(2026-06-11, second pass — the "slow down and do this right" session) plus
recon of the current Google Site at seattlesolvers.com. Where this doc is
silent, follow the quality bar (§8) and the judgment of the best
product-company marketing sites — not typical robotics team sites.

v1 retrospective, in one line: the design system was right, but the content
was thin/AI-researched and the structure missed the site's most important
function — the Intro to Lego Robotics classes that fund the team.

## 1. Purpose, audience, and scope

Public website for **Seattle Solvers, FTC Team 23511** (Sammamish, WA).
Replaces the team's Google Sites page (eventually at seattlesolvers.com —
see §9; we ship to GitHub Pages first).

**Audience: everyone, with FIRST newcomers first.** The site must work for
people who have never heard of FIRST — sponsors, and families who met the
team at outreach events or want to enroll in classes. FTC teams visiting for
technical content should find their way out to the right resource quickly
(§2 Resources), but the site itself is written for the general audience.

**Success in 12 months:**

1. Sponsor conversions — companies reach out or donate after seeing the site.
2. Community traffic — other FTC teams find and share our resources.

**Scope: tight brochure.** Seven pages, each excellent. Not a hub, not a
platform. Easy for students to maintain.

**Explicitly out of scope for this rebuild** (kept as future ideas, §10):
analytics, news/blog, deliberate SEO push, Advanced classes content, custom
domain cutover, member-written per-season deep dives.

## 2. Information architecture

| Route       | Page      | Leads with                                                              |
| ----------- | --------- | ----------------------------------------------------------------------- |
| `/`         | Home      | Who we are in plain language + FIRST 101 primer, classes CTA, impact stats. Sponsor CTA present but not the lead. |
| `/about`    | About     | The team: story, values, how it's organized, FIRST/FTC explained properly, member photo grid with roles. |
| `/classes`  | Classes   | Intro to Lego Robotics: curriculum, photos/testimonials, FAQ, Jotform CTA. The site's key conversion page. |
| `/robots`   | Robots    | Current season's robot and results first; past seasons as compact cards. |
| `/outreach` | Outreach  | Programs and community impact; reach numbers.                            |
| `/sponsors` | Sponsors  | The pitch page that *is* the sponsorship package (§4).                   |
| `/resources`| Resources | Curated links out: designs, documents, SolversLib docs, GitHub, portfolio. |

- **No `/contact` page.** Contact (email `team@seattlesolvers.com`, socials)
  lives in the footer and in CTAs throughout. Old `/contact` URL must not 404
  — redirect or a slim pointer page.
- **FIRST 101 placement**: a short plain-language primer on Home (assume zero
  robotics knowledge); the fuller explanation lives on About.
- Shared: sticky top nav, rich footer (nav, contact, socials, FIRST/FTC
  attribution). Mobile nav genuinely good.
- Socials (footer): Instagram, YouTube, Discord, LinkedIn, Linktree — all
  `ftc23511`.

## 3. Classes page — the flagship (read this twice)

Classes are a major reason people visit and a fundraising channel several
times a year. This page converts interested parents into Jotform submissions.

**Division of labor (firm):**

- **Jotform owns** signup, payment, session dates/times/locations/prices, and
  the automated confirmation email. Forms are easier for the team to update
  than the site — so **no dates, locations, or prices on the website, ever**.
- **The site owns** the evergreen marketing context that makes a parent
  confident enough to click the form: what the class is, who teaches it, what
  kids learn, proof it works.

**Required sections:**

1. Hero — what the class is (Intro to Lego Robotics, grades 3–7), who runs it
   (FTC students who came up through FIRST LEGO League), one CTA.
2. Curriculum overview — what kids learn, session by session or by theme.
   Credibility section; team-supplied content.
3. Photos + testimonials — past classes, parent quotes. Human-supplied.
4. FAQ — logistics-shaped questions answered evergreen (what to bring,
   prerequisites, refunds, how to ask more) without embedding dates/prices.
5. CTA — the Jotform link.

**Two states, one toggle.** A single value in the page's data file switches:

- `open` — CTA links the **signup Jotform** ("Register for the next session").
- `interest` — CTA links the existing **interest/waitlist Jotform** with
  adjusted copy ("Sessions aren't open right now — join the interest list and
  we'll email you"). The rest of the page stays valid in both states.

The toggle and both form URLs live in one obvious, documented data file (§7).

**Intro classes only.** Advanced classes exist but are deferred — don't
mention them as an offering; leave room to add later.

## 4. Sponsors page — the package, not a brochure about the package

A **polished pitch page** that serves as the immersive sponsorship package
itself. A potential sponsor who lands here should get the full pitch without
opening a PDF: hero, why the team matters, what funding enables, real tiers
with benefits, current sponsor logos, and clear ways to give.

- Immersion comes from motion polish and craft, not gimmicks — excellent
  classic layout in the existing design system.
- **Facts are human-supplied**: tier names/amounts/benefits, sponsor
  names/logos, donation links (current site shows Hack Club HCB and APLOS —
  confirm with the team before shipping).
- The high-quality **PDF packet still exists** (required for grant
  applications) — link it from this page.
- Funding context worth stating (verify wording with the team): self-funded
  team, no membership fees, sponsor-supported.

## 5. Voice and content rules

**Voice: credible, mature teenagers** who understand their work at the level
of the nonprofits and professionals doing the same things.

- Never aggressive or overconfident. Confidence through concreteness.
- Plain language a FIRST newcomer follows; explain every acronym on first use.
- **The site must never feel AI-written.** No corporate filler, no
  exclamation-point cheerleading, no symmetrical marketing-speak triads, no
  "we're passionate about leveraging." Most copy will eventually be
  student-written; ours has to match that register.

**Sourcing hierarchy** (highest trust first):

1. Team-written copy — gold; use verbatim or lightly edited.
2. Interview-extracted — drafted from App Lead answers, approved before ship.
3. Existing team artifacts — current site (seattlesolvers.com), portfolio,
   engineering notebook, `FTC-23511/md-app` charters.
4. Public records — ftcscout.org / FIRST Events API for seasons, events,
   match records, awards. Facts only, never voice.

**Never invent**: awards, results, sponsor names, tier amounts, member names,
dates, reach numbers, testimonials, prices. Missing fact → clearly marked
placeholder (`<!-- PLACEHOLDER: ... -->` in source), every placeholder listed
in the PR body.

**People**: member names, photos, and roles are approved for the About page
photo grid — but the actual roster content is human-supplied; never guess.

## 6. Design direction — keep the system, warm it up

The v2 design system stays: team gold palette (dark theme: near-black + gold
`#f2ce00`; light theme: beige `#fcf9de` + golden-bronze), dual themes with
persisted switcher, micro-interactions, all colors through CSS variables in
`app/globals.css`, dependency-free, `prefers-reduced-motion` safe.

**Tuning for this rebuild — warmer and more approachable.** The audience is
parents and FIRST newcomers more than developers:

- Soften the "techy" edge: friendlier copy in interactive elements, more
  white/breathing space, photography slots over abstract dev-aesthetic
  texture where real photos exist.
- **Consider light theme as default** — decide during the design pass with
  preview screenshots, not in this spec.
- Micro-interactions stay purposeful; nothing that reads as showing off to
  other engineers at a parent's expense.
- Still must not look like a default Tailwind template.

## 7. Maintenance and ops

The team maintains this site without anyone "being a programmer."

- **Data-file-per-page**: each page's content (copy, links, toggles, stats)
  lives in one simple, commented TS/JSON data file, separate from layout
  code. A motivated student can edit exact text on GitHub web.
- **Class-state toggle** (§3) is the canonical example: one value, one file,
  documented inline.
- **Workflow guide for new members** (required deliverable, own backlog
  item): how to update the site via Claude Code chats per page, how to edit
  data files directly, how PRs/verify/deploy work. Written for someone who
  has never used git.
- Larger features keep flowing through the routine (`docs/ROUTINE.md`).

## 8. Quality bar (acceptance criteria)

1. `pnpm verify` green; static export deploys via GitHub Pages workflow;
   every route renders live.
2. All seven routes implemented with real layout and copy (placeholders only
   where §5 requires); old routes (`/team`, `/contact`) don't dead-end.
3. Fully responsive, 360px → ultrawide. No horizontal scroll; mobile tap
   targets sized properly.
4. Accessible: semantic landmarks, one `h1` per page, alt text, visible
   focus states, WCAG AA contrast in both themes, reduced-motion honored.
5. Metadata: per-page title/description, Open Graph, favicon, sitemap +
   robots via Next conventions.
6. **Copy reads human.** Spot-check: would a parent believe a student wrote
   it? Would an FTC mentor wince at anything? Acronyms explained.
7. **Newcomer comprehension check**: someone who has never heard of FIRST can
   say, after the Home page, what the team does, what FTC is, and how to sign
   a kid up for classes.
8. Design tokens centralized; no hardcoded hexes in components.
9. Lighthouse-minded: `next/font`, no layout shift, no render-blocking junk.

## 9. Tech constraints (recap — full rules in `CLAUDE.md`)

Next.js App Router + TS strict + Tailwind, `output: 'export'`,
`basePath: '/website'` while on GitHub Pages, pnpm. No backend/database/auth —
Jotform and mailto carry all interaction. `framer-motion` and `clsx`
pre-approved; anything else: ask in the PR.

**Domain**: seattlesolvers.com cutover happens **after** content approval, as
its own milestone (DNS = human task). Until then the basePath stays; build so
the cutover is a config change, not a refactor.

## 10. Future ideas (parked, not forgotten)

- Privacy-friendly analytics (GoatCounter/Plausible-class) — know whether
  sponsors/parents actually visit.
- News/updates feed — competitions, class announcements.
- SEO push for "lego robotics classes" + local queries — matters for class
  signups.
- Advanced classes section on `/classes`.
- Richer per-season robot/outreach write-ups by team members.
- SolversLib gets exactly the visibility §2 gives it (a Resources entry +
  enough that a sponsor knows it exists) — **deliberately de-emphasized**
  relative to the current site; technical depth stays in its external docs.
