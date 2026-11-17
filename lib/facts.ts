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

  // ── CANADA: VISITORS AND FAMILY (re-check monthly) ─────────────────────────
  caDependentChildAge: {
    id: 'ca.family.dependent-child-age',
    claim:
      'A dependent child is less than 22 years of age and not a spouse or common-law partner, or is 22 or older and has depended substantially on a parent’s financial support since before 22 and cannot be financially self-supporting due to a physical or mental condition.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s.2',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-2.html',
    checked: '2026-11-08',
    needsLawyer: true,
    note: 'Printed on /family-sponsorship/dependent-children on 8 Nov 2026 under the site owner’s rule on figures set in law.',
  },
  caUndeclaredFamilyPolicyEnded: {
    id: 'ca.family.undeclared-policy',
    claim: 'The public policy allowing certain undeclared family members to be sponsored ended on 10 September 2026. IRCC continues to apply it to eligible applications received between 31 May 2019 and that date.',
    provenance: 'primary',
    source: 'IRCC, Public policy for undeclared family members',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children/who-you-can-sponsor/undeclared-family.html',
    checked: '2026-11-08',
  },
  caUsPermanentResidentsEta: {
    id: 'ca.visit.us-lpr',
    claim: 'Since 26 April 2022, lawful permanent residents of the United States are exempt from the eTA requirement and must show a valid passport and a valid green card or equivalent proof of status.',
    provenance: 'primary',
    source: 'IRCC, eTA eligibility (page dated 2026-08-06)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/eligibility.html',
    checked: '2026-11-08',
  },
  caQuebecPeqClosed: {
    id: 'ca.qc.peq-closed',
    claim: 'Quebec’s Programme de l’expérience québécoise took applications from 2 July 2026 and closed on 31 October 2026, with no decision on a new intake.',
    provenance: 'primary',
    source: 'Gouvernement du Québec, Programme de l’expérience québécoise',
    sourceUrl: 'https://www.quebec.ca/immigration/permanente/travailleurs-qualifies/programme-experience-quebecoise',
    checked: '2026-11-08',
  },

  // ── CANADA: WORK PERMITS (re-check monthly) ────────────────────────────────
  caC11Documents: {
    id: 'ca.work.c11-documents',
    claim:
      'A C11 applicant provides an Employer Portal offer of employment number, proof of paying the employer compliance fee, a work permit application, proof of degree of ownership, an indication of temporary stay, evidence of significant benefit, proof of support funds and proof of separate business funds.',
    provenance: 'primary',
    source: 'IRCC, C11 program delivery instructions (page dated 2025-05-27)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html',
    checked: '2026-11-08',
  },
  caC11Ownership: {
    id: 'ca.work.c11-ownership',
    claim:
      'IRCC considers a C11 only where the applicant controls at least 51% of the business. A smaller owner applies as an employee.',
    provenance: 'primary',
    source: 'IRCC, C11 program delivery instructions (page dated 2025-05-27)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html',
    checked: '2026-11-08',
  },
  caC11Funds: {
    id: 'ca.work.c11-funds',
    claim:
      'Support funds must be transferable, available and unencumbered, equal to the low-income cut-off for the family size for 18 months or the stay if shorter. Business funds are separate, officers have discretion over the amount, and provenance must be shown.',
    provenance: 'primary',
    source: 'IRCC, C11 program delivery instructions (page dated 2025-05-27)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html',
    checked: '2026-11-08',
  },
  caC11Duration: {
    id: 'ca.work.c11-duration',
    claim:
      'C11 work normally does not exceed 18 months. Longer needs a definite plan to transition out. Extensions need evidence of efforts made, benefit delivered and continued intent to leave.',
    provenance: 'primary',
    source: 'IRCC, C11 program delivery instructions (page dated 2025-05-27)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html',
    checked: '2026-11-08',
  },
  caC11Roles: {
    id: 'ca.work.c11-roles',
    claim:
      'A business that only employs the owner and family makes the owner self-employed. An entrepreneur hires others. Neither kind of work counts toward the Canadian Experience Class.',
    provenance: 'primary',
    source: 'IRCC, C11 program delivery instructions (page dated 2025-05-27)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html',
    checked: '2026-11-08',
  },
  caC11Benefit: {
    id: 'ca.work.c11-benefit',
    claim:
      'Neither the type of business nor the amount spent makes it significant; the test is opportunities for Canadians or permanent residents, or benefit to a local or regional economy, during the permit period.',
    provenance: 'primary',
    source: 'IRCC, C11 program delivery instructions (page dated 2025-05-27)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html',
    checked: '2026-11-08',
  },
  caPakistanVacs: {
    id: 'ca.pk.vacs',
    claim:
      'IRCC lists visa application centres in Islamabad, Karachi and Lahore. Biometrics appointments are free. Visa application centres play no role in decisions and are forbidden from giving visa advice.',
    provenance: 'primary',
    source: 'IRCC, Where to give biometrics; IRCC, Find a visa application centre',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/where-to-give.html',
    checked: '2026-11-08',
  },
  caPakistanPoliceCertificate: {
    id: 'ca.pk.police-certificate',
    claim:
      'In Punjab, police certificates are handled at Police Khidmat Markaz centres, with multiple offices in Lahore and Rawalpindi, and a person can apply at any centre in Punjab. Procedures differ by province. The Canadian High Commission in Islamabad cannot help.',
    provenance: 'primary',
    source: 'IRCC, How to get a police certificate: Pakistan (page dated 2025-09-04)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/pakistan.html',
    checked: '2026-11-08',
  },
  caPakistanMedicalExam: {
    id: 'ca.pk.medical-exam',
    claim:
      'Pakistan is on the list of countries where IRCC requires an immigration medical exam for longer stays. Only a panel physician can do it.',
    provenance: 'primary',
    source: 'IRCC, Medical exam requirements for temporary residents',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents.html',
    checked: '2026-11-08',
  },
  caC11StillPublished: {
    id: 'ca.work.c11-status',
    claim:
      'On 9 November 2026 IRCC still published its C11 instructions. Its notice on entrepreneurs closes the Start-Up Visa and its work permit and extends the Self-Employed Persons Program pause, and does not mention the C11.',
    provenance: 'primary',
    source: 'IRCC, C11 program delivery instructions; IRCC notice on immigration measures for entrepreneurs',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/immigration-measures-entrepreneurs.html',
    checked: '2026-11-09',
  },
  caBridgingOpenWorkPermit: {
    id: 'ca.work.bowp',
    claim:
      'A bridging open work permit needs the principal applicant in Canada with a valid permit, maintained status, or eligibility to restore status and get a work permit, and a PR application at the stage set for the class: completeness check (Express Entry, PNP through Express Entry, Quebec), eligibility assessment (PNP outside Express Entry) or approval in principle (caring classes, 2019 to 2024 home care pilots, Agri-Food Pilot). Applicants under the Home Care Worker Immigration pilots opened in 2025 are not eligible.',
    provenance: 'primary',
    source: 'IRCC, Bridging open work permit (page dated 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/pr-work-permits/bridging.html',
    checked: '2026-11-08',
  },
  caIctControllingOwners: {
    id: 'ca.work.ict-owners',
    claim:
      'Foreign nationals, and their immediate family, who own a controlling interest in the foreign enterprise and seek entry to start a new business are not eligible as intra-company transferees unless the enterprise is a multinational, meaning it has revenue-generating operations in at least one country other than its home country.',
    provenance: 'primary',
    source: 'IRCC operational instructions, Intra-company transferees',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/intra-company-transferees.html',
    checked: '2026-11-08',
  },
  caLowWageLmiaRefusal: {
    id: 'ca.work.low-wage-lmia',
    claim:
      'Service Canada may refuse to process an LMIA for positions above the cap on low-wage positions, and for low-wage positions in census metropolitan areas with high unemployment.',
    provenance: 'primary',
    source: 'ESDC, Refusal to process',
    sourceUrl: 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/refusal.html',
    checked: '2026-11-08',
  },

  // ── CANADA: STUDY (re-check monthly) ───────────────────────────────────────
  caStudyPermitInvalidity: {
    id: 'ca.study.permit-invalid',
    claim:
      'A study permit becomes invalid on the first of: 90 days after the holder completes their studies; the day the holder is no longer enrolled at the DLI named in the permit, other than by completing their studies; cancellation; and its expiry.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s.222(1)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-222.html',
    checked: '2026-11-08',
    needsLawyer: true,
    note: 'Printed on the study pages on 8 Nov 2026 under the site owner’s rule on figures set in law. Wording not reviewed by a lawyer.',
  },
  caRestorationOfStatus: {
    id: 'ca.study.restoration',
    claim:
      'On application within 90 days after losing temporary resident status, an officer shall restore status if, following an examination, the person meets the initial requirements for their stay, has not breached other conditions and is not subject to a s.22.1 declaration. Status cannot be restored for a student not complying with s.220.1(1).',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s.182',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-182.html',
    checked: '2026-11-08',
    needsLawyer: true,
    note: 'Printed on /study-in-canada/study-permit-extension on 8 Nov 2026 under the site owner’s rule on figures set in law. The audit asked for a lawyer to approve this wording.',
  },
  caOffCampusHours: {
    id: 'ca.study.off-campus-hours',
    claim:
      'Eligible students may work off campus up to 24 hours per week during a regular academic session. IRCC says there is no hour limit during scheduled breaks and none on campus.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s.186(v); IRCC, Work off campus and Work on campus',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-186.html',
    checked: '2026-11-08',
    needsLawyer: true,
    note: 'Printed on the study pages on 8 Nov 2026 under the site owner’s rule on figures set in law.',
  },
  caCoopPermitRemoved: {
    id: 'ca.study.coop-permit',
    claim: 'As of 1 April 2026, eligible post-secondary students no longer need a separate work permit for work placements their program requires.',
    provenance: 'primary',
    source: 'IRCC notice on simplifying the co-op work permit requirement',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/simplifying-co-op-work-permit-requirement-post-secondary-international-students.html',
    checked: '2026-11-08',
  },
  caPalExemptionsAndReuse: {
    id: 'ca.study.pal',
    claim:
      'No attestation letter is needed for degree-granting master’s or doctoral programs at a public DLI starting 1 January 2026, among other exemptions. A letter is valid until the end of its cap year unless it shows an earlier date, and cannot be reused after an application was approved or refused.',
    provenance: 'primary',
    source: 'IRCC, Provincial attestation letters',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html',
    checked: '2026-11-08',
  },
  caStudentSpouseWorkPermit: {
    id: 'ca.study.spouse-owp',
    claim:
      'Since 21 January 2025 a student’s spouse may qualify for an open work permit where the student is in a master’s program above a minimum length, a doctoral program, a listed eligible program or a listed professional degree at a university. Extensions need a valid study permit, full-time study in a PGWP-eligible program at a DLI, not being in the last term, and cannot outlast the study permit.',
    provenance: 'primary',
    source: 'IRCC, Help your spouse or common-law partner work in Canada',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/help-your-spouse-common-law-partner-work-canada.html',
    checked: '2026-11-08',
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
  // ── DENMARK (Start-up Denmark) ───────────────────────────────────────────
  dkStartupTwoStage: {
    id: 'dk.startup.two-stage',
    claim:
      'Start-up Denmark needs two approvals in order: an expert panel appointed by the Danish Business Authority must approve the business plan, and only then can the founder apply to SIRI for the residence and work permit.',
    provenance: 'primary',
    source: 'Start-up Denmark application guide; SIRI Start-up Denmark page',
    sourceUrl: 'https://startupdenmarkprogramme.dk/application-guide-startups',
    checked: '2026-11-17',
  },
  dkStartupEligibility: {
    id: 'dk.startup.eligibility',
    claim:
      'Applicants must be citizens of countries outside the EU, EEA and Switzerland, alone or in teams of up to three, each owning a significant share and actively running the business. Purely financial interests and holding companies are excluded.',
    provenance: 'primary',
    source: 'Start-up Denmark application guide; SIRI Start-up Denmark page',
    sourceUrl: 'https://startupdenmarkprogramme.dk/application-guide-startups',
    checked: '2026-11-17',
  },
  dkStartupExcluded: {
    id: 'dk.startup.excluded',
    claim:
      'Restaurants, retail shops and small trade, import or export businesses are generally rejected before evaluation, and the decree excludes them.',
    provenance: 'primary',
    source: 'Start-up Denmark application guide; BEK nr 969 af 15/06/2022 § 1(2)',
    sourceUrl: 'https://www.retsinformation.dk/eli/lta/2022/969',
    checked: '2026-11-17',
  },
  dkStartupMaterials: {
    id: 'dk.startup.materials',
    claim:
      'The application needs a pitch deck (PDF, at most 15 pages, English) covering market analysis, sales or go-to-market strategy, why Denmark and start-up-phase activities, plus a video pitch of at most 5 minutes in English, submitted through the online form on Virk.',
    provenance: 'primary',
    source: 'Start-up Denmark application guide',
    sourceUrl: 'https://startupdenmarkprogramme.dk/application-guide-startups',
    checked: '2026-11-17',
  },
  dkStartupScoring: {
    id: 'dk.startup.scoring',
    claim:
      'Three members of an independent expert panel each grade four criteria (innovation, market attractiveness, scalability, team competencies and resources) from 1 to 5; approval needs an average of at least 3.5. One appeal is allowed, or a substantially improved reapplication.',
    provenance: 'primary',
    source: 'Start-up Denmark application guide',
    sourceUrl: 'https://startupdenmarkprogramme.dk/application-guide-startups',
    checked: '2026-11-17',
    note:
      'The guide says "at least 3.5 in average score for all four criteria", which can be read as one overall average or 3.5 per criterion. Pages show both readings.',
  },
  dkStartupPanelTiming: {
    id: 'dk.startup.panel-timing',
    claim:
      'The panel usually takes up to 6 weeks. A notice in November 2026 says applications received after 13 November 2026 will be processed no earlier than January 2027 and may take up to 8 weeks.',
    provenance: 'primary',
    source: 'Start-up Denmark website notice',
    sourceUrl: 'https://startupdenmarkprogramme.dk/application-guide-startups',
    checked: '2026-11-17',
    note:
      'Temporary notice. Remove from the pages once the programme takes it down.',
  },
  dkStartupQuota: {
    id: 'dk.startup.quota',
    claim:
      'At most 75 residence permits a year can be granted under Start-up Denmark.',
    provenance: 'primary',
    source: 'BEK nr 969 af 15/06/2022 § 2(1); SIRI Start-up Denmark page',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark',
    checked: '2026-11-17',
  },
  dkStartupSiriFee: {
    id: 'dk.startup.siri-fee',
    claim:
      'SIRI lists a Start-up Denmark processing fee of DKK 3,060, with normal processing of 2 months and up to 4 if more information is needed.',
    provenance: 'primary',
    source: 'SIRI Start-up Denmark page (last updated 29-06-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark',
    checked: '2026-11-17',
    note:
      'Printed with a date on the owner’s approval of 17 Nov 2026. Re-check monthly (R18).',
  },
  dkStartupSelfSupport: {
    id: 'dk.startup.self-support',
    claim:
      'SIRI asks Start-up Denmark applicants to show disposable funds of DKK 153,240 alone, DKK 306,480 with a spouse or partner, DKK 356,904 with a spouse or partner and children, or DKK 203,664 with children only, all listed at the 2025 level. Cryptocurrency is not accepted.',
    provenance: 'primary',
    source: 'SIRI Self-support page',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Self-support---SIRI/',
    checked: '2026-11-17',
    note:
      'Still listed at the 2025 level on 17 Nov 2026. When SIRI moves to 2026 figures, update the guide, the SIRI post and this entry. Re-check monthly (R18).',
  },
  dkStartupFamily: {
    id: 'dk.startup.family',
    claim:
      'Accompanying family (spouse or partner, children under 18 living at home) pay DKK 3,080, with normal processing of 2 months and up to 3. Family applying after the founder is granted need DKK 153,240 (spouse), DKK 203,664 (spouse and children) or DKK 50,424 (children only), at the 2025 level.',
    provenance: 'primary',
    source: 'SIRI Accompanying family page (last updated 24-08-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Family/Accompanying-family-members/Accompanying-family---work',
    checked: '2026-11-17',
    note:
      'Re-check monthly (R18).',
  },
  dkStartupPermitRules: {
    id: 'dk.startup.permit-rules',
    claim:
      'The permit lasts up to 2 years, then extensions of up to 3 years at a time (never past 3 months before passport expiry). Holders may work only in their own business, may spend 90 days in 180 elsewhere in Schengen without working, and lose the permit after more than 6 consecutive months abroad.',
    provenance: 'primary',
    source: 'SIRI Start-up Denmark page',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark',
    checked: '2026-11-17',
  },
  dkStartupExtension: {
    id: 'dk.startup.extension',
    claim:
      'Extension needs the panel to approve a progress report (CVR number required; not in compulsory dissolution or bankruptcy; possible 45-minute recorded interview; one appeal), then a SIRI application no earlier than 3 months before expiry.',
    provenance: 'primary',
    source: 'Start-up Denmark application guide for extension',
    sourceUrl: 'https://startupdenmarkprogramme.dk/application-guide-extension',
    checked: '2026-11-17',
  },
  dkPakistanSubmission: {
    id: 'dk.pakistan.submission',
    claim:
      'From Pakistan, residence-permit applications are submitted in person at the Gerry’s/VFS visa centre (Islamabad, Lahore or Karachi). The fee is paid to the Danish authorities and the centre adds its own service charge. The embassy warns applicants not to use agents, who charge high prices for false documents.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, residence-permit and application-fee pages',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/',
    checked: '2026-11-17',
  },

  // ── APPLYING TO CANADA FROM PAKISTAN (GEO plan G05) ─────────────────────
  // Shown through lib/from-pakistan.tsx on the study permit, visit visa,
  // spouse sponsorship and work permit guides, and on the biometrics page.
  pkVisaApplicationCentres: {
    id: 'pk.vac',
    claim:
      'IRCC lists Canada visa application centres in Pakistan in Islamabad, Lahore and Karachi. They are private companies under contract with the Government of Canada, play no part in decisions and may not give visa advice. They send passports to IRCC and return them with the decision documents. In Pakistan they are run by VFS Global.',
    provenance: 'primary',
    source: 'IRCC, Find a visa application centre (modified 24 Aug 2026); VFS Global, About us (Canada, Pakistan)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/find-visa-application-centre.html',
    checked: '2026-11-17',
  },
  pkTranslations: {
    id: 'pk.translations',
    claim:
      'A document not in English or French needs an English or French translation, a translator’s affidavit and a certified copy of the original; stamps and seals count too. Applicants and their family members cannot translate their own documents, and outside Canada the affidavit is sworn before a notary public.',
    provenance: 'primary',
    source: 'IRCC Help Centre, translation question 018 (modified 3 Nov 2026); IRCC guide 5256 (31 Mar 2026); IRCC Express Entry, apply for permanent residence (16 Oct 2026)',
    sourceUrl: 'https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=018&top=4',
    checked: '2026-11-17',
  },
  pkPanelPhysicians: {
    id: 'pk.panelPhysicians',
    claim:
      'Only an IRCC panel physician can do an immigration medical exam. On 17 November 2026, IRCC’s panel physician search listed physicians in Pakistan in Islamabad, Karachi and Lahore.',
    provenance: 'primary',
    source: 'IRCC, Medical exams (19 Feb 2026); IRCC panel physician search, Pakistan (tool modified 22 Sep 2026)',
    sourceUrl: 'https://secure.cic.gc.ca/PanelPhysicianMedecinDesigne/en/Home',
    checked: '2026-11-17',
    note: 'Cities only, dated. The medical-exam page deliberately names no clinic.',
  },
  pkPoliceCertificate: {
    id: 'pk.policeCertificate',
    claim:
      'Pakistan’s certificate is the Police Character (or Clearance) Certificate. Each province’s police service issues it, people living abroad apply through a Pakistani embassy or consulate, and the Canadian High Commission cannot help.',
    provenance: 'primary',
    source: 'IRCC, Police certificates: Pakistan (4 Sep 2025)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/pakistan.html',
    checked: '2026-11-17',
  },
  pkVisaOffice: {
    id: 'pk.visaOffice',
    claim:
      'IRCC lists Islamabad as the visa office for Pakistan, to name when a checklist or form asks for it, and asks applicants not to contact the office unless it contacts them first.',
    provenance: 'primary',
    source: 'IRCC, International visa offices (17 Jul 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/international-visa-offices.html',
    checked: '2026-11-17',
  },
  pkRepresentatives: {
    id: 'pk.representatives',
    claim:
      'You do not need a representative. Only lawyers and paralegals of a Canadian law society, Quebec notaries and CICC-licensed consultants may charge, and IRCC may return or refuse an application that used an unauthorised paid representative.',
    provenance: 'primary',
    source: 'IRCC, Learn about representatives (18 Aug 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html',
    checked: '2026-11-17',
  },

  // ── BLOG POSTS OF 18 NOVEMBER 2026 ──────────────────────────────────────
  caCrsLabourMarketIntegration: {
    id: 'ca.crs.lmi-factor',
    claim:
      'On 3 November 2026 new Ministerial Instructions replaced the Canadian work experience factor with a Labour Market Integration factor in the core CRS factors. It gives the greater of the points for Canadian work experience and the points for a qualifying job offer in a high-wage occupation, never both.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current (signed 15 October 2026, in force 3 November 2026), ss. 8(1)(a)(iv) and 15(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
  },
  caCrsLabourMarketIntegrationMax: {
    id: 'ca.crs.lmi-max',
    claim:
      'The Labour Market Integration factor is capped at 150 points without an accompanying spouse or partner, and 140 with one.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15(2)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
  },
  caCrsMaximumTotal: {
    id: 'ca.crs.max-total',
    claim:
      'The highest possible CRS score rose from 1,200 under the previous instructions to 1,270.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 8(2) (core maximum 570 / 530); archived version in force 25 March 2025 to 2 November 2026, s. 8(2) (1,200; core maximum 500 / 460)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/25-march-2025-2-november-2026.html',
    checked: '2026-11-18',
  },
  caCrsRestOfGridUnchanged: {
    id: 'ca.crs.rest-unchanged',
    claim:
      'Everything else in the grid, from age to provincial nomination, reads exactly as before: age, education, language, spouse, skill transferability and additional points are unchanged.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, ss. 10–14 and 17–32, compared word for word with the archived version in force 25 March 2025 to 2 November 2026',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
    note: 'Only differences outside s. 15: cross-references in ss. 20 and 22 now point to s. 15.1, and the old qualifying arranged-employment provisions (s. 29(2)–(3)) and transitional ss. 33–34 were repealed on 3 November 2026.',
  },
  caCrsHighWageExperiencePoints: {
    id: 'ca.crs.high-wage-experience',
    claim:
      'Canadian work experience earns the same length-of-work points as before (up to 80 for five years without a spouse), plus 20, 40 or 70 for a year in a high-wage occupation at the 1.3, 1.5 or 2 times level. Months at different levels can be combined.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15.1(1), (7) and (8); IRCC, CRS criteria (modified 2026-11-03)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
  },
  caCrsJobOfferPoints: {
    id: 'ca.crs.job-offer-points',
    claim:
      'A qualifying job offer in a high-wage occupation earns 100 points at the 2 times level, 70 at the 1.5 times level and 50 at the 1.3 times level. An offer in an occupation not on the list earns no CRS points.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15.2(1); IRCC, CRS criteria (modified 2026-11-03), high-wage job offer table',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
  },
  caCrsCanadianWorkDefinition: {
    id: 'ca.crs.canadian-work-definition',
    claim:
      'Canadian work experience means work done in Canada in the last 10 years, while you held temporary resident status.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15.1(2) and (6)(d)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
    note: 'The section also requires TEER 0–3 work for wages or commission (or publicly funded medical services in NOC 31100–31102) and excludes self-employment, unauthorised work and work during full-time study.',
  },
  caCrsTransferabilityUnchanged: {
    id: 'ca.crs.transferability-unchanged',
    claim:
      'IRCC says the skill transferability rules are not changing; foreign work still earns points there, paired with language results, and transferability never counts job offers.',
    provenance: 'primary',
    source: 'IRCC, 2026 changes to points for Canadian work experience and job offers (modified 2026-10-16); Ministerial Instructions – current, ss. 21–25',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/changes.html',
    checked: '2026-11-18',
  },
  caCrsJobOfferNoLmia: {
    id: 'ca.crs.job-offer-no-lmia',
    claim:
      'Since 3 November 2026 a job offer qualifies without an LMIA, and having one adds no points or priority. The offer can be for a new position, with a new employer.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Job offer (modified 2026-11-03); IRCC, 2026 changes to points for Canadian work experience and job offers',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html',
    checked: '2026-11-18',
  },
  caCrsQualifyingOffer: {
    id: 'ca.crs.qualifying-offer',
    claim:
      'To earn points, an offer must be for full-time work, at least 30 hours a week, lasting at least a year from the day the permanent resident visa is issued.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15.2(2) and (3)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
    note: 'Not printed: single employer (up to two in a skilled trade), no embassy, high commission or consulate, paid by wages or commission.',
  },
  caCrsOfferEligibilitySeparate: {
    id: 'ca.crs.offer-eligibility-separate',
    claim:
      'An offer outside the list earns no CRS points but can still help you qualify for the Federal Skilled Worker or Federal Skilled Trades Program, which IRCC assesses separately.',
    provenance: 'primary',
    source: 'IRCC, 2026 changes to points for Canadian work experience and job offers (modified 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/changes.html',
    checked: '2026-11-18',
  },
  caCrsProfileLmiaFields: {
    id: 'ca.crs.profile-lmia-fields',
    claim:
      'As of 18 November 2026, IRCC’s online profile may still ask for LMIA details, so follow its instructions when you add an offer.',
    provenance: 'primary',
    source: 'IRCC, CRS criteria (modified 2026-11-03); IRCC, Express Entry: Job offer (modified 2026-11-03)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html',
    checked: '2026-11-18',
    note: 'The placeholder LMIA values IRCC tells candidates to enter are deliberately not reproduced; the post links IRCC\'s instructions.',
  },
  caCrsHighWageList: {
    id: 'ca.crs.high-wage-list',
    claim:
      'IRCC publishes the list on its high-wage occupations page, in three tables by level, with each occupation’s five-digit NOC code. The list in force since 3 November 2026 can change; if it changes after you are invited, IRCC keeps the level that applied on the day of your invitation. The level belongs to the occupation’s NOC code, not to your salary.',
    provenance: 'primary',
    source: 'IRCC, High-wage occupations and how we assess them (modified 2026-10-16); Ministerial Instructions – current, s. 1 (definitions) and s. 15.2(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html',
    checked: '2026-11-18',
    note: 'All 186 NOC codes and levels on the page matched lib/crs-high-wage.ts exactly on 18 Nov 2026 (31 at 2x, 89 at 1.5x, 66 at 1.3x). The count is not printed.',
  },
  caCrsHighWageExamples: {
    id: 'ca.crs.high-wage-examples',
    claim:
      'Financial auditors and accountants (NOC 11100) are listed at the lowest level; accounting technicians and bookkeepers (NOC 12200) are not listed; software engineers and designers (NOC 21231) are at the middle level.',
    provenance: 'primary',
    source: 'IRCC, High-wage occupations and how we assess them (list in effect 3 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html',
    checked: '2026-11-18',
  },
  caCrsExampleGridCells: {
    id: 'ca.crs.example-grid-cells',
    claim:
      'Grid values used in the made-up profiles: age 20–29 without spouse 110, age 33 with spouse 80; three-year credential 120 without spouse, 112 with; CLB 9 per ability 31 without spouse, CLB 8 per ability 22 with spouse; spouse bachelor’s 8; transferability 25 (one-year-plus credential + CLB 9), 50 (3+ years foreign work + CLB 9), 13 (one-year-plus credential + CLB 7–8), 25 (3+ years foreign work + CLB 7–8).',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, ss. 10(1), 11(1), 13(1), 17(1), 21(1), 23',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
    note: 'Totals 429, 499 and 326 (and 376 for C with a level-1 offer) were reproduced with scoreCrs() from lib/crs-grid.ts.',
  },
  caCrsNoGuarantee: {
    id: 'ca.crs.no-guarantee',
    claim:
      'Extra points do not guarantee an invitation. Each round still has its own requirements and cut-off.',
    provenance: 'primary',
    source: 'IRCC, Changes to Express Entry for high-wage occupations (backgrounder, 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/changes-to-express-entry-for-high-wage-occupations.html',
    checked: '2026-11-18',
  },
  caEeRoundsPausedNov2026: {
    id: 'ca.ee.rounds-paused-nov-2026',
    claim:
      'IRCC paused rounds while its system recalculated existing profiles. On 18 November 2026, its rounds page still listed 28 October 2026 as the latest round.',
    provenance: 'primary',
    source: 'IRCC, CRS criteria (modified 2026-11-03); IRCC, Express Entry: Rounds of invitations (latest round #453, 28 October 2026, read 18 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html',
    checked: '2026-11-18',
    note: 'Re-check: the post says there is no cut-off on the new points yet. Update it when the first round after 3 November 2026 is published.',
  },
  caCrsOfferGenuineness: {
    id: 'ca.crs.offer-genuineness',
    claim:
      'An IRCC officer must be satisfied that an offer is genuine before it counts, for eligibility or for points: whether the employer is actively in business, needs the role and can meet the offer’s terms; whether you are qualified and likely to take the job; and the employer’s record with employment and recruitment laws. A revoked offer stops counting.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15.2(4) and (5); IRCC, 2026 changes to points for Canadian work experience and job offers',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
  },
  caFraudNoJobGuarantee: {
    id: 'ca.fraud.no-job-guarantee',
    claim:
      'IRCC’s scam guidance says “No one can guarantee you a job or a visa to Canada,” and warns about salaries that seem too high to be real.',
    provenance: 'primary',
    source: 'IRCC, Online and telephone immigration scams (modified 2026-09-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html',
    checked: '2026-11-18',
  },
  caFraudFalseJobOffers: {
    id: 'ca.fraud.false-job-offers',
    claim:
      'IRCC counts false job offers as fraud, and lists refusal and a possible ban from Canada among the consequences.',
    provenance: 'primary',
    source: 'IRCC, Consequences of immigration and citizenship fraud (modified 2026-09-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html',
    checked: '2026-11-18',
    note: 'The page\'s \'at least 5 years\' ban is not printed: the matching IRPA s.40 entry in lib/facts.ts (ca.refusal.misrep-period) is needsLawyer.',
  },
  caLangApprovedTests: {
    id: 'ca.lang.approvedTests',
    claim:
      'IRCC accepts five tests for Express Entry: IELTS General Training, PTE Core and CELPIP-General in English, and TEF Canada and TCF Canada in French.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Language test results (page dated 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html',
    checked: '2026-11-18',
    note: 'IRCC: “You must take the CELPIP-General test”, “the IELTS General Training option”, “the PTE Core option”.',
  },
  caLangNoOneSkillRetake: {
    id: 'ca.lang.noOneSkillRetake',
    claim:
      'IRCC does not accept IELTS One Skill Retake for Express Entry.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Language test results (page dated 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html',
    checked: '2026-11-18',
  },
  caLangTefOldScore: {
    id: 'ca.lang.tefOldScore',
    claim:
      'For TEF Canada, IRCC says to enter the scores from the “Équivalence ancien score” column.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Language test results (page dated 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html',
    checked: '2026-11-18',
  },
  caLangExpiredRefusal: {
    id: 'ca.lang.expiredRefusal',
    claim:
      'IRCC says it will refuse an application made with expired results. If results will expire before you can apply, it suggests testing again, applying before they expire, or declining the invitation and returning to the pool.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Language test results (page dated 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html',
    checked: '2026-11-18',
  },
  caLangIeltsBandByAbility: {
    id: 'ca.lang.ieltsBandByAbility',
    claim:
      'Each skill has its own row in IRCC’s table, so the same IELTS band can give different levels in different skills.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Language test results, Federal Skilled Worker / IELTS conversion table (page dated 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html',
    checked: '2026-11-18',
    note: 'Checked in the table: IELTS 6.5 is CLB 8 in speaking, reading and writing but CLB 7 in listening. The numbers are not printed in the post.',
  },
  caLangDesignatedTests: {
    id: 'ca.lang.designatedTests',
    claim:
      'Under section 74 of the Regulations, only approved tests from designated organisations are accepted, and under section 74(7) their results are conclusive evidence of language ability.',
    provenance: 'primary',
    source: 'Justice Laws, Immigration and Refugee Protection Regulations, s. 74(3), (4) and (7) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-74.html',
    checked: '2026-11-18',
  },
  caLangFswValidity: {
    id: 'ca.lang.fswValidity',
    claim:
      'For Federal Skilled Workers, section 75 of the Regulations requires language results under two years old on the day the permanent residence application is made, meeting the threshold in each of the four skill areas.',
    provenance: 'primary',
    source: 'Justice Laws, Immigration and Refugee Protection Regulations, s. 75(2)(d) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html',
    checked: '2026-11-18',
  },
  caLangProfileValidity: {
    id: 'ca.lang.profileValidity',
    claim:
      'Language results must be less than two years old when you submit your Express Entry profile.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system, s. 3(3)(a) (signed 15 October 2026, in force 3 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
  },
  caLangExpiryInPool: {
    id: 'ca.lang.expiryInPool',
    claim:
      'If results turn two years old while you are in the pool, you are treated as no longer meeting the requirements tied to them, and your language points stop.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system, ss. 3(4) and 12(3) (in force 3 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
  },
  caLangPointsPerSkill: {
    id: 'ca.lang.pointsPerSkill',
    claim:
      'Section 13 of the Ministerial Instructions gives CRS points for each language skill by its CLB or NCLC level; levels are not averaged.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system, s. 13(1) (in force 3 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
  },
  caFrenchCrsPoints: {
    id: 'ca.lang.frenchCrsPoints',
    claim:
      'NCLC 7 or higher in all four French skills earns 25 extra CRS points. A further 25 follow if English is also at CLB 5 or higher in all four.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system, s. 32(1) (in force 3 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-18',
  },
  caFrenchCategory: {
    id: 'ca.lang.frenchCategory',
    claim:
      'French-language proficiency is one of IRCC’s current categories for targeted rounds, and it asks for the same French level in all four abilities.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Category-based selection (page dated 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-18',
    note: 'IRCC’s page says NCLC 7 in all four abilities. The post does not restate the number; it says “the same French level” as the s. 32 points.',
  },
  pkIeltsBritishCouncil: {
    id: 'pk.lang.ieltsBritishCouncil',
    claim:
      'The British Council runs IELTS on computer at test centres in Pakistan, in cities including Lahore, Islamabad, Karachi, Peshawar, Multan, Quetta, Swat and Sukkur. It offers paper only to candidates approved for special arrangements on medical grounds, and offers One Skill Retake with IELTS on computer.',
    provenance: 'primary',
    source: 'British Council Pakistan, IELTS test dates, fees and locations in Pakistan',
    sourceUrl: 'https://www.britishcouncil.pk/exam/ielts/dates-locations',
    checked: '2026-11-18',
  },
  pkIeltsIdp: {
    id: 'pk.lang.ieltsIdp',
    claim:
      'IDP offers IELTS General Training on computer at test centres in Islamabad, Rawalpindi, Gujrat, Lahore, Faisalabad and Karachi, and lists One Skill Retake.',
    provenance: 'primary',
    source: 'IDP IELTS Pakistan, Find IELTS exam dates, fees and venues',
    sourceUrl: 'https://ielts.idp.com/pakistan/test-dates',
    checked: '2026-11-18',
  },
  ieltsSpeakingFormat: {
    id: 'lang.ielts.speakingFormat',
    claim:
      'IELTS Speaking is a live conversation with an examiner, in person or by video call at the centre. It may fall on a different day.',
    provenance: 'primary',
    source: 'British Council Pakistan, Take your IELTS General Training test',
    sourceUrl: 'https://www.britishcouncil.pk/exam/ielts/which-test/general-training',
    checked: '2026-11-18',
  },
  ieltsAcademicAdvice: {
    id: 'lang.ielts.academicAdvice',
    claim:
      'Some booking pages suggest IELTS Academic for anyone planning to work abroad.',
    provenance: 'primary',
    source: 'British Council Pakistan, What’s the difference between IELTS Academic and General Training?',
    sourceUrl: 'https://www.britishcouncil.pk/exam/ielts/which-test',
    checked: '2026-11-18',
    note: 'The page says to take Academic to “study abroad or work in an English speaking country”. The post does not name the page.',
  },
  ieltsMarkedByPeople: {
    id: 'lang.ielts.markedByPeople',
    claim:
      'IDP says IELTS is marked by people.',
    provenance: 'primary',
    source: 'IDP IELTS Pakistan, home page (“Marked by real people”)',
    sourceUrl: 'https://ielts.idp.com/pakistan',
    checked: '2026-11-18',
  },
  pkPteCoreCentres: {
    id: 'pk.lang.pteCoreCentres',
    claim:
      'Pearson’s centre search found PTE Core centres in Lahore, Islamabad, Karachi and Peshawar.',
    provenance: 'primary',
    source: 'Pearson VUE, PTE Core appointment search (searched near Lahore, Karachi, Islamabad, Quetta and Gujrat)',
    sourceUrl: 'https://mypte.pearsonpte.com/test/search?examCode=PTE-E',
    checked: '2026-11-18',
    note: 'The search lists centres with available appointments. Quetta and Gujrat searches returned only the same four Pakistani centres.',
  },
  pteCoreVsAcademic: {
    id: 'lang.pte.coreVsAcademic',
    claim:
      'Pearson says PTE Academic is accepted for university study, and PTE Core for Canadian permanent residence. PTE Core is taken on computer at a test centre.',
    provenance: 'primary',
    source: 'Pearson, PTE Core general FAQs',
    sourceUrl: 'https://www.pearsonpte.com/help-center/general-faqs/pte-core.html',
    checked: '2026-11-18',
  },
  pteCoreScoring: {
    id: 'lang.pte.scoring',
    claim:
      'Pearson says PTE Core is scored by its AI-powered scoring engine.',
    provenance: 'primary',
    source: 'Pearson, PTE Core',
    sourceUrl: 'https://www.pearsonpte.com/pte-core',
    checked: '2026-11-18',
  },
  pkCelpipCentres: {
    id: 'pk.lang.celpipCentres',
    claim:
      'CELPIP’s date finder listed CELPIP-General sessions in Lahore, Islamabad, Rawalpindi, Karachi and Peshawar.',
    provenance: 'primary',
    source: 'Paragon Testing, Find a CELPIP test date (filtered to Pakistan, all result pages read)',
    sourceUrl: 'https://www.celpip.ca/take-celpip/find-a-test-date/',
    checked: '2026-11-18',
  },
  celpipFormat: {
    id: 'lang.celpip.format',
    claim:
      'CELPIP-General is computer-delivered in one sitting, with Speaking answered to on-screen prompts. CELPIP-General LS tests only listening and speaking, for citizenship. CELPIP says its levels are calibrated against CLB.',
    provenance: 'primary',
    source: 'Paragon Testing, CELPIP test overview',
    sourceUrl: 'https://www.celpip.ca/take-celpip/overview/',
    checked: '2026-11-18',
  },
  pkTefCanadaCentres: {
    id: 'pk.lang.tefCanadaCentres',
    claim:
      'CCI Paris Île-de-France’s finder listed TEF Canada at the Alliance Française in Lahore and Karachi.',
    provenance: 'primary',
    source: 'CCI Paris Île-de-France, TEF and DFP centre finder (searched near Karachi and Islamabad)',
    sourceUrl: 'https://francais.cci-paris-idf.fr/candidat',
    checked: '2026-11-18',
    note: 'No Islamabad centre appeared.',
  },
  tefCanadaParts: {
    id: 'lang.tef.parts',
    claim:
      'TEF Canada has four compulsory parts: reading, listening, writing and speaking.',
    provenance: 'primary',
    source: 'CCI Paris Île-de-France, TEF Canada',
    sourceUrl: 'https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/',
    checked: '2026-11-18',
  },
  pkTefKarachiComputer: {
    id: 'pk.lang.tefKarachiComputer',
    claim:
      'The Alliance Française in Karachi runs TEF Canada on computer.',
    provenance: 'primary',
    source: 'Alliance Française de Karachi, TEF and TEFAQ exams',
    sourceUrl: 'https://www.afkarachi.com/tef-tefaq-exams',
    checked: '2026-11-18',
  },
  pkTcfLahore: {
    id: 'pk.lang.tcfLahore',
    claim:
      'The Alliance Française in Lahore lists TCF Canada, with listening, reading, writing and speaking all mandatory.',
    provenance: 'primary',
    source: 'Alliance Française de Lahore, TCF',
    sourceUrl: 'https://aflahore.org/french-exams/tcf/',
    checked: '2026-11-18',
  },
  pkTcfKarachi: {
    id: 'pk.lang.tcfKarachi',
    claim:
      'The Alliance Française in Karachi lists TCF Canada and runs the TCF on computer.',
    provenance: 'primary',
    source: 'Alliance Française de Karachi, TCF exam',
    sourceUrl: 'https://www.afkarachi.com/tcf-exam',
    checked: '2026-11-18',
  },
  caRepPenaltiesInForce: {
    id: 'ca.reps.penalties.inForce',
    claim:
      'Canada added Part 19.2 to the Immigration and Refugee Protection Regulations. The regulation, SOR/2026-220, came into force when it was registered on 23 October 2026. IRCC announced the penalties on 28 October, and the Canada Gazette published them on 4 November.',
    provenance: 'primary',
    source: 'Canada Gazette, Part II, Vol. 160, No. 22 (4 November 2026), SOR/2026-220, registered 23 October 2026, s. 2 (in force on registration); IRCC news release of 28 October 2026',
    sourceUrl: 'https://gazette.gc.ca/rp-pr/p2/2026/2026-11-04/html/sor-dors220-eng.html',
    checked: '2026-11-18',
    note: 'IRCC\'s release (28 Oct) says the penalties are \'now in force\' and \'starting today\'; the regulation itself says in force on registration, 23 Oct. The post uses the regulation\'s date.',
  },
  caRepPenaltiesFutureConductOnly: {
    id: 'ca.reps.penalties.prospective',
    claim:
      'IRCC says the new rules cover only conduct after they came into force.',
    provenance: 'primary',
    source: 'IRCC, What happens if you break the rules when giving advice or representation (page details 2026-10-28)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/partners-service-providers/break-rules-advice-representation.html',
    checked: '2026-11-18',
  },
  caRepPenaltyBaselines: {
    id: 'ca.reps.penalties.baseline',
    claim:
      'Baseline penalties: C$5,000 for being paid to represent or advise without being authorised (s. 315.47); C$15,000 for each of the three misrepresentation violations (s. 315.48(a)–(c)); C$10,000 for not handing over documents an officer asks for during an inspection (ss. 315.49(3), 315.55).',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, ss. 315.54(2) and 315.55(1), as added by SOR/2026-220 (Justice Laws, consolidation 2026-11-16)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-315.54.html',
    checked: '2026-11-18',
  },
  caRepPenaltyFormula: {
    id: 'ca.reps.penalties.formula',
    claim:
      'If a misrepresentation caused an error, such as a wrong approval, C$15,000 is added. Any money the person received for the violation is added too. The total is then halved for a first violation, kept as it is after one earlier notice, and multiplied by 1.5 after more.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 315.54(1), (3), (4) and (5); \'wrong approval\' example from the Regulatory Impact Analysis Statement to SOR/2026-220; multiplier wording as IRCC summarises it on its break-the-rules page',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-315.54.html',
    checked: '2026-11-18',
    note: 'Exact rule for the 1x multiplier: prior violations all listed in one notice, or two notices issued the same date (s. 315.54(5)(b)).',
  },
  caRepPenaltyCap: {
    id: 'ca.reps.penalties.cap',
    claim:
      'All the violations in one notice are capped at C$1.5 million.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 315.56, as added by SOR/2026-220',
    sourceUrl: 'https://gazette.gc.ca/rp-pr/p2/2026/2026-11-04/html/sor-dors220-eng.html',
    checked: '2026-11-18',
  },
  caRepPenaltiesWho: {
    id: 'ca.reps.penalties.who',
    claim:
      'The penalties fall on people who represent or advise for payment, or offer to. That includes licensed consultants and lawyers who misrepresent, as well as unauthorised agents. The regulation expressly covers violations committed outside Canada.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, ss. 315.46–315.48, as added by SOR/2026-220; IRCC news release of 28 October 2026 (\'The new rules apply to paid representatives\')',
    sourceUrl: 'https://gazette.gc.ca/rp-pr/p2/2026/2026-11-04/html/sor-dors220-eng.html',
    checked: '2026-11-18',
    note: 'No provision fines the applicant. The applicant\'s exposure is under IRPA s. 40 and IRCC\'s return/refuse practice (separate facts).',
  },
  caRepPenaltiesAbroad: {
    id: 'ca.reps.penalties.abroad',
    claim:
      'IRCC\'s page on choosing a representative says the rules apply wherever the person is located. Someone who breaks them from outside Canada will still be fined and named.',
    provenance: 'primary',
    source: 'IRCC, How to choose an immigration or citizenship representative (page details 2026-11-17)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html',
    checked: '2026-11-18',
  },
  caUnauthorisedRepReturnRefuse: {
    id: 'ca.reps.unauthorised.returnRefuse',
    claim:
      'IRCC says it may return or refuse your application if you use an unauthorised paid representative, in Canada or abroad.',
    provenance: 'primary',
    source: 'IRCC, Learn about representatives (page details 2026-08-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html',
    checked: '2026-11-18',
  },
  caApplicantResponsible: {
    id: 'ca.reps.applicantResponsible',
    claim:
      'IRCC holds you responsible for everything in your application, even if a representative filled it in.',
    provenance: 'primary',
    source: 'IRCC, Consequences of immigration and citizenship fraud (page details 2026-09-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html',
    checked: '2026-11-18',
  },
  caMisrepFiveYears: {
    id: 'ca.irpa.s40.fiveYears',
    claim:
      'A finding of misrepresentation makes you inadmissible to Canada for five years, under section 40 of the Act. During that time you cannot apply for permanent residence.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 40(1)(a), (2)(a) and (3) (Justice Laws, page modified 2026-11-16)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html',
    checked: '2026-11-18',
  },
  caWhoMayCharge: {
    id: 'ca.irpa.s91.whoMayCharge',
    claim:
      'Section 91 lists who may be paid to represent or advise you: lawyers and paralegals in good standing with a Canadian provincial or territorial law society; notaries in good standing with the Chambre des notaires du Québec; consultants in good standing with the College of Immigration and Citizenship Consultants. The Act also allows law students supervised by a lawyer, and organisations working under an agreement with the Government of Canada.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 91(1)–(4) (Justice Laws, page modified 2026-11-16); \'territorial\' from IRCC, Learn about representatives',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-91.html',
    checked: '2026-11-18',
  },
  caPakistanLawyerNotAuthorised: {
    id: 'ca.reps.pakistanLawyer',
    claim:
      'A lawyer licensed only in Pakistan is not on the list: the law society has to be Canadian.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 91(2) (\'a law society of a province\'); IRCC, Learn about representatives (\'a Canadian provincial or territorial law society\')',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-91.html',
    checked: '2026-11-18',
  },
  caAlreadyACrime: {
    id: 'ca.irpa.s91.offence',
    claim:
      'Charging for immigration help without authorisation was already a crime under the Act. What is new is that IRCC officers can now impose fines themselves, without a court case.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 91(1) and (9); Regulatory Impact Analysis Statement to SOR/2026-220 (penalties imposed by officers, \'without involving expensive and time-consuming court proceedings\')',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-91.html',
    checked: '2026-11-18',
    note: 's. 91(9) fines (up to C$200,000 / 2 years on indictment; C$40,000 / 6 months summary) were read but not printed.',
  },
  caNoRepNeeded: {
    id: 'ca.reps.notNeeded',
    claim:
      'Family and friends may help you for free. IRCC says you do not need a representative at all, and that using one does not draw special attention to your application.',
    provenance: 'primary',
    source: 'IRCC, Learn about representatives (page details 2026-08-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html',
    checked: '2026-11-18',
  },
  caCheckRegisters: {
    id: 'ca.reps.registers',
    claim:
      'Consultants: CICC public register. Lawyers: their Canadian law society\'s member directory, all linked from IRCC\'s page. Paralegals: Law Society of Ontario, the only one IRCC lists. Quebec notaries: the Chambre des notaires\' notary finder, in French, linked from IRCC.',
    provenance: 'primary',
    source: 'IRCC, Find out if your representative is authorized (page details 2026-06-04)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html',
    checked: '2026-11-18',
  },
  caCiccEntitledToPractise: {
    id: 'ca.cicc.entitledToPractise',
    claim:
      'For a consultant, check that \'Entitled to Practise\' says Yes on the CICC\'s register. The College says anyone marked No cannot legally give immigration advice or services.',
    provenance: 'primary',
    source: 'College of Immigration and Citizenship Consultants, Find an Immigration Consultant (no page date shown)',
    sourceUrl: 'https://www.college-ic.ca/protecting-the-public/find-an-immigration-consultant',
    checked: '2026-11-18',
    note: 'The register itself (register.college-ic.ca) was not searched; the claim is from the College\'s explanation page.',
  },
  caImm5476Required: {
    id: 'ca.reps.imm5476',
    claim:
      'Make sure the same person signs your Use of a Representative form (IMM 5476). IRCC says a representative who tells you to leave their details out is wrong. IRCC says you can cancel a representative at any time, by sending a new IMM 5476 through its web form.',
    provenance: 'primary',
    source: 'IRCC, Add, change or cancel a representative (page details 2025-03-31)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/change-cancel.html',
    checked: '2026-11-18',
  },
  caWrittenContract: {
    id: 'ca.reps.contract',
    claim:
      'Get a written contract that lists the services and the fee, and read it before you sign, as IRCC advises.',
    provenance: 'primary',
    source: 'IRCC, How to choose an immigration or citizenship representative (page details 2026-11-17)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html',
    checked: '2026-11-18',
  },
  caFraudWarningSigns: {
    id: 'ca.fraud.warningSigns',
    claim:
      'IRCC: \'No one can guarantee you a job or a visa to Canada.\' It lists representatives who tell you to lie on your application, who advertise free services and later ask for a fee, and who claim to speed up biometrics for money. IRCC fees are paid to the Receiver General for Canada; IRCC never asks you to pay into a personal bank account or through a private transfer service.',
    provenance: 'primary',
    source: 'IRCC, Online and telephone immigration scams (page details 2026-09-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html',
    checked: '2026-11-18',
  },
  caJobOfferForSale: {
    id: 'ca.fraud.jobOfferForSale',
    claim:
      'IRCC warns about anyone who promises a work permit or job offer if you pay them.',
    provenance: 'primary',
    source: 'IRCC, Understand the consequences of unauthorized work (page details 2026-07-23)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/admissibility-enforcement/consequences-unauthorized-work.html',
    checked: '2026-11-18',
  },
  caReportUnauthorisedRep: {
    id: 'ca.fraud.reportRep',
    claim:
      'Report them through IRCC\'s reporting page and to the CBSA Border Watch Line; the same steps apply outside Canada. Consultants: IRCC points you to the CICC; lawyers or paralegals: their law society. For fake documents, people outside Canada should also tell the Canadian Anti-Fraud Centre and their local police. IRCC says its aim is to stop the people committing fraud, not to punish those who were misled.',
    provenance: 'primary',
    source: 'IRCC, How to report scams, fraud or abuse (page details 2026-05-11)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/report-fraud.html',
    checked: '2026-11-18',
  },
  caPenalisedNamesPublished: {
    id: 'ca.reps.publication',
    claim:
      'The regulation requires IRCC to publish each penalised person\'s name, business name and address, the violation, the penalty, and whether it was paid. Nothing is published until the 30-day window to request a review has passed.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, ss. 315.6 and 315.58(1), as added by SOR/2026-220',
    sourceUrl: 'https://gazette.gc.ca/rp-pr/p2/2026/2026-11-04/html/sor-dors220-eng.html',
    checked: '2026-11-18',
  },
  caPenaltyRegistry2027: {
    id: 'ca.reps.registry2027',
    claim:
      'IRCC expects the online registry to launch in 2027, after the first penalties are issued.',
    provenance: 'primary',
    source: 'IRCC news release, New penalties for fraudulent and unauthorized immigration and citizenship representatives (28 October 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/new-penalties-for-fraudulent-and-unauthorized-immigration-and-citizenship-representatives.html',
    checked: '2026-11-18',
    note: 'Re-check in 2027 for the registry\'s launch and URL.',
  },
  ukStudentFundsLondonFrom30Nov2026: {
    id: 'uk.student.funds.london.2026-11-30',
    claim:
      'From 30 November 2026, a UK Student visa applicant must show £1,570 a month to study in London.',
    provenance: 'primary',
    source: 'Home Office, Statement of changes to the Immigration Rules HC 584 (3 September 2026), paragraph APP ST8 amending Appendix Student ST 12.3(a)',
    sourceUrl: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026-accessible',
    checked: '2026-11-18',
    note: 'APP ST8: in ST 12.3(a), for “£1529” substitute “£1570”. Takes effect 30 November 2026.',
  },
  ukStudentFundsOutsideLondonFrom30Nov2026: {
    id: 'uk.student.funds.outside-london.2026-11-30',
    claim:
      'From 30 November 2026, a UK Student visa applicant must show £1,203 a month to study outside London.',
    provenance: 'primary',
    source: 'Home Office, Statement of changes to the Immigration Rules HC 584 (3 September 2026), paragraph APP ST9 amending Appendix Student ST 12.3(b)',
    sourceUrl: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026-accessible',
    checked: '2026-11-18',
    note: 'APP ST9: in ST 12.3(b), for “£1171” substitute “£1203”.',
  },
  ukStudentFundsBefore30Nov2026: {
    id: 'uk.student.funds.before-2026-11-30',
    claim:
      'Applications made before 30 November use the old amounts of £1,529 (London) and £1,171 (outside London).',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Student ST 12.3(a) and (b), as in force on 18 November 2026 (page last changed 8 October 2026, HC 584)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student',
    checked: '2026-11-18',
  },
  ukStudentFundsCommencement: {
    id: 'uk.student.funds.transitional',
    claim:
      'HC 584 says applications made before 30 November 2026 are decided under the rules in force on 29 November.',
    provenance: 'primary',
    source: 'Home Office, HC 584, Implementation section (APP ST8 to APP ST10 take effect on 30 November 2026)',
    sourceUrl: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026-accessible',
    checked: '2026-11-18',
  },
  ukHc584LaidDate: {
    id: 'uk.rules.hc584.laid',
    claim:
      'The Home Office laid Statement of Changes HC 584 before Parliament on 3 September 2026.',
    provenance: 'primary',
    source: 'Home Office, Explanatory memorandum to HC 584 (presented to Parliament on 3 September 2026)',
    sourceUrl: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/explanatory-memorandum-to-the-statement-of-changes-in-immigration-rules-hc-584-3-september-2026-accessible',
    checked: '2026-11-18',
  },
  ukStudentFundsReason: {
    id: 'uk.student.funds.reason',
    claim:
      'The explanatory memorandum says the amounts now match the maintenance loans for home students in 2026/27.',
    provenance: 'primary',
    source: 'Home Office, Explanatory memorandum to HC 584, paragraph 5.43',
    sourceUrl: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/explanatory-memorandum-to-the-statement-of-changes-in-immigration-rules-hc-584-3-september-2026-accessible',
    checked: '2026-11-18',
  },
  ukStudentDepositOffset: {
    id: 'uk.student.funds.deposit-offset',
    claim:
      'The most you can deduct for a university accommodation deposit already paid rises from £1,529 to £1,570.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Student ST 12.4; HC 584 paragraph APP ST10; explanatory memorandum paragraph 5.45',
    sourceUrl: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026-accessible',
    checked: '2026-11-18',
    note: 'ST 12.4 covers a deposit paid to the student sponsor for accommodation arranged by the sponsor.',
  },
  ukStudentFundsNineMonths: {
    id: 'uk.student.funds.max-months',
    claim:
      'The amount covers each month of the course, up to nine, on top of any course fees still unpaid. A course that includes part of a month is rounded up to the next full month.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Student ST 12.3',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student',
    checked: '2026-11-18',
  },
  ukStudentFundsNineMonthTotals: {
    id: 'uk.student.funds.nine-month-totals',
    claim:
      'For nine months: London £13,761 before 30 November and £14,130 from it; outside London £10,539 and £10,827. The difference is at most £369 over nine months.',
    provenance: 'primary',
    source: 'Our arithmetic from Appendix Student ST 12.3 and HC 584 APP ST8 and APP ST9 (monthly amount × 9)',
    sourceUrl: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026-accessible',
    checked: '2026-11-18',
    note: 'Derived, labelled in the post as our own arithmetic: 1,529×9; 1,570×9; 1,171×9; 1,203×9; 14,130−13,761 = 369.',
  },
  ukStudyingInLondon: {
    id: 'uk.student.studying-in-london',
    claim:
      'You count as studying in London when your CAS places your study, or most of it, in Greater London.',
    provenance: 'primary',
    source: 'Immigration Rules, Introduction, definitions of “Studying in London” and “Studying outside London”',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-introduction',
    checked: '2026-11-18',
  },
  ukMoneyPageNotYetUpdated: {
    id: 'uk.student.funds.guidance-timing',
    claim:
      'On 18 November 2026, GOV.UK’s Money you need page still showed the old amounts. The memorandum explains that guidance is updated only when a rules change takes effect.',
    provenance: 'primary',
    source: 'GOV.UK, Student visa: Money you need (read 18 November 2026); Explanatory memorandum to HC 584, paragraphs 8.1 and 8.2',
    sourceUrl: 'https://www.gov.uk/student-visa/money',
    checked: '2026-11-18',
    note: 'Re-check after 30 November 2026 that the page shows £1,570 and £1,203.',
  },
  ukDateOfApplicationEntryClearance: {
    id: 'uk.rules.date-of-application.entry-clearance',
    claim:
      'For a visa applied for from Pakistan, the Immigration Rules’ definition makes the date of application the day you pay the visa fee.',
    provenance: 'primary',
    source: 'Immigration Rules, Introduction, definition of “Date of application” (entry clearance: the date of payment of the relevant fee)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-introduction',
    checked: '2026-11-18',
  },
  ukFunds28Days: {
    id: 'uk.finance.28-day-rule',
    claim:
      'Rule ST 12.6 asks you to have held “the required level of funds” for 28 days, counted back from the closing balance on your most recent statement.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Student ST 12.6; Appendix Finance FIN 7.2 and FIN 7.3',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance',
    checked: '2026-11-18',
  },
  ukFunds31Days: {
    id: 'uk.finance.31-day-rule',
    claim:
      'That statement must be dated within 31 days before the day you apply.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Finance FIN 7.1',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance',
    checked: '2026-11-18',
  },
  ukFundsCurrencyConversion: {
    id: 'uk.finance.currency-conversion',
    claim:
      'Money in rupees is converted into pounds at the OANDA spot rate for the date you apply.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Finance FIN 1.1',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance',
    checked: '2026-11-18',
    note: 'The advice to keep a margin is our own suggestion.',
  },
  ukDifferentialEvidencePakistan: {
    id: 'uk.student.differential-evidence.pakistan',
    claim:
      'Rule ST 22.1 lets nationals of certain countries apply without sending financial evidence, although UKVI may still ask for it. Pakistan is not on that list, as of 18 November 2026.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Student ST 22.1; GOV.UK Student visa: Money you need (same list)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student',
    checked: '2026-11-18',
  },
  ukStudentFundsEvidenceTypes: {
    id: 'uk.finance.student-evidence-types',
    claim:
      'Evidence can be bank statements, a student loan letter, or a letter from an official financial sponsor such as a government or university.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Finance FIN 8.3 and FIN 9; GOV.UK Financial evidence for Student and Child Student visa applicants',
    sourceUrl: 'https://www.gov.uk/guidance/financial-evidence-for-student-and-child-student-route-applicants',
    checked: '2026-11-18',
  },
  ukStudentTwelveMonthExemption: {
    id: 'uk.student.funds.12-month-exemption',
    claim:
      'The exemption for anyone with 12 months on a UK visa applies only inside the UK, not from Pakistan.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Student ST 12.1 (permission to stay, living in the UK with permission for 12 months or more)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student',
    checked: '2026-11-18',
  },
  ukStudentDependantsEligibility: {
    id: 'uk.student.dependants.eligibility',
    claim:
      'Family may come only with government-sponsored students on courses over six months, or full-time postgraduates on a PhD, another doctorate or a research-based higher degree. A taught master’s does not qualify.',
    provenance: 'primary',
    source: 'GOV.UK, Student visa: Your partner and children; Immigration Rules, Appendix Student ST 31.1',
    sourceUrl: 'https://www.gov.uk/student-visa/family-members',
    checked: '2026-11-18',
    note: 'For postgraduate courses starting on or after 1 January 2024.',
  },
  ukStudentDependantFunds: {
    id: 'uk.student.dependants.funds',
    claim:
      'Rules ST 33.2 and ST 37.2 add £845 a month in London, or £680 elsewhere, per partner or child, for up to nine months, unchanged by HC 584, and held for 28 days.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Student ST 33.2, ST 33.4, ST 37.2 and ST 37.4; HC 584 contains no change to these amounts',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student',
    checked: '2026-11-18',
  },
  ukFundsAccountHolder: {
    id: 'uk.finance.account-holder',
    claim:
      'Use your own account, a parent’s or legal guardian’s, or a partner’s if they are applying too or already have permission. A parent’s account needs proof of the relationship and the parent’s written consent.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Finance FIN 5.1 and FIN 5.3',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance',
    checked: '2026-11-18',
  },
  ukFundsExcluded: {
    id: 'uk.finance.excluded-funds',
    claim:
      'Overdrafts, cryptocurrency, stocks and shares, pensions and promises of future support are all excluded.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Finance FIN 3.1, FIN 6.1, FIN 8.2; GOV.UK Financial evidence for Student and Child Student visa applicants (cryptocurrency)',
    sourceUrl: 'https://www.gov.uk/guidance/financial-evidence-for-student-and-child-student-route-applicants',
    checked: '2026-11-18',
  },
  ukFundsAccessAndBank: {
    id: 'uk.finance.access-and-institution',
    claim:
      'The account must give immediate access. Money in a bank that is not regulated, or that UKVI cannot verify, is not counted.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Finance FIN 8.1 and FIN 2.1',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance',
    checked: '2026-11-18',
  },
  ukFundsStatementContents: {
    id: 'uk.finance.statement-contents',
    claim:
      'A statement must show your name, the bank’s name and how much money is in the account.',
    provenance: 'primary',
    source: 'GOV.UK, Financial evidence for Student and Child Student visa applicants (last updated 31 December 2025)',
    sourceUrl: 'https://www.gov.uk/guidance/financial-evidence-for-student-and-child-student-route-applicants',
    checked: '2026-11-18',
  },
  ukFundsSpentBeforeDecision: {
    id: 'uk.student.funds.spent-before-decision',
    claim:
      'If the balance is far lower by the decision date, the officer must be satisfied it went on fees, a deposit or study costs.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Student ST 12.7 (“fall substantially below”)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student',
    checked: '2026-11-18',
  },
  ukGraduateLengthFrom2027: {
    id: 'uk.graduate.length.2027',
    claim:
      'The Immigration Rules give 2 years only to applications made before 1 January 2027; applications made later get 18 months.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Graduate GR 8.1 (as in force on 18 November 2026)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate',
    checked: '2026-11-18',
    note: 'GOV.UK’s Graduate visa page says: 2 years if you apply on or before 31 December 2026; 18 months if you apply on or after 1 January 2027.',
  },
  ukGraduatePhdThreeYears: {
    id: 'uk.graduate.length.doctoral',
    claim:
      'PhD and other doctoral graduates keep 3 years.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Graduate GR 8.1; Explanatory memorandum to HC 1333, paragraph 5.26',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate',
    checked: '2026-11-18',
  },
  ukGraduateHc1333: {
    id: 'uk.rules.hc1333.graduate',
    claim:
      'Statement of Changes HC 1333, laid on 14 October 2025, rewrote rule GR 8.1 of Appendix Graduate from 11 November 2025.',
    provenance: 'primary',
    source: 'Home Office, Statement of changes to the Immigration Rules HC 1333 (ordered to be printed 14 October 2025), paragraph APP GR3; Implementation lists APP GR1 to APP GR5 as taking effect on 11 November 2025',
    sourceUrl: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025-accessible-version',
    checked: '2026-11-18',
  },
  ukGraduateReason: {
    id: 'uk.graduate.length.reason',
    claim:
      'The explanatory memorandum says too many graduates were not moving into graduate-level jobs, which the route was meant to lead to.',
    provenance: 'primary',
    source: 'Home Office, Explanatory memorandum to HC 1333, paragraph 5.26',
    sourceUrl: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025/explanatory-memorandum-to-the-statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025-accessible',
    checked: '2026-11-18',
  },
  ukGraduateNoLaterChange: {
    id: 'uk.graduate.length.no-later-change',
    claim:
      'No later Statement of Changes, up to 18 November 2026, alters the rule.',
    provenance: 'primary',
    source: 'Appendix Graduate change history (HC 259, 3 August 2026, is the latest; it concerns UK-born children) and the explanatory memoranda to HC 1491, HC 1691, HC 259 and HC 584',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate',
    checked: '2026-11-18',
    note: 'The gov.uk Statement of Changes collection listed HC 584 (3 September 2026) as the newest on 18 November 2026.',
  },
  ukDateOfApplicationInUk: {
    id: 'uk.rules.date-of-application.permission-to-stay',
    claim:
      'Under the Immigration Rules’ definition, an application made in the UK dates from the day you submit the online form and pay.',
    provenance: 'primary',
    source: 'Immigration Rules, Introduction, definition of “Date of application” (permission to stay, online, no fee waiver); Part 1 paragraph 34G(3)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-introduction',
    checked: '2026-11-18',
  },
  ukGraduateValidityIhc: {
    id: 'uk.graduate.validity.fee-ihc',
    claim:
      'The application is valid only once the fee and the Immigration Health Charge are paid.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Graduate GR 1.2(a)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate',
    checked: '2026-11-18',
    note: 'No amounts printed.',
  },
  ukGraduateCompletionReported: {
    id: 'uk.graduate.completion-reported',
    claim:
      'You can apply only once your university has told the Home Office you have successfully completed the course. You do not have to wait for graduation or your certificate.',
    provenance: 'primary',
    source: 'GOV.UK, Graduate visa (overview, “When to apply”); Immigration Rules, Appendix Graduate GR 4.3',
    sourceUrl: 'https://www.gov.uk/graduate-visa',
    checked: '2026-11-18',
  },
  ukGraduateStartsOnDecision: {
    id: 'uk.graduate.period-from-decision',
    claim:
      'The visa runs from the day the application is approved.',
    provenance: 'primary',
    source: 'GOV.UK, Graduate visa (overview); Immigration Rules, Appendix Graduate GR 8.1 (“Period granted from date of decision”)',
    sourceUrl: 'https://www.gov.uk/graduate-visa',
    checked: '2026-11-18',
  },
  ukStudentVisaTailAfterCourse: {
    id: 'uk.student.period-after-course',
    claim:
      'A Student visa runs 4 months past the end of a course of 12 months or more.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Student ST 25.3 (table)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student',
    checked: '2026-11-18',
  },
  ukGraduateApplyBeforeExpiryInUk: {
    id: 'uk.graduate.apply-in-uk-before-expiry',
    claim:
      'You must apply while you are in the UK and your Student visa is still valid.',
    provenance: 'primary',
    source: 'GOV.UK, Graduate visa (overview: “You must be in the UK when you apply”; “You must apply before your Student visa … expires”); Appendix Graduate GR 1.2(d)',
    sourceUrl: 'https://www.gov.uk/graduate-visa',
    checked: '2026-11-18',
  },
  ukGraduateTravelWithdraws: {
    id: 'uk.graduate.travel-withdraws',
    claim:
      'Leaving the UK, Ireland, the Channel Islands or the Isle of Man before a decision withdraws the application.',
    provenance: 'primary',
    source: 'GOV.UK, Graduate visa: Apply',
    sourceUrl: 'https://www.gov.uk/graduate-visa/apply',
    checked: '2026-11-18',
  },
  ukGraduateScholarshipConsent: {
    id: 'uk.graduate.scholarship-consent',
    claim:
      'If a government or international scholarship paid both your fees and living costs in the last 12 months, you need its written consent.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Graduate GR 1.5',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate',
    checked: '2026-11-18',
  },
  ukGraduateDependants: {
    id: 'uk.graduate.dependants',
    claim:
      'Your partner and children can stay only if they hold dependant visas on your Student visa. A child born in the UK during your stay can also apply. Their visas end on the same date as yours.',
    provenance: 'primary',
    source: 'GOV.UK, Graduate visa: Your partner and children; Immigration Rules, Appendix Graduate GR 9.4A and GR 16',
    sourceUrl: 'https://www.gov.uk/graduate-visa/your-partner-and-children',
    checked: '2026-11-18',
  },
  ukGraduateUnsponsored: {
    id: 'uk.graduate.unsponsored',
    claim:
      'The route is unsponsored, so you need no job offer or employer to apply.',
    provenance: 'primary',
    source: 'Immigration Rules, Appendix Graduate (“The Graduate route is an unsponsored route”)',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate',
    checked: '2026-11-18',
  },
  ukGraduateEligibility: {
    id: 'uk.graduate.eligibility',
    claim:
      'You must have completed an eligible course at a university with a track record of compliance, with at least 12 months of study in the UK, or the whole course if it was shorter.',
    provenance: 'primary',
    source: 'GOV.UK, Graduate visa: The course you studied; Immigration Rules, Appendix Graduate GR 4.1 and GR 6.1',
    sourceUrl: 'https://www.gov.uk/graduate-visa/course-you-studied',
    checked: '2026-11-18',
  },
  ukGraduateConditions: {
    id: 'uk.graduate.conditions',
    claim:
      'You can work in most jobs, look for work, be self-employed, do unpaid voluntary work, and travel abroad and return. You cannot claim most benefits (public funds) or work as a professional sportsperson, and you can study only a course that would not qualify for a Student visa.',
    provenance: 'primary',
    source: 'GOV.UK, Graduate visa (overview, “What you can and cannot do”); Immigration Rules, Appendix Graduate GR 8.2',
    sourceUrl: 'https://www.gov.uk/graduate-visa',
    checked: '2026-11-18',
  },
  ukGraduateNoExtensionNoSettlement: {
    id: 'uk.graduate.no-extension-no-settlement',
    claim:
      'You cannot extend a Graduate visa, and rule GR 1.4 bars anyone who has held one before. Appendix Graduate states that the route is not a route to settlement. To stay longer, you would need to switch to another visa, such as Skilled Worker.',
    provenance: 'primary',
    source: 'GOV.UK, Graduate visa (overview, “If you want to stay longer in the UK”); Immigration Rules, Appendix Graduate introduction and GR 1.4',
    sourceUrl: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate',
    checked: '2026-11-18',
  },
  usVisaBondRule: {
    id: 'us.bond.rule',
    claim:
      'A State Department final rule, in force from 3 August 2026, made the visa bond for B-1/B-2 visitors permanent in 22 CFR 41.11(c). The regulation sets the bond at $10,000, $15,000 or $20,000, as the consular officer decides, and a new country must be named at least 15 days before its bond starts.',
    provenance: 'primary',
    source: 'Federal Register, Visas: Visa Bond Program, final rule, 91 FR 48757 (3 August 2026), FR Doc. 2026-15726; regulatory text of 22 CFR 41.11(c)',
    sourceUrl: 'https://www.federalregister.gov/documents/2026/08/03/2026-15726/visas-visa-bond-program',
    checked: '2026-11-18',
    note: 'federalregister.gov web pages showed a CAPTCHA, so the text was read from the GovInfo HTML of the same document (https://www.govinfo.gov/content/pkg/FR-2026-08-03/html/2026-15726.htm) and metadata from the Federal Register API. Amounts are set in the regulation.',
  },
  usVisaBondPakistan: {
    id: 'us.bond.pakistan',
    claim:
      'The State Department\'s fact sheet of 18 March 2026 listed every country covered by the visa bond from 2 April 2026. Bangladesh, Bhutan and Nepal were on it; Pakistan was not. The final rule kept those countries in. The US Embassy in Bangladesh\'s visa page carries a bond notice for Bangladeshis; the US Embassy in Pakistan\'s page, updated on 16 November 2026, carries none.',
    provenance: 'primary',
    source: 'US Department of State, State Department Expands Visa Bonds to Combat Illegal Overstay Rates (fact sheet, 18 March 2026); US Embassy Dhaka, Visas (modified 16 Nov 2026); US Embassy Islamabad, Visas (modified 16 Nov 2026); final rule 2026-15726',
    sourceUrl: 'https://www.state.gov/releases/office-of-the-spokesperson/2026/03/state-department-expands-visa-bonds-to-combat-illegal-overstay-rates',
    checked: '2026-11-18',
    note: 'The live list (travel.state.gov, Countries Subject to Visa Bonds) showed a Cloudflare \'Verify you are human\' check and was NOT read. A search-engine snippet says it was last updated 2 October 2026. Pakistani news of 4-5 August 2026 says Pakistan is not covered. The post therefore says \'not shown\' rather than \'not covered\', and tells readers to check the live list.',
  },
  usTravelBanP10998: {
    id: 'us.travelban.p10998',
    claim:
      'Proclamation 10998 has been in force since 1 January 2026. It suspends or limits entry for nationals of 39 countries, and Pakistan is not one of them. No later proclamation in the Federal Register changes the list, up to 18 November 2026. A dual national travelling on the passport of an unlisted country is exempt.',
    provenance: 'primary',
    source: 'Proclamation 10998 of 16 December 2025, 90 FR 59717 (19 December 2025), sections 2-6 and 10; Federal Register API search of all presidential documents published 1 December 2025 to 18 November 2026; US Embassy Islamabad visas page (39 countries)',
    sourceUrl: 'https://www.federalregister.gov/documents/2025/12/19/2025-23570/restricting-and-limiting-the-entry-of-foreign-nationals-to-protect-the-security-of-the-united-states',
    checked: '2026-11-18',
    note: 'Full text read from GovInfo HTML; the word Pakistan does not appear. Afghanistan is in section 2 (full suspension). Dual-national exception is section 6(b)(ii). Consistent with us.no.travelban in lib/facts.ts.',
  },
  usH1bP11069: {
    id: 'us.h1b.p11069',
    claim:
      'Proclamation 11069 of 18 September 2026 restricts new H-1B workers entering from abroad unless their employer has made an extra payment with the petition.',
    provenance: 'primary',
    source: 'Proclamation 11069 of 18 September 2026, 91 FR 60497 (23 September 2026), sections 1 and 3',
    sourceUrl: 'https://www.federalregister.gov/documents/2026/09/23/2026-19554/restriction-on-entry-of-certain-nonimmigrant-workers',
    checked: '2026-11-18',
    note: 'Effective 21 September 2026 and extends Proclamation 10973 for 12 months. The payment amount is set in the proclamation, not an Act or regulation, so it is not printed.',
  },
  usVettingCategories: {
    id: 'us.vetting.categories',
    claim:
      'The US Embassy in Pakistan\'s visa page, updated on 16 November 2026, tells applicants for A-3, C-3 (domestic workers), G-5, H-1B, H-3, H-4, F, I, J, M, K-1, K-2, K-3, Q, R-1, R-2, S, T, TN, TD and U visas to set all social media accounts to public or open. B-1/B-2 visitor visas are not on that list. Since July 2026, the list has gained I, TN and TD visas.',
    provenance: 'primary',
    source: 'US Embassy Islamabad, Visas (dateModified 2026-11-16); earlier version of the same page archived 2 July 2026 (web.archive.org) without I, TN and TD',
    sourceUrl: 'https://pk.usembassy.gov/visas/',
    checked: '2026-11-18',
    note: 'The State Department\'s own announcement of the I/TN/TD expansion (reportedly effective 1 October 2026) is on travel.state.gov and was NOT read; the post gives no date for it.',
  },
  usVettingHistory: {
    id: 'us.vetting.history',
    claim:
      'Online presence review began with F, M and J students and exchange visitors in June 2025. From 30 March 2026 it was widened to more categories, including fiancé(e)s and religious workers. The State Department says it uses all available information when it screens visa applicants.',
    provenance: 'secondary',
    source: 'US Department of State media note, Announcement of Expanded Screening and Vetting for Visa Applicants (18 June 2025, state.gov, read live); travel.state.gov announcement of the same name (last updated 25 March 2026, \'Effective March 30\'), read via a Wayback Machine copy of 12 July 2026',
    sourceUrl: 'https://travel.state.gov/content/travel/en/News/visas-news/announcement-of-expanded-screening-and-vetting-for-visa-applicants.html',
    checked: '2026-11-18',
    note: 'Marked secondary only because the 30 March 2026 date comes from an archived copy of the official page; travel.state.gov itself was blocked by a human-verification check. The June 2025 part is primary (state.gov).',
  },
  usIvPauseRecord: {
    id: 'us.iv.pause.record',
    claim:
      'From 21 January 2026, the State Department paused immigrant visa issuance for nationals of 75 countries, Pakistan among them. Under that notice, applicants could still apply and attend interviews, but no immigrant visas would be issued to them. In July 2026, the US Embassy in Pakistan\'s visa page carried a notice of the pause that named Pakistan. By 18 November 2026 that notice had gone, and the page now links to the State Department\'s notice on immigrant visa processing instead.',
    provenance: 'primary',
    source: 'State Department notice of 15 January 2026 as reposted by the US Embassy in Albania (75 countries counted, Pakistan included); US Embassy Islamabad visas page archived 2 July 2026 (pause notice naming Pakistan) and live page (dateModified 2026-11-16, no pause notice)',
    sourceUrl: 'https://pk.usembassy.gov/visas/',
    checked: '2026-11-18',
    note: 'Does not restate the court order or the 21 August 2026 end date: the State Department notice that says so (travel.state.gov) could not be opened. Nothing read contradicts us.iv.pause. The embassy\'s immigrant-visas page \'processing immigrant visas across all categories\' notice was also present in June 2026, during the pause, so it is not evidence either way and is not used for that.',
  },
  usIvBacklog: {
    id: 'us.iv.backlog',
    claim:
      'The US Embassy in Islamabad\'s immigrant visa page warns of significant backlogs and lengthy interview waits.',
    provenance: 'primary',
    source: 'US Embassy Islamabad, Immigrant Visas (dateModified 2026-08-26)',
    sourceUrl: 'https://pk.usembassy.gov/immigrant-visas/',
    checked: '2026-11-18',
  },
  usVisaIntegrityFee: {
    id: 'us.vif',
    claim:
      'Section 100007 of Public Law 119-21, signed on 4 July 2025, requires a visa integrity fee from anyone issued a nonimmigrant visa, and adjusts the amount for inflation each year. In July 2025, DHS said the fee needed coordination between agencies and would be implemented in a future publication. On 18 November 2026, neither the US Embassy in Pakistan\'s visa pages nor the official appointment service\'s fee page for Pakistan mentioned it.',
    provenance: 'primary',
    source: 'Public Law 119-21, section 100007 (8 USC 1806); Federal Register, USCIS Immigration Fees Required by HR-1 Reconciliation Bill, 90 FR 34511 (22 July 2025); pk.usembassy.gov visas, nonimmigrant-visas, immigrant-visas and important-visa-information pages; ustraveldocs.com/pk/en/step-3',
    sourceUrl: 'https://www.govinfo.gov/app/details/PLAW-119publ21',
    checked: '2026-11-18',
    note: 'No amount printed: the law sets an initial FY2025 amount and indexes it yearly, and no official page read shows it being collected. travel.state.gov fee pages could not be read.',
  },
  usNivInterviewPakistan: {
    id: 'us.niv.pakistan',
    claim:
      'Since 11 August 2025, nonimmigrant applicants in Pakistan generally need an in-person interview, with limited exceptions. The US mission\'s nonimmigrant visa page advises against non-refundable or non-changeable tickets before your visa is issued.',
    provenance: 'primary',
    source: 'US Embassy Islamabad, Nonimmigrant Visas (dateModified 2026-08-26)',
    sourceUrl: 'https://pk.usembassy.gov/nonimmigrant-visas/',
    checked: '2026-11-18',
  },
  usDs160Certify: {
    id: 'us.ds160.certify',
    claim:
      'Signing the DS-160 certifies that everything in it is true. Misrepresenting facts could make you ineligible to enter the United States.',
    provenance: 'primary',
    source: 'USTravelDocs Pakistan (official visa appointment service named by the US Embassy), Complete your application, DS-160 information',
    sourceUrl: 'https://www.ustraveldocs.com/pk/en/step-2',
    checked: '2026-11-18',
    note: 'Read in the browser; the site is a JavaScript app that returns HTTP 404 to scripts but renders normally.',
  },
  schengenPk2025Totals: {
    id: 'eu.schengen.pakistan-2025-totals',
    claim:
      'In 2025, Schengen consulates in Pakistan received 89,270 applications for uniform short-stay visas, issued 45,970 uniform visas (18,771 multiple-entry) and 1,251 visas with limited territorial validity, and did not issue 40,026: a not-issued rate of 45.9% of decisions.',
    provenance: 'primary',
    source: 'European Commission (DG HOME), 2025-consulates-schengen-visa-statistics.xlsx, sheet \'Data for consulates\' (rows with \'Country where consulate is located\' = PAKISTAN), cross-checked against sheet \'Totals - third country\', row PAKISTAN',
    sourceUrl: 'https://home-affairs.ec.europa.eu/document/download/56816949-e59f-442b-9091-5d03360bf860_en',
    checked: '2026-11-18',
    note: 'Official statistic. Sum of 19 consulate rows equals the file\'s own PAKISTAN line exactly. Rate = not issued / (uniform issued + LTVs issued + not issued), the file\'s own formula; 40,026 / 87,247 = 0.4588. Airport transit visas excluded.',
  },
  schengenPk2024Totals: {
    id: 'eu.schengen.pakistan-2024-totals',
    claim:
      'In 2024, Schengen consulates in Pakistan received 78,362 applications, issued 38,097 uniform visas (17,833 multiple-entry) and 795 visas with limited territorial validity, and did not issue 35,139: a not-issued rate of 47.5%.',
    provenance: 'primary',
    source: 'European Commission (DG HOME), 2024-schengen-visa-statistics-consulates_en.xlsx, sheet \'Data for consulates\' (PAKISTAN rows), cross-checked against sheet \'Totals - third country\', row PAKISTAN',
    sourceUrl: 'https://home-affairs.ec.europa.eu/document/download/6552447c-1d75-4f7c-bed6-1bd17a5d59f8_en?filename=2024-schengen-visa-statistics-consulates_en.xlsx',
    checked: '2026-11-18',
    note: 'Official statistic. 20 consulate rows (Romania Karachi and Switzerland Karachi are all zeros). Bulgaria\'s Q1 2024 national visas (80 applications in Islamabad) and Romania\'s (92) are on the separate \'BG, CY, RO\' sheet and are excluded, as in the file\'s own PAKISTAN line.',
  },
  schengenPkChange2024to2025: {
    id: 'eu.schengen.pakistan-change-2025',
    claim:
      'From 2024 to 2025, applications at consulates in Pakistan rose 13.9%, uniform visas issued rose 20.7%, visas not issued rose 13.9%, multiple-entry visas rose 5.3%, LTVs rose 57.4%, and the not-issued rate fell 1.6 points, from 47.5% to 45.9%.',
    provenance: 'primary',
    source: 'Computed from the two European Commission consulate files above',
    sourceUrl: 'https://home-affairs.ec.europa.eu/policies/schengen/schengen-visas/eu-visa-policy/statistics-short-stay-visas_en',
    checked: '2026-11-18',
    note: '89,270/78,362 = +13.9%; 45,970/38,097 = +20.7%; 40,026/35,139 = +13.9%; 18,771/17,833 = +5.3%; 1,251/795 = +57.4%; 45.88% - 47.47% = -1.59 points.',
  },
  schengenWorld2025: {
    id: 'eu.schengen.world-2025',
    claim:
      'Worldwide, the 2025 file records 12,201,026 applications for uniform visas and a not-issued rate of 14.6%.',
    provenance: 'primary',
    source: 'European Commission (DG HOME), 2025-consulates-schengen-visa-statistics.xlsx, sheet \'Data for consulates\', row \'Total worldwide 2025\'',
    sourceUrl: 'https://home-affairs.ec.europa.eu/document/download/56816949-e59f-442b-9091-5d03360bf860_en',
    checked: '2026-11-18',
    note: '1,768,605 / (10,265,942 + 39,798 + 1,768,605) = 0.1465. Pakistan 45.9% is about 3.1 times this. The 2024 worldwide rate was 14.8% (not printed).',
  },
  schengenPk2025ByState: {
    id: 'eu.schengen.pakistan-2025-by-state',
    claim:
      'In 2025, among Schengen states with over 1,000 applications at consulates in Pakistan, Denmark (78.7%) and Austria (73.3%) had the highest not-issued rates and Germany the lowest (24.2%); Germany received the most applications (18,792); the Netherlands (6,914), Spain (5,600) and Germany (4,597) had the most visas not issued; Denmark, Austria, Romania, Poland and Hungary each had rates above two-thirds.',
    provenance: 'primary',
    source: 'European Commission (DG HOME), 2025-consulates-schengen-visa-statistics.xlsx, sheet \'Data for consulates\' (PAKISTAN rows, summed by Schengen State)',
    sourceUrl: 'https://home-affairs.ec.europa.eu/document/download/56816949-e59f-442b-9091-5d03360bf860_en',
    checked: '2026-11-18',
    note: 'Full per-state table in the post. The 1,000-application line is our own choice. Every row\'s computed rate equals the rate the file itself shows for that row.',
  },
  schengenPkRateChanges: {
    id: 'eu.schengen.pakistan-rate-changes',
    claim:
      'Not-issued rates at consulates in Pakistan fell from 2024 to 2025 for Germany (31.6% to 24.2%), Austria (83.5% to 73.3%) and Greece (68.5% to 36.0%), and rose for Switzerland (34.9% to 50.2%), Hungary (53.2% to 67.2%) and Romania (49.0% to 70.3%).',
    provenance: 'primary',
    source: 'Computed from the two European Commission consulate files, sheet \'Data for consulates\'',
    sourceUrl: 'https://home-affairs.ec.europa.eu/policies/schengen/schengen-visas/eu-visa-policy/statistics-short-stay-visas_en',
    checked: '2026-11-18',
  },
  schengenPkConsulates: {
    id: 'eu.schengen.pakistan-consulates',
    claim:
      'The 2025 file has Pakistan rows for 17 Schengen states, all from Islamabad, with Germany and Italy also reporting from Karachi; there is no Lahore row. Croatia, Estonia, Finland, Iceland, Latvia, Lithuania, Luxembourg, Malta, Norway, Slovakia and Slovenia have no Pakistan row.',
    provenance: 'primary',
    source: 'European Commission (DG HOME), 2025-consulates-schengen-visa-statistics.xlsx, sheet \'Data for consulates\'',
    sourceUrl: 'https://home-affairs.ec.europa.eu/document/download/56816949-e59f-442b-9091-5d03360bf860_en',
    checked: '2026-11-18',
    note: '28 Schengen states appear in the file; 17 have PAKISTAN rows. The 2024 file has the same 17 with Pakistan data.',
  },
  schengenPkComparability: {
    id: 'eu.schengen.pakistan-comparability',
    claim:
      'The 2025 file has a row for Italy\'s consulate in Karachi (6,846 applications) that the 2024 file does not; Bulgaria\'s and Romania\'s 2024 rows cover only the period after 31 March 2024, with their earlier national visas on a separate sheet.',
    provenance: 'primary',
    source: 'European Commission consulate files 2025 and 2024: sheet \'Data for consulates\' and sheet \'Description\' (2024 file)',
    sourceUrl: 'https://home-affairs.ec.europa.eu/document/download/6552447c-1d75-4f7c-bed6-1bd17a5d59f8_en?filename=2024-schengen-visa-statistics-consulates_en.xlsx',
    checked: '2026-11-18',
    note: 'Italy 2024: Islamabad only, 3,433 applications; Italy 2025: Islamabad 3,963 + Karachi 6,846 = 10,809.',
  },
  schengenStatsDefinitions: {
    id: 'eu.schengen.stats-definitions',
    claim:
      'The figures are by the country where the application is made, not nationality; \'not issued\' covers refused visas and applications whose examination was discontinued; each application is one person, children included; the files do not split figures by refusal ground or purpose of travel.',
    provenance: 'primary',
    source: 'European Commission (DG HOME), Visa statistics: quality and metadata reporting (last update 9 November 2026)',
    sourceUrl: 'https://home-affairs.ec.europa.eu/document/download/b4626219-fa37-4650-8216-0c2bda466c74_en?filename=visa_statistics_-_quality_and_metadata_reporting.pdf',
    checked: '2026-11-18',
    note: '\'Counts twice\' for a person applying twice is our reading of \'each recorded application corresponds to a single person\' plus application-level counting. The absence of ground/purpose breakdowns is from the files\' column list.',
  },
  schengenPk2025Decisions: {
    id: 'eu.schengen.pakistan-2025-decisions',
    claim:
      'The rate divides visas not issued by all decisions (uniform visas issued, limited-validity visas and visas not issued); the 2025 Pakistan rows show 87,247 decisions against 89,270 applications.',
    provenance: 'primary',
    source: 'European Commission, 2025-consulates-schengen-visa-statistics.xlsx, sheet \'Data for consulates\', formula in column \'Not issued rate for uniform visas\' (=N/(J+M+N))',
    sourceUrl: 'https://home-affairs.ec.europa.eu/document/download/56816949-e59f-442b-9091-5d03360bf860_en',
    checked: '2026-11-18',
    note: '45,970 + 1,251 + 40,026 = 87,247.',
  },
  visaCodeArt46: {
    id: 'eu.visa-code.art46',
    claim:
      'Article 46 of the Visa Code requires Schengen states to compile annual visa statistics; the Commission publishes them with one row per consulate.',
    provenance: 'primary',
    source: 'Regulation (EC) No 810/2009, Article 46, consolidated version of 28 June 2024 (EUR-Lex); Commission metadata note',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-18',
    note: 'Article 46: statistics compiled per Annex XII and submitted by 1 March for the preceding year; the metadata note says they go to the Commission.',
  },
  visaCodeArt32Grounds: {
    id: 'eu.visa-code.art32-grounds',
    claim:
      'Article 32(1) of the Visa Code requires refusal if the applicant presents a false travel document; does not justify the purpose and conditions of stay; does not show enough money for the stay and return; has already stayed 90 days in the current 180-day period; has an SIS alert for refusal of entry; is a threat to public policy, internal security, public health or international relations; lacks required travel medical insurance; or if there are reasonable doubts about documents, statements or the intention to leave.',
    provenance: 'primary',
    source: 'Regulation (EC) No 810/2009 (Visa Code), Article 32(1), consolidated version of 28 June 2024 (EUR-Lex)',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-18',
    note: 'Paraphrased. The 90-days-in-180 figure is set in the Regulation.',
  },
  visaCodeArt32Appeal: {
    id: 'eu.visa-code.art32-appeal',
    claim:
      'Under Article 32, the refusal and its reasons are notified on a standard form in the deciding state\'s language and another official EU language; refused applicants have a right to appeal against the state that took the final decision, under that state\'s national law, and that state must tell them the procedure.',
    provenance: 'primary',
    source: 'Regulation (EC) No 810/2009 (Visa Code), Article 32(2) and (3), consolidated version of 28 June 2024 (EUR-Lex)',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-18',
  },
  visaCodeArt5Art6: {
    id: 'eu.visa-code.art5-art6',
    claim:
      'Article 5 makes the sole destination competent or, for several destinations, the main destination by length of stay in days or by purpose; with no main destination, the state of first entry. Article 6 says the application goes to that state\'s consulate for the place where the applicant legally resides.',
    provenance: 'primary',
    source: 'Regulation (EC) No 810/2009 (Visa Code), Articles 5(1) and 6(1), consolidated version of 28 June 2024 (EUR-Lex)',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-18',
    note: 'Article 5(1)(c) wording: the state whose external border the applicant intends to cross to enter. \'A lower rate elsewhere is not a reason to apply there\' and \'keep documents consistent\' are our own suggestions drawn from Articles 5 and 32(1)(b).',
  },
};

/** Facts still awaiting a lawyer's sign-off. Nothing here may be stated on a page. */
export const factsAwaitingLawyer = (): Fact[] => Object.values(FACTS).filter((f) => f.needsLawyer);

/** Facts confirmed against the official source itself — safe to state. */
export const factsPrimary = (): Fact[] =>
  Object.values(FACTS).filter((f) => f.provenance === 'primary' && !f.needsLawyer);
