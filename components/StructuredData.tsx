import { site, lawyers } from '@/lib/site';

/**
 * Schema.org JSON-LD for the organisation and its offices.
 *
 * Three deliberate choices, each of which is a trap other sites fall into:
 *
 * 1. `ProfessionalService`, NOT `LegalService`/`Attorney`. The firm does employ
 *    lawyers, but the entity providing the service is a consultancy. Claiming to
 *    BE a legal practice in machine-readable markup, on a public site, is a
 *    claim a regulator can read as easily as Google can. Revisit only once the
 *    lawyer roster and its credentials are confirmed — and even then, only if
 *    a licensee genuinely is the provider.
 *
 * 2. No `Review` or `AggregateRating`. Self-applied ratings are ignored by
 *    Google and are manual-action bait on a YMYL site. Ratings must come from a
 *    platform that owns them, not from us about ourselves.
 *
 * 3. Each office is its own LocalBusiness with a distinct @id. Sharing one @id
 *    across locations merges them in Google's eyes and wastes the strongest
 *    asset the firm has — a real Canadian office alongside Pakistani ones.
 *
 * Offices without a confirmed address are omitted entirely rather than emitted
 * half-empty: incomplete NAP is worse than absent NAP, because it splits the
 * local signal instead of simply not making one.
 */
/**
 * Opening hours as STRUCTURED data, not just the prose rendered on /about.
 * This is what produces "Open now · Closes 6 pm" in a Google result and in
 * Maps; a human-readable string alone produces nothing.
 *
 * Parsed from the office's own `hours` string so the two can never drift apart,
 * but deliberately NARROW: it only understands the "Monday to Saturday,
 * 9 am – 6 pm" shape both offices currently use. Anything else returns nothing
 * rather than guessing, because wrong hours in Maps send a real person to a
 * closed door — strictly worse than no hours at all.
 */
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openingHours(hours: string): Record<string, unknown> {
  const m = hours.match(
    /^(\w+) to (\w+),\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)\s*[–-]\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/i,
  );
  if (!m) return {};

  const [, fromDay, toDay, oh, om, oMer, ch, cm, cMer] = m;
  const from = DAYS.indexOf(fromDay);
  const to = DAYS.indexOf(toDay);
  if (from < 0 || to < 0 || to < from) return {};

  const to24 = (h: string, mer: string) => {
    const n = parseInt(h, 10) % 12;
    return mer.toLowerCase() === 'pm' ? n + 12 : n;
  };
  const t = (h: number, mm?: string) => `${String(h).padStart(2, '0')}:${mm ?? '00'}`;

  return {
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DAYS.slice(from, to + 1),
        opens: t(to24(oh, oMer), om),
        closes: t(to24(ch, cMer), cm),
      },
    ],
  };
}

export function StructuredData() {
  const offices = site.offices.filter((o) => o.address);

  const graph: Record<string, unknown>[] = [
    // The site itself. `name` is what Google shows as the site name above a
    // result; without it Google guesses from the page titles, which now end in
    // the short "| Tashfeen".
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      alternateName: [site.shortName, 'Tashfeen'],
      inLanguage: 'en',
      publisher: { '@id': `${site.url}/#organization` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description:
        'International immigration firm with lawyers, and offices in Pakistan and Canada. Canada, USA, UK and Europe.',
      areaServed: ['PK', 'SA', 'AE', 'OM', 'QA', 'BH', 'GB', 'CA', 'US'],
      knowsAbout: [
        'Canadian work permits',
        'Canadian visitor visas',
        'Judicial review of visa refusals',
        'US investor visas',
        'UK Skilled Worker visas',
        'Schengen visitor visas',
      ],
      ...(offices.length ? { location: offices.map((o) => ({ '@id': `${site.url}/#office-${o.city.toLowerCase()}` })) } : {}),
      // sameAs is "another profile of this same entity" — the full social set
      // from lib/site.ts, which the firm treats as its own presence.
      ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
      ...(lawyers.length
        ? {
            employee: lawyers.map((l) => ({
              '@type': 'Person',
              name: l.name,
              jobTitle: l.credential,
              ...(l.verifyUrl ? { sameAs: [l.verifyUrl] } : {}),
              ...(l.credential ? { hasCredential: l.credential } : {}),
            })),
          }
        : {}),
    },
    ...offices.map((o) => ({
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#office-${o.city.toLowerCase()}`,
      name: `${site.name} — ${o.city}`,
      parentOrganization: { '@id': `${site.url}/#organization` },
      address: {
        '@type': 'PostalAddress',
        streetAddress: o.address,
        addressLocality: o.city,
        addressCountry: o.country === 'Pakistan' ? 'PK' : 'CA',
      },
      ...(o.phone ? { telephone: o.phone } : {}),
      ...(o.mapUrl ? { hasMap: o.mapUrl } : {}),
      ...openingHours(o.hours),
    })),
  ];

  return (
    <script
      type="application/ld+json"
      // Static, author-controlled data — no user input reaches this.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
