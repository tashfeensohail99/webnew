import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Link from 'next/link';
import '../styles/globals.css';
import { site } from '@/lib/site';
import { Logo } from '@/components/Logo';
import { StructuredData } from '@/components/StructuredData';
import { getWhatsAppChannel } from '@/lib/wa-channel';

/* Premium type pairing: Fraunces (a modern, high-contrast serif) for display,
   Inter for body. Loaded via next/font — self-hosted at build time, no layout
   shift, and it makes the single biggest difference to how the site "feels". */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

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

const NAV = [
  { href: '/work-permit-canada', label: 'Canada' },
  { href: '/usa', label: 'USA' },
  { href: '/uk', label: 'UK' },
  { href: '/europe', label: 'Europe' },
  { href: '/canada-visa-refused', label: 'Visa Refused' },
  { href: '/tools', label: 'Free Tools' },
  { href: '/about', label: 'About' },
];

export default async function RootLayout({ children }: { children: ReactNode }) {
  // The one number the firm publishes, read from the CRM's ACTIVE channel at build time.
  const { display, digits } = await getWhatsAppChannel();

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-paper text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {/* Utility bar — contact + the free-tool entry point. Scrolls away; the nav sticks. */}
        <div className="bg-ink-950 text-ink-300">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs">
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
            <Link
              href="/tools"
              className="font-semibold text-gold-300 transition-colors hover:text-gold-400"
            >
              Free eligibility check →
            </Link>
          </div>
        </div>

        {/* Sticky glass header */}
        <header className="sticky top-0 z-50 border-b border-rule/70 bg-paper/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center px-4 py-3">
            <Link href="/" className="mr-auto" aria-label="Tashfeen Immigration Solutions — home">
              <Logo variant="dark" />
            </Link>
            <ul className="mr-7 hidden items-center gap-x-7 lg:flex">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="link-underline text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/book-consultation" className="btn btn-gold !px-5 !py-2.5 text-sm">
              Book Consultation
            </Link>
          </nav>
        </header>

        <main id="main">{children}</main>

        {/* Footer — navy, to close the page with weight */}
        <footer className="mt-28 bg-navy text-ink-200">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <Logo variant="light" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">{site.tagline}</p>
              <p className="mt-4 text-xs text-ink-400">Offices in Lahore · Islamabad · Mississauga</p>
            </div>
            <FooterCol
              title="Services"
              links={[
                ['/work-permit-canada', 'Canada Work Permit'],
                ['/canada-visit-visa', 'Canada Visit Visa'],
                ['/canada-visa-refused', 'Visa Refused'],
                ['/fees', 'Fees'],
              ]}
            />
            <FooterCol
              title="Destinations"
              links={[
                ['/usa', 'United States'],
                ['/uk', 'United Kingdom'],
                ['/europe', 'Europe & Schengen'],
              ]}
            />
            <FooterCol
              title="Firm"
              links={[
                ['/about', 'About us'],
                ['/about/our-team', 'Our lawyers'],
                ['/book-consultation', 'Book a consultation'],
                ['/no-guarantee-policy', 'No-guarantee policy'],
                ['/privacy', 'Privacy'],
                ['/terms', 'Terms'],
              ]}
            />
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
              <p className="max-w-xl sm:text-right">
                No one can guarantee the outcome of a visa application — decisions are made by visa
                officers, not by us.{' '}
                <Link href="/no-guarantee-policy" className="text-gold-300 underline underline-offset-2">
                  Read our policy
                </Link>
                .
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm text-ink-300 transition-colors hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
