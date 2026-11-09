'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { leadLawyer } from '@/lib/site';
import LASTMOD from '@/lib/lastmod.json';

const lastmod: Record<string, string> = LASTMOD;
const dateFmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/**
 * The date line on every advice page.
 *
 * Immigration is a "your money or your life" topic: Google holds it to a higher
 * standard, and a named, checkable professional is exactly the signal it looks
 * for — as does a reader who has been warned about immigration scams their whole
 * life. Same fact serves both audiences.
 *
 * So the "Reviewed by" line appears only once `lib/site.ts` names a licensed
 * lawyer. Until then the page says when it last changed, from lib/lastmod.json,
 * and claims no review. It read "Reviewed by the Tashfeen legal team" until
 * 9 November 2026; the owner removed that because no reviewer could be named.
 *
 * `updated` is the review date shown beside a named lawyer, and the fallback for
 * pages lastmod.json does not cover, such as blog posts. A client component only
 * so it can read the path; it is still rendered into the static HTML.
 */
export function ReviewedBy({ updated }: { updated: string }) {
  const path = usePathname() || '/';
  const lawyer = leadLawyer();
  // A bracketed stub like "[date of last legal review]" is worse than no date.
  const showDate = Boolean(updated) && !updated.trim().startsWith('[');

  if (!lawyer) {
    const changed = lastmod[path];
    const label = changed ? dateFmt.format(new Date(`${changed}T00:00:00Z`)) : showDate ? updated : '';
    if (!label) return null;
    return <div className="mt-8 border-t border-rule pt-4 text-sm text-ink-400">Last updated {label}</div>;
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-rule pt-4 text-sm text-ink-400">
      <span>
        Reviewed by{' '}
        <Link href="/about/our-team" className="font-semibold text-ink-600 underline">
          {lawyer.name}
        </Link>
        {lawyer.credential ? `, ${lawyer.credential}` : ''}
      </span>
      {showDate ? (
        <>
          <span aria-hidden="true">·</span>
          <span>Last reviewed {updated}</span>
        </>
      ) : null}
    </div>
  );
}
