import Link from 'next/link';

/**
 * The destinations mosaic.
 *
 * An asymmetric bento grid: Canada takes a double-height cell because it is what
 * the firm actually files most, and the rest sit alongside it. The point is that
 * a reader grasps "several countries, Canada first" in one glance rather than
 * reading five identical cards.
 *
 * ON THE ARTWORK: these are abstract emblems, not flags. A reference design we
 * were shown rendered Canada's maple leaf as a ten-pointed star — for a Canadian
 * immigration firm that is a bad look, and crude approximations of the Union
 * Jack or the Stars and Stripes are worse. So the leaf here is a real maple leaf
 * outline, and the other cells use restrained geometry rather than pretending to
 * be accurate flags. Getting a flag almost right reads as careless; not drawing
 * one at all reads as deliberate.
 */

function MapleLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden="true" fill="currentColor">
      <path d="M64 8l-5.5 10.3c-.6 1.1-1.7 1-2.9.4l-4-2.1 3 15.8c.6 2.9-1.4 2.9-2.4 1.7l-6.9-7.7-1.1 3.9c-.1.5-.7 1.1-1.6.9l-8.8-1.8 2.3 8.4c.5 1.9.9 2.7-.5 3.2l-3.1 1.5 15 12.2c.6.5.9 1.3.7 2.1l-1.3 4.3 14.2-1.6c.4 0 .9.4.9 1l-.4 14.6h2.6l-.4-14.6c0-.6.4-1 .9-1l14.2 1.6-1.3-4.3c-.2-.8.1-1.6.7-2.1l15-12.2-3.1-1.5c-1.4-.5-1-1.3-.5-3.2l2.3-8.4-8.8 1.8c-.9.2-1.5-.4-1.6-.9l-1.1-3.9-6.9 7.7c-1 1.2-3 1.2-2.4-1.7l3-15.8-4 2.1c-1.2.6-2.3.7-2.9-.4z" />
    </svg>
  );
}

/** Restrained geometry — deliberately not an attempt at a real flag. */
function Emblem({ kind, className }: { kind: 'uk' | 'usa' | 'globe'; className?: string }) {
  const p = {
    className,
    viewBox: '0 0 128 128',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    'aria-hidden': true as const,
  };
  if (kind === 'uk')
    return (
      <svg {...p}>
        <rect x="14" y="26" width="100" height="72" rx="3" />
        <path d="M14 26l100 72M114 26L14 98M64 26v72M14 62h100" />
      </svg>
    );
  if (kind === 'usa')
    return (
      <svg {...p}>
        <rect x="14" y="26" width="100" height="72" rx="3" />
        <path d="M14 44h100M14 62h100M14 80h100" />
        <rect x="14" y="26" width="42" height="36" />
      </svg>
    );
  return (
    <svg {...p}>
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

const CARDS: Card[] = [
  {
    href: '/immigration-programs',
    kicker: 'Live · Work · Study · Invest',
    title: 'Canada',
    tone: 'from-[#8f1226] via-[#c31733] to-[#6d0d1d]',
    art: <MapleLeaf className="absolute -right-6 top-12 h-64 w-64 text-white/25" />,
    wide: true,
  },
  {
    href: '/uk',
    kicker: 'Business & skilled routes',
    title: 'United Kingdom',
    tone: 'from-[#14294f] to-[#2a4f83]',
    art: <Emblem kind="uk" className="absolute -right-4 top-5 h-40 w-40 text-white/20" />,
  },
  {
    href: '/usa',
    kicker: 'Investor & transfer options',
    title: 'United States',
    tone: 'from-[#54323c] to-[#a1485a]',
    art: <Emblem kind="usa" className="absolute -right-4 top-5 h-40 w-40 text-white/20" />,
  },
  {
    href: '/europe',
    kicker: 'Schengen',
    title: 'Europe',
    tone: 'from-[#0d5a70] to-[#1a8ea1]',
    art: <Emblem kind="globe" className="absolute -right-4 top-5 h-40 w-40 text-white/20" />,
  },
  {
    href: '/business-immigration',
    kicker: 'Business & investment routes',
    title: 'Investor routes',
    tone: 'from-[#584618] to-[#a2823f]',
    art: <Emblem kind="globe" className="absolute -right-4 top-5 h-40 w-40 text-white/20" />,
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
            c.wide ? 'lg:row-span-2 lg:min-h-[34rem]' : 'min-h-[15rem]'
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
