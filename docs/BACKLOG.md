# Backlog

The queue the routine processes (see [`ROUTINE.md`](ROUTINE.md)). Add items here
as one-liners or links to a plan/brief. Each cycle, the routine picks the top
item from "Next up," moves it to "In progress," ships a PR, and (where safe)
auto-merges.

Add items by editing this file directly, or by asking Claude Code:

> _"Add 'fix typo in the header' to the backlog."_

Priority is top-down — most important items at the top of "Next up."

---

## Next up

<!-- Routine pulls from the top of this list. -->

1. **PR-level CI** — add a workflow running `pnpm verify` on `pull_request` so
   branches get a green/red check before merge (today only the post-merge
   deploy workflow gates). Approval-required tier (CI config).
2. **Polish pass** — a11y sweep per SPEC §5.4 (focus states, contrast,
   reduced-motion), per-page metadata/OG check, README for the repo (what the
   site is, how to run, content-update guide for non-programmers — README
   shipped 2026-06-11, audit the rest). Auto-merge tier.
3. **Workflow: opt deploy into Node 24** — GitHub Actions warns
   `actions/deploy-pages@v4` runs Node 20, which is forced to Node 24 on
   2026-06-16. Set `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` in
   `.github/workflows/deploy.yml` (or bump the action if a Node-24 version
   exists) and confirm a green deploy. Approval-required tier (CI config).

## In progress

<!-- Routine moves items here with the PR link when work starts. -->

- **UI v2 — brand palette, theming, micro-interactions, 3D gallery** — branch
  `site/ui-v2` (interactive session, 2026-06-11, App Lead direction). Team
  gold palette (coolors.co/u/seattle_solvers) as dual light/dark themes with
  a persisted theme switcher; micro-interactions at every level (magnetic
  CTAs, pointer-spotlight + tilt cards, count-up stats, decode-scramble hero,
  sponsor marquee, scroll progress, animated nav underlines); CSS-3D season
  gallery on /robots. No new dependencies — all pure CSS/JS. Auto-merge tier
  (site source only; no new factual claims).

## Done

<!-- Auto-archived after merge. Keep the last ~20 for reference; prune older. -->

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
