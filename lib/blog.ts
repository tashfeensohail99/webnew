/**
 * The blog — dated posts on what just changed.
 *
 * The guides are evergreen: they explain how a route works and print no
 * numbers that move. Posts are the opposite layer. Each one is pinned to a date,
 * may quote the figures of that date (with the source), and hands the reader on
 * to the guide that covers the subject in full. That split is what keeps the
 * guides from going stale and the posts from competing with them in search.
 *
 * Metadata only — no JSX — so the breadcrumbs (a client component) can read
 * titles without pulling post bodies into the browser bundle. Bodies live in
 * content/blog/<slug>.tsx and are wired up in app/blog/[slug]/page.tsx.
 *
 * To publish a post: add its entry here, its body file, and its line in BODIES.
 * The index, sitemap, RSS feed and llms.txt pick it up from this list.
 */

export type Post = {
  slug: string;
  title: string;
  /** Breadcrumb and card label — the title, shortened. */
  short: string;
  description: string;
  /** ISO dates. `updated` only when the facts in the post were re-checked. */
  published: string;
  updated?: string;
  topic: 'Canada' | 'USA' | 'UK' | 'Europe' | 'Pakistan';
  /** The evergreen guide this post hands the reader on to. */
  guide: { href: string; label: string };
  /** Official sources the post was written from, shown at the end. */
  sources: { label: string; href: string }[];
};

const IRCC_ROUNDS =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html';

export const POSTS: Post[] = [
  {
    slug: 'denmark-student-rules-october-2026',
    title: 'Denmark’s Student Rules Changed on 1 October 2026',
    short: 'Denmark student rules 2026',
    description:
      'Students who apply to Denmark from 1 October 2026 get up to 1 year to look for work, not 3, and cannot bring family. Who is affected, by date.',
    published: '2026-11-22',
    topic: 'Europe',
    guide: { href: '/europe', label: 'Europe guide' },
    sources: [
      { label: 'SIRI (New to Denmark) — New rules for third-country students in state-approved higher educational programmes (30 September 2026)', href: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende' },
      { label: 'SIRI (New to Denmark) — Higher educational programmes (last updated 1 October 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-education' },
      { label: 'SIRI (New to Denmark) — Accompanying family members to PhD students and persons seeking a Danish authorisation', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Family/Accompanying-family-members/Accompanying-family---study-and-PhD/' },
      { label: 'SIRI (New to Denmark) — Job seeking residence permit for 1 or 3 years after a completed educational programme (last updated 1 October 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Study---job-seeking/Study---3-years-job-seeking' },
      { label: 'SIRI (New to Denmark) — Job seeking permit for 6 months after a completed educational programme (last updated 1 October 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Jobseeking-study' },
      { label: 'SIRI (New to Denmark) — Work permit during the job seeking period (last updated 1 October 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Work-permit--job-seeking/' },
      { label: 'SIRI (New to Denmark) — New rules for third-country students in non-state-approved higher educational programmes (1 May 2025, updated 25 April 2026)', href: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2025/05/Nye-regler-ikkestatsligt-godkendte-udd' },
      { label: 'SIRI (New to Denmark) — New possibilities in the areas of work and study from 1 April 2023', href: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2023/03/L46-news-2' },
      { label: 'Retsinformation — Executive Order on Study, BEK nr 829 af 24/09/2026, §§ 5, 10, 16 and 17 (in force 1 October 2026; in Danish)', href: 'https://www.retsinformation.dk/eli/lta/2026/829' },
      { label: 'Retsinformation — Previous Executive Order on Study, BEK nr 950 af 25/06/2025, § 5(2) (historic; in Danish)', href: 'https://www.retsinformation.dk/eli/lta/2025/950' },
      { label: 'Retsinformation — Executive Order on Study, BEK nr 423 af 30/04/2025 (in force 2 May 2025; historic; in Danish)', href: 'https://www.retsinformation.dk/eli/lta/2025/423' },
      { label: 'SIRI (New to Denmark) — Start-up Denmark', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark' },
      { label: 'Embassy of Denmark in Pakistan — Residence permit', href: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/' },
    ],
  },
  {
    slug: 'denmark-job-seeker-visa-green-card',
    title: 'Is There a Denmark Job-Seeker Visa from Pakistan?',
    short: 'Denmark job-seeker visa',
    description:
      'Denmark has no job-seeker visa for people abroad, and its Green Card closed in 2016. The work routes open from Pakistan, and how to spot an outdated offer.',
    published: '2026-11-22',
    topic: 'Europe',
    guide: { href: '/europe', label: 'Europe guide' },
    sources: [
      { label: 'SIRI (New to Denmark) — Job seeking permit (last updated 18 June 2026)', href: 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Jobseeking-permit/' },
      { label: 'SIRI (New to Denmark) — You want to apply for a work permit', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work' },
      { label: 'Retsinformation — Act repealing the Greencard scheme, LOV nr 612 af 08/06/2016, § 2 (in Danish)', href: 'https://www.retsinformation.dk/eli/lta/2016/612' },
      { label: 'SIRI (New to Denmark) — Bill to repeal the Greencard scheme has been passed (10 June 2016)', href: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2018/01/Lovforslag-om-ophaevelse-af-greencard-ordningen-er-vedtaget' },
      { label: 'SIRI (New to Denmark) — Greencard: extension (last updated 26 June 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-extend/Work---extension/Greencard' },
      { label: 'Embassy of Denmark in Pakistan — Greencard update', href: 'https://um.dk/pakistan/en/travel-and-residence/greencard-update/' },
      { label: 'SIRI (New to Denmark) — New possibilities in the areas of work and study from 1 April 2023', href: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2023/03/L46-news-2' },
      { label: 'Retsinformation — Act on strengthened international recruitment, LOV nr 333 af 28/03/2023, § 2 (in Danish)', href: 'https://www.retsinformation.dk/eli/lta/2023/333' },
      { label: 'SIRI (New to Denmark) — Establishment card: extension (last updated 26 June 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-extend/Work---extension/Establishment-card' },
      { label: 'SIRI (New to Denmark) — The Pay Limit Scheme (last updated 22 September 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme' },
      { label: 'SIRI (New to Denmark) — The Supplementary Pay Limit Scheme (last updated 14 September 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Pay-Limit-Schemes/Supplementary-Pay-Limit-scheme/' },
      { label: 'SIRI (New to Denmark) — The Positive Lists', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists' },
      { label: 'SIRI (New to Denmark) — The Positive List for People with a Higher Education (last updated 1 October 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Positive-List-Higher-Education/' },
      { label: 'SIRI (New to Denmark) — The Positive List for Skilled Work (last updated 2 September 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists/Positive-List-for-skilled-work' },
      { label: 'SIRI (New to Denmark) — Fast-Track Scheme (last updated 1 October 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track' },
      { label: 'SIRI (New to Denmark) — Certified companies (last updated 21 October 2026)', href: 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Certified-companies/' },
      { label: 'SIRI (New to Denmark) — Start-up Denmark (last updated 29 June 2026)', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark' },
      { label: 'SIRI (New to Denmark) — New rules for third-country students in state-approved higher educational programmes (30 September 2026)', href: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende' },
      { label: 'SIRI (New to Denmark) — New rules for third-country students in non-state-approved higher educational programmes (1 May 2025, updated 25 April 2026)', href: 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2025/05/Nye-regler-ikkestatsligt-godkendte-udd' },
      { label: 'Retsinformation — Executive Order on Study, BEK nr 829 af 24/09/2026, § 5(2) (in Danish)', href: 'https://www.retsinformation.dk/eli/lta/2026/829' },
      { label: 'Embassy of Denmark in Pakistan — Residence permit', href: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/' },
    ],
  },
  {
    slug: 'express-entry-november-2026-crs-change',
    title: 'Express Entry’s 3 November CRS Change, Explained',
    short: 'November CRS points change',
    description:
      'What IRCC’s 3 November 2026 CRS change means from Pakistan: the new Labour Market Integration factor, high-wage job offers, no LMIA, and worked examples.',
    published: '2026-11-18',
    topic: 'Canada',
    guide: { href: '/tools/crs-calculator', label: 'CRS calculator' },
    sources: [
      { label: 'IRCC — Ministerial Instructions respecting the Express Entry system (in force since 3 November 2026)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html' },
      { label: 'IRCC — Ministerial Instructions respecting the Express Entry system, 25 March 2025 to 2 November 2026 (archived)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/25-march-2025-2-november-2026.html' },
      { label: 'IRCC — Changes to Express Entry for high-wage occupations (backgrounder, 16 October 2026)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/changes-to-express-entry-for-high-wage-occupations.html' },
      { label: 'IRCC — Express Entry: Comprehensive Ranking System (CRS) criteria', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html' },
      { label: 'IRCC — 2026 changes to points for Canadian work experience and job offers', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/changes.html' },
      { label: 'IRCC — High-wage occupations and how we assess them', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html' },
      { label: 'IRCC — Express Entry: Job offer', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/job-offer.html' },
      { label: 'IRCC — Express Entry: Rounds of invitations', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html' },
      { label: 'IRCC — Express Entry: Check your score (official CRS calculator)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html' },
      { label: 'IRCC — Online and telephone immigration scams', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html' },
      { label: 'IRCC — Consequences of immigration and citizenship fraud', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html' },
    ],
  },
  {
    slug: 'ielts-pte-core-celpip-pakistan',
    title: 'IELTS, PTE Core or CELPIP from Pakistan?',
    short: 'Which language test for Canada',
    description:
      'Which English or French test counts for Canadian PR, where to sit it in Pakistan, the versions IRCC rejects and the two-year rule, as of November 2026.',
    published: '2026-11-18',
    topic: 'Canada',
    guide: { href: '/tools/clb-converter', label: 'CLB converter' },
    sources: [
      { label: 'IRCC — Express Entry: Language test results', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html' },
      { label: 'Justice Laws — Immigration and Refugee Protection Regulations, section 74 (approved tests and designated organisations)', href: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-74.html' },
      { label: 'Justice Laws — Immigration and Refugee Protection Regulations, section 75 (federal skilled worker class)', href: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-75.html' },
      { label: 'IRCC — Ministerial Instructions respecting the Express Entry system (in force since 3 November 2026)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-application-management-system/current.html' },
      { label: 'IRCC — Express Entry: Category-based selection', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html' },
      { label: 'British Council Pakistan — IELTS test dates, fees and locations in Pakistan', href: 'https://www.britishcouncil.pk/exam/ielts/dates-locations' },
      { label: 'British Council Pakistan — Take your IELTS General Training test', href: 'https://www.britishcouncil.pk/exam/ielts/which-test/general-training' },
      { label: 'British Council Pakistan — What’s the difference between IELTS Academic and General Training?', href: 'https://www.britishcouncil.pk/exam/ielts/which-test' },
      { label: 'IDP IELTS Pakistan — Find IELTS exam dates, fees and venues', href: 'https://ielts.idp.com/pakistan/test-dates' },
      { label: 'IDP IELTS Pakistan — Home', href: 'https://ielts.idp.com/pakistan' },
      { label: 'Pearson — PTE Core', href: 'https://www.pearsonpte.com/pte-core' },
      { label: 'Pearson — PTE Core general FAQs', href: 'https://www.pearsonpte.com/help-center/general-faqs/pte-core.html' },
      { label: 'Pearson — PTE Core test centre search', href: 'https://mypte.pearsonpte.com/test/search?examCode=PTE-E' },
      { label: 'Paragon Testing — CELPIP test overview', href: 'https://www.celpip.ca/take-celpip/overview/' },
      { label: 'Paragon Testing — Find a CELPIP test date', href: 'https://www.celpip.ca/take-celpip/find-a-test-date/' },
      { label: 'CCI Paris Île-de-France — TEF Canada', href: 'https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/' },
      { label: 'CCI Paris Île-de-France — TEF and DFP centre finder', href: 'https://francais.cci-paris-idf.fr/candidat' },
      { label: 'France Éducation International — TCF Canada', href: 'https://www.france-education-international.fr/en/test/tcf-canada' },
      { label: 'Alliance Française de Lahore — TCF', href: 'https://aflahore.org/french-exams/tcf/' },
      { label: 'Alliance Française de Karachi — TCF exam', href: 'https://www.afkarachi.com/tcf-exam' },
      { label: 'Alliance Française de Karachi — TEF and TEFAQ exams', href: 'https://www.afkarachi.com/tef-tefaq-exams' },
    ],
  },
  {
    slug: 'canada-fines-unauthorised-immigration-agents',
    title: 'Canada Can Fine Unauthorised Immigration Agents',
    short: 'Fines for unauthorised agents',
    description:
      'Since 23 October 2026, Canada can fine paid immigration agents who are not authorised, even abroad. Who may charge you, and how to check a name first.',
    published: '2026-11-18',
    topic: 'Canada',
    guide: { href: '/canadian-immigration-lawyer-pakistan', label: 'How to check a representative' },
    sources: [
      { label: 'IRCC — New penalties for fraudulent and unauthorized immigration and citizenship representatives (28 October 2026)', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/new-penalties-for-fraudulent-and-unauthorized-immigration-and-citizenship-representatives.html' },
      { label: 'Canada Gazette, Part II — Regulations Amending the Immigration and Refugee Protection Regulations (Administrative Penalties and Consequences), SOR/2026-220', href: 'https://gazette.gc.ca/rp-pr/p2/2026/2026-11-04/html/sor-dors220-eng.html' },
      { label: 'Justice Laws — Immigration and Refugee Protection Regulations, s. 315.54 (calculation of penalty)', href: 'https://laws-lois.justice.gc.ca/eng/regulations/SOR-2002-227/section-315.54.html' },
      { label: 'Justice Laws — Immigration and Refugee Protection Act, s. 91 (representation or advice for consideration)', href: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-91.html' },
      { label: 'Justice Laws — Immigration and Refugee Protection Act, s. 40 (misrepresentation)', href: 'https://laws-lois.justice.gc.ca/eng/acts/i-2.5/section-40.html' },
      { label: 'IRCC — What happens if you break the rules when giving advice or representation', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/partners-service-providers/break-rules-advice-representation.html' },
      { label: 'IRCC — Learn about representatives', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html' },
      { label: 'IRCC — How to choose an immigration or citizenship representative', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html' },
      { label: 'IRCC — Find out if your representative is authorized', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html' },
      { label: 'IRCC — Add, change or cancel a representative', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/change-cancel.html' },
      { label: 'College of Immigration and Citizenship Consultants — Find an immigration consultant (public register)', href: 'https://www.college-ic.ca/protecting-the-public/find-an-immigration-consultant' },
      { label: 'IRCC — Online and telephone immigration scams', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html' },
      { label: 'IRCC — Understand the consequences of unauthorized work', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/admissibility-enforcement/consequences-unauthorized-work.html' },
      { label: 'IRCC — Consequences of immigration and citizenship fraud', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html' },
      { label: 'IRCC — How to report scams, fraud or abuse', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/report-fraud.html' },
    ],
  },
  {
    slug: 'uk-student-visa-funds-30-november-2026',
    title: 'UK Student Visa Funds Rise on 30 November 2026',
    short: 'UK Student visa funds',
    description:
      'From 30 November 2026, UK Student visa applicants must show £1,570 a month in London or £1,203 elsewhere. Who it affects, and the 28-day rule from Pakistan.',
    published: '2026-11-18',
    topic: 'UK',
    guide: { href: '/uk', label: 'UK guide' },
    sources: [
      { label: 'GOV.UK — Statement of changes to the Immigration Rules: HC 584, 3 September 2026 (paragraphs APP ST8 to APP ST10 and Implementation)', href: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026-accessible' },
      { label: 'GOV.UK — Explanatory memorandum to HC 584 (paragraphs 5.43 to 5.45, 6.3 and 8.2)', href: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-584-3-september-2026/explanatory-memorandum-to-the-statement-of-changes-in-immigration-rules-hc-584-3-september-2026-accessible' },
      { label: 'GOV.UK — Immigration Rules: Appendix Student (ST 12, ST 22.1, ST 31 to ST 37)', href: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student' },
      { label: 'GOV.UK — Immigration Rules: Appendix Finance', href: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance' },
      { label: 'GOV.UK — Immigration Rules: introduction (definitions of date of application and studying in London)', href: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-introduction' },
      { label: 'GOV.UK — Student visa: Money you need', href: 'https://www.gov.uk/student-visa/money' },
      { label: 'GOV.UK — Student visa: Your partner and children', href: 'https://www.gov.uk/student-visa/family-members' },
      { label: 'GOV.UK — Financial evidence for Student and Child Student visa applicants', href: 'https://www.gov.uk/guidance/financial-evidence-for-student-and-child-student-route-applicants' },
    ],
  },
  {
    slug: 'uk-graduate-visa-18-months-2027',
    title: 'UK Graduate Visa Falls to 18 Months in 2027',
    short: 'Graduate visa to 18 months',
    description:
      'UK Graduate visa applications made from 1 January 2027 get 18 months, not 2 years; PhDs keep 3. Who is covered, by timing, and how to apply in time.',
    published: '2026-11-18',
    topic: 'UK',
    guide: { href: '/uk', label: 'UK guide' },
    sources: [
      { label: 'GOV.UK — Immigration Rules: Appendix Graduate (GR 1.4, GR 6.1, GR 8.1, GR 8.2)', href: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-graduate' },
      { label: 'GOV.UK — Statement of changes to the Immigration Rules: HC 1333, 14 October 2025 (paragraph APP GR3 and Implementation)', href: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025-accessible-version' },
      { label: 'GOV.UK — Explanatory memorandum to HC 1333 (paragraphs 5.25 and 5.26)', href: 'https://www.gov.uk/government/publications/statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025/explanatory-memorandum-to-the-statement-of-changes-to-the-immigration-rules-hc-1333-14-october-2025-accessible' },
      { label: 'GOV.UK — Graduate visa (overview)', href: 'https://www.gov.uk/graduate-visa' },
      { label: 'GOV.UK — Graduate visa: The course you studied', href: 'https://www.gov.uk/graduate-visa/course-you-studied' },
      { label: 'GOV.UK — Graduate visa: Apply', href: 'https://www.gov.uk/graduate-visa/apply' },
      { label: 'GOV.UK — Graduate visa: Your partner and children', href: 'https://www.gov.uk/graduate-visa/your-partner-and-children' },
      { label: 'GOV.UK — Immigration Rules: Appendix Student (ST 25.3)', href: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student' },
      { label: 'GOV.UK — Immigration Rules: introduction (definition of date of application)', href: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-introduction' },
    ],
  },
  {
    slug: 'us-visa-rules-pakistan-2026',
    title: 'US Visa Rules for Pakistanis: Bond, Bans, Vetting',
    short: 'US visa rules for Pakistanis',
    description:
      'Where the US visa bond, travel ban, social media checks, immigrant-visa pause and visa integrity fee stand for Pakistani applicants on 18 November 2026.',
    published: '2026-11-18',
    topic: 'USA',
    guide: { href: '/usa', label: 'US guide' },
    sources: [
      { label: 'Federal Register — Visas: Visa Bond Program (final rule, 3 August 2026, 22 CFR 41.11(c))', href: 'https://www.federalregister.gov/documents/2026/08/03/2026-15726/visas-visa-bond-program' },
      { label: 'US Department of State — State Department Expands Visa Bonds to Combat Illegal Overstay Rates (fact sheet, 18 March 2026)', href: 'https://www.state.gov/releases/office-of-the-spokesperson/2026/03/state-department-expands-visa-bonds-to-combat-illegal-overstay-rates' },
      { label: 'US Department of State — Countries Subject to Visa Bonds', href: 'https://travel.state.gov/content/travel/en/News/visas-news/countries-subject-to-visa-bonds.html' },
      { label: 'US Embassy in Bangladesh — Visas (visa bond notice)', href: 'https://bd.usembassy.gov/visas/' },
      { label: 'Federal Register — Proclamation 10998, Restricting and Limiting the Entry of Foreign Nationals (December 2025)', href: 'https://www.federalregister.gov/documents/2025/12/19/2025-23570/restricting-and-limiting-the-entry-of-foreign-nationals-to-protect-the-security-of-the-united-states' },
      { label: 'Federal Register — Proclamation 11069, Restriction on Entry of Certain Nonimmigrant Workers (September 2026)', href: 'https://www.federalregister.gov/documents/2026/09/23/2026-19554/restriction-on-entry-of-certain-nonimmigrant-workers' },
      { label: 'US Embassy in Pakistan — Visas (notices, updated 16 November 2026)', href: 'https://pk.usembassy.gov/visas/' },
      { label: 'US Department of State — Announcement of Expanded Screening and Vetting for Visa Applicants (media note, 18 June 2025)', href: 'https://www.state.gov/releases/office-of-the-spokesperson/2025/06/announcement-of-expanded-screening-and-vetting-for-visa-applicants' },
      { label: 'US Department of State — Announcement of Expanded Screening and Vetting for Visa Applicants (effective 30 March 2026)', href: 'https://travel.state.gov/content/travel/en/News/visas-news/announcement-of-expanded-screening-and-vetting-for-visa-applicants.html' },
      { label: 'US Department of State — Immigrant visa processing updates for nationalities at high risk of public benefits reliance', href: 'https://travel.state.gov/en/newsroom/visas/2026/immigrant-visa-processing-updates-for-nationalities-at-high-risk-of-public-benefits-usage.html' },
      { label: 'US Embassy in Albania — Immigrant visa processing updates (State Department notice of 15 January 2026, list of 75 countries)', href: 'https://al.usembassy.gov/immigrant-visa-processing-updates-for-nationalities-at-high-risk-of-public-benefits-usage/' },
      { label: 'US Embassy in Pakistan — Immigrant Visas', href: 'https://pk.usembassy.gov/immigrant-visas/' },
      { label: 'US Embassy in Pakistan — Nonimmigrant Visas', href: 'https://pk.usembassy.gov/nonimmigrant-visas/' },
      { label: 'GovInfo — Public Law 119-21 (4 July 2025), section 100007, visa integrity fee', href: 'https://www.govinfo.gov/app/details/PLAW-119publ21' },
      { label: 'Federal Register — USCIS Immigration Fees Required by HR-1 Reconciliation Bill (22 July 2025)', href: 'https://www.federalregister.gov/documents/2025/07/22/2025-13738/uscis-immigration-fees-required-by-hr-1-reconciliation-bill' },
      { label: 'USTravelDocs Pakistan — Pay your visa fees', href: 'https://www.ustraveldocs.com/pk/en/step-3' },
      { label: 'USTravelDocs Pakistan — Complete your application (DS-160)', href: 'https://www.ustraveldocs.com/pk/en/step-2' },
    ],
  },
  {
    slug: 'schengen-visa-refusals-pakistan-2025',
    title: 'Schengen Visa Refusals in Pakistan: The 2025 Data',
    short: 'Schengen refusals in Pakistan',
    description:
      'Official EU figures: 89,270 Schengen visa applications at consulates in Pakistan in 2025, 45.9% not issued, and the rate for each Schengen country.',
    published: '2026-11-18',
    topic: 'Europe',
    guide: { href: '/europe', label: 'Europe guide' },
    sources: [
      { label: 'European Commission (DG HOME) — Statistics on short-stay visas', href: 'https://home-affairs.ec.europa.eu/policies/schengen/schengen-visas/eu-visa-policy/statistics-short-stay-visas_en' },
      { label: 'European Commission — Visa statistics for consulates, 2025 (Excel)', href: 'https://home-affairs.ec.europa.eu/document/download/56816949-e59f-442b-9091-5d03360bf860_en' },
      { label: 'European Commission — Visa statistics for consulates, 2024 (Excel)', href: 'https://home-affairs.ec.europa.eu/document/download/6552447c-1d75-4f7c-bed6-1bd17a5d59f8_en?filename=2024-schengen-visa-statistics-consulates_en.xlsx' },
      { label: 'European Commission — Visa statistics: quality and metadata reporting', href: 'https://home-affairs.ec.europa.eu/document/download/b4626219-fa37-4650-8216-0c2bda466c74_en?filename=visa_statistics_-_quality_and_metadata_reporting.pdf' },
      { label: 'EUR-Lex — Regulation (EC) No 810/2009 (Visa Code), consolidated version of 28 June 2024', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628' },
    ],
  },
  {
    slug: 'express-entry-2026-so-far',
    title: 'Express Entry in 2026 So Far: What 62 Rounds Show',
    short: 'Express Entry in 2026 so far',
    description:
      'IRCC has issued 143,467 invitations in 62 rounds this year — and not one round open to the whole pool. What that means if you are applying from Pakistan.',
    published: '2026-10-23',
    topic: 'Canada',
    guide: { href: '/express-entry', label: 'Express Entry guide' },
    sources: [
      { label: 'IRCC — Express Entry rounds of invitations (all rounds and the pool distribution)', href: IRCC_ROUNDS },
      {
        label: 'IRCC — Express Entry: category-based selection',
        href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html',
      },
    ],
  },
  {
    slug: 'ontario-higher-earners-2026',
    title: 'Ontario’s $80,000 Points Change: Who It Helps',
    short: 'Ontario’s $80,000 points change',
    description:
      'Ontario’s new points for people who earned $80,000+ in Canada: what changed on 5 October 2026, who it helps, and why it rarely helps applicants abroad.',
    published: '2026-10-23',
    topic: 'Canada',
    guide: { href: '/pnp/ontario', label: 'Ontario PNP guide' },
    sources: [
      { label: 'Ontario — 2026 Ontario Immigrant Nominee Program updates', href: 'https://www.ontario.ca/page/2026-ontario-immigrant-nominee-program-updates' },
      { label: 'Ontario — Ontario Workforce Priority stream', href: 'https://www.ontario.ca/page/ontario-workforce-priority-stream' },
      { label: 'Ontario — OINP application process', href: 'https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp-application-process' },
      { label: 'Ontario — OINP employer guide', href: 'https://www.ontario.ca/page/oinp-employer-guide' },
      { label: 'Ontario — OINP invitations to apply', href: 'https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp-invitations-apply' },
      { label: 'IRCC — How the Provincial Nominee Program works', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/works.html' },
    ],
  },
  {
    slug: 'eb2-niw-pakistan',
    title: 'EB-2 NIW Green Card from Pakistan: Where It Stands',
    short: 'EB-2 NIW from Pakistan',
    description:
      'What the EB-2 National Interest Waiver asks for, whether Pakistanis can file now, the end of the visa pause and the EB-2 backlog — as of October 2026.',
    published: '2026-10-24',
    topic: 'USA',
    guide: { href: '/usa', label: 'USA guide' },
    sources: [
      { label: 'USCIS Policy Manual — Volume 6, Part F, Chapter 5 (advanced degree, exceptional ability, national interest waiver)', href: 'https://www.uscis.gov/policy-manual/volume-6-part-f-chapter-5' },
      { label: 'USCIS — Employment-based immigration: second preference (EB-2)', href: 'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2' },
      { label: 'USCIS — Form I-140', href: 'https://www.uscis.gov/i-140' },
      { label: 'US Department of State — Immigrant visa processing updates (pause no longer in effect as of 21 August 2026)', href: 'https://travel.state.gov/en/newsroom/visas/2026/immigrant-visa-processing-updates-for-nationalities-at-high-risk-of-public-benefits-usage.html' },
      { label: 'US Embassy in Pakistan — Visas', href: 'https://pk.usembassy.gov/visas/' },
      { label: 'Federal Register — Proclamation 10998 (December 2025)', href: 'https://www.govinfo.gov/content/pkg/FR-2025-12-19/pdf/2025-23570.pdf' },
      { label: 'USCIS — Recent court order on hold policies', href: 'https://www.uscis.gov/newsroom/alerts/recent-court-order-on-hold-policies' },
      { label: 'US Department of State — Visa Bulletin for November 2026', href: 'https://travel.state.gov/content/dam/visas/Bulletins/visabulletin_November2026.pdf' },
      { label: 'USCIS — Adjustment of status and discretion (PM-602-0199, May 2026)', href: 'https://uscis.gov/sites/default/files/document/memos/PM-602-0199-AdjustmentOfStatusAndDiscretion-20260521.pdf' },
      { label: 'USCIS — Common scams', href: 'https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/common-scams' },
    ],
  },
  {
    slug: 'mofa-online-attestation',
    title: 'MOFA Online Attestation in Pakistan: How It Works',
    short: 'MOFA online attestation',
    description:
      'Since 12 October 2026, MOFA attests documents online and emails an e-certificate: what changed, apostille or general attestation, and what Canada accepts.',
    published: '2026-10-28',
    topic: 'Pakistan',
    guide: { href: '/canada-immigration-from-pakistan', label: 'guide to immigrating to Canada from Pakistan' },
    sources: [
      { label: 'Ministry of Foreign Affairs — Consular services: attestation of documents (notices of 27 July and 12 October 2026)', href: 'https://mofa.gov.pk/tabs/consular-service-attestation-of-documents' },
      { label: 'MOFA — Attestation portal (apply online)', href: 'https://portal-attestation.mofa.gov.pk' },
      { label: 'MOFA — Apostille and general attestation: services, checklists and destination directory', href: 'https://attestation.mofa.gov.pk/' },
      { label: 'MOFA — General attestation SOPs and checklist', href: 'https://attestation.mofa.gov.pk/general-checklist' },
      { label: 'HEC — Degree attestation', href: 'https://www.hec.gov.pk/english/services/students/DAS/Pages/Degree-Attestation.aspx' },
      { label: 'IBCC — Requirements for attestation', href: 'https://ibcc.edu.pk/attestation/requirements-for-attestation/' },
    ],
  },
  {
    slug: 'austria-red-white-red-card',
    title: 'Austria Red-White-Red Card from Pakistan in 2026',
    short: 'Austria’s Red-White-Red Card',
    description:
      'Austria’s points-based work permit from Pakistan: the four routes, 2026’s 64 shortage jobs, August 2026’s job-change rules and the embassy process.',
    published: '2026-10-29',
    topic: 'Europe',
    guide: { href: '/europe', label: 'Europe & Schengen guide' },
    sources: [
      { label: 'Migration platform of the Austrian Federal Government — Red-White-Red Card categories', href: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/' },
      { label: 'migration.gv.at — Very highly qualified workers (points and job-seeker visa)', href: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/very-highly-qualified-workers/' },
      { label: 'migration.gv.at — Skilled workers in shortage occupations', href: 'https://www.migration.gv.at/de/formen-der-zuwanderung/dauerhafte-zuwanderung/fachkraefte-in-mangelberufen/' },
      { label: 'migration.gv.at — Nationwide shortage occupations for 2026 (German)', href: 'https://www.migration.gv.at/de/formen-der-zuwanderung/dauerhafte-zuwanderung/bundesweite-mangelberufe/' },
      { label: 'migration.gv.at — Other key workers', href: 'https://www.migration.gv.at/de/formen-der-zuwanderung/dauerhafte-zuwanderung/sonstige-schluesselkraefte/' },
      { label: 'migration.gv.at — EU Blue Card', href: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/eu-blue-card/' },
      { label: 'migration.gv.at — Red-White-Red Card plus', href: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/redwhiteredcardplus/' },
      { label: 'Austrian Ministry of Labour and Economy — Shortage occupations for 2025 (press release, 7 January 2025)', href: 'https://www.bmwet.gv.at/Presse/Archiv/Archiv-Pressemeldungen-BMAW/BMAW-Pressemeldungen-2025/J%C3%A4nner-2025/Fachkr%C3%A4fteverordnung-25.html' },
      { label: 'Austrian Parliament — Amendment to the NAG and AuslBG (443 d.B., BGBl. I No. 81/2026)', href: 'https://www.parlament.gv.at/gegenstand/XXVIII/I/443' },
      { label: 'Austrian Embassy Islamabad — How to apply', href: 'https://www.bmeia.gv.at/en/austrian-embassy-islamabad/travel-to-austria/entrance-and-residence/how-to-apply' },
      { label: 'Austrian Embassy Islamabad — Settlement and residence (fees from 1 January 2026)', href: 'https://www.bmeia.gv.at/en/austrian-embassy-islamabad/travel-to-austria/entrance-and-residence/settlement-and-residence' },
      { label: 'Austrian Embassy Islamabad — Home page (notice on false information and fraudulent numbers)', href: 'https://www.bmeia.gv.at/en/austrian-embassy-islamabad' },
      { label: 'berufsanerkennung.at — Recognition of foreign qualifications', href: 'https://www.berufsanerkennung.at/en/' },
    ],
  },
  {
    slug: 'start-up-denmark-eligibility',
    title: 'Who Qualifies for Start-up Denmark in 2026?',
    short: 'Start-up Denmark eligibility',
    description:
      'The four tests a Start-up Denmark application must pass before the expert panel sees it: nationality, team, ownership and business type, with examples.',
    published: '2026-11-17',
    topic: 'Europe',
    guide: { href: '/europe/denmark-startup-visa', label: 'Start-up Denmark guide' },
    sources: [
      { label: 'Start-up Denmark (Danish Business Authority) — Application guide for startups', href: 'https://startupdenmarkprogramme.dk/application-guide-startups' },
      { label: 'Start-up Denmark — About the Startup Denmark programme', href: 'https://startupdenmarkprogramme.dk/about-startup-denmark-programme' },
      { label: 'Retsinformation — Startup Denmark decree, BEK nr 969 af 15/06/2022 (in Danish)', href: 'https://www.retsinformation.dk/eli/lta/2022/969' },
      { label: 'SIRI (New to Denmark) — Start-up Denmark residence and work permit', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark' },
    ],
  },
  {
    slug: 'start-up-denmark-pitch-deck-video',
    title: 'Start-up Denmark Pitch Deck and Video Guide',
    short: 'The pitch deck and video',
    description:
      'What the 15-page Start-up Denmark pitch deck and 5-minute video must contain, a page plan mapped to the panel’s four questions, and the screening traps.',
    published: '2026-11-17',
    topic: 'Europe',
    guide: { href: '/europe/denmark-startup-visa', label: 'Start-up Denmark guide' },
    sources: [
      { label: 'Start-up Denmark (Danish Business Authority) — Application guide for startups', href: 'https://startupdenmarkprogramme.dk/application-guide-startups' },
      { label: 'Start-up Denmark — About the Startup Denmark programme', href: 'https://startupdenmarkprogramme.dk/about-startup-denmark-programme' },
      { label: 'Embassy of Denmark in Pakistan — Residence permit', href: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/' },
    ],
  },
  {
    slug: 'start-up-denmark-expert-panel-scoring',
    title: 'How the Start-up Denmark Expert Panel Scores You',
    short: 'How the panel scores you',
    description:
      'Three panel members, four questions graded 1 to 5, a 3.5 average to pass: how Start-up Denmark is scored, how long it takes, and what to do after a no.',
    published: '2026-11-17',
    topic: 'Europe',
    guide: { href: '/europe/denmark-startup-visa', label: 'Start-up Denmark guide' },
    sources: [
      { label: 'Start-up Denmark (Danish Business Authority) — Application guide for startups', href: 'https://startupdenmarkprogramme.dk/application-guide-startups' },
      { label: 'Start-up Denmark — About the Startup Denmark programme', href: 'https://startupdenmarkprogramme.dk/about-startup-denmark-programme' },
      { label: 'SIRI (New to Denmark) — Start-up Denmark residence and work permit', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark' },
    ],
  },
  {
    slug: 'start-up-denmark-residence-permit-siri',
    title: 'Start-up Denmark Permit: SIRI Fee and Funds',
    short: 'The SIRI residence permit',
    description:
      'After panel approval: SIRI’s DKK 3,060 fee, the funds to show, the documents, processing times, family and submitting in Pakistan, as of November 2026.',
    published: '2026-11-17',
    topic: 'Europe',
    guide: { href: '/europe/denmark-startup-visa', label: 'Start-up Denmark guide' },
    sources: [
      { label: 'SIRI (New to Denmark) — Start-up Denmark residence and work permit', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark' },
      { label: 'SIRI — Self-support requirements', href: 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Self-support---SIRI/' },
      { label: 'SIRI — Accompanying family members', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Family/Accompanying-family-members/Accompanying-family---work' },
      { label: 'Embassy of Denmark in Pakistan — Residence permit', href: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/' },
      { label: 'Embassy of Denmark in Pakistan — Application fee', href: 'https://um.dk/pakistan/en/travel-and-residence/residence-permit/application-fee/' },
    ],
  },
  {
    slug: 'start-up-denmark-extension',
    title: 'Start-up Denmark Extension After Two Years',
    short: 'Extending the permit',
    description:
      'How Start-up Denmark extensions work: the progress report, the CVR and documents the panel wants, the 45-minute interview, appeals and SIRI’s timing.',
    published: '2026-11-17',
    topic: 'Europe',
    guide: { href: '/europe/denmark-startup-visa', label: 'Start-up Denmark guide' },
    sources: [
      { label: 'Start-up Denmark — Application guide for extension', href: 'https://startupdenmarkprogramme.dk/application-guide-extension' },
      { label: 'SIRI (New to Denmark) — Start-up Denmark residence and work permit', href: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark' },
      { label: 'Retsinformation — Startup Denmark decree, BEK nr 969 af 15/06/2022 (in Danish)', href: 'https://www.retsinformation.dk/eli/lta/2022/969' },
    ],
  },
];

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);

/**
 * A post date for structured data. Google flags a date with no time zone, and
 * the posts carry only a day, so this states the start of that day in Pakistan.
 */
export const schemaDate = (day: string) => `${day}T00:00:00+05:00`;

/** Newest first. */
export const sortedPosts =() => [...POSTS].sort((a, b) => b.published.localeCompare(a.published));

/**
 * Newest first, but at most one post per guide. For the short strips on the
 * homepage and /updates, so a series published together (five Start-up Denmark
 * posts on one day) shows as one card rather than filling the strip.
 */
export const latestPerGuide = (n: number) => {
  const seen = new Set<string>();
  return sortedPosts()
    .filter((p) => !seen.has(p.guide.href) && (seen.add(p.guide.href), true))
    .slice(0, n);
};
