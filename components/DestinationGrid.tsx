import Link from 'next/link';
import { FLAG_RATIO, FlagCanada, FlagEU, FlagUK, FlagUSA } from './Flags';

/**
 * The destinations mosaic.
 *
 * An asymmetric bento grid: Canada takes a double-height cell because it is what
 * the firm actually files most, and the rest sit alongside it. The point is that
 * a reader grasps "several countries, Canada first" in one glance rather than
 * reading five identical cards.
 *
 * ON THE ARTWORK: real flags, drawn to their construction sheets — see Flags.tsx
 * for the geometry that matters (the Union Flag's counterchanged saltire, the
 * 6-5-6 star lattice, the eleven-point leaf). This grid previously used abstract
 * emblems on the reasoning that an almost-right flag reads as careless. That
 * reasoning was sound and the conclusion was wrong: the answer is to draw them
 * correctly. It also removes a real bug — Europe and Investor routes were both
 * rendering the SAME globe, so two of five cards had identical artwork.
 *
 * Each flag is presented as an object on the tile — inset, ringed, gently
 * rotated, with a shadow — rather than a full-bleed background. A flag flooding
 * the card would fight the gradient and, at the opacity needed for the title to
 * stay legible, would turn the Union Flag and the Stars and Stripes into grey
 * mush. Kept as a distinct object they read at full colour and stay correct.
 *
 * "Investor routes" is not a country and gets no flag — it keeps the globe.
 */

/** Restrained geometry, for the one card that is a theme rather than a place. */
function Globe({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <circle cx="64" cy="62" r="40" />
      <path d="M24 62h80M64 22c11 12 16 26 16 40s-5 28-16 40c-11-12-16-26-16-40s5-28 16-40z" />
    </svg>
  );
}

type Card = {
  href: string;
  kicker: string;
  title: string;
  tone: string;
  art: React.ReactNode;
  wide?: boolean;
};

/**
 * A flag presented as a physical object on the tile: only the WIDTH is set, and
 * the height follows from the flag's official ratio. An earlier version fixed
 * both and let the SVG `slice`, which quietly cropped — shaving the Union
 * Flag's border and a stripe off the US flag.
 */
function FlagPlate({
  children,
  ratio,
  big,
}: {
  children: React.ReactNode;
  ratio: number;
  big?: boolean;
}) {
  return (
    <span
      // Height comes from the official ratio rather than a fixed class, so the
      // box matches the artwork exactly and nothing is cropped or squeezed.
      style={{ aspectRatio: String(ratio) }}
      // The big flag steps up at LG, not SM: the Canada tile is only double-size
      // from lg up, so a wider flag at the sm breakpoint would spill out of a
      // half-width cell and get clipped by the card's overflow-hidden.
      className={`absolute block overflow-hidden rounded-lg shadow-lg ring-1 ring-white/30 -rotate-3 ${
        big ? 'right-7 top-9 w-52 lg:w-72' : 'right-5 top-5 w-40'
      }`}
    >
      {children}
    </span>
  );
}

const CARDS: Card[] = [
  {
    href: '/immigration-programs',
    kicker: 'Live · Work · Study · Invest',
    title: 'Canada',
    tone: 'from-[#8f1226] via-[#c31733] to-[#6d0d1d]',
    art: (
      <FlagPlate big ratio={FLAG_RATIO.canada}>
        <FlagCanada className="h-full w-full" />
      </FlagPlate>
    ),
    wide: true,
  },
  {
    href: '/uk',
    kicker: 'Business & skilled routes',
    title: 'United Kingdom',
    tone: 'from-[#14294f] to-[#2a4f83]',
    art: (
      <FlagPlate ratio={FLAG_RATIO.uk}>
        <FlagUK className="h-full w-full" />
      </FlagPlate>
    ),
  },
  {
    href: '/usa',
    kicker: 'Investor & transfer options',
    title: 'United States',
    tone: 'from-[#54323c] to-[#a1485a]',
    art: (
      <FlagPlate ratio={FLAG_RATIO.usa}>
        <FlagUSA className="h-full w-full" />
      </FlagPlate>
    ),
  },
  {
    href: '/europe',
    kicker: 'Schengen',
    title: 'Europe',
    tone: 'from-[#0d5a70] to-[#1a8ea1]',
    art: (
      <FlagPlate ratio={FLAG_RATIO.eu}>
        <FlagEU className="h-full w-full" />
      </FlagPlate>
    ),
  },
  {
    href: '/business-immigration',
    kicker: 'Business & investment routes',
    title: 'Investor routes',
    tone: 'from-[#584618] to-[#a2823f]',
    // No flag: this card is a theme, not a place.
    art: <Globe className="absolute -right-4 top-5 h-40 w-40 text-white/20" />,
  },
];

export function DestinationGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
      {CARDS.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.tone} ${
            // The wide card needs its OWN base min-height, not just the lg one.
            // The flag is absolutely positioned so it adds no height; without a
            // floor here the card collapsed to the height of its text on mobile
            // and the flag overflowed straight through the title.
            c.wide ? 'min-h-[18rem] lg:row-span-2 lg:min-h-[34rem]' : 'min-h-[15rem]'
          } text-white shadow-soft transition-transform duration-300 hover:-translate-y-1`}
        >
          <span className="pointer-events-none absolute inset-0 transition-transform duration-500 group-hover:scale-105">
            {c.art}
          </span>
          {/* Legibility floor under the text, independent of the artwork above it. */}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/45 to-transparent" />
          <span className="absolute inset-x-6 bottom-6">
            <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/75">
              {c.kicker}
            </span>
            <span
              className={`mt-1.5 block font-serif ${c.wide ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}
            >
              {c.title}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
