import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, FeatureCard, Callout, FAQ, CTASection } from '@/components/ui';
import { site } from '@/lib/site';
import DATA from '@/lib/ircc-pakistan.json';

/**
 * /canada-immigration-statistics-pakistan: IRCC's own counts for Pakistani citizens.
 *
 * Every number AND every sentence containing one is computed from
 * lib/ircc-pakistan.json, so a monthly refresh (scripts/ircc-figures.py) cannot
 * leave stale words behind. The page says what happened and never why: IRCC
 * publishes counts, not causes.
 *
 * It carries no "Reviewed by" line, because no lawyer has reviewed it. The route
 * is marked `dataPage` so the structured data does not claim a review either.
 */

type Series = { totals: Record<string, number>; months: Record<string, Record<string, number | null>> };
type Yearly = Record<string, number | null>;

const SERIES = DATA.series as unknown as Record<'pr' | 'study' | 'imp' | 'tfwp', Series>;
const GROUPS = DATA.groups as unknown as Record<'economic' | 'family' | 'refugee' | 'other', Yearly>;
const DETAIL = DATA.detail as unknown as Record<'skilledWorker' | 'canadianExperience' | 'provincialNominee' | 'spouse' | 'parent', Yearly>;

const MONTH_NAME: Record<string, string> = { Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June', Jul: 'July', Aug: 'August', Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December' };

const YEARS = DATA.years;
const LATEST = DATA.latestYear;
const MONTHS = DATA.monthsInLatestYear;
const FIRST_MONTH = MONTHS[0]!;
const LAST_MONTH = MONTHS[MONTHS.length - 1]!;
const IS_PART_YEAR = MONTHS.length < 12;
const LAST_FULL = IS_PART_YEAR ? YEARS[YEARS.length - 2]! : LATEST;
const BEFORE_FULL = YEARS[YEARS.indexOf(LAST_FULL) - 1]!;
const COMPARE_YEAR = YEARS[YEARS.indexOf(LATEST) - 1]!;

const dateFmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const longDate = (iso: string) => dateFmt.format(new Date(`${iso}T00:00:00Z`));

const n = (x: number) => x.toLocaleString('en-US');
/** IRCC shows values from 0 to 5 as "--", held here as null. */
const cell = (x: number | null | undefined) => (x == null ? '0–5' : n(x));

const pct = (from: number, to: number) => Math.round(((to - from) / from) * 100);
const short = (from: number, to: number) => {
  const p = pct(from, to);
  return p === 0 ? '0%' : `${p > 0 ? '+' : '−'}${Math.abs(p)}%`;
};
const words = (from: number, to: number) => {
  const p = pct(from, to);
  return p === 0 ? 'about level' : `${p > 0 ? 'up' : 'down'} ${Math.abs(p)}%`;
};

/** The months of the latest year, added up for any year so the two compare like with like. */
const soFar = (s: Series, year: string) => MONTHS.reduce((sum, m) => sum + (s.months[year]?.[m] ?? 0), 0);

const PERIOD = FIRST_MONTH === LAST_MONTH ? `${MONTH_NAME[LAST_MONTH]} ${LATEST}` : `${MONTH_NAME[FIRST_MONTH]} to ${MONTH_NAME[LAST_MONTH]} ${LATEST}`;
const SPAN = FIRST_MONTH === LAST_MONTH ? MONTH_NAME[LAST_MONTH]!.slice(0, 3) : `${FIRST_MONTH}–${LAST_MONTH}`;
const THROUGH = `${MONTH_NAME[LAST_MONTH]} ${LATEST}`;

const PATH = '/canada-immigration-statistics-pakistan';
const SOURCES = [
  { label: 'Permanent residents: monthly IRCC updates', href: 'https://open.canada.ca/data/en/dataset/f7e5498e-0ad8-4417-85c9-9b8aff9b9eda' },
  { label: 'Study permit holders: monthly IRCC updates', href: 'https://open.canada.ca/data/en/dataset/90115b00-f9b8-49e8-afa3-b4cff8facaee' },
  { label: 'Work permit holders: monthly IRCC updates', href: 'https://open.canada.ca/data/en/dataset/360024f2-17e9-4558-bfc1-3616485d65b9' },
];
const LICENCE = 'https://open.canada.ca/en/open-government-licence-canada';

export const metadata: Metadata = {
  title: 'Pakistani Immigration to Canada: IRCC Figures',
  description: `IRCC’s official counts of Pakistani citizens who became Canadian permanent residents or held study and work permits, ${YEARS[0]} to ${THROUGH}.`,
  alternates: { canonical: PATH },
};

const official = 'font-semibold text-accent-500 link-underline';

function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="card p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">{label}</p>
      <p className="mt-3 font-serif text-3xl leading-tight text-balance">{value}</p>
      {note ? <p className="mt-2 text-sm text-ink-500">{note}</p> : null}
    </div>
  );
}

const headCell = 'px-3 py-3 font-semibold sm:px-4';
const tableHead = 'border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500';

/** Wide tables scroll inside this frame on phones, so it has to be reachable by keyboard. */
function TableFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div role="region" aria-label={label} tabIndex={0} className="mt-8 overflow-x-auto rounded-2xl border border-rule bg-paper">
      {children}
    </div>
  );
}

function YearLabel({ year }: { year: string }) {
  return (
    <>
      {year}
      {IS_PART_YEAR && year === LATEST ? <span className="block text-xs font-normal text-ink-500">{SPAN} only</span> : null}
    </>
  );
}

/** A table first. The bars repeat the count beside them, so they are hidden from screen readers. */
function YearBars({ series, caption, heading }: { series: Series; caption: string; heading: string }) {
  const max = Math.max(...YEARS.map((y) => series.totals[y]!));
  return (
    <TableFrame label={caption}>
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className={tableHead}>
          <tr>
            <th scope="col" className={headCell}>Year</th>
            <th scope="col" className="w-full px-2 py-3"><span className="sr-only">Relative size</span></th>
            <th scope="col" className={`${headCell} text-right`}>{heading}</th>
            <th scope="col" className={`${headCell} text-right`}>Change</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-rule">
          {YEARS.map((y, i) => {
            const part = IS_PART_YEAR && y === LATEST;
            const value = series.totals[y]!;
            const before = i > 0 ? series.totals[YEARS[i - 1]!]! : null;
            return (
              <tr key={y}>
                <th scope="row" className="whitespace-nowrap px-3 py-2.5 sm:px-4 font-medium text-ink-900"><YearLabel year={y} /></th>
                <td className="min-w-14 px-1 sm:px-2 py-2.5" aria-hidden="true">
                  <div className="h-2.5 overflow-hidden rounded-full bg-gold-500/10">
                    <div className={`h-full rounded-full ${part ? 'bg-gold-500/50' : 'bg-gold-500'}`} style={{ width: `${Math.max(1, (value / max) * 100)}%` }} />
                  </div>
                </td>
                <td className="px-3 py-2.5 sm:px-4 text-right font-serif text-lg text-ink-900 tabular-nums">{n(value)}</td>
                <td className="whitespace-nowrap px-3 py-2.5 sm:px-4 text-right tabular-nums text-ink-600">
                  {part ? <span className="text-xs">Part year</span> : before === null ? '' : short(before, value)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableFrame>
  );
}

const GROUP_ROWS: { label: string; values: Yearly; level: 0 | 1 }[] = [
  { label: 'Economic programmes', values: GROUPS.economic, level: 0 },
  { label: 'Skilled Worker', values: DETAIL.skilledWorker, level: 1 },
  { label: 'Canadian Experience', values: DETAIL.canadianExperience, level: 1 },
  { label: 'Provincial Nominee Program', values: DETAIL.provincialNominee, level: 1 },
  { label: 'Sponsored family', values: GROUPS.family, level: 0 },
  { label: 'Spouse or partner', values: DETAIL.spouse, level: 1 },
  { label: 'Parent or grandparent', values: DETAIL.parent, level: 1 },
  { label: 'Refugees and protected persons', values: GROUPS.refugee, level: 0 },
  { label: 'All other', values: GROUPS.other, level: 0 },
];

const READING: { title: string; body: string }[] = [
  {
    title: 'They are not approval rates',
    body: 'They count people who were admitted, or whose permits took effect. These tables do not show how many people applied or were refused, so a refusal rate cannot be worked out from them.',
  },
  {
    title: 'They count citizenship, not address',
    body: 'A Pakistani citizen who applied from Dubai or Riyadh is counted here. Someone born in Pakistan who now holds another citizenship may not be.',
  },
  {
    title: 'They are rounded and can change',
    body: 'IRCC rounds every figure to the nearest 5 and hides anything from 0 to 5, shown here as 0–5. It calls the data preliminary, so earlier months can move in later releases, and parts may not add up to totals.',
  },
  {
    title: 'A permit is not an arrival',
    body: 'The tables do not say whether a permit is someone’s first or a renewal. One person can hold more than one permit in a period, so adding up the months can give more than the annual total.',
  },
];

export default function PakistanStatisticsPage() {
  const pr = SERIES.pr;
  const study = SERIES.study;
  const imp = SERIES.imp;
  const tfwp = SERIES.tfwp;
  const t = (s: Series, y: string) => s.totals[y]!;

  const rows = [
    { label: 'Became permanent residents', s: pr },
    { label: 'Study permits', s: study },
    { label: 'Work permits: International Mobility Program', s: imp },
    { label: 'Work permits: Temporary Foreign Worker Program', s: tfwp },
  ];

  const recent = YEARS.slice(-4);

  const faqs = [
    {
      q: `How many Pakistanis became permanent residents of Canada in ${LAST_FULL}?`,
      a: `IRCC counts ${n(t(pr, LAST_FULL))} Pakistani citizens admitted as permanent residents in ${LAST_FULL}, ${words(t(pr, BEFORE_FULL), t(pr, LAST_FULL))} on ${n(t(pr, BEFORE_FULL))} in ${BEFORE_FULL}. IRCC rounds these figures to the nearest 5 and calls them preliminary.`,
    },
    {
      q: `How many Pakistanis have become permanent residents in ${LATEST} so far?`,
      a: `IRCC’s tables run to ${THROUGH} and show ${n(t(pr, LATEST))} admissions of Pakistani citizens in ${LATEST} so far. Adding up the same months for each year gives ${n(soFar(pr, COMPARE_YEAR))} in ${COMPARE_YEAR} and ${n(soFar(pr, LATEST))} in ${LATEST}, ${words(soFar(pr, COMPARE_YEAR), soFar(pr, LATEST))}.`,
    },
    {
      q: 'How many Pakistani students hold Canadian study permits?',
      a: `${n(t(study, LAST_FULL))} Pakistani citizens had a study permit take effect in ${LAST_FULL}, ${words(t(study, BEFORE_FULL), t(study, LAST_FULL))} on ${BEFORE_FULL}. That counts permits taking effect in the year. It is not the number of Pakistani students in Canada on any one day.`,
    },
    {
      q: 'How many Pakistanis receive Canadian work permits?',
      a: `In ${LAST_FULL}, ${n(t(imp, LAST_FULL))} Pakistani citizens had a permit take effect under the International Mobility Program and ${n(t(tfwp, LAST_FULL))} under the Temporary Foreign Worker Program. IRCC counts the two programmes separately, and one person can appear in both.`,
    },
    {
      q: 'Do these figures show the visa refusal rate for Pakistan?',
      a: 'No. These tables count people admitted and permits that took effect. They do not show applications or refusals, so a refusal rate cannot be calculated from them.',
    },
    {
      q: 'Where do these numbers come from, and how often are they updated?',
      a: `From the open data tables that Immigration, Refugees and Citizenship Canada publishes by country of citizenship. This page was last read from IRCC on ${longDate(DATA.read)} and runs to ${THROUGH}. We refresh it after IRCC publishes new monthly tables. If anything here differs from IRCC’s tables, IRCC’s tables are right.`,
    },
  ];

  const dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `Pakistani citizens admitted to Canada and holding permits, ${YEARS[0]} to ${THROUGH}`,
    description: `Yearly and monthly counts of Pakistani citizens who became Canadian permanent residents or had study or work permits take effect, compiled from Immigration, Refugees and Citizenship Canada open data. Figures are rounded by IRCC to the nearest 5 and are preliminary.`,
    url: `${site.url}${PATH}`,
    // Typed here because the site's main entity is a ProfessionalService, which Google rejects for Dataset creator.
    creator: { '@type': 'Organization', name: site.name, url: site.url },
    isBasedOn: SOURCES.map((s) => s.href),
    license: LICENCE,
    isAccessibleForFree: true,
    inLanguage: 'en',
    temporalCoverage: `${YEARS[0]}-01/${LATEST}-${String(MONTHS.length).padStart(2, '0')}`,
    spatialCoverage: 'Canada',
    dateModified: DATA.read,
  };

  return (
    <>
      <PageHero
        eyebrow="Official figures · Pakistani citizens"
        title={
          <>
            Pakistanis moving to Canada: <span className="text-gold-300">the official figures.</span>
          </>
        }
        subtitle={`Canada’s immigration department counts how many Pakistani citizens become permanent residents and hold study and work permits. These are its numbers from ${YEARS[0]} to ${THROUGH}.`}
      >
        <Link href="/canada-immigration-from-pakistan" className="btn btn-ghost">
          See the routes from Pakistan
        </Link>
      </PageHero>

      {/* ===================== LATEST FULL YEAR ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="At a glance"
          title={`Pakistani citizens in ${LAST_FULL}, the latest full year`}
          subtitle={`Each figure compares ${LAST_FULL} with ${BEFORE_FULL}.`}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Became permanent residents" value={n(t(pr, LAST_FULL))} note={words(t(pr, BEFORE_FULL), t(pr, LAST_FULL))} />
          <Stat label="Study permits" value={n(t(study, LAST_FULL))} note={words(t(study, BEFORE_FULL), t(study, LAST_FULL))} />
          <Stat label="International Mobility work permits" value={n(t(imp, LAST_FULL))} note={words(t(imp, BEFORE_FULL), t(imp, LAST_FULL))} />
          <Stat label="Temporary Foreign Worker permits" value={n(t(tfwp, LAST_FULL))} note={words(t(tfwp, BEFORE_FULL), t(tfwp, LAST_FULL))} />
        </div>

        {IS_PART_YEAR ? (
          <>
            <h2 className="mt-14 font-serif text-2xl leading-tight text-balance">
              {LATEST} so far: {PERIOD}
            </h2>
            <TableFrame label="Pakistani citizens this year so far, compared with the same months last year">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Pakistani citizens in the same months of {COMPARE_YEAR} and {LATEST}</caption>
                <thead className={tableHead}>
                  <tr>
                    <th scope="col" className="py-3 pl-3 pr-1.5 font-semibold sm:px-4">Measure</th>
                    <th scope="col" className="px-1.5 py-3 text-right font-semibold sm:px-4"><span className="block whitespace-nowrap">{SPAN}</span> {COMPARE_YEAR}</th>
                    <th scope="col" className="px-1.5 py-3 text-right font-semibold sm:px-4"><span className="block whitespace-nowrap">{SPAN}</span> {LATEST}</th>
                    <th scope="col" className="py-3 pl-1.5 pr-3 text-right font-semibold sm:px-4">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rule">
                  {rows.map(({ label, s }) => (
                    <tr key={label}>
                      <th scope="row" className="py-3 pl-3 pr-1.5 font-medium text-ink-900 sm:px-4">{label}</th>
                      <td className="px-1.5 py-3 text-right tabular-nums text-ink-600 sm:px-4">{n(soFar(s, COMPARE_YEAR))}</td>
                      <td className="px-1.5 py-3 text-right font-serif text-lg tabular-nums text-ink-900 sm:px-4">{n(soFar(s, LATEST))}</td>
                      <td className="whitespace-nowrap py-3 pl-1.5 pr-3 text-right tabular-nums text-ink-600 sm:px-4">{short(soFar(s, COMPARE_YEAR), soFar(s, LATEST))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableFrame>
            <p className="mt-4 max-w-3xl text-sm text-ink-500 text-pretty">
              Added from IRCC’s monthly figures so both years compare like with like, which makes these
              approximate. They can differ slightly from IRCC’s own totals in the tables below.
            </p>
          </>
        ) : null}

        <div className="mt-10 max-w-3xl">
          <Callout title="These figures do not say why">
            IRCC publishes counts, not reasons. A rise or fall can follow changes in Canada’s targets,
            in who applies, or in how quickly files are processed, and these tables cannot separate
            those. We do not guess at causes here.
          </Callout>
        </div>
      </Section>

      {/* ===================== PERMANENT RESIDENTS ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Permanent residence"
          title="Pakistani citizens who became permanent residents, by year"
          subtitle="IRCC’s count of admissions, using its own annual totals."
        />
        <YearBars series={pr} caption="Pakistani citizens admitted to Canada as permanent residents, by year" heading="Admitted" />

        <h2 className="mt-14 font-serif text-2xl leading-tight text-balance">How Pakistanis became permanent residents</h2>
        <p className="mt-3 max-w-3xl text-ink-600 text-pretty">
          The route each person was admitted under. Indented rows are the larger programmes within
          each group, so they do not add up to the group.
        </p>
        <TableFrame label="Pakistani citizens admitted as permanent residents, by immigration category">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Pakistani citizens admitted as permanent residents, by immigration category</caption>
            <thead className={tableHead}>
              <tr>
                <th scope="col" className={headCell}>Route</th>
                {recent.map((y) => (
                  <th key={y} scope="col" className={`${headCell} whitespace-nowrap text-right`}>
                    {y}
                    {IS_PART_YEAR && y === LATEST ? <span className="block text-xs font-normal normal-case tracking-normal">{SPAN} only</span> : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {GROUP_ROWS.map(({ label, values, level }) => (
                <tr key={label}>
                  <th scope="row" className={`py-2.5 pr-4 ${level ? 'pl-8 font-normal text-ink-600' : 'pl-4 font-semibold text-ink-900'}`}>{label}</th>
                  {recent.map((y) => (
                    <td key={y} className={`px-3 py-2.5 sm:px-4 text-right tabular-nums ${level ? 'text-ink-600' : 'font-semibold text-ink-900'}`}>{cell(values[y])}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row" className="py-2.5 pl-4 pr-4 font-semibold text-ink-900">Total</th>
                {recent.map((y) => (
                  <td key={y} className="px-3 py-2.5 sm:px-4 text-right font-serif text-lg tabular-nums text-ink-900">{n(t(pr, y))}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </TableFrame>
      </Section>

      {/* ===================== STUDY ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Study"
          title="Pakistani citizens with a Canadian study permit, by year"
          subtitle="People whose study permit took effect in that year. This is not the number of Pakistani students in Canada on any one day."
        />
        <YearBars series={study} caption="Pakistani citizens whose Canadian study permit took effect, by year" heading="Holders" />
        <p className="mt-6 max-w-3xl text-ink-600 text-pretty">
          Planning to study?{' '}
          <Link href="/study-in-canada" className={official}>
            What a study permit involves from Pakistan
          </Link>
          .
        </p>
      </Section>

      {/* ===================== WORK ===================== */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="Work"
          title="Pakistani citizens with a Canadian work permit, by year"
          subtitle="IRCC counts its two work permit programmes separately, and one person can appear in both, so the columns should not be added together."
        />
        <TableFrame label="Pakistani citizens whose Canadian work permit took effect, by year and programme">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Pakistani citizens whose Canadian work permit took effect, by year and programme</caption>
            <thead className={tableHead}>
              <tr>
                <th scope="col" className={headCell}>Year</th>
                <th scope="col" className={`${headCell} text-right`}>International Mobility Program</th>
                <th scope="col" className={`${headCell} text-right`}>Temporary Foreign Worker Program</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {YEARS.map((y) => (
                <tr key={y}>
                  <th scope="row" className="whitespace-nowrap px-3 py-2.5 sm:px-4 font-medium text-ink-900"><YearLabel year={y} /></th>
                  <td className="px-3 py-2.5 sm:px-4 text-right font-serif text-lg tabular-nums text-ink-900">{n(t(imp, y))}</td>
                  <td className="px-3 py-2.5 sm:px-4 text-right font-serif text-lg tabular-nums text-ink-900">{n(t(tfwp, y))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableFrame>
        <p className="mt-6 max-w-3xl text-ink-600 text-pretty">
          The Temporary Foreign Worker Program generally needs a Labour Market Impact Assessment. The
          International Mobility Program does not.{' '}
          <Link href="/work-permits" className={official}>
            How Canadian work permits work
          </Link>
          .
        </p>
      </Section>

      {/* ===================== READING ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Reading the numbers" title="What these figures can’t tell you" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {READING.map((r) => (
            <FeatureCard key={r.title} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* ===================== SOURCES ===================== */}
      <Section tone="alt">
        <SectionHeading eyebrow="Sources" title="Where this comes from, and how to cite it" />
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl">IRCC’s tables</h3>
            <ul className="mt-4 space-y-3">
              {SOURCES.map((s) => (
                <li key={s.href}>
                  <a href={s.href} rel="noopener noreferrer" target="_blank" className={official}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-500 text-pretty">
              Figures run to {THROUGH} (IRCC data dated {longDate(DATA.ircc)}), read from IRCC on{' '}
              {longDate(DATA.read)}. We refresh this page after IRCC publishes new monthly tables. If
              anything here differs from IRCC’s tables, IRCC’s tables are right.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl">Using these figures</h3>
            <p className="mt-4 text-ink-600 text-pretty">
              Please credit IRCC as the source and name the period. For example: “Source:
              Immigration, Refugees and Citizenship Canada open data, to {THROUGH}, compiled by{' '}
              {site.name}.”
            </p>
            <p className="mt-4 text-sm text-ink-500 text-pretty">
              Contains information licensed under the{' '}
              <a href={LICENCE} rel="noopener noreferrer" target="_blank" className={official}>
                Open Government Licence – Canada
              </a>
              . IRCC has not reviewed or endorsed this page. {site.name} is a private firm that helps
              people apply to Canada.
            </p>
          </div>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="Questions about these figures" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      <CTASection
        eyebrow="Your own file"
        title="A trend won’t decide your application"
        subtitle="These figures describe everyone. An officer decides on your documents alone. Bring your history and you’ll get a free consultation and a written summary of where you stand. No one can guarantee a visa, and we won’t."
        page="pakistan-statistics"
        waMessage="Hi, I saw your Pakistan immigration figures and would like to talk about my own case."
      />

      <script
        type="application/ld+json"
        // Built from lib/ircc-pakistan.json, with no user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }}
      />
    </>
  );
}
