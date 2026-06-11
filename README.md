# Seattle Solvers — Team Website

Public website for **Seattle Solvers, FTC Team 23511** (Sammamish, WA).
Live at **https://ftc-23511.github.io/website/**.

Built overnight as a one-shot by Claude (Fable 5) from the spec in
[`docs/SPEC.md`](docs/SPEC.md) — see [PR #1](https://github.com/FTC-23511/website/pull/1)
for the full build record and fact sources.

## Stack

- **Next.js (App Router) + TypeScript strict + Tailwind CSS 4** — no other
  runtime dependencies, no backend, no database.
- Static export (`output: 'export'`) deployed to **GitHub Pages** by
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push
  to `main`. The workflow runs the full verify gate first — a red verify blocks
  the deploy.
- `basePath`/`assetPrefix` are `"/website"` (Pages sub-path). If the site moves
  to a custom domain, set both to `""` in [`next.config.ts`](next.config.ts).

## Working on it

```bash
pnpm install
pnpm dev       # http://localhost:3000/website (note the /website prefix)
pnpm verify    # the gate: typecheck + lint + format check + build
```

**pnpm, not npm.** Run `pnpm verify` before pushing; CI runs the same gate.

## Where things live

| What                                          | Where                                                                            |
| --------------------------------------------- | -------------------------------------------------------------------------------- |
| **Every team fact** (awards, sponsors, stats) | `content/team.ts` — one file, source-commented. Edit facts here, never in pages. |
| Pages (one folder per route)                  | `app/` — `page.tsx`, `team/`, `robots/`, `outreach/`, `sponsors/`, `contact/`    |
| Design tokens (colors, accent, motion)        | `app/globals.css`                                                                |
| Shared components                             | `components/` (Nav, Footer, Reveal, primitives)                                  |
| Spec / design intent                          | `docs/SPEC.md`                                                                   |
| Work queue + status                           | `docs/BACKLOG.md`                                                                |
| Automation rules                              | `docs/ROUTINE.md` + `CLAUDE.md`                                                  |

## Content rules (important)

Nothing on the site is invented. Facts come from public sources (FTCScout,
the team's own published pages) and are cited in `content/team.ts`. Gaps are
marked `PLACEHOLDER` in source. **Pending human input:** member roster +
photos, robot imagery, sponsor logos/tiers, direct donation links — search the
repo for `PLACEHOLDER` to find every slot.

## Picking up where this left off

1. Read `CLAUDE.md`, then `docs/BACKLOG.md` — the top of "Next up" is the next
   task. `docs/SPEC.md` is the quality bar.
2. The repo works with Claude Code out of the box: `/run-routine` ships the top
   backlog item end to end; `/prep-backlog` queues work; `/human-task-list`
   lists what needs a person.
