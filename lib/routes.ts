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

  // ── Programme coverage ──────────────────────────────────────────────────
  // Broad by design. Someone arriving with a spousal sponsorship question should
  // find a spousal sponsorship page whether or not that is this month's busy
  // service — see the note at the top of lib/nav.ts.
  { path: '/immigration-programs', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/express-entry', reviewed: '2026-07-20', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/express-entry/federal-skilled-worker', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/express-entry/canadian-experience-class', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/express-entry/federal-skilled-trades', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp', reviewed: '2026-07-20', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/family-sponsorship', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },

  { path: '/study-in-canada', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },

  { path: '/work-permits', reviewed: '2026-07-20', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work-permits/lmia', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/work-permits/lmia-exempt', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },

  { path: '/visitor-visa', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/visitor-visa/super-visa', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },

  { path: '/refusals/gcms-notes', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },

  // Wave 2 programme coverage. Structural pages — no volatile numbers, so these
  // age slowly and the reviewed date means something.
  { path: '/atlantic-immigration-program', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/business-immigration', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/caregivers', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/express-entry/category-based-draws', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/family-sponsorship/dependent-children', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/family-sponsorship/parents-grandparents', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/family-sponsorship/spouse-partner', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp/alberta', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp/british-columbia', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp/manitoba', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp/new-brunswick', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp/newfoundland-labrador', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp/nova-scotia', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp/ontario', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp/prince-edward-island', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/pnp/saskatchewan', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/quebec-immigration', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/refusals/judicial-review', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/refusals/misrepresentation', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/refusals/re-applying', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/refusals/reconsideration', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/rural-community-immigration', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/study-in-canada/bringing-family', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/study-in-canada/designated-learning-institutions', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/study-in-canada/proof-of-funds', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/study-in-canada/provincial-attestation-letter', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/study-in-canada/refusals', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/study-in-canada/study-permit', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/study-in-canada/study-permit-extension', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/study-in-canada/study-to-permanent-residence', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/study-in-canada/working-while-studying', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/visitor-visa/business-visitor', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/visitor-visa/eta', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/visitor-visa/extension', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/visitor-visa/invitation-letter', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/work-permits/bridging-open-work-permit', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/work-permits/caregivers', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/work-permits/global-talent-stream', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/work-permits/international-experience-canada', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/work-permits/intra-company-transfer', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/work-permits/post-graduation', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/work-permits/spousal-open-work-permit', reviewed: '2026-07-20', priority: 0.7, changeFrequency: 'monthly' },

  { path: '/tools/clb-converter', reviewed: '2026-07-20', priority: 0.8, changeFrequency: 'monthly' },

  // Boilerplate to a crawler, but they must exist and be reachable.
  { path: '/privacy', reviewed: '2026-07-17', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', reviewed: '2026-07-17', priority: 0.3, changeFrequency: 'yearly' },
];
