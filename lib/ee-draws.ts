/**
 * Express Entry rounds of invitations, read from IRCC's own data.
 *
 * This is the JSON file behind the table on IRCC's rounds page — the same
 * record, not a copy someone retyped. It feeds /express-entry/draws.
 *
 * The rest of the site prints no cut-offs because a typed number goes stale the
 * day after it is typed. This page is the exception for exactly that reason:
 * nothing on it is typed. Every figure comes from this feed, is re-read hourly,
 * and is shown with the date of the round it belongs to.
 */

export const IRCC_ROUNDS_PAGE =
  'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html';

/** EE_ROUNDS_URL overrides the source for local builds on networks where
 *  canada.ca is unreachable; production reads IRCC directly. */
const FEED = process.env.EE_ROUNDS_URL || 'https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json';

export type Draw = {
  number: number;
  /** YYYY-MM-DD, as IRCC publishes it. */
  date: string;
  /** Round type with IRCC's "2026-Version 2" suffix removed. */
  type: string;
  invitations: number;
  /** CRS score of the lowest-ranked candidate invited. */
  crs: number;
  /** Which programmes the round was open to. */
  programs: string;
  /** Tie-breaking timestamp, as IRCC writes it. */
  tieBreak: string;
};

export type PoolBand = { label: string; count: number; sub?: { label: string; count: number }[] };
export type Pool = { asOn: string; total: number; bands: PoolBand[] };
export type DrawData = { draws: Draw[]; pool?: Pool };

const text = (v: unknown) => String(v ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const num = (v: unknown) => {
  const s = text(v).replace(/[,\s]/g, '');
  return /^\d+$/.test(s) ? Number(s) : NaN;
};
const cleanType = (s: string) =>
  s
    .replace(/\s*\((?:\d{4}-)?Version \d+\)/i, '')
    .replace(/,?\s*\d{4}-Version \d+$/i, '')
    .trim();

/**
 * The pool's score distribution, from the round's dd1–dd18 fields. IRCC does
 * not label them in the feed, so the labels below are checked against the
 * numbers on every read: the bands must add up to the total, and each split
 * band to its own parts. If IRCC ever changes the layout, the check fails and
 * the table is simply not shown — never shown with the wrong labels.
 */
const BANDS: [string, number, [string, number][]?][] = [
  ['601–1200', 1],
  ['501–600', 2],
  ['451–500', 3, [['491–500', 4], ['481–490', 5], ['471–480', 6], ['461–470', 7], ['451–460', 8]]],
  ['401–450', 9, [['441–450', 10], ['431–440', 11], ['421–430', 12], ['411–420', 13], ['401–410', 14]]],
  ['351–400', 15],
  ['301–350', 16],
  ['0–300', 17],
];

function pool(r: Record<string, unknown>): Pool | undefined {
  const dd = (i: number) => num(r[`dd${i}`]);
  const total = dd(18);
  const bands: PoolBand[] = BANDS.map(([label, i, sub]) => ({
    label,
    count: dd(i),
    ...(sub ? { sub: sub.map(([l, j]) => ({ label: l, count: dd(j) })) } : {}),
  }));
  const all = [total, ...bands.flatMap((b) => [b.count, ...(b.sub ?? []).map((s) => s.count)])];
  if (all.some((n) => Number.isNaN(n))) return undefined;
  const adds = (a: number[], t: number) => a.reduce((x, y) => x + y, 0) === t;
  if (!adds(bands.map((b) => b.count), total)) return undefined;
  if (!bands.every((b) => !b.sub || adds(b.sub.map((s) => s.count), b.count))) return undefined;
  const asOn = text(r.drawDistributionAsOn);
  return asOn ? { asOn, total, bands } : undefined;
}

function parse(json: unknown): DrawData {
  const rounds = (json as { rounds?: unknown })?.rounds;
  if (!Array.isArray(rounds)) throw new Error('IRCC rounds feed: no "rounds" array');

  const draws = rounds
    .map((r: Record<string, unknown>) => ({
      number: num(r.drawNumber),
      date: text(r.drawDate),
      type: cleanType(text(r.drawName)),
      invitations: num(r.drawSize),
      crs: num(r.drawCRS),
      programs: text(r.drawText2),
      tieBreak: text(r.drawCutOff),
    }))
    .filter(
      (d) =>
        !Number.isNaN(d.number) &&
        /^\d{4}-\d{2}-\d{2}$/.test(d.date) &&
        d.type &&
        !Number.isNaN(d.invitations) &&
        !Number.isNaN(d.crs),
    )
    .sort((a, b) => b.number - a.number);

  if (!draws.length) throw new Error('IRCC rounds feed: no readable rounds');

  const latestRaw = (rounds as Record<string, unknown>[]).find((r) => num(r.drawNumber) === draws[0].number);
  return { draws, pool: latestRaw ? pool(latestRaw) : undefined };
}

/**
 * The rounds, newest first, with the pool distribution from the latest one.
 *
 * Same failure rule as lib/youtube.ts: at build time a failed read returns
 * null so the deploy still succeeds (the page then points to IRCC); on an
 * hourly revalidation it throws, which keeps the last good page live.
 */
export async function latestDraws(): Promise<DrawData | null> {
  try {
    const res = await fetch(FEED, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(20_000) });
    if (!res.ok) throw new Error(`IRCC rounds feed: HTTP ${res.status}`);
    return parse(await res.json());
  } catch (err) {
    if (process.env.NEXT_PHASE === 'phase-production-build') return null;
    throw err;
  }
}
