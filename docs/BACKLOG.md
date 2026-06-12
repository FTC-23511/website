# Backlog

The queue the routine processes (see [`ROUTINE.md`](ROUTINE.md)). Add items here
as one-liners or links to a plan/brief. Each cycle, the routine picks the top
item from "Next up," moves it to "In progress," ships a PR, and (where safe)
auto-merges.

Add items by editing this file directly, or by asking Claude Code:

> _"Add 'fix typo in the header' to the backlog."_

Priority is top-down — most important items at the top of "Next up."

**v3 rebuild**: items 3–11 implement [`SPEC.md`](SPEC.md) v2 (the 2026-06-11
re-interview). Items marked **[blocked: human]** need assets/facts from the
team first — see "Human inputs needed" below; ship them with placeholders if
the routine reaches them early, but prefer reordering around blocks.

---

## Next up

<!-- Routine pulls from the top of this list. -->

1. **PR-level CI** — add a workflow running `pnpm verify` on `pull_request` so
   branches get a green/red check before merge (today only the post-merge
   deploy workflow gates). Approval-required tier (CI config).
2. **Workflow: opt deploy into Node 24** — GitHub Actions warns
   `actions/deploy-pages@v4` runs Node 20, which is forced to Node 24 on
   2026-06-16. Set `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` in
   `.github/workflows/deploy.yml` (or bump the action if a Node-24 version
   exists) and confirm a green deploy. Approval-required tier (CI config).
3. **v3 IA restructure** — SPEC v2 §2: routes/nav/footer to the seven-page
   map (`/about`, `/classes`, `/resources` new; `/team` content folds into
   `/about`; `/contact` folds into footer). Old `/team` and `/contact` paths
   must not dead-end. Page shells with structured placeholder content are
   fine; later items fill them. Auto-merge tier.
4. **Classes page (flagship)** — SPEC v2 §3: evergreen marketing page for
   Intro to Lego Robotics with curriculum, photos/testimonials slots, FAQ,
   and the open/interest Jotform state toggle in a documented data file.
   **[blocked: human — Jotform URLs, curriculum, photos, testimonials, FAQ
   answers]** Auto-merge tier.
5. **Home rework** — SPEC v2 §2: plain-language who-we-are + FIRST 101 primer
   in the first screen and a half, prominent Classes section/CTA, impact +
   results; sponsor CTA stays but isn't the lead. Auto-merge tier.
6. **Sponsors pitch page** — SPEC v2 §4: the page *is* the sponsorship
   package — hero, value props, tiers, sponsor logos, donate paths, PDF
   packet link. **[blocked: human — tiers, logos, donate links, packet PDF]**
   Auto-merge tier.
7. **About page** — SPEC v2 §2: team story/values/structure, fuller FIRST/FTC
   explainer, member photo grid with roles. **[blocked: human — roster names,
   photos, roles]** Auto-merge tier.
8. **Robots + Outreach restructure** — SPEC v2 §2: current season leads,
   past seasons as compact cards; outreach programs + reach numbers.
   Fact-check against ftcscout.org. Auto-merge tier.
9. **Resources page** — SPEC v2 §2: curated links out (designs, documents,
   SolversLib docs, GitHub, portfolio) with one-line descriptions; SolversLib
   deliberately low-key. Auto-merge tier.
10. **Warmth + voice pass** — SPEC v2 §5–6: site-wide copy rewrite to the
    credible-mature-teen voice (no AI feel, acronyms explained), warm the
    design for parents/newcomers, decide light-vs-dark default with preview
    screenshots. Auto-merge tier.
11. **Maintenance guide** — SPEC v2 §7: new-member workflow doc — updating
    via Claude Code chats, editing data files on GitHub web, how
    verify/PR/deploy work. Written for someone who has never used git.
    Auto-merge tier.

## Human inputs needed

<!-- Assets/facts only the team can supply. Surface via /human-task-list. -->

- Jotform URLs: class **signup** form + **interest/waitlist** form (item 4).
- Classes content: curriculum outline, past-class photos, parent
  testimonials, FAQ answers (item 4).
- Sponsors: tier names/amounts/benefits, current sponsor list + logos,
  donate links to confirm (HCB, APLOS), sponsorship packet PDF (item 6).
- Roster: member names, photos, roles approved for the site (item 7).
- Brand: logo vector / brand files (general).
- Fact-check: awards/events list confirmation vs ftcscout (item 8).

## In progress

<!-- Routine moves items here with the PR link when work starts. -->

_(empty)_

## Done

<!-- Auto-archived after merge. Keep the last ~20 for reference; prune older. -->

- 2026-06-11 — **SPEC v2 re-interview + re-spec** — in-depth App Lead
  interview (6 rounds); `docs/SPEC.md` rewritten as v2 (classes flagship,
  7-page IA, all-audience/newcomer-first, warmer design, human-voice rule);
  backlog rebuilt as phased v3 items. Docs-only, committed to `main`.

- 2026-06-11 — **UI v2 — brand palette, theming, micro-interactions, 3D
  gallery** — team gold palette as dual themes + persisted switcher,
  micro-interactions site-wide (spotlight/tilt cards, magnetic CTAs, count-up
  stats, decode hero, sponsor marquee, scroll progress, nav underlines),
  CSS-3D season gallery on /robots. Zero new deps; reduced-motion safe.
  Merged in [#2](https://github.com/FTC-23511/website/pull/2); deploy green;
  3D + theme markers verified on the live site.

- 2026-06-11 — **Build website v1 per `docs/SPEC.md`** — all six routes,
  design system, researched content (sources cited in the PR), metadata,
  responsive + a11y. Merged in
  [#1](https://github.com/FTC-23511/website/pull/1) under the App Lead's
  sanctioned tier override (interactive one-shot session; the scheduled
  routine had failed to fire). Placeholders pending human input: member
  roster/photos, robot imagery, sponsor logos/tiers, donation URLs — grep
  `PLACEHOLDER`.
- 2026-06-11 — **Post-deploy audit** — all 9 live paths return 200 at
  https://ftc-23511.github.io/website/ (6 routes + sitemap.xml + robots.txt +
  icon.svg), basePath-prefixed links verified in served HTML, page titles
  correct, deploy run green. Done in-session right after the #1 merge; no
  fixes needed, no PR.
