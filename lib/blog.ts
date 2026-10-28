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
];

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);

/** Newest first. */
export const sortedPosts = () => [...POSTS].sort((a, b) => b.published.localeCompare(a.published));
