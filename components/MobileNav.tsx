'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavGroup } from '@/lib/nav';

/**
 * The mobile navigation drawer.
 *
 * REPLACES a horizontally-scrolling rail that held every link in the site in one
 * flat strip. Measured at 375px it was 11,067px wide — 29.5 screen-widths of
 * sideways swiping through 69 undifferentiated links, with no hierarchy and no
 * way to tell a section from a page. The desktop mega-menu was no help either:
 * it opens on `group-hover`, which does not fire on touch at all.
 *
 * Since most of this audience is on a phone in Pakistan or the Gulf, that made
 * the site's own structure unreachable for most visitors. This is the fix.
 *
 * WHAT IT DOES DIFFERENTLY
 *   - Accordion sections mirroring lib/nav.ts, so a visitor sees six choices
 *     rather than sixty-nine, and drills in.
 *   - Only ONE section open at a time. With every section expanded the panel
 *     becomes the same undifferentiated wall of links we just removed.
 *   - The two actions people arrive wanting — WhatsApp and the free
 *     consultation — are pinned to the BOTTOM, in the thumb's natural arc, not
 *     at the top where a phone user cannot reach without shifting grip.
 *
 * ACCESSIBILITY, all of it deliberate:
 *   - `aria-expanded` / `aria-controls` on the trigger, `role="dialog"` +
 *     `aria-modal` on the panel.
 *   - Escape closes; focus returns to the trigger so a keyboard user is not
 *     dumped at the top of the document.
 *   - Focus is trapped inside the panel while open — otherwise Tab walks
 *     invisibly through the page behind it.
 *   - Body scroll is locked, and the scrollbar's width is replaced as padding
 *     so the page does not shift sideways as the drawer opens.
 *   - Route changes close it, or you tap a link and the drawer stays over the
 *     new page.
 *
 * WHY IT PORTALS TO document.body:
 * The header carries `backdrop-blur-md`, and a `backdrop-filter` makes that
 * element the CONTAINING BLOCK for any `position: fixed` descendant. Rendered
 * in place, `inset-0` therefore resolved against the header — measured at
 * 365x68 instead of the full viewport, i.e. a menu the size of the header it
 * lives in. Portalling to body escapes that. The same trap applies to
 * `transform`, `filter`, `perspective` and `will-change` on any ancestor.
 */

export function MobileNav({
  groups,
  waHref,
  waLabel,
}: {
  groups: NavGroup[];
  waHref: string | null;
  waLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  // createPortal needs a DOM target, which does not exist during SSR.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Navigating away must close the drawer, or it sits on top of the new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    // Lock scroll. Compensating with padding keeps the page from jumping
    // sideways by the scrollbar's width on desktop-ish widths.
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = 'hidden';
    if (gap > 0) body.style.paddingRight = `${gap}px`;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      // Wrap at both ends so focus cannot escape into the page behind.
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a[href], button')?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Open menu"
        // 44px minimum — the accessibility floor for a touch target.
        className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-ink-700 transition-colors hover:bg-paper-alt xl:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
        </svg>
      </button>

      {open && mounted
        ? createPortal(
        <div
          id="mobile-nav"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[100] flex flex-col bg-ink-950 text-white xl:hidden"
        >
          {/* Header row — close sits right, where the thumb already is. */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="font-serif text-lg text-white">Menu</span>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Only this region scrolls, so the pinned actions never move. */}
          <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-2" aria-label="Site">
            <ul className="divide-y divide-white/10">
              {groups.map((g) => {
                const flat = g.columns.flatMap((c) => c.items);
                const single = flat.length === 1 && g.columns.length === 1 && !g.columns[0].heading;
                const isOpen = openSection === g.label;

                if (single) {
                  return (
                    <li key={g.label}>
                      <Link href={flat[0].href} className="block py-4 text-lg text-white">
                        {g.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={g.label}>
                    <button
                      type="button"
                      onClick={() => setOpenSection(isOpen ? null : g.label)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between py-4 text-left text-lg text-white"
                    >
                      {g.label}
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 shrink-0 text-gold-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {isOpen ? (
                      <div className="pb-4">
                        {g.href ? (
                          <Link
                            href={g.href}
                            className="mb-2 block rounded-lg bg-white/5 px-3 py-2.5 text-sm font-semibold text-gold-300"
                          >
                            All {g.label.toLowerCase()} →
                          </Link>
                        ) : null}
                        {g.columns.map((col) => (
                          <div key={col.heading ?? 'x'} className="mb-3 last:mb-0">
                            {col.heading ? (
                              <p className="px-3 pb-1 pt-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                                {col.heading}
                              </p>
                            ) : null}
                            <ul>
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="block rounded-lg px-3 py-2.5 text-[0.95rem] text-ink-200 transition-colors hover:bg-white/10 hover:text-white"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Pinned: the two things people came to do, in the thumb's arc. */}
          <div className="shrink-0 space-y-2 border-t border-white/10 bg-ink-950 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <Link
              href="/book-consultation"
              className="flex w-full items-center justify-center rounded-xl bg-gold-500 px-5 py-3.5 font-semibold text-ink-950"
            >
              Talk to a lawyer — free
            </Link>
            {waHref ? (
              <a
                href={waHref}
                rel="noopener"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 font-semibold text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                  <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.83 9.83 0 0 0 4.6 1.17c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.11-2.88-6.97A9.79 9.79 0 0 0 12.04 2z" />
                </svg>
                {waLabel}
              </a>
            ) : null}
          </div>
        </div>,
            document.body,
          )
        : null}
    </>
  );
}
