import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import '../styles/globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Canadian Immigration Lawyers & Consultants in Pakistan | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    'Canadian work permits, visit visas and visa refusals — handled by qualified lawyers. Offices in Pakistan and Canada. We tell you honestly whether you qualify before you pay.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: site.name, locale: 'en_PK' },
  robots: { index: true, follow: true },
};

/**
 * Six items. The old site had fifty — a visitor who sees a twelve-service
 * dropdown doesn't think "capable", they think "agent".
 *
 * Destinations lead, because an international firm's nav should answer "do you
 * do my country?" before anything else. Canada sits first: it is the largest
 * practice and the only one with a full hub behind it. "Visa Refused" earns a
 * top-level slot despite being smaller than the rest, because that visitor is
 * holding a refusal letter and needs the door to be obvious.
 */
const NAV = [
  { href: '/work-permit-canada', label: 'Canada' },
  { href: '/usa', label: 'USA' },
  { href: '/uk', label: 'UK' },
  { href: '/europe', label: 'Europe' },
  { href: '/canada-visa-refused', label: 'Visa Refused' },
  { href: '/about', label: 'About' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <header className="border-b border-rule">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-1 gap-y-2 px-4 py-3">
            <Link href="/" className="mr-auto font-serif text-lg text-ink-900">
              Tashfeen <span className="text-ink-400">Immigration</span>
            </Link>
            <ul className="flex flex-wrap items-center gap-x-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="rounded px-3 py-2 text-sm text-ink-600 hover:bg-paper-alt hover:text-ink-900"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/book-consultation"
              className="rounded bg-accent-500 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600"
            >
              Book Consultation
            </Link>
          </nav>
        </header>

        <main id="main">{children}</main>

        <footer className="mt-24 border-t border-rule bg-paper-alt">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-serif text-lg">{site.name}</p>
              <p className="mt-2 text-sm text-ink-400">{site.tagline}</p>
            </div>
            <FooterCol
              title="Services"
              links={[
                ['/work-permit-canada', 'Canada Work Permit'],
                ['/canada-visit-visa', 'Canada Visit Visa'],
                ['/canada-visa-refused', 'Visa Refused'],
                ['/study-visa-canada', 'Study Visa'],
              ]}
            />
            <FooterCol
              title="Firm"
              links={[
                ['/about', 'About us'],
                ['/about/our-team', 'Our team'],
                ['/about/our-offices', 'Offices'],
                ['/success-stories', 'Success stories'],
                ['/fees', 'Fees'],
              ]}
            />
            <FooterCol
              title="Legal"
              links={[
                ['/no-guarantee-policy', 'Our no-guarantee policy'],
                ['/privacy', 'Privacy'],
                ['/terms', 'Terms'],
              ]}
            />
          </div>
          <div className="border-t border-rule">
            <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-ink-400">
              No one can guarantee the outcome of a visa application. Decisions are made by
              Canadian visa officers, not by us.{' '}
              <Link href="/no-guarantee-policy" className="underline">
                Read our policy
              </Link>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="text-sm text-ink-600 hover:text-ink-900 hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
