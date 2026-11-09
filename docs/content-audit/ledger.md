# Content audit ledger

One entry per batch, newest first. Each entry records the commit, what changed and why, the sources used, and what was checked on production.

To see any page's original wording: `git show 9d17a79:<path to the page>`.



## Batch 11: searched phrases in headings and less repetition (9 November 2026)

- **Commit:** `9bea688`, live on production the same day. This is SEO Step 4, limited to items in the keyword map that need nothing from the firm.

| Page | Change | Why |
| --- | --- | --- |
| `/blog/mofa-online-attestation` | Two headings now use "MOFA online attestation" and "MOFA attestation portal". | Search Console: eight MOFA searches at positions 7 to 26 |
| `/study-in-canada/designated-learning-institutions` | Headings add "(DLI)" and "find its DLI number". | Searches for "dli number" and "dli meaning" |
| `/pnp/newfoundland-labrador`, `/pnp/new-brunswick` | Headings add NLPNP and NBPNP. | Searches use the short names |
| `/study-in-canada/working-while-studying` | Heading uses "work while studying in Canada". | 22 impressions at position 30 |
| `/family-sponsorship/spouse-partner` | Heading names arranged marriages. | The page already answers this; the search had no heading to match |
| `/study-in-canada/provincial-attestation-letter` | Notes that applicants call it the province letter. | Search for "province letter" |
| `/` | Office links now read "Canada visa consultants in Lahore" and "Immigration consultants in Islamabad". | The homepage outranks the city pages |
| `/immigration-consultant-lahore`, `/immigration-consultant-islamabad` | Three links each to the site's biometrics, police certificate and medical guides. | Those guides had no links from the city pages |
| `/work-permit-canada` | New FAQ on whether the C11 is still open. | Google suggests the question; read at IRCC on 9 November 2026 |
| `/work-permits` | LMIA explanation cut to two sentences and a link; duplicate FAQ removed. Words 2,152 to 1,887. | Audit: repeats `/work-permits/lmia` |
| `/caregivers` | Fraud patterns cut to one sentence and a link. Words 2,607 to 2,567. | Audit: repeats `/work-permits/caregivers` |
| `/family-sponsorship` | Inland and outland, parents pool and lock-in material cut to summaries. Words 2,701 to 2,373. | Audit: repeats the three spokes |
| `/study-in-canada` | Seven-stage list replaced by a four-stage route with a link to each guide. Words 2,082 to 1,947. | Audit: repeats `/study-in-canada/study-permit` |
| `lib/facts.ts` | One new entry on the C11's status, checked 9 November 2026. | |

- **Kept deliberately:** details found only on a hub stay there, including the spousal public policy link and that an outland spouse can often still visit, the ESDC rule on recovering recruitment costs on `/caregivers`, and the whole super visa section.
- **Checked before shipping:** typecheck, build, `test:crs` (66), `test:fsw` (43), `test:clb` (34). On the local build: 9 removed phrases gone, 20 new phrases present, 93 URLs crawled with no regressions, nothing scrolls sideways at phone width on nine pages, no JS errors.
- **Checked on production:** the same 29 text checks pass, 93 of 93 URLs return 200, no regressions, nothing scrolls sideways at phone width on nine pages.
- **Search:** IndexNow accepted the 15 URLs. Google not asked.
- **Changed from the plan:** the homepage H1 keeps its two cities, because the homepage holds the only city ranking near page one. Links from the three step guides to the MOFA post were not added, because those guides don't deal with attestation.
- **Left alone:** review dates, every claim about the firm's lawyers, and `/visitor-visa` and `/immigration-programs` (merging needs the owner's decision).

## Batch 10: C11 requirements and city page local steps (8 November 2026)

- **Commit:** `24626dd`, live on production the same day.
- **Why these pages:** SEO Step 2 and Search Console's query table. The C11 guide gets generic C11 searches at positions 10 to 17. The Lahore and Islamabad averages (9.5, 8.3) are mostly searches for the firm's name; their generic searches sit at positions 41 to 82. Saved in `competitors/serp-2026-11-08.json`.

| Page | Change | Source |
| --- | --- | --- |
| `/work-permit-canada` | New title and description. Added IRCC's documentary evidence list, self-employed and entrepreneur roles, significant benefit, temporary stay and exit plan, steps from Pakistan, government costs, processing times tool, other routes, four new FAQ answers. Words 1,998 to 3,232, official links 1 to 12. | [IRCC C11 instructions](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html), R205, IRCC fee list, biometrics, medical and police certificate pages |
| `/immigration-consultant-lahore` | Added in-person steps for Lahore and two FAQ answers. "Most of them" became "Many of them". Words 593 to 839. | IRCC biometrics, visa application centre, police certificate (Pakistan) and panel physician pages |
| `/immigration-consultant-islamabad` | Added in-person steps, including the Islamabad and Rawalpindi police certificate split, and two FAQ answers. "The most common story" became "a common story". Words 598 to 835. | As above |
| `lib/facts.ts` | Nine new entries, checked 8 November 2026. | As above |

- **Checked before shipping:** typecheck, build, `test:crs` (66), `test:fsw` (43), `test:clb` (34). On the local build: 4 removed phrases gone, 20 new phrases present, 93 URLs crawled with no regressions, nothing scrolls sideways at phone width, no JS errors.
- **Checked on production:** the same 24 text checks pass, 93 of 93 URLs return 200, no regressions, nothing scrolls sideways at phone width on the three pages. 204 external links tested: no 404s; 14 others are bot blocks, timeouts or certificate errors on links that were already there.
- **Search:** IndexNow accepted the three URLs. Google not asked.
- **Deliberately left alone:** review dates and the "reviewed by" lines (no lawyer reviewed these edits), every claim about the firm's lawyers, the Mississauga office, past C11 filings, the "Immigration lawyers in" headings and city page titles. All wait on the firm (batch 8). Fee amounts and processing times stay unprinted under the figures rule.
- **Not done:** who works at each office and how a visit works (needs the firm); links from the city pages to the site's own biometrics and police certificate guides (Step 7).

## Batch 9: visitor pages, hubs and remaining corrections, 8 November 2026

Batch 8 (trust pages) is blocked on the firm and has not been done.

- **Commit:** `c253a05`. To undo only the page changes, restore `app/`, `components/` and `lib/` from `b490511`, because this commit also recorded batch 7 in this ledger.
- **Merges:** none. `/visitor-visa` and `/immigration-programs` stay as separate pages, each now linking to its guides.

| Page | Change | Source |
| --- | --- | --- |
| `/visitor-visa/eta` | Exceptions corrected: US green card holders need neither a visa nor an eTA; no eTA route on a Pakistani passport; dual nationals added. New description. | [IRCC eTA eligibility](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/eligibility.html) (2026-08-06) |
| `/visitor-visa/invitation-letter` | Contents match IRCC's list. Notarisation no longer attributed to IRCC's visitor page. Sample layout with placeholders. Super Visa line. | [IRCC invitation letter](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/letter-invitation.html) |
| `/canada-visit-visa` | Decision notes. Approval-rate wording corrected. Funds from a relative. Outcome language and caseload claims removed. Links to all visitor guides. | IRCC decision notes |
| `/visitor-visa` | Links to all sub-pages. eTA described as separate. Dead data link replaced. New title. | [IRCC operational data](https://open.canada.ca/data/en/dataset/9b34e712-513f-44e9-babf-9df4f7256550) |
| `/family-sponsorship/dependent-children` | Under 22 stated. Undeclared family policy ended 10 September 2026. Five-year ban stated. Unsupported claims removed. | [IRPR s.2](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-2.html); [IRCC public policy](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children/who-you-can-sponsor/undeclared-family.html) |
| `/quebec-immigration` | PSTQ and Arrima named. PEQ closed 31 October 2026. New title. | [Quebec PEQ](https://www.quebec.ca/immigration/permanente/travailleurs-qualifies/programme-experience-quebecoise); [Quebec PSTQ](https://www.quebec.ca/en/immigration/permanent/skilled-workers/skilled-worker-selection-program) |
| `/immigration-programs` | Every route links to its guide. Superlative removed. | None needed |
| `/tools/visit-visa-refusal-risk`, `VisitVisaRiskChecker.tsx` | Overstated consequences and caseload claims corrected, including the high-risk result text. | IRCC decision notes |
| `/tools/clb-converter` | Retake advice corrected: IRCC does not accept IELTS One Skill Retake for Express Entry. | [IRCC language tests](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html) |
| `/updates`, `lib/youtube.ts` | The Peshawar branch video and one untitled video filtered out. LMIA and MOFA videos link to the right guide. Follower claim removed. | `lib/site.ts` |

- **WhatsApp tags:** enquiries from all visitor pages now arrive as `VV-`, study pages as `SV-`, and the study and C11 refusal pages as `JR-`.
- **Internal links:** only `/`, `/privacy` and `/terms` now have no in-copy links pointing at them.
- **Register:** four entries added to `lib/facts.ts`. Re-check monthly.
- **Checked before shipping:** build, typecheck, `test:crs` (66 passed), `test:fsw` (43 passed), `test:clb` (34 passed), local crawl. Viewed the letter layout on desktop (light) and the visit visa links on a phone (dark).
- **Checked on production:** GitHub deployment `success`. 93 of 93 URLs return 200. The crawl flags only `/updates`, whose links come from the YouTube feed and changed because LMIA videos now go to the LMIA guide. All 32 removed statements gone and all 23 new ones present. All ten pages load on a phone with no sideways scrolling or script errors. The two filtered videos no longer appear.
- **External links re-tested after the deploy:** 201 unique, with no 404s anywhere on the site.
- **Search:** IndexNow accepted the ten URLs. Google not asked.
- **Needs the firm:** whether a Peshawar branch is planned (the video stays filtered until confirmed); "Talk to a lawyer" buttons.
- **Deliberately left alone, under the rule on figures:** Quebec's French levels.
- **Not re-checked:** the CLB conversion date stays at 20 July 2026. Only the TEF table was compared with IRCC this time, and it matched.
- **Other items left:** what documents a visitor visa needs on `/canada-visit-visa`; shortening `/visitor-visa/eta`; the status of Quebec's business categories.

## Batch 7: work permit pages, 8 November 2026

- **Commit:** `b490511`. To undo only the page changes, restore `app/work-permit-canada/`, `app/work-permits/` and `lib/facts.ts` from `7adc00d`, because this commit also recorded batch 6 in this ledger.
- **Why:** the bridging permit page was built on a timing rule IRCC does not publish, the intra-company page gave business owners the wrong answer, and the hub linked to only one of its routes.

| Page | Change | Source |
| --- | --- | --- |
| `/work-permits/bridging-open-work-permit` | Expiry window removed. Real conditions: maintained status or restoration count. Required stage for each class. Eligible classes named. New description. | [IRCC BOWP](https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/pr-work-permits/bridging.html) (2026-10-16); [IRPR s.182](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-182.html) |
| `/work-permits/intra-company-transfer` | Controlling owners of a single-country business are not eligible, and are pointed to C11. "Parent" corrected. Prevailing wage added. | [IRCC ICT instructions](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/intra-company-transferees.html) |
| `/work-permits/international-experience-canada` | Treaty professionals removed from routes open regardless of nationality. IAESTE named as the only listed organization that could reach a Pakistani citizen. Overview link repointed to `/work-permits`. | [IRCC recognized organizations](https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec/recognized-organizations.html) |
| `/work-permits` | Every route card links to its page; other routes listed. Trade agreement wording corrected. Five-year ban stated. New title. | [IRCC business people](https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/special-instructions/business-people.html); IRPA s.40 |
| `/work-permits/lmia` | Framing corrected. Low-wage limits added. Fraud reporting linked. Five-year ban stated. | [ESDC refusal to process](https://www.canada.ca/en/employment-social-development/services/foreign-workers/refusal.html); [IRCC report fraud](https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/report-fraud.html) |
| `/work-permits/lmia-exempt` | Each family links to its page. "Owner-operator" explained as a sales term. Canadian Experience Class caveat. Dead link replaced. | [IRCC CEC](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html) |
| `/work-permit-canada` | Employer Portal step and compliance fee. Funds test in IRCC's terms. Canadian Experience Class caveat. Family FAQ. Claims about other agents removed. Link to `/work-permits`. | [IRCC C11 instructions](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html); IRCC CEC |
| `/work-permits/post-graduation` | Flight school exception. Unsupported claims about the firm's experience removed. | [IRCC PGWP eligibility](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html) |

- **Register:** three entries added to `lib/facts.ts`. Re-check monthly.
- **Checked before shipping:** build, typecheck, `test:crs` (66 passed), `test:fsw` (43 passed), local crawl. Viewed the hub's route cards on desktop (light) and the bridging permit warning box on a phone (dark).
- **Checked on production:** GitHub deployment `success`. 93 of 93 URLs return 200. The crawl flags only the deliberate repointing of the overview link on `/work-permits/international-experience-canada`. All 28 removed statements gone and all 19 new ones present. All eight pages load on a phone with no sideways scrolling or script errors.
- **External links re-tested after the deploy:** 201 unique. None on these pages failed. One dead link remains on the site, on `/visitor-visa`.
- **Search:** IndexNow accepted the eight URLs. Google not asked.
- **Waiting on the firm:** on `/work-permit-canada`, "reviewed by our lawyers", "We've filed these before" and what the Mississauga office does.
- **Needs a licensed representative:** whether GATS gives Pakistani citizens any work permit access; the rewritten bridging permit eligibility.
- **Deliberately left alone, under the rule on figures:** the PGWP minimum length, application window and language levels, the C11 18-month and 51% rules already on the page aside, the intra-company qualifying period, and ESDC's unemployment and low-wage percentages. These appear only on official pages.
- **Other items left:** review dates; repeated section headings across the cluster.

## Batch 6: study pages, 8 November 2026

- **Commit:** `7adc00d`. To undo only the page changes, restore `app/study-in-canada/` and `lib/facts.ts` from `0c3b924`, because this commit also recorded batch 5 in this ledger.
- **Why:** the pages misstated when a study permit ends and how restoration works, described a co-op permit IRCC removed, and withheld limits set in the Regulations.

| Page | Change | Source |
| --- | --- | --- |
| `/study-in-canada/study-permit-extension` | Permit invalid 90 days after completion, or when enrolment at the named school ends. Restoration within 90 days, and what an officer must find; "discretionary" removed. | [IRPR s.222](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-222.html); [IRPR s.182](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-182.html) |
| `/study-in-canada/working-while-studying` | 24 hours a week off campus, no limit on campus or in scheduled breaks, the older 20-hour wording, last-semester part-time students, and the 1 April 2026 co-op change. New title and description. | [IRPR s.186(v)](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-186.html); [IRCC off campus](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html); [IRCC co-op notice](https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/simplifying-co-op-work-permit-requirement-post-secondary-international-students.html) |
| `/study-in-canada/provincial-attestation-letter` | Validity and reuse. Master's and doctoral exemption from 1 January 2026, and other listed exemptions. Quebec carve-out. What happens to an application without a letter. | [IRCC attestation letters](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html) |
| `/study-in-canada/bringing-family` | Programmes that qualify a spouse. IRCC's separate test for extensions. Dead link replaced. | [IRCC spouses of students](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-common-law-partner-work-canada.html) |
| `/study-in-canada/designated-learning-institutions` | IRCC's list linked early. Exception if a school closes or loses designation. New attestation letter when changing schools. Consequences stated as IRCC states them. | [IRCC changing schools](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/change-schools.html) |
| `/study-in-canada/proof-of-funds` | Decision note replaces "order the notes". Direct link to IRCC's financial support page. | [IRCC financial support](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html) |
| `/study-in-canada` | Work hours and co-op rule corrected. New title. | As above |

- **Across the cluster:** claims about what the firm sees and rankings of refusal grounds removed, because nothing on file supports them.
- **Register:** six entries added to `lib/facts.ts`. The three set in the Regulations carry `needsLawyer: true`, printed under the site owner's rule on figures set in law.
- **Checked before shipping:** build, typecheck, `test:crs` (66 passed), `test:fsw` (43 passed), local crawl with no regressions. Viewed the weekly limit box on desktop (light).
- **Checked on production:** GitHub deployment `success`. 93 of 93 URLs return 200, and the crawl shows no regressions. All 27 removed statements gone and all 19 new ones present. All seven pages load on a phone with no sideways scrolling or script errors.
- **External links re-tested after the deploy:** 200 unique. None on the study pages failed. Two dead links remain elsewhere: `/visitor-visa` and `/work-permits/lmia-exempt`.
- **Search:** IndexNow accepted the seven URLs. Google not asked.
- **Needs a lawyer:** the restoration wording (`shall restore`, s.182(2)) and how the January 2025 spouse rules apply at renewal. The audit asked for both to be approved.
- **Deliberately left alone, under the rule on figures:** the living-cost amount, the 16-month master's minimum, IRCC's advice on how early to apply, and the number of months of bank statements. These appear only on IRCC's pages.
- **Other items left:** review dates; "Talk to a lawyer" buttons; overlap between `/study-in-canada` and `/study-in-canada/study-permit`, and the repeated "we would rather tell you on the first call" closing lines.

## Batch 5: provincial nominee program pages, 8 November 2026

- **Commit:** `0c3b924`. To undo only the page changes, restore `app/pnp/` and `lib/facts.ts` from `f365179`, because this commit also recorded the statutory figures change in this ledger.
- **Why:** the pages described base nominations as paper-based, offered closed routes, and refused to name what is open. Ontario's page warned about streams that no longer exist without naming the one that does.
- **Policy change:** province pages now name current streams with a date, as the batch plan set out. Names are not figures, so the rule in `README.md` on figures is unaffected. Each name is registered in `lib/facts.ts` and needs a monthly re-check.

| Page | Change | Source |
| --- | --- | --- |
| `/pnp` | "Paper-based" removed. Province list added. Provinces alone assess intent since 30 March 2026. Two dead links replaced. New H1 and opening. | [IRCC non-Express Entry](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/non-express-entry.html); [IRCC instructions](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/economic-classes/provincial-nominees/base-determining-membership-class.html) |
| `/pnp/ontario` | Rebuilt around the Ontario Workforce Priority stream: job offer, physician exception, employer portal, expression of interest, scoring, Express Entry option. Closed routes removed. New description. | [Ontario stream page](https://www.ontario.ca/page/ontario-workforce-priority-stream); [Ontario updates](https://www.ontario.ca/page/2026-ontario-immigrant-nominee-program-updates) |
| `/pnp/saskatchewan` | Entrepreneur and Farm pathways shown as permanently closed. Programs named. Capped sectors. | [SINP programs](https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs); SINP FAQs (updated 19 December 2025) |
| `/pnp/nova-scotia` | Four streams named. Job offer answer corrected. Warning about the short window after selection. New title. | [Live in Nova Scotia](https://liveinnovascotia.com/nova-scotia-nominee-program) |
| `/pnp/manitoba` | Three streams named. Recent draws considered Skilled Worker Overseas profiles only with a direct invitation. | [Manitoba draws #282 and #283](https://immigratemanitoba.com/draws/) |
| `/pnp/newfoundland-labrador` | Five categories named. Expression of interest described as the first step. | [NL EOI model](https://www.gov.nl.ca/immigration/expression-of-interest-model-overview/) |
| `/pnp/alberta` | Eight streams named. Says which assume you are already in Alberta and that Express Entry selects from the federal pool. Corrected risk at the federal stage. | [AAIP](https://www.alberta.ca/alberta-advantage-immigration-program) |
| `/pnp/british-columbia` | Streams named. Plain answer that worker streams need a job offer. Dead link replaced. Eligibility now points to the FSW calculator. | [WelcomeBC, For workers](https://www.welcomebc.ca/immigrate-to-b-c/for-workers) |
| `/pnp/new-brunswick` | Unsupported claims removed. Link updated to the address IRCC uses. | IRCC non-Express Entry and provincial nominees pages |
| `/pnp/prince-edward-island` | Unsupported claims removed. Eligibility now points to the FSW calculator. | None needed |

- **Across the cluster:** "The failure patterns we see from Pakistan" and rankings of mistakes replaced, because nothing on file supports them. "Bar on future applications" replaced with five years of inadmissibility under section 40.
- **Register:** seven entries added to `lib/facts.ts`. Re-check monthly.
- **Checked before shipping:** build, typecheck, `test:crs` (66 passed), `test:fsw` (43 passed), local crawl. Viewed the Ontario stream section on desktop (light) and the Alberta stream box on a phone (dark).
- **Checked on production:** GitHub deployment `success`. 93 of 93 URLs return 200. The crawl flags only the deliberate move of the eligibility link on `/pnp/british-columbia` and `/pnp/prince-edward-island` from the CRS to the FSW calculator. All 40 removed statements gone and all 25 new ones present. All ten pages load on a phone with no sideways scrolling or script errors.
- **External links re-tested after the deploy:** 199 unique. None of the ten pages has a 404. `www.gnb.ca` returns 403 to automated checks; IRCC links to that address.
- **Search:** IndexNow accepted the ten URLs. Google not asked.
- **Could not verify:** New Brunswick's and PEI's sites showed bot checks on 8 November 2026. They were not bypassed, so their streams stay unnamed and need a person to read them.
- **Deliberately left alone:** deadlines and amounts that appear only on provincial pages, such as Ontario's and Nova Scotia's invitation windows; "Talk to a lawyer" buttons; review dates; repeated explanations of enhanced and base nominations; the Francophone and Mobility cards on `/pnp/nova-scotia`.
- **Noticed, not changed:** paragraphs inside `Callout` boxes have no gap between them. This affects every page that uses the component.

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
