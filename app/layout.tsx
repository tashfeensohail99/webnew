import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Link from 'next/link';
import '../styles/globals.css';
import { site } from '@/lib/site';
import { Logo } from '@/components/Logo';
import { StructuredData } from '@/components/StructuredData';
import { SiteHeader } from '@/components/SiteHeader';
import { Icon, type IconName } from '@/components/ui';
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

export default async function RootLayout({ children }: { children: ReactNode }) {
  // The one number the firm publishes, read from the CRM's ACTIVE channel at build time.
  const { display, digits } = await getWhatsAppChannel();

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Theme bootstrap — runs before first paint so there is no flash of
            the wrong theme. Explicit choice (localStorage) wins; otherwise
            follow the OS. Wrapped in try/catch for private-mode storage. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          }}
        />
        <StructuredData />
      </head>
      <body className="bg-paper text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <SiteHeader display={display} digits={digits} />

        <main id="main">{children}</main>

        {/* Footer — navy, to close the page with weight */}
        <footer className="mt-28 bg-navy text-ink-200">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <Logo variant="light" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">{site.tagline}</p>
              <p className="mt-4 text-xs text-ink-400">Offices in Lahore · Islamabad · Mississauga</p>
              {/* Social — labelled "Follow us" so the row reads as a section
                  rather than a stray strip of icons under the logo. rel="me"
                  tells reader apps this profile belongs to this site, which is
                  what some crawlers use alongside schema.org sameAs. Opens in a
                  new tab (noopener for safety) since every one leaves origin. */}
              {site.social.length > 0 ? (
                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                    Follow us
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2.5">
                    {site.social.map((s) => (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          aria-label={`${s.label} — follow us`}
                          title={s.label}
                          rel="me noopener"
                          target="_blank"
                          className="tap flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 text-ink-300 transition-colors hover:bg-gold-500 hover:text-ink-950 hover:ring-gold-500"
                        >
                          <Icon name={s.icon as IconName} className="h-5 w-5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
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
      {/* space-y drops to 0 because `.tap` supplies the 44px rhythm itself;
          keeping both would double the gap and make the column sprawl. */}
      <ul className="mt-2">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="tap text-sm text-ink-300 transition-colors hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
