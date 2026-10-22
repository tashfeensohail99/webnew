'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { relatedFor } from '@/lib/nav-trail';

/**
 * "More in this section" — a row of links to the page's siblings, above the
 * footer on every guide.
 *
 * The audit found most guides linking to only 2–6 other pages from their body.
 * For a reader that is a dead end after one answer; for Google it means deep
 * pages get little internal link weight. Derived from the nav, so it can never
 * link somewhere the menu doesn't.
 */
export function RelatedGuides() {
  const path = usePathname() || '/';
  const related = relatedFor(path);
  if (!related) return null;

  return (
    <nav aria-label="Related guides" className="mx-auto max-w-6xl px-4 pt-20">
      <p className="eyebrow">More in {related.group}</p>
      <ul className="mt-5 flex flex-wrap gap-2.5">
        {related.items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="tap inline-flex items-center rounded-full border border-rule bg-paper px-4 text-sm text-ink-700 transition-colors hover:border-gold-500 hover:text-ink-900"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
