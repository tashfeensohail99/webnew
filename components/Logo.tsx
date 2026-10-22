/**
 * The Tashfeen Immigration Solutions brand lockup.
 *
 * The mark lives at /public/logo.png — a horizontal lockup supplied by the firm:
 * an angular navy "T" to the left of the "TASHFEEN" wordmark with an
 * "IMMIGRATION SOLUTIONS" subline. Because the asset carries its own
 * typography, nothing in this component sets a typeface for the wordmark —
 * swapping the asset is the only way to change the look.
 *
 * TWO SURFACES, ONE FILE.
 * The asset is navy on transparent, which reads correctly on the light header
 * but would be navy-on-navy — invisible — in the footer. The `light` variant
 * applies `brightness(0) invert(1)`, which snaps every opaque pixel to pure
 * white and leaves the transparent background alone. The result is visually
 * equivalent to a dedicated white version of the mark, so there is no second
 * file to keep in sync.
 *
 * If the firm later supplies an official light-variant asset, drop it at
 * /public/logo-light.png and switch the <img src> in the light branch below.
 */

type Variant = 'dark' | 'light';

/** Natural dimensions of /public/logo.png, used so Next sizes it without jank.
 *  Downscaled from the firm's 1080×348 original to 3× its 36px display height
 *  (34 KB → 11 KB) — sharp on any phone, without the bytes Lighthouse flagged. */
const LOGO_PX = { w: 348, h: 112 };

export function Logo({
  variant = 'dark',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  const onDark = variant === 'light';

  return (
    <img
      src="/logo.png"
      alt="Tashfeen Immigration Solutions"
      width={LOGO_PX.w}
      height={LOGO_PX.h}
      className={`logo-img block ${onDark ? '[filter:brightness(0)_invert(1)]' : ''} ${className}`}
    />
  );
}
