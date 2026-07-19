/**
 * The route table — one list, feeding both the sitemap and any nav that needs it.
 *
 * `reviewed` is the date a human last checked the page's CONTENT, and it becomes
 * the sitemap's lastmod. It is deliberately NOT the build timestamp: stamping
 * every URL with "today" on every deploy is a lie Google learns to ignore, and
 * once it ignores your lastmod it ignores it for the pages where it matters.
 *
 * So: when you meaningfully change a page, bump its date here. When you fix a
 * typo, don't.
 */
export type Route = {
  path: string;
  /** ISO date a human last reviewed the content. Becomes sitemap lastmod. */
  reviewed: string;
  /** Relative importance within THIS site. Not a ranking lever — a crawl hint. */
  priority: number;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
};

export const ROUTES: Route[] = [
  { path: '/', reviewed: '2026-07-17', priority: 1.0, changeFrequency: 'monthly' },

  // Money pages. Ordered by what the business actually sells.
  { path: '/work-permit-canada', reviewed: '2026-07-17', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/canada-visa-refused', reviewed: '2026-07-17', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/canada-visit-visa', reviewed: '2026-07-17', priority: 0.8, changeFrequency: 'monthly' },

  // Linked from every page's footer, and the position the whole brand rests on.
  { path: '/no-guarantee-policy', reviewed: '2026-07-17', priority: 0.6, changeFrequency: 'yearly' },

  // Destinations. Rules here change often — these need re-checking, not re-writing.
  { path: '/usa', reviewed: '2026-07-17', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/uk', reviewed: '2026-07-17', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/europe', reviewed: '2026-07-17', priority: 0.8, changeFrequency: 'weekly' },

  // Trust. The team page is the highest-value page on the site once it has names.
  { path: '/about', reviewed: '2026-07-17', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about/our-team', reviewed: '2026-07-17', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/book-consultation', reviewed: '2026-07-17', priority: 0.7, changeFrequency: 'monthly' },
  // Cost is the first thing this market searches and the last thing it answers.
  { path: '/fees', reviewed: '2026-07-17', priority: 0.7, changeFrequency: 'monthly' },

  // Free tools. High priority: they are the entry point most people search for,
  // and they qualify a lead better than any brochure page can.
  { path: '/tools', reviewed: '2026-07-18', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tools/work-permit-eligibility', reviewed: '2026-07-18', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/tools/visit-visa-refusal-risk', reviewed: '2026-07-18', priority: 0.9, changeFrequency: 'monthly' },
  // Highest search volume of the three. changeFrequency is honest: IRCC can move the
  // grid by ministerial instruction, so this page genuinely does need re-checking.
  { path: '/tools/crs-calculator', reviewed: '2026-07-20', priority: 0.9, changeFrequency: 'weekly' },

  // Boilerplate to a crawler, but they must exist and be reachable.
  { path: '/privacy', reviewed: '2026-07-17', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', reviewed: '2026-07-17', priority: 0.3, changeFrequency: 'yearly' },
];
