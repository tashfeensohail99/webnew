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
  topic: 'Canada' | 'USA' | 'UK' | 'Europe';
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
];

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);

/** Newest first. */
export const sortedPosts = () => [...POSTS].sort((a, b) => b.published.localeCompare(a.published));
