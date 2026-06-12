# Updating the website — a guide for team members

You don't need to be a programmer to keep this site current. This guide
covers the three ways to make changes, from easiest to most powerful. No git
experience needed for the first two.

## The golden rule

**Almost every word on the site lives in the `content/` folder**, one file
per page, written as plain text in quotes. The page layouts (in `app/`) just
display whatever `content/` says. To change what the site *says*, you edit
`content/`. You'll rarely need to touch anything else.

| To change…                          | Edit this file         |
| ----------------------------------- | ---------------------- |
| Class signup open/closed, FAQ, curriculum, testimonials | `content/classes.ts` |
| Sponsors, tiers, donate links, pitch | `content/sponsors.ts` + donate links in `content/site.ts` |
| Members, mentors, story, values      | `content/about.ts`     |
| Robots, season results, stats        | `content/robots.ts`    |
| Outreach programs                    | `content/outreach.ts`  |
| Resource links (CAD, portfolios)     | `content/resources.ts` |
| Email addresses, socials, nav        | `content/site.ts`      |

## The class toggle (the update you'll do most often)

When class signups open or close, open `content/classes.ts` and find:

```ts
export const registrationState: "open" | "interest" = "open";
```

Change `"open"` to `"interest"` (or back). That one word switches every
button and caption on the Classes page between "sign up now" and "join the
interest list." The form links are right below it in the same file.

## Way 1 — Ask Claude Code (recommended)

Open Claude Code in this project and say what you want in plain English:

> "Class signups just opened — flip the toggle."
> "Add Acme Corp as a Gold sponsor."
> "Replace the second value on the About page with this text: …"

Claude makes the edit, runs the checks, opens a pull request, and merges it
when green. The site updates itself a couple of minutes after merge. For
bigger ideas ("add a photo gallery"), the same thing works — it just may ask
you questions first.

## Way 2 — Edit directly on GitHub (no tools needed)

1. Go to `github.com/FTC-23511/website`, open the `content/` folder, and
   click the file you want.
2. Click the pencil icon (top right of the file view).
3. Change the text **between the quotes**. Don't delete quotes, commas,
   brackets, or anything that looks like code structure.
4. Click "Commit changes…", choose **"Create a new branch"** and click
   "Propose changes" — this opens a pull request instead of changing the
   live site immediately.
5. The checks run automatically (a few minutes). Green check = safe to click
   "Merge". Red ✗ = something's off — ask Claude Code or a programming
   member to look.

The live site rebuilds itself automatically a few minutes after merge.

## Way 3 — Full local development (programming members)

```
pnpm install      # once
pnpm dev          # local preview at localhost:3000
pnpm verify       # typecheck + lint + format + build — run before pushing
```

Branch off `main` (`site/<what-youre-doing>`), push, open a PR. CI runs
`pnpm verify` on every PR; the deploy workflow ships `main` to GitHub Pages.
Conventions live in `CLAUDE.md` and `docs/ROUTINE.md`.

## Rules that keep us out of trouble

- **Never invent facts.** Awards, results, sponsor names, and people come
  from real records (docs/SPEC.md §5 lists the trusted sources).
- **No dates, locations, or prices for classes on the site** — those live in
  the Jotform so they can change without touching the website.
- **People need sign-off.** Don't add member names or photos that haven't
  been approved.
- When in doubt, open a pull request instead of committing to `main` — PRs
  are reviewable and reversible.
