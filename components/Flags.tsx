/**
 * National flags, drawn to their official construction sheets.
 *
 * These replace the abstract emblems this grid used to carry. The earlier
 * reasoning still stands — an almost-right flag reads as careless, and a
 * reference design we were shown drew Canada's maple leaf as a ten-pointed
 * star — so the answer is not to avoid flags but to get them right:
 *
 *   Canada  1:2, hoist bands exactly 1/4 of the width each, 11-point leaf.
 *   UK      1:2 Union Flag. The red saltire is COUNTERCHANGED — offset about
 *           the diagonal, not centred on it. That asymmetry is the single
 *           detail people notice when it is wrong, and it is why this is a
 *           clip-path rather than three stacked strokes.
 *   USA     10:19, 13 stripes starting and ending red, canton over 7 of them,
 *           50 stars in the official 6-5-6-5-6-5-6-5-6 offset lattice.
 *   EU      2:3, twelve stars — a fixed number, nothing to do with member
 *           count — evenly spaced on a circle of radius 1/3 the hoist, each
 *           star upright with a circumradius of 1/18 the hoist.
 *
 * Colours are the published specifications, not eyeballed approximations.
 *
 * Every flag is decorative here: the country is always stated in text beside
 * it, so these carry aria-hidden and add nothing for a screen reader.
 */

type FlagProps = { className?: string };

/**
 * Official aspect ratios (width ÷ height). The caller sizes its box to these so
 * the SVG's default `meet` fits exactly — no crop, no stretch. Getting this
 * wrong is the subtle version of drawing the flag wrong: a Union Flag squeezed
 * to 1.85 has visibly steeper diagonals, and a cropped one loses its border.
 */
export const FLAG_RATIO = {
  canada: 2, // 1:2
  uk: 2, // 1:2
  usa: 1.9, // 10:19
  eu: 1.5, // 2:3
} as const;

const SHARED = { 'aria-hidden': true as const };

/** Five-pointed star, circumradius 1, centred on the origin, one point up. */
function starPath(r = 1): string {
  const pts: string[] = [];
  for (let i = 0; i < 5; i++) {
    // Outer vertices every 72°, starting at 12 o'clock; inner vertices offset
    // 36° at the radius that makes the arms straight (golden-ratio derived).
    const outer = (-90 + i * 72) * (Math.PI / 180);
    const inner = (-90 + i * 72 + 36) * (Math.PI / 180);
    const ir = r * 0.381966;
    pts.push(`${(Math.cos(outer) * r).toFixed(4)},${(Math.sin(outer) * r).toFixed(4)}`);
    pts.push(`${(Math.cos(inner) * ir).toFixed(4)},${(Math.sin(inner) * ir).toFixed(4)}`);
  }
  return `M${pts.join('L')}Z`;
}

export function FlagCanada({ className }: FlagProps) {
  return (
    <svg {...SHARED} viewBox="0 0 96 48" className={className}>
      <rect width="96" height="48" fill="#fff" />
      <rect width="24" height="48" fill="#D52B1E" />
      <rect x="72" width="24" height="48" fill="#D52B1E" />
      {/* 11-point leaf, drawn on the 1964 construction grid and centred. */}
      <g transform="translate(48 24) scale(0.30) translate(-64 -64)" fill="#D52B1E">
        <path d="M64 8l-5.5 10.3c-.6 1.1-1.7 1-2.9.4l-4-2.1 3 15.8c.6 2.9-1.4 2.9-2.4 1.7l-6.9-7.7-1.1 3.9c-.1.5-.7 1.1-1.6.9l-8.8-1.8 2.3 8.4c.5 1.9.9 2.7-.5 3.2l-3.1 1.5 15 12.2c.6.5.9 1.3.7 2.1l-1.3 4.3 14.2-1.6c.4 0 .9.4.9 1l-.4 14.6h2.6l-.4-14.6c0-.6.4-1 .9-1l14.2 1.6-1.3-4.3c-.2-.8.1-1.6.7-2.1l15-12.2-3.1-1.5c-1.4-.5-1-1.3-.5-3.2l2.3-8.4-8.8 1.8c-.9.2-1.5-.4-1.6-.9l-1.1-3.9-6.9 7.7c-1 1.2-3 1.2-2.4-1.7l3-15.8-4 2.1c-1.2.6-2.3.7-2.9-.4z" />
      </g>
    </svg>
  );
}

export function FlagUK({ className }: FlagProps) {
  // The clip splits the field into the four triangles that let the red saltire
  // sit OFF-centre on each diagonal — the counterchange. Without it you get the
  // symmetrical version that looks subtly, unmistakably wrong.
  return (
    <svg {...SHARED} viewBox="0 0 60 30" className={className}>
      <clipPath id="uk-counterchange">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#uk-counterchange)"
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function FlagUSA({ className }: FlagProps) {
  const W = 190;
  const H = 100;
  const stripe = H / 13;
  const cantonW = W * 0.4; // 2/5 of the fly
  const cantonH = stripe * 7;

  // Official lattice: 9 rows alternating 6 and 5 stars, on a 12 x 10 grid of
  // half-steps, which is what produces the offset staggering.
  const stars: Array<[number, number]> = [];
  for (let row = 0; row < 9; row++) {
    const long = row % 2 === 0; // rows 1,3,5,7,9 hold six
    const count = long ? 6 : 5;
    for (let i = 0; i < count; i++) {
      const col = long ? 1 + i * 2 : 2 + i * 2;
      stars.push([(cantonW / 12) * col, (cantonH / 10) * (row + 1)]);
    }
  }

  return (
    <svg {...SHARED} viewBox={`0 0 ${W} ${H}`} className={className}>
      <rect width={W} height={H} fill="#fff" />
      {/* Seven red stripes: first and last are red, so step by two. */}
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} y={i * 2 * stripe} width={W} height={stripe} fill="#B31942" />
      ))}
      <rect width={cantonW} height={cantonH} fill="#0A3161" />
      <g fill="#fff">
        {stars.map(([x, y], i) => (
          <path key={i} d={starPath(cantonH / 10 / 1.65)} transform={`translate(${x} ${y})`} />
        ))}
      </g>
    </svg>
  );
}

export function FlagEU({ className }: FlagProps) {
  const W = 90;
  const H = 60;
  const cx = W / 2;
  const cy = H / 2;
  const ring = H / 3; // circle of stars
  const r = H / 18; // each star's circumradius

  return (
    <svg {...SHARED} viewBox={`0 0 ${W} ${H}`} className={className}>
      <rect width={W} height={H} fill="#003399" />
      <g fill="#FFCC00">
        {Array.from({ length: 12 }, (_, i) => {
          // Clock positions, starting at 12. Every star stays upright — they
          // do NOT rotate to face the centre.
          const a = (i * 30 - 90) * (Math.PI / 180);
          // Rounded like starPath: Node and the browser disagree in the last
          // bits of Math.cos/sin, and the raw doubles made every page log a
          // hydration mismatch on this attribute.
          const x = (cx + Math.cos(a) * ring).toFixed(3);
          const y = (cy + Math.sin(a) * ring).toFixed(3);
          return <path key={i} d={starPath(r)} transform={`translate(${x} ${y})`} />;
        })}
      </g>
    </svg>
  );
}
