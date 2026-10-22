import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { MobileNav } from '@/components/MobileNav';
import { ThemeToggle } from '@/components/ThemeToggle';
import { DestinationBar } from '@/components/DestinationBar';
import { liveNav, OTHER_DESTINATIONS } from '@/lib/nav';

/**
 * The site header and mega-menu.
 *
 * The DESKTOP menu is still zero-JavaScript: dropdowns open on `group-hover`
 * and `group-focus-within`, so they work for mouse and keyboard without
 * shipping client code.
 *
 * That approach does NOT survive contact with a touchscreen — `hover` never
 * fires — so below xl the navigation is a real drawer (components/MobileNav),
 * which is the one piece of the header that ships JS. It replaced a
 * horizontally-scrolling rail measured at 11,067px wide: 29.5 screen-widths of
 * sideways swiping through 69 flat links. Given this audience is overwhelmingly
 * on phones, that made the site's own structure effectively unreachable.
 *
 * The menu renders from lib/nav.ts and only ever shows pages that exist. As
 * planned pages ship they light up on their own.
 */
export function SiteHeader({ display, digits }: { display: string; digits: string }) {
  const groups = liveNav();

  return (
    <>
      {/* Utility bar — the four destinations, then how to reach us.
          "Free tools" and "Book a consultation" USED to live on the right here.
          Both were duplicates: Tools is a nav group, and the gold CTA sits
          40px below this line. Deleting them is what pays for the destination
          strip, so the bar carries more information at the same weight. */}
      <div className="bg-ink-950 text-ink-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-1.5 text-xs">
          <DestinationBar />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {digits ? (
              <a
                href={`https://wa.me/${digits}`}
                rel="noopener"
                className="tap inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.83 9.83 0 0 0 4.6 1.17c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.11-2.88-6.97A9.79 9.79 0 0 0 12.04 2z" />
                </svg>
                {display || 'Message us on WhatsApp'}
              </a>
            ) : null}
            <span className="hidden lg:inline">Lahore · Islamabad · Mississauga</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-rule/70 bg-paper/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3" aria-label="Main">
          {/* min-w-0 lets the wordmark give way rather than forcing the row
              wider than the viewport. Everything here used to be shrink-0,
              which is what pushed the hamburger off-screen below ~385px. */}
          <Link href="/" className="mr-auto min-w-0" aria-label="Tashfeen Immigration Solutions — home">
            <Logo variant="dark" />
          </Link>

          <ul className="mr-3 hidden items-center desknav:flex xl:mr-6">
            {groups.map((g) => {
              const flat = g.columns.flatMap((c) => c.items);
              const single = flat.length === 1 && g.columns.length === 1 && !g.columns[0].heading;
              /* A one-column group gets an ANCHORED dropdown, not the full-bleed
                 band. A 1280px-wide panel holding six links looks like a
                 rendering fault — the band is only justified when there are
                 enough columns to fill it. */
              const wide = g.columns.length >= 2;

              // A group with exactly one destination is just a link, not a menu.
              if (single) {
                return (
                  <li key={g.label}>
                    <Link
                      href={flat[0].href}
                      className="link-underline block px-2.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 xl:px-3.5"
                    >
                      {g.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={g.label} className={`group ${wide ? 'static' : 'relative'}`}>
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-ink-600 transition-colors group-hover:text-ink-900 group-focus-within:text-ink-900 xl:px-3.5"
                  >
                    {g.label}
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="h-2.5 w-2.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M2.5 4.5 6 8l3.5-3.5" />
                    </svg>
                  </button>

                  {/* `top-full` resolves against the containing block, which is
                      the STICKY header for a `static` li but the ~40px li
                      itself once the li is `relative`. So the anchored variant
                      lands 23px too high and its rounded top corners disappear
                      behind the header (z-50 beats the panel's z-40).
                      The `pt-6` is on the TRANSPARENT positioner, not the card,
                      so it doubles as a hover bridge: the pointer can cross the
                      gap between trigger and card without the menu closing. */}
                  <div
                    className={`invisible absolute z-40 opacity-0 transition-[opacity,transform] duration-200 [transform:translateY(-4px)] group-focus-within:visible group-focus-within:opacity-100 group-focus-within:[transform:none] group-hover:visible group-hover:opacity-100 group-hover:[transform:none] ${
                      wide
                        ? 'left-0 right-0 top-full'
                        : 'left-0 top-full w-[19rem] pt-6 last:left-auto last:right-0'
                    }`}
                  >
                    {/* The panel is `absolute` inside a `sticky` header, and
                        sticky is a positioned containing block — so anything
                        past the viewport bottom would be UNREACHABLE, not
                        merely clipped. Capping the height makes it scroll
                        instead of vanish. */}
                    <div
                      className={`max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain border-rule bg-paper shadow-[0_24px_48px_-24px_rgb(16_24_40/0.25)] ${
                        wide ? 'border-b' : 'rounded-xl border'
                      }`}
                    >
                      <div className={wide ? 'mx-auto max-w-7xl px-4 py-8' : 'px-3 py-3'}>
                        <div
                          className={`grid gap-x-10 gap-y-6 ${
                            g.columns.length >= 3 ? 'md:grid-cols-3' : g.columns.length === 2 ? 'md:grid-cols-2' : ''
                          }`}
                        >
                          {g.columns.map((col, i) => (
                            <div key={col.heading ?? i}>
                              {col.heading ? (
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                                  {col.heading}
                                </p>
                              ) : null}
                              <ul className="space-y-1">
                                {col.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="block rounded-lg px-3 py-2 -mx-3 transition-colors hover:bg-paper-alt"
                                    >
                                      <span className="block text-sm font-medium text-ink-900">{item.label}</span>
                                      {item.blurb ? (
                                        <span className="mt-0.5 block text-xs text-ink-400">{item.blurb}</span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* The destinations are gone from the top level, so every
                            panel carries the way out of Canada. Six extra
                            sitewide paths into /uk, /usa and /europe at zero
                            horizontal cost — which is the trade that let the
                            "Other countries" group be retired at all. */}
                        <div
                          className={`border-t border-rule ${wide ? 'mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 pt-4' : 'mt-2 px-3 pt-3'}`}
                        >
                          {g.href ? (
                            <Link href={g.href} className="text-sm font-semibold text-accent-500 link-underline">
                              All {g.label.toLowerCase()} →
                            </Link>
                          ) : null}
                          <p className="text-xs text-ink-400">
                            Not Canada?{' '}
                            {OTHER_DESTINATIONS.map((d, i) => (
                              <span key={d.href}>
                                {i > 0 ? ' · ' : ''}
                                <Link href={d.href} className="text-ink-600 underline-offset-2 hover:underline">
                                  {d.label}
                                </Link>
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Shorter label below sm so the row fits a 320px phone. NOT `hidden`:
              `.btn` is unlayered CSS in globals.css and unlayered rules beat
              `@layer utilities` regardless of specificity, so Tailwind's
              `hidden` silently does nothing on any element carrying `.btn`.
              Swapping the label is honest about what actually renders. */}
          <ThemeToggle className="hidden shrink-0 text-ink-500 hover:text-ink-900 sm:inline-flex" />

          <Link
            href="/book-consultation"
            className="btn btn-gold shrink-0 !min-h-11 !px-3.5 text-sm sm:!px-5"
          >
            <span className="hidden sm:inline">Talk to a lawyer — free</span>
            <span className="sm:hidden">Free consult</span>
          </Link>

          <MobileNav groups={groups} waHref={digits ? `https://wa.me/${digits}` : null} waLabel={display || 'WhatsApp'} />
        </nav>

      </header>
    </>
  );
}
