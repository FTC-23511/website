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

1. **Build website v1 per `docs/SPEC.md`** — the full overnight one-shot: all
   six routes, design system, content research (ftcscout.org + existing team
   web presence), metadata, responsive + a11y per SPEC §5. One branch, one PR.
   **Tier override, sanctioned by the App Lead for this item only:** auto-merge
   on green CI despite first-time team-facing claims, PROVIDED every fact is
   research-sourced (cite source URLs in the PR body) or marked
   `<!-- PLACEHOLDER -->`; no member names/photos; sponsor names only if found
   on the team's own existing public pages. Goal: live at
   `https://ftc-23511.github.io/website/` by morning.
2. **Post-deploy audit** — fetch every route on the live Pages URL; fix
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

_(empty)_

## Done

<!-- Auto-archived after merge. Keep the last ~20 for reference; prune older. -->

_(empty)_
