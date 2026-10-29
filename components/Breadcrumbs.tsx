'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trailFor } from '@/lib/nav-trail';
import { ROUTES } from '@/lib/routes';
import { site } from '@/lib/site';

/**
 * The trail at the top of every page hero, plus its machine-readable twin.
 *
 * The JSON-LD is what makes Google show "Tashfeen › Canada PR › Express Entry"
 * in a result instead of a bare URL, and it carries the page's real review
 * date (from lib/routes.ts) as `lastReviewed` — the freshness signal Google
 * looks for on a "your money or your life" topic. A client component only so
 * it can read the path; it is still rendered into the static HTML.
 */
export function Breadcrumbs() {
  const path = usePathname() || '/';
  const crumbs = trailFor(path);
  if (crumbs.length < 2) return null;

  const url = (p: string) => `${site.url}${p === '/' ? '' : p}`;
  const reviewed = ROUTES.find((r) => r.path === path)?.reviewed;
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${url(path)}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.label,
          item: url(c.href),
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${url(path)}#webpage`,
        url: url(path),
        isPartOf: { '@id': `${site.url}/#website` },
        inLanguage: 'en',
        breadcrumb: { '@id': `${url(path)}#breadcrumb` },
        // `dateModified` is the property most crawlers and AI assistants
        // actually read for freshness; `lastReviewed` is the precise claim.
        ...(reviewed
          ? { lastReviewed: reviewed, dateModified: reviewed, reviewedBy: { '@id': `${site.url}/#organization` } }
          : {}),
      },
    ],
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-300">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink-200">
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                    <span aria-hidden="true" className="text-gold-400">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        // Built from the route table — no user input reaches this.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </>
  );
}
