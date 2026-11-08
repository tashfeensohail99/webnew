# Content audit ledger

One entry per batch, newest first. Each entry records the commit, what changed and why, the sources used, and what was checked on production.

To see any page's original wording: `git show 9d17a79:<path to the page>`.

## Statutory figures on the refusal pages, 8 November 2026

- **Commit:** `f365179`. To undo only the page changes, restore the nine `app/` pages and `lib/facts.ts` from `82e5e1f`, because this commit also recorded batch 4 in this ledger.
- **Decision:** the site owner approved printing figures set in law. Rule added to `README.md`. Figures found only on an official page, such as fees, processing times and fund amounts, stay unprinted.
- **Printed:** 15 days for a matter arising in Canada and 60 days for a matter arising outside Canada, after the day the person is notified or becomes aware ([IRPA s.72(2)(b)](https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-72.html)); five years of inadmissibility and no permanent residence application during it ([IRPA s.40(2)(a) and (3)](https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html)). Both read at source on 8 November 2026.
- **Pages:** `/canada-visa-refused`, `/refusals/gcms-notes`, `/refusals/judicial-review`, `/refusals/reconsideration`, `/refusals/re-applying`, `/refusals/misrepresentation`, `/study-in-canada/refusals`, `/work-permit-canada/refusals`, `/study-in-canada/study-permit`. New descriptions on `/refusals/judicial-review` and `/refusals/misrepresentation`.
- **Kept on every page that prints the court periods:** which period applies to a decision is for Canadian counsel to confirm.
- **Register:** `caFederalCourtPeriods` and `caMisrepresentationPeriod` in `lib/facts.ts`, both `needsLawyer: true` with a note that they were printed on the owner's instruction. No lawyer has reviewed the wording.
- **Checked before shipping:** build, typecheck, `test:crs` (66 passed), `test:fsw` (43 passed), local crawl with no regressions. Viewed the `/canada-visa-refused` deadline section on a phone (dark).
- **Checked on production:** GitHub deployment `success`. 93 of 93 URLs return 200, and the crawl shows no regressions. All 12 withholding statements gone and all 19 figures present; the batch 4 checks still pass. All nine pages load on a phone with no sideways scrolling or script errors.
- **Search:** IndexNow accepted the nine URLs. Google not asked.
- **Not yet done:** other figures set in law that batch 3 held back (sponsorship undertaking lengths and the income test), and the numberless "bar on future applications" wording on about 15 other pages.

## Batch 4: refusal pages and officer decision notes, 8 November 2026

- **Commit:** `82e5e1f`. To undo only the page changes, restore the nine `app/` pages, `components/ui.tsx` and `lib/facts.ts` from `adcbacb`, because this commit also recorded batch 3 in this ledger.
- **Why:** the refusal pages described the process before IRCC began sending officer decision notes, and two of them gave wrong rules on who can request GCMS notes and what it costs.

| Page | Change | Source |
| --- | --- | --- |
| `/canada-visa-refused` | Opens with the decision note. No Canadian filer or government fee for a Privacy Act request. Links to all five refusal guides. Deadline wording follows the Act and links to section 72. Unsupported claims about the firm's caseload and the most common ground removed. | [IRCC decision notes](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/officer-decision-notes.html); [IRCC Privacy Act](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/access-information-privacy/request-privacy-act.html); [IRPA s.72](https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-72.html) |
| `/refusals/gcms-notes` | Decision notes moved to the top, with dates and exclusions. Court-deadline warning box. New FAQs on the deadline and on timing. Consent form is IMM 5744 at age 16 or older. Direct Privacy Act link. | As above |
| `/refusals/judicial-review` | "Requires a lawyer" corrected: the Court allows self-representation, and a consultant may not act. What to state about reasons under Rule 9. Unverified claim about the record on redetermination removed. New title. | [Federal Court](https://www.fct-cf.ca/en/pages/who-may-represent-you-in-an-immigration-refugee-protection-or-citizenship-matter-in-federal-court); IRCC decision notes |
| `/refusals/reconsideration` | "Exceptional" attributed to IRCC's guidance and linked. Officers must consider a request and enter reasons in GCMS. Promise to tell readers their deadline removed. Says reconsideration is not on the fee list. | [IRCC guidance](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/service-delivery/reconsideration-after-refusal.html) |
| `/refusals/re-applying` | Starts from the decision note. Section 40 bar stated as inadmissibility and no permanent residence application. Warns that re-applying does not stop the court clock. | IRCC decision notes; [IRPA s.40](https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html) |
| `/refusals/misrepresentation` | Readers told to check any representative on a public register first. Unsourced claim about the firm's clients removed. Shorter title. | IRPA s.40 |
| `/study-in-canada/refusals` | Rebuilt around the decision note. Privacy Act route open from outside Canada. Attestation letter cannot be reused after a refusal. Purpose-of-visit claim corrected. | IRCC decision notes; [IRCC attestation letters](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html) |
| `/work-permit-canada/refusals` | Decision note. Start-Up Visa closed. Bar wording. Who may act in court. Four descriptive link labels. Link to business routes. | IRCC decision notes; [IRCC C11](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html); `lib/facts.ts` |
| `/study-in-canada/study-permit` | Decision note. Dual intent explained and linked. "In our experience" ranking removed. Direct link to IRCC's financial support page. New title. | [IRPA s.22(2)](https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-22.html); IRCC decision notes |
| `components/ui.tsx` | `CTASection` takes a service. The five `/refusals` pages now tag WhatsApp enquiries as refusal work (`JR-`), not work permits. | `lib/wa.ts` |

- **Register:** two entries added to `lib/facts.ts` (decision notes; Privacy Act access). Re-check monthly.
- **Checked before shipping:** build, typecheck, `test:crs` (66 passed), `test:fsw` (43 passed), local crawl with no regressions, no sideways scrolling at phone width. Viewed `/canada-visa-refused` on desktop (light) and the `/refusals/gcms-notes` warning box on a phone (dark).
- **Checked on production:** GitHub deployment `success`. 93 of 93 URLs return 200, and the crawl shows no regressions. All 37 removed statements gone and all 27 new ones present, including the `JR-` tag on the five pages. All nine pages load on a phone with no sideways scrolling or script errors.
- **External links re-tested after the deploy:** 196 unique. None of the nine pages has a 404. `college-ic.ca` redirects (307), which is normal.
- **Search:** IndexNow accepted the nine URLs. Google not asked.
- **Deliberately left alone, waiting on the firm:** every claim about who does this work ("refusals are handled by our lawyers", "That includes us", "Speak to someone licensed", showing clients redacted outcome files, "Two of these earn us less"); the judicial review prices on `/fees` against "We do not publish figures"; the promises to tell readers which option is theirs; review dates.
- **Deliberately left alone, waiting on the figures decision:** the 15-day and 60-day court periods (s.72(2)(b)) and the five-year period (s.40(2)(a)). Both were re-read at source on 8 November and are not printed. Pages link to the sections instead.
- **Left for later batches:** lighter mentions of GCMS notes on the homepage, `/tools/visit-visa-refusal-risk`, the refusal decoder, `/study-in-canada` and `/study-in-canada/proof-of-funds`; "bar on future applications" wording on about 15 other pages; shortening `/canada-visa-refused` and `/refusals/reconsideration`; the `/study-in-canada/refusals` WhatsApp tag.

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
