/**
 * Every legal/programme fact this site states in public, with its source and the
 * date it was checked.
 *
 * WHY THIS FILE EXISTS: immigration rules change constantly, and a stale fact on
 * a page where someone commits their savings is a liability, not a typo. Facts
 * scattered through JSX rot silently and cannot be audited. Here, one file can be
 * re-checked in an hour and every page updates.
 *
 * THE RULE: if it isn't in this file with a source, it does not get stated as
 * fact on a page. Anything a lawyer hasn't signed off carries `needsLawyer: true`
 * and must not ship.
 *
 * Provenance levels:
 *   'primary'   — read from the government/court/official source itself.
 *   'secondary' — reputable firm or news reporting; NOT yet confirmed against the
 *                 primary text. Several official sites (canada.ca,
 *                 travel.state.gov) block automated fetching, so a human must
 *                 open them. Treat as a lead, never as publishable truth.
 */

export type Fact = {
  id: string;
  /** The claim, stated exactly as it may appear on a page. */
  claim: string;
  provenance: 'primary' | 'secondary';
  /** Where it came from. A reader (or a regulator) must be able to follow this. */
  source: string;
  sourceUrl?: string;
  /** ISO date this was last checked against the source. */
  checked: string;
  /** True until a lawyer on the team has signed it off. Blocks publication. */
  needsLawyer?: boolean;
  note?: string;
};

export const FACTS: Record<string, Fact> = {
  // ── UNITED STATES ────────────────────────────────────────────────────────
  usTreatyE2: {
    id: 'us.treaty.e2',
    claim:
      'Pakistan is a treaty country for the US E-1/E-2 visas, under the Treaty of Friendship and Commerce signed 12 November 1959, in force since 12 February 1961.',
    provenance: 'primary',
    source: 'UN Treaty Series No. 5816, Vol. 404 (treaty text)',
    checked: '2026-07-17',
    needsLawyer: true,
    note:
      'Corroborated by the treaty text and multiple secondary sources. BUT travel.state.gov blocks automated fetching, so the US Department of State treaty table itself was never read — and at least one law-firm table omits Pakistan. A human must open the DOS table before this is published. The firm has already sold 2 E-2 engagements, so getting this wrong is a liability event, not a content error.',
  },
  usImmigrantVisaPause: {
    id: 'us.iv.pause',
    claim:
      'From 21 January 2026 Pakistan was one of 75 countries under a US immigrant visa pause. A federal court order ended it on 21 August 2026, and the State Department says it is no longer in effect. It can change — check the State Department notice and the US Embassy in Pakistan visa page.',
    provenance: 'secondary',
    source:
      'State Department notice of 28 Aug 2026 (travel.state.gov blocks automated fetching; wording read via a search-engine copy); pk.usembassy.gov pause notice now 404 and visas page carries none; CLINIC v. Rubio (S.D.N.Y. No. 26-CV-00858), vacatur 21 Aug 2026, as reported',
    sourceUrl:
      'https://travel.state.gov/en/newsroom/visas/2026/immigrant-visa-processing-updates-for-nationalities-at-high-risk-of-public-benefits-usage.html',
    checked: '2026-10-24',
    needsLawyer: true,
    note:
      'Published on /usa and /blog/eb2-niw-pakistan on 24 Oct 2026 on the firm owner’s instruction, in wording that stays true either way the litigation goes (states the record, sends readers to the official pages). Still worth a lawyer’s confirmation. Reported but NOT officially confirmed: a government appeal, and a post-ruling pause on immigrant-visa interview appointments for officer training — hence "interview scheduling has not simply snapped back". Adjustment of status is discretionary per USCIS PM-602-0199 (21 May 2026). Re-check monthly.',
  },
  usNoTravelBan: {
    id: 'us.no.travelban',
    claim:
      'Pakistan is NOT on the US travel ban — not in the 4 June 2025 proclamation (19 countries), nor the 16 December 2025 expansion (39 countries), nor the USCIS adjudication pause.',
    provenance: 'primary',
    source: 'NAFSA travel-ban comparison table (Pakistan blank across all three)',
    checked: '2026-07-17',
    note:
      'This is a CORRECTIVE fact and one of the most valuable on the site. A casual web search will wrongly tell a Pakistani applicant they are banned — it alarms clients and costs the firm business. Do not confuse with the immigrant visa pause above, which DID apply to Pakistan until a court ended it on 21 August 2026. The USCIS holds (2 Dec 2025, 1 Jan 2026 memos) covered travel-ban countries only, and have since been vacated / blocked by courts.',
  },

  // ── UNITED KINGDOM ───────────────────────────────────────────────────────
  ukSkilledWorkerSalary: {
    id: 'uk.skilledworker.salary',
    claim:
      'The UK Skilled Worker general salary threshold is £41,700, or the going rate for the occupation — whichever is higher. The immigration salary list rate is £33,400.',
    provenance: 'primary',
    source: 'gov.uk Skilled Worker visa guidance',
    sourceUrl: 'https://www.gov.uk/skilled-worker-visa',
    checked: '2026-07-17',
  },
  ukRqf6: {
    id: 'uk.rqf6',
    claim:
      'Since 22 July 2025 the UK Skilled Worker route requires a job at RQF Level 6 (degree level); around 180 occupation codes were removed.',
    provenance: 'primary',
    source: 'gov.uk / UK Immigration Rules change 22 July 2025',
    checked: '2026-07-17',
  },
  ukExpansionWorkerNoSettlement: {
    id: 'uk.expansionworker.nosettlement',
    claim:
      'The UK Expansion Worker route does not lead to settlement. It is capped at 2 years and carries a £52,500 salary threshold.',
    provenance: 'secondary',
    source: 'gov.uk Global Business Mobility guidance (as reported)',
    checked: '2026-07-17',
    needsLawyer: true,
    note: 'Routinely mis-sold in Pakistan as a settlement route. Verify the figures on gov.uk before publishing them.',
  },
  ukSelfSponsorshipNotAVisa: {
    id: 'uk.selfsponsorship.notavisa',
    claim:
      '"Self-sponsorship" is not a UK visa category. It describes obtaining a Skilled Worker visa through a company you own — which still requires a genuine vacancy, a licensed sponsor, and the same salary and RQF 6 thresholds.',
    provenance: 'primary',
    source: 'Absence from the gov.uk visa list; Skilled Worker rules',
    checked: '2026-07-17',
  },
  ukTenYearIlrConfirmed: {
    id: 'uk.10yearilr.response',
    claim:
      'The UK government response of 2 November 2026 says the starting point for settlement (ILR) will rise from 5 to 10 years, with faster and slower routes. It is policy, not yet in the Immigration Rules; technical guidance and a full impact assessment come first.',
    provenance: 'primary',
    source: 'GOV.UK, Earned settlement consultation outcome, updated 2 November 2026',
    sourceUrl: 'https://www.gov.uk/government/consultations/earned-settlement',
    checked: '2026-11-08',
    note: 'Timing is secondary: Lewis Silkin (3 Nov 2026) reports rule changes from December 2026 and implementation during 2027. Re-check when the rules are laid.',
  },

  // ── CANADA: AFTER A REFUSAL (re-check monthly) ─────────────────────────────
  caOfficerDecisionNotes: {
    id: 'ca.refusal.decision-notes',
    claim:
      'IRCC includes an officer decision note with the refusal letter for most temporary resident applications since 29 July 2025 and most permanent resident applications since 26 May 2026. eTAs, temporary resident permits and H&C applications are excluded, and IRCC may remove portions of a note.',
    provenance: 'primary',
    source: 'IRCC, Explaining application refusals: Officer decision note (page dated 2026-08-27)',
    sourceUrl:
      'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/officer-decision-notes.html',
    checked: '2026-11-08',
  },
  caPrivacyActAccess: {
    id: 'ca.refusal.privacy-act',
    claim:
      'Foreign nationals, wherever they are located, can request their own personal information from IRCC under the Privacy Act, with no fee. The Access to Information route is limited to Canadian citizens, permanent residents and individuals or corporations in Canada, and carries a fee.',
    provenance: 'primary',
    source: 'IRCC, How to make a request under the Privacy Act; IRCC, How to make a request under the Access to Information Act',
    sourceUrl:
      'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/access-information-privacy/request-privacy-act.html',
    checked: '2026-11-08',
  },
  caFederalCourtPeriods: {
    id: 'ca.refusal.jr-periods',
    claim:
      'An application for leave and judicial review must be filed within 15 days for a matter arising in Canada, or 60 days for a matter arising outside Canada, after the day the applicant is notified of or otherwise becomes aware of the matter. A judge may allow an extended time for special reasons.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s.72(2)(b) and (c)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-72.html',
    checked: '2026-11-08',
    needsLawyer: true,
    note:
      'Printed on the refusal pages on 8 Nov 2026 on the site owner’s instruction. Read at source, but the wording has not been reviewed by a lawyer. Every page leaves which period applies to a given decision to Canadian counsel.',
  },
  caMisrepresentationPeriod: {
    id: 'ca.refusal.misrep-period',
    claim:
      'A person inadmissible for misrepresentation remains so for five years following a final determination (if made outside Canada) or the date the removal order is enforced (if made in Canada), and a foreign national may not apply for permanent resident status during that period.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s.40(2)(a) and s.40(3)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html',
    checked: '2026-11-08',
    needsLawyer: true,
    note:
      'Printed on the refusal pages on 8 Nov 2026 on the site owner’s instruction. Read at source, but the wording has not been reviewed by a lawyer.',
  },

  // ── CANADA: PROVINCIAL NOMINEE PROGRAMS (re-check monthly) ─────────────────
  caPnpIntentToReside: {
    id: 'ca.pnp.intent-to-reside',
    claim:
      'Since 30 March 2026 provinces and territories alone assess a nominee’s intent to reside and ability to establish economically. IRCC refuses the application if the province revokes the nomination.',
    provenance: 'primary',
    source: 'IRCC operational instructions, Provincial Nominee Program base applications (page dated 2026-04-17)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/economic-classes/provincial-nominees/base-determining-membership-class.html',
    checked: '2026-11-08',
  },
  caAlbertaStreams: {
    id: 'ca.pnp.ab-streams',
    claim:
      'Alberta lists four worker streams (Alberta Opportunity, Tourism and Hospitality, Rural Renewal, Alberta Express Entry) and four entrepreneur streams (Rural Entrepreneur, Graduate Entrepreneur, Farm, Foreign Graduate Entrepreneur).',
    provenance: 'primary',
    source: 'Alberta Advantage Immigration Program page',
    sourceUrl: 'https://www.alberta.ca/alberta-advantage-immigration-program',
    checked: '2026-11-08',
  },
  caBritishColumbiaStreams: {
    id: 'ca.pnp.bc-streams',
    claim:
      'British Columbia lists the Skilled Worker and Health Authority streams for workers, both needing a full-time, indeterminate job offer, and the Base and Regional entrepreneur streams and Strategic Projects stream for business.',
    provenance: 'primary',
    source: 'WelcomeBC, For workers; WelcomeBC, BC Provincial Nominee Program navigation',
    sourceUrl: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers',
    checked: '2026-11-08',
  },
  caManitobaStreams: {
    id: 'ca.pnp.mb-streams',
    claim:
      'Manitoba lists three streams: Skilled Worker (Skilled Worker in Manitoba, Skilled Worker Overseas), International Education and Business Investor. In draws #282 (22 October 2026) and #283 (5 November 2026), Skilled Worker Overseas profiles were considered only where the candidate declared a direct invitation under a strategic recruitment initiative.',
    provenance: 'primary',
    source: 'Manitoba Immigration, Expression of Interest draws #282 and #283',
    sourceUrl: 'https://immigratemanitoba.com/draws/',
    checked: '2026-11-08',
  },
  caNovaScotiaStreams: {
    id: 'ca.pnp.ns-streams',
    claim:
      'Nova Scotia lists four streams: Skilled Worker, Nova Scotia Graduate, Entrepreneur and Nova Scotia: Express Entry. Skilled Worker needs a full-time permanent job offer; Express Entry needs Nova Scotia work experience or a physician opportunity.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Nova Scotia Nominee Program',
    sourceUrl: 'https://liveinnovascotia.com/nova-scotia-nominee-program',
    checked: '2026-11-08',
  },
  caNewfoundlandCategories: {
    id: 'ca.pnp.nl-categories',
    claim:
      'Newfoundland and Labrador lists five categories (Express Entry Skilled Worker, Skilled Worker, International Graduate, International Entrepreneur, International Graduate Entrepreneur). An expression of interest is the first step, and the model also covers the Atlantic Immigration Program.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, NLPNP overview and Expression of Interest model overview',
    sourceUrl: 'https://www.gov.nl.ca/immigration/expression-of-interest-model-overview/',
    checked: '2026-11-08',
  },
  caSaskatchewanPrograms: {
    id: 'ca.pnp.sk-programs',
    claim:
      'Saskatchewan lists International Skilled Worker (Employment Offer, Occupation In-Demand, Saskatchewan Express Entry) and Worker with Saskatchewan Work Experience. 2026 nominations are divided by sector, with accommodation and food services, trucking and retail trade capped.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Browse SINP Programs; SINP Immigration FAQs (updated 19 December 2025)',
    sourceUrl:
      'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs',
    checked: '2026-11-08',
  },

  // ── CANADA: PROGRAMME STATUS (re-check monthly) ──────────────────────────
  caParentsGrandparentsPaused: {
    id: 'ca.pgp.paused',
    claim:
      'The Parents and Grandparents Program is paused. IRCC is not accepting new interest to sponsor forms or inviting potential sponsors to apply until further notice, and continues to process existing applications.',
    provenance: 'primary',
    source: 'IRCC, Sponsor your parents and grandparents',
    sourceUrl:
      'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html',
    checked: '2026-11-08',
  },
  caCaregiverPilotsPaused: {
    id: 'ca.caregiver.paused',
    claim:
      'IRCC paused intake for the Home Care Worker Immigration Pilots on 19 December 2025, until further notice, and lists them as closed. Applications already received continue to be processed.',
    provenance: 'primary',
    source: 'IRCC notice of 19 December 2025; IRCC caregivers page',
    sourceUrl:
      'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/pausing-home-care-worker-immigration-pilots-application-intake.html',
    checked: '2026-11-08',
  },
  caStartUpVisaClosed: {
    id: 'ca.suv.closed',
    claim:
      'IRCC stopped accepting new Start-Up Visa applications on 31 December 2025, except from applicants holding a 2025 commitment who had not yet applied.',
    provenance: 'primary',
    source: 'IRCC notice on immigration measures for entrepreneurs',
    sourceUrl:
      'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/immigration-measures-entrepreneurs.html',
    checked: '2026-11-08',
  },
  caOntarioSingleStream: {
    id: 'ca.on.single-stream',
    claim: 'Ontario says its Workforce Priority stream has launched and all other Ontario Immigrant Nominee Program streams are closed.',
    provenance: 'primary',
    source: 'Ontario Immigrant Nominee Program page',
    sourceUrl: 'https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp',
    checked: '2026-11-08',
  },
  caSaskatchewanEntrepreneurClosed: {
    id: 'ca.sk.entrepreneur-closed',
    claim: 'Saskatchewan permanently closed its Entrepreneur and Farm immigration pathways, effective 27 March 2025.',
    provenance: 'primary',
    source: 'Saskatchewan Immigrant Nominee Program, Entrepreneur application page',
    sourceUrl:
      'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/entrepreneur/applicants-entrepreneurs',
    checked: '2026-11-08',
  },

  // ── EUROPE / SCHENGEN ────────────────────────────────────────────────────
  portugalTenYears: {
    id: 'pt.citizenship.10y',
    claim:
      'Portuguese citizenship by naturalisation now requires 10 years of residence for Pakistani nationals, not 5. Lei Orgânica 1/2026 came into force on 19 May 2026. The clock starts from the date the first residence permit is issued.',
    provenance: 'primary',
    source: 'Lei Orgânica 1/2026 (promulgated 3 May 2026, in force 19 May 2026)',
    checked: '2026-07-17',
    note:
      'Applies identically to D7 and the Golden Visa. Pakistanis are neither CPLP nor EU, so the 10-year term applies. Only applications filed with the IRN on or before 18 May 2026 are grandfathered. Almost every competitor still advertises the 5-year story — this correction is the single most valuable thing the Europe section can publish.',
  },
  maltaCbiIllegal: {
    id: 'mt.cbi.illegal',
    claim:
      'Malta’s citizenship-by-investment scheme was ruled unlawful by the Court of Justice of the EU on 29 April 2025, ending the last such scheme in the European Union.',
    provenance: 'primary',
    source: 'CJEU judgment, 29 April 2025 (Art. 20 TFEU)',
    checked: '2026-07-17',
    note:
      'Malta’s MPRP is a legally distinct RESIDENCE programme and was not the subject of the ruling — verify separately before saying anything about Malta at all.',
  },
  spainGoldenVisaAbolished: {
    id: 'es.goldenvisa.abolished',
    claim:
      'Spain’s Golden Visa is abolished. It stopped accepting new applications on 3 April 2025 under Organic Law 1/2025.',
    provenance: 'primary',
    source: 'Spain, Organic Law 1/2025',
    checked: '2026-07-17',
  },
  vanuatuLostSchengen: {
    id: 'vu.schengen.revoked',
    claim:
      'Vanuatu permanently lost Schengen visa-free access for all its passport holders on 12 December 2024.',
    provenance: 'primary',
    source: 'EU Council decision, 12 December 2024',
    checked: '2026-07-17',
    note:
      'The old site marketed Vanuatu passports. This is also the proof that the EU follows through — which makes it the most persuasive honest argument available about the Caribbean programmes below.',
  },
  caribbeanCbiClock: {
    id: 'cbi.eu.phaseout',
    claim:
      'The EU has demanded that Antigua, Dominica, Grenada, St Kitts and St Lucia phase out their citizenship-by-investment schemes by 1 June 2028, with interim measures due September 2026 and a review in December 2026.',
    provenance: 'primary',
    source:
      'Regulation (EU) 2025/2441 (in force 30 Dec 2025); Commissioner Brunner letters, 25 June 2026',
    checked: '2026-07-17',
    note:
      'A Pakistani buyer’s entire motive for these passports is Schengen mobility. Someone paying six figures in 2026 who loses Schengen in 2027–28 has a clean complaint that known material facts were withheld. If these pages exist at all, the timeline goes ON the page — not in a footnote.',
  },
  hungaryClosedToPakistan: {
    id: 'hu.guestworker.closed',
    claim:
      'Hungary has not accepted guest worker permits since 6 June 2026 (Decree 92/2026), and Pakistan was never on its eligible-country list — which covered only Armenia, Georgia and the Philippines.',
    provenance: 'secondary',
    source: 'Hungarian Decree 92/2026; withdrawn qualifying-country notice',
    checked: '2026-07-17',
    needsLawyer: true,
    note:
      'Heavily advertised in Pakistan despite never having been available. Saying so plainly is a pure trust play with real search volume and no competition, because nobody wants to say it.',
  },
  canadaTrvGlobalApproval: {
    id: 'ca.trv.global',
    claim:
      'Canada’s global visitor visa (TRV) approval rate was 49% as of 30 September 2025, down from 51% in 2024.',
    provenance: 'primary',
    source: 'IRCC published figures (global, all nationalities)',
    checked: '2026-07-17',
    note:
      'GLOBAL, not Pakistan-specific. IRCC does not publish per-country visitor approval rates on its site; every Pakistan-specific figure in circulation (35–50%) is unsourced and must not be repeated. The per-country data does exist in IRCC open data (open.canada.ca dataset 9b34e712-513f-44e9-babf-9df4f7256550) — computing it ourselves and showing the working would be the most linkable asset on the site.',
  },
};

/** Facts still awaiting a lawyer's sign-off. Nothing here may be stated on a page. */
export const factsAwaitingLawyer = (): Fact[] => Object.values(FACTS).filter((f) => f.needsLawyer);

/** Facts confirmed against the official source itself — safe to state. */
export const factsPrimary = (): Fact[] =>
  Object.values(FACTS).filter((f) => f.provenance === 'primary' && !f.needsLawyer);
