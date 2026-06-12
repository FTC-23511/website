# Backlog

The queue the routine processes (see [`ROUTINE.md`](ROUTINE.md)). Add items here
as one-liners or links to a plan/brief. Each cycle, the routine picks the top
item from "Next up," moves it to "In progress," ships a PR, and (where safe)
auto-merges.

Add items by editing this file directly, or by asking Claude Code:

> _"Add 'fix typo in the header' to the backlog."_

Priority is top-down — most important items at the top of "Next up."

**v3 rebuild**: the items below implement [`SPEC.md`](SPEC.md) v2 (the
2026-06-11 re-interview). Items marked **[blocked: human]** need assets/facts
from the team first — see "Human inputs needed" below; ship them with
placeholders if the routine reaches them early, but prefer reordering around
blocks.

---

## Next up

<!-- Routine pulls from the top of this list. -->

_(empty — all v3 items in flight on `routine/v3-rebuild`)_

## Human inputs needed

<!-- Assets/facts only the team can supply. Surface via /human-task-list. -->

- Interest/waitlist Jotform URL confirm — current site's hidden interest page
  shows the same form ID as signup (240864574513157); confirm whether one
  form serves both or a separate interest form exists (item 2).
- Classes content: past-class photos, parent testimonials (item 2).
  Curriculum + FAQ policies recovered from the current site.
- Sponsors: logo files, sponsorship packet PDF for linking (item 4). Tier
  structure + sponsor list recovered from the current site.
- Roster: member photos for the photo grid (item 5). Names/roles recovered
  from the current site's About page.
- Brand: logo vector / brand files (general).

## In progress

<!-- Routine moves items here with the PR link when work starts. -->

- **PR-level CI + Node 24 deploy opt-in** —
  [#3](https://github.com/FTC-23511/website/pull/3). CI green on the PR.
  **Awaiting App Lead merge** — the permission layer held the merge back as
  approval-required CI config. Merge this one first.
- **v3 rebuild (items 1–9)** —
  [#4](https://github.com/FTC-23511/website/pull/4). All SPEC v2 items in
  one PR: IA restructure, Classes flagship, Home/Sponsors/About/Robots/
  Outreach/Resources, voice + warmth (light default), maintenance guide.
  `pnpm verify` green locally; all routes verified in the local preview.
  **Awaiting App Lead merge** (merge after #3; the PR-level CI check will
  run once the branch updates against the new main, or merge on the
  strength of local verify + the deploy workflow's own gate).

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
