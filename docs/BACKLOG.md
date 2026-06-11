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

1. **Post-deploy audit** — fetch every route on the live Pages URL; fix
   anything broken (basePath/asset paths are the classic failure), check
   mobile nav and console errors, re-deploy. Auto-merge tier.
3. **Polish pass** — a11y sweep per SPEC §5.4 (focus states, contrast,
   reduced-motion), per-page metadata/OG check, README for the repo (what the
   site is, how to run, content-update guide for non-programmers). Auto-merge
   tier.
4. **Workflow: opt deploy into Node 24** — GitHub Actions warns
   `actions/deploy-pages@v4` runs Node 20, which is forced to Node 24 on
   2026-06-16. Set `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` in
   `.github/workflows/deploy.yml` (or bump the action if a Node-24 version
   exists) and confirm a green deploy. Approval-required tier (CI config).

## In progress

<!-- Routine moves items here with the PR link when work starts. -->

- **Build website v1 per `docs/SPEC.md`** — branch `site/v1` (interactive
  session, 2026-06-11; scheduled routine failed to fire so the App Lead asked
  for a live one-shot). All six routes, design system, researched content,
  metadata, responsive + a11y per SPEC §5.
  **Tier override, sanctioned by the App Lead for this item only:** auto-merge
  on green CI despite first-time team-facing claims, PROVIDED every fact is
  research-sourced (cite source URLs in the PR body) or marked
  `<!-- PLACEHOLDER -->`; no member names/photos; sponsor names only from the
  team's own published data. Research already gathered (sources for the PR
  body): ftcscout.org REST API (team/awards/events/quick-stats),
  seattlesolvers.com (mission, classes, donation methods),
  docs.seattlesolvers.com + github.com/FTC-23511 (SolversLib).

## Done

<!-- Auto-archived after merge. Keep the last ~20 for reference; prune older. -->

_(empty)_
