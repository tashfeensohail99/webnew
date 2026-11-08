# Content audit system

How existing pages get audited, improved and verified, in controlled batches.
The goal is a more accurate, useful and trustworthy site without losing the search
value it already has. Nothing here promises a ranking.

## Files

| File | What it is |
| --- | --- |
| `scripts/content-audit.mjs` | Read-only crawler. Re-run after every batch. |
| `inventory.json`, `inventory.csv` | What the crawler saw, one row per URL. Regenerated, never hand-edited. |
| `gsc-pages-YYYY-MM-DD.tsv` | Search Console snapshot, per page. Keep each one; they are the before/after record. |
| `decisions.csv` | Human verdict per URL: status, priority, batch. Hand-maintained. |
| `ledger.md` | What each batch changed, why, its commit, and how it was verified. |

```bash
node scripts/content-audit.mjs
```

Pass a local URL to audit a build before it ships, for example
`node scripts/content-audit.mjs http://localhost:3918`.

## Page statuses

- **KEEP**: strong already; minor or no changes.
- **UPDATE**: relevant and sound; needs specific improvements.
- **REWRITE**: substantial quality or originality problems.
- **CONSOLIDATE**: significant overlap with another page. A recommendation only; no merge happens without approval.
- **REVIEW**: can't be resolved without the firm or a lawyer.

## How priority is set

In order. A page high on an earlier line outranks one high on a later line.

1. Something published could mislead a person or expose the firm: wrong facts, unsupported claims.
2. Pages the firm earns from (C11 work permits, visit visas, refusals) and the pages that build trust in the firm.
3. Non-brand Search Console demand where the page is close enough to move.
4. Pages with no in-copy links pointing at them.
5. Everything else, in passing.

Brand searches are excluded from line 3. `/about`, `/fees` and `/about/our-team` collect
most of their impressions from people searching the firm's own name, so a high impression
count there is not a content opportunity.

## The batch cycle

A batch is at most about ten pages, one commit, one deploy.

1. **Baseline.** Note the current commit and run the crawler. Git holds the original wording.
2. **Diagnose.** For each page, record the problems found, quoting the page.
3. **Verify.** Check every fact you will change or add against a primary source, and note the source.
4. **Draft.** Change only what the diagnosis calls for. Keep what is already good.
5. **Compare.** Read the diff as a reader would: is this page actually better?
6. **Build and check locally.** Run the crawler against the local build and go through the checklist below.
7. **Ship.** Commit, push to `webnew` main, mirror to `origin` main, and verify on production.
8. **Record.** Add the batch to `ledger.md`, and tell IndexNow about the changed URLs.

## What needs approval first

**Can ship within an approved batch:** wording, structure, titles and descriptions, FAQs, internal links, and corrections backed by a primary source.

**Needs explicit approval:** changing a URL, deleting or merging a page, removing a substantial section, changing how the firm is positioned, any new claim about the firm or its people, anything in `lib/facts.ts` marked `needsLawyer`.

**Never:**
- Invent statistics, testimonials, qualifications, reviews, success rates or credentials.
- Change a date just to look fresh. `dateModified` and a blog post's `updated` move only with a real content change.
- Claim a page is plagiarism-free or legally cleared.
- Remove redirects, change canonicals, or alter `robots.txt` or sitemap behaviour without a stated reason.
- Report something as done before it has been checked on production.

**Figures.** Figures set in law (an Act or a regulation) may be printed, with the section
linked, the date it was read, and an entry in `lib/facts.ts`. The site owner decided this on
8 November 2026. Figures that appear only on an official page, such as fees, processing times
and fund amounts, stay unprinted until decided otherwise.

**Review dates.** `reviewed` in `lib/routes.ts` means a human checked the content. An
automated edit does not count, and doesn't move that date.

## Checklist for every batch

Automated, by diffing the crawler's output before and after:
- [ ] Every URL returns 200, and the URL count matches expectations.
- [ ] One H1 per page, with no skipped heading levels introduced.
- [ ] Title and description present; title within about 60 characters, description within 160.
- [ ] Canonical unchanged and self-referencing.
- [ ] No `noindex`, nothing dropped from the sitemap.
- [ ] JSON-LD parses, and no schema was lost.
- [ ] No broken internal links.

By hand, on a sample of the changed pages:
- [ ] Renders correctly on desktop and on a phone, in light and dark themes.
- [ ] External links open.
- [ ] Forms and WhatsApp buttons still work.
- [ ] The page reads well and has no factual or grammatical errors.

## Rollback

Every batch is one commit.

```bash
git revert <commit>
git push webnew HEAD:main
git push origin HEAD:main
```

Never pair a push with a manual Railway redeploy for the same commit: the two deployments cancel each other.

## Limits of the method

- Search Console data began on 21 October 2026, so early numbers are small and noisy. Judge changes over weeks.
- Originality is sample-checked against public search results. That can reveal a problem; it can't prove there isn't one.
- `canada.ca` and `travel.state.gov` sometimes block automated reads. Those facts need a human to open the page.
- Pattern matches in the crawler are leads for a reader, never verdicts.
