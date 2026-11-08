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
};

/** Facts still awaiting a lawyer's sign-off. Nothing here may be stated on a page. */
export const factsAwaitingLawyer = (): Fact[] => Object.values(FACTS).filter((f) => f.needsLawyer);

/** Facts confirmed against the official source itself — safe to state. */
export const factsPrimary = (): Fact[] =>
  Object.values(FACTS).filter((f) => f.provenance === 'primary' && !f.needsLawyer);
