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
      'Saskatchewan lists International Skilled Worker (Employment Offer, Occupation In-Demand, Saskatchewan Express Entry, and the Agriculture, Health, and Innovation and Tech Talent Pathways) and Worker with Saskatchewan Work Experience. 2026 nominations are divided by sector, with accommodation and food services, trucking and retail trade capped.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Browse SINP Programs; SINP Immigration FAQs (updated 19 December 2025)',
    sourceUrl:
      'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs',
    checked: '2026-11-23',
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

  // ── GUIDES AND RURAL FIX OF 22 NOVEMBER 2026 (batch 27) ─────────────────
  caVisitNoMinimumFunds: {
    id: 'ca.visit.funds-no-minimum',
    claim:
      'IRCC publishes no minimum bank balance for visitors. Its eligibility page says you must have enough money for your stay, and that the amount depends on how long you will stay and whether you stay in a hotel or with friends or relatives. You must also convince the officer that ties such as a job, home, financial assets or family will take you back.',
    provenance: 'primary',
    source: 'IRCC, Eligibility to apply for a visitor visa (page details 2026-08-28)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eligibility.html',
    checked: '2026-11-22',
  },
  caVisitOiFunds: {
    id: 'ca.visit.oi-funds',
    claim:
      'IRCC\'s officer instructions ask for funds that cover all reasonable expenses during the stay, refer to bank statements or deposit books that show accumulated savings, and accept financial support from friends or family that is sufficient, has been arranged and can be confirmed.',
    provenance: 'primary',
    source: 'IRCC operational instructions, Temporary residents: Proof of Funds / Financial Support (page details 2014-04-25)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/visitors/proof-funds-financial-support.html',
    checked: '2026-11-22',
    note: 'The page also says a TRV application will not be refused just because the host\'s personal information is not provided. Not printed.',
  },
  caVisitOiEligibility: {
    id: 'ca.visit.oi-eligibility',
    claim:
      'IRCC\'s officer instructions say the amount of money required depends on the type and the duration of the trip, and ask about the applicant\'s employment, position and salary, approved leave, family, property and financial obligations in the country of residence.',
    provenance: 'primary',
    source: 'IRCC operational instructions, Eligibility and admissibility considerations (page details 2019-04-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/visitors/eligibility-admissibility-considerations.html',
    checked: '2026-11-22',
    note: 'Its question \'What is the source of funds: traveller\'s cheques or credit cards?\' is about the form of the money, not its origin, so the page does not cite it for scrutiny of deposits.',
  },
  caVisitImm5484Funds: {
    id: 'ca.visit.imm5484-funds',
    claim:
      'IRCC\'s document checklist for a temporary resident visa (IMM 5484) asks for proof that you can support yourself and any family members accompanying you while you are in Canada.',
    provenance: 'primary',
    source: 'IRCC, Document Checklist for a Temporary Resident Visa, IMM 5484 (05-2026); landing page dated 2026-05-13',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/imm5484.html',
    checked: '2026-11-22',
    note: 'PDF read: https://www.canada.ca/content/dam/ircc/documents/pdf/english/kits/forms/imm5484/01-05-2026/imm5484e.pdf',
  },
  caVisitR179Leave: {
    id: 'ca.visit.r179b',
    claim:
      'IRPR s. 179(b) requires the officer to be satisfied that the applicant will leave Canada by the end of the period authorised for their stay.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 179 (Justice Laws, current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-179.html',
    checked: '2026-11-22',
  },
  caVisitBankStatementIrcc: {
    id: 'ca.visit.bank-statement',
    claim:
      'IRCC\'s visitor visa page recommends a bank statement showing the bank\'s name and contact details, your name and address, and months of account details including balances. It says the contact details let IRCC contact the bank with questions, and that online applicants get a personalised document checklist in the portal.',
    provenance: 'primary',
    source: 'IRCC, How to apply for a visitor visa (page details 2026-11-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html',
    checked: '2026-11-22',
    note: 'The page says \'at least 6 months\'. Not printed: a web-page figure. The Abu Dhabi checklist suggests a different period; the guide says only that the two differ.',
  },
  caVisitEmployerLetter: {
    id: 'ca.visit.employer-letter',
    claim:
      'IRCC asks for the employer letter on the employer\'s official letterhead, signed by your manager or HR contact, with your start date, a brief job description, your current salary and your manager\'s contact information.',
    provenance: 'primary',
    source: 'IRCC, How to apply for a visitor visa (page details 2026-11-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html',
    checked: '2026-11-22',
    note: 'The page\'s dating window for the letter is not printed.',
  },
  caVisitAbuDhabiChecklist: {
    id: 'ca.visit.imm5853',
    claim:
      'IRCC\'s Abu Dhabi visa office checklist (IMM 5853) has instructions for residents of Pakistan applying through the Islamabad, Lahore or Karachi centres. It lists an employment letter, pay slips, proof of pension, business registration and investments as further proof of funds; asks a person paying for someone else\'s trip for a signed letter describing the relationship, photo ID and a bank certificate; requires a certified translation of documents not in English or French; and warns that fraudulent documents result in immediate refusal.',
    provenance: 'primary',
    source: 'IRCC, Abu Dhabi Visa Office Additional Document Checklist, Temporary Resident Visa, IMM 5853 E (04-2026)',
    sourceUrl: 'https://ircc.canada.ca/english/pdf/kits/forms/IMM5853E.pdf',
    checked: '2026-11-22',
    note: 'Pages 2 and 3 of the PDF are footed \'IMM 5953 E (04-2026)\', an IRCC typo. Its statement period and the dating window for third-party documents are not printed. IRCC\'s paper-application page picks local instructions with a script-driven country selector, and its Pakistan \'where to submit\' page was empty, so the link to Pakistan rests on the checklist\'s own wording.',
  },
  caVisitGuide5256: {
    id: 'ca.visit.guide5256',
    claim:
      'Guide 5256 says a translator who is not certified in Canada must provide an affidavit, that applicants and their family members may not do the translation, and that the officer considers all the information and documentation provided. The form\'s background questions ask whether you have ever been refused a visa or permit, denied entry or ordered to leave Canada or any other country or territory.',
    provenance: 'primary',
    source: 'IRCC, Guide 5256: Applying for a visitor visa (temporary resident visa), paper application (page details 2026-03-31)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5256-applying-visitor-visa-temporary-resident-visa.html',
    checked: '2026-11-22',
  },
  caVisitInvitationLetterFunds: {
    id: 'ca.visit.invitation-funds',
    claim:
      'IRCC says a letter of invitation should explain where the visitor will stay and how they will pay for things, and that a letter of invitation does not guarantee a visa.',
    provenance: 'primary',
    source: 'IRCC, Letter of invitation (page details 2025-01-14)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/letter-invitation.html',
    checked: '2026-11-22',
  },
  caFraudPermanentRecord: {
    id: 'ca.fraud.permanent-record',
    claim:
      'IRCC says that if you, your representative or your interpreter send false documents or information, your application will be refused and you could have a permanent record of fraud with IRCC.',
    provenance: 'primary',
    source: 'IRCC, Consequences of immigration and citizenship fraud (page details 2026-09-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html',
    checked: '2026-11-22',
  },
  caRepsFalseAdvice: {
    id: 'ca.fraud.false-advice',
    claim:
      'IRCC\'s Help Centre says representatives who advise you to provide false information or documents are breaking the law, and that false information leads to refusal.',
    provenance: 'primary',
    source: 'IRCC Help Centre, Is it legal to provide false information on my immigration or citizenship application, if a representative advises me to do so? (date modified 2026-11-03)',
    sourceUrl: 'https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=448&top=7',
    checked: '2026-11-22',
  },
  pkFbrNtnIris: {
    id: 'pk.fbr.ntn-iris',
    claim:
      'For individuals, the Federal Board of Revenue uses the CNIC as the National Tax Number, and Iris is the online portal through which income tax returns are filed.',
    provenance: 'primary',
    source: 'Federal Board of Revenue, Register for Income Tax (undated)',
    sourceUrl: 'https://www.fbr.gov.pk/categ/register-income-tax/51147/30846/71148',
    checked: '2026-11-22',
  },
  pkFbrWealthStatement: {
    id: 'pk.fbr.wealth-statement',
    claim:
      'An online FBR income tax return requires the Return of Income form and the Wealth Statement, a statement of assets and liabilities.',
    provenance: 'primary',
    source: 'Federal Board of Revenue, File Income Tax Return (undated)',
    sourceUrl: 'https://www.fbr.gov.pk/categ/file-income-tax-return/51147/80860/71160',
    checked: '2026-11-22',
  },
  schengenVisaFee: {
    id: 'eu.visacode.fee',
    claim:
      'The Schengen visa fee is EUR 90, and EUR 45 for children aged 6 to 11; children under 6 pay nothing. The EUR 90 applies from 11 June 2024, under Commission Delegated Regulation (EU) 2024/1415. The fee is not refunded after a refusal.',
    provenance: 'primary',
    source: 'Regulation (EC) No 810/2009 (Visa Code), Article 16(1), (2), (4)(a) and (7), consolidated version of 28 June 2024; amended by Commission Delegated Regulation (EU) 2024/1415 of 14 March 2024 (OJ L, 22.5.2024)',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-22',
    note: 'The consolidated text of 11 June 2024 is the first to show EUR 90 (EUR 80 and EUR 40 in the 2 February 2020 text). Article 16(2a) allows EUR 135 or 180 only for nationals of a country named in a Council decision under Article 25a(5)(b); none for Pakistan was found, and the page prints the standard fee only.',
  },
  schengenDecisionDeadline: {
    id: 'eu.visacode.decision-deadline',
    claim:
      'A Schengen visa application must be decided within 15 calendar days of an admissible application, extendable to a maximum of 45 calendar days in individual cases.',
    provenance: 'primary',
    source: 'Visa Code, Article 23(1) and (2), consolidated version of 28 June 2024',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-22',
    note: 'The embassy’s checklists (10 January 2024) still quote the pre-2020 15/30/60-day text, and its visa page gives its own estimate; neither is printed.',
  },
  schengenLodgingWindow: {
    id: 'eu.visacode.lodging-window',
    claim:
      'Apply no more than six months before the trip and, as a rule, no later than 15 calendar days before it.',
    provenance: 'primary',
    source: 'Visa Code, Article 9(1), consolidated version of 28 June 2024',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-22',
  },
  schengenInsuranceMinimum: {
    id: 'eu.visacode.insurance',
    claim:
      'Travel medical insurance must be valid throughout the Schengen area for the whole stay, with cover of at least EUR 30,000, for medical repatriation, urgent medical attention, emergency hospital treatment and death.',
    provenance: 'primary',
    source: 'Visa Code, Article 15(1) and (3), consolidated version of 28 June 2024',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-22',
  },
  schengenStayLimit: {
    id: 'eu.visacode.90-in-180',
    claim:
      'A uniform Schengen visa covers an intended stay of no more than 90 days in any 180-day period.',
    provenance: 'primary',
    source: 'Visa Code, Article 2(2)(a), consolidated version of 28 June 2024',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-22',
  },
  schengenCompetentState: {
    id: 'eu.visacode.competent-state',
    claim:
      'You apply to your only destination or, on a trip to several states, your main destination by length of stay or purpose; with no main destination, to the state whose external border you cross first. You apply at the consulate for the place where you legally live.',
    provenance: 'primary',
    source: 'Visa Code, Articles 5(1) and 6(1), consolidated version of 28 June 2024',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-22',
  },
  schengenPassportPhotoFingerprints: {
    id: 'eu.visacode.passport-biometrics',
    claim:
      'The passport must be valid at least three months after you leave the Schengen area, have two blank pages and have been issued in the last 10 years. Every application needs a photograph, and children under 12 give no fingerprints.',
    provenance: 'primary',
    source: 'Visa Code, Articles 10(3), 12 and 13(7)(a), consolidated version of 28 June 2024',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-22',
  },
  schengenRefusalGrounds: {
    id: 'eu.visacode.refusal-grounds',
    claim:
      'A visa is refused for a false travel document, an unjustified purpose, insufficient means, 90 days already used in the current 180, an SIS alert, a threat to public policy, security, health or international relations, or missing travel medical insurance, or where there are reasonable doubts about the documents, statements or intention to leave. Reasons come on a standard form, and refused applicants have a right of appeal under the law of the deciding state.',
    provenance: 'primary',
    source: 'Visa Code, Article 32(1)-(3), consolidated version of 28 June 2024',
    sourceUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628',
    checked: '2026-11-22',
  },
  dkVisaDecider: {
    id: 'dk.visa.decider',
    claim:
      'Danish visit visas are decided by a Danish diplomatic mission, here the Embassy of Denmark in Islamabad, and in listed cases at first instance by the Danish Immigration Service (Udlændingestyrelsen), for example where another Schengen state objects during consultation. SIRI does not decide visit visas.',
    provenance: 'primary',
    source: 'Bekendtgørelse om udlændinges adgang til Danmark på grundlag af visum, BEK nr 1327 af 17/11/2025, § 28; Danish Immigration Service visa pages on nyidanmark.dk (published by the Danish Immigration Service)',
    sourceUrl: 'https://www.retsinformation.dk/eli/lta/2025/1327',
    checked: '2026-11-22',
  },
  dkVisaAppealDeadline: {
    id: 'dk.visa.appeal-deadline',
    claim:
      'A refusal by a Danish embassy can be appealed to the Danish Immigration Service within 8 weeks of receiving the decision; the Service may accept a late appeal in special cases. A refusal by the Danish Immigration Service is appealed to the Immigration Appeals Board, also within 8 weeks.',
    provenance: 'primary',
    source: 'BEK nr 1327 af 17/11/2025, § 29(1)-(3); Danish Immigration Service, You have got a no to visa (last updated 08-06-2026)',
    sourceUrl: 'https://nyidanmark.dk/en-GB/You-have-received-an-answer/Short-stay-visa/No-to-visa',
    checked: '2026-11-22',
    note: 'The embassy’s appeal page cites section 30 of an older executive order and an old DIS postal address (Ryesgade 53, Copenhagen). DIS now gives Farimagsvej 51A, DK-4700 Næstved. The page links DIS and prints no address.',
  },
  dkVisaAppealNoFee: {
    id: 'dk.visa.appeal-no-fee',
    claim:
      'No fee is charged for an appeal against an embassy refusal.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Appeal page',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/visa/appeal/',
    checked: '2026-11-22',
    note: 'The same page gives a maximum appeal processing time; not printed (a time on a web page).',
  },
  dkVisaAutomaticAppeal: {
    id: 'dk.visa.automatic-appeal',
    claim:
      'Some refusals go to an automatic appeal, where the applicant need do nothing; the refusal letter says which appeal process applies.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Visa FAQ',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/visa/faq/',
    checked: '2026-11-22',
  },
  dkVisaReopenCourts: {
    id: 'dk.visa.reopen-courts',
    claim:
      'A case refused for insufficient information can be reopened by the authority that refused it, with documents about the facts at the time of the decision; changed circumstances need a new application. A civil case in the Danish courts is possible at the applicant’s own cost.',
    provenance: 'primary',
    source: 'Danish Immigration Service, You have got a no to visa (last updated 08-06-2026)',
    sourceUrl: 'https://nyidanmark.dk/en-GB/You-have-received-an-answer/Short-stay-visa/No-to-visa',
    checked: '2026-11-22',
  },
  dkVisaGroup5: {
    id: 'dk.visa.group5-pakistan',
    claim:
      'The Danish Immigration Service places Pakistan in Group 5 of its five country groups. It describes Group 5 as countries whose citizens present a particularly high risk of illegal immigration, or cannot easily be returned; as a starting point their citizens qualify for a visa only in extenuating circumstances, such as the death or terminal illness of a family member in Denmark. The groups are applied where the authorities doubt the applicant will leave on time, are only a rough guide, and every case is assessed individually.',
    provenance: 'primary',
    source: 'Danish Immigration Service, Apply for a short term visa to private visits and tourist visits (last updated 30-06-2026)',
    sourceUrl: 'https://nyidanmark.dk/en-GB/You-want-to-apply/Short-stay-visa/Private-visits-and-tourist-visits-',
    checked: '2026-11-22',
  },
  dkVisaGroup5Relatives: {
    id: 'dk.visa.group5-relatives',
    claim:
      'For Pakistan (Group 5), visas for siblings, cousins, aunts, uncles and friends are not commonly granted, though there may be exceptions.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Visa FAQ',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/visa/faq/',
    checked: '2026-11-22',
  },
  dkVisaHostRequired: {
    id: 'dk.visa.host',
    claim:
      'Citizens of countries in groups 2 to 5, including Pakistan, can normally get a visa for a private or tourist visit only with a host in Denmark, who must confirm the visit, have a permanent home in Denmark and normally be a Danish citizen or resident.',
    provenance: 'primary',
    source: 'Danish Immigration Service, Apply for a short term visa to private visits and tourist visits (last updated 30-06-2026)',
    sourceUrl: 'https://nyidanmark.dk/en-GB/You-want-to-apply/Short-stay-visa/Private-visits-and-tourist-visits-',
    checked: '2026-11-22',
  },
  dkVisaBusinessPakistan: {
    id: 'dk.visa.business-pakistan',
    claim:
      'For a business visit the Danish company must be registered in the CVR and have an existing commercial relationship with the applicant’s company. For Pakistani citizens, business visas may be granted in specific justified cases.',
    provenance: 'primary',
    source: 'Danish Immigration Service, Apply for a short term visa to business visits (last updated 30-06-2026)',
    sourceUrl: 'https://nyidanmark.dk/en-GB/You-want-to-apply/Short-stay-visa/Business-visits',
    checked: '2026-11-22',
  },
  dkVisaInvitationForms: {
    id: 'dk.visa.invitation-forms',
    claim:
      'A private host uses invitation VU2, online with MitID if registered at a Danish address, otherwise the printable form; a business host uses VU1, online with MitID Erhverv or on paper. The host sends the applicant the invitation ID. An invitation is recommended, not required, but without one the Immigration Service must contact the host and the case takes longer.',
    provenance: 'primary',
    source: 'Danish Immigration Service, Invitation of a visa applicant (last updated 04-06-2026)',
    sourceUrl: 'https://nyidanmark.dk/en-GB/You-want-to-apply/Short-stay-visa/Invitation-of-a-visa-applicant',
    checked: '2026-11-22',
    note: 'The page also gives the online invitation’s validity period; not printed.',
  },
  dkVisaCentresPakistan: {
    id: 'dk.visa.centres-pakistan',
    claim:
      'Danish visa applications in Pakistan are submitted at the Gerry’s/VFS visa application centres in Islamabad, Lahore and Karachi, not at the embassy. The application is filled in and the fee paid online on ApplyVisa, and the signed ApplyVisa cover letter is handed in with the documents and biometrics.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Visa FAQ and Document checklists; Ministry of Foreign Affairs of Denmark, Where to apply',
    sourceUrl: 'https://um.dk/en/travel-and-residence/where-to-apply',
    checked: '2026-11-22',
  },
  dkVisaChecklistPakistan: {
    id: 'dk.visa.checklist-pakistan',
    claim:
      'The embassy’s Visit Family/Friends checklist (dated 10 January 2024) asks every applicant for a CNIC copy, a NADRA Family Registration Certificate in English, bank statements signed and stamped by the bank, an NTN certificate and FBR tax-return acknowledgements; a spouse adds the Nikah Nama and the Union Council’s Marriage Registration Certificate in English. Documents in Urdu need a translation, and missing documents not presented promptly lead to refusal.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Checklist Visit Family/Friends (10 January 2024), linked from the Document checklists page',
    sourceUrl: 'https://um.dk/media/zuugmp15/checklist-familyvisit-10012024.pdf',
    checked: '2026-11-22',
    note: 'The checklist’s look-back periods (bank statements, payslips, tax years, pension) and its deadline for missing documents are not printed: they are figures on a web document, not in law.',
  },
  dkVisaRedCarpet: {
    id: 'dk.visa.red-carpet',
    claim:
      'On 22 November 2026 the embassy still lists a Red Carpet Programme (Fast Track Business Visa Program) for companies that do business with a Danish company; its terms-and-conditions link did not open and the page does not say whether it is taking companies.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Red Carpet Programme - How to enroll',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/visa/red-carpet-programme-how-to-enroll/',
    checked: '2026-11-22',
    note: 'Terms link (~/media/a6994b53cff344fb8efb4293482b2c3d.ashx) returned 404 on um.dk and 520 on pakistan.um.dk.',
  },
  dkVisaAgentsWarning: {
    id: 'dk.visa.agents-warning',
    claim:
      'The embassy asks applicants not to contact agents, warning that agents charge high prices for false documents, which usually lead to refusal.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Visa page and FAQ',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/visa/',
    checked: '2026-11-22',
  },
  dkVisaStats2025: {
    id: 'dk.visa.stats-2025-pakistan',
    claim:
      'In 2025 Denmark’s consulate in Islamabad received 5,539 short-stay visa applications, issued 1,173 visas and did not issue a visa in 4,325 cases: 78.7% of decisions.',
    provenance: 'primary',
    source: 'European Commission (DG HOME), Statistics on short-stay visas, 2025 consulate file, sheet \'Data for consulates\', row Denmark / PAKISTAN / ISLAMABAD',
    sourceUrl: 'https://home-affairs.ec.europa.eu/policies/schengen/schengen-visas/eu-visa-policy/statistics-short-stay-visas_en',
    checked: '2026-11-22',
    note: 'Row read today: 5,539 applied, 1,173 issued (362 multiple-entry), 1 LTV, 4,325 not issued, rate 0.78651. Matches /blog/schengen-visa-refusals-pakistan-2025.',
  },
  dkVisaStatsContext: {
    id: 'dk.visa.stats-context',
    claim:
      'Denmark’s not-issued rate in Pakistan was 78.6% in 2024; across all Schengen consulates in Pakistan it was 45.9% in 2025.',
    provenance: 'primary',
    source: 'European Commission visa statistics, 2024 and 2025 consulate files, as summed in /blog/schengen-visa-refusals-pakistan-2025 (read 18 November 2026)',
    sourceUrl: 'https://home-affairs.ec.europa.eu/policies/schengen/schengen-visas/eu-visa-policy/statistics-short-stay-visas_en',
    checked: '2026-11-22',
    note: 'Taken from our post as the brief allows; the 2024 file and the Pakistan total were not re-summed today.',
  },
  caEcaFswRequired: {
    id: 'ca.eca.fsw-required',
    claim:
      'A Federal Skilled Worker principal applicant with foreign education must have a completed credential and an ECA for immigration purposes. An ECA is also needed to get points for education outside Canada, including a spouse’s or partner’s.',
    provenance: 'primary',
    source: 'IRCC, Federal Skilled Worker Program eligibility (modified 2026-11-18); IRCC, Educational credential assessment (modified 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html',
    checked: '2026-11-22',
  },
  caEcaDesignatedBodies: {
    id: 'ca.eca.designated',
    claim:
      'IRCC’s designated ECA organisations are CES (University of Toronto), ICAS, WES, IQAS and ICES (BCIT), plus the Medical Council of Canada for physicians (NOC 31100, 31101, 31102), the Pharmacy Examining Board of Canada for pharmacists (NOC 31120) and the Canadian Architectural Certification Board for architects (NOC 21200) who need a licence to practise. IRCC still accepts a valid architect’s ECA from another body issued before 31 October 2024.',
    provenance: 'primary',
    source: 'IRCC, Educational credential assessment (modified 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html',
    checked: '2026-11-22',
  },
  caEcaProfessionalBody: {
    id: 'ca.eca.professional-body',
    claim:
      'Where a professional body has been designated for the applicant’s occupation, the equivalency assessment must come from that body.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, SOR/2002-227, s. 75(2.1) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/page-11.html',
    checked: '2026-11-22',
  },
  caEcaValidityLaw: {
    id: 'ca.eca.validity',
    claim:
      'A Federal Skilled Worker’s ECA must be less than five years old on the date the application is made (IRPR s. 75(2)(e)(ii)). An Express Entry profile’s ECA results must be less than five years old (MI s. 3(3)(b)), and once the assessment is five or more years old its points stop (MI s. 3(4), 11(5), 17(4)).',
    provenance: 'primary',
    source: 'IRPR SOR/2002-227 s. 75 (current to 2026-10-29); Ministerial Instructions respecting the Express Entry system (signed 2026-11-17, page modified 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-22',
    note: 'IRPR s. 75 is at https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/page-11.html',
  },
  caEcaExpiredRefused: {
    id: 'ca.eca.expired-refused',
    claim:
      'IRCC says the ECA must be less than five years old when you complete your Express Entry profile and when you submit your application, must stay valid while you are in the pool, and an application with an expired ECA is refused.',
    provenance: 'primary',
    source: 'IRCC, Educational credential assessment (modified 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html',
    checked: '2026-11-22',
  },
  caEcaProfileDocuments: {
    id: 'ca.eca.profile-docs',
    claim:
      'IRCC lists an ECA report among the documents you may need when you create an Express Entry profile, if you are applying through the Federal Skilled Worker Program or want points for education outside Canada. The profile asks for the ECA reference number.',
    provenance: 'primary',
    source: 'IRCC, Documents you need for an Express Entry profile (2026-10-16); IRCC, Educational credential assessment',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents.html',
    checked: '2026-11-22',
  },
  caEcaNotLicence: {
    id: 'ca.eca.not-licence',
    claim:
      'IRCC says an ECA does not guarantee a job in your field or a licence to practise a regulated profession; the licence comes from the province or territory where you settle.',
    provenance: 'primary',
    source: 'IRCC, Educational credential assessment (modified 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html',
    checked: '2026-11-22',
  },
  caFswEducationPoints: {
    id: 'ca.fsw.education-points',
    claim:
      'Federal Skilled Worker education points (maximum 25): two-year post-secondary credential 19, three years or longer 21, two or more credentials with one of three years or longer 22, master’s-level 23.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, SOR/2002-227, s. 78 (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/page-12.html',
    checked: '2026-11-22',
  },
  caCrsEducationPoints: {
    id: 'ca.crs.education-points',
    claim:
      'CRS level-of-education points (single / with spouse): two-year post-secondary credential 98 / 91, three years or more 120 / 112, two or more credentials with one of three years or more 128 / 119, master’s-level 135 / 126.',
    provenance: 'primary',
    source: 'Ministerial Instructions respecting the Express Entry system, s. 11(1) (signed 2026-11-17, page modified 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-22',
    note: 'Matches lib/crs-grid.ts EDUCATION.',
  },
  ecaWesPakistan: {
    id: 'eca.wes.pakistan',
    claim:
      'For a BSc from the University of the Punjab or LUMS (ECA for IRCC), WES asked for all university mark sheets and the degree certificate attested by HEC, uploaded with HEC’s e-Attestation certificate as one PDF per credential. HEC must confirm the attestation on its website or WES will not accept the documents. A CNIC information form is needed only for physical (stamp or ticket) HEC attestations. LUMS can also send records to WES electronically. A master’s holder need not submit the bachelor’s.',
    provenance: 'primary',
    source: 'WES, Required Documents tool, results for Bachelor of Science, University of the Punjab and Lahore University of Management Sciences, Canada, applying for IRCC',
    sourceUrl: 'https://apps.wes.org/required-documents/Search/Result?cId=121&eId=38&iNm=University%20of%20the%20Punjab&cNm=Bachelor%20of%20Science&iSec=Universities%20and%20Institutes%20of%20Technology&comp=1&isEca=True&lan=1&isNzqa=False&isCMEC=False',
    checked: '2026-11-22',
    note: 'Requirements vary by institution. LUMS result: same URL with iNm=Lahore%20University%20of%20Management%20Sciences.',
  },
  ecaIcasPakistan: {
    id: 'eca.icas.pakistan',
    claim:
      'ICAS asks for HEC e-Attestation certificates for the degree and transcript or marks certificates, verified directly with HEC’s attestation portal. Diplomas: IBCC-attested copies in an envelope signed and sealed by IBCC. HEC and IBCC need not complete ICAS’s Official Records Request Form. Documents not in English or French need a word-for-word translation, and a differing name needs official proof of the change.',
    provenance: 'primary',
    source: 'ICAS, Immigration to Canada: Pakistan document requirements',
    sourceUrl: 'https://www.icascanada.ca/new/immigration-to-canada.aspx/document-detail.aspx?document=be9ed032-0d4e-4bc1-aa6b-af6ee26fa4d0',
    checked: '2026-11-22',
  },
  ecaIqasPakistan: {
    id: 'eca.iqas.pakistan',
    claim:
      'IQAS asks for the degree and transcript as official copies attested by HEC, uploaded to the IQAS portal, with an ID showing the number HEC used (CNIC or passport). HEC must confirm the attestation on its website. Preston University graduates must also provide documentation of the learning centre where they studied. Secondary documents are not required with a completed post-secondary credential.',
    provenance: 'primary',
    source: 'Government of Alberta, IQAS Educational Credential Assessment for Immigration: country-specific academic document requirements (October 2026), Pakistan',
    sourceUrl: 'https://www.alberta.ca/system/files/im-eca-required-documents.pdf',
    checked: '2026-11-22',
  },
  ecaIqasTwoYearDegree: {
    id: 'eca.iqas.pakistan-two-year',
    claim:
      'IQAS’s education guide for Pakistan says a bachelor (pass) degree such as a BA, BCom or BSc traditionally involves two years of full-time study and generally compares to a two-year post-secondary diploma. A master’s after a pass bachelor’s, in combination with it, and the four-year bachelor (honours) generally compare to a four-year bachelor’s degree. The guide says it is not an official IQAS assessment.',
    provenance: 'primary',
    source: 'Government of Alberta, IQAS International Education Guide: Pakistan',
    sourceUrl: 'https://www.alberta.ca/iqas-education-guide-pakistan',
    checked: '2026-11-22',
  },
  ecaIcesPakistan: {
    id: 'eca.ices.pakistan',
    claim:
      'ICES does not accept HEC-attested documents; degree records must be issued and sent directly by the awarding university, by post or from a university email account, never handled by the applicant. ICES lists Pakistani institutions whose credentials it will not assess.',
    provenance: 'primary',
    source: 'BCIT ICES, Country specific information (Pakistan); BCIT ICES, ECA document requirements',
    sourceUrl: 'https://www.bcit.ca/ices/country-specific-information/',
    checked: '2026-11-22',
  },
  ecaCesClosed: {
    id: 'eca.ces.closed',
    claim:
      'CES (University of Toronto) stopped accepting new applications at 9:00 am EDT on 22 October 2026. Applications paid for before then are still processed, and reports already issued keep their issue date.',
    provenance: 'primary',
    source: 'University of Toronto School of Continuing Studies, CES winding-down notice and FAQ',
    sourceUrl: 'https://learn.utoronto.ca/comparative-education-service/faq',
    checked: '2026-11-22',
    note: 'IRCC’s ECA page (modified 2026-10-16) still lists CES. Re-check monthly; tell the lead when IRCC removes it.',
  },
  ecaMccPhysicians: {
    id: 'eca.mcc',
    claim:
      'The Medical Council of Canada issues ECAs for medical degrees, requested through physiciansapply.ca once the final degree, or the transcript with the degree sent for verification, is source-verified. An ECA does not give the right to practise.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Educational Credential Assessment',
    sourceUrl: 'https://mcc.ca/credentials-and-services/services/educational-credential-assessment/',
    checked: '2026-11-22',
  },
  pkHecAttestation: {
    id: 'pk.hec.attestation',
    claim:
      'HEC’s degree attestation is online through its eServices portal. It attests degrees, transcripts (result cards or detailed marks certificates) and university provisional certificates. The university verifies the case, HEC reviews it, and the applicant downloads the e-Attestation certificate. HEC will not start unless personal details on the CNIC and all educational documents are identical.',
    provenance: 'primary',
    source: 'Higher Education Commission, Degree Attestation',
    sourceUrl: 'https://www.hec.gov.pk/english/services/students/DAS/Pages/Degree-Attestation.aspx',
    checked: '2026-11-22',
  },
  pkIbccAttestation: {
    id: 'pk.ibcc.attestation',
    claim:
      'IBCC (Inter Boards Coordination Commission) is authorised by the Government of Pakistan to attest secondary and higher secondary certificates and diplomas awarded by Pakistan’s boards of intermediate and secondary education and boards of technical education.',
    provenance: 'primary',
    source: 'IBCC, Attestation: Introduction',
    sourceUrl: 'https://ibcc.edu.pk/attestation/',
    checked: '2026-11-22',
  },
  ecaNoMofa: {
    id: 'eca.no-mofa',
    claim:
      'IRCC’s ECA page does not ask for MOFA attestation, and on 22 November 2026 the Pakistan document pages of WES, ICAS, IQAS and ICES did not ask for it either.',
    provenance: 'primary',
    source: 'IRCC ECA page; WES Required Documents; ICAS Pakistan page; IQAS country-specific requirements; ICES country-specific information',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html',
    checked: '2026-11-22',
    note: 'A fact about absence: re-check if any body changes its Pakistan page.',
  },
  caPrResidency730: {
    id: 'ca.pr.residency-730',
    claim:
      'A permanent resident must be in Canada for at least 730 days in every five-year period; the days need not be continuous. Under five years as a PR, you must show you can reach 730 days within five years of becoming a PR; after five years, the five years before the examination are counted.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 28(1) and (2)(a)-(b) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-28.html',
    checked: '2026-11-22',
  },
  caPrResidencyHc: {
    id: 'ca.pr.residency-hc',
    claim:
      'An officer can find that humanitarian and compassionate considerations, including the best interests of a child directly affected, justify keeping PR status despite a breach of the residency obligation.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 28(2)(c); IRCC Guide IMM 5529 (modified 2025-07-30)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-28.html',
    checked: '2026-11-22',
  },
  caPrDaysAbroad: {
    id: 'ca.pr.days-abroad',
    claim:
      'Days abroad count towards the 730 when you ordinarily live with a Canadian citizen spouse, common-law partner or (for a child) parent; when you are employed by or under contract to a Canadian business or the federal or a provincial public service and assigned full-time abroad as a term of that job; or when you accompany a PR spouse, partner or parent so employed who meets the obligation.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 28(2)(a)(ii)-(iv); Immigration and Refugee Protection Regulations, s. 61(3)-(5) (current to 2026-10-29); IRCC Help Centre qnum 1466 (modified 2026-11-03)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-61.html',
    checked: '2026-11-22',
  },
  caPrCanadianBusiness: {
    id: 'ca.pr.canadian-business',
    claim:
      'For the residency obligation, a child is anyone under 22 who is not a spouse or common-law partner, and a business that exists mainly to let a PR meet the obligation while living abroad is not a Canadian business.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 61(1), (2) and (6) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-61.html',
    checked: '2026-11-22',
  },
  caPrStatusNotAutomatic: {
    id: 'ca.pr.status-not-automatic',
    claim:
      'PR status is not lost automatically or when the PR card expires. It ends on a final determination outside Canada that the residency obligation was not met, on an approved renunciation, when a removal order comes into force, or on becoming a citizen; IRCC says you stay a PR until an official decision is made.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 46(1); IRCC, Understand permanent resident status (modified 2026-04-09)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/status.html',
    checked: '2026-11-22',
  },
  caPrCardValidity: {
    id: 'ca.pr.card-validity',
    claim:
      'A PR card is valid for five years from the date of issue, or one year in the cases listed in s. 54(2).',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 54 (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-54.html',
    checked: '2026-11-22',
  },
  caPrCardInCanadaOnly: {
    id: 'ca.pr.card-in-canada-only',
    claim:
      'A PR card can only be issued in Canada and is not mailed outside Canada, so it cannot be renewed from Pakistan; a PR abroad without a valid card applies for a PR travel document.',
    provenance: 'primary',
    source: 'IRCC, Travelling outside Canada as a PR (dated 2025-08-07); IRCC, PR card: who can apply (modified 2025-05-28)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/travel-outside-canada.html',
    checked: '2026-11-22',
  },
  caPrBoarding: {
    id: 'ca.pr.boarding',
    claim:
      'Without a PR card or PRTD, a PR may not be able to board a flight to Canada; carriers must review proof of status before boarding passengers who say they are PRs (IRPA s. 148, IRPR s. 259). A Record of Landing or Confirmation of Permanent Residence is not valid for travel to Canada.',
    provenance: 'primary',
    source: 'IRCC, Permanent residents need a PR card or travel document; IRCC, PR card departmental policy (modified 2025-03-31)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/permanent-residents.html',
    checked: '2026-11-22',
  },
  caPrPrtd: {
    id: 'ca.pr.prtd',
    claim:
      'A PRTD is for a PR outside Canada without a valid PR card returning by plane, boat, train or bus. It is normally single-entry. IRCC prefers online applications (IMM 5444) through the PR Portal, paper only for accommodations after contacting the VAC; each family member applies separately; IRCC assesses the residency obligation; after approval it emails passport instructions.',
    provenance: 'primary',
    source: 'IRCC, Apply for a permanent resident travel document (modified 2026-10-30); IRCC Guide IMM 5529 (modified 2025-07-30)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/permanent-residents/travel-document.html',
    checked: '2026-11-22',
  },
  caPrPakistanOffice: {
    id: 'ca.pr.pakistan-office',
    claim:
      'IRCC\'s list of visa offices names Islamabad as the visa office for Pakistan, and visa offices process PR travel documents. IRCC lists VACs in Islamabad, Lahore and Karachi; accepting PRTD applications is among the general VAC services, and passports go to a VAC only after IRCC requests them.',
    provenance: 'primary',
    source: 'IRCC, Visa offices outside Canada (modified 2026-07-17); IRCC, Find a visa application centre (page dated 2026-08-24)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/international-visa-offices.html',
    checked: '2026-11-22',
    note: 'The VFS Global Pakistan site returned HTTP 403 to automated reading, so nothing VFS-specific is stated.',
  },
  caPrBiometrics: {
    id: 'ca.pr.biometrics',
    claim:
      'Permanent residents are exempt from biometrics unless they are renewing or replacing a PR card and were exempt by age when they applied for permanent residence. IRCC\'s PRTD pages do not mention biometrics.',
    provenance: 'primary',
    source: 'IRCC, Who needs to give biometrics (modified 2026-11-19)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/who-needs-to-give.html',
    checked: '2026-11-22',
  },
  caPrIadAppeal: {
    id: 'ca.pr.iad-appeal',
    claim:
      'A PR may appeal a residency obligation decision made outside Canada to the Immigration Appeal Division (IRPA s. 63(4)). The notice of appeal must be received within 60 days after the appellant receives the officer\'s decision and any written reasons (IRB Rules r. 16(c)). A removal order appeal (IRPA s. 63(3)) is due 30 days after receiving the order (r. 16(b)).',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 63; Immigration and Refugee Board of Canada Rules (SOR/2022-277), r. 16 (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2022-277/section-16.html',
    checked: '2026-11-22',
    note: 'The 60-day limit is in the IRB Rules, not in IRPA s. 63(4), which gives only the right of appeal.',
  },
  caPrTravelDocDuringAppeal: {
    id: 'ca.pr.travel-doc-during-appeal',
    claim:
      'An officer must issue a travel document to a PR abroad who was physically present in Canada at least once in the 365 days before the examination and whose s. 63(4) appeal is pending or whose time to appeal has not expired.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 31(3)(c) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-31.html',
    checked: '2026-11-22',
  },
  caPrIadGrounds: {
    id: 'ca.pr.iad-grounds',
    claim:
      'The IAD may allow an appeal if the decision was wrong in law or fact, if natural justice was not observed, or if humanitarian and compassionate considerations warrant special relief. Judicial review in the Federal Court needs leave and is available only once appeal rights are exhausted.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, ss. 67(1) and 72(1)-(2)(a); IRB, Appealing a residency obligation decision made outside Canada (modified 2023-03-22)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-67.html',
    checked: '2026-11-22',
  },
  caPrRenounce: {
    id: 'ca.pr.renounce',
    claim:
      'A PR can apply to renounce from outside Canada by sending the application to the visa office responsible for their country of citizenship or legal residence. Status ends when an officer approves it, and it cannot be appealed to the IAD.',
    provenance: 'primary',
    source: 'IRCC, Guide 5781: Applying to voluntarily renounce PR status (modified 2025-06-19); IRPA s. 46(1)(e)',
    sourceUrl: 'https://ircc.canada.ca/english/information/applications/guides/5781ETOC.asp',
    checked: '2026-11-22',
  },
  caPrSponsorResidence: {
    id: 'ca.pr.sponsor-residence',
    claim:
      'A sponsor must reside in Canada; only a Canadian citizen living abroad may sponsor a spouse, partner or dependent child, and only if they will reside in Canada when the person becomes a PR. The exception does not cover permanent residents.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 130 (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-130.html',
    checked: '2026-11-22',
  },
  nocVersionSwitch: {
    id: 'noc.ircc.version',
    claim:
      'IRCC has used NOC 2021 Version 1.0 since 16 November 2022.',
    provenance: 'primary',
    source: 'IRCC, Find your National Occupational Classification (NOC) (page details 2025-06-27)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/find-national-occupation-code.html',
    checked: '2026-11-22',
  },
  nocTeerDescriptions: {
    id: 'noc.teer.descriptions',
    claim:
      'TEER 0: management jobs. TEER 1: a university degree. TEER 2: a college diploma, 2 or more years of apprenticeship, or a supervisory job. TEER 3: a college diploma, under 2 years of apprenticeship, or over 6 months’ on-the-job training. TEER 4: a high school diploma or several weeks’ on-the-job training. TEER 5: a short work demonstration and no formal education.',
    provenance: 'primary',
    source: 'IRCC, Find your National Occupational Classification (NOC) (page details 2025-06-27)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/find-national-occupation-code.html',
    checked: '2026-11-22',
  },
  nocStructure: {
    id: 'noc.structure',
    claim:
      'NOC 2021 Version 1.0 has 516 unit groups, each with a five-digit code; the first digit is the broad occupational category and the second is the TEER category.',
    provenance: 'primary',
    source: 'Statistics Canada, NOC 2021 Version 1.0: introduction (modified 2023-09-14)',
    sourceUrl: 'https://www.statcan.gc.ca/en/subjects/standard/noc/2021/introductionV1',
    checked: '2026-11-22',
  },
  nocSupervisors: {
    id: 'noc.conventions.supervisors',
    claim:
      'Statistics Canada generally classifies supervisors with the workers they supervise, with some exceptions.',
    provenance: 'primary',
    source: 'Statistics Canada, NOC 2021 Version 1.0: introduction (modified 2023-09-14)',
    sourceUrl: 'https://www.statcan.gc.ca/en/subjects/standard/noc/2021/introductionV1',
    checked: '2026-11-22',
  },
  fswWorkRule: {
    id: 'ee.fsw.work',
    claim:
      'The Federal Skilled Worker Program needs one continuous year of full-time work, or the part-time equivalent, within the last 10 years, in TEER 0 to 3, in the code named as the primary occupation, having performed the lead statement and a substantial number of the main duties, including all essential duties.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 75(2)(a)–(c) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html',
    checked: '2026-11-22',
    note: 'IRCC’s FSW page (page details 2026-11-18) says the same.',
  },
  fswRefusal: {
    id: 'ee.fsw.refusal',
    claim:
      'A Federal Skilled Worker application that fails the minimum requirements is refused.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 75(3) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html',
    checked: '2026-11-22',
  },
  cecWorkRule: {
    id: 'ee.cec.work',
    claim:
      'The Canadian Experience Class needs one year of full-time work, or the part-time equivalent, in Canada within the last 3 years, in TEER 0 to 3, with the same duties test.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 87.1(2) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.1.html',
    checked: '2026-11-22',
    note: 'IRCC’s CEC page (page details 2026-11-18) says the same.',
  },
  fstWorkRule: {
    id: 'ee.fst.work',
    claim:
      'The Federal Skilled Trades Program needs two years of full-time work, or the part-time equivalent, in one skilled trade within the last 5 years. The trades are NOC Major Groups 72 (not 726), 73, 82, 83, 92 and 93 (not 932), Minor Group 6320 and Unit Group 62200. The duties test and the NOC’s employment requirements apply.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 87.2(1) and (3) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.2.html',
    checked: '2026-11-22',
    note: 'Every FST group has 2 or 3 as its TEER digit, so TEER 4 and 5 work counts for no Express Entry programme (our reading of ss. 75, 87.1 and 87.2).',
  },
  fullTime30: {
    id: 'ee.fulltime',
    claim:
      'Full-time work means at least 30 hours a week.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 73(1) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-73.html',
    checked: '2026-11-22',
    note: 'Also Ministerial Instructions ss. 15.2(3) and 25(3), for CRS purposes.',
  },
  crsForeignWorkNoc: {
    id: 'crs.foreignWork.noc',
    claim:
      'Work outside Canada earns CRS points only in TEER 0 to 3; the profile must give the five-digit NOC code for each job, and the lead statement and main duties test applies.',
    provenance: 'primary',
    source: 'Ministerial Instructions respecting the Express Entry system, s. 25(1)–(2) (signed 17 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-22',
  },
  crsOfferTeer: {
    id: 'crs.jobOffer.teer',
    claim:
      'A qualifying job offer must be in TEER 0 to 3 or a skilled trade, for full-time work lasting at least a year.',
    provenance: 'primary',
    source: 'Ministerial Instructions respecting the Express Entry system, s. 15.2(2)–(3) (signed 17 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-22',
  },
  crsOfferPoints: {
    id: 'crs.jobOffer.points',
    claim:
      'A qualifying job offer earns 100, 70 or 50 CRS points if its code is on the high-wage list at the 2 times, 1.5 times or 1.3 times median-wage level, read from the list in force when the invitation is issued.',
    provenance: 'primary',
    source: 'Ministerial Instructions respecting the Express Entry system, ss. 1 and 15.2(1) (signed 17 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-22',
  },
  highWageBasis: {
    id: 'crs.highWage.basis',
    claim:
      'The high-wage list came into effect on 3 November 2026; the level belongs to the NOC code, not to a person’s salary, and IRCC keeps the level that applied on the date it invited you.',
    provenance: 'primary',
    source: 'IRCC, High-wage occupations (page details 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html',
    checked: '2026-11-22',
  },
  highWageCodes: {
    id: 'crs.highWage.codes',
    claim:
      'At least 2 times: 10021, 31102, 41200, 60010. 1.5 to under 2 times: 21231, 21232, 21300, 21301, 21310, 31120, 31301, 41220, 41221. 1.3 to under 1.5 times: 11100. Not listed: 12101, 62200, 63102, 63200, 64400, 72106, 72200, 73300.',
    provenance: 'primary',
    source: 'IRCC, High-wage occupations (list in effect 3 November 2026; page details 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html',
    checked: '2026-11-22',
    note: 'Alternates named in the table: 11200 and 72201 are at 1.3 times; 12200 is not listed. Re-check monthly and whenever IRCC updates the list.',
  },
  categorySingleOccupation: {
    id: 'ee.categories.singleOccupation',
    claim:
      'For occupation categories, the experience must be in a single listed occupation, no matter your primary occupation.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Category-based selection (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-22',
    note: 'The page also sets 12 months in the past 3 years; not printed, because it is set in round instructions we did not read.',
  },
  categoryExamples: {
    id: 'ee.categories.examples',
    claim:
      'On 22 November 2026 the category lists included civil, mechanical and electrical engineers (21300, 21301, 21310), nurses (31301), family doctors (31102), pharmacists (31120), school teachers (41220, 41221), electricians (72200, 72201) and welders (72106). Software engineers and developers (21231, 21232), truck drivers (73300), chefs (62200) and cooks (63200) were on none.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Category-based selection (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-22',
    note: 'Re-check monthly. The site’s /express-entry/category-based-draws page deliberately names no categories; this page names dated examples.',
  },
  jobOfferNocInProfile: {
    id: 'ee.jobOffer.noc',
    claim:
      'A new job offer must be added to the Express Entry profile with its start date, employer name and address, and NOC code.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Job offer (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html',
    checked: '2026-11-22',
  },
  referenceLetterContents: {
    id: 'ee.documents.referenceLetter',
    claim:
      'IRCC accepts reference letters from employers, with your job duties, the dates you worked there and your salary, as proof of work experience.',
    provenance: 'primary',
    source: 'IRCC, Your IRCC application: Supporting documents (page details 2026-04-23)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/common-supporting-documents.html',
    checked: '2026-11-22',
  },
  misrepFiveYears: {
    id: 'irpa.s40.fiveYears',
    claim:
      'A misrepresentation finding makes a person inadmissible for five years, and they may not apply for permanent residence in that time.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 40(1)(a), (2)(a) and (3) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html',
    checked: '2026-11-22',
  },
  regulatedLicence: {
    id: 'esdc.fcr.licence',
    claim:
      'People trained abroad need a licence or certification before working in a regulated job or trade, through the province or territory where they will work; Canadian job titles can differ from other countries’.',
    provenance: 'primary',
    source: 'ESDC, Foreign credential recognition (page details 2026-11-12)',
    sourceUrl: 'https://www.canada.ca/en/employment-social-development/programs/foreign-credential-recognition.html',
    checked: '2026-11-22',
  },
  noc21231: {
    id: 'noc.unit.21231',
    claim:
      'NOC 21231 is “Software engineers and designers”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 21231',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=21231&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: licensing only to approve engineering drawings and reports and to practise as a P.Eng..',
  },
  noc21232: {
    id: 'noc.unit.21232',
    claim:
      'NOC 21232 is “Software developers and programmers”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 21232',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=21232&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: no licence listed.',
  },
  noc11100: {
    id: 'noc.unit.11100',
    claim:
      'NOC 11100 is “Financial auditors and accountants”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 11100',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=11100&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: certification for CPA designations; licensing usually required for public accounting.',
  },
  noc63102: {
    id: 'noc.unit.63102',
    claim:
      'NOC 63102 is “Financial sales representatives”, TEER 3.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 63102',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=63102&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: securities registration and a mutual funds licence usually required; example titles include loan officer, credit officer and personal banker.',
  },
  noc64400: {
    id: 'noc.unit.64400',
    claim:
      'NOC 64400 is “Customer services representatives - financial institutions”, TEER 4.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 64400',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=64400&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: no licence listed.',
  },
  noc10021: {
    id: 'noc.unit.10021',
    claim:
      'NOC 10021 is “Banking, credit and other investment managers”, TEER 0.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 10021',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=10021&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: no licence listed.',
  },
  noc21300: {
    id: 'noc.unit.21300',
    claim:
      'NOC 21300 is “Civil engineers”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 21300',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=21300&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: P.Eng. licence to approve drawings and practise.',
  },
  noc21310: {
    id: 'noc.unit.21310',
    claim:
      'NOC 21310 is “Electrical and electronics engineers”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 21310',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=21310&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: P.Eng. licence to approve drawings and practise.',
  },
  noc21301: {
    id: 'noc.unit.21301',
    claim:
      'NOC 21301 is “Mechanical engineers”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 21301',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=21301&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: P.Eng. licence to approve drawings and practise.',
  },
  noc31301: {
    id: 'noc.unit.31301',
    claim:
      'NOC 31301 is “Registered nurses and registered psychiatric nurses”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 31301',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=31301&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: registration with a regulatory body required in all provinces and territories (registered nurses).',
  },
  noc31102: {
    id: 'noc.unit.31102',
    claim:
      'NOC 31102 is “General practitioners and family physicians”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 31102',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=31102&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: Medical Council of Canada (or Collège des médecins du Québec) qualifying exams and provincial licensing required.',
  },
  noc31120: {
    id: 'noc.unit.31120',
    claim:
      'NOC 31120 is “Pharmacists”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 31120',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=31120&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: licensure required in all provinces and territories for community and hospital pharmacists.',
  },
  noc41220: {
    id: 'noc.unit.41220',
    claim:
      'NOC 41220 is “Secondary school teachers”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 41220',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=41220&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: provincial teaching certificate required.',
  },
  noc41221: {
    id: 'noc.unit.41221',
    claim:
      'NOC 41221 is “Elementary school and kindergarten teachers”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 41221',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=41221&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: provincial teaching certificate required.',
  },
  noc41200: {
    id: 'noc.unit.41200',
    claim:
      'NOC 41200 is “University professors and lecturers”, TEER 1.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 41200',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=41200&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: licences may be required in some professionally regulated fields.',
  },
  noc60010: {
    id: 'noc.unit.60010',
    claim:
      'NOC 60010 is “Corporate sales managers”, TEER 0.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 60010',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=60010&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: no licence listed.',
  },
  noc12101: {
    id: 'noc.unit.12101',
    claim:
      'NOC 12101 is “Human resources and recruitment officers”, TEER 2.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 12101',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=12101&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: no licence listed; CHRP may be required.',
  },
  noc72200: {
    id: 'noc.unit.72200',
    claim:
      'NOC 72200 is “Electricians (except industrial and power system)”, TEER 2.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 72200',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=72200&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: trade certification compulsory for construction electricians in most provinces.',
  },
  noc72106: {
    id: 'noc.unit.72106',
    claim:
      'NOC 72106 is “Welders and related machine operators”, TEER 2.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 72106',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=72106&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: trade certification compulsory in Alberta, voluntary elsewhere.',
  },
  noc73300: {
    id: 'noc.unit.73300',
    claim:
      'NOC 73300 is “Transport truck drivers”, TEER 3.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 73300',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=73300&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: Class 3 or D licence for straight-body trucks; Class 1 or A for long combination vehicles; air brake endorsement where fitted.',
  },
  noc62200: {
    id: 'noc.unit.62200',
    claim:
      'NOC 62200 is “Chefs”, TEER 2.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 62200',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=62200&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: cook’s trade certification or equivalent credentials, training and experience required.',
  },
  noc63200: {
    id: 'noc.unit.63200',
    claim:
      'NOC 63200 is “Cooks”, TEER 3.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit group 63200',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=63200&version=2021.0',
    checked: '2026-11-22',
    note: 'Employment requirements: trade certification available but voluntary.',
  },
  caRuralMadePermanent: {
    id: 'ca.rural.permanent',
    claim:
      'On 9 November 2026, IRCC announced it had made the Rural Community Immigration Pilot a permanent programme.',
    provenance: 'primary',
    source: 'IRCC news release, Canada creates a permanent immigration pathway to help rural communities attract and retain talent (9 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/11/canada-creates-a-permanent-immigration-pathway-to-help-rural-communities-attract-and-retain-talent0.html',
    checked: '2026-11-22',
    note: 'Release wording: the government \'has made the Rural Community Immigration Pilot a permanent program\'. The backgrounder names it the Rural Community Immigration Program: https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/11/overview-of-the-rural-community-immigration-program.html',
  },
  caRuralPilotCloses: {
    id: 'ca.rural.pilotCloses',
    claim:
      'IRCC’s pages say the pilot closes on 1 January 2027.',
    provenance: 'primary',
    source: 'IRCC, Rural Community Immigration Pilot (page dated 2026-11-09)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration.html',
    checked: '2026-11-22',
    note: 'Page text: \'As of January 1, 2027, the Rural Community Immigration Pilot will close.\' Pilot status still shows \'Open\' on 22 November 2026.',
  },
  caRuralProgramOpens: {
    id: 'ca.rural.programOpens',
    claim:
      'The Rural Community Immigration Program opens on 1 January 2027, when the pilot closes.',
    provenance: 'primary',
    source: 'IRCC, Rural Community Immigration Program (page dated 2026-11-09)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration-program.html',
    checked: '2026-11-22',
    note: 'Status line on the page: \'Program opens January 1, 2027\'. The news release and backgrounder give no start date.',
  },
  caRuralPilotRecommendations: {
    id: 'ca.rural.pilotRecommendations',
    claim:
      'If you hold a rural pilot recommendation dated 31 December 2026 or earlier, IRCC says you must apply for permanent residence before it expires. IRCC will keep processing pilot applications it has already received.',
    provenance: 'primary',
    source: 'IRCC, Rural Community Immigration Pilot (page dated 2026-11-09)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration.html',
    checked: '2026-11-22',
    note: 'Same wording on the pilot\'s job-offer page. IRCC does not say a pilot recommendation can be used for the new programme; the page points people without a pilot recommendation to the programme.',
  },
  caRuralCommunitiesContinue: {
    id: 'ca.rural.communities',
    claim:
      'On 9 November 2026, IRCC said the permanent rural programme intends to keep the pilot’s communities and add more later. Criteria for new communities will come in a future announcement.',
    provenance: 'primary',
    source: 'IRCC news release, Canada creates a permanent immigration pathway to help rural communities attract and retain talent (9 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/11/canada-creates-a-permanent-immigration-pathway-to-help-rural-communities-attract-and-retain-talent0.html',
    checked: '2026-11-22',
    note: 'Release: \'The program intends to continue with the 14 communities currently taking part in the pilot\', expansion planned. The count is not printed on the page, which deliberately names no communities.',
  },
  caRuralDesignationsUnstated: {
    id: 'ca.rural.designationsUnstated',
    claim:
      'As of 22 November 2026, its pages do not say whether pilot employer designations carry over to the programme, so ask the community.',
    provenance: 'primary',
    source: 'IRCC, Hire through the rural and Francophone community immigration pilots or program (page dated 2026-11-09)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/hire.html',
    checked: '2026-11-22',
    note: 'A statement of absence. Also checked: the news release, the backgrounder, the hub page, the pilot page and the programme\'s main, eligibility and job-offer pages. None says whether pilot designations carry over. Re-check when IRCC publishes employer guidance for the programme.',
  },
  caFrancophonePilotOpen: {
    id: 'ca.francophone.stillPilot',
    claim:
      'The Francophone Community Immigration Pilot … is not mentioned in that announcement. As of 22 November 2026, IRCC still lists it as an open pilot.',
    provenance: 'primary',
    source: 'IRCC, Francophone Community Immigration Pilot (page dated 2026-04-30)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/franco-immigration.html',
    checked: '2026-11-22',
    note: 'Page status \'Open\', no end date or change notice. The 9 November 2026 release mentions the Francophone pilot only as a linked 2025 release.',
  },
  caRuralEmployerSendsRecommendation: {
    id: 'ca.rural.recommendationProcess',
    claim:
      'Once you hold a valid offer, IRCC says the designated employer sends your recommendation application to the community. The community checks the job is in a priority sector or occupation, the offer is real and you meet the requirements.',
    provenance: 'primary',
    source: 'IRCC, Rural Community Immigration Program: Get a job offer and a community recommendation (page dated 2026-11-09)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration-program/job-offer.html',
    checked: '2026-11-22',
    note: 'The same process is on the pilot\'s job-offer page and the Francophone pilot\'s job-offer page (https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/franco-immigration/job-offer.html, dated 2025-08-19). The old page wrongly said the candidate applies to the community.',
  },

  // ── BLOG POSTS AND GUIDES OF 22 NOVEMBER 2026 ──────────────────────────────────────
  dkStudyRulesOct2026InForce: {
    id: 'dk.study.rules.2026.inForce',
    claim:
      'New rules for students in state-approved programmes took effect on 1 October 2026; the date the application is submitted, not the decision date, decides which rules apply.',
    provenance: 'primary',
    source: 'SIRI news, 30-09-2026; BEK nr 829 af 24/09/2026 § 17(1)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende',
    checked: '2026-11-22',
  },
  dkStudyRulesScope: {
    id: 'dk.study.rules.2026.scope',
    claim:
      'The rules cover students from outside the EU, EEA and Switzerland, so they cover Pakistani citizens; SIRI names an exception only for Turkish citizens under the EU–Turkey Association Agreement.',
    provenance: 'primary',
    source: 'SIRI news, 30-09-2026; SIRI Higher educational programmes (last updated 01-10-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende',
    checked: '2026-11-22',
    note: 'SIRI calls them third-country students; its higher education page says EU/EEA and Swiss citizens need an EU residence document instead.',
  },
  dkStudyJobSeekingOneYear: {
    id: 'dk.study.jobSeeking.oneYear',
    claim:
      'After a state-approved bachelor’s, professional bachelor’s or master’s, students who applied on or after 1 October 2026 get up to 1 year to look for work.',
    provenance: 'primary',
    source: 'BEK nr 829 af 24/09/2026 § 5(2) and § 17(3); SIRI job-seeking page (last updated 01-10-2026)',
    sourceUrl: 'https://www.retsinformation.dk/eli/lta/2026/829',
    checked: '2026-11-22',
    note: 'SIRI also lists part-time master’s in this group.',
  },
  dkStudyJobSeekingThreeYearsBefore: {
    id: 'dk.study.jobSeeking.threeYearsBefore',
    claim:
      'Students who applied before 1 October 2026 keep up to 3 years; the Executive Order keeps the old job-seeking rule for anyone who applied for, or was granted, a student permit before that date.',
    provenance: 'primary',
    source: 'BEK nr 829 af 24/09/2026 § 17(3); BEK nr 950 af 25/06/2025 § 5(2)',
    sourceUrl: 'https://www.retsinformation.dk/eli/lta/2026/829',
    checked: '2026-11-22',
  },
  dkStudyJobSeekingSince2023: {
    id: 'dk.study.jobSeeking.history2023',
    claim:
      'The 3-year job-seeking period dated from 1 April 2023; before that, graduates got 6 months.',
    provenance: 'primary',
    source: 'SIRI news, New possibilities in the areas of work and study from 1 April 2023 (updated 03-07-2023)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2023/03/L46-news-2',
    checked: '2026-11-22',
  },
  dkStudyJobSeekingSixMonths: {
    id: 'dk.study.jobSeeking.sixMonths',
    claim:
      'An academy profession (AP) degree or a master’s for working professionals gives 6 months, unchanged by the October 2026 rules.',
    provenance: 'primary',
    source: 'BEK nr 829 af 24/09/2026 § 5(1); SIRI 6-month job-seeking page (last updated 01-10-2026)',
    sourceUrl: 'https://www.retsinformation.dk/eli/lta/2026/829',
    checked: '2026-11-22',
  },
  dkStudyPhdUnchanged: {
    id: 'dk.study.phd.unchanged',
    claim:
      'PhD students are not affected: up to 3 years to look for work, and their family can join them.',
    provenance: 'primary',
    source: 'BEK nr 829 af 24/09/2026 § 5(3) and § 10(1); SIRI news, 30-09-2026',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende',
    checked: '2026-11-22',
  },
  dkStudyFamilyBarred: {
    id: 'dk.study.family.barred',
    claim:
      'From 1 October 2026 the Executive Order gives family permits to the family of PhD students and of people seeking a Danish professional authorisation, not other students; this covers spouses, registered and cohabiting partners, and children under 18.',
    provenance: 'primary',
    source: 'BEK nr 829 af 24/09/2026 § 10(1); SIRI Accompanying family to students and PhD students',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Family/Accompanying-family-members/Accompanying-family---study-and-PhD/',
    checked: '2026-11-22',
  },
  dkStudySpouseTransition: {
    id: 'dk.study.family.spouseTransition',
    claim:
      'A spouse or partner can still get a family permit only if both the student and the spouse applied before 1 October 2026.',
    provenance: 'primary',
    source: 'SIRI news, 30-09-2026; BEK nr 829 af 24/09/2026 § 17(4)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende',
    checked: '2026-11-22',
  },
  dkStudyChildTransition: {
    id: 'dk.study.family.childTransition',
    claim:
      'A child under 18 can still get a family permit, even if the child applies later, if the student applied before 1 October 2026.',
    provenance: 'primary',
    source: 'SIRI news, 30-09-2026; BEK nr 829 af 24/09/2026 § 17(4)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende',
    checked: '2026-11-22',
  },
  dkStudyWorkHours: {
    id: 'dk.study.work.hours',
    claim:
      'Most students may work up to 90 hours a month, counted per calendar month, and full time in June, July and August; SIRI applies the 90 hours to the normal study period, September to May. The October 2026 change did not alter this.',
    provenance: 'primary',
    source: 'BEK nr 829 af 24/09/2026 § 16(1); SIRI Higher educational programmes (last updated 01-10-2026)',
    sourceUrl: 'https://www.retsinformation.dk/eli/lta/2026/829',
    checked: '2026-11-22',
    note: 'Students on a master’s for working professionals have a different limit under § 16(2); the post says “most students”.',
  },
  dkStudyWorkPre2024: {
    id: 'dk.study.work.pre2024',
    claim:
      'Work permits issued before 1 July 2024 were written as 20 hours a week, and their holders may use either measure.',
    provenance: 'primary',
    source: 'BEK nr 829 af 24/09/2026 § 17(8)',
    sourceUrl: 'https://www.retsinformation.dk/eli/lta/2026/829',
    checked: '2026-11-22',
  },
  dkStudyIllegalWork: {
    id: 'dk.study.work.illegal',
    claim:
      'Working beyond the limit is illegal work, which SIRI says can lead to a warning, a fine or the loss of the permit.',
    provenance: 'primary',
    source: 'SIRI Higher educational programmes (last updated 01-10-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-education',
    checked: '2026-11-22',
  },
  dkStudyUnlimitedWorkPermit: {
    id: 'dk.study.work.unlimitedDuringJobSeeking',
    claim:
      'Graduates of a bachelor’s, professional bachelor’s, master’s or PhD can apply for a work permit without limitations for the job-seeking period; AP graduates cannot.',
    provenance: 'primary',
    source: 'SIRI Work permit during the job seeking period (last updated 01-10-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Work-permit--job-seeking/',
    checked: '2026-11-22',
  },
  dkStudyJobOffer: {
    id: 'dk.study.jobSeeking.jobOffer',
    claim:
      'A job offer during the job-seeking period lets the graduate apply for a new residence and work permit.',
    provenance: 'primary',
    source: 'SIRI Higher educational programmes (last updated 01-10-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-education',
    checked: '2026-11-22',
  },
  dkStudyStartUpAfterStudy: {
    id: 'dk.study.startUp',
    claim:
      'A business started in Denmark may qualify for Start-up Denmark, which SIRI says can cover a business already set up while living in Denmark on other grounds.',
    provenance: 'primary',
    source: 'SIRI Start-up Denmark (last updated 29-06-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark',
    checked: '2026-11-22',
    note: 'The business still needs expert-panel approval; the post says “may qualify”.',
  },
  dkStudyChangeProgramme: {
    id: 'dk.study.changeProgramme',
    claim:
      'Changing programme needs a new residence permit application.',
    provenance: 'primary',
    source: 'SIRI Higher educational programmes (last updated 01-10-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-education',
    checked: '2026-11-22',
    note: 'Our own suggestion follows: ask SIRI how the date rule applies before switching. Neither SIRI nor the Executive Order says how § 17(3) treats a new application for a new programme.',
  },
  dkStudyNonStateMay2025: {
    id: 'dk.study.nonStateApproved.may2025',
    claim:
      'Students who applied for a non-state-approved programme from 2 May 2025 get no right to work, no job-seeking permit and no family permits; those who applied earlier keep a limited work permit, 6 months’ job seeking and family rights.',
    provenance: 'primary',
    source: 'BEK nr 423 af 30/04/2025 (in force 2 May 2025); BEK nr 829 af 24/09/2026 § 16(6) and § 17(5); SIRI news, 01-05-2025 (updated 25-04-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2025/05/Nye-regler-ikkestatsligt-godkendte-udd',
    checked: '2026-11-22',
  },
  dkStudyNonStatePurpose: {
    id: 'dk.study.nonStateApproved.purpose',
    claim:
      'SIRI says the aim of the 2025 change is to grant permits only to students whose real intention is to study in Denmark.',
    provenance: 'primary',
    source: 'SIRI news, 01-05-2025 (updated 25-04-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2025/05/Nye-regler-ikkestatsligt-godkendte-udd',
    checked: '2026-11-22',
  },
  dkStudyAccreditation: {
    id: 'dk.study.nonStateApproved.accreditation',
    claim:
      'Since 15 September 2026, advisory statements for non-state-approved programmes come from the secretariat to the Danish Accreditation Council; the Danish Evaluation Institute (EVA) closed on 1 July 2026.',
    provenance: 'primary',
    source: 'SIRI Higher educational programmes (last updated 01-10-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-education',
    checked: '2026-11-22',
  },
  dkStudyPakistanSubmission: {
    id: 'dk.study.pakistan.submission',
    claim:
      'The Danish Embassy in Islamabad says residence-permit applications, including for study, are handed in in person at the Gerry’s/VFS visa centre.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Residence permit',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/',
    checked: '2026-11-22',
  },
  dkJobSeekingPermitScope: {
    id: 'dk.work.jobSeekingPermit.scope',
    claim:
      'SIRI’s job-seeking permit is a residence permit to find work after an original Danish permit expires. It is open only to holders of certain permits: employees on the Pay Limit Scheme, the Positive List for People with a Higher Education, the Researcher Scheme or some Fast-Track tracks who lose their job through no fault of their own; graduates of state-approved Danish higher education or a PhD; and holders of a permit to gain a Danish authorisation.',
    provenance: 'primary',
    source: 'SIRI, Job seeking permit (last updated 18-06-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Jobseeking-permit/',
    checked: '2026-11-22',
    note: 'That page still says “6 months or up to 3 years” for students; the 1 October 2026 change is on SIRI’s newer study pages. The post prints no length for the employee permit.',
  },
  dkWorkNeedsPermit: {
    id: 'dk.work.permitRequired',
    claim:
      'SIRI says anyone who wants to work in Denmark must apply for a residence and work permit.',
    provenance: 'primary',
    source: 'SIRI, You want to apply for a work permit',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work',
    checked: '2026-11-22',
  },
  dkGreencardRepealAct: {
    id: 'dk.greencard.repealAct',
    claim:
      'Act no. 612 of 8 June 2016 repealed the Greencard scheme; it took effect on 10 June 2016 and does not apply to applications filed before that date.',
    provenance: 'primary',
    source: 'LOV nr 612 af 08/06/2016 (Ophævelse af greencardordningen), § 2(1) and (2)',
    sourceUrl: 'https://www.retsinformation.dk/eli/lta/2016/612',
    checked: '2026-11-22',
  },
  dkGreencardSiriNotice: {
    id: 'dk.greencard.siriNotice',
    claim:
      'SIRI confirms that no new Greencard applications could be made from 10 June 2016.',
    provenance: 'primary',
    source: 'SIRI news, Bill to repeal the Greencard scheme has been passed (published 10-06-2016, updated 15-01-2018)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2018/01/Lovforslag-om-ophaevelse-af-greencard-ordningen-er-vedtaget',
    checked: '2026-11-22',
  },
  dkGreencardExtensionOnly: {
    id: 'dk.greencard.extensionOnly',
    claim:
      'SIRI says the Greencard scheme has been repealed but a valid Greencard permit can still be extended.',
    provenance: 'primary',
    source: 'SIRI, Greencard - extension (last updated 26-06-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-extend/Work---extension/Greencard',
    checked: '2026-11-22',
  },
  dkGreencardEmbassyPakistan: {
    id: 'dk.greencard.embassyPakistan',
    claim:
      'The Danish Embassy in Pakistan says Greencard applications are no longer accepted from 10 June 2016.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Greencard update',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/greencard-update/',
    checked: '2026-11-22',
  },
  dkEstablishmentCardAbolished: {
    id: 'dk.establishmentCard.abolished',
    claim:
      'The Establishment Card was abolished as a scheme on 1 April 2023, by Act no. 333 of 28 March 2023 on strengthened international recruitment; existing cards can still be extended.',
    provenance: 'primary',
    source: 'SIRI news, New possibilities in the areas of work and study from 1 April 2023; LOV nr 333 af 28/03/2023 § 2(1) and (2); SIRI Establishment card - extension (last updated 26-06-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2023/03/L46-news-2',
    checked: '2026-11-22',
  },
  dkEstablishmentCardGraduates: {
    id: 'dk.establishmentCard.graduates',
    claim:
      'The Establishment Card was a permit for people who had graduated in Denmark.',
    provenance: 'primary',
    source: 'SIRI, Establishment card - extension (last updated 26-06-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-extend/Work---extension/Establishment-card',
    checked: '2026-11-22',
    note: 'The page ties the card to “your Danish educational programme”.',
  },
  dk2023JobSeekingLonger: {
    id: 'dk.study.jobSeeking.2023package',
    claim:
      'The same 1 April 2023 package gave graduates a longer job-seeking permit, which Denmark shortened for students who apply from 1 October 2026 (up to 1 year after a state-approved bachelor’s or master’s).',
    provenance: 'primary',
    source: 'SIRI news, 1 April 2023; SIRI news, 30-09-2026; BEK nr 829 af 24/09/2026 § 5(2)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende',
    checked: '2026-11-22',
  },
  dkStudentFamilyBarred: {
    id: 'dk.study.family.barredCrossRef',
    claim:
      'Students who apply from 1 October 2026 for a state-approved bachelor’s or master’s cannot bring a spouse or children.',
    provenance: 'primary',
    source: 'SIRI news, 30-09-2026',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende',
    checked: '2026-11-22',
  },
  dkNonStateNoJobSeeking: {
    id: 'dk.study.nonStateApproved.noJobSeeking',
    claim:
      'Students at a non-state-approved programme who applied from 2 May 2025 get no job-seeking permit.',
    provenance: 'primary',
    source: 'SIRI news, 01-05-2025 (updated 25-04-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2025/05/Nye-regler-ikkestatsligt-godkendte-udd',
    checked: '2026-11-22',
  },
  dkPayLimitScheme: {
    id: 'dk.work.payLimit',
    claim:
      'The Pay Limit Scheme needs a job offer with an annual salary at or above SIRI’s minimum, which is adjusted each 1 January; no specific education or professional field is required.',
    provenance: 'primary',
    source: 'SIRI, The Pay Limit Scheme (last updated 22-09-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme',
    checked: '2026-11-22',
    note: 'Salary floor not printed: it appears only on SIRI’s page.',
  },
  dkSupplementaryPayLimit: {
    id: 'dk.work.supplementaryPayLimit',
    claim:
      'The Supplementary Pay Limit Scheme has a lower salary floor and extra conditions; the job must first be advertised on Jobnet and the EURES portal.',
    provenance: 'primary',
    source: 'SIRI, The Supplementary Pay Limit Scheme (last updated 14-09-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Pay-Limit-Schemes/Supplementary-Pay-Limit-scheme/',
    checked: '2026-11-22',
  },
  dkPositiveLists: {
    id: 'dk.work.positiveLists',
    claim:
      'The Positive Lists need a job offer in a profession on one of the two shortage lists (people with a higher education, or skilled work), and a qualification that fits the job.',
    provenance: 'primary',
    source: 'SIRI, The Positive Lists; Positive List for People with a Higher Education (last updated 01-10-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists',
    checked: '2026-11-22',
  },
  dkSkilledListApprentice: {
    id: 'dk.work.positiveList.skilled.employer',
    claim:
      'On the Positive List for Skilled Work, the employer must also have met its apprentice-training obligations.',
    provenance: 'primary',
    source: 'SIRI, The Positive List for Skilled Work (last updated 02-09-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists/Positive-List-for-skilled-work',
    checked: '2026-11-22',
  },
  dkFastTrack: {
    id: 'dk.work.fastTrack',
    claim:
      'The Fast-Track Scheme needs a job with a company SIRI has certified; the employer handles the application using a power of attorney from the employee.',
    provenance: 'primary',
    source: 'SIRI, Fast-Track Scheme (last updated 01-10-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track',
    checked: '2026-11-22',
  },
  dkCertifiedCompanies: {
    id: 'dk.work.fastTrack.certifiedList',
    claim:
      'SIRI publishes a list of companies certified under the Fast-Track Scheme.',
    provenance: 'primary',
    source: 'SIRI, Certified companies (last updated 21-10-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Certified-companies/',
    checked: '2026-11-22',
  },
  dkStartUpPanel: {
    id: 'dk.work.startUp.panel',
    claim:
      'Start-up Denmark needs approval of the business idea by an expert panel appointed by the Danish Business Authority before the SIRI application.',
    provenance: 'primary',
    source: 'SIRI, Start-up Denmark (last updated 29-06-2026)',
    sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark',
    checked: '2026-11-22',
  },
  dkEmbassyAgents: {
    id: 'dk.pakistan.embassy.agents',
    claim:
      'The Danish Embassy in Pakistan warns that agents charge high prices for false documents, which usually lead to refusal.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Residence permit',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/',
    checked: '2026-11-22',
  },
  dkEmbassyInPerson: {
    id: 'dk.pakistan.embassy.inPerson',
    claim:
      'The Danish Embassy in Islamabad says work applications are submitted in person at the Gerry’s/VFS visa centre, and the embassy forwards them to Denmark for a decision.',
    provenance: 'primary',
    source: 'Embassy of Denmark in Pakistan, Residence permit',
    sourceUrl: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/',
    checked: '2026-11-22',
    note: 'The same page still lists the Green Card Scheme among permit types; that line is out of date and the post does not repeat it.',
  },

  // ── BLOG POSTS OF 23 NOVEMBER 2026 (batch 28) ─────────────────────────────────────────
  caNsnpStreams2026: {
    id: 'ca.pnp.ns-2026.streams',
    claim:
      'As of 23 November 2026, the Nova Scotia Nominee Program has four streams: Skilled Worker, Nova Scotia Graduate, Entrepreneur and Nova Scotia: Express Entry.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Nova Scotia Nominee Program',
    sourceUrl: 'https://liveinnovascotia.com/nova-scotia-nominee-program',
    checked: '2026-11-23',
  },
  caNsnpConsolidation: {
    id: 'ca.pnp.ns-2026.consolidation',
    claim:
      'On 18 February 2026 ten streams merged into four; Nova Scotia said the old eligibility rules carried over as sub-criteria. Critical Construction Worker Pilot and Physician went into Skilled Worker; International Graduates in Demand into Nova Scotia Graduate; International Graduate Entrepreneur into Entrepreneur; Nova Scotia Experience: Express Entry, Labour Market Priorities and Labour Market Priorities for Physicians into Nova Scotia: Express Entry.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, NSNP Update: Four Consolidated Streams (18 February 2026)',
    sourceUrl: 'https://liveinnovascotia.com/resources/nsnp-update-four-consolidated-streams',
    checked: '2026-11-23',
  },
  caNsnpEoiProcess: {
    id: 'ca.pnp.ns-2026.eoi-process',
    claim:
      'Since 28 November 2025 every NSNP stream (and AIP designations and endorsements) uses a formal expression of interest process; EOIs are full submissions and an incomplete EOI is closed.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Processing Policy: Expression of Interest (28 November 2025); Nova Scotia Nominee Program page',
    sourceUrl: 'https://liveinnovascotia.com/eoi-process',
    checked: '2026-11-23',
  },
  caNsnpSelection: {
    id: 'ca.pnp.ns-2026.selection',
    claim:
      'Selection factors include labour market needs, occupation, likely retention, intended region and status in Canada; selection is not first come, first served; a selected candidate has 7 calendar days to review the application, upload updated documents and pay the fee.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Nova Scotia Nominee Program',
    sourceUrl: 'https://liveinnovascotia.com/nova-scotia-nominee-program',
    checked: '2026-11-23',
  },
  caNsnpEoiValidity: {
    id: 'ca.pnp.ns-2026.eoi-validity',
    claim:
      'From 1 May 2026 new EOIs expire after 12 months; EOIs submitted before 1 May 2024 were closed; EOIs submitted between 1 May 2024 and 30 April 2026 expire on 30 April 2027 if not selected; an expired or closed EOI is not a refusal.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, EOI Validity Period and Transition Measures (27 April 2026)',
    sourceUrl: 'https://liveinnovascotia.com/resources/expression-interest-eoi-validity-period-and-transition-measures',
    checked: '2026-11-23',
  },
  caNsnpFees: {
    id: 'ca.pnp.ns-2026.fees',
    claim:
      'From 1 September 2026, N.S. Reg. 181/2026 sets the fee at $1,000 (Canadian) for a worker stream and $2,000 for an entrepreneur stream.',
    provenance: 'primary',
    source: 'Royal Gazette Part II, Vol. 50, No. 17 (21 August 2026), N.S. Reg. 181/2026, made by Order in Council 2026-255 under s. 2(1) of the Costs and Fees Act, effective on and after 1 September 2026',
    sourceUrl: 'https://novascotia.ca/JuST/regulations/rg2/2026/RG2-2026-08-21.pdf',
    checked: '2026-11-23',
    note: 'Law. The regulation says \'worker stream\' and \'entrepreneur stream\' without naming streams; the fee notice names the worker streams as Skilled Worker, Nova Scotia Graduate and Nova Scotia: Express Entry.',
  },
  caNsnpFeeRules: {
    id: 'ca.pnp.ns-2026.fee-rules',
    claim:
      'Submitting an EOI is free, the fee is non-refundable, the fee is charged only once an EOI is selected for assessment, and it does not apply to the Atlantic Immigration Program (no provincial fee on 23 November 2026).',
    provenance: 'primary',
    source: 'Live in Nova Scotia, NSNP Update: Application Fees Effective September 1, 2026 (6 August 2026)',
    sourceUrl: 'https://liveinnovascotia.com/resources/nsnp-update-application-fees-effective-september-1-2026',
    checked: '2026-11-23',
  },
  caNsnpSelectionCounts: {
    id: 'ca.pnp.ns-2026.selection-counts',
    claim:
      'Nova Scotia\'s EOI selection page, last updated 19 November 2026, counts 363 candidates selected in January 2026 and 1,296 in October 2026, mostly from healthcare and skilled trades occupations.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, EOI Selection (last updated 19 November 2026)',
    sourceUrl: 'https://liveinnovascotia.com/eoi-selection',
    checked: '2026-11-23',
    note: 'Official statistic published by the province. Remove if the lead does not treat these administrative counts as statistics.',
  },
  caNsnpSkilledWorker: {
    id: 'ca.pnp.ns-2026.skilled-worker',
    claim:
      'Skilled Worker asks for a full-time, permanent Nova Scotia job offer; 1 year of related work experience, plus six months with the employer for TEER 4 or 5; age 21 to 55 and a high school diploma; CLB 5 for TEER 0–3 or CLB 4 for TEER 4–5 (test results needed even if English is the first language); enough financial resources to settle. Construction sub-criteria accept industry training in place of a diploma; physicians need an approved NSHA or IWK opportunity.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Skilled Worker',
    sourceUrl: 'https://liveinnovascotia.com/skilled-worker',
    checked: '2026-11-23',
  },
  caNsnpOccupationsInDemand: {
    id: 'ca.pnp.ns-2026.occupations-in-demand',
    claim:
      'The Skilled Worker page\'s Occupations in Demand tab listed no occupations on 23 November 2026.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Skilled Worker',
    sourceUrl: 'https://liveinnovascotia.com/skilled-worker',
    checked: '2026-11-23',
    note: 'Same URL as caNsnpSkilledWorker; tab content.',
  },
  caNsnpFoodServicesPause: {
    id: 'ca.pnp.ns-2026.food-services-pause',
    claim:
      'Since 17 April 2024 Nova Scotia has stopped accepting submissions in the Accommodation and Food Services sector; the notice was still on the Skilled Worker page on 23 November 2026.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Skilled Worker (notice dated 12 noon ADT, 17 April 2024)',
    sourceUrl: 'https://liveinnovascotia.com/skilled-worker',
    checked: '2026-11-23',
    note: 'The same notice is on the Nova Scotia: Express Entry page.',
  },
  caNsnpGraduate: {
    id: 'ca.pnp.ns-2026.graduate',
    claim:
      'Nova Scotia Graduate needs recent study at a Nova Scotia institution and a full-time, permanent Nova Scotia job offer in a listed occupation; it was open to four occupations (NOC 32102, 32124, 33102, 42202), in healthcare and early childhood education.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Nova Scotia Graduate',
    sourceUrl: 'https://liveinnovascotia.com/nova-scotia-graduate',
    checked: '2026-11-23',
  },
  caNsnpExpressEntry: {
    id: 'ca.pnp.ns-2026.express-entry',
    claim:
      'The main Nova Scotia: Express Entry route needs a year of work in Nova Scotia at TEER 0–3 and an Express Entry profile; its physician sub-criteria need an approved NSHA or IWK opportunity and a Letter of Interest.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Nova Scotia: Express Entry',
    sourceUrl: 'https://liveinnovascotia.com/express-entry',
    checked: '2026-11-23',
  },
  caNsnpPriorities: {
    id: 'ca.pnp.ns-2026.priorities',
    claim:
      'Under the 27 April 2026 priorities, healthcare and skilled trades jobs at TEER 0–4 may be considered for international applicants; other occupations are limited to temporary residents already living and working in Nova Scotia.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Nominee Program Priorities in Nova Scotia (27 April 2026)',
    sourceUrl: 'https://liveinnovascotia.com/resources/nominee-program-priorities-nova-scotia',
    checked: '2026-11-23',
  },
  caNsnpJuly2026: {
    id: 'ca.pnp.ns-2026.july-expansion',
    claim:
      'The 14 July 2026 update widened selection, as a one-time measure, only for people already living and working in Nova Scotia; for recruitment from abroad it kept the focus on healthcare, skilled trades and selected critical-service occupations.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, NSNP and AIP 2026 Selection Priorities (14 July 2026)',
    sourceUrl: 'https://liveinnovascotia.com/resources/update-nova-scotia-nominee-program-and-atlantic-immigration-program-2026-selection',
    checked: '2026-11-23',
  },
  caNsnp2025Update: {
    id: 'ca.pnp.ns-2025.update',
    claim:
      'On 17 July 2025 Nova Scotia said it had more applications than it could approve in 2025, and most applications from outside Canada in non-priority sectors would not be processed.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Nova Scotia Immigration Update – 2025 (17 July 2025)',
    sourceUrl: 'https://liveinnovascotia.com/resources/nova-scotia-immigration-update-2025',
    checked: '2026-11-23',
  },
  caNsnpCriticalVacancies: {
    id: 'ca.pnp.ns-2026.critical-vacancies',
    claim:
      'Nova Scotia searches the Express Entry pool for critical vacancies and says that contact is not an invitation to apply for a nomination.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Critical Vacancies',
    sourceUrl: 'https://liveinnovascotia.com/critical-vacancies',
    checked: '2026-11-23',
  },
  caNsnpEntrepreneur: {
    id: 'ca.pnp.ns-2026.entrepreneur',
    claim:
      'The Entrepreneur stream is by invitation: EOI, then Invitation to Apply; nomination may follow after a year running the business. It asks for age 21 or over, CLB 5 in all four skills, and 3 years owning and managing a business with at least one-third ownership or more than 5 years in senior management; it sets a minimum net worth and minimum personal investment, both lower outside Halifax Regional Municipality.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Entrepreneur',
    sourceUrl: 'https://liveinnovascotia.com/entrepreneur',
    checked: '2026-11-23',
    note: 'Net-worth and investment amounts deliberately not printed: they appear only on the stream page, not in a Nova Scotia regulation.',
  },
  caNsnpAfterNomination: {
    id: 'ca.pnp.ns-2026.after-nomination',
    claim:
      'A nominee applies to IRCC for permanent residence within 12 months of receiving the nominee certificate; the family must meet medical, security and criminal admissibility rules; IRCC makes the final decision.',
    provenance: 'primary',
    source: 'Live in Nova Scotia, Nova Scotia Nominee Program',
    sourceUrl: 'https://liveinnovascotia.com/nova-scotia-nominee-program',
    checked: '2026-11-23',
  },
  caPnpRoutesIrcc: {
    id: 'ca.pnp.ircc-routes',
    claim:
      'The province tells you which IRCC route to use (Express Entry or non-Express Entry), and IRCC\'s provincial nominee page describes both.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program (page details 2026-09-14)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
    checked: '2026-11-23',
  },
  caPnpExpressEntryPoints: {
    id: 'ca.ee.pnp-600',
    claim:
      'A nomination made through Express Entry is worth 600 points under section 28(1) of the Ministerial Instructions.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system (current; signed Ottawa, 17 November 2026; page details 2026-11-18), s. 28(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
    note: 'Ministerial Instructions. Read via the fetch tool; canada.ca did not answer curl.',
  },
  lmiaCodesChangedDec2022: {
    id: 'lmiaExempt.codes.changed2022',
    claim:
      'IRCC changed several codes and added new ones on 15 December 2022.',
    provenance: 'primary',
    source: 'IRCC, LMIA exemption codes – International Mobility Program (page details 2026-09-23)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes.html',
    checked: '2026-11-23',
    note: 'Page: \'There were several code changes and new codes added on December 15, 2022.\' Old codes are in a column headed \'December 14 and before\'.',
  },
  lmiaC12Replaced: {
    id: 'lmiaExempt.codes.c12',
    claim:
      'C12 was the intra-company transferee code until 14 December 2022; C61 (establishing a branch, subsidiary or affiliate), C62 (executives and managers) and C63 (specialised knowledge) replace it, all under section 205(a).',
    provenance: 'primary',
    source: 'IRCC, LMIA exemption codes list; Intra-company transferees (page details 2025-01-06)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/intra-company-transferees.html',
    checked: '2026-11-23',
  },
  lmiaIctOwnerMnc: {
    id: 'lmiaExempt.ict.ownerMultinational',
    claim:
      'IRCC says controlling owners who want to start a new business in Canada are not eligible as intra-company transferees unless their company is a multinational, with revenue-generating operations in a country other than its home country.',
    provenance: 'primary',
    source: 'IRCC, Intra-company transferees, C61 section, \'Owners/Operators\' (page details 2025-01-06)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/intra-company-transferees.html',
    checked: '2026-11-23',
  },
  lmiaC11: {
    id: 'lmiaExempt.codes.c11',
    claim:
      'C11 is for business owners seeking only temporary residence, under section 205(a); owners who intend to settle are assessed under C60 (provincial business candidates and Quebec self-employed) or A77 (start-up visa applicants).',
    provenance: 'primary',
    source: 'IRCC, Business owners seeking only temporary residence [R205(a) – C11] (page details 2025-05-27)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/entrepreneurs-self-employed-seeking-only-temp-residence-r205-c11.html',
    checked: '2026-11-23',
    note: 'The page sets no citizenship or nationality restriction.',
  },
  lmiaC10: {
    id: 'lmiaExempt.codes.c10',
    claim:
      'C10 is the general significant-benefit code under 205(a); IRCC describes it as flexibility for unique or exceptional situations, tells officers not to use it for convenience, and requires the benefit to be clear and documented.',
    provenance: 'primary',
    source: 'IRCC, Significant benefit to Canada [R205(a) – C10] (page details 2026-10-20)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/canadian-interests-significant-benefit-general-guidelines-r205-c10.html',
    checked: '2026-11-23',
  },
  lmiaC20: {
    id: 'lmiaExempt.codes.c20',
    claim:
      'C20 is reciprocal employment under 205(b): work that creates or keeps similar jobs for Canadians abroad.',
    provenance: 'primary',
    source: 'IRCC, Reciprocal employment general guidelines [R205(b) – C20] (page details 2026-08-06)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/canadian-interests-reciprocal-employment-general-guidelines-r205-b-c20.html',
    checked: '2026-11-23',
  },
  lmiaC41: {
    id: 'lmiaExempt.codes.c41',
    claim:
      'C41 is for spouses or common-law partners of workers in TEER 0 or 1 jobs, or selected TEER 2 or 3 jobs; it gives an open work permit under 205(c)(ii).',
    provenance: 'primary',
    source: 'IRCC, Spouses or common-law partners of foreign nationals authorized to work in high-skilled occupations [C41] (page details 2026-08-11)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/exemption-codes/public-policy-competitiveness-economy/spouses-common-law-authorized-work-high-skilled-occupations.html',
    checked: '2026-11-23',
    note: 'The page refers to \'pre-January 21, 2025, rules\' and \'post-January 21, 2025, rules\'; the codes list says the C41 instructions apply to applications on or after 21 January 2025. The 16-month condition on the principal\'s permit is not printed (web page only).',
  },
  lmiaC42: {
    id: 'lmiaExempt.codes.c42',
    claim:
      'C42 is for spouses or common-law partners of study permit holders in eligible programs, such as a doctorate; it gives an open work permit under 205(c)(ii), its rules changed on 21 January 2025, and dependent children cannot use it.',
    provenance: 'primary',
    source: 'IRCC, Spouses or common-law partners of study permit holders [R205(c)(ii) – C42] (page details 2026-08-24)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/public-policy-competitiveness-economy/c42.html',
    checked: '2026-11-23',
    note: 'Programme-length conditions (master\'s length) not printed: web page only.',
  },
  lmiaC43: {
    id: 'lmiaExempt.codes.c43',
    claim:
      'C43 is the post-graduation work permit, under 205(c)(ii), for graduates of an eligible Canadian designated learning institution.',
    provenance: 'primary',
    source: 'IRCC, Post-graduation work permit (PGWP) [R205(c) – C43] (page details 2025-12-11)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/study-permits/post-graduation-work-permit-program.html',
    checked: '2026-11-23',
  },
  lmiaA75: {
    id: 'lmiaExempt.codes.a75',
    claim:
      'A75 is the code for bridging open work permits, under 205(a); IRCC\'s instructions are for people already in Canada and exclude applications made at a visa office.',
    provenance: 'primary',
    source: 'IRCC, Bridging open work permits [R205(a) – A75] (page details 2025-07-30)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/provincial-nominees-permanent-resident-applicants/bridging-open-work-permits.html',
    checked: '2026-11-23',
    note: 'The codes list also shows other A-codes, such as A70 and A76.',
  },
  lmiaCusma: {
    id: 'lmiaExempt.trade.cusma',
    claim:
      'CUSMA (T34 to T38) is for citizens of the United States and Mexico; permanent residents of those countries are excluded.',
    provenance: 'primary',
    source: 'IRCC, International Mobility Program: CUSMA (page details 2024-10-03)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/cusma.html',
    checked: '2026-11-23',
  },
  lmiaCeta: {
    id: 'lmiaExempt.trade.ceta',
    claim:
      'CETA (T41 to T48) is for citizens of European Union countries.',
    provenance: 'primary',
    source: 'IRCC, CETA overview (page details 2024-10-03)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/canada-eu.html',
    checked: '2026-11-23',
  },
  lmiaCptpp: {
    id: 'lmiaExempt.trade.cptpp',
    claim:
      'CPTPP (T50 to T55) is for citizens of its signatory countries other than Canada; Pakistan is not on IRCC\'s list.',
    provenance: 'primary',
    source: 'IRCC, CPTPP overview (page details 2026-09-02)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/trans-pacific.html',
    checked: '2026-11-23',
  },
  lmiaGats: {
    id: 'lmiaExempt.trade.gats',
    claim:
      'GATS professionals (T33) is for citizens of World Trade Organization members and covers only listed professions, such as engineers and architects, on short contracts that cannot be extended.',
    provenance: 'primary',
    source: 'IRCC, International Mobility Program: General Agreement on Trade in Services',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/general-agreement-trade-services.html',
    checked: '2026-11-23',
    note: 'The 90-day contract limit is not printed (web page only). Page details show 2014-10-28 although the page cites WTO membership as of August 2024.',
  },
  pakistanWtoMember: {
    id: 'pakistan.wtoMember',
    claim:
      'Pakistan has been a WTO member since 1 January 1995.',
    provenance: 'primary',
    source: 'World Trade Organization, Members and Observers',
    sourceUrl: 'https://www.wto.org/english/thewto_e/whatis_e/tif_e/org6_e.htm',
    checked: '2026-11-23',
  },
  impOfferNumber: {
    id: 'imp.offerOfEmployment.number',
    claim:
      'For an employer-specific permit, the employer pays the employer compliance fee and submits an offer of employment in the Employer Portal, then gives the worker the 7-digit offer of employment number; open work permits need neither the offer nor the fee.',
    provenance: 'primary',
    source: 'IRCC, How to hire under the International Mobility Program (page details 2026-04-23)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/hire-temporary-foreign/international-mobility-program/how-to-hire.html',
    checked: '2026-11-23',
  },
  irprEmployerComplianceFee: {
    id: 'irpr.303-1.employerComplianceFee',
    claim:
      'The employer compliance fee is C$230, set by section 303.1 of the Regulations, unless the case is exempt.',
    provenance: 'primary',
    source: 'Justice Laws, IRPR s. 303.1(1) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-303.1.html',
    checked: '2026-11-23',
    note: 'The brief named s. 303.2; that section is the C$100 open work permit holder fee, which the post does not print. Exemptions: s. 303.1(4.1) and (5), and IRCC\'s employer compliance exemptions page.',
  },
  irprRefusalNoOffer: {
    id: 'irpr.200-3-f1',
    claim:
      'Under section 200(3)(f.1), an officer must refuse the permit if the employer had not paid the fee, or submitted the offer, before the worker applied.',
    provenance: 'primary',
    source: 'Justice Laws, IRPR s. 200(3)(f.1) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-200.html',
    checked: '2026-11-23',
  },
  irprNoRecruitmentFees: {
    id: 'irpr.209-2-1-a-ix-x',
    claim:
      'Under section 209.2, an employer must not charge the worker the employer compliance fee or recruitment fees, and must make sure its recruiters do not either.',
    provenance: 'primary',
    source: 'Justice Laws, IRPR s. 209.2(1)(a)(ix) and (x) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.2.html',
    checked: '2026-11-23',
  },
  irpr204: {
    id: 'irpr.204',
    claim:
      'Section 204 covers international and provincial agreements and youth mobility.',
    provenance: 'primary',
    source: 'Justice Laws, IRPR s. 204 (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-204.html',
    checked: '2026-11-23',
  },
  irpr205: {
    id: 'irpr.205',
    claim:
      'Section 205 covers work in Canada\'s interests: 205(a) significant benefit, 205(b) reciprocal employment, 205(c) work the Minister designates such as research or public-policy work, 205(d) religious or charitable work.',
    provenance: 'primary',
    source: 'Justice Laws, IRPR s. 205 (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-205.html',
    checked: '2026-11-23',
  },
  irccNoGuarantee: {
    id: 'ircc.scams.noGuarantee',
    claim:
      'IRCC\'s scams page: "No one can guarantee you a job or a visa to Canada."',
    provenance: 'primary',
    source: 'IRCC, Online and telephone immigration scams (page details 2026-09-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html',
    checked: '2026-11-23',
  },
  caJobOfferNoLmia: {
    id: 'ca.fraud.job-offer.no-lmia',
    claim:
      'Since 3 November 2026, a qualifying Express Entry job offer does not need an LMIA.',
    provenance: 'primary',
    source: 'IRCC, Changes to Express Entry for high-wage occupations (backgrounder, 16 October 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/changes-to-express-entry-for-high-wage-occupations.html',
    checked: '2026-11-23',
    note: 'Same fact as /blog/express-entry-november-2026-crs-change; the job offer page (modified 2026-11-18) says the same.',
  },
  caJobOfferLmiaNoPoints: {
    id: 'ca.fraud.job-offer.lmia-no-points',
    claim:
      'IRCC’s job offer page says an LMIA adds no points or priority.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: job offer (modified 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html',
    checked: '2026-11-23',
  },
  caJobOfferPoints: {
    id: 'ca.fraud.job-offer.points',
    claim:
      'An offer in an occupation on IRCC’s high-wage list can add 50, 70 or 100 CRS points without an LMIA.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15.2(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
    note: 'Restated as in /blog/express-entry-november-2026-crs-change; the points are the greater of this and Canadian work experience, not added to it.',
  },
  caJobOfferPointsRemoved2025: {
    id: 'ca.fraud.job-offer.points-removed-2025',
    claim:
      'In spring 2025, IRCC had stopped giving points for job offers; its news release said the aim was to remove the incentive to illegally buy or sell LMIAs.',
    provenance: 'primary',
    source: 'IRCC, Canada takes action to reduce fraud in Express Entry system (news release, 23 December 2024)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2024/12/canada-takes-action-to-reduce-fraud-in-express-entry-system.html',
    checked: '2026-11-23',
  },
  caJobOfferHighWageVerification: {
    id: 'ca.fraud.job-offer.high-wage-verification',
    claim:
      'The backgrounder says limiting the new points to high-wage occupations also supports verification.',
    provenance: 'primary',
    source: 'IRCC, Changes to Express Entry for high-wage occupations (backgrounder, 16 October 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/changes-to-express-entry-for-high-wage-occupations.html',
    checked: '2026-11-23',
  },
  caJobOfferProfileLmiaQuestion: {
    id: 'ca.fraud.job-offer.profile-lmia-question',
    claim:
      'As of 23 November 2026, IRCC’s online profile still asks whether a positive LMIA was issued; the job offer page says the system has not caught up, and tells you what to enter.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: job offer (modified 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html',
    checked: '2026-11-23',
    note: 'The page gives placeholder answers; the post does not print them. Re-check when IRCC updates the profile form.',
  },
  caLmiaFeeNotFromWorker: {
    id: 'ca.fraud.lmia.fee-not-from-worker',
    claim:
      'ESDC’s requirements for high-wage positions say the LMIA processing fee cannot be paid by or recovered from the worker.',
    provenance: 'primary',
    source: 'ESDC, Program requirements for high-wage positions (modified 2026-11-10)',
    sourceUrl: 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-wage/high/requirements.html',
    checked: '2026-11-23',
    note: 'Fee amount (IRPR s. 315.2(1)) deliberately not printed, consistent with /work-permits/lmia.',
  },
  caLmiaNoRecruitmentFees: {
    id: 'ca.fraud.lmia.no-recruitment-fees',
    claim:
      'The employer must not charge the worker recruitment fees, directly or indirectly; ESDC says breaking this leads to a negative LMIA decision.',
    provenance: 'primary',
    source: 'ESDC, Program requirements for high-wage positions (modified 2026-11-10)',
    sourceUrl: 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-wage/high/requirements.html',
    checked: '2026-11-23',
  },
  caIrpr2093RecruitmentFees: {
    id: 'ca.fraud.irpr.209-3-fees',
    claim:
      'IRPR s. 209.3 bars employers of LMIA work-permit holders, while the worker is employed under the permit, from charging or recovering the LMIA fee or recruitment fees, and requires them to make sure their recruiter charges nothing for them.',
    provenance: 'primary',
    source: 'Justice Laws, Immigration and Refugee Protection Regulations, s. 209.3(1)(a)(xv) and (xvi) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.3.html',
    checked: '2026-11-23',
  },
  caIrpr2092RecruitmentFees: {
    id: 'ca.fraud.irpr.209-2-fees',
    claim:
      'IRPR s. 209.2 sets a matching rule for employer-specific work permits issued without an LMIA.',
    provenance: 'primary',
    source: 'Justice Laws, Immigration and Refugee Protection Regulations, s. 209.2(1)(a)(ix) and (x) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.2.html',
    checked: '2026-11-23',
    note: 'Under 209.2 the fee named is the employer compliance fee (s. 303.1(1)), not the LMIA fee.',
  },
  caIrprFeeExceptions: {
    id: 'ca.fraud.irpr.fee-exceptions',
    claim:
      'The narrow exceptions include the government fees for the worker’s own visa and work permit.',
    provenance: 'primary',
    source: 'Justice Laws, IRPR ss. 209.2(1)(a)(ix) and 209.3(1)(a)(xv), which except the fees in ss. 296(1), 298(1) and 299(1)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.3.html',
    checked: '2026-11-23',
    note: '296(1) temporary resident visa, 298(1) temporary resident permit, 299(1) work permit; 209.3 also excepts fees allowed under seasonal agricultural worker agreements. Amounts not printed.',
  },
  caEsdcWorkerPays: {
    id: 'ca.fraud.esdc.worker-pays',
    claim:
      'ESDC tells foreign workers they pay only for their work permit, medical exam and biometrics, if required.',
    provenance: 'primary',
    source: 'ESDC, Temporary foreign workers: your rights are protected (modified 2026-09-23)',
    sourceUrl: 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/protected-rights.html',
    checked: '2026-11-23',
  },
  caJobOfferForPayScamSign: {
    id: 'ca.fraud.scam-sign.pay-for-offer',
    claim:
      'IRCC lists anyone who promises you a work permit or job offer if you pay them as a warning sign of a scam.',
    provenance: 'primary',
    source: 'IRCC, Understand the consequences of unauthorized work (modified 2026-07-23)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/admissibility-enforcement/consequences-unauthorized-work.html',
    checked: '2026-11-23',
  },
  caFalseJobOffersFraud: {
    id: 'ca.fraud.false-job-offers',
    claim:
      'IRCC’s fraud page counts false job offers as fraud.',
    provenance: 'primary',
    source: 'IRCC, Consequences of fraud (2026-09-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html',
    checked: '2026-11-23',
  },
  caMisrepresentationFiveYears: {
    id: 'ca.fraud.misrep-five-years',
    claim:
      'A finding of misrepresentation makes you inadmissible for five years.',
    provenance: 'primary',
    source: 'Justice Laws, Immigration and Refugee Protection Act, s. 40(1)(a) and (2)(a) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html',
    checked: '2026-11-23',
    note: 'Same fact as ca.refusal.misrep-period in lib/facts.ts.',
  },
  caJobOfferGenuineness: {
    id: 'ca.fraud.job-offer.genuineness',
    claim:
      'An offer counts only if an officer finds it genuine: whether the employer is actively in business, needs the role and can meet the offer’s terms, and the employer’s record with employment and recruitment laws.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15.2(4)(a)–(c) and (e)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
    note: 'The backgrounder of 16 October 2026 lists the same factors.',
  },
  caJobOfferApplicantSide: {
    id: 'ca.fraud.job-offer.applicant',
    claim:
      'The officer must be satisfied, from your past work or education, that you can do the job and are likely to take it.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15.2(4)(d)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
  },
  caJobOfferSupportingDocs: {
    id: 'ca.fraud.job-offer.supporting-docs',
    claim:
      'The job offer page asks you to add supporting documents that show the offer is genuine.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: job offer (modified 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html',
    checked: '2026-11-23',
  },
  caJobOfferExcludedEmployers: {
    id: 'ca.fraud.job-offer.excluded-employers',
    claim:
      'For offers in TEER 0 to 3 jobs and skilled trades, the Ministerial Instructions shut out employers named in IRPR s. 200(3)(h): employers made ineligible under s. 209.95 for breaking the rules on employing foreign workers, or in default on a penalty.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions – current, s. 15.2(2)(b) and (c); Justice Laws, IRPR ss. 200(3)(h)(ii)–(iii) and 209.95(1)(b)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
  },
  caJobOfferRevoked: {
    id: 'ca.fraud.job-offer.revoked',
    claim:
      'An offer that is revoked stops counting.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 15.2(5)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
  },
  caNonCompliantList: {
    id: 'ca.fraud.non-compliant-list',
    claim:
      'IRCC publishes the employers found non-compliant, some of them banned from hiring temporary workers for a period.',
    provenance: 'primary',
    source: 'IRCC, Employers who have been found non-compliant (modified 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/employers-non-compliant.html',
    checked: '2026-11-23',
    note: 'That a missing name proves nothing is our own point, not IRCC’s.',
  },
  caScamNoGuarantee: {
    id: 'ca.fraud.scam-sign.guarantee',
    claim:
      'Nobody can guarantee you a job or visa to Canada.',
    provenance: 'primary',
    source: 'IRCC, Online and telephone scams (modified 2026-09-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html',
    checked: '2026-11-23',
  },
  caScamSalaryTooHigh: {
    id: 'ca.fraud.scam-sign.salary',
    claim:
      'IRCC warns about salaries that seem too high to be real.',
    provenance: 'primary',
    source: 'IRCC, Online and telephone scams (modified 2026-09-01)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html',
    checked: '2026-11-23',
  },
  caJobBankWages: {
    id: 'ca.fraud.job-bank.wages',
    claim:
      'Job Bank, the Government of Canada’s job site, has a wage search by occupation and location.',
    provenance: 'primary',
    source: 'Job Bank, Search wages (modified 2026-09-24)',
    sourceUrl: 'https://www.jobbank.gc.ca/trend-analysis/search-wages',
    checked: '2026-11-23',
  },
  caLmiaJobBankAdvert: {
    id: 'ca.fraud.lmia.job-bank-advert',
    claim:
      'For a high-wage LMIA, ESDC requires the employer to advertise on Job Bank before applying.',
    provenance: 'primary',
    source: 'ESDC, Program requirements for high-wage positions (modified 2026-11-10)',
    sourceUrl: 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/median-wage/high/requirements.html',
    checked: '2026-11-23',
    note: 'The advertising period and number of recruitment activities appear only on the page, so they are not printed.',
  },
  caJobBankSearch: {
    id: 'ca.fraud.job-bank.search',
    claim:
      'You can search Job Bank by keyword and location.',
    provenance: 'primary',
    source: 'Job Bank, Available jobs – search (modified 2026-09-24)',
    sourceUrl: 'https://www.jobbank.gc.ca/jobsearch',
    checked: '2026-11-23',
  },
  caJobBankNoImmigration: {
    id: 'ca.fraud.job-bank.no-immigration',
    claim:
      'Job Bank’s safety page says Job Bank does not deal with immigration.',
    provenance: 'primary',
    source: 'Job Bank, Job search safety tips (modified 2026-01-08)',
    sourceUrl: 'https://www.jobbank.gc.ca/findajob/resources/safety-tips',
    checked: '2026-11-23',
  },
  caCafcCheckEmployer: {
    id: 'ca.fraud.cafc.check-employer',
    claim:
      'The Canadian Anti-Fraud Centre advises checking the company’s official website and calling its official phone number.',
    provenance: 'primary',
    source: 'Canadian Anti-Fraud Centre, Job (scams) (modified 2026-01-16)',
    sourceUrl: 'https://antifraudcentre-centreantifraude.ca/scams-fraudes/job-emploi-eng.htm',
    checked: '2026-11-23',
  },
  caCafcJobScamSigns: {
    id: 'ca.fraud.cafc.signs',
    claim:
      'Warning signs include contact through a web-based email rather than a company domain, an offer you never applied for, and upfront deposits or fees.',
    provenance: 'primary',
    source: 'Canadian Anti-Fraud Centre, Job (scams) (modified 2026-01-16)',
    sourceUrl: 'https://antifraudcentre-centreantifraude.ca/scams-fraudes/job-emploi-eng.htm',
    checked: '2026-11-23',
  },
  caScamSocialMedia: {
    id: 'ca.fraud.scam-sign.social-media',
    claim:
      'IRCC lists requests to send documents or payment through social media as a warning sign.',
    provenance: 'primary',
    source: 'IRCC, Understand the consequences of unauthorized work (modified 2026-07-23)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/admissibility-enforcement/consequences-unauthorized-work.html',
    checked: '2026-11-23',
  },
  caJobOfferInWriting: {
    id: 'ca.fraud.job-offer.in-writing',
    claim:
      'A genuine offer is in writing and sets out the pay, duties and hours.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: job offer (modified 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html',
    checked: '2026-11-23',
  },
  caReportOnlineScamsCafc: {
    id: 'ca.fraud.report.cafc',
    claim:
      'IRCC’s reporting page points online scams to the Canadian Anti-Fraud Centre, and tells people outside Canada with fake documents to report there and to local police, among other steps.',
    provenance: 'primary',
    source: 'IRCC, How to report scams, fraud or abuse (2026-05-11)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/report-fraud.html',
    checked: '2026-11-23',
    note: 'The other step for fake documents outside Canada is the CBSA Border Watch Line.',
  },
  caCafcReportOnline: {
    id: 'ca.fraud.cafc.report-online',
    claim:
      'The Canadian Anti-Fraud Centre takes reports online from victims and witnesses.',
    provenance: 'primary',
    source: 'Canadian Anti-Fraud Centre, Report fraud (modified 2025-11-27)',
    sourceUrl: 'https://antifraudcentre-centreantifraude.ca/report-signalez-eng.htm',
    checked: '2026-11-23',
    note: 'The page does not say whether a different process applies to people abroad.',
  },
  caEsdcCannotMakeYouPay: {
    id: 'ca.fraud.esdc.cannot-make-you-pay',
    claim:
      'ESDC’s rights page says an employer cannot make you pay to get a job.',
    provenance: 'primary',
    source: 'ESDC, Temporary foreign workers: your rights are protected (modified 2026-09-23)',
    sourceUrl: 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/protected-rights.html',
    checked: '2026-11-23',
  },
  caEsdcAnyoneCanReport: {
    id: 'ca.fraud.esdc.anyone-can-report',
    claim:
      'ESDC’s reporting page says anyone can report abuse of the Temporary Foreign Worker Program.',
    provenance: 'primary',
    source: 'ESDC, How to report abuse of temporary foreign workers (2026-10-05)',
    sourceUrl: 'https://www.canada.ca/en/employment-social-development/services/foreign-workers/report-abuse.html',
    checked: '2026-11-23',
  },
  pkFiaComplaintPortal: {
    id: 'pk.fia.complaint-portal',
    claim:
      'The FIA’s online complaint portal takes complaints about unlawful activity within its remit.',
    provenance: 'primary',
    source: 'Federal Investigation Agency, Public Services Portal',
    sourceUrl: 'https://complaint.fia.gov.pk/',
    checked: '2026-11-23',
  },
  pkFiaAhsWing: {
    id: 'pk.fia.ahs-wing',
    claim:
      'The FIA’s Anti Human Trafficking and Smuggling Wing handles immigration, human trafficking and migrant smuggling crimes.',
    provenance: 'primary',
    source: 'Federal Investigation Agency, Anti Human Trafficking & Smuggling Wing',
    sourceUrl: 'https://www.fia.gov.pk/fia-new/public/htsw',
    checked: '2026-11-23',
  },
  pgpPausedNotice: {
    id: 'canada.pgp.paused',
    claim:
      'On 15 July 2026, IRCC paused the Parents and Grandparents Program: it will not accept new interest to sponsor forms or invite potential sponsors to apply until further notice, and keeps processing existing applications.',
    provenance: 'primary',
    source: 'IRCC, Canada takes steps to responsibly manage the Parents and Grandparents Program (15 July 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/responsibly-manage-parent-grandparent-program.html',
    checked: '2026-11-23',
  },
  pgpPageStillPaused: {
    id: 'canada.pgp.status',
    claim:
      'IRCC’s program page still showed the program as paused on 23 November 2026.',
    provenance: 'primary',
    source: 'IRCC, Sponsor your parents and grandparents (page dated 2026-08-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html',
    checked: '2026-11-23',
  },
  pgpLastRound2025: {
    id: 'canada.pgp.lastRound',
    claim:
      'The last round began on 28 July 2025, inviting people who had submitted an interest form in 2020; the last day to apply was 9 October 2025.',
    provenance: 'primary',
    source: 'IRCC, Find out if you’re invited to apply (2025-10-10) and How to apply (2026-08-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents/selected.html',
    checked: '2026-11-23',
    note: 'IRCC’s invitation count and application cap for 2025 left out: web-page figures only.',
  },
  pgpNo2027Intake: {
    id: 'canada.pgp.intake2027',
    claim:
      'As of 23 November 2026 IRCC has announced no intake for 2027; its notices page had nothing newer on the program than the 15 July notice, and the 2027–2029 levels plan supplementary information (5 November 2026) says nothing about a new intake.',
    provenance: 'primary',
    source: 'IRCC, Notices; Supplementary Information for the 2027-2029 Immigration Levels Plan (2026-11-05)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/immigration-system/levels/supplementary-immigration-levels-2027-2029.html',
    checked: '2026-11-23',
    note: 'Absence of an announcement, checked on the notices list, the PGP pages and the levels plan. No plan targets printed.',
  },
  pgp2026FromInventory: {
    id: 'canada.pgp.2026approvals',
    claim:
      'In 2026, IRCC is approving parents from applications already submitted, while accepting no new forms.',
    provenance: 'primary',
    source: 'IRCC, Canada takes steps to responsibly manage the Parents and Grandparents Program (15 July 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/responsibly-manage-parent-grandparent-program.html',
    checked: '2026-11-23',
    note: 'The notice’s approval target is left out.',
  },
  superVisaHost: {
    id: 'canada.superVisa.host',
    claim:
      'The super visa host must be the applicant’s child or grandchild, aged at least 18, living in Canada, and a Canadian citizen, permanent resident or registered Indian; the host signs a letter of invitation promising financial support and listing everyone counted for the income test.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions regarding the Parent and Grandparent Super Visa (2026), in effect 31 March 2026',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/other-goals/super-visa-2026.html',
    checked: '2026-11-23',
  },
  superVisaIncomeTwoYears: {
    id: 'canada.superVisa.incomeYears',
    claim:
      'Since 31 March 2026 the host can meet the income minimum in either of the two tax years before applying.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions regarding the Parent and Grandparent Super Visa (2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/other-goals/super-visa-2026.html',
    checked: '2026-11-23',
  },
  superVisaAddParentsIncome: {
    id: 'canada.superVisa.parentsIncome',
    claim:
      'A host who falls short can add the visiting parents’ income, once the host alone reaches a minimum share that IRCC sets.',
    provenance: 'primary',
    source: 'IRCC, Changes to how the parents and grandparents super visa income requirement is calculated (20 March 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/changes-parents-grandparents-super-visa-income-requirement-calculated.html',
    checked: '2026-11-23',
    note: 'The share (75% on IRCC’s proof-of-support page) is left out: web-page figure only.',
  },
  superVisaInsurerLaw: {
    id: 'canada.superVisa.insurerLaw',
    claim:
      'The insurer can be Canadian or a company outside Canada approved by the Minister.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 15.1 (2023, c. 21, s. 2); Ministerial Instructions (2026), s. 2(1)(c)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-15.1.html',
    checked: '2026-11-23',
  },
  superVisaInsurerOsfi: {
    id: 'canada.superVisa.insurerOsfi',
    claim:
      'A foreign insurer must be authorised by OSFI, appear on OSFI’s list and issue the policy through its insurance business in Canada; a quote is not accepted, and the policy must be paid in full or in instalments with a deposit.',
    provenance: 'primary',
    source: 'IRCC, Super visa: Forms and documents (page dated 2026-07-30); notice of 28 January 2025',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/forms-documents.html',
    checked: '2026-11-23',
    note: 'Coverage amount and minimum period left out.',
  },
  superVisaFiveYears: {
    id: 'canada.superVisa.stay',
    claim:
      'A super visa allows up to five years per entry, a period set in section 29(3) of the Act; holders can apply to extend from inside Canada.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 29(3) (2023, c. 21, s. 3), current to 2026-10-29; IRCC, How long you can stay (2026-07-06)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-29.html',
    checked: '2026-11-23',
  },
  superVisaValidityUnprinted: {
    id: 'canada.superVisa.validity',
    claim:
      'It is a multiple-entry visa that can be valid for several years, and IRCC’s super visa page gives the current maximum.',
    provenance: 'primary',
    source: 'IRCC, Super visa for parents or grandparents (page dated 2026-11-16); Ministerial Instructions (2026), definition of Super Visa',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html',
    checked: '2026-11-23',
    note: 'The 10-year maximum is on IRCC pages only; not found in IRPA, IRPR or the 2026 Instructions, so not printed.',
  },
  superVisaShouldConsider: {
    id: 'canada.superVisa.discretion',
    claim:
      'The Instructions say an officer “should consider” issuing a super visa.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions regarding the Parent and Grandparent Super Visa (2026), s. 2(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/other-goals/super-visa-2026.html',
    checked: '2026-11-23',
  },
  superVisaGenuineVisitor: {
    id: 'canada.superVisa.ties',
    claim:
      'Officers weigh the parents’ ties to their home country, the purpose of the visit, and their family and finances.',
    provenance: 'primary',
    source: 'IRCC, Super visa: Who can apply (page dated 2026-07-06)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/eligibility.html',
    checked: '2026-11-23',
  },
  superVisaApplyOnline: {
    id: 'canada.superVisa.apply',
    claim:
      'Parents apply online from outside Canada, then receive a biometric instruction letter; a super visa cannot be valid for longer than biometrics given before.',
    provenance: 'primary',
    source: 'IRCC, Super visa: Submit your application (page dated 2026-08-28)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/apply.html',
    checked: '2026-11-23',
  },
  biometricsPakistanCentres: {
    id: 'pakistan.biometrics.centres',
    claim:
      'IRCC lists visa application centres in Islamabad, Lahore and Karachi.',
    provenance: 'primary',
    source: 'IRCC, Where to give your biometrics (page dated 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/where-to-give.html',
    checked: '2026-11-23',
  },
  biometricsOver79: {
    id: 'canada.biometrics.over79',
    claim:
      'A parent over 79 on the day of applying does not give biometrics.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 12.2(1)(b) and (2), current to 2026-10-29',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-12.2.html',
    checked: '2026-11-23',
  },
  medicalPanelPhysician: {
    id: 'canada.superVisa.medical',
    claim:
      'The super visa medical exam must be done by an IRCC-approved panel physician.',
    provenance: 'primary',
    source: 'IRCC, Super visa: Forms and documents (2026-07-30); Ministerial Instructions (2026), s. 2(1)(b)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/forms-documents.html',
    checked: '2026-11-23',
  },
  medicalPakistanList: {
    id: 'pakistan.medical.countryList',
    claim:
      'Pakistan is on IRCC’s country list, so someone who has lived there can need a medical exam even for an ordinary visit of over six months.',
    provenance: 'primary',
    source: 'IRCC, country list (page dated 2026-11-16); Immigration and Refugee Protection Regulations, s. 30(1)(a)(iii)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents/country-requirements.html',
    checked: '2026-11-23',
  },
  medicalPrApplicants: {
    id: 'canada.pgp.medical',
    claim:
      'Sponsored parents applying for permanent residence need a medical exam.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 30(1)(a)(i)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-30.html',
    checked: '2026-11-23',
  },
  superVisaNoPoliceCert: {
    id: 'canada.superVisa.police',
    claim:
      'IRCC’s super visa documents page did not list a police certificate on 23 November 2026.',
    provenance: 'primary',
    source: 'IRCC, Super visa: Forms and documents (page dated 2026-07-30)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/forms-documents.html',
    checked: '2026-11-23',
    note: '“Send one only if you are asked” is our suggestion.',
  },
  visitorSixMonthsNoWork: {
    id: 'canada.visitor.stayWork',
    claim:
      'A visitor’s stay is six months unless the officer sets another period, and temporary residents may not work unless authorised.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 183(1)(b) and (2), current to 2026-10-29',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-183.html',
    checked: '2026-11-23',
  },
  visitorEnoughMoney: {
    id: 'canada.visitor.funds',
    claim:
      'For an ordinary visitor visa nobody in Canada has to qualify; the visitor shows enough money for the stay.',
    provenance: 'primary',
    source: 'IRCC, Eligibility to apply for a visitor visa (page dated 2026-08-28)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eligibility.html',
    checked: '2026-11-23',
  },
  prCanWork: {
    id: 'canada.pr.rights',
    claim:
      'Permanent residents can live and work anywhere in Canada.',
    provenance: 'primary',
    source: 'IRCC, Understand permanent resident status (page dated 2026-04-09)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-card/understand-pr-status.html',
    checked: '2026-11-23',
  },
  pgpSponsorWho: {
    id: 'canada.pgp.sponsor',
    claim:
      'The sponsor must be a Canadian citizen or permanent resident, aged at least 18, who lives in Canada; IRCC’s eligibility page also lists registered Indians.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 130(1); IRCC, Check if you’re eligible (2026-06-23)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-130.html',
    checked: '2026-11-23',
  },
  pgpIncomeThreeYears: {
    id: 'canada.pgp.incomeYears',
    claim:
      'The sponsor needs income at or above a set minimum for each of the three tax years before applying; for parents and grandparents that minimum is higher than for other relatives.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 133(1)(j)(i)(A) and (B), current to 2026-10-29',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-133.html',
    checked: '2026-11-23',
    note: 'Minimum necessary income amounts and the 30% margin are not printed.',
  },
  pgpIncomeNoa: {
    id: 'canada.pgp.incomeEvidence',
    claim:
      'Income is taken from Canadian notices of assessment, and a co-signer’s income is added if there is one.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 134(1.1)(a) and (c)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-134.html',
    checked: '2026-11-23',
  },
  pgpQuebec: {
    id: 'canada.pgp.quebec',
    claim:
      'If you live in Quebec, IRCC says you must also meet Quebec’s own requirements.',
    provenance: 'primary',
    source: 'IRCC, Sponsor your parents and grandparents: Check if you’re eligible (page dated 2026-06-23)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents/eligibility.html',
    checked: '2026-11-23',
  },
  pgpUndertaking20: {
    id: 'canada.pgp.undertaking',
    claim:
      'The sponsor’s undertaking lasts 20 years from the day the parent becomes a permanent resident.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 132(1)(b)(iv), current to 2026-10-29',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-132.html',
    checked: '2026-11-23',
  },
  itFlussiClickDays2027: {
    id: 'it.flussi.2027.clickDays',
    claim:
      'The 2027 click days open at 9:00 Italian time on 12 January 2027 (seasonal agriculture, form C-Stag agricolo), 9 February 2027 (seasonal tourism, C-Stag turistico), 16 February 2027 (non-seasonal work in the DPCM’s sectors, B2020) and 18 February 2027 (non-seasonal home care, A-bis).',
    provenance: 'primary',
    source: 'Ministries of the Interior, Labour, Agriculture and Tourism, joint circular prot. n. 7185 (1 October 2026)',
    sourceUrl: 'https://www.lavoro.gov.it/documenti-e-norme/normativa/CC-7185-del-01102026',
    checked: '2026-11-23',
    note: 'Circular section 3; the same days are fixed for each year 2026–2028 in art. 8(2) of the DPCM.',
  },
  itFlussiWindowEnd2027: {
    id: 'it.flussi.2027.windowEnd',
    claim:
      'Each 2027 window stays open until 31 December 2027, but only while places remain.',
    provenance: 'primary',
    source: 'Ministries of the Interior, Labour, Agriculture and Tourism, joint circular prot. n. 7185 (1 October 2026)',
    sourceUrl: 'https://www.lavoro.gov.it/documenti-e-norme/normativa/CC-7185-del-01102026',
    checked: '2026-11-23',
    note: 'Circular section 3: "ferma restando la disponibilità delle relative quote"; DPCM art. 8(2).',
  },
  itFlussiLapse: {
    id: 'it.flussi.lapse',
    claim:
      'Requests still without a place six months after 31 December 2027 lapse, and so does a nulla osta not followed by a visa in that period.',
    provenance: 'primary',
    source: 'Gazzetta Ufficiale, DPCM 2 ottobre 2025, Programmazione dei flussi di ingresso legale in Italia dei lavoratori stranieri per il triennio 2026-2028 (GU Serie Generale n. 240, 15 October 2025)',
    sourceUrl: 'https://www.gazzettaufficiale.it/eli/id/2025/10/15/25A05656/sg',
    checked: '2026-11-23',
    note: 'DPCM art. 8(2)(a)–(d), which says this for each reference year.',
  },
  itFlussiTotal2027: {
    id: 'it.flussi.2027.total',
    claim:
      'For 2027 the DPCM allows 165,850 work entries: 76,200 for non-seasonal jobs, 89,000 for seasonal jobs and 650 for self-employment. The 76,200 include 14,000 places for home care.',
    provenance: 'primary',
    source: 'Gazzetta Ufficiale, DPCM 2 ottobre 2025, Programmazione dei flussi di ingresso legale in Italia dei lavoratori stranieri per il triennio 2026-2028 (GU Serie Generale n. 240, 15 October 2025)',
    sourceUrl: 'https://www.gazzettaufficiale.it/eli/id/2025/10/15/25A05656/sg',
    checked: '2026-11-23',
    note: 'DPCM arts 5(1)(b), 6(1)(b), 6(3)(c)(2) and 7(1)(b); circular section 1 repeats the same figures.',
  },
  itFlussiPakistanReserved2027: {
    id: 'it.flussi.2027.pakistanList',
    claim:
      'Within the non-seasonal places, article 6(2)(a) reserves 25,000, shared among citizens of a named list of countries that cooperate with Italy on migration. Pakistan is on that list, with Bangladesh, India, Sri Lanka and others.',
    provenance: 'primary',
    source: 'Gazzetta Ufficiale, DPCM 2 ottobre 2025, Programmazione dei flussi di ingresso legale in Italia dei lavoratori stranieri per il triennio 2026-2028 (GU Serie Generale n. 240, 15 October 2025)',
    sourceUrl: 'https://www.gazzettaufficiale.it/eli/id/2025/10/15/25A05656/sg',
    checked: '2026-11-23',
    note: 'Art. 6(2)(a) names 38 countries and gives 25,000 for each of 2026, 2027 and 2028; the post does not print the count of countries.',
  },
  itFlussiNewAgreements2027: {
    id: 'it.flussi.2027.newAgreements',
    claim:
      'Another 26,000 are for countries whose agreements come into force during 2026 to 2028.',
    provenance: 'primary',
    source: 'Gazzetta Ufficiale, DPCM 2 ottobre 2025, Programmazione dei flussi di ingresso legale in Italia dei lavoratori stranieri per il triennio 2026-2028 (GU Serie Generale n. 240, 15 October 2025)',
    sourceUrl: 'https://www.gazzettaufficiale.it/eli/id/2025/10/15/25A05656/sg',
    checked: '2026-11-23',
    note: 'DPCM art. 6(2)(b), 2027 figure.',
  },
  itFlussiSeasonalCountries: {
    id: 'it.flussi.seasonal.countries',
    claim:
      'Under article 7, seasonal places are open only to citizens of the countries on those two lists, so Pakistani workers can be hired for seasonal jobs as well.',
    provenance: 'primary',
    source: 'Gazzetta Ufficiale, DPCM 2 ottobre 2025, Programmazione dei flussi di ingresso legale in Italia dei lavoratori stranieri per il triennio 2026-2028 (GU Serie Generale n. 240, 15 October 2025)',
    sourceUrl: 'https://www.gazzettaufficiale.it/eli/id/2025/10/15/25A05656/sg',
    checked: '2026-11-23',
    note: 'DPCM art. 7(1), referring to art. 6(2)(a) and (b).',
  },
  itFlussiSeasonalPriority2027: {
    id: 'it.flussi.2027.seasonalPriority',
    claim:
      'Of the 89,000 seasonal places, 47,000 go first to agricultural requests filed through named farmers’ organisations, and 14,000 to tourism requests filed through national employers’ organisations.',
    provenance: 'primary',
    source: 'Gazzetta Ufficiale, DPCM 2 ottobre 2025, Programmazione dei flussi di ingresso legale in Italia dei lavoratori stranieri per il triennio 2026-2028 (GU Serie Generale n. 240, 15 October 2025)',
    sourceUrl: 'https://www.gazzettaufficiale.it/eli/id/2025/10/15/25A05656/sg',
    checked: '2026-11-23',
    note: 'DPCM art. 7(4) (47,000 each year) and 7(5) (14,000 in 2027).',
  },
  itFlussiSelfEmployment2027: {
    id: 'it.flussi.2027.selfEmployment',
    claim:
      'Of the 650 self-employment places, 500 are for named groups such as investors, company officers and founders of innovative start-ups. The circular lists no separate click day for self-employment.',
    provenance: 'primary',
    source: 'Gazzetta Ufficiale, DPCM 2 ottobre 2025, Programmazione dei flussi di ingresso legale in Italia dei lavoratori stranieri per il triennio 2026-2028 (GU Serie Generale n. 240, 15 October 2025)',
    sourceUrl: 'https://www.gazzettaufficiale.it/eli/id/2025/10/15/25A05656/sg',
    checked: '2026-11-23',
    note: 'DPCM art. 6(4); circular section 3 lists four days only. Art. 8(2)(c) does put the 50 self-employment places for workers of Italian origin (art. 6(3)(a)) on 16 February; the table says only "no separate day in the circular".',
  },
  itFlussiKenya2027: {
    id: 'it.flussi.2027.kenya',
    claim:
      'The joint circular adds Kenya to the countries of origin from 2027.',
    provenance: 'primary',
    source: 'Ministries of the Interior, Labour, Agriculture and Tourism, joint circular prot. n. 7185 (1 October 2026)',
    sourceUrl: 'https://www.lavoro.gov.it/documenti-e-norme/normativa/CC-7185-del-01102026',
    checked: '2026-11-23',
    note: 'Memorandum of 2 July 2026, per circular section 1.',
  },
  itFlussiPrefill2027: {
    id: 'it.flussi.2027.prefill',
    claim:
      'Pre-filling on the Interior Ministry’s ALI portal runs from 9:00 on 23 October 2026 to 20:00 on 7 December 2026, Italian time. From 9 to 13 December 2026 the portal reopens only to finish and save forms already started; no new forms can be added.',
    provenance: 'primary',
    source: 'Ministries of the Interior, Labour, Agriculture and Tourism, joint circular prot. n. 7185 (1 October 2026)',
    sourceUrl: 'https://www.lavoro.gov.it/documenti-e-norme/normativa/CC-7185-del-01102026',
    checked: '2026-11-23',
    note: 'Circular section 2; the Ministry of Labour notice of 1 October 2026 gives the same dates. The ALI portal was only checked as reachable and is described from the circular.',
  },
  itEmployerApplies: {
    id: 'it.nullaOsta.employerApplies',
    claim:
      'Under article 22, an employer in Italy hiring someone who lives abroad sends a request naming the worker online to the immigration desk of the province, with papers on the worker’s housing and a proposed contract including the return journey, after checking with the local job centre that no worker already in Italy is available.',
    provenance: 'primary',
    source: 'Normattiva, Legislative Decree 25 July 1998 n. 286, art. 22 (text in force from 4 June 2026)',
    sourceUrl: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art22',
    checked: '2026-11-23',
    note: 'Art. 22(1)–(2): "richiesta nominativa di nulla osta".',
  },
  itWhoCanFile: {
    id: 'it.nullaOsta.whoCanFile',
    claim:
      'Employers can file directly or through an employers’ organisation, an authorised professional such as a labour consultant, or a registered Italian staffing agency. The law gives no filing role to the worker.',
    provenance: 'primary',
    source: 'Normattiva, Legislative Decree 25 July 1998 n. 286, art. 22 (text in force from 4 June 2026)',
    sourceUrl: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art22',
    checked: '2026-11-23',
    note: 'Art. 22(2-bis.1) and (2-bis.2); professionals under art. 1 of Law 12/1979. "Or to anyone acting for the worker" in the post is our reading of who the law lists.',
  },
  itNullaOstaValidity: {
    id: 'it.nullaOsta.validity',
    claim:
      'A nulla osta is valid for no more than six months from issue.',
    provenance: 'primary',
    source: 'Normattiva, Legislative Decree 25 July 1998 n. 286, art. 22 (text in force from 4 June 2026)',
    sourceUrl: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art22',
    checked: '2026-11-23',
    note: 'Art. 22(5).',
  },
  itEmployerConfirm15: {
    id: 'it.nullaOsta.confirm15Days',
    claim:
      'After the visa checks, the employer has 15 days to confirm the request to the immigration desk. Without that confirmation, the request counts as refused and the nulla osta is revoked; with it, the consulate issues the visa.',
    provenance: 'primary',
    source: 'Normattiva, Legislative Decree 25 July 1998 n. 286, art. 22 (text in force from 4 June 2026)',
    sourceUrl: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art22',
    checked: '2026-11-23',
    note: 'Art. 22(5-quinquies); circular p. 7 notes the term was raised to 15 days.',
  },
  itContract15: {
    id: 'it.nullaOsta.contract15Days',
    claim:
      'Within 15 days of your arrival, you and the employer sign the contract of residence, which the employer sends on for your residence permit.',
    provenance: 'primary',
    source: 'Normattiva, Legislative Decree 25 July 1998 n. 286, art. 22 (text in force from 4 June 2026)',
    sourceUrl: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art22',
    checked: '2026-11-23',
    note: 'Art. 22(6); circular p. 7 (raised from eight to 15 days).',
  },
  itFraudRevocation: {
    id: 'it.nullaOsta.fraud',
    claim:
      'A nulla osta is refused, or revoked, if documents were obtained by fraud or forged.',
    provenance: 'primary',
    source: 'Normattiva, Legislative Decree 25 July 1998 n. 286, art. 22 (text in force from 4 June 2026)',
    sourceUrl: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art22',
    checked: '2026-11-23',
    note: 'Art. 22(5-ter).',
  },
  itDl145Pakistan: {
    id: 'it.dl145.art3.pakistan',
    claim:
      'Article 3 of Decree-Law 145 of 11 October 2024 covers countries with a high risk of applications using forged documents. Until 31 December 2025, pending a Foreign Ministry decree naming them, it applied to Bangladesh, Pakistan and Sri Lanka. For those workers, a nulla osta could be issued only after the National Labour Inspectorate had checked the requirements; those already issued, without a visa yet, were suspended until the immigration desk confirmed the checks.',
    provenance: 'primary',
    source: 'Normattiva, Decree-Law 11 October 2024 n. 145, art. 3 (as converted by Law 187/2024; text in force from 11 December 2024)',
    sourceUrl: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2024-10-11;145~art3',
    checked: '2026-11-23',
    note: 'Not confirmed: whether the Foreign Ministry decree has since been adopted, and whether it names Pakistan.',
  },
  itEmbassyWorkVisaDocs: {
    id: 'it.embassy.islamabad.workVisaChecklist',
    claim:
      'The embassy’s work-visa (type D) checklist, updated 4 June 2026, asks for the visa form and a photo; proof of residence in its district (residence certificate and CNIC copy); passport and flight booking; the nulla osta and contract document issued by the immigration desk; the employer’s ID with a company extract, or a tax certificate or return and family certificate; an apostilled Pakistani police character certificate; and health insurance in some cases. Pakistani documents need an apostille, papers must be in English or translated into Italian, and only residents of the embassy’s district are accepted.',
    provenance: 'primary',
    source: 'Embassy of Italy in Islamabad, Visto D per lavoro subordinato checklist (updated 4 June 2026)',
    sourceUrl: 'https://ambislamabad.esteri.it/wp-content/uploads/2026/06/MI06_VISTO-PER-LAVORO-SUBORDINATO_ITA_Islamabad.rev_.pdf',
    checked: '2026-11-23',
    note: 'The checklist’s passport-validity and document-age periods are not printed.',
  },
  itEmbassyKarachiDistrict: {
    id: 'it.embassy.karachiDistrict',
    claim:
      'The embassy’s where-to-apply page sends residents of the Consulate General in Karachi’s district, with centres in Karachi and Quetta, to the consulate.',
    provenance: 'primary',
    source: 'Embassy of Italy in Islamabad, Dove chiedere un visto (updated 16 June 2026)',
    sourceUrl: 'https://ambislamabad.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/dove-chiedere-un-visto/',
    checked: '2026-11-23',
    note: 'This page still lists Multan and Faisalabad among the embassy’s centres; the 4 September 2026 notice supersedes that.',
  },
  itEmbassyWaitingList: {
    id: 'it.embassy.waitingList',
    claim:
      'A waiting list is in place for work visas because of high demand.',
    provenance: 'primary',
    source: 'Embassy of Italy in Islamabad, Want to apply for an Italian visa? Here’s how to book an appointment (25 July 2026)',
    sourceUrl: 'https://ambislamabad.esteri.it/it/news/dall_ambasciata/2026/07/want-to-apply-for-an-italian-visa-heres-how-to-book-an-appointment/',
    checked: '2026-11-23',
  },
  itEmbassyNoPaidAppointments: {
    id: 'it.embassy.noPaidAppointments',
    claim:
      'The embassy says it knows of intermediaries and agencies that illegally offer visa appointments for money: “Visa appointments should never be purchased.” It asks you to report any such offer to the embassy.',
    provenance: 'primary',
    source: 'Embassy of Italy in Islamabad, Want to apply for an Italian visa? Here’s how to book an appointment (25 July 2026)',
    sourceUrl: 'https://ambislamabad.esteri.it/it/news/dall_ambasciata/2026/07/want-to-apply-for-an-italian-visa-heres-how-to-book-an-appointment/',
    checked: '2026-11-23',
  },
  itEmbassyCentres: {
    id: 'it.embassy.centres',
    claim:
      'Since 6 September 2026, booking and the waiting list are only at the Islamabad and Lahore centres.',
    provenance: 'primary',
    source: 'Embassy of Italy in Islamabad, Avviso pubblico (4 September 2026)',
    sourceUrl: 'https://ambislamabad.esteri.it/it/news/dall_ambasciata/2026/09/avviso-pubblico-8/',
    checked: '2026-11-23',
    note: 'The Multan and Faisalabad centres closed permanently from 6 September 2026.',
  },
  itEmbassySuspensionNotice: {
    id: 'it.embassy.suspensionNotice',
    claim:
      'The embassy’s notice of 7 September 2026 says applicants archived over a suspension can book again once the desk reactivates their nulla osta.',
    provenance: 'primary',
    source: 'Embassy of Italy in Islamabad, Avviso pubblico (7 September 2026)',
    sourceUrl: 'https://ambislamabad.esteri.it/it/news/dall_ambasciata/2026/09/avviso-pubblico-9/',
    checked: '2026-11-23',
    note: 'The notice cites D.L. 145/2024 without an article number.',
  },

  // ── BLOG POSTS OF 23 NOVEMBER 2026 (batch 29) ─────────────────────────────────────────
  caNl2026EoiModel: {
    id: 'ca.pnp.nl-2026.eoi-model',
    claim:
      'On 19 February 2025 the NLPNP and AIP moved to an expression of interest model; every application now begins with an EOI, and the province invites candidates in rounds.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Public Advisory: Priority Immigration Processing Continues With Expression of Interest Model (19 February 2025); Invitations to Apply (ITA) Updates (EOI \'for all economic immigration applications\')',
    sourceUrl: 'https://www.gov.nl.ca/releases/2025/ipgs/0219n02/',
    checked: '2026-11-23',
  },
  caNl2026AllocationCut: {
    id: 'ca.pnp.nl-2026.allocation-cut-2025',
    claim:
      'In January 2025 Ottawa cut the province’s NLPNP and AIP spaces by 50 per cent.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Newfoundland and Labrador Secures the Return of 1,000 Economic Immigration Spaces (31 January 2025)',
    sourceUrl: 'https://www.gov.nl.ca/releases/2025/exec/0131n03/',
    checked: '2026-11-23',
    note: 'Release: \'Earlier this month, the Government of Canada announced a 50 per cent reduction in the province’s allocation spaces under the NLPNP and the AIP as part of a national reduction.\' The province\'s 2025 audit report (published 26 January 2026) also says the 2025 allocation letter reflected a 50% reduction.',
  },
  caNl2026Allocation2025: {
    id: 'ca.pnp.nl-2026.allocation-2025',
    claim:
      'On 31 January 2025, 1,000 spaces were restored: 2,050 NLPNP spaces for 2025 (2,100 in 2024) and 475 AIP spaces.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Newfoundland and Labrador Secures the Return of 1,000 Economic Immigration Spaces (31 January 2025)',
    sourceUrl: 'https://www.gov.nl.ca/releases/2025/exec/0131n03/',
    checked: '2026-11-23',
    note: 'Total 2025 economic immigration spaces 2,525. No 2026 allocation for the province was found on gov.nl.ca (OIM pages and news-release search, 23 November 2026).',
  },
  caNl2026SeventyFivePercent: {
    id: 'ca.pnp.nl-2026.temporary-resident-share-2025',
    claim:
      'On 7 March 2025 the province changed its Job Vacancy Assessment and AIP designation rules, and said Ottawa required 75 per cent of provincial nominees to be temporary residents already in the province.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Public Advisory: Changes to Job Vacancy Assessment and Atlantic Immigration Program Designation Processes (7 March 2025)',
    sourceUrl: 'https://www.gov.nl.ca/releases/2025/ipgs/0307n07/',
    checked: '2026-11-23',
    note: 'No statement found on gov.nl.ca about whether the rule continues in 2026.',
  },
  caNl2026FirstRound: {
    id: 'ca.pnp.nl-2026.first-round',
    claim:
      'The first invitation round, on 3 April 2025, invited 256 people.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Invitations to Apply (ITA) Updates (updated 19 November 2026); Public Advisory of 8 April 2025',
    sourceUrl: 'https://www.gov.nl.ca/immigration/invitations-to-apply-updates/',
    checked: '2026-11-23',
    note: '206 NLPNP and 50 AIP.',
  },
  caNl2026Priorities: {
    id: 'ca.pnp.nl-2026.prioritisation',
    claim:
      'The EOI prioritisation criteria, updated 23 March 2026, put health and health-related occupations first and may also favour rural and regional jobs (including hard-to-fill sales and service roles), occupations the province uses less than others (business and finance, science and research, trades and transport), employers with a good compliance and retention record, signs you will stay, the province’s own graduates and Francophone candidates. Sales and service jobs around St. John’s may get lower priority when use there is high. Meeting a criterion does not guarantee an invitation.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Expression of Interest Model (EOI) Prioritization Criteria (updated 23 March 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/expression-of-interest-model-prioritization-criteria/',
    checked: '2026-11-23',
  },
  caNl2026Consultation: {
    id: 'ca.pnp.nl-2026.consultation',
    claim:
      'On 15 May 2026 the province opened a consultation on possible provincial immigration legislation and foreign worker protections, asking about recruiter licensing, an employer registry and penalties. No outcome had been announced by 23 November 2026.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Public Advisory: Consultation on Strengthening Protections for Foreign Workers (15 May 2026); consultation page (updated 15 May 2026)',
    sourceUrl: 'https://www.gov.nl.ca/releases/2026/jobs-growth-and-rural-development/0515n01/',
    checked: '2026-11-23',
    note: '\'No outcome\' is a negative finding from the release search and the consultation page.',
  },
  caNl2026ItaWindow: {
    id: 'ca.pnp.nl-2026.ita-window',
    claim:
      'The time to file a full application after an invitation was temporarily cut from 60 to 30 days (shown on pages updated 25 September 2026).',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Expression of Interest Model-Overview (updated 25 September 2026); EOI FAQs',
    sourceUrl: 'https://www.gov.nl.ca/immigration/expression-of-interest-model-overview/',
    checked: '2026-11-23',
    note: 'The page gives no start date for the reduction; the post dates it \'By 25 September 2026\'.',
  },
  caNl2026Categories: {
    id: 'ca.pnp.nl-2026.categories',
    claim:
      'On 23 November 2026 the province listed five NLPNP categories: Express Entry Skilled Worker, Skilled Worker, International Graduate, International Entrepreneur and International Graduate Entrepreneur.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, NL Provincial Nominee Program (NLPNP) Overview',
    sourceUrl: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/overview/',
    checked: '2026-11-23',
    note: 'Matches lib/facts.ts caNewfoundlandCategories (checked 8 November 2026).',
  },
  caNl2026SkilledWorker: {
    id: 'ca.pnp.nl-2026.skilled-worker',
    claim:
      'Skilled Worker needs a full-time job offer at any TEER level, a language test for TEER 4 and 5 jobs, and an employer with a valid JVA if the applicant has no work permit.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, NLPNP Skilled Worker Category (updated 25 September 2026); 4. Skilled Worker Category Eligibility Criteria',
    sourceUrl: 'https://www.gov.nl.ca/immigration/4-skilled-worker-category-eligibility-criteria/',
    checked: '2026-11-23',
  },
  caNl2026ExpressEntrySkilled: {
    id: 'ca.pnp.nl-2026.ee-skilled-worker',
    claim:
      'Express Entry Skilled Worker needs an Express Entry profile, a full-time TEER 0–3 offer, a Canadian credential or an ECA, and a minimum provincial points score. The category page lists a valid work permit or authorisation to work in Canada; the detailed policy, updated 22 April 2026, also accepts an offer from an employer with a valid JVA or LMIA.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, NLPNP Express Entry Skilled Worker Category (updated 25 September 2026); 4. Express Entry – Skilled Worker Category Eligibility Criteria (updated 22 April 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/4-express-entry-skilled-worker-category-eligibility-criteria/',
    checked: '2026-11-23',
    note: 'The 67-point minimum is on the policy page only and is not printed.',
  },
  caNl2026Graduate: {
    id: 'ca.pnp.nl-2026.international-graduate',
    claim:
      'International Graduate needs a post-graduation work permit and a full-time job offer.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, NLPNP International Graduate Category (updated 25 September 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/applicants/international-graduate/',
    checked: '2026-11-23',
  },
  caNl2026Entrepreneur: {
    id: 'ca.pnp.nl-2026.international-entrepreneur',
    claim:
      'International Entrepreneur needs business ownership or senior management experience and starting or buying a business in the province, by EOI and invitation; applicants from outside the province must visit it before applying. Its minimum assets and investment are not printed.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, International Entrepreneur: Eligibility Criteria',
    sourceUrl: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/entrepreneurs/international-entrepreneur/eligibility-criteria/',
    checked: '2026-11-23',
    note: 'The International Entrepreneur overview (last updated 4 May 2026) said the EOI system was open.',
  },
  caNl2026GraduateEntrepreneur: {
    id: 'ca.pnp.nl-2026.graduate-entrepreneur',
    claim:
      'International Graduate Entrepreneur needs a recent Memorial University or College of the North Atlantic credential and a post-graduation work permit.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, International Graduate Entrepreneur: Eligibility Criteria',
    sourceUrl: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/entrepreneurs/international-graduate-entrepreneur/eligibility-criteria/',
    checked: '2026-11-23',
  },
  caNl2026WorkerAge: {
    id: 'ca.pnp.nl-2026.worker-age',
    claim:
      'The three worker categories ask for an age of 21 to 59, money to settle and a plan to live in the province permanently; International Entrepreneur has the same age range.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, NLPNP Skilled Worker, Express Entry Skilled Worker and International Graduate category pages (updated 25 September 2026); International Entrepreneur: Eligibility Criteria',
    sourceUrl: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/applicants/skilled-worker/',
    checked: '2026-11-23',
  },
  caNl2026Invitations2025: {
    id: 'ca.pnp.nl-2026.invitations-2025',
    claim:
      'By our count of the province’s table, it issued 3,376 invitations in 13 rounds in 2025, and there were no rounds between 12 November 2025 and 6 March 2026.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Invitations to Apply (ITA) Updates (updated 19 November 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/invitations-to-apply-updates/',
    checked: '2026-11-23',
    note: 'Our sum of the published rows: 3 April to 12 November 2025, 2,473 NLPNP and 903 AIP.',
  },
  caNl2026Invitations2026: {
    id: 'ca.pnp.nl-2026.invitations-2026',
    claim:
      'From 6 March to 19 November 2026 the province issued 3,479 invitations in 26 rounds: 2,941 for the NLPNP and 538 for the AIP. From September, rounds came most weeks and none exceeded 131 invitations. The 19 November round invited 98 people, 32 of them for the NLPNP.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Invitations to Apply (ITA) Updates (updated 19 November 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/invitations-to-apply-updates/',
    checked: '2026-11-23',
    note: 'Totals are our sums of the published rows; each row\'s NLPNP and AIP split adds up to its total. The largest round from 4 September 2026 on was 131 (9 October).',
  },
  caNl2026InvitationNotNomination: {
    id: 'ca.pnp.nl-2026.invitation-not-nomination',
    claim:
      'The invitations table gives no score or occupation for any round. An invitation is not a nomination: the province says a full application can still be closed or refused.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Invitations to Apply (ITA) Updates; Expression of Interest Model (EOI) FAQs, Q10 (updated 25 September 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/faqs/expression-of-interest-model-faqs/',
    checked: '2026-11-23',
  },
  caNl2026EoiValidity: {
    id: 'ca.pnp.nl-2026.eoi-validity',
    claim:
      'An EOI stays in the pool for 12 months, then expires; a second EOI from the same person does not help and may breach the province’s policies.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Expression of Interest Model-Overview; EOI FAQs, Q8, Q20 and Q21 (updated 25 September 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/faqs/expression-of-interest-model-faqs/',
    checked: '2026-11-23',
  },
  caNl2026JobOfferAndCode: {
    id: 'ca.pnp.nl-2026.job-offer-invite-code',
    claim:
      'An EOI without a job or job offer from a Newfoundland and Labrador employer will not be considered. From outside Canada, a worker’s EOI without the employer’s invite code, which ties it to the employer’s JVA space, is invalid.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Expression of Interest Model (EOI) FAQs, Q5, Q6 and Q7 (updated 25 September 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/faqs/expression-of-interest-model-faqs/',
    checked: '2026-11-23',
  },
  caNl2026EcaTranslations: {
    id: 'ca.pnp.nl-2026.eca-translations',
    claim:
      'The Express Entry category needs a Canadian credential or an ECA, and every worker category asks for English or French translations of documents in other languages.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, NLPNP Express Entry Skilled Worker, Skilled Worker and International Graduate category pages (updated 25 September 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/applicants/express-entry-skilled-worker/',
    checked: '2026-11-23',
    note: '\'A Pakistani degree needs an ECA\' and \'such as Urdu\' are the post\'s application of these rules.',
  },
  caNl2026Representatives: {
    id: 'ca.pnp.nl-2026.representatives',
    claim:
      'You do not need a representative, and NLPNP and AIP forms are free. Applicants are expected to submit their own applications from their own account; a representative submitting under the applicant’s name counts as impersonation under the province’s misrepresentation policy. Only IRCC officers decide permanent residence.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Using Representatives and Consultants (updated 29 October 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/using-representatives-and-consultants/',
    checked: '2026-11-23',
  },
  caNl2026FeesRemoved: {
    id: 'ca.pnp.nl-2026.fees-removed',
    claim:
      'The province removed its nominee application fees in April 2022.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Provincial Immigration Fees Eliminated in Budget 2022 (13 April 2022)',
    sourceUrl: 'https://www.gov.nl.ca/releases/2022/ipgs/0413n02/',
    checked: '2026-11-23',
    note: 'The former fee amounts in the release are not printed.',
  },
  caNl2026FraudBan: {
    id: 'ca.pnp.nl-2026.fraud-ban',
    claim:
      'Fraudulent documents may lead to a ban from the NLPNP and AIP.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Expression of Interest Model (EOI) FAQs, Q19 (updated 25 September 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/faqs/expression-of-interest-model-faqs/',
    checked: '2026-11-23',
  },
  caNl2026VerifyDocuments: {
    id: 'ca.pnp.nl-2026.verify-documents',
    claim:
      'If an invitation or document reaches you through an employer or agent, the province suggests checking it by emailing immigration@gov.nl.ca.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, NL Provincial Nominee Program (NLPNP) Candidate FAQs, Q22 (updated 25 September 2026)',
    sourceUrl: 'https://www.gov.nl.ca/immigration/faqs/nl-provincial-nominee-program-candidate-faqs/',
    checked: '2026-11-23',
  },
  caNl2026PassiveInvestment: {
    id: 'ca.pnp.nl-2026.passive-investment',
    claim:
      'In March 2025 the province warned against passive investment schemes, in which an investor pays into a business for permanent residence without living in the province or running it, and said these are strictly prohibited.',
    provenance: 'primary',
    source: 'Government of Newfoundland and Labrador, Public Advisory: Caution Advised Against Passive Investment Immigration Proposals (27 March 2025)',
    sourceUrl: 'https://www.gov.nl.ca/releases/2025/ipgs/0327n01/',
    checked: '2026-11-23',
  },
  caNl2026ExpressEntryPoints: {
    id: 'ca.pnp.nl-2026.ee-600-points',
    claim:
      'A nomination under the Express Entry Skilled Worker category is worth 600 points under section 28(1) of the Ministerial Instructions.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system (current), s. 28(1) (page details 18 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
  },
  caNl2026FederalRoute: {
    id: 'ca.pnp.nl-2026.federal-route',
    claim:
      'IRCC’s provincial nominee page says the province decides whether you then apply through Express Entry or the separate (non-Express Entry) process.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program (page details 14 September 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
    checked: '2026-11-23',
  },
  caNl2026LevelsPlan: {
    id: 'ca.pnp.nl-2026.levels-2027-2029',
    claim:
      'On 20 November 2026 IRCC said its 2027–2029 levels plan increases planned PNP and AIP admissions, and that a time-limited measure will give provinces extra nominee space for workers already in Canada. No Newfoundland and Labrador notice on that space was found by 23 November 2026.',
    provenance: 'primary',
    source: 'IRCC, Building a stronger Canada through a well-managed, predictable immigration system (backgrounder, page details 20 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/11/building-a-stronger-canada-through-a-well-managed-predictable-immigration-system.html',
    checked: '2026-11-23',
    note: 'Read through a page-fetch tool (canada.ca timed out on direct download). The \'up to 100,000\' workers figure is a plan figure, not law or a statistic, and is not printed.',
  },
  caNl2026AipAbroad: {
    id: 'ca.pnp.nl-2026.aip-abroad',
    claim:
      'The Atlantic Immigration Program also takes applicants living abroad, with a job offer from a designated employer.',
    provenance: 'primary',
    source: 'IRCC, Atlantic Immigration Program (page details 1 September 2026); Government of Newfoundland and Labrador, Atlantic Immigration Program: Workers',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/atlantic-immigration.html',
    checked: '2026-11-23',
  },
  caPeiDraws2026: {
    id: 'ca.pnp.pei-2026.draws',
    claim:
      'As of 23 November 2026, PEI had sent 1,791 invitations this year, in 13 rounds, none of them to business applicants.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Expression of Interest Draws (published 20 November 2026)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws',
    checked: '2026-11-23',
    note: 'Official statistic. Labour and Express Entry invitations by round: 15 Jan 26; 19 Feb 109; 20 Mar 101; 16 Apr 127; 21 May 113; 18 Jun 182; 16 Jul 195; 20 Aug 181; 17 Sep 195; 7 Oct 90; 16 Oct 164; 9 Nov 192; 20 Nov 116 (sum 1,791). Business Work Permit Entrepreneur invitations: 0 in every round.',
  },
  caPeiLatestDraws: {
    id: 'ca.pnp.pei-2026.latest-draws',
    claim:
      'The five latest rounds (Labour and Express Entry invitations / business invitations): 17 September 2026, 195 / 0; 7 October 2026, 90 / 0; 16 October 2026, 164 / 0; 9 November 2026, 192 / 0; 20 November 2026, 116 / 0.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Expression of Interest Draws (published 20 November 2026)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws',
    checked: '2026-11-23',
  },
  caPeiDrawAttributes: {
    id: 'ca.pnp.pei-2026.draw-attributes',
    claim:
      'PEI says it invited individuals working in priority occupations and sectors, judged by their economic impact on the Island. Graduates of UPEI, Holland College and Collège de l’Île were prioritised.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Expression of Interest Draws (published 20 November 2026)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws',
    checked: '2026-11-23',
    note: 'The Selection Attributes cell spans all 13 rows of the 2026 table.',
  },
  caPeiPriorities: {
    id: 'ca.pnp.pei-2026.priorities',
    claim:
      'PEI is prioritising health care, trades and other shortage sectors; the draws page adds manufacturing, the stream pages childcare. All warn that people in sales and service may not be invited.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Expression of Interest Draws (20 November 2026) and the stream pages (13 January 2026)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws',
    checked: '2026-11-23',
  },
  caPeiSchedule2026: {
    id: 'ca.pnp.pei-2026.schedule',
    claim:
      'PEI published a monthly invitation schedule for 2026 (page dated 7 January 2026) and says it does not guarantee selection. The rounds on 7 October and 9 November were not on it; its next date is 17 December 2026.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Anticipated Invitation to Apply Schedule (published 7 January 2026)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/anticipated-invitation-to-apply-schedule',
    checked: '2026-11-23',
    note: 'Scheduled October and November dates are 15 October and 19 November. The comparison with the draws page is ours.',
  },
  caPeiItaWindow: {
    id: 'ca.pnp.pei-2026.ita-window',
    claim:
      'From 1 November 2025, invited candidates get 30 calendar days to submit a complete application, not 60; late applications are not accepted. PEI advises preparing documents before submitting a profile.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Submit Your Expression of Interest Profile (published 21 October 2026)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/service/submit-your-expression-of-interest-profile',
    checked: '2026-11-23',
    note: 'The January 2026 Workforce Application Guide (Step 3) also says up to 30 days.',
  },
  caPeiEoiQuestions: {
    id: 'ca.pnp.pei-2026.eoi-questions',
    claim:
      'From 21 October 2026, new profile questions in every worker (Workforce Category) stream; people with a submitted profile are asked to log in and update it.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Submit Your Expression of Interest Profile (published 21 October 2026)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/service/submit-your-expression-of-interest-profile',
    checked: '2026-11-23',
  },
  caPeiEoiRules: {
    id: 'ca.pnp.pei-2026.eoi-rules',
    claim:
      'An EOI is a profile, not an application. PEI ranks profiles on language, education, skill level, work experience and its own strategic priorities; a PEI job offer and Canadian work experience also count. A profile stays active for six months, and you can have only one at a time.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Expression of Interest Draws (attributes); Skilled Workers Outside Canada (profile rules)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws',
    checked: '2026-11-23',
  },
  caPeiFqrPoints: {
    id: 'ca.pnp.pei-2026.fqr-points',
    claim:
      'The points grid in the Workforce Application Guide rewards a foreign qualification verified by the regulated body in PEI, and says an ECA does not earn those points.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, PEI Workforce Application Guide (January 2026), Appendices A and B; also the Submit Your EOI Profile page',
    sourceUrl: 'https://www.princeedwardisland.ca/sites/default/files/publications/pei_workforce_application_guide.pdf',
    checked: '2026-11-23',
  },
  caPeiTranslation: {
    id: 'ca.pnp.pei-2026.translation',
    claim:
      'Documents not in English or French need a certified translation and a copy of the original.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, PEI Workforce Application Guide (January 2026), Step 4',
    sourceUrl: 'https://www.princeedwardisland.ca/sites/default/files/publications/pei_workforce_application_guide.pdf',
    checked: '2026-11-23',
    note: '“Such as Urdu certificates” is our example.',
  },
  caPeiMisrepresentation: {
    id: 'ca.pnp.pei-2026.misrepresentation',
    claim:
      'PEI refuses an application for misrepresentation and bars the applicant from applying again for two years.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, PEI Workforce Application Guide (January 2026), Step 6',
    sourceUrl: 'https://www.princeedwardisland.ca/sites/default/files/publications/pei_workforce_application_guide.pdf',
    checked: '2026-11-23',
  },
  caPeiFee: {
    id: 'ca.pnp.pei-2026.fee',
    claim:
      'Creating a profile is free. If invited, you pay a non-refundable fee when you submit; the amount is on each stream page and is not printed because no PEI regulation setting it was found.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Skilled Workers Outside Canada (and the other worker-stream pages)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/skilled-workers-outside-canada',
    checked: '2026-11-23',
  },
  caPeiStreams2026: {
    id: 'ca.pnp.pei-2026.streams',
    claim:
      'As of 23 November 2026, the PEI PNP has seven worker streams (Skilled Workers Outside Canada, Occupations in Demand, Intermediate Experience, PEI Express Entry, Skilled Workers in PEI, Critical Workers, International Graduates) and one business stream (Work Permit Stream).',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Immigrate to PEI as a Worker; Immigrate to PEI as an Entrepreneur',
    sourceUrl: 'https://www.princeedwardisland.ca/en/topic/immigrate-to-pei-as-a-worker',
    checked: '2026-11-23',
    note: 'Entrepreneur topic page: https://www.princeedwardisland.ca/en/topic/immigrate-to-pei-as-an-entrepreneur',
  },
  caPeiStreamFit: {
    id: 'ca.pnp.pei-2026.stream-fit',
    claim:
      'Who each stream is for: Skilled Workers Outside Canada, a TEER 0–3 job offer from a PEI employer the province approved first; Occupations in Demand, a permanent job in a listed occupation such as nurse aide or truck driver (recruitment abroad only with an approved employer, case by case); Intermediate Experience, a TEER 4 job offer and six months of Canadian work on an LMIA-based work permit; PEI Express Entry, a federal Express Entry profile, with priority to people living and working in PEI; Skilled Workers in PEI, people working for a PEI employer on a work permit; Critical Workers, people working full-time in PEI in a TEER 4 or 5 job; International Graduates, graduates of a publicly funded PEI institution with a post-graduation work permit.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, the seven worker-stream pages',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/skilled-workers-outside-canada',
    checked: '2026-11-23',
    note: 'The “From Pakistan?” column is our reading. Other stream pages: https://www.princeedwardisland.ca/en/information/office-of-immigration/occupations-in-demand, https://www.princeedwardisland.ca/en/information/office-of-immigration/intermediate-experience-stream, https://www.princeedwardisland.ca/en/information/office-of-immigration/pei-express-entry, https://www.princeedwardisland.ca/en/information/office-of-immigration/skilled-workers-in-pei, https://www.princeedwardisland.ca/en/information/office-of-immigration/critical-workers, https://www.princeedwardisland.ca/en/information/office-of-immigration/international-graduates',
  },
  caPeiSkilledOutside: {
    id: 'ca.pnp.pei-2026.skilled-outside',
    claim:
      'On 23 November 2026 the Skilled Workers Outside Canada page asked for: a full-time, non-seasonal TEER 0–3 job offer, permanent or for at least two years; an employer approved by PEI’s Office of Immigration before it makes the offer; two years of full-time work in the past five, and a post-secondary degree or diploma from a programme of at least two years; an age of 18 to 59, and legal status in your country of residence; CLB 4 in an IRCC-approved test from the past two years, or the employer’s confirmation on its job offer form; enough money to settle, and a genuine intention to live in PEI. With the employer’s approval in place, PEI provides a Work Permit Support Letter.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Skilled Workers Outside Canada (published 13 January 2026)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/skilled-workers-outside-canada',
    checked: '2026-11-23',
  },
  caPeiExpressEntryRoute: {
    id: 'ca.pnp.pei-2026.ee-route',
    claim:
      'If you already have a federal Express Entry profile, PEI says to submit under PEI Express Entry instead of the outside-PEI skilled worker category. PEI prioritises Express Entry invitations for people living and working in PEI.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Submit Your Expression of Interest Profile; PEI Express Entry',
    sourceUrl: 'https://www.princeedwardisland.ca/en/service/submit-your-expression-of-interest-profile',
    checked: '2026-11-23',
    note: 'PEI Express Entry page: https://www.princeedwardisland.ca/en/information/office-of-immigration/pei-express-entry',
  },
  caPeiEmployer: {
    id: 'ca.pnp.pei-2026.employer',
    claim:
      'The guide requires a business that has run in PEI for at least two years and could not fill the job in Canada.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, PEI Workforce Application Guide (January 2026), Employer Requirements',
    sourceUrl: 'https://www.princeedwardisland.ca/sites/default/files/publications/pei_workforce_application_guide.pdf',
    checked: '2026-11-23',
  },
  caPeiRecruitmentEvents: {
    id: 'ca.pnp.pei-2026.events',
    claim:
      'PEI’s recruitment events page listed no upcoming events on 23 November 2026. None of the past missions it lists (March 2023 to November 2025) was in Pakistan.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, International Recruitment Events',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/international-recruitment-events',
    checked: '2026-11-23',
  },
  caPeiWorkPermitStream: {
    id: 'ca.pnp.pei-2026.work-permit-stream',
    claim:
      'The Work Permit Stream is PEI’s only business route: you get a work permit, move to PEI and run your business under a performance agreement, and only then may be nominated. The page sets a minimum net worth, checked by a designated verifier, and an application fee (amounts not printed). The 2026 draws table shows no business invitations to 20 November.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Work Permit Stream (published 1 January 2025); Expression of Interest Draws',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/work-permit-stream',
    checked: '2026-11-23',
  },
  caPeiAip2026: {
    id: 'ca.pnp.pei-2026.aip',
    claim:
      'On its page dated 5 November 2026, PEI accepts AIP endorsements only for workers in health care, construction and manufacturing. It is not accepting transport truck drivers (NOC 73300), charges no provincial fee for endorsement, and designated employers can now submit an EOI profile for each candidate (soft launch).',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, Atlantic Immigration Program – EOI Endorsement (published 5 November 2026)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/information/office-of-immigration/atlantic-immigration-program-eoi-endorsement',
    checked: '2026-11-23',
  },
  caPeiPopulationFramework: {
    id: 'ca.pnp.pei-2026.population-framework',
    claim:
      'On 22 February 2024 PEI’s population framework cut its use of federal nominations for 2024, to ease pressure on public services and infrastructure, and aligned the rest with priority sectors.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, news release (22 February 2024)',
    sourceUrl: 'https://www.princeedwardisland.ca/en/news/province-launches-peis-population-framework-and-introduces-measures-to-slow-down-population',
    checked: '2026-11-23',
    note: 'The 25% figure and the sector targets are in the release but are not printed.',
  },
  caPeiFederalCut: {
    id: 'ca.pnp.pei-2026.federal-cut',
    claim:
      'PEI’s 2025 budget paper says Ottawa cut provincial nominee numbers for 2025 to 2027 (in winter 2024), and PEI expected this to push nominees below its revised targets.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Budget Paper on the Economy 2025',
    sourceUrl: 'https://www.princeedwardisland.ca/sites/default/files/publications/2025_budget_paper_on_the_economy.pdf',
    checked: '2026-11-23',
    note: 'The size of the cut (fifty per cent) is in the budget paper but is not printed.',
  },
  caPeiAfterNomination: {
    id: 'ca.pnp.pei-2026.after-nomination',
    claim:
      'You must apply to IRCC for permanent residence within six months of receiving the nomination certificate. Until you become a permanent resident, you must keep the nomination’s conditions and stay with the same employer.',
    provenance: 'primary',
    source: 'Government of Prince Edward Island, Office of Immigration, PEI Workforce Application Guide (January 2026), Step 6; Skilled Workers Outside Canada',
    sourceUrl: 'https://www.princeedwardisland.ca/sites/default/files/publications/pei_workforce_application_guide.pdf',
    checked: '2026-11-23',
  },
  caExpressEntryPnp600: {
    id: 'ca.ee.pnp-600',
    claim:
      'A nomination through Express Entry adds 600 points under section 28(1) of the Ministerial Instructions.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system (current), s. 28(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
  },
  caIrccPnpRoutes: {
    id: 'ca.pnp.ircc-routes',
    claim:
      'Nominees apply to IRCC through Express Entry or with their certificate through the non-Express Entry process; IRCC makes the final decision.',
    provenance: 'primary',
    source: 'IRCC, Immigrate as a provincial nominee (page details 14 September 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
    checked: '2026-11-23',
  },
  caNbpnpStreams2026: {
    id: 'ca.pnp.nb-2026.streams',
    claim:
      'As of 23 November 2026, the New Brunswick PNP has four streams and two pilots: the Skilled Worker, Express Entry, Strategic Initiative and Business Immigration streams, and the Critical Worker Pilot and Private Career College Graduate Pilot.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Provincial Nominee Program',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program.html',
    checked: '2026-11-23',
    note: 'gnb.ca returns a Cloudflare challenge to scripts; read in an ordinary desktop browser, where the check passed without interaction.',
  },
  caNbpnpEoiPool: {
    id: 'ca.pnp.nb-2026.eoi-pool',
    claim:
      'You submit a free expression of interest (EOI) through the INB portal. It joins a pool and stays valid for 365 days. The province says EOIs are not considered first come, first served.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Provincial Nominee Program (Expression of interest; Invitations to apply)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program.html',
    checked: '2026-11-23',
    note: '“Free of charge” is on each stream page; 365 days and “not considered on a first come, first served basis” are on the NBPNP page.',
  },
  caNbpnpSelection: {
    id: 'ca.pnp.nb-2026.selection',
    claim:
      'Invitations follow labour market needs, the province’s allocation and its priorities. Skilled Worker, Express Entry and the Strategic Initiative have scheduled draws. Meeting the criteria guarantees nothing.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Provincial Nominee Program',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program.html',
    checked: '2026-11-23',
  },
  caNbpnp2025Pathways: {
    id: 'ca.pnp.nb-2026.changes-2025-pathways',
    claim:
      'Early 2025: Skilled Worker split into three pathways, including Priority Occupations. Express Entry was rebuilt as Employment in New Brunswick and New Brunswick Interest.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Important notices - Archived (2025 January and February notices, archived 18 February 2025 and 3 February 2026)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices/notices-archive-2025.html',
    checked: '2026-11-23',
    note: 'Filed under ‘January notices’ and ‘February notices’ 2025 with no exact day, hence ‘Early 2025’. The notice spells it ‘New Brunswick Interests’; the stream page says ‘New Brunswick Interest’.',
  },
  caNbAip2025Pause: {
    id: 'ca.pnp.nb-2026.aip-pause-2025',
    claim:
      '4 April 2025: the Atlantic Immigration Program paused for the rest of 2025, its allocation used up.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Important notices - Archived (April 2025 notice, archived 3 February 2026)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices/notices-archive-2025.html',
    checked: '2026-11-23',
  },
  caNbpnpSi2025: {
    id: 'ca.pnp.nb-2026.si-2025',
    claim:
      'Through 2025: the Strategic Initiative, for French speakers, took no new EOIs. Its rounds resumed in January 2026.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Important notices - Archived (‘NB Strategic Initiative not returning for 2025’, archived 6 January 2026)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices/notices-archive-2025.html',
    checked: '2026-11-23',
    note: 'Second sentence rests on the 13–15 January 2026 Strategic Initiative round on https://www.gnb.ca/en/topic/family-home-community/immigration/invitation-selection-rounds.html',
  },
  caNbpnpSectorRestrictions: {
    id: 'ca.pnp.nb-2026.sector-restrictions',
    claim:
      '3 February 2026: Skilled Worker and Express Entry stopped considering accommodation and food services jobs, plus listed retail, cashier and food-processing jobs. The list also names cashiers, retail salespersons and fish plant workers in any sector. A cook or cleaner may still submit an EOI if the employer is outside that sector.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Important notices (Skilled Worker and Express Entry streams – NOC and sector restrictions, effective February 3, 2026)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices.html',
    checked: '2026-11-23',
    note: 'Sector is NAICS 72. The ‘regardless of sectors’ list includes NOC 65100 Cashiers, 64100 Retail salespersons, 94142 Fish and seafood plant workers, 95106 and 95107 processing labourers. Cooks (63200) and light duty cleaners (65310) are on the NAICS 72 list, which exempts employers not directly in that sector.',
  },
  caNbAip2026Pool: {
    id: 'ca.pnp.nb-2026.aip-pool-2026',
    claim:
      '3 February 2026: the Atlantic Immigration Program moved endorsements into a pool and paused new employer designations. Endorsements are selected from a pool.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Important notices - Archived (2026 AIP notices effective February 3, 2026, archived 14 September 2026)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices/notices-archive-2025.html',
    checked: '2026-11-23',
  },
  caNbpnpExperienceSectors: {
    id: 'ca.pnp.nb-2026.experience-sectors',
    claim:
      '4 May 2026: New Brunswick Experience invitations limited to health care, education and construction, as the stream’s allocation ran low.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Important notices (Skilled Worker stream – Invitations to apply limited to three sectors, effective May 4, 2026)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices.html',
    checked: '2026-11-23',
    note: 'Notice: “due to limited remaining allocation under this stream”; “until further notice”.',
  },
  caNbAipDesignationPause: {
    id: 'ca.pnp.nb-2026.aip-designation-pause',
    claim:
      'On 14 September 2026, New Brunswick kept new Atlantic Immigration Program employer designations paused for the rest of 2026.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Important notices (Employer designation application – Application intake paused, effective September 14, 2026)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices.html',
    checked: '2026-11-23',
  },
  caNbAipOutsideCanada: {
    id: 'ca.pnp.nb-2026.aip-outside-canada',
    claim:
      'Under the province’s notices of 14 September and 14 October 2026, AIP endorsements for jobs offered to people living outside Canada are limited to Government of New Brunswick recruitment in health care, education and construction. TEER 5 jobs are not eligible.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Important notices (Candidate endorsement application – NOC and sector restrictions, effective October 14, 2026)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices.html',
    checked: '2026-11-23',
    note: 'The 3 February 2026 version of the limit is on the archive page: https://www.gnb.ca/en/topic/family-home-community/immigration/important-notices/notices-archive-2025.html',
  },
  caNbAipSelectedNov2026: {
    id: 'ca.pnp.nb-2026.aip-selected-nov',
    claim:
      'On 6 and 16 November 2026, the province selected 73 Atlantic Immigration Program applications for processing.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Invitation and selection rounds (Latest rounds)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/invitation-selection-rounds.html',
    checked: '2026-11-23',
    note: 'Official dated statistic.',
  },
  caNbpnpRoundSkilled: {
    id: 'ca.pnp.nb-2026.round-sw-13nov',
    claim:
      'On 13 November 2026, a Skilled Worker round issued 198 invitations in the New Brunswick Graduates and Experience pathways.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Invitation and selection rounds (Latest rounds)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/invitation-selection-rounds.html',
    checked: '2026-11-23',
    note: 'Official dated statistic; cut-off 10 November 2026.',
  },
  caNbpnpRoundStrategic: {
    id: 'ca.pnp.nb-2026.round-si-2nov',
    claim:
      'On 2 November 2026, a Strategic Initiative round issued 192 invitations.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Invitation and selection rounds (Latest rounds)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/invitation-selection-rounds.html',
    checked: '2026-11-23',
    note: 'Official dated statistic; pathways Francophone Workers in New Brunswick and New Brunswick Francophone Priorities.',
  },
  caNbpnpEeRounds: {
    id: 'ca.pnp.nb-2026.ee-rounds',
    claim:
      'Every Express Entry stream round listed for 2025 and 2026 was for the Employment in New Brunswick pathway. The latest, on 17 September 2026, issued 102 invitations.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Invitation and selection rounds (Previous invitations and selections in 2026; Previous invitations in 2025)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/invitation-selection-rounds.html',
    checked: '2026-11-23',
    note: '2025 rounds: 9 Apr, 16 Jun, 11–19 Aug, 8–9 Oct, 16 Nov, 9 Dec. 2026 rounds: 13–15 Jan, 2 Feb, 3–6 Mar, 30 Mar, 30 Apr, 4 Jun, 16 Jul, 17 Sep. All ‘Employment in New Brunswick’.',
  },
  caNbpnpPriorityRounds: {
    id: 'ca.pnp.nb-2026.priority-rounds',
    claim:
      'The rounds page names Priority Occupations once, for 17 June 2025: 12 invitations, in health care. A 16–18 July 2026 round listed “New Brunswick Priorities” with New Brunswick Experience: 58 invitations in all.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Invitation and selection rounds (Previous invitations in 2025; Previous invitations and selections in 2026)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/invitation-selection-rounds.html',
    checked: '2026-11-23',
    note: 'The page does not say whether “New Brunswick Priorities” is the Priority Occupations pathway, so the post quotes the label as printed.',
  },
  caNbpnpFeesRegulation: {
    id: 'ca.pnp.nb-2026.fees-regulation',
    claim:
      'New Brunswick Regulation 2012-36 sets the fee at $250 (Canadian) for a skilled worker application and $2,000 for a business application.',
    provenance: 'primary',
    source: 'New Brunswick Regulation 2012-36 under the Financial Administration Act (O.C. 2012-110, filed March 26, 2012, in force April 1, 2012), ss. 2–3, consolidated text on laws.gnb.ca',
    sourceUrl: 'https://laws.gnb.ca/en/document/ar/2012-36',
    checked: '2026-11-23',
    note: 'laws.gnb.ca also sits behind the Cloudflare challenge; read in a desktop browser. The regulation still names the Department of Post-Secondary Education, Training and Labour.',
  },
  caNbpnpFeesPages: {
    id: 'ca.pnp.nb-2026.fees-pages',
    claim:
      'If invited, you pay a non-refundable fee before submitting the full application. The stream pages charge $250 for Skilled Worker, Express Entry and Strategic Initiative applications, and $2,000 for Business Immigration.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), stream pages (Skilled Worker, Express Entry, Strategic Initiative, Business Immigration)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/skilled-worker-stream.html',
    checked: '2026-11-23',
    note: 'Same wording on https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/express-entry-stream.html and https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/strategic-initiative.html ($250) and on https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/business-immigration-stream.html ($2,000). Amounts printed because Regulation 2012-36 sets them.',
  },
  caNbpnpExperience: {
    id: 'ca.pnp.nb-2026.experience',
    claim:
      'Skilled Worker: New Brunswick Experience is for full-time workers already living in New Brunswick.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Skilled Worker stream',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/skilled-worker-stream.html',
    checked: '2026-11-23',
    note: 'Page: working full time for the supporting employer, six months with that employer, lived in New Brunswick for the past six months.',
  },
  caNbpnpGraduates: {
    id: 'ca.pnp.nb-2026.graduates',
    claim:
      'Skilled Worker: New Brunswick Graduates is for New Brunswick graduates with a New Brunswick job, living there.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Skilled Worker stream',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/skilled-worker-stream.html',
    checked: '2026-11-23',
    note: 'Page: PGWP-eligible programme at a New Brunswick DLI; working in or accepted a full-time job with the supporting employer; lived in New Brunswick for the past six months.',
  },
  caNbpnpPriorityOccupations: {
    id: 'ca.pnp.nb-2026.priority-occupations',
    claim:
      'Priority Occupations (Skilled Worker): a job offer in a priority occupation, made directly through a provincial government recruitment mission.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Skilled Worker stream',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/skilled-worker-stream.html',
    checked: '2026-11-23',
    note: 'Page: “the offer must be a direct result of a recruitment mission led by the Government of New Brunswick”; the NOC must be a priority code listed in the guide (guide PDF not readable).',
  },
  caNbpnpEeEmployment: {
    id: 'ca.pnp.nb-2026.ee-employment',
    claim:
      'Express Entry: Employment in New Brunswick is for Express Entry candidates living and working full time in New Brunswick. That pathway is for people already living and working in the province.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Express Entry stream',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/express-entry-stream.html',
    checked: '2026-11-23',
    note: 'Page: living and working full time in New Brunswick for the past 12 months, in TEER 0–3.',
  },
  caNbpnpEeInterest: {
    id: 'ca.pnp.nb-2026.ee-interest',
    claim:
      'New Brunswick Interest (Express Entry): a letter of interest sent to your Express Entry profile, plus the federal proof of funds.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Express Entry stream',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/express-entry-stream.html',
    checked: '2026-11-23',
  },
  caNbpnpStrategic: {
    id: 'ca.pnp.nb-2026.strategic',
    claim:
      'Strategic Initiative, for French speakers: Francophone Workers with a recruitment-mission job offer, or Francophone Priorities with a letter of interest. The stream also covers workers, graduates and remote workers in the province.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Strategic Initiative',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/strategic-initiative.html',
    checked: '2026-11-23',
    note: 'Francophone Workers: six months’ residence ‘not required if you were offered a job through a recruitment mission led by the Government of New Brunswick’. Francophone Priorities: Université de Moncton or CCNB graduate living in New Brunswick, or a letter of interest. Remote workers must have lived in New Brunswick for 12 months.',
  },
  caNbpnpBusiness: {
    id: 'ca.pnp.nb-2026.business',
    claim:
      'Business Immigration is for entrepreneurs who will start or buy, and run, a New Brunswick business. Once approved, you apply for a work permit, open the business and ask for nomination after six months of operating it.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Business Immigration stream',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/business-immigration-stream.html',
    checked: '2026-11-23',
    note: 'Net worth and investment minimums are on the page only and are not printed.',
  },
  caNbCriticalWorkerPilot: {
    id: 'ca.pnp.nb-2026.critical-worker-pilot',
    claim:
      'Critical Worker Pilot: only through its six participating employers. The province does not accept direct applications.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Critical Worker Pilot (served from www2.gnb.ca)',
    sourceUrl: 'https://www2.gnb.ca/content/gnb/en/corporate/promo/immigration/immigrating-to-nb/nb-immigration-program-streams/nb-critical-workers-pilot.html',
    checked: '2026-11-23',
    note: 'Lists Cooke Aquaculture, J.D. Irving, Groupe Savoie, Groupe Westco, Imperial Manufacturing Group and McCain Foods; ‘not currently open to broader participation’.',
  },
  caNbPccgPilot: {
    id: 'ca.pnp.nb-2026.pccg-pilot',
    claim:
      'Private Career College Graduate Pilot: graduates of selected New Brunswick private career college programmes.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Private Career College Graduate Pilot Program',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/pccg-pilot-program.html',
    checked: '2026-11-23',
  },
  caNbpnpMostInProvince: {
    id: 'ca.pnp.nb-2026.most-in-province',
    claim:
      'As of 23 November 2026, most New Brunswick Provincial Nominee Program (NBPNP) pathways are for people already living and working in New Brunswick. From Pakistan, the remaining routes need a job offer from a provincial recruitment mission, a letter of interest from the province, or a business.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), stream pages (Skilled Worker, Express Entry, Strategic Initiative, Business Immigration) and pilot pages',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/skilled-worker-stream.html',
    checked: '2026-11-23',
    note: 'Pathways requiring residence in New Brunswick: New Brunswick Experience, New Brunswick Graduates, Employment in New Brunswick, Francophone Workers (unless a mission job offer), the francophone-graduate priority, Francophones Working Remotely, and the Private Career College Graduate Pilot. Not requiring it: Priority Occupations (mission offer), New Brunswick Interest and the Francophone Priorities letter (letter of interest), Business Immigration, and the Critical Worker Pilot (participating employers only). The post’s ‘From Pakistan?’ column and the ‘On our reading’ paragraph are marked in the post as our inference and are not listed as facts.',
  },
  caNbRecruitmentEvents: {
    id: 'ca.pnp.nb-2026.recruitment-events',
    claim:
      'On 23 November 2026, the province’s recruitment events page listed no virtual events. Its one international event runs in France and Belgium, 26 November to 7 December.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Recruitment events',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/events-calendar.html',
    checked: '2026-11-23',
    note: 'Event: Destination New Brunswick (Lyon, Lille, Paris, Brussels, Marseille). The page also listed no national events.',
  },
  caNbCandidateInfo: {
    id: 'ca.pnp.nb-2026.candidate-info',
    claim:
      'Language: IELTS General Training, CELPIP or PTE Core for English; TEF Canada or TCF Canada for French; results under two years old. Without a credential from a Canadian designated learning institution, you need an ECA. Documents not in English or French need an independent translator; you, a relative or your representative’s staff cannot translate them. Create your own INB profile with your own email; a representative is optional and gives no priority. The province says not to apply if you are not living lawfully in your current country. False documents lead to refusal, a ban on reapplying and a report to IRCC.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), Important information for every candidate',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/important-information.html',
    checked: '2026-11-23',
    note: 'The page sets the ban at five years; the post leaves the number out.',
  },
  caNbAfterNomination: {
    id: 'ca.pnp.nb-2026.after-nomination',
    claim:
      'You apply to IRCC for permanent residence before the certificate expires, including all family members. New Brunswick says IRCC makes the final decision. Your certificate says whether you apply through Express Entry or outside it.',
    provenance: 'primary',
    source: 'Government of New Brunswick (Immigration New Brunswick), New Brunswick Provincial Nominee Program (Overview; After nomination)',
    sourceUrl: 'https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program.html',
    checked: '2026-11-23',
  },
  caNbIrccTwoRoutes: {
    id: 'ca.pnp.nb-2026.ircc-routes',
    claim:
      'IRCC’s provincial nominee page explains both routes, Express Entry and non-Express Entry.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program (page details 2026-09-14)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
    checked: '2026-11-23',
  },
  caEeNomination600: {
    id: 'ca.pnp.nb-2026.ee-600',
    claim:
      'An Express Entry nomination is worth 600 points under section 28(1) of the Ministerial Instructions.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system (current; page details 2026-11-18), s. 28(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
  },
  caSkEoiNoDrawSince2024: {
    id: 'ca.sk.eoi-last-draw',
    claim:
      'Saskatchewan’s published EOI selection results list three International Skilled Worker draws in 2024 (7 March, 13 June, 12 September) and none since.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, SINP International Skilled Workers: EOI Selection Results (updated 12 September 2024)',
    sourceUrl: 'https://publications.saskatchewan.ca/api/v1/products/102708/formats/113850/download',
    checked: '2026-11-23',
    note: 'The document says it is updated whenever a new selection is made; its latest update is 12 September 2024.',
  },
  caSkEoiDraws2024: {
    id: 'ca.sk.eoi-draws-2024',
    claim:
      'Lowest score invited (number invited): 12 September 2024, Occupation In-Demand 88 (32), Saskatchewan Express Entry 88 (57); 13 June 2024, 88 (32) and 88 (88); 7 March 2024, 89 (14) and 89 (21).',
    provenance: 'primary',
    source: 'Government of Saskatchewan, SINP International Skilled Workers: EOI Selection Results (updated 12 September 2024)',
    sourceUrl: 'https://publications.saskatchewan.ca/api/v1/products/102708/formats/113850/download',
    checked: '2026-11-23',
    note: 'Official statistics.',
  },
  caSkEoiNoScheduledDraws: {
    id: 'ca.sk.eoi-no-scheduled-draws',
    claim:
      'On 23 November 2026, the International Skilled Worker EOI page said there were no scheduled EOI draws. A profile stays valid for a year.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Skilled Worker EOI System',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-eoi-system',
    checked: '2026-11-23',
  },
  caSkEoiPool: {
    id: 'ca.sk.eoi-pool',
    claim:
      'The EOI pool serves the Occupation In-Demand and Saskatchewan Express Entry sub-categories, which need no job offer.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Skilled Worker EOI System',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-eoi-system',
    checked: '2026-11-23',
  },
  caSkPointsGrid: {
    id: 'ca.sk.points-grid',
    claim:
      'You need at least 60 of 110 points on the SINP points grid. Education, work experience, language and age give up to 80. For Occupation In-Demand and Saskatchewan Express Entry, a close relative living in Saskatchewan adds 20, and past work or study there 5 each.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Assess Your Eligibility (SINP International Skilled Worker Points Grid)',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/assess-your-eligibility',
    checked: '2026-11-23',
    note: 'Grid published by the province; the topic brief allows grid points.',
  },
  caSkMarch2025Changes: {
    id: 'ca.sk.changes-2025-03-27',
    claim:
      'On 27 March 2025, Saskatchewan prioritised recruitment from abroad for health, agriculture and the skilled trades, limited other sectors to temporary residents already in Canada, said Express Entry and Occupation In-Demand applications without a Saskatchewan job offer would be returned, and permanently closed the Entrepreneur, International Graduate Entrepreneur and Farm Owner/Operator categories.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Government Announces End to Temporary SINP Pause (27 March 2025)',
    sourceUrl: 'https://www.saskatchewan.ca/government/news-and-media/2025/march/27/government-announces-end-to-temporary-sinp-pause',
    checked: '2026-11-23',
    note: 'The post leaves out the release’s federal allocation figures.',
  },
  caSkEntrepreneurFarmClosed: {
    id: 'ca.sk.entrepreneur-closed',
    claim:
      'The Entrepreneur and Farm categories have been closed since 27 March 2025.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Entrepreneur Application - SINP',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/entrepreneur/applicants-entrepreneurs',
    checked: '2026-11-23',
    note: 'Re-confirms the existing lib/facts.ts entry caSaskatchewanEntrepreneurClosed.',
  },
  caSk2026Plan: {
    id: 'ca.sk.plan-2026',
    claim:
      'The SINP FAQ, updated 19 December 2025, set out the 2026 plan: seven priority sectors (healthcare, agriculture, skilled trades, mining, manufacturing, energy, technology), and caps on accommodation and food services, trucking and retail trade.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Immigration FAQs (updated 19 December 2025)',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/immigration-faqs',
    checked: '2026-11-23',
    note: 'Allocation counts and percentages in the FAQ are left out of the post.',
  },
  caSkEpaReplacedJaf: {
    id: 'ca.sk.epa-replaced-jaf',
    claim:
      'The SINP replaced Job Approval Forms with Employer Position Assessments (EPAs), to reduce duplication and strengthen programme integrity; the candidate confirms the job details online before applying.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Immigration FAQs (updated 19 December 2025)',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/immigration-faqs',
    checked: '2026-11-23',
  },
  caSkIllegalToCharge: {
    id: 'ca.sk.illegal-to-charge',
    claim:
      'Saskatchewan’s FAQ says it is illegal to ask a foreign worker to pay for a job.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Immigration FAQs (updated 19 December 2025)',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/immigration-faqs',
    checked: '2026-11-23',
  },
  caSkFee: {
    id: 'ca.sk.fee',
    claim:
      'Since 1 April 2026, a worker application to the SINP costs a non-refundable $500 (Canadian), with or without a job offer. A review of an ineligibility decision costs $250, refunded if the decision is reversed.',
    provenance: 'primary',
    source: 'The Immigration Services Regulations, SR 70/2024, s. 29(2)(a), (3)(a) and (4), as replaced by s. 8 of SR 13/2026 (filed 13 March 2026, in force 1 April 2026)',
    sourceUrl: 'https://publications.saskatchewan.ca/api/v1/products/124783/formats/145602/download',
    checked: '2026-11-23',
    note: 'Set in a Saskatchewan regulation. The Gazette text of SR 13/2026, with its s. 9 commencement, was also read.',
  },
  caSkFeeAmendment: {
    id: 'ca.sk.fee-amendment',
    claim:
      'SR 13/2026 replaced section 29 of The Immigration Services Regulations and came into force on 1 April 2026.',
    provenance: 'primary',
    source: 'The Saskatchewan Gazette, Part II, 20 March 2026, SR 13/2026, ss. 8–9',
    sourceUrl: 'https://publications.saskatchewan.ca/api/v1/products/128295/formats/153819/download',
    checked: '2026-11-23',
  },
  caSkFeeBeforeApril2026: {
    id: 'ca.sk.fee-before-2026',
    claim:
      'Before 1 April 2026, SINP applications with a job offer were free.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Summary of 2026-27 Changes to Fees and Charges (March 2026)',
    sourceUrl: 'https://www.saskatchewan.ca/-/media/news-release-backgrounders/2026/mar/backgrounder---summary-of-2026-27-fees-and-charges.pdf',
    checked: '2026-11-23',
  },
  caSkSixSubcategories: {
    id: 'ca.sk.isw-subcategories',
    claim:
      'The International Skilled Worker procedures, last updated 29 April 2026, list six sub-categories: Employment Offer, Agriculture Talent Pathway, Health Talent Pathway, Innovation and Tech Talent Pathway, Occupation In-Demand and Saskatchewan Express Entry. The four that need a job offer accept applicants living abroad.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Skilled Worker: Procedures and Guidelines (last updated 29 April 2026)',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/procedures-and-guidelines',
    checked: '2026-11-23',
    note: 'Living-abroad eligibility read on each of the four sub-category pages.',
  },
  caSkEmploymentOffer: {
    id: 'ca.sk.employment-offer',
    claim:
      'Employment Offer needs a permanent, full-time job at TEER 0–3 and at least 60 points. Truck drivers must use the Existing Work Permit route; health occupations in NOC category 3 must use the Health Talent Pathway (or the Students sub-category).',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Skilled Worker: Employment Offer',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-with-employment-offer',
    checked: '2026-11-23',
  },
  caSkExistingWorkPermit: {
    id: 'ca.sk.existing-work-permit',
    claim:
      'The Existing Work Permit sub-category is for people already working in Saskatchewan on a valid work permit.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Skilled Worker With Existing Work Permit',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-with-saskatchewan-experience/applicants-with-existing-work-permit',
    checked: '2026-11-23',
  },
  caSkAgriculturePathway: {
    id: 'ca.sk.agriculture-pathway',
    claim:
      'The Agriculture Talent Pathway covers listed farm, greenhouse and food-processing jobs, with high school as the minimum education.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Agriculture Talent Pathway',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/agriculture-talent-pathway',
    checked: '2026-11-23',
  },
  caSkHealthPathway: {
    id: 'ca.sk.health-pathway',
    claim:
      'The Health Talent Pathway covers physicians, nurses and other listed health occupations, with Express Entry and non-Express Entry versions.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Health Talent Pathway',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/health-talent-pathway',
    checked: '2026-11-23',
  },
  caSkTechPathway: {
    id: 'ca.sk.tech-pathway',
    claim:
      'The Innovation and Tech Talent Pathway covers listed technology, engineering and science occupations, with Express Entry and non-Express Entry versions.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Innovation and Tech Talent Pathway',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/sinp-innovation-tech-talent-pathway',
    checked: '2026-11-23',
  },
  caSkSeeExpressEntry: {
    id: 'ca.sk.see-express-entry',
    claim:
      'Saskatchewan Express Entry requires a valid Express Entry profile number and job seeker code.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Skilled Worker: Saskatchewan Express Entry',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-saskatchewan-express-entry',
    checked: '2026-11-23',
  },
  caSkOidNoOffer: {
    id: 'ca.sk.oid-no-offer',
    claim:
      'Occupation In-Demand is for skilled workers without a Saskatchewan job offer, and is entered through the EOI system.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Skilled Worker: Occupation In-Demand',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-occupations-in-demand',
    checked: '2026-11-23',
  },
  caSkHealthPool: {
    id: 'ca.sk.health-eoi-pool',
    claim:
      'Health workers without an offer can join the International Healthcare Worker EOI pool; Saskatchewan health employers may contact them, but the pool is not an application.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Healthcare Worker EOI Pool',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-healthcare-worker-eoi-pool',
    checked: '2026-11-23',
  },
  caSkEpaRules: {
    id: 'ca.sk.epa-rules',
    claim:
      'An EPA needs an employer with a Certificate of Registration and a permanent, full-time job at a physical Saskatchewan workplace (not work from home), a fair wage measured against Job Bank’s regional median wage, and a real vacancy, such as a post recently or soon to be vacated by a full-time employee.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Step 2: Obtain SINP Approval for the Job Position',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/hire-a-foreign-worker/recruit-and-hire-workers-with-sinp/hiring-workers-for-permanent-jobs/obtain-sinp-approval-for-the-job-position',
    checked: '2026-11-23',
  },
  caSkOverseasCandidates: {
    id: 'ca.sk.overseas-candidates',
    claim:
      'Employers outside the capped sectors may name overseas candidates for recent vacancies; in accommodation and food services, retail trade and trucking the candidate must be a current employee.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Step 2: Obtain SINP Approval for the Job Position',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/hire-a-foreign-worker/recruit-and-hire-workers-with-sinp/hiring-workers-for-permanent-jobs/obtain-sinp-approval-for-the-job-position',
    checked: '2026-11-23',
    note: '“Closed to someone still in Pakistan” is our inference from this rule.',
  },
  caSkExclusionList: {
    id: 'ca.sk.job-offer-exclusions',
    claim:
      'The current list of business types and occupations excluded from SINP job-offer approval is dated 12 August 2026.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, Excluded Business Types and Occupations: SINP Job Offer Categories (12 August 2026)',
    sourceUrl: 'https://publications.saskatchewan.ca/api/v1/products/123540/formats/149130/download',
    checked: '2026-11-23',
  },
  caSkNominations2025: {
    id: 'ca.sk.nominations-2025',
    claim:
      'The SINP issued 5,061 nominations in 2025, 4,799 of them to applicants with job offers. Of those nominees, 95 per cent were temporary residents at the time of nomination.',
    provenance: 'primary',
    source: 'Ministry of Immigration and Career Training, Annual Report 2025-26, p. 12',
    sourceUrl: 'https://publications.saskatchewan.ca/api/v1/products/129306/formats/156017/download',
    checked: '2026-11-23',
    note: 'Official statistics. The report’s “of those nominees” is kept as written: it may mean the 4,799 or all 5,061.',
  },
  caSkNominations2026: {
    id: 'ca.sk.nominations-2026-ytd',
    claim:
      'On 23 November 2026, the SINP processing statistics page showed 4,023 nominations issued in 2026, against an allocation of 5,261. It is updated quarterly and leaves out applications still in process.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, SINP Processing Statistics',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/sinp-processing-statistics',
    checked: '2026-11-23',
    note: 'Official statistics; the table carries no date of its own. Processing times on the same page are left out.',
  },
  caSkProofOfEmployment: {
    id: 'ca.sk.proof-of-employment',
    claim:
      'Each reference letter must come with one government-issued proof of that employment; accepted proofs include provident fund, social security and income tax records.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Skilled Worker: Employment Offer',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-with-employment-offer',
    checked: '2026-11-23',
  },
  caSkEcaTranslations: {
    id: 'ca.sk.eca-translations',
    claim:
      'Degrees or diplomas from outside Canada need an educational credential assessment; documents not in English or French need a translation that meets the SINP’s translator rules; an incomplete application is closed and cannot be reopened.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Skilled Worker: Employment Offer',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-with-employment-offer',
    checked: '2026-11-23',
    note: 'The closed-application rule is also on the Procedures and Guidelines page. Applying the translation rule to Urdu is our wording.',
  },
  caSkMisrepresentationBan: {
    id: 'ca.sk.misrepresentation-ban',
    claim:
      'False information in an EOI or application can bring a suspension from the SINP of two to five years.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, SINP Procedures and Guidelines (updated 29 April 2026)',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/procedures-and-guidelines',
    checked: '2026-11-23',
    note: 'The Occupation In-Demand page says two years, or more for a repeat offence; the Procedures and Guidelines say two to five years.',
  },
  caSkAfterNomination: {
    id: 'ca.sk.after-nomination',
    claim:
      'A nominee must apply to IRCC for permanent residence within six months of nomination. A job-offer nominee not yet working for the employer must also apply for an employer-specific work permit, as a condition of the nomination.',
    provenance: 'primary',
    source: 'Government of Saskatchewan, International Skilled Worker: Procedures and Guidelines (last updated 29 April 2026)',
    sourceUrl: 'https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/procedures-and-guidelines',
    checked: '2026-11-23',
  },
  caPnpTwoRoutes: {
    id: 'ca.pnp.ircc-routes',
    claim:
      'IRCC describes a non-Express Entry route and an Express Entry route for provincial nominees.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program (page details 14 September 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
    checked: '2026-11-23',
  },
  caPnp600Points: {
    id: 'ca.ee.pnp-600',
    claim:
      'Through Express Entry, a provincial nomination is worth 600 points under section 28(1) of the Ministerial Instructions.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system (current, page details 18 November 2026), s. 28(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
  },
  caPnpEnhancedPoints2026: {
    id: 'ca.pnp.ee-or-pnp.enhanced-600',
    claim:
      'As of 23 November 2026, a nomination through a province’s Express Entry stream adds 600 points to your CRS score.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 28(1) (in force since 17 November 2026; modified 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
    note: 'Set in Ministerial Instructions. s. 28(1) refers to provinces listed in s. 2(d), which nominate \'under its provincial nominee program express entry stream\'.',
  },
  caPnpMiInForce: {
    id: 'ca.pnp.ee-or-pnp.mi-in-force',
    claim:
      'The 600 points are set by section 28(1) of the Ministerial Instructions, in force in their current form since 17 November 2026. They apply to a nomination under a province’s Express Entry stream, once the province verifies it and you accept it.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system (index of versions: current \'in force since November 17, 2026\'; modified 2026-11-18) and current text, s. 28(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system.html',
    checked: '2026-11-23',
    note: 's. 28(1): nomination \'verified by the province\' and \'accepted by the foreign national\'. The 17 November amendment 2026-2 changes only ss. 15.1, 15.2 and 19 (NOC 41200).',
  },
  caCrsCriteriaNomination: {
    id: 'ca.pnp.ee-or-pnp.crs-criteria-600',
    claim:
      'IRCC’s CRS criteria page lists the same 600.',
    provenance: 'primary',
    source: 'IRCC, Comprehensive Ranking System criteria, Additional points: \'Provincial or territorial nomination\' 600 (modified 2026-11-03)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html',
    checked: '2026-11-23',
  },
  caCrsAdditionalCap: {
    id: 'ca.pnp.ee-or-pnp.additional-cap',
    claim:
      'Section 8(2)(d) caps additional points at 600, so a nomination reaches the cap on its own.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, s. 8(2)(d): \'for additional factors, a maximum of 600 points\'',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
    note: 'Set in Ministerial Instructions. The CRS criteria page also shows \'Maximum 600 points\' for additional points.',
  },
  caPnpNominationOnce: {
    id: 'ca.pnp.ee-or-pnp.awarded-once',
    claim:
      'IRCC’s nomination page confirms that the 600 can be awarded only once.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program, Express Entry process: get or confirm a nomination (page details 2026-03-24)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/express-entry/get-confirm-nomination.html',
    checked: '2026-11-23',
  },
  caPnpBaseNoPoints: {
    id: 'ca.pnp.ee-or-pnp.base-no-points',
    claim:
      'A base nomination earns no CRS points, because section 28(1) covers only nominations under a province’s Express Entry stream.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, ss. 2(d) and 28(1)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
    note: 'Our reading of the two sections together; no IRCC page states it in these words.',
  },
  caPnpOneNomination: {
    id: 'ca.pnp.ee-or-pnp.one-at-a-time',
    claim:
      'You can hold only one nomination at a time, though several provinces may contact you. To accept a different province’s nomination, IRCC says you must first reject the one you have.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program, Express Entry process: get or confirm a nomination (page details 2026-03-24)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/express-entry/get-confirm-nomination.html',
    checked: '2026-11-23',
    note: '\'Contact you\' = more than one notification of interest, which the page says you can receive.',
  },
  caPnpRounds2026: {
    id: 'ca.pnp.ee-or-pnp.pnp-rounds-2026',
    claim:
      'In 2026, up to 26 October, IRCC held 21 [Provincial Nominee Program rounds] and invited 10,814 candidates, with lowest scores from 697 to 805.',
    provenance: 'primary',
    source: 'IRCC, Express Entry rounds of invitations data (ee_rounds_123_en.json), rounds #389 to #451',
    sourceUrl: 'https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json',
    checked: '2026-11-23',
    note: 'Official statistics. Totals are our sum of the 21 rounds named \'Provincial Nominee Program\' dated 2026 (5 Jan to 26 Oct). Matches express-entry-2026-so-far (20 rounds, 10,022 to 16 Oct) plus #451 (792).',
  },
  caPnpRoundsLastFive: {
    id: 'ca.pnp.ee-or-pnp.last-five-rounds',
    claim:
      'Last five Provincial Nominee Program rounds (invitations, lowest score invited, without the 600): 26 October 2026, 792, 761, 161; 13 October 2026, 752, 772, 172; 28 September 2026, 733, 725, 125; 14 September 2026, 576, 734, 134; 31 August 2026, 562, 697, 97.',
    provenance: 'primary',
    source: 'IRCC, Express Entry rounds of invitations data (ee_rounds_123_en.json), rounds #438, #442, #445, #448, #451',
    sourceUrl: 'https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json',
    checked: '2026-11-23',
    note: 'Official statistics. The rounds page (canada.ca/.../rounds-invitations.html) fills its table from this file by script; WebFetch read the file, curl to canada.ca timed out. Cross-checked against /express-entry/draws. The last column is cut-off minus 600 (our arithmetic).',
  },
  caPnpWithout600: {
    id: 'ca.pnp.ee-or-pnp.without-600',
    claim:
      'The last column is our own arithmetic: the lowest-ranked nominee’s points from everything except the nomination.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system – current, ss. 8(2)(d) and 28(1), applied to the rounds data',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
    note: 'Exact because a nominee\'s additional points are always 600 (nomination = 600, cap = 600). The same cap applied under the version in force for these rounds (25 March 2025 to 2 November 2026); that archived version was not opened today.',
  },
  caPnpRoundsOldPoints: {
    id: 'ca.pnp.ee-or-pnp.old-points',
    claim:
      'All five rounds used the points in force before IRCC’s 3 November 2026 CRS change.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system: versions list (25 March 2025 to 2 November 2026; 3 to 16 November 2026; current since 17 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system.html',
    checked: '2026-11-23',
  },
  caEeNoRoundAfter28Oct: {
    id: 'ca.pnp.ee-or-pnp.no-round-after-28-oct',
    claim:
      'As of 23 November 2026, IRCC’s data showed no round of any kind after 28 October.',
    provenance: 'primary',
    source: 'IRCC, Express Entry rounds of invitations data (ee_rounds_123_en.json): first entry #453, 28 October 2026',
    sourceUrl: 'https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json',
    checked: '2026-11-23',
    note: 'Re-check before publishing; a new round would make this sentence and the \'last five\' table stale.',
  },
  caPnpTwoProcesses: {
    id: 'ca.pnp.ee-or-pnp.two-processes',
    claim:
      'IRCC’s provincial nominee page describes two processes, and says the province tells you which one applies.',
    provenance: 'primary',
    source: 'IRCC, Immigrate as a provincial nominee (page details 2026-09-14)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
    checked: '2026-11-23',
    note: 'IRCC does not use the words enhanced and base; the post attributes those to the /pnp guide.',
  },
  caPnpEnhancedDefinition: {
    id: 'ca.pnp.ee-or-pnp.enhanced-definition',
    claim:
      'Enhanced, IRCC’s “Express Entry process”: for people who fit a provincial stream and also qualify for an Express Entry programme. The nomination is added to your Express Entry profile.',
    provenance: 'primary',
    source: 'IRCC, Immigrate as a provincial nominee (page details 2026-09-14)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
    checked: '2026-11-23',
  },
  caPnpBaseDefinition: {
    id: 'ca.pnp.ee-or-pnp.base-definition',
    claim:
      'Base, the “non-Express Entry process”: for people who fit a provincial stream but no Express Entry programme.',
    provenance: 'primary',
    source: 'IRCC, Immigrate as a provincial nominee (page details 2026-09-14)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
    checked: '2026-11-23',
  },
  caPnpBasePortal: {
    id: 'ca.pnp.ee-or-pnp.base-pr-portal',
    claim:
      'After nomination, you apply online through IRCC’s Permanent Residence Portal.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program, non-Express Entry process: apply for permanent residence (page details 2026-06-05)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/non-express-entry/apply.html',
    checked: '2026-11-23',
    note: 'Paper only as an accommodation (braille, large print, paper on request).',
  },
  caPnpEnhancedConditions: {
    id: 'ca.pnp.ee-or-pnp.enhanced-conditions',
    claim:
      'IRCC’s eligibility page for enhanced nominees sets three conditions. You fit a provincial stream, the province nominates you, and you qualify for one of those programmes.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program, Express Entry process: who can apply (page details 2026-05-21)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/express-entry/eligibility.html',
    checked: '2026-11-23',
  },
  caEeThreeProgrammes: {
    id: 'ca.pnp.ee-or-pnp.three-programmes',
    claim:
      'The three Express Entry programmes are the Federal Skilled Worker Program, the Federal Skilled Trades Program and the Canadian Experience Class.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: who can apply (page details 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply.html',
    checked: '2026-11-23',
  },
  caEeCecFswFst: {
    id: 'ca.pnp.ee-or-pnp.cec-fsw-fst',
    claim:
      'Then the Canadian Experience Class is closed to you, because IRCC’s who-can-apply page says it needs Canadian work experience. That leaves the Federal Skilled Worker Program, which accepts foreign work experience, or Federal Skilled Trades if you are qualified in a trade.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: who can apply (page details 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply.html',
    checked: '2026-11-23',
    note: 'IRCC: CEC \'For skilled workers with eligible Canadian work experience\'; FSW \'with eligible foreign or Canadian work experience\'; FST \'qualified in a skilled trade\'.',
  },
  caPnpProvinceSoleAssessment: {
    id: 'ca.pnp.ee-or-pnp.irpr-87-3',
    claim:
      'The province decides whether to nominate you, and under section 87(3) of the Immigration and Refugee Protection Regulations it alone assesses two things. They are your ability to become economically established in Canada, and your intention to live in that province.',
    provenance: 'primary',
    source: 'Justice Laws, Immigration and Refugee Protection Regulations, s. 87(3) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.html',
    checked: '2026-11-23',
  },
  caPnpOfficersNoRedo: {
    id: 'ca.pnp.ee-or-pnp.officers-30-march',
    claim:
      'IRCC’s instructions to its officers say that since 30 March 2026, officers cannot redo that assessment.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program: determining membership in the provincial nominee class (page details 2026-04-17)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/economic-classes/provincial-nominees/base-determining-membership-class.html',
    checked: '2026-11-23',
    note: 'Page: regulatory changes take effect on 30 March 2026; \'Officers do not have the authority to conduct a separate assessment.\'',
  },
  caPnpIrccAdmissibility: {
    id: 'ca.pnp.ee-or-pnp.ircc-decides',
    claim:
      'IRCC still decides on permanent residence: it assesses whether you are admissible to Canada. If the province revokes your nomination, IRCC refuses the application.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program: determining membership in the provincial nominee class (page details 2026-04-17)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/economic-classes/provincial-nominees/base-determining-membership-class.html',
    checked: '2026-11-23',
    note: '\'IRCC is responsible for assessing whether the candidate is admissible to Canada.\' \'If the nomination is revoked, IRCC will refuse based on subsection R87(2).\'',
  },
  caMbNoGuarantee: {
    id: 'ca.pnp.ee-or-pnp.mb-no-guarantee',
    claim:
      'Manitoba warns that even an invitation to apply guarantees neither a provincial approval nor approval of the separate federal application.',
    provenance: 'primary',
    source: 'Immigrate Manitoba, Eligibility – Skilled Worker Overseas (modified 22 May 2026)',
    sourceUrl: 'https://immigratemanitoba.com/mpnp/skilled-worker/swo/eligibility/',
    checked: '2026-11-23',
    note: 'Said of Manitoba\'s recruitment missions and exploratory visits: neither they \'nor an Invitation to Apply\' guarantee approval of the MPNP application or of the nominee\'s \'separate permanent resident visa application to the Government of Canada\'.',
  },
  caPnpIntentionBasis: {
    id: 'ca.pnp.ee-or-pnp.irpr-87-2c',
    claim:
      'Under section 87(2)(c), a nomination rests on your ability to become economically established and your intention to live in that province.',
    provenance: 'primary',
    source: 'Justice Laws, Immigration and Refugee Protection Regulations, s. 87(2)(c) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.html',
    checked: '2026-11-23',
  },
  caPnpProvinceNeeds: {
    id: 'ca.pnp.ee-or-pnp.province-needs',
    claim:
      'IRCC’s base-stream eligibility page adds that provinces weigh their own immigration needs.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program, non-Express Entry process: who can apply (page details 2026-06-05)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/non-express-entry/eligibility.html',
    checked: '2026-11-23',
    note: 'The page says the province considers whether you really plan to live there, its immigration needs, and whether you meet the stream\'s minimum requirements.',
  },
  caMbSwoConnection: {
    id: 'ca.pnp.ee-or-pnp.mb-swo-connection',
    claim:
      'Manitoba, Skilled Worker Overseas: you need family or friends settled in Manitoba, past study or work there, or an invitation from its recruitment initiatives. Manitoba’s eligibility page says that without one, you cannot apply, whatever your points.',
    provenance: 'primary',
    source: 'Immigrate Manitoba, Eligibility – Skilled Worker Overseas (modified 22 May 2026)',
    sourceUrl: 'https://immigratemanitoba.com/mpnp/skilled-worker/swo/eligibility/',
    checked: '2026-11-23',
    note: '\'If you do not have a connection to Manitoba, you are not eligible to apply under SWO, regardless of your points total.\' The 60-point minimum is left out (web page only).',
  },
  caBcJobOffer: {
    id: 'ca.pnp.ee-or-pnp.bc-job-offer',
    claim:
      'British Columbia, Skilled Worker and Health Authority streams: both need a full-time job offer with no end date, from an eligible B.C. employer or a B.C. health authority. WelcomeBC says your employer must back your application.',
    provenance: 'primary',
    source: 'WelcomeBC, For workers (last updated 28 May 2026)',
    sourceUrl: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers',
    checked: '2026-11-23',
    note: '\'Full-time, indeterminate (no end date) job offer\'; employer support and an Employer Declaration Form are required. BC PNP fees on the page are left out.',
  },
  caBcEebcOption: {
    id: 'ca.pnp.ee-or-pnp.bc-eebc',
    claim:
      'Both B.C. streams also have an Express Entry BC option for people already in the federal pool. WelcomeBC says a nomination through it gives your federal profile more points, and may speed up federal processing.',
    provenance: 'primary',
    source: 'WelcomeBC, For workers (last updated 28 May 2026)',
    sourceUrl: 'https://www.welcomebc.ca/immigrate-to-b-c/for-workers',
    checked: '2026-11-23',
    note: 'The follow-on sentence (\'one stream can lead to either kind of nomination\') is our inference from the option being optional.',
  },
  caEeRounds2026Targeted: {
    id: 'ca.pnp.ee-or-pnp.rounds-2026-targeted',
    claim:
      'IRCC’s data shows 65 rounds up to 28 October, and none was open to the whole pool. Each invited one group, such as Canadian Experience Class candidates, provincial nominees, French speakers or a named occupation.',
    provenance: 'primary',
    source: 'IRCC, Express Entry rounds of invitations data (ee_rounds_123_en.json), rounds #389 (5 January 2026) to #453 (28 October 2026)',
    sourceUrl: 'https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json',
    checked: '2026-11-23',
    note: 'Official statistics. 2026 round types: Provincial Nominee Program, Canadian Experience Class, French-language proficiency, Healthcare and Social Services, Trades, Transport, Senior managers and Physicians with Canadian work experience, Skilled Military Recruits. No general round.',
  },
  caPnpNotificationOfInterest: {
    id: 'ca.pnp.ee-or-pnp.noi',
    claim:
      'While you wait, you can mark interest in one province or all of them in your profile. IRCC’s nomination page says provinces can then search the pool and send a notification of interest, which is not a nomination.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program, Express Entry process: get or confirm a nomination (page details 2026-03-24)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/express-entry/get-confirm-nomination.html',
    checked: '2026-11-23',
  },
  caPnpProcessingTool: {
    id: 'ca.pnp.ee-or-pnp.processing-tool',
    claim:
      'IRCC’s processing-times tool lists provincial nominees with and without Express Entry separately.',
    provenance: 'primary',
    source: 'IRCC, Check processing times (page details 2026-11-13)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html',
    checked: '2026-11-23',
    note: 'Economic immigration > Provincial Nominees > \'Online via Express Entry?\' yes/no. No times printed.',
  },
  caPnpTimesMayRise: {
    id: 'ca.pnp.ee-or-pnp.times-may-rise',
    claim:
      'IRCC’s provincial nominee page says times may rise when more people apply than there are places.',
    provenance: 'primary',
    source: 'IRCC, Immigrate as a provincial nominee (page details 2026-09-14)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html',
    checked: '2026-11-23',
    note: '\'If there are more people applying than available spaces, processing times may increase.\' The page\'s own processing-time widget failed to load; nothing was printed from it.',
  },
  caEeRoundsHow: {
    id: 'ca.pnp.ee-or-pnp.table-ee-alone',
    claim:
      'Express Entry alone: IRCC ranks the pool, invites, and decides your application. You need one of the three Express Entry programmes, and a score that reaches a round you are eligible for. You apply through an Express Entry profile, then an online application in your IRCC account.',
    provenance: 'primary',
    source: 'IRCC, Express Entry rounds of invitations (page details 2026-10-16); IRCC, PNP Express Entry process: apply for permanent residence (page details 2026-03-24)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html',
    checked: '2026-11-23',
    note: 'Rounds page: IRCC selects the highest-ranking eligible candidates; \'You must be eligible for 1 of the 3 programs managed through Express Entry to be placed in the pool.\' The online IRCC-account application is from the PNP Express Entry apply page.',
  },
  caPnpTableEnhancedWhere: {
    id: 'ca.pnp.ee-or-pnp.table-enhanced',
    claim:
      'Enhanced PNP: the province nominates; IRCC invites and decides your application. You apply with the province, directly or after its notification of interest; then through Express Entry.',
    provenance: 'primary',
    source: 'IRCC, Provincial Nominee Program, Express Entry process: get or confirm a nomination (page details 2026-03-24)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/express-entry/get-confirm-nomination.html',
    checked: '2026-11-23',
  },
  eeOrPnpFstNeedsOfferOrCertificate: {
    id: 'ca.ee-or-pnp.fst-offer-or-certificate',
    claim:
      'The Federal Skilled Trades Program needs a one-year full-time job offer or a certificate of qualification issued by a Canadian provincial, territorial or federal authority.',
    provenance: 'primary',
    source: 'IRCC, Federal Skilled Trades Program (modified 18 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-trades.html',
    checked: '2026-11-23',
  },
  nursesLicenceSeparateFromEca: {
    id: 'nurses.tracks.ecaNoLicence',
    claim:
      'An assessment of your degree (ECA) does not guarantee a licence; for a regulated job, you must get the licence in the province or territory where you settle.',
    provenance: 'primary',
    source: 'IRCC, Educational credential assessment for Express Entry (page details 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html',
    checked: '2026-11-23',
  },
  nursingProvincialRegulation: {
    id: 'nurses.tracks.provincial',
    claim:
      'Each province regulates nursing.',
    provenance: 'primary',
    source: 'NNAS, Provincial resources',
    sourceUrl: 'https://www.nnas.ca/provincial-resources/',
    checked: '2026-11-23',
    note: 'The page says: “Nursing regulation is a provincial responsibility.”',
  },
  cnoAuthorizationToWork: {
    id: 'nurses.cno.authToWork',
    claim:
      'CNO asks for proof of citizenship, permanent residence or a permit that lets you practise nursing in Ontario; without one, CNO can register you on condition that you do not practise until you provide it.',
    provenance: 'primary',
    source: 'College of Nurses of Ontario, Authorization to work (modified 2026-06-03)',
    sourceUrl: 'https://www.cno.org/become-a-nurse/registration-requirements/authorization-to-work',
    checked: '2026-11-23',
  },
  nnasStartWithImmigration: {
    id: 'nurses.nnas.startEarly',
    claim:
      'NNAS advises starting its process before, or at the same time as, your immigration process.',
    provenance: 'primary',
    source: 'NNAS, Application process and timeline',
    sourceUrl: 'https://www.nnas.ca/application-process-timeline/',
    checked: '2026-11-23',
  },
  nnasRoleAndCoverage: {
    id: 'nurses.nnas.coverage',
    claim:
      'NNAS collects and verifies nursing documents and sends an Advisory Report to the regulators you choose; it does not grant licences or decide them; its reports are accepted by every nursing regulator in Canada except those in Québec and the territories.',
    provenance: 'primary',
    source: 'NNAS, Our role in Canadian healthcare (modified 2026-05-06)',
    sourceUrl: 'https://www.nnas.ca/our-role-in-canadian-healthcare/',
    checked: '2026-11-23',
    note: 'Quebec is described only from this statement; the OIIQ site blocked automated access on 23 November 2026.',
  },
  nnasExpeditedService: {
    id: 'nurses.nnas.expedited',
    claim:
      'The Expedited Service starts registered and licensed practical nursing in one application; you qualify if you completed college or university nursing education abroad and have been licensed as a nurse outside Canada; it asks for a course-by-course report from an IRCC-designated body, such as WES, ICAS or ICES.',
    provenance: 'primary',
    source: 'NNAS, Expedited Service (modified 2026-09-11)',
    sourceUrl: 'https://www.nnas.ca/expedited-service/',
    checked: '2026-11-23',
    note: 'NNAS lists CES, ICAS, ICES and WES. Its fee is on the page but not printed (not set in law).',
  },
  cnoEcaProviders: {
    id: 'nurses.cno.ecaProviders',
    claim:
      'CNO verifies education through WES, ICAS or ICES, and says it still accepts NNAS expedited reports.',
    provenance: 'primary',
    source: 'College of Nurses of Ontario, Approved educational credential assessment service providers (modified 2026-06-02)',
    sourceUrl: 'https://www.cno.org/become-a-nurse/approved-educational-credential-assessment-service-providers',
    checked: '2026-11-23',
    note: 'CNO: “CNO will continue to accept National Nursing Assessment Services (NNAS) expedited reports prepared by the Commission on Graduates of Foreign Nursing Schools (CGFNS) — now known as TruMerit.”',
  },
  inspireEducationReport: {
    id: 'nurses.bc.inspireEducation',
    claim:
      'British Columbia uses Inspire Global Assessments, which accepts an education report from WES, ICAS, ICES, CES or NNAS.',
    provenance: 'primary',
    source: 'Inspire Global Assessments, The steps to take to apply to practice as a nurse in British Columbia',
    sourceUrl: 'https://www.inspireassessments.org/british-columbia/',
    checked: '2026-11-23',
  },
  wesEcaVsLicensingReport: {
    id: 'nurses.wes.separateReports',
    claim:
      'A licensing report is not your immigration ECA, which IRCC says must be “for immigration purposes”; WES’s instructions for Ontario nurses treat its ECA for IRCC and its licensing report as separate reports.',
    provenance: 'primary',
    source: 'World Education Services, Instructions for candidates for registration with the College of Nurses of Ontario',
    sourceUrl: 'https://www.wes.org/evaluations-and-fees/education/instructions-for-the-candidates-for-registration-with-the-college-of-nurses-of-ontario/',
    checked: '2026-11-23',
    note: 'IRCC’s ECA page (2026-10-16): “You need to get an ECA for immigration purposes.” WES asks an ECA holder to upgrade to a Document-by-Document report with “Licensing” as the purpose.',
  },
  nnasThirdPartyLicence: {
    id: 'nurses.nnas.licenceVerification',
    claim:
      'Most NNAS documents must reach it from third parties; for the Expedited Service, the authorities that issued your first and current nursing licences complete NNAS’s form and send it directly.',
    provenance: 'primary',
    source: 'NNAS, Important documents (modified 2026-08-04)',
    sourceUrl: 'https://www.nnas.ca/documents/',
    checked: '2026-11-23',
  },
  nnasMidwifeFirstLicence: {
    id: 'nurses.nnas.midwife',
    claim:
      'If you were licensed as a midwife before you were licensed as a nurse, your first licence is the nursing one.',
    provenance: 'primary',
    source: 'NNAS, Important documents (modified 2026-08-04)',
    sourceUrl: 'https://www.nnas.ca/documents/',
    checked: '2026-11-23',
  },
  pnmcLicensing: {
    id: 'nurses.pnmc.licensing',
    claim:
      'In Pakistan, the Pakistan Nursing and Midwifery Council (PNMC) registers and licenses nurses to practise.',
    provenance: 'primary',
    source: 'Pakistan Nursing & Midwifery Council, Home (modified 2026-07-14)',
    sourceUrl: 'https://pnmc.gov.pk/',
    checked: '2026-11-23',
    note: 'PNMC: “PNMC provides registration and licensing to practice.”',
  },
  pnmcVerificationForeign: {
    id: 'nurses.pnmc.verification',
    claim:
      'PNMC offers a Verification of Registration or Good Standing Certificate for foreign regulators; it asks for its application form and fee, the receiving regulator’s form or full address, and copies of your registration card and all your nursing, midwifery and LHV diplomas and degrees.',
    provenance: 'primary',
    source: 'Pakistan Nursing & Midwifery Council, Verification of Registration/Good Standing Certificate (modified 2026-01-27)',
    sourceUrl: 'https://pnmc.gov.pk/verification-registration-2/',
    checked: '2026-11-23',
    note: 'Fee amount not printed (web page only). PNMC also lists post-basic diplomas.',
  },
  regulatorsDirectFromSource: {
    id: 'nurses.regulators.directSource',
    claim:
      'CNO and BCCNM want employer and regulator forms sent straight from the source.',
    provenance: 'primary',
    source: 'College of Nurses of Ontario, Registration guide: outside Canada (modified 2026-06-24)',
    sourceUrl: 'https://www.cno.org/become-a-nurse/registration-guides/outside-canada',
    checked: '2026-11-23',
    note: 'BCCNM’s internationally educated nurses page: “Forms must be sent to BCCNM directly from the employer or regulator.”',
  },
  cnoRequirements: {
    id: 'nurses.cno.requirements',
    claim:
      'CNO’s guide lists nursing education, recent practice, a registration exam, transition to practice, a jurisprudence exam, English or French, and authorisation to work; you also declare past offences, health and conduct, and submit a police criminal record check.',
    provenance: 'primary',
    source: 'College of Nurses of Ontario, Registration guide: outside Canada (modified 2026-06-24)',
    sourceUrl: 'https://www.cno.org/become-a-nurse/registration-guides/outside-canada',
    checked: '2026-11-23',
  },
  cnoExams: {
    id: 'nurses.cno.exams',
    claim:
      'Registered nurses sit the NCLEX-RN and practical nurses the REx-PN.',
    provenance: 'primary',
    source: 'College of Nurses of Ontario, Registration guide: outside Canada (modified 2026-06-24)',
    sourceUrl: 'https://www.cno.org/become-a-nurse/registration-guides/outside-canada',
    checked: '2026-11-23',
    note: 'BCCNM names the same two exams.',
  },
  cnoEducationLevel: {
    id: 'nurses.cno.educationLevel',
    claim:
      'RN education must meet a nursing baccalaureate, and practical nursing a diploma.',
    provenance: 'primary',
    source: 'College of Nurses of Ontario, Next steps: RN in the General Class (internationally educated nurse)',
    sourceUrl: 'https://cno.org/become-a-nurse/next-steps/next-steps-rn-in-the-general-class-internationally-educated-nurse',
    checked: '2026-11-23',
  },
  rpnTerminology: {
    id: 'nurses.noc.rpn',
    claim:
      'In Ontario, RPN means registered practical nurse, NOC 32101; in Manitoba, Saskatchewan, Alberta and British Columbia it can mean registered psychiatric nurse, part of NOC 31301.',
    provenance: 'primary',
    source: 'ESDC, NOC 2021 Version 1.0, unit groups 31301 and 32101',
    sourceUrl: 'https://noc.esdc.gc.ca/Structure/NOCProfile?GocTemplateCulture=en-CA&code=31301&version=2021.0',
    checked: '2026-11-23',
    note: 'NOC 31301: nurses trained exclusively as registered psychiatric nurses are regulated in Manitoba, Saskatchewan, Alberta and British Columbia; registered practical nurse (R.P.N.) is in 32101. CNO: RPN “also known as a Licensed Practical Nurse (LPN)”.',
  },
  bccnmProcess: {
    id: 'nurses.bccnm.process',
    claim:
      'BCCNM recommends applying to Inspire and BCCNM at the same time; Inspire checks your identity, English, education and nursing competence; BCCNM assesses most nurses for LPN and RN licensure together, and says extra education will likely be needed before the exam.',
    provenance: 'primary',
    source: 'British Columbia College of Nurses and Midwives, Internationally educated nurses (RN)',
    sourceUrl: 'https://www.bccnm.ca/RN/applications_registration/how_to_apply/InternationalEN/Pages/Default.aspx',
    checked: '2026-11-23',
  },
  inspireVancouverVisa: {
    id: 'nurses.bc.inspireVisa',
    claim:
      'Inspire warns that you may have to come to Vancouver for an in-person assessment, and must arrange any visa yourself.',
    provenance: 'primary',
    source: 'Inspire Global Assessments, The steps to take to apply to practice as a nurse in British Columbia',
    sourceUrl: 'https://www.inspireassessments.org/british-columbia/',
    checked: '2026-11-23',
  },
  pakistanVisitorVisa: {
    id: 'canada.entry.pakistanVisa',
    claim:
      'Pakistani citizens need a visitor visa to visit Canada.',
    provenance: 'primary',
    source: 'IRCC, Entry requirements by country or territory (page details 2026-07-31)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html',
    checked: '2026-11-23',
    note: 'Pakistan is on the visa-required list.',
  },
  applyYourself: {
    id: 'nurses.regulators.applyYourself',
    claim:
      'CNO and BCCNM both say you must make the application yourself; BCCNM warns against agencies offering to complete BCCNM or Inspire applications for a fee.',
    provenance: 'primary',
    source: 'British Columbia College of Nurses and Midwives, Internationally educated nurses (RN)',
    sourceUrl: 'https://www.bccnm.ca/RN/applications_registration/how_to_apply/InternationalEN/Pages/Default.aspx',
    checked: '2026-11-23',
    note: 'CNO (registration guide): “You must complete and submit the application to CNO yourself.”',
  },
  irccLanguageTests: {
    id: 'ee.language.tests',
    claim:
      'IRCC accepts IELTS General Training, PTE Core, CELPIP-General, TEF Canada and TCF Canada for Express Entry, not IELTS Academic or PTE Academic.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Language tests (page details 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html',
    checked: '2026-11-23',
    note: 'CELBAN and OET are not on IRCC’s list.',
  },
  cnoLanguageTests: {
    id: 'nurses.cno.languageTests',
    claim:
      'CNO accepts CELBAN, IELTS General Training and Academic, OET, PTE Academic, TEF and TCF; CELPIP and PTE Core are not listed; a test taken for immigration must still meet CNO’s own benchmark, which may differ.',
    provenance: 'primary',
    source: 'College of Nurses of Ontario, Proficiency in English or French (modified 2026-06-04)',
    sourceUrl: 'https://www.cno.org/become-a-nurse/registration-requirements/proficiency-in-english-or-french',
    checked: '2026-11-23',
    note: 'CNO says it accepts IRPA-approved tests once it sets benchmarks for them. Benchmark scores not printed (not set in law).',
  },
  inspireLanguageTests: {
    id: 'nurses.bc.inspireTests',
    claim:
      'Inspire accepts IELTS Academic, CELBAN, PTE Academic and OET, and takes IELTS or PTE only in their Academic versions.',
    provenance: 'primary',
    source: 'Inspire Global Assessments, English language proficiency documents',
    sourceUrl: 'https://www.inspireassessments.org/assessments/english-language-proficiency-documents/',
    checked: '2026-11-23',
    note: 'BCCNM’s own English proficiency page lists the same four tests and says internationally educated nurses submit evidence to Inspire.',
  },
  healthcareCategoryNursingCodes: {
    id: 'ee.categories.healthcareNursing',
    claim:
      'On 23 November 2026, IRCC’s Healthcare and social services occupations category included 31301 Registered nurses and registered psychiatric nurses (TEER 1), 31302 Nurse practitioners (TEER 1), 31300 Nursing coordinators and supervisors (TEER 1), 32101 Licensed practical nurses (TEER 2) and 33102 Nurse aides, orderlies and patient service associates (TEER 3).',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Category-based selection (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-23',
    note: 'Titles and TEER also checked on each code’s NOC 2021 page. Re-check monthly.',
  },
  healthcareRoundRule2026: {
    id: 'ee.rounds.healthcare2026Rule',
    claim:
      'The instructions for each 2026 healthcare round required at least one year of full-time work, or the part-time equivalent, in one listed occupation, within the previous three years.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting invitations to apply, rounds #398, #422 and #441 (Healthcare and Social Services Occupations, 2026-Version 3)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations.html?q=441',
    checked: '2026-11-23',
    note: 'Section 3 of each instruction, identical in all three; it also requires the lead statement and a substantial number of main duties, including all essential duties. Read from IRCC’s ee_rounds_4_en.json, which feeds the instruction pages.',
  },
  healthcareWorkAbroad: {
    id: 'ee.categories.healthcareAbroad',
    claim:
      'IRCC’s category page says that work can be in Canada or abroad.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Category-based selection (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-23',
  },
  healthcareRounds2026: {
    id: 'ee.rounds.healthcare2026',
    claim:
      'Three healthcare rounds in 2026, each open to Federal Skilled Worker, Canadian Experience Class and Federal Skilled Trades candidates: 20 February 2026 (#398), 4,000 invitations, lowest score 467; 25 June 2026 (#422), 4,000, 475; 4 September 2026 (#441), 3,500, 475.',
    provenance: 'primary',
    source: 'IRCC, Express Entry rounds of invitations (official rounds data)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html',
    checked: '2026-11-23',
    note: 'Read from IRCC’s ee_rounds_123_en.json on 23 November 2026; the latest round of any type was #453 on 28 October 2026. Invitation numbers are also set in s. 8 of each round’s instructions.',
  },
  crsChange3November: {
    id: 'ee.crs.change3Nov',
    claim:
      'Those scores were set under the points in force before IRCC’s 3 November 2026 change.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions respecting the Express Entry system, current (signed 17 November 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html',
    checked: '2026-11-23',
    note: 'The current instructions show provisions repealed on November 3, 2026.',
  },
  albertaDedicatedHealthCare: {
    id: 'pnp.alberta.healthCare',
    claim:
      'Alberta’s Dedicated Health Care Pathway lists registered and licensed practical nurses; it needs a job offer from an Alberta health-sector employer, and proof that you meet the regulator’s minimum requirements to practise; it has an Express Entry option.',
    provenance: 'primary',
    source: 'Government of Alberta, AAIP Dedicated Health Care Pathway',
    sourceUrl: 'https://www.alberta.ca/dedicated-health-care-pathway',
    checked: '2026-11-23',
    note: 'Score and language thresholds on the page not printed (provincial web page only).',
  },
  bcHealthAuthorityStream: {
    id: 'pnp.bc.healthAuthority',
    claim:
      'British Columbia’s Health Authority stream needs a full-time, indeterminate job offer from a B.C. health authority, and has an Express Entry option.',
    provenance: 'primary',
    source: 'WelcomeBC, Skills Immigration (last updated 28 May 2026)',
    sourceUrl: 'https://www.welcomebc.ca/immigrate-to-b-c/skills-immigration',
    checked: '2026-11-23',
  },
  bcHealthAuthorityNursingCodes: {
    id: 'pnp.bc.healthAuthorityCodes',
    claim:
      'The Health Authority stream’s eligible occupations include 31300, 31301, 31302, 32101 and 33102.',
    provenance: 'primary',
    source: 'WelcomeBC, The BC Provincial Nominee Program (last updated 17 June 2026)',
    sourceUrl: 'https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program/the-bc-provincial-nominee-program',
    checked: '2026-11-23',
    note: 'Footnote: a 33102 job offer requires registration with the BC Care Aide & Community Health Worker Registry.',
  },
  nursesNnasCesWindDown: {
    id: 'ca.nurses.nnas-ces-wind-down',
    claim:
      'NNAS says CES is winding down and that it is working on an alternative for affected applicants.',
    provenance: 'primary',
    source: 'NNAS, Update for applicants: CES wind-down and your NNAS application',
    sourceUrl: 'https://www.nnas.ca/news/update-for-applicants-ces-wind-down-and-your-nnas-application/',
    checked: '2026-11-23',
  },
  caDoctorsEeHealthcareAbroad: {
    id: 'ca.doctors.ee-healthcare-abroad',
    claim:
      'On 23 November 2026 its Express Entry healthcare category counted doctors’ work done outside Canada.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Category-based selection (page details 2026-11-18), healthcare and social services eligibility',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-23',
    note: 'The page says the 12 months may be gained “in Canada or abroad”. Opening paragraph.',
  },
  caDoctorsLicenceFirst: {
    id: 'ca.doctors.licence-first',
    claim:
      'IRCC’s page for medical doctors says you must first have your credentials assessed and be licensed by a provincial or territorial regulator.',
    provenance: 'primary',
    source: 'IRCC, Live and work as a medical doctor in Canada (page details 2026-10-19)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/medical-doctors.html',
    checked: '2026-11-23',
  },
  caDoctorsLicensingProvincial: {
    id: 'ca.doctors.licensing-provincial',
    claim:
      'Its December 2025 announcement adds that credential recognition and licensing are each province’s responsibility.',
    provenance: 'primary',
    source: 'IRCC, Targeted immigration measures to boost Canada’s supply of doctors (news release, 8 December 2025), quick facts',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2025/12/targeted-immigration-measures-to-boost-canadas-supply-of-doctors.html',
    checked: '2026-11-23',
    note: 'The release says “each province and territory”.',
  },
  caMccEcaNoPractice: {
    id: 'ca.mcc.eca-no-practice',
    claim:
      'MCC says its credential report for immigration does not give you the right to practise either.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Educational Credential Assessment',
    sourceUrl: 'https://mcc.ca/credentials-and-services/services/educational-credential-assessment/',
    checked: '2026-11-23',
  },
  caCarmsCitizenship: {
    id: 'ca.carms.citizenship',
    claim:
      'CaRMS, which matches doctors to residency posts, requires Canadian citizenship or PR, with some exceptions.',
    provenance: 'primary',
    source: 'CaRMS, R-1 Main Residency Match eligibility criteria, “I am an International Medical Graduate (IMG)” tab',
    sourceUrl: 'https://www.carms.ca/match/r-1-main-residency-match/eligibility-criteria/',
    checked: '2026-11-23',
  },
  caMccStatusForPra: {
    id: 'ca.mcc.status-for-pra',
    claim:
      'MCC’s pre-arrival guidance says a valid immigration status is also needed for some practice-ready routes.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Supporting internationally trained physicians before arrival in Canada (May 2025)',
    sourceUrl: 'https://mcc.ca/credentials-and-services/pathways-to-licensure/pathways-for-international-medical-graduates/supporting-itps-before-arrival-in-canada/',
    checked: '2026-11-23',
    note: 'The page says valid status is required for CaRMS and some PRA routes.',
  },
  caMccAcceptableSchool: {
    id: 'ca.mcc.acceptable-school',
    claim:
      'MCC’s acceptable schools page accepts an international degree only from a school in the World Directory of Medical Schools with a Canada sponsor note. Your graduation date must fall within the years the sponsor note gives. The degree title must also be in the Reference Guide for Medical Education Credentials.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Acceptable medical schools and medical degrees',
    sourceUrl: 'https://mcc.ca/credentials-and-services/pathways-to-licensure/acceptable-medical-schools-and-medical-degrees/',
    checked: '2026-11-23',
    note: 'The MCC page names the "ECFMG Sponsor Note" for the graduation-year range and the Canada Sponsor Note for acceptability; the post says "the sponsor note" to cover both. MCCQE eligibility and LMCC pages repeat the Canada sponsor note rule.',
  },
  wdomsSearchPakistan: {
    id: 'intl.wdoms.search-pakistan',
    claim:
      'The directory’s search lets you choose Pakistan and type your college’s name. It warns that a listing alone does not mean recognition.',
    provenance: 'primary',
    source: 'World Directory of Medical Schools, Search page (WFME and FAIMER)',
    sourceUrl: 'https://search.wdoms.org/',
    checked: '2026-11-23',
  },
  caMccSourceVerification: {
    id: 'ca.mcc.source-verification',
    claim:
      'MCC’s services and exams run through a physiciansapply.ca account. The first step is a source verification request for your degree. MCC and ECFMG, a division of Intealth, send it to the institution that issued it, which must confirm it is genuine.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Verification of credentials; Pathways for international medical graduates (last updated 21 July 2026)',
    sourceUrl: 'https://mcc.ca/credentials-and-services/services/verification-of-credentials/',
    checked: '2026-11-23',
  },
  caMccSvrTiming: {
    id: 'ca.mcc.svr-timing',
    claim:
      'MCC says response times vary and cannot be guaranteed, so it advises applying early and following up with the institution yourself.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Verification of credentials',
    sourceUrl: 'https://mcc.ca/credentials-and-services/services/verification-of-credentials/',
    checked: '2026-11-23',
    note: 'The page gives indicative durations; none is printed.',
  },
  caMccOntarioCpso: {
    id: 'ca.mcc.ontario-cpso',
    claim:
      'If you plan to practise only in Ontario, MCC says to ask Ontario’s college, the CPSO, for verification instead.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Verification of credentials; Pathways for international medical graduates',
    sourceUrl: 'https://mcc.ca/credentials-and-services/services/verification-of-credentials/',
    checked: '2026-11-23',
    note: 'CPSO’s own pages were behind a Cloudflare bot check on 23 November 2026 and were not read.',
  },
  caMccqeApply: {
    id: 'ca.mcc.mccqe-apply',
    claim:
      'Once that request is submitted and paid for, you can apply for the MCCQE, formerly the MCCQE Part I.',
    provenance: 'primary',
    source: 'Medical Council of Canada, MCCQE eligibility and application (“Applying as an international medical graduate”)',
    sourceUrl: 'https://mcc.ca/examinations-assessments/mccqe/eligibility-and-application/',
    checked: '2026-11-23',
  },
  caMccqeDelivery: {
    id: 'ca.mcc.mccqe-delivery',
    claim:
      'It is a computer-based exam at Prometric test centres in Canada and abroad, and MCC limits the number of attempts.',
    provenance: 'primary',
    source: 'Medical Council of Canada, MCCQE; MCCQE eligibility and application',
    sourceUrl: 'https://mcc.ca/examinations-assessments/mccqe/',
    checked: '2026-11-23',
    note: 'The attempt limit and the number of countries are on MCC’s pages only and are not printed.',
  },
  caLmcc2026: {
    id: 'ca.mcc.lmcc-2026',
    claim:
      'Since 26 January 2026, a pass and a source-verified degree are the main conditions for the LMCC.',
    provenance: 'primary',
    source: 'Medical Council of Canada, LMCC (eligibility criteria as of 26 January 2026)',
    sourceUrl: 'https://mcc.ca/credentials-and-services/pathways-to-licensure/lmcc/',
    checked: '2026-11-23',
    note: 'The other conditions are an acceptable school and payment of any LMCC fee.',
  },
  caMccPayment: {
    id: 'ca.mcc.payment',
    claim:
      'MCC charges in Canadian dollars and takes Visa or MasterCard credit cards, including prepaid ones, but not debit cards.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Examination and service fees',
    sourceUrl: 'https://mcc.ca/fees/',
    checked: '2026-11-23',
    note: 'Fee amounts are not printed.',
  },
  caImgRouteCarms: {
    id: 'ca.img.route-carms',
    claim:
      'CaRMS residency match: graduates without postgraduate training, or trained abroad and willing to retrain. Usually needs passes in the NAC exam and the MCCQE, and Canadian citizenship or PR. British Columbia, Alberta and Quebec need a provincial assessment first.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Pathways for international medical graduates; CaRMS, R-1 eligibility criteria (IMG)',
    sourceUrl: 'https://mcc.ca/credentials-and-services/pathways-to-licensure/pathways-for-international-medical-graduates/',
    checked: '2026-11-23',
    note: 'CaRMS says some provinces allow exceptions to either exam and some exceptions apply to the citizenship rule.',
  },
  caImgRoutePra: {
    id: 'ca.img.route-pra',
    claim:
      'Practice-Ready Assessment: doctors who finished residency and practised independently abroad. A supervised clinical assessment run by a province. Those who pass sign a return-of-service agreement to work in an area of need in that province.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Pathways for international medical graduates; Practice-Ready Assessment',
    sourceUrl: 'https://mcc.ca/examinations-assessments/practice-ready-assessment/',
    checked: '2026-11-23',
    note: 'The assessment length on MCC’s pages is not printed.',
  },
  caImgRoutePer: {
    id: 'ca.img.route-per',
    claim:
      'Practice Eligibility Route: specialists who finished postgraduate training abroad in a recognised primary specialty. MCC links to the Royal College of Physicians and Surgeons of Canada for the details.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Pathways for international medical graduates',
    sourceUrl: 'https://mcc.ca/credentials-and-services/pathways-to-licensure/pathways-for-international-medical-graduates/',
    checked: '2026-11-23',
  },
  caImgRouteAjr: {
    id: 'ca.img.route-ajr',
    claim:
      'Approved jurisdictions: doctors trained in jurisdictions deemed substantially equivalent to Canada. Pakistan was not on the Royal College’s list on 23 November 2026. The training must be completed in the approved country.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Pathways for international medical graduates; Royal College of Physicians and Surgeons of Canada, Approved jurisdictions',
    sourceUrl: 'https://www.royalcollege.ca/en/eligibility-and-exams/exam-eligibility/approved-jurisdiction-route/approved-jurisdictions.html',
    checked: '2026-11-23',
    note: 'The Royal College list covered Australia and New Zealand, Hong Kong, Singapore, South Africa, Switzerland, and the United Kingdom and Ireland. CFPC’s list was not checked.',
  },
  caPraProvinces: {
    id: 'ca.img.pra-provinces',
    claim:
      'On 23 November 2026, MCC listed practice-ready programmes in every province except Prince Edward Island, and in none of the territories.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Practice-Ready Assessment',
    sourceUrl: 'https://mcc.ca/examinations-assessments/practice-ready-assessment/',
    checked: '2026-11-23',
    note: 'Listed: BC, Alberta, Saskatchewan, Manitoba, Ontario, Quebec, New Brunswick, Nova Scotia, Newfoundland and Labrador. PEI, Yukon, Nunavut and NWT have none in the NAC framework.',
  },
  bcAssessmentLicence: {
    id: 'ca.bc.cpsbc-assessment-licence',
    claim:
      'In British Columbia, the assessment licence lets selected family doctors take PRA-BC, and only PRA-BC can refer you for it. Applicants need a listed school with a Canadian sponsor note, and training abroad that led to recognition as a family physician there. They also need English proficiency, and citizenship, PR or the right to live and work in BC.',
    provenance: 'primary',
    source: 'College of Physicians and Surgeons of British Columbia, Assessment (internationally trained physicians)',
    sourceUrl: 'https://www.cpsbc.ca/licensees/licensing/itp/assessment',
    checked: '2026-11-23',
    note: 'The minimum length of postgraduate training on the page is not printed.',
  },
  bcCpc: {
    id: 'ca.bc.cpsbc-cpc',
    claim:
      'CPSBC also asks licence applicants for certificates of professional conduct from every jurisdiction where they have practised.',
    provenance: 'primary',
    source: 'College of Physicians and Surgeons of British Columbia, Certificates of professional conduct',
    sourceUrl: 'https://www.cpsbc.ca/registrants/current-registrants/registration-and-licensing/cpc',
    checked: '2026-11-23',
    note: 'CPSBC cites its Bylaws for this rule.',
  },
  pkPmdcRegister: {
    id: 'pk.pmdc.register',
    claim:
      'In Pakistan, the Pakistan Medical and Dental Council (PMDC) keeps the register of doctors.',
    provenance: 'primary',
    source: 'Pakistan Medical and Dental Council, Pakistan Registration of Medical and Dental Practitioners Regulations, 2023, reg. 2 (definitions of Council and Register)',
    sourceUrl: 'https://pmdc.pk/Documents/law/Registration%20Regulations%202023.pdf',
    checked: '2026-11-23',
    note: 'The regulations define the Register as the register of medical practitioners kept under s. 36 of the PMDC Act 2022. That CPSBC would accept PMDC’s certificate is not stated by CPSBC; the post tells readers to ask.',
  },
  pkPmdcGoodStanding: {
    id: 'pk.pmdc.good-standing',
    claim:
      'PMDC’s Registration Regulations 2023 say that certificate is valid for six months. Each one is issued for a single foreign regulator, which you name when you apply.',
    provenance: 'primary',
    source: 'Pakistan Medical and Dental Council, Pakistan Registration of Medical and Dental Practitioners Regulations, 2023, regs 25 and 26',
    sourceUrl: 'https://pmdc.pk/Documents/law/Registration%20Regulations%202023.pdf',
    checked: '2026-11-23',
    note: 'Figure (six months) set in regulation 25. Reg. 25 also requires six months of good standing and no professional-misconduct conviction.',
  },
  abPra: {
    id: 'ca.ab.cpsa-pra',
    claim:
      'In Alberta, you do not apply for a practice readiness assessment yourself. CPSA first reviews your qualifications through physiciansapply.ca; you then need a sponsored job and, for family medicine, a pass in the TDM exam.',
    provenance: 'primary',
    source: 'College of Physicians & Surgeons of Alberta, Practice Readiness Assessment (PRA)',
    sourceUrl: 'https://cpsa.ca/physicians/registration/apply-to-practise/independent-practice/pra/',
    checked: '2026-11-23',
    note: 'CPSA’s average and extended timelines are not printed.',
  },
  caLicensingLanguageTests: {
    id: 'ca.img.licensing-language-tests',
    claim:
      'MCC says most provincial programmes accept IELTS Academic, OET Medicine or CELPIP-General.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Supporting internationally trained physicians before arrival in Canada (May 2025)',
    sourceUrl: 'https://mcc.ca/credentials-and-services/pathways-to-licensure/pathways-for-international-medical-graduates/supporting-itps-before-arrival-in-canada/',
    checked: '2026-11-23',
    note: 'Minimum scores on that page are not printed. Provincial programmes decide exemptions.',
  },
  caEeLanguageTests: {
    id: 'ca.ee.language-tests-ielts-gt',
    claim:
      'IRCC’s Express Entry test list requires IELTS General Training, not Academic. CELPIP-General is on both lists.',
    provenance: 'primary',
    source: 'IRCC, Language test results for Express Entry (page details 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html',
    checked: '2026-11-23',
  },
  caDoctorsEeNoOffer: {
    id: 'ca.doctors.ee-no-offer',
    claim:
      'IRCC’s page for doctors who have not worked in Canada suggests Express Entry to those with experience as a doctor. You must qualify for one of its three programmes, and it is the option IRCC lists for doctors with no Canadian job offer yet.',
    provenance: 'primary',
    source: 'IRCC, Medical doctors who haven’t worked in Canada (page details 2025-12-23)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/medical-doctors/no-experience.html',
    checked: '2026-11-23',
  },
  caEeHealthcareCategoryRule: {
    id: 'ca.ee.healthcare-category-rule',
    claim:
      'The healthcare and social services category counts work in Canada or abroad. The Ministerial Instructions for its 4 September 2026 round required one year of full-time work, or the equivalent, in the previous three years. The work had to match one listed occupation’s NOC lead statement and a substantial number of its main duties, including all essential ones.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions Respecting Invitations to Apply for Permanent Residence Under the Express Entry System (Healthcare and Social Services Occupations, 2026-Version 3), round 441, s. 3; IRCC, Category-based selection (2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html',
    checked: '2026-11-23',
    note: 'Figures (one year, three years) set in the round’s Ministerial Instructions, s. 3(a). Read from https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_4_en.json, which the rounds page loads; the page renders the text by script.',
  },
  caEeHealthcarePhysicianCodes: {
    id: 'ca.ee.healthcare-physician-codes',
    claim:
      'The list included specialists in clinical and laboratory medicine (31100), specialists in surgery (31101), and general practitioners and family physicians (31102).',
    provenance: 'primary',
    source: 'IRCC, Category-based selection (2026-11-18), healthcare and social services table; round 441 Ministerial Instructions, table to s. 3; Statistics Canada, NOC 2021 Version 1.0, major group 31',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-23',
    note: 'Codes and titles confirmed on Statistics Canada’s NOC 2021 Version 1.0 structure.',
  },
  caNoc31102MedicalDoctor: {
    id: 'ca.noc.31102-medical-doctor',
    claim:
      'Statistics Canada gives “medical doctor” as an example title for 31102.',
    provenance: 'primary',
    source: 'Statistics Canada, NOC 2021 Version 1.0, 31102 General practitioners and family physicians (modified 2024-09-11), illustrative examples',
    sourceUrl: 'https://www23.statcan.gc.ca/imdb/p3VD.pl?CLV=5&CPV=31102&CST=01052021&CVD=1322870&Function=getVD&MLV=5&TVD=1322554',
    checked: '2026-11-23',
  },
  caEePhysiciansCategory: {
    id: 'ca.ee.physicians-category',
    claim:
      'The physicians category, new in 2026, is narrower: IRCC’s page for doctors with Canadian experience and the round instructions require the year to be worked in Canada.',
    provenance: 'primary',
    source: 'IRCC, Medical doctors with experience in Canada (2026-10-19); Ministerial Instructions (Physicians with Canadian work experience, 2026-Version 1), round 440, s. 3',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/medical-doctors/experience.html',
    checked: '2026-11-23',
    note: 'Round 440 MI: “acquired in Canada at least one year of full-time work experience” within the previous three years. IRCC’s 18 February 2026 release announced the category for 2026.',
  },
  caEcaMccPhysicians: {
    id: 'ca.ee.eca-mcc-physicians',
    claim:
      'Your Educational Credential Assessment (ECA) for Express Entry also comes from MCC: IRCC says a doctor whose primary occupation is 31100, 31101 or 31102 must use it.',
    provenance: 'primary',
    source: 'IRCC, Educational Credential Assessment for Express Entry (page details 2026-10-16), designated professional bodies',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html',
    checked: '2026-11-23',
    note: 'MCC was designated on 17 April 2013 (not printed). The old URL education-assessed.html, used by the ECA guide, redirects here.',
  },
  caMccEcaAfterSvr: {
    id: 'ca.mcc.eca-after-svr',
    claim:
      'MCC issues its report only after source verification of your degree, or of a transcript confirming it, so one check serves both tracks.',
    provenance: 'primary',
    source: 'Medical Council of Canada, Educational Credential Assessment',
    sourceUrl: 'https://mcc.ca/credentials-and-services/services/educational-credential-assessment/',
    checked: '2026-11-23',
    note: 'Option two also needs the degree itself submitted and sent for verification. "One check serves both tracks" is our summary.',
  },
  caDoctorsPnp: {
    id: 'ca.doctors.pnp',
    claim:
      'With a job offer or letter of support, IRCC points doctors to provincial nomination instead. Provinces have federal spaces reserved for nominating doctors, and nominated doctors can get faster work-permit processing.',
    provenance: 'primary',
    source: 'IRCC, Medical doctors who haven’t worked in Canada (2025-12-23); Medical doctors with experience in Canada (2026-10-19)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/medical-doctors/experience.html',
    checked: '2026-11-23',
    note: 'The number of reserved spaces and the processing time are on IRCC’s web pages and news release only, so they are not printed.',
  },
  caEeDoctorRounds2026: {
    id: 'ca.ee.doctor-rounds-2026',
    claim:
      'Healthcare and social services rounds: 20 February 2026, 4,000 invitations, lowest CRS 467; 25 June 2026, 4,000, 475; 4 September 2026, 3,500, 475. Physicians with Canadian work experience rounds: 19 February 2026, 391, 169; 24 June 2026, 271, 223; 3 September 2026, 229, 198.',
    provenance: 'primary',
    source: 'IRCC, Ministerial instructions respecting invitations to apply under the Express Entry system, rounds 397, 398, 421, 422, 440 and 441',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html',
    checked: '2026-11-23',
    note: 'Read on 23 November 2026 from https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json, which IRCC’s rounds pages load. Latest round listed: #453, 28 October 2026. Round sizes are set in each round’s Ministerial Instructions, s. 8.',
  },
  caEePhysicianRoundsInCanada: {
    id: 'ca.ee.physician-rounds-in-canada',
    claim:
      'The physician rounds needed Canadian experience, so they were not open to doctors whose work is all in Pakistan.',
    provenance: 'primary',
    source: 'IRCC, Ministerial Instructions for rounds 397, 421 and 440 (Physicians with Canadian work experience), s. 3',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html',
    checked: '2026-11-23',
    note: 'Each physician round’s MI requires the year of experience to be acquired in Canada. Read from ee_rounds_4_en.json; text checked for rounds 397, 421 and 440.',
  },
  caEeCategoryRoundMaySkip: {
    id: 'ca.ee.category-round-may-skip',
    claim:
      'IRCC says it may skip a category round when enough eligible candidates are invited through other rounds.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Category-based selection (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-23',
  },
  fswNoLicence: {
    id: 'engineers.fsw.noLicence',
    claim:
      'The Federal Skilled Worker requirements in section 75 of the Regulations are work experience, a language test, and an education credential with its assessment. A Canadian licence is not among them.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 75(2) (Justice Laws, current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html',
    checked: '2026-11-23',
  },
  esdcEngineersRegulated: {
    id: 'engineers.esdc.regulated',
    claim:
      'ESDC names engineers among the regulated professions, where you need a licence before you can work, and suggests contacting the regulator, ideally before you arrive in Canada.',
    provenance: 'primary',
    source: 'ESDC, Foreign Credential Recognition (page details 2026-11-12)',
    sourceUrl: 'https://www.canada.ca/en/employment-social-development/programs/foreign-credential-recognition.html',
    checked: '2026-11-23',
    note: 'Read through a page-fetch tool; canada.ca times out on scripted downloads.',
  },
  ecLicensingCriteria: {
    id: 'engineers.engineersCanada.criteria',
    claim:
      'Requirements vary by regulator; generally they cover an accredited or equivalent degree, work experience, a professional practice exam, good character and English or French. Engineers Canada does not grant licences.',
    provenance: 'primary',
    source: 'Engineers Canada, Overview of the Licensing Process',
    sourceUrl: 'https://engineerscanada.ca/become-an-engineer/overview-of-licensing-process',
    checked: '2026-11-23',
  },
  ecRegulators: {
    id: 'engineers.engineersCanada.regulators',
    claim:
      'Each province and territory has its own regulator; Engineers Canada lists them, including PEO, APEGA and Engineers and Geoscientists BC.',
    provenance: 'primary',
    source: 'Engineers Canada, Engineering regulators',
    sourceUrl: 'https://engineerscanada.ca/regulatory-excellence/engineering-regulators',
    checked: '2026-11-23',
  },
  onPractice: {
    id: 'engineers.ontario.practice',
    claim:
      'Ontario: practising, or holding yourself out as practising, professional engineering needs a licence (s. 12(1)); engineering acts are allowed where a licensed engineer takes responsibility for the work (s. 12(3)(b)).',
    provenance: 'primary',
    source: 'Professional Engineers Act, R.S.O. 1990, c. P.28, s. 12 (e-Laws, last amendment 2024, c. 28, Sched. 23)',
    sourceUrl: 'https://www.ontario.ca/laws/statute/90p28',
    checked: '2026-11-23',
    note: 'Read from e-Laws\' Word version (ontario.ca/laws/docs/90p28_e.doc); the HTML page builds with scripts.',
  },
  onTitles: {
    id: 'engineers.ontario.titles',
    claim:
      'Ontario protects “professional engineer” or an abbreviation, and “engineer” used to suggest you may practise; a first conviction for misusing a title can bring a fine of up to $10,000 (s. 40(2)).',
    provenance: 'primary',
    source: 'Professional Engineers Act, R.S.O. 1990, c. P.28, s. 40(2)',
    sourceUrl: 'https://www.ontario.ca/laws/statute/90p28',
    checked: '2026-11-23',
  },
  abPractice: {
    id: 'engineers.alberta.practice',
    claim:
      'Alberta: only a professional engineer or another authorised holder may practise engineering (s. 2(1)); an engineer-in-training supervised and controlled by a professional engineer may practise (s. 2(4)(b)).',
    provenance: 'primary',
    source: 'Engineering and Geoscience Professions Act, RSA 2000, c. E-11, s. 2 (current as of 7 December 2023)',
    sourceUrl: 'https://kings-printer.alberta.ca/documents/Acts/E11.pdf',
    checked: '2026-11-23',
  },
  abTitles: {
    id: 'engineers.alberta.titles',
    claim:
      'Alberta protects “professional engineer”, “P.Eng.”, and “engineer” with words implying a licence (s. 3(1)); “software engineer” has been exempt since 2023 (s. 3.1, added by 2023 c7).',
    provenance: 'primary',
    source: 'Engineering and Geoscience Professions Act, RSA 2000, c. E-11, ss. 3 and 3.1 (current as of 7 December 2023)',
    sourceUrl: 'https://kings-printer.alberta.ca/documents/Acts/E11.pdf',
    checked: '2026-11-23',
    note: 'Engineers Canada\'s use-of-title page also describes the 2023 Alberta change.',
  },
  egbcTitles: {
    id: 'engineers.bc.titles',
    claim:
      'BC reserves “Professional Engineer”, “P.Eng.” and “Engineer-in-Training”, plus “engineer” where it implies a right to practise; showing your degree, such as “B.Sc.”, is allowed; an employer-given title is no excuse; registration in another jurisdiction gives no title rights in BC.',
    provenance: 'primary',
    source: 'Engineers and Geoscientists BC, Unauthorized Practice or Title FAQs',
    sourceUrl: 'https://www.egbc.ca/complaints-discipline/unauthorized-practice-or-title/unauthorized-practice-misuse-of-title/unauthorized-practice-or-title-faqs',
    checked: '2026-11-23',
    note: 'The post\'s “That includes registration with the Pakistan Engineering Council” applies EGBC\'s general answer about other jurisdictions; EGBC does not name Pakistan. The FAQ notes a very limited exception for jurisdiction qualifiers such as “P.Eng. (Alberta)”.',
  },
  egbcPractice: {
    id: 'engineers.bc.practice',
    claim:
      'In BC, all engineering work needs registration, even if unstamped or used only inside your company.',
    provenance: 'primary',
    source: 'Engineers and Geoscientists BC, Unauthorized Practice or Title FAQs',
    sourceUrl: 'https://www.egbc.ca/complaints-discipline/unauthorized-practice-or-title/unauthorized-practice-misuse-of-title/unauthorized-practice-or-title-faqs',
    checked: '2026-11-23',
  },
  egbcEit: {
    id: 'engineers.bc.eit',
    claim:
      'You can register as an engineer-in-training once you meet the academic requirements.',
    provenance: 'primary',
    source: 'Engineers and Geoscientists BC, Apply to Be a Professional Engineer in BC',
    sourceUrl: 'https://www.egbc.ca/how-to-apply/register-as-an-engineer/professional-engineer/apply-to-be-a-professional-engineer-in-bc',
    checked: '2026-11-23',
  },
  ieaPec: {
    id: 'engineers.washingtonAccord.pec',
    claim:
      'The International Engineering Alliance lists the Pakistan Engineering Council (PEC) as a full Washington Accord signatory since 2017; signatories recognise each other’s accredited engineering degree programmes.',
    provenance: 'primary',
    source: 'International Engineering Alliance, Washington Accord (Full Signatories list)',
    sourceUrl: 'https://www.internationalengineeringalliance.org/accords/washington-accord',
    checked: '2026-11-23',
    note: 'The old ieagreements.org domain no longer resolves; the IEA site is now internationalengineeringalliance.org. Engineers Canada\'s news item of 28 June 2017 records the approval at the IEA meeting of 18–23 June 2017.',
  },
  ecWaPakistan2017: {
    id: 'engineers.washingtonAccord.firstGraduates',
    claim:
      'Engineers Canada lists 2017 as the first year of Pakistani graduates the Accord applies to.',
    provenance: 'primary',
    source: 'Engineers Canada, The Washington Accord (Signatories to the Accord, year of first graduates to which the Accord applies)',
    sourceUrl: 'https://engineerscanada.ca/accreditation/the-washington-accord',
    checked: '2026-11-23',
  },
  pecLevel2: {
    id: 'engineers.pec.level2',
    claim:
      'PEC names the programmes it treats as “substantially equivalent to Washington Accord” on its Level-II list, by university and intake batch; the list cites an SRO dated 17 September 2025, and some programmes reached Level II only from a later batch.',
    provenance: 'primary',
    source: 'Pakistan Engineering Council, Programs under Level-II (First Schedule, updated SRO No. 1809(I)/2025 dated 17 September 2025); Programs under Level-I',
    sourceUrl: 'https://www.pec.org.pk/accredition/programs-under-level-2/',
    checked: '2026-11-23',
    note: 'The \'later batch\' point comes from Level-I entries marked \'See Level-II Batches\' (https://www.pec.org.pk/accredition/programs-under-level-1/).',
  },
  egbcWaExams: {
    id: 'engineers.bc.washingtonAccord',
    claim:
      'EGBC says a degree recognised through a Washington Accord signatory generally may not need academic exams, and confirms this after reviewing your application.',
    provenance: 'primary',
    source: 'Engineers and Geoscientists BC, Apply to Be a Professional Engineer in BC',
    sourceUrl: 'https://www.egbc.ca/how-to-apply/register-as-an-engineer/professional-engineer/apply-to-be-a-professional-engineer-in-bc',
    checked: '2026-11-23',
    note: 'EGBC\'s Policy 1.A (version 1.1, 5 November 2026) lists \'Degree considered substantially equivalent by Washington Accord signatory\' as one way to meet the academic requirement.',
  },
  irccEcaNoLicence: {
    id: 'engineers.eca.noLicence',
    claim:
      'IRCC says an ECA does not guarantee a licence for a regulated profession, which you get in the province or territory; its list of designated organisations includes no engineering body.',
    provenance: 'primary',
    source: 'IRCC, Educational credential assessment (ECA) for Express Entry (page details 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html',
    checked: '2026-11-23',
    note: 'Designated professional bodies are listed only for architects, physicians and pharmacists. Read through a page-fetch tool.',
  },
  egbcNoWes: {
    id: 'engineers.bc.noThirdParty',
    claim:
      'EGBC does not accept evaluations from WES or ICES and evaluates degrees itself with Engineers Canada; it will treat transcripts inside a WES ICAP package as official if WES first received official transcripts.',
    provenance: 'primary',
    source: 'Engineers and Geoscientists BC, Registration FAQs',
    sourceUrl: 'https://www.egbc.ca/how-to-apply/registration-faqs',
    checked: '2026-11-23',
  },
  onAcademic: {
    id: 'engineers.ontario.academic',
    claim:
      'Ontario\'s Regulation 941 requires an accredited Canadian degree or equivalent qualifications recognised by PEO’s Council.',
    provenance: 'primary',
    source: 'R.R.O. 1990, Reg. 941, s. 33(1) para. 1 (consolidated from 1 July 2026)',
    sourceUrl: 'https://www.ontario.ca/laws/regulation/900941',
    checked: '2026-11-23',
    note: 'Read from e-Laws\' Word version (ontario.ca/laws/docs/900941_e.doc).',
  },
  onExperience24: {
    id: 'engineers.ontario.experience',
    claim:
      'Section 33 of Regulation 941, as consolidated from 1 July 2026, requires at least 24 months of engineering experience after your degree, plus a competency-based assessment and the professional practice examination.',
    provenance: 'primary',
    source: 'R.R.O. 1990, Reg. 941, s. 33(1) paras. 2, 3 and 5 (consolidated from 1 July 2026; last amendment O. Reg. 126/26)',
    sourceUrl: 'https://www.ontario.ca/laws/regulation/900941',
    checked: '2026-11-23',
    note: 'The law\'s wording is \'no less than 24 months of experience in the practice of professional engineering after the bachelor\'s degree\'. Statistics Canada\'s NOC pages still say \'three or four years\'; the post does not print that.',
  },
  egbcExperience: {
    id: 'engineers.bc.experience',
    claim:
      'EGBC assesses experience by competencies, including knowledge of Canadian regulations, codes and standards; that experience can be gained in Canada or abroad; you can apply with no Canadian work experience; it does not consider visa status.',
    provenance: 'primary',
    source: 'Engineers and Geoscientists BC, Apply to Be a Professional Engineer in BC; Registration FAQs (questions 5 and 7)',
    sourceUrl: 'https://www.egbc.ca/how-to-apply/registration-faqs',
    checked: '2026-11-23',
    note: 'EGBC\'s page gives a minimum period of experience; the post does not print it because it is not set in an Act or regulation that was read.',
  },
  nocEngineeringCodes: {
    id: 'engineers.noc.group213',
    claim:
      'Statistics Canada places professional engineers in NOC 2021 group 213: 21300, 21301, 21310, 21311, 21320, 21321, 21322, 21330, 21331, 21332, 21390, 21399, all TEER 1; software engineers have their own code outside group 213.',
    provenance: 'primary',
    source: 'Statistics Canada, NOC 2021 Version 1.0, classification structure, 213 (modified 2022-03-14)',
    sourceUrl: 'https://www23.statcan.gc.ca/imdb/p3VD.pl?Function=getVDStruct&TVD=1322554&CVD=1322615&CPV=213&CST=01052021&CLV=2&MLV=5',
    checked: '2026-11-23',
    note: 'TEER is the code\'s second digit. 21311\'s title reads \'Computer engineers (except software engineers and designers)\'.',
  },
  stemList2026: {
    id: 'engineers.categories.stemList',
    claim:
      'On 23 November 2026, IRCC’s STEM category listed 21300, 21301, 21310, 21321 and 21331, plus technologists and technicians 22300, 22301 and 22310 (TEER 2); 21311, 21320, 21322, 21330, 21332, 21390 and 21399 were not listed.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Category-based selection (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-23',
    note: 'Read through a page-fetch tool, twice, with the same result.',
  },
  stemRenewed2026: {
    id: 'engineers.categories.renewed',
    claim:
      'IRCC’s backgrounder of 18 February 2026 named STEM occupations among the renewed 2026 categories.',
    provenance: 'primary',
    source: 'IRCC, Backgrounder: Attracting the world’s best talent to fill Canada’s labour gaps and build our economy (18 February 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/02/attracting-the-worlds-best-talent-to-fill-canadas-labour-gaps-and-build-our-economy.html',
    checked: '2026-11-23',
  },
  categoryRules: {
    id: 'engineers.categories.rules',
    claim:
      'To be invited in a STEM round, your recent experience must be in one listed occupation, and you must also qualify for an Express Entry programme; the category page sets how much experience counts and how recent it must be.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Category-based selection (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
    checked: '2026-11-23',
    note: 'The page\'s months and years are not printed because they appear only on the web page.',
  },
  noStemRound2026: {
    id: 'engineers.rounds.noStem2026',
    claim:
      'IRCC’s rounds data, read on 23 November 2026, shows no STEM round in 2026; the latest round was #453 on 28 October 2026.',
    provenance: 'primary',
    source: 'IRCC, Express Entry rounds of invitations (ee_rounds_123_en.json)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html',
    checked: '2026-11-23',
    note: '2026 rounds run from #389 (5 January 2026) to #453 (28 October 2026, Transport Occupations, 2026-Version 2); none is a STEM round.',
  },
  lastStemRound: {
    id: 'engineers.rounds.lastStem',
    claim:
      'The last STEM round was #293 on 11 April 2024, with 4,500 invitations and a lowest score of 491.',
    provenance: 'primary',
    source: 'IRCC, Express Entry rounds of invitations (ee_rounds_123_en.json), round #293, \'STEM occupations (Version 1)\'',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html',
    checked: '2026-11-23',
    note: 'Rounds #453 back to #278 (21 December 2023) were checked; #293 is the only STEM round in that span.',
  },
  crsChange3Nov: {
    id: 'engineers.crs.change',
    claim:
      'IRCC changed how CRS points are awarded from 3 November 2026.',
    provenance: 'primary',
    source: 'IRCC, News release: Canada refocusing Express Entry on top talent that drives economic growth (16 October 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/canada-refocusing-express-entry-on-top-talent-that-drives-economic-growth.html',
    checked: '2026-11-23',
  },
  prMythFiveTests: {
    id: 'ca.prMyths.fiveTests',
    claim:
      'On 23 November 2026, IRCC’s language test page listed five approved tests. In English they are IELTS General Training, CELPIP-General and PTE Core; in French, TEF Canada and TCF Canada.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Language test (page details 2026-10-16)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html',
    checked: '2026-11-23',
    note: 'IRPR s. 74(3)–(4): the Minister designates the organisations, approves the tests and makes them public. Same list as caLangDesignatedTests / the IELTS post.',
  },
  prMythTestRequired: {
    id: 'ca.prMyths.testRequired',
    claim:
      'The Regulations require approved test results for each Express Entry class. For federal skilled workers that is section 75(2)(d); for the Canadian Experience Class, section 87.1(2)(d); for trades, section 87.2(3)(a).',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, ss. 75(2)(d), 87.1(2)(d) and 87.2(3)(a) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html',
    checked: '2026-11-23',
    note: 'Also https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.1.html and section-87.2.html.',
  },
  prMythConclusive: {
    id: 'ca.prMyths.conclusiveEvidence',
    claim:
      'Under section 74(7), approved test results are conclusive evidence of your language ability. IRCC’s instructions to its officers add: “No other documentary evidence or explanation will be considered.”',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 74(7) (current to 2026-10-29); IRCC, Federal skilled workers selection criteria: Official language proficiency (page details 2026-06-23)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-74.html',
    checked: '2026-11-23',
    note: 'Quote is from the program delivery instruction at https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/standard-requirements/language-requirements/federal-skilled-workers-selection-criteria-official-proficiency.html. The post’s English-medium-degree sentence is our application of it.',
  },
  prMythThreshold: {
    id: 'ca.prMyths.threshold',
    claim:
      'Section 74(1) has the Minister fix the minimum level for each class, in each of the four skills. IRCC publishes it on its language test page, and for the Canadian Experience Class it depends on your job’s TEER category.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 74(1)–(2) (current to 2026-10-29); IRCC, Express Entry: Language test (page details 2026-10-16)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-74.html',
    checked: '2026-11-23',
    note: 'Levels deliberately not printed: IRCC’s page lists FSW CLB/NCLC 7; CEC TEER 0–1 CLB 7, TEER 2–3 CLB 5; FST CLB 5 speaking and listening, CLB 4 reading and writing. They are not in the text of IRPR or of the current Ministerial Instructions (signed 17 November 2026).',
  },
  prMythFswValidity: {
    id: 'ca.prMyths.fswValidity',
    claim:
      'For Federal Skilled Worker applicants, results must also be less than two years old on the day you apply.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 75(2)(d) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html',
    checked: '2026-11-23',
    note: 'Same rule as caLangFswValidity.',
  },
  prMythFamilyClass: {
    id: 'ca.prMyths.familyClass',
    claim:
      'A spouse, partner or dependent child joins the family class through their relationship to a sponsor, under section 117(1).',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 117(1)(a)–(b) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-117.html',
    checked: '2026-11-23',
  },
  prMythRefugee: {
    id: 'ca.prMyths.refugee',
    claim:
      'Refugee protection rests on a well-founded fear of persecution, under section 96 of the Act.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 96 (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-96.html',
    checked: '2026-11-23',
  },
  prMythPnp: {
    id: 'ca.prMyths.pnpAssessment',
    claim:
      'Under section 87(3), the province assesses you against criteria the Minister has approved in writing.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 87(3) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.html',
    checked: '2026-11-23',
    note: 'The post does not say any PNP stream waives a language test; it tells readers to check the stream.',
  },
  prMythFswNoOffer: {
    id: 'ca.prMyths.fswNoOffer',
    claim:
      'The minimum requirements in section 75(2) are skilled work experience, an approved test and an education credential, assessed if it is foreign. A job offer is not among them.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 75(2)(a)–(e) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html',
    checked: '2026-11-23',
    note: 'IRCC’s FSW page (page details 2026-11-18) lists a job offer only as a source of points.',
  },
  prMythFswWork: {
    id: 'ca.prMyths.fswWork',
    claim:
      'You need at least one year of continuous full-time skilled work, or the part-time equivalent, within the last ten years. IRCC’s Federal Skilled Worker page says it can be gained in Canada or abroad, so work in Pakistan counts.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 75(2)(a) (current to 2026-10-29); IRCC, Federal Skilled Worker Program (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers.html',
    checked: '2026-11-23',
    note: 'IRCC wording: “within the last 10 years, in Canada or abroad”. “So work in Pakistan counts” is our application of it.',
  },
  prMythGrid: {
    id: 'ca.prMyths.grid',
    claim:
      'The grid in sections 78 to 83 adds up to 100 points, and a qualifying offer is worth 10 of them under section 82(2). Language alone carries up to 28, under section 79(3).',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, ss. 78–83 (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-82.html',
    checked: '2026-11-23',
    note: 'Marginal notes: education 25 (s. 78), language 28 (s. 79), experience 15 (s. 80), age 12 (s. 81), arranged employment 10 (s. 82), adaptability 10 (s. 83) = 100. IRCC’s six selection factors page gives the same maxima.',
  },
  prMythPassMark: {
    id: 'ca.prMyths.passMark',
    claim:
      'Section 76(2) has the Minister fix the pass mark, and IRCC publishes it on its six selection factors page.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 76(2) (current to 2026-10-29); IRCC, Six selection factors (page details 2026-11-18)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-76.html',
    checked: '2026-11-23',
    note: 'Not printed: IRCC’s page gives 67 out of 100. The figure is fixed by the Minister and published by IRCC, not written in IRPR or the current Ministerial Instructions.',
  },
  prMythCec: {
    id: 'ca.prMyths.cecWork',
    claim:
      'The Canadian Experience Class needs no job offer either. But section 87.1(2)(a) asks for a year of skilled work in Canada within the last three years.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 87.1(2) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.1.html',
    checked: '2026-11-23',
    note: 's. 87.1(2) lists no job offer; s. 87.1(3)(c) also requires temporary resident status during the work. Same as cecWorkRule.',
  },
  prMythAtlanticRural: {
    id: 'ca.prMyths.atlanticRuralOffer',
    claim:
      'The Atlantic and rural community classes each require a job offer, under sections 87.3(2)(d) and 87.4(2)(d).',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, ss. 87.3(2)(d) and 87.4(2)(d) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.3.html',
    checked: '2026-11-23',
    note: 'Also https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.4.html.',
  },
  prMythFswFunds: {
    id: 'ca.prMyths.fswFunds',
    claim:
      'Under section 76(1)(b), you must hold transferable, available funds, free of debts, equal to half the “minimum necessary income” for your family. IRCC lists the current amounts on its proof of funds page.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 76(1)(b)(i) (current to 2026-10-29); IRCC, Express Entry: Proof of funds (page details 2026-11-18)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-76.html',
    checked: '2026-11-23',
    note: 'No amounts printed. IRCC’s table says “Updated July 7, 2025”.',
  },
  prMythFundsRules: {
    id: 'ca.prMyths.fundsRules',
    claim:
      'That page says you cannot borrow the money from another person or use equity in property. It asks for official letters from every bank or financial institution where you hold an account.',
    provenance: 'primary',
    source: 'IRCC, Express Entry: Proof of funds (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/proof-funds.html',
    checked: '2026-11-23',
    note: '“That includes your Pakistani banks” is our application of “any banks or financial institutions where you have an account”.',
  },
  prMythFundsExempt: {
    id: 'ca.prMyths.fundsExemption',
    claim:
      'Section 76(1)(b)(ii) exempts you if your offer earns points under section 82(2)(a), (b) or (d). Each of those needs a valid work permit or authorisation to work in Canada. IRCC’s proof of funds page puts it the same way: you must be authorised to work in Canada and hold a valid offer.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, ss. 76(1)(b)(ii) and 82(2) (current to 2026-10-29); IRCC, Express Entry: Proof of funds (page details 2026-11-18)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-76.html',
    checked: '2026-11-23',
    note: 's. 82(2)(a) and (b): in Canada holding a valid work permit; (d): holds a valid work permit or is authorised under s. 186. IRCC’s FSW page (2026-11-18) says the same as its proof of funds page.',
  },
  prMythFstOfferOrCert: {
    id: 'ca.prMyths.fstOfferOrCertificate',
    claim:
      'Section 87.2(3)(d) asks for either a qualifying job offer or a certificate of qualification in your trade. The certificate must come from a competent provincial or federal authority, and IRCC’s skilled trades page adds territorial bodies.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 87.2(3)(d) (current to 2026-10-29); IRCC, Federal Skilled Trades Program (page details 2026-11-18)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.2.html',
    checked: '2026-11-23',
    note: 'IRCC wording: “issued by a Canadian provincial, territorial or federal authority”.',
  },
  prMythFstCertificate: {
    id: 'ca.prMyths.fstCertificateAssessment',
    claim:
      'IRCC says the Canadian authority must assess your training, trade experience and skills. You may have to go to the province or territory for that.',
    provenance: 'primary',
    source: 'IRCC, Federal Skilled Trades Program (page details 2026-11-18)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/skilled-trades.html',
    checked: '2026-11-23',
    note: '“A trade certificate from Pakistan is not that certificate on its own” is our reading of s. 87.2(3)(d)(i) and this page.',
  },
  prMythFstWork: {
    id: 'ca.prMyths.fstWork',
    claim:
      'You need at least two years of full-time work in the trade, or the part-time equivalent, within the last five years, under section 87.2(3)(b).',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 87.2(3)(b) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.2.html',
    checked: '2026-11-23',
    note: 'Same as fstWorkRule.',
  },
  prMythFstFunds: {
    id: 'ca.prMyths.fstFunds',
    claim:
      'Unless you already have a valid offer and the right to work in Canada, section 87.2(5) asks for funds on the FSW formula.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 87.2(5) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-87.2.html',
    checked: '2026-11-23',
    note: 'Exempt: s. 87.2(3)(d)(ii), (iii) and (v), each needing a valid work permit or s. 186 authorisation. Formula: half the minimum necessary income, as in s. 76(1)(b)(i).',
  },
  prMythOfferGenuine: {
    id: 'ca.prMyths.offerAbility',
    claim:
      'Under section 82(2), an offer earns points only if you can do the job and are likely to accept and carry it out.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 82(2) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-82.html',
    checked: '2026-11-23',
    note: '“Paying for an offer does not make the job real” is our own comment.',
  },
  prMythRecruitmentFees: {
    id: 'ca.prMyths.recruitmentFees',
    claim:
      'For workers on LMIA-based work permits, section 209.3 bars the employer, with narrow exceptions, from charging or recovering recruitment fees from them.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Regulations, s. 209.3(1)(a)(xv) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-209.3.html',
    checked: '2026-11-23',
    note: 'Applies to employers of foreign nationals under s. 200(1)(c)(iii). Exceptions: fees under ss. 296(1), 298(1), 299(1) and recruitment fees allowed under seasonal agricultural worker agreements. Covered in more depth in /blog/fake-canada-job-offers-2026.',
  },
  prMythMisrepresentation: {
    id: 'ca.prMyths.misrepresentation',
    claim:
      'Misrepresenting a material fact makes you inadmissible under section 40 of the Act. The bar lasts five years, and you cannot apply for permanent residence during it.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 40(1)(a), (2)(a) and (3) (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html',
    checked: '2026-11-23',
  },
  citizenshipPhysicalPresenceDays: {
    id: 'canada.citizenship.physicalPresence.days',
    claim:
      'The Citizenship Act asks for at least 1,095 days of physical presence in Canada in the five years immediately before you apply, and you must be a permanent resident on that date.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 5(1)(c)(i), Justice Laws (current to 2026-10-29, last amended 2025-12-15)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-5.html',
    checked: '2026-11-23',
  },
  citizenshipPrePrHalfDays: {
    id: 'canada.citizenship.physicalPresence.prePrHalfDays',
    claim:
      'Each day in Canada before PR, as a temporary resident or protected person, counts as half a day, up to 365 in total; each day since becoming a PR counts as one.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 5(1.001), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-5.html',
    checked: '2026-11-23',
    note: 'The opening paraphrases temporary resident as visitor, student or worker.',
  },
  citizenship730AsPr: {
    id: 'canada.citizenship.physicalPresence.minDaysAsPr',
    claim:
      'At least 730 of the days must be as a PR.',
    provenance: 'primary',
    source: 'IRCC, Citizenship: Who can apply (page details 2026-04-21)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility.html',
    checked: '2026-11-23',
    note: 'IRCC: the eligibility period \'must include at least 730 days as a permanent resident\'. Arithmetic from s. 5(1)(c)(i) and (1.001): 1,095 minus 365. The two-year student example is our own illustration.',
  },
  citizenshipDaysAbroadCrownService: {
    id: 'canada.citizenship.physicalPresence.daysAbroad',
    claim:
      'Days abroad count only for a PR employed outside Canada by the Canadian Armed Forces, the federal public administration or a provincial public service, a spouse, partner or child living with such a PR, or a spouse or partner living with a citizen so employed; locally engaged staff are excluded.',
    provenance: 'primary',
    source: 'Citizenship Act, ss. 5(1.01) to 5(1.03), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-5.html',
    checked: '2026-11-23',
    note: 'The Lahore example (a year with a Canadian spouse in private work counts for PR but not for citizenship) is our reading of these sections against IRPA s. 28(2)(a)(ii).',
  },
  irpaResidencyCitizenSpouse: {
    id: 'canada.pr.residency.citizenSpouseAbroad',
    claim:
      'For PR, section 28 of the Immigration and Refugee Protection Act counts days abroad with a Canadian citizen spouse.',
    provenance: 'primary',
    source: 'Immigration and Refugee Protection Act, s. 28(2)(a)(ii), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/I-2.5/section-28.html',
    checked: '2026-11-23',
  },
  citizenshipSection21Exclusion: {
    id: 'canada.citizenship.physicalPresence.section21',
    claim:
      'Time on probation, on parole or in prison under Canadian law does not count as physical presence.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 21, Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-21.html',
    checked: '2026-11-23',
  },
  citizenshipStatusConditions: {
    id: 'canada.citizenship.requirements.status',
    claim:
      'A permanent resident on the date you apply, with no unfulfilled conditions and no removal order.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 5(1)(c) and (f), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-5.html',
    checked: '2026-11-23',
  },
  citizenshipTaxYears: {
    id: 'canada.citizenship.requirements.taxes',
    claim:
      'Any returns the Income Tax Act required, for three tax years within those five years.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 5(1)(c)(iii), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-5.html',
    checked: '2026-11-23',
  },
  citizenshipTaxNumberConsent: {
    id: 'canada.citizenship.application.taxNumber',
    claim:
      'The Citizenship Regulations, No. 2 (section 2) ask for your social insurance or tax number, and consent to share your tax data with IRCC. Without such a number, you declare that you did not need to file.',
    provenance: 'primary',
    source: 'Citizenship Regulations, No. 2 (SOR/2015-124), s. 2(1)(d) to (f), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2015-124/FullText.html',
    checked: '2026-11-23',
    note: 'The regulation\'s wording is consent to the sharing of tax information by the Canada Revenue Agency with the Minister.',
  },
  citizenshipLanguageAge: {
    id: 'canada.citizenship.requirements.languageAge',
    claim:
      'If aged 18 to 54 on the date you apply: adequate English or French, shown by test results or other evidence.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 5(1)(d) (18 or more but less than 55); Citizenship Regulations, No. 2, s. 2(1)(g)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-5.html',
    checked: '2026-11-23',
  },
  citizenshipKnowledgeAge: {
    id: 'canada.citizenship.requirements.knowledgeAge',
    claim:
      'If aged 18 to 54: knowledge of Canada and of a citizen’s responsibilities and privileges, in English or French.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 5(1)(e), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-5.html',
    checked: '2026-11-23',
  },
  citizenshipLanguageCriteria: {
    id: 'canada.citizenship.language.criteria',
    claim:
      'Section 14 of the Citizenship Regulations defines adequate knowledge as basic communication: short routine conversations, simple instructions, and basic grammar and vocabulary in speech.',
    provenance: 'primary',
    source: 'Citizenship Regulations (SOR/93-246), s. 14, Justice Laws (current to 2026-10-29, last amended 2026-10-23)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-93-246/FullText.html',
    checked: '2026-11-23',
  },
  citizenshipLanguageProofEducation: {
    id: 'canada.citizenship.language.educationProof',
    claim:
      'IRCC accepts proof of a secondary or post-secondary programme taught in English or French; a diploma, transcript or certificate will do, and the programme can be outside Canada.',
    provenance: 'primary',
    source: 'IRCC, Citizenship: Proof of language skills (page details 2025-09-11)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/language-proof.html',
    checked: '2026-11-23',
    note: 'IRCC: \'The program can be in or outside Canada.\' \'So an English-medium programme in Pakistan can count\' follows from that. The page did not list the accepted language tests when read, so none are named.',
  },
  citizenshipKnowledgeSubjects: {
    id: 'canada.citizenship.test.subjects',
    claim:
      'The knowledge test covers national symbols, history, geography, the system of government, and the responsibilities and privileges of citizenship.',
    provenance: 'primary',
    source: 'Citizenship Regulations (SOR/93-246), s. 15, Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-93-246/FullText.html',
    checked: '2026-11-23',
  },
  citizenshipTestFormat: {
    id: 'canada.citizenship.test.format',
    claim:
      'IRCC’s test page says the test may be online, in person or by Microsoft Teams, and gives the pass mark, which the law does not set.',
    provenance: 'primary',
    source: 'IRCC, Citizenship test (page details 2026-03-31)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/citizenship-test.html',
    checked: '2026-11-23',
    note: 'The pass mark was not readable in the fetched page text and is not printed.',
  },
  citizenshipForeignCharge: {
    id: 'canada.citizenship.prohibition.foreignCharge',
    claim:
      'Section 22 bars a grant while you face a charge abroad for an offence that would be indictable in Canada, unless waived.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 22(1)(b.1) and (1.1), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-22.html',
    checked: '2026-11-23',
    note: 'The waiver in s. 22(1.1) is on compassionate grounds.',
  },
  citizenshipForeignConviction: {
    id: 'canada.citizenship.prohibition.foreignConviction',
    claim:
      'A conviction abroad for such an offence, in the four years before you apply or while you wait, bars a grant even after a pardon.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 22(3), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-22.html',
    checked: '2026-11-23',
  },
  citizenshipOathAge: {
    id: 'canada.citizenship.oath.age',
    claim:
      'If aged 14 or over, you become a citizen only once you take the oath.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 3(1)(c), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-3.html',
    checked: '2026-11-23',
  },
  citizenshipProcessingFees: {
    id: 'canada.citizenship.fees.processing',
    claim:
      'The processing fees are $530 for an adult and $100 for a child under 18.',
    provenance: 'primary',
    source: 'Citizenship Regulations (SOR/93-246), s. 31(1) and Schedule items 1, 1.1 and 2, Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-93-246/FullText.html',
    checked: '2026-11-23',
    note: 'IRCC\'s notice of 27 March 2026 also says the adult processing fee remains $530.',
  },
  citizenshipOathNoFee: {
    id: 'canada.citizenship.fees.oath',
    claim:
      'Section 31(2) charges nothing for the oath.',
    provenance: 'primary',
    source: 'Citizenship Regulations (SOR/93-246), s. 31(2)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-93-246/FullText.html',
    checked: '2026-11-23',
  },
  rightOfCitizenshipFeeRegulation: {
    id: 'canada.citizenship.fees.rightOfCitizenship',
    claim:
      'Adults also pay a right of citizenship fee under section 32, refunded if citizenship is not granted. The Regulations print $100.',
    provenance: 'primary',
    source: 'Citizenship Regulations (SOR/93-246), ss. 32 and 33',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-93-246/FullText.html',
    checked: '2026-11-23',
    note: 'Section 32 applies to a person 18 or over and is payable when applying; s. 33 is the remission (refund).',
  },
  rightOfCitizenshipFeeIndexed: {
    id: 'canada.citizenship.fees.indexation',
    claim:
      'Section 17 of the Service Fees Act indexes it to inflation each year, most recently on 31 March 2026.',
    provenance: 'primary',
    source: 'Service Fees Act, s. 17 (current to 2026-10-29); IRCC, Right of citizenship fee increasing soon (27 March 2026)',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/right-citizenship-fee-increasing.html',
    checked: '2026-11-23',
    note: 'Also read: Canada Gazette Part I, 15 March 2025, Notice of annual change for the Right of Citizenship fee (first adjustment from 31 March 2025, citing s. 17 of the Service Fees Act and s. 32 of the Regulations): https://gazette.gc.ca/rp-pr/p1/2025/2025-03-15/html/notice-avis-eng.html. The 2026 amount is on IRCC\'s notice and fee list only and is not printed; no 2026 Gazette notice was found in the February and March 2026 issues.',
  },
  citizenshipMinorChild: {
    id: 'canada.citizenship.minor.section5_2',
    claim:
      'A parent who is a citizen can apply for a child under 18 who is a PR, under section 5(2). That route has no physical-presence, language or test requirement, and the fee is $100. A child of 14 or over countersigns the application and takes the oath.',
    provenance: 'primary',
    source: 'Citizenship Act, ss. 5(2) and 3(1)(c); Citizenship Regulations, No. 2, s. 4; Citizenship Regulations, Schedule item 2',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-5.html',
    checked: '2026-11-23',
  },
  citizenshipByDescentFirstGeneration: {
    id: 'canada.citizenship.descent.firstGeneration',
    claim:
      'A child born in Pakistan after you become Canadian is a citizen by descent under section 3(1)(b).',
    provenance: 'primary',
    source: 'Citizenship Act, s. 3(1)(b) and (3), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-3.html',
    checked: '2026-11-23',
    note: 's. 3(3) does not reach a parent who is a citizen by grant under s. 3(1)(c); IRCC\'s 2025 rules page also calls a child born abroad to a naturalised citizen \'Canadian by descent\'.',
  },
  billC3InForce: {
    id: 'canada.citizenship.billC3.inForce',
    claim:
      'The rule for the next generation changed on 15 December 2025, when Bill C-3 took effect.',
    provenance: 'primary',
    source: 'IRCC, Change to citizenship rules in 2025 (page details 2025-12-24); Justice Laws, Citizenship Act last amended 2025-12-15',
    sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/act-changes/rules-2025.html',
    checked: '2026-11-23',
  },
  citizenshipSecondGeneration: {
    id: 'canada.citizenship.descent.secondGeneration',
    claim:
      'Your grandchild born abroad to that child is generally Canadian only if your child first spent 1,095 days in Canada.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 3(3), Justice Laws (current to 2026-10-29)',
    sourceUrl: 'https://laws-lois.justice.gc.ca/eng/acts/C-29/section-3.html',
    checked: '2026-11-23',
    note: '\'Generally\' covers the exceptions: a citizen other parent not born abroad, and Crown service under s. 3(5).',
  },
  pakistanDualNationalityRule: {
    id: 'pakistan.citizenship.section14',
    claim:
      'Section 14(1) of Pakistan’s Citizenship Act 1951 ends Pakistani citizenship for anyone who also holds another, unless they renounce the other one. Section 14(3) exempts citizens of the United Kingdom and Colonies, and of countries the federal government names in the official Gazette.',
    provenance: 'primary',
    source: 'Pakistan Code, The Pakistan Citizenship Act, 1951 (Act II of 1951), s. 14(1) and (3), consolidated text',
    sourceUrl: 'https://www.pakistancode.gov.pk/pdffiles/administratora2b6f3407a109a491d47d649f6ff0c01.pdf',
    checked: '2026-11-23',
    note: 's. 14(3) added by Act No. XVII of 1972. The Gazette notification naming Canada was not found or read.',
  },
  dgipCanadaListed: {
    id: 'pakistan.citizenship.dualNationality.canada',
    claim:
      'Pakistan’s Directorate General of Immigration and Passports (DGI&P) lists Canada among the countries with which Pakistan has dual nationality arrangements. Its dual nationality page was last modified on 9 January 2026.',
    provenance: 'primary',
    source: 'DGI&P, Ministry of Interior, Dual Nationality (last modified 9 January 2026)',
    sourceUrl: 'https://dgip.gov.pk/immigration/dual_nationality.php',
    checked: '2026-11-23',
    note: 'Canada is entry 8 of the list. The page\'s count of countries is not printed. The page frames the list as countries whose citizens need not renounce when acquiring Pakistani citizenship; s. 14(3) applies the same notification to Pakistanis who acquire the other citizenship.',
  },
  canadaNoRenunciationCondition: {
    id: 'canada.citizenship.noRenunciation',
    claim:
      'Section 5 of the Citizenship Act sets no condition of giving up another citizenship, and Global Affairs Canada says Canada allows multiple citizenships.',
    provenance: 'primary',
    source: 'Citizenship Act, s. 5; Global Affairs Canada, Dual citizenship (modified 2026-08-13)',
    sourceUrl: 'https://travel.gc.ca/travelling/documents/dual-citizenship',
    checked: '2026-11-23',
    note: 'GAC: \'Canada allows you to have multiple citizenships while keeping your Canadian citizenship.\'',
  },
  gacCanadianPassportReturn: {
    id: 'canada.dualCitizens.passportToReturn',
    claim:
      'You need a valid Canadian passport to fly back to Canada.',
    provenance: 'primary',
    source: 'Global Affairs Canada, Dual citizenship (modified 2026-08-13)',
    sourceUrl: 'https://travel.gc.ca/travelling/documents/dual-citizenship',
    checked: '2026-11-23',
  },
  pakistanRenunciationProcess: {
    id: 'pakistan.citizenship.renunciation.process',
    claim:
      'Under section 14A, renouncing is a declaration on Form X made through a Pakistani mission.',
    provenance: 'primary',
    source: 'Pakistan Citizenship Act 1951, s. 14A(1); DGI&P, Renunciation of Pakistan Citizenship (last modified 4 October 2023)',
    sourceUrl: 'https://dgip.gov.pk/immigration/renunciation.php',
    checked: '2026-11-23',
    note: 'DGI&P\'s renunciation fee is a web-page figure and is not printed.',
  },
  pakistanRenunciationChildren: {
    id: 'pakistan.citizenship.renunciation.children',
    claim:
      'When a man renounces, his minor children living outside Pakistan lose citizenship too, though each can resume it within one year of turning 21.',
    provenance: 'primary',
    source: 'Pakistan Citizenship Act 1951, s. 14A(2), Pakistan Code consolidated text',
    sourceUrl: 'https://www.pakistancode.gov.pk/pdffiles/administratora2b6f3407a109a491d47d649f6ff0c01.pdf',
    checked: '2026-11-23',
  },
  gacPakistanDualRecognised: {
    id: 'pakistan.travel.dualCitizenshipRecognised',
    claim:
      'Global Affairs Canada’s Pakistan travel advice (updated 19 October 2026) says dual citizenship is legally recognised in Pakistan.',
    provenance: 'primary',
    source: 'Global Affairs Canada, Travel advice and advisories: Pakistan (last updated 19 October 2026)',
    sourceUrl: 'https://travel.gc.ca/destinations/pakistan',
    checked: '2026-11-23',
  },
  gacPakistanNicopEntry: {
    id: 'pakistan.travel.nicopOrVisa',
    claim:
      'A dual citizen entering on a Canadian passport needs a valid National Identity Card for Overseas Pakistanis (NICOP) or a visa.',
    provenance: 'primary',
    source: 'Global Affairs Canada, Travel advice and advisories: Pakistan (last updated 19 October 2026), Entry and exit requirements',
    sourceUrl: 'https://travel.gc.ca/destinations/pakistan',
    checked: '2026-11-23',
  },
  gacPakistanConsularLimited: {
    id: 'pakistan.travel.consularLimited',
    claim:
      'Canada’s ability to help dual citizens while they are in Pakistan may be limited.',
    provenance: 'primary',
    source: 'Global Affairs Canada, Travel advice and advisories: Pakistan (last updated 19 October 2026), Laws and culture',
    sourceUrl: 'https://travel.gc.ca/destinations/pakistan',
    checked: '2026-11-23',
  },
};

/** Facts still awaiting a lawyer's sign-off. Nothing here may be stated on a page. */
export const factsAwaitingLawyer = (): Fact[] => Object.values(FACTS).filter((f) => f.needsLawyer);

/** Facts confirmed against the official source itself — safe to state. */
export const factsPrimary = (): Fact[] =>
  Object.values(FACTS).filter((f) => f.provenance === 'primary' && !f.needsLawyer);
