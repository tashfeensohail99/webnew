# Content audit ledger

One entry per batch, newest first. Each entry records the commit, what changed and why, the sources used, and what was checked on production.

To see any page's original wording: `git show 9d17a79:<path to the page>`.

## Batch 3: programmes that have closed or paused, 8 November 2026

- **Commit:** `adcbacb`. To undo only the page changes, restore the changed `app/` files and `lib/facts.ts` from `11cef34`, because this commit also added the SEO baseline evidence.
- **Why:** these pages described closed or paused programmes as available, or kept their status vague.

| Page | Change | Source |
| --- | --- | --- |
| `/family-sponsorship` | Parents' program paused; public policy for spouses without status; links to all detail pages; dead fee link replaced; no longer points to a fee page with no family prices; WhatsApp prefill reworded. | [IRCC, parents](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html); [IRCC public policy](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/immigration-refugee-protection-act-spousal-policy.html) |
| `/family-sponsorship/parents-grandparents` | Dated status box; steps, FAQs and call to action rewritten around the pause; unsupported caseload claim removed. | IRCC, parents |
| `/visitor-visa/super-visa` | Sponsorship described as paused; IRCC's term "promise of financial support" used; both income options reflected; banned wording replaced. | IRCC, parents; [IRCC host support](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/forms-documents/host-financial-support.html) |
| `/canada-immigration-from-pakistan` | Sponsorship card and text limited to routes available now; dead fee link replaced; unsupported claims removed. | IRCC, parents |
| `/canada-immigration-from-pakistan/police-certificate` | Dead Sindh Police link replaced with the service's home page. | Live test |
| `/caregivers` | Dated status box; who may be the employer corrected; superlatives removed. | [IRCC notice](https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/pausing-home-care-worker-immigration-pilots-application-intake.html); [IRCC job offer](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/caregivers/home-care-worker-immigration-pilots/child-care-home-support/job-offer.html) |
| `/work-permits/caregivers` | Pilots paused; spouse rule stated by skill level. | IRCC notice; [IRCC spouse rules](https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/spouses-dependent-children/eligibility.html) |
| `/work-permit-canada/business-plan` | Start-Up Visa no longer offered as a route. | [IRCC notice](https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/immigration-measures-entrepreneurs.html) |
| `/business-immigration` | Ontario and Saskatchewan closures; self-employed time and the Canadian Experience Class; unsupported claims softened. | [Ontario](https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp); Saskatchewan; [IRCC CEC](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html) |
| `/rural-community-immigration` | Both current pilots named; retitled away from the closed Rural and Northern pilot. | [IRCC pilots](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots.html) |

- **Register:** five dated programme statuses added to `lib/facts.ts`. Re-check monthly.
- **Checked before shipping:** build, typecheck, `test:crs`, `test:fsw`.
- **Checked on production:** 93 of 93 URLs return 200; the crawl shows no regressions other than the deliberate removal of the `/fees` link from `/family-sponsorship`; all 19 removed statements gone and all 13 new ones present; all ten pages load on a phone with no sideways scrolling or script errors. Status boxes viewed on desktop (light) and phone (dark).
- **External links re-tested after the deploy:** 194 unique. None of the ten pages has a 404. Two unchanged links on `/canada-immigration-from-pakistan/police-certificate` (Punjab and Islamabad police) timed out from the test machine on both tries, so they are neither confirmed nor ruled out. Five dead links remain on pages outside this batch: `/pnp`, `/pnp/british-columbia`, `/work-permits/lmia-exempt`, `/study-in-canada/bringing-family` and `/visitor-visa`.
- **Search:** IndexNow accepted the ten URLs.
- **Deliberately left alone:** review dates (no lawyer reviewed these edits); "Talk to a lawyer" buttons; the undertaking lengths, income test, Super Visa stay length and community list (all wait on the figures decision); merging overlapping sections.

## Batch 2: CRS rebuild and Express Entry guides, 8 November 2026

- **Commit:** `11cef34`. Rollback: `git revert 11cef34`, then push to `webnew` main and `origin` main.
- **Deploy:** five Railway builds failed (four on a redeploy or `railway up`) because GitHub release downloads returned 502/504 to Railway's builder. Not a code fault. The sixth succeeded once downloads were stable. The live site stayed on the previous version throughout.
- **Why:** IRCC changed the CRS on 3 November 2026, so the calculator gave wrong scores to anyone with high-wage Canadian work or a high-wage job offer.

| Page | Change | Source |
| --- | --- | --- |
| `/tools/crs-calculator`, `lib/crs-grid.ts`, `lib/crs-high-wage.ts` | Added the Labour Market Integration factor, high-wage experience and job-offer scoring, and two occupation questions. Core maximums 570 and 530. Removed the batch 1 notice. | [IRCC criteria](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html), [IRCC high-wage list](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html) |
| `/tools`, `/tools/fsw-67-calculator` | Card text; what a qualifying job offer now requires. | [IRCC job offers](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/offer-employment.html) |
| `/express-entry` | New factor explained; says general rounds have not recently been held; links to its guides; dead fee link replaced; unsupported firm claim removed; new title. | IRCC changes page; IRCC rounds data (last general round #294, 23 April 2024) |
| `/express-entry/federal-skilled-worker`, `/federal-skilled-trades`, `/category-based-draws`, `/canadian-experience-class` | No LMIA needed for job offers; rounds described as they are; unsupported "in our experience" claims removed. | As above |
| `/express-entry/draws` | Dated notice that older cut-offs used the old points; a sentence generated from the data when no general round appears in 12 months. | As above |
| `/blog/express-entry-2026-so-far` | Dated update note. `updated` unchanged, because the post's figures were not re-checked. | As above |

- **Added:** `npm run test:crs:ircc`, which compares every table and all 186 occupations with IRCC's live pages. 536 values matched. Two deliberate errors were caught, then removed.
- **Checked before shipping:** build, typecheck, `test:crs` (66 of 66), `test:fsw`, `test:clb`.
- **Checked on production:** 93 of 93 URLs return 200; crawl shows no regressions (`/updates` differs only because its links come from the YouTube feed); 11 of 11 click-through checks on the real calculator pass, including job-offer points at all three levels and "never both"; all six removed statements gone and all five new ones present.
- **Search:** IndexNow accepted the ten URLs after the successful deploy.
- **Deliberately left alone:** review dates (no lawyer reviewed these edits) and the 67-point pass mark on the FSW guide (waits on the figures decision).

## Batch 1: same-day corrections, 8 November 2026

- **Commit:** `4a1c244`. To undo only the page changes, restore the nine changed files from `9d17a79`, because this commit also added the audit system.
- **Why these six:** each stated something no longer true, and each fix could rest on a primary source without any answer from the firm.

| Page | Problem | Change | Source |
| --- | --- | --- | --- |
| `/tools/crs-calculator` | Grid predates the 3 Nov 2026 CRS change; page said no change was settled | Notice above the tool and beside the score saying who is affected; rewrote "what changed", FAQs, description; removed the 695 maximum | [IRCC changes](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/changes.html), [IRCC criteria](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html) |
| `/tools` | Called the grid current; label implied the tool decides eligibility | New title, description, card text and checker label | As above; `lib/site.ts` banned phrases |
| `/tools/fsw-67-calculator` | Said a job offer adds nothing to the CRS; quoted a 1,200 maximum | Corrected the FAQ, paragraph and help text; language retake now says full retake | IRCC changes |
| `/uk` | Said no government response existed | Rewrote section and FAQ; `lib/facts.ts` entry updated | [GOV.UK outcome](https://www.gov.uk/government/consultations/earned-settlement); timing from Lewis Silkin, attributed |
| `/privacy` | Said the site has no forms | Added a section on the consultation form, listing the fields `LeadForm.tsx` sends | `components/LeadForm.tsx` |
| `/book-consultation` | FAQs left over from the paid consultation | Rewrote both for a free consultation | `lib/site.ts` |

- **Checked on production:** 93 of 93 URLs return 200, and the crawl shows no regressions against the baseline (H1s, canonicals, indexing, schema, internal links, in-copy links, title and description lengths). All ten removed statements are gone and all five new ones are present.
- **Checked before shipping:** build, typecheck, `test:crs` and `test:fsw` pass. On the local build, the calculator still scores and shows the new caveat, there's no console error, and nothing scrolls sideways at phone width on the calculator, `/uk` or `/privacy`. Viewed the calculator on desktop and phone, and `/uk` in dark mode.
- **Search:** IndexNow accepted all six URLs. Google not asked.
- **Deliberately left alone:** review dates (no lawyer reviewed these edits), every claim about the firm's lawyers, the unverified legal statements on `/privacy`, and the calculator's grid (batch 2).
- **Not re-tested:** the consultation form and WhatsApp buttons. Their code was not changed.

## Baseline: 8 November 2026

- **Commit audited:** `9d17a79` (live on production at the time).
- **Scope:** all 93 URLs in the sitemap: 88 routes and 5 blog posts.
- **Site changes made by the audit:** none.
- **Evidence kept here:** `inventory.json`, `inventory.csv`, `gsc-pages-2026-11-08.tsv`, `findings.json`, `decisions.csv`.
- **Checks run:** crawl of production (every URL 200, one H1 each, canonicals self-referencing, none noindexed, JSON-LD parses), 186 external links tested, 304 claims checked by reviewers against sources, 31 of the 55 contradicted claims re-read at the official source by a second pass.
- **Not done:** a lawyer's review; full plagiarism clearance (40 sentences sampled against public search only).
