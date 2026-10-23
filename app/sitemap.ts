import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { ROUTES } from '@/lib/routes';
import { POSTS } from '@/lib/blog';

/**
 * lastmod comes from lib/routes.ts — a real human review date, never the build
 * timestamp. Stamping every URL "today" on each deploy teaches Google the signal
 * is worthless, and it stops trusting it on the pages where it matters.
 *
 * Blog posts add themselves from lib/blog.ts, dated by publication — or by the
 * day their facts were last re-checked.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map((r) => ({
      url: `${site.url}${r.path === '/' ? '' : r.path}`,
      lastModified: new Date(r.reviewed),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...POSTS.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.updated ?? p.published),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
