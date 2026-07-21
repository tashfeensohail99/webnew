import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { MobileNav } from '@/components/MobileNav';
import { liveNav } from '@/lib/nav';

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
      {/* Utility bar — contact and the two things people arrive wanting to do. */}
      <div className="bg-ink-950 text-ink-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {digits ? (
              <a
                href={`https://wa.me/${digits}`}
                rel="noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.83 9.83 0 0 0 4.6 1.17c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.11-2.88-6.97A9.79 9.79 0 0 0 12.04 2z" />
                </svg>
                {display || 'Message us on WhatsApp'}
              </a>
            ) : null}
            <span className="hidden sm:inline">Lahore · Islamabad · Mississauga</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/tools" className="font-semibold text-gold-300 transition-colors hover:text-gold-400">
              Free tools
            </Link>
            <Link href="/book-consultation" className="hidden font-semibold text-white transition-colors hover:text-gold-300 sm:inline">
              Book a consultation
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-rule/70 bg-paper/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center px-4 py-3" aria-label="Main">
          <Link href="/" className="mr-auto shrink-0" aria-label="Tashfeen Immigration Solutions — home">
            <Logo variant="dark" />
          </Link>

          <ul className="mr-6 hidden items-center xl:flex">
            {groups.map((g) => {
              const flat = g.columns.flatMap((c) => c.items);
              const single = flat.length === 1 && g.columns.length === 1 && !g.columns[0].heading;

              // A group with exactly one destination is just a link, not a menu.
              if (single) {
                return (
                  <li key={g.label}>
                    <Link
                      href={flat[0].href}
                      className="link-underline block px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
                    >
                      {g.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={g.label} className="group static">
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors group-hover:text-ink-900 group-focus-within:text-ink-900"
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

                  <div
                    className="invisible absolute left-0 right-0 top-full z-40 opacity-0 transition-[opacity,transform] duration-200 [transform:translateY(-4px)] group-focus-within:visible group-focus-within:opacity-100 group-focus-within:[transform:none] group-hover:visible group-hover:opacity-100 group-hover:[transform:none]"
                  >
                    <div className="border-b border-rule bg-paper shadow-[0_24px_48px_-24px_rgb(16_24_40/0.25)]">
                      <div className="mx-auto max-w-7xl px-4 py-8">
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

                        {g.href ? (
                          <div className="mt-6 border-t border-rule pt-4">
                            <Link
                              href={g.href}
                              className="text-sm font-semibold text-accent-500 link-underline"
                            >
                              All {g.label.toLowerCase()} →
                            </Link>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link
            href="/book-consultation"
            className="btn btn-gold shrink-0 !px-4 !py-2.5 text-sm sm:!px-5"
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
