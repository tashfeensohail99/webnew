import type { ReactNode } from 'react';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, FAQ, CTASection } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { site, SERVICE } from '@/lib/site';

/**
 * Shared body of the city office pages (/immigration-consultant-lahore,
 * /immigration-consultant-islamabad).
 *
 * These exist for the searches this audience actually makes — "immigration
 * consultant in Lahore" — which no page answered before. Every office fact
 * comes from `site.offices`, the same record the footer and the LocalBusiness
 * JSON-LD use, so the address can never drift between the three (a mismatch
 * splits the local-search signal). The city-specific copy is passed in, so the
 * two pages do not read as one page with the city name swapped.
 */

type Office = (typeof site.offices)[number];

/** What we handle — the same list from either office. */
const SERVICES: [string, string][] = [
  ['/canada-immigration-from-pakistan', 'Immigrating to Canada'],
  ['/express-entry', 'Express Entry'],
  ['/pnp', 'Provincial nomination'],
  ['/work-permit-canada', 'Canada work permits'],
  ['/canada-visit-visa', 'Canada visit visas'],
  ['/study-in-canada', 'Study in Canada'],
  ['/family-sponsorship', 'Family sponsorship'],
  ['/canada-visa-refused', 'Refusals & judicial review'],
  ['/uk', 'United Kingdom'],
  ['/usa', 'United States'],
  ['/europe', 'Europe & Schengen'],
];

const BRING = [
  'Your passport — and your old one, if it carries previous visas.',
  'Any refusal letter you have ever had, from any country. This matters more than anything else on the list.',
  'Your degrees and transcripts, and letters from your employers.',
  'Recent bank statements, if your route will need proof of funds.',
  'For a family case: your nikah nama and family registration certificate.',
];

export function OfficeLanding({
  office,
  page,
  eyebrow,
  subtitle,
  intro,
  faqs,
  other,
}: {
  office: Office;
  page: string;
  eyebrow: string;
  subtitle: string;
  intro: ReactNode;
  faqs: { q: string; a: ReactNode }[];
  other: { href: string; city: string };
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={
          <>
            Immigration lawyers in <span className="text-gold-300">{office.city}.</span>
          </>
        }
        subtitle={subtitle}
      >
        {office.mapUrl ? (
          <a href={office.mapUrl} rel="noopener noreferrer" target="_blank" className="btn btn-gold">
            Get directions
            <span aria-hidden="true">→</span>
          </a>
        ) : null}
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page,
            message: `Hi, I’d like to visit your ${office.city} office.`,
          }}
        >
          Message the office
        </WhatsAppCta>
      </PageHero>

      {/* ===================== THE OFFICE ===================== */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="The office" title={`A real door in ${office.city}`} />
            <div className="mt-6 space-y-4 text-ink-600 text-pretty">{intro}</div>
          </div>
          <address className="card not-italic lg:col-span-2 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">
              {site.shortName} — {office.city}
            </p>
            <p className="mt-3 font-serif text-xl leading-snug text-ink-900">{office.address}</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 font-semibold text-ink-900">Hours</dt>
                <dd className="text-ink-600">{office.hours}</dd>
              </div>
              {office.phone ? (
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 font-semibold text-ink-900">Phone</dt>
                  <dd>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-ink-600 link-underline">
                      {office.phone}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              {office.mapUrl ? (
                <a href={office.mapUrl} rel="noopener noreferrer" target="_blank" className="btn btn-navy">
                  Google reviews &amp; directions
                </a>
              ) : null}
              <Link href="/book-consultation" className="btn btn-ghost">
                Book ahead
              </Link>
            </div>
          </address>
        </div>
      </Section>

      {/* ===================== WHAT WE HANDLE ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="What we handle"
          title={`From ${office.city}, for anywhere we file`}
          subtitle="The same lawyers review every file, whichever office you walk into. These are the routes we handle — each links to our full guide."
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {SERVICES.map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className="tap inline-flex items-center rounded-full border border-rule bg-paper px-4 text-sm text-ink-700 transition-colors hover:border-gold-500 hover:text-ink-900"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ===================== BEFORE YOU COME ===================== */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Before you come in"
              title="What to bring"
              subtitle={site.consult.costsYou}
            />
            <ul className="mt-8 space-y-3">
              {BRING.map((b) => (
                <li key={b} className="flex gap-3 text-ink-600 text-pretty">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Can’t make it in?"
              title="You don’t have to visit"
              subtitle="Consultations can also be held remotely — useful if you are in the Gulf, or simply cannot get away during office hours."
            />
            <p className="mt-6 text-ink-600 text-pretty">
              Closer to {other.city}?{' '}
              <Link href={other.href} className="font-semibold text-accent-500 link-underline">
                Our {other.city} office
              </Link>{' '}
              handles the same work. And before you pay anyone — us included — ask for the licence
              number of the lawyer reviewing your file and{' '}
              <Link href="/about" className="font-semibold text-accent-500 link-underline">
                check it yourself
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* ============================ FAQ ============================ */}
      <Section tone="alt">
        <SectionHeading eyebrow="Questions" title={`About the ${office.city} office`} />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
        <ReviewedBy updated="October 2026" />
      </Section>

      <CTASection
        title={`Come and see us in ${office.city}`}
        subtitle={site.consult.promise}
        page={page}
        waMessage={`Hi, I’d like to book a consultation at your ${office.city} office.`}
      />
    </>
  );
}
