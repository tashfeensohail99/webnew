'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DESTINATIONS } from '@/lib/nav';
import { FlagCanada, FlagUK, FlagUSA, FlagEU } from '@/components/Flags';

/**
 * The four destinations, pinned to the utility bar on every page.
 *
 * These used to be a nav group called "Other countries" — seventh of eight,
 * behind a hover dropdown, and the only group without a landing page of its
 * own. The homepage meanwhile opens with four flags. So the site advertised
 * four destinations and then hid three of them one hover deep under a label
 * that named none of them.
 *
 * Making the dropdown prettier would not have fixed that. The fix is that
 * destinations are not a SERVICE you navigate to, they are the site's SCOPE —
 * so they are always on screen, and the menu below is free to be entirely about
 * Canada, which is what 90% of it always was.
 *
 * Client-side only because of `usePathname`: marking where you already are is
 * most of the value of a persistent bar, and there is no static equivalent in
 * an exported app. The cost is small and bounded — four links and a string
 * compare, no data fetching.
 */

const FLAGS: Record<string, (p: { className?: string }) => React.ReactElement> = {
  '/immigration-programs': FlagCanada,
  '/uk': FlagUK,
  '/usa': FlagUSA,
  '/europe': FlagEU,
};

/** Phone-width labels: the full names wrapped to two lines each at 360px and
 *  pushed the bar to three rows. The full name stays as the accessible name. */
const SHORT: Record<string, string> = { '/uk': 'UK', '/usa': 'USA' };

export function DestinationBar() {
  const pathname = usePathname() || '/';

  /**
   * Canada is the default section, so it owns everything that is not explicitly
   * one of the other three. Prefix-matching `/uk` against `/uk-something` would
   * be wrong, hence the boundary check — cheap now, and the kind of thing that
   * quietly mislabels pages later once more routes exist.
   */
  const inSection = (href: string) => {
    if (href === '/immigration-programs') {
      return !['/uk', '/usa', '/europe'].some((p) => pathname === p || pathname.startsWith(`${p}/`));
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav aria-label="Destinations" className="flex min-w-0 items-center sm:gap-x-1">
      {DESTINATIONS.map((d) => {
        const Flag = FLAGS[d.href];
        const current = inSection(d.href);
        return (
          <Link
            key={d.href}
            href={d.href}
            aria-current={current ? 'page' : undefined}
            aria-label={SHORT[d.href] ? d.label : undefined}
            className={`tap inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md px-1.5 transition-colors sm:px-2 ${
              current ? 'text-white' : 'text-ink-300 hover:text-white'
            }`}
          >
            {Flag ? (
              // `flag-xs`, not `h-3 w-auto` — see the note in globals.css. The
              // unlayered `img, svg { height: auto }` beats any layered height
              // utility, so a Tailwind height class here renders the flag at
              // its full viewBox size.
              <Flag
                className={`flag-xs shrink-0 rounded-[1px] ring-1 ring-white/25 ${
                  current ? '' : 'opacity-80'
                }`}
              />
            ) : null}
            <span className={current ? 'border-b border-gold-500 pb-px' : ''}>
              {SHORT[d.href] ? (
                <>
                  <span className="sm:hidden">{SHORT[d.href]}</span>
                  <span className="hidden sm:inline">{d.label}</span>
                </>
              ) : (
                d.label
              )}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
