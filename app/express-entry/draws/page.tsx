import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, FeatureCard, Callout, FAQ, CTASection } from '@/components/ui';
import { ReviewedBy } from '@/components/ReviewedBy';
import { latestDraws, IRCC_ROUNDS_PAGE, type Draw } from '@/lib/ee-draws';

/**
 * /express-entry/draws — every round of invitations, from IRCC's own data.
 *
 * "Latest Express Entry draw" is the most-searched question this audience
 * asks, and most pages answering it are retyped by hand and go stale. Here
 * every number is read from IRCC's feed (lib/ee-draws.ts), re-read hourly
 * (ISR), and shown with the date of its round. The prose around the numbers is
 * evergreen: it explains what a draw does and does not tell you, and never
 * predicts the next one.
 */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Latest Express Entry Draws & CRS Cut-offs',
  description:
    'Every Express Entry draw as IRCC publishes it — date, draw type, invitations and the CRS cut-off — updated automatically from IRCC’s own data.',
  alternates: { canonical: '/express-entry/draws' },
};

const PAGE = 'express-entry-draws';

const n = (x: number) => x.toLocaleString('en-US');
const dateFmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const shortFmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const day = (iso: string) => new Date(`${iso}T00:00:00Z`);
const longDate = (iso: string) => dateFmt.format(day(iso));
const shortDate = (iso: string) => shortFmt.format(day(iso));

/** One key per round type, so "French-Language proficiency" and "French language proficiency" group together. */
const typeKey = (t: string) => t.toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();

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

const READING: { title: string; body: string }[] = [
  {
    title: 'A cut-off is a result, not a target',
    body: 'The CRS score shown for a round is the lowest score IRCC happened to reach when it stopped issuing invitations. It depends on who was in the pool that day and how many invitations IRCC chose to issue. Past rounds do not commit IRCC to anything, and the next cut-off can be higher or lower.',
  },
  {
    title: 'Category rounds draw from a smaller group',
    body: 'In a category round IRCC first filters the pool — French speakers, healthcare workers, trades — and invites from the top of that group only. That is why one week can show very different cut-offs. You cannot choose a category; you either meet its definition or you don’t.',
  },
  {
    title: 'Provincial nomination rounds look high for a reason',
    body: 'A provincial nomination adds 600 points to a CRS score, so Provincial Nominee Program rounds show cut-offs far above the rest. They are not a bar you need to clear on your own — they are what the score looks like once a province has already chosen you.',
  },
];

export default async function ExpressEntryDrawsPage() {
  const data = await latestDraws();
  const draws = data?.draws ?? [];
  const latest: Draw | undefined = draws[0];

  // Everything below is computed from IRCC's rounds — nothing is typed.
  const yearEnd = latest ? day(latest.date).getTime() : 0;
  const lastYear = draws.filter((d) => yearEnd - day(d.date).getTime() < 365 * 86_400_000);
  const year = latest?.date.slice(0, 4) ?? '';
  const ytd = draws.filter((d) => d.date.startsWith(year));
  const ytdInvites = ytd.reduce((s, d) => s + d.invitations, 0);

  const byType = new Map<string, { draw: Draw; count: number }>();
  for (const d of lastYear) {
    const k = typeKey(d.type);
    const seen = byType.get(k);
    if (seen) seen.count += 1;
    else byType.set(k, { draw: d, count: 1 });
  }
  const types = [...byType.values()];

  const pool = data?.pool;
  const poolMax = pool ? Math.max(...pool.bands.map((b) => b.count)) : 0;

  const faqs = latest
    ? [
        {
          q: 'When was the latest Express Entry draw?',
          a: `The latest round IRCC has published is #${latest.number}, on ${longDate(latest.date)}: a ${latest.type} round that issued ${n(latest.invitations)} invitations to apply. The lowest-ranked candidate invited had a CRS score of ${latest.crs}.`,
        },
        {
          q: 'What does the CRS cut-off mean?',
          a: 'It is the Comprehensive Ranking System score of the lowest-ranked candidate invited in that round. Everyone eligible for the round with a higher score was invited. It is the outcome of one round, set by the pool on that day and the number of invitations IRCC chose to issue — not a pass mark that carries over to the next round.',
        },
        {
          q: 'What is the tie-breaking rule?',
          a: 'When several candidates have exactly the cut-off score, IRCC invites those who submitted their Express Entry profile before a stated date and time. That timestamp is published with each round.',
        },
        {
          q: 'How often are Express Entry draws held?',
          a: `IRCC publishes no schedule; it decides the timing, type and size of each round. In the 12 months to ${longDate(latest.date)} it held ${lastYear.length} rounds across ${types.length} round types.`,
        },
        {
          q: 'Why are Provincial Nominee Program cut-offs so high?',
          a: 'Because a provincial nomination adds 600 points to a candidate’s CRS score. A PNP round only invites candidates who already hold a nomination, so its cut-off includes those 600 points.',
        },
        {
          q: 'Where does this data come from?',
          a: 'From the data IRCC publishes for its own rounds-of-invitations page, read automatically and refreshed every hour. Nothing on this page is typed by hand. If anything here ever differs from IRCC’s page, IRCC’s page is the authority.',
        },
        {
          q: 'Will I get an invitation?',
          a: 'No one can tell you that in advance — not us, and not anyone else. What you can do is work out your score accurately, check which programmes and categories you genuinely meet, and look at the ways to raise your score. A lawyer can review your profile for mistakes that cost points.',
        },
      ]
    : [];

  return (
    <>
      <PageHero
        eyebrow="Express Entry · Rounds of invitations"
        title={
          <>
            Every Express Entry draw, <span className="text-gold-300">straight from IRCC.</span>
          </>
        }
        subtitle={
          latest
            ? `Latest round: ${longDate(latest.date)} — ${latest.type}, ${n(latest.invitations)} invitations, lowest CRS score invited ${latest.crs}. Updated automatically from IRCC’s own data.`
            : 'Every round of invitations, with its date, type, size and CRS cut-off — read from IRCC’s own data.'
        }
      >
        <Link href="/tools/crs-calculator" className="btn btn-gold">
          Work out your CRS score
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/book-consultation" className="btn btn-ghost">
          Have your profile reviewed
        </Link>
      </PageHero>

      {latest ? (
        <>
          {/* ===================== LATEST ROUND ===================== */}
          <Section tone="paper">
            <SectionHeading
              eyebrow={`Latest round · #${latest.number}`}
              title={longDate(latest.date)}
              subtitle={`${latest.type}. Open to: ${latest.programs}.`}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stat label="Invitations issued" value={n(latest.invitations)} />
              <Stat label="Lowest CRS invited" value={String(latest.crs)} note="The round’s cut-off score" />
              <Stat label={`Rounds in ${year}`} value={String(ytd.length)} note={`${n(ytdInvites)} invitations so far`} />
              <Stat label="Last 12 months" value={`${lastYear.length} rounds`} note={`${types.length} round types`} />
            </div>
            {latest.tieBreak ? (
              <p className="mt-6 max-w-3xl text-sm text-ink-500 text-pretty">
                Tie-breaking rule: candidates with the cut-off score were invited if they submitted
                their profile before {latest.tieBreak}.
              </p>
            ) : null}
          </Section>

          {/* ===================== BY ROUND TYPE ===================== */}
          <Section tone="alt">
            <SectionHeading
              eyebrow="By round type"
              title="The latest cut-off for each kind of round"
              subtitle="Each round type draws from a different group, so their cut-offs are not comparable with one another. Shown: the most recent round of each type in the last 12 months."
            />
            <div className="mt-10 overflow-x-auto rounded-2xl border border-rule bg-paper">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Round type</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Latest</th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold">CRS</th>
                    <th scope="col" className="hidden px-4 py-3 text-right font-semibold sm:table-cell">Invitations</th>
                    <th scope="col" className="hidden px-4 py-3 text-right font-semibold md:table-cell">Rounds in 12 months</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rule">
                  {types.map(({ draw: d, count }) => (
                    <tr key={typeKey(d.type)}>
                      <th scope="row" className="px-4 py-3 font-medium text-ink-900">{d.type}</th>
                      <td className="whitespace-nowrap px-4 py-3 text-ink-600">{shortDate(d.date)}</td>
                      <td className="px-4 py-3 text-right font-serif text-lg text-ink-900">{d.crs}</td>
                      <td className="hidden px-4 py-3 text-right text-ink-600 sm:table-cell">{n(d.invitations)}</td>
                      <td className="hidden px-4 py-3 text-right text-ink-600 md:table-cell">{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ===================== THE POOL ===================== */}
          {pool ? (
            <Section tone="paper">
              <SectionHeading
                eyebrow="The pool"
                title={`${n(pool.total)} candidates in the pool`}
                subtitle={`How their CRS scores were spread on ${pool.asOn}, as IRCC published it with round #${latest.number}. Your competition is the band you sit in and the ones above it.`}
              />
              <ul className="mt-10 max-w-3xl space-y-3">
                {pool.bands.map((b) => (
                  <li key={b.label}>
                    <div className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="font-semibold text-ink-900">CRS {b.label}</span>
                      <span className="tabular-nums text-ink-600">{n(b.count)}</span>
                    </div>
                    <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-gold-500/10" aria-hidden="true">
                      <div className="h-full rounded-full bg-gold-500" style={{ width: `${Math.max(1, (b.count / poolMax) * 100)}%` }} />
                    </div>
                    {b.sub ? (
                      <p className="mt-1.5 text-xs text-ink-500">
                        {b.sub.map((s) => `${s.label}: ${n(s.count)}`).join(' · ')}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}

          {/* ===================== ALL ROUNDS ===================== */}
          <Section tone="alt">
            <SectionHeading
              eyebrow="Every round"
              title="All rounds in the last 12 months"
              subtitle={
                <>
                  Newest first. The full history back to 2015 is on{' '}
                  <a href={IRCC_ROUNDS_PAGE} rel="noopener noreferrer" target="_blank" className={official}>
                    IRCC’s rounds of invitations page
                  </a>
                  .
                </>
              }
            />
            <div className="mt-10 overflow-x-auto rounded-2xl border border-rule bg-paper">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Express Entry rounds of invitations in the last 12 months</caption>
                <thead className="border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500">
                  <tr>
                    <th scope="col" className="hidden px-4 py-3 font-semibold sm:table-cell">#</th>
                    <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Date</th>
                    <th scope="col" className="px-3 py-3 font-semibold sm:px-4">Round type</th>
                    {/* Phones drop "Invited" so the CRS column — the one people come for — stays on screen. */}
                    <th scope="col" className="hidden px-4 py-3 text-right font-semibold sm:table-cell">Invited</th>
                    <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-4">CRS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rule">
                  {lastYear.map((d) => (
                    <tr key={d.number}>
                      <td className="hidden px-4 py-3 tabular-nums text-ink-500 sm:table-cell">{d.number}</td>
                      <td className="whitespace-nowrap px-3 py-3 text-ink-600 sm:px-4">{shortDate(d.date)}</td>
                      <td className="px-3 py-3 text-ink-900 sm:px-4">{d.type}</td>
                      <td className="hidden px-4 py-3 text-right tabular-nums text-ink-600 sm:table-cell">{n(d.invitations)}</td>
                      <td className="px-3 py-3 text-right font-serif text-lg text-ink-900 sm:px-4">{d.crs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-ink-500">
              Source: IRCC’s published rounds-of-invitations data, read automatically and refreshed
              hourly. If anything here differs from{' '}
              <a href={IRCC_ROUNDS_PAGE} rel="noopener noreferrer" target="_blank" className={official}>
                IRCC’s page
              </a>
              , IRCC’s page is right.
            </p>
          </Section>
        </>
      ) : (
        <Section tone="paper">
          <div className="mx-auto max-w-3xl">
            <Callout title="The latest rounds are on IRCC’s site">
              We couldn’t read IRCC’s data just now.{' '}
              <a href={IRCC_ROUNDS_PAGE} rel="noopener noreferrer" target="_blank" className={official}>
                See every round on IRCC’s rounds of invitations page
              </a>
              , or{' '}
              <Link href="/tools/crs-calculator" className={official}>
                work out your own CRS score
              </Link>
              .
            </Callout>
          </div>
        </Section>
      )}

      {/* ===================== HOW TO READ A DRAW ===================== */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Reading the results"
          title="What a draw tells you — and what it doesn’t"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {READING.map((r) => (
            <FeatureCard key={r.title} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-ink-600 text-pretty">
          New to the system?{' '}
          <Link href="/express-entry" className={official}>
            How Express Entry works
          </Link>
          ,{' '}
          <Link href="/express-entry/category-based-draws" className={official}>
            how category-based draws work
          </Link>
          , and{' '}
          <Link href="/pnp" className={official}>
            how provincial nomination works
          </Link>
          .
        </p>
      </Section>

      {faqs.length ? (
        <Section tone="alt">
          <SectionHeading eyebrow="Straight answers" title="Express Entry draw questions" />
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <ReviewedBy updated="October 2026" />
          </div>
        </Section>
      ) : null}

      <CTASection
        eyebrow="Below the cut-off?"
        title="Find the points you’re missing"
        subtitle="Bring your profile, test results and work history. We’ll check your score line by line, look for points you’re entitled to and haven’t claimed, and tell you honestly whether Express Entry or another route fits you better. No one can guarantee an invitation, and we won’t."
        page={PAGE}
        waMessage="Hi, I’m in the Express Entry pool and would like my CRS score and profile reviewed."
      />
    </>
  );
}
