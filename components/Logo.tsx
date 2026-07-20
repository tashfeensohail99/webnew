/**
 * The Tashfeen mark + wordmark lockup.
 *
 * Recreated from the brand artwork: an angular "T" — a broad chamfered crossbar
 * folding into a tapered stem — in BRUSHED SILVER, above an all-caps sans
 * wordmark and a widely-tracked "IMMIGRATION SOLUTIONS" subline.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THE METAL IS SILVER, NOT GOLD.
 *
 * An earlier version of this file used a gold facet. That was invented, not
 * observed — the brand mark is silver/platinum. Gold belongs to the site's
 * accent palette (buttons, links); it does not belong in the logo. If you are
 * tempted to "harmonise" the mark with the gold accent, don't: the contrast
 * between a cool silver mark and a warm gold accent is what the brand actually
 * looks like.
 *
 * WHY THE MARK CHANGES FILL BY VARIANT: a metallic gradient only reads as metal
 * against a dark ground. On the white header it turns into pale grey mush, so
 * the light-background variant renders the mark in solid navy instead. That is
 * a deliberate legibility decision, not an inconsistency.
 *
 * TO USE THE EXACT BRAND FILE: drop it at /public/logo.svg and replace
 * <Monogram/> with <img src="/logo.svg" alt="Tashfeen Immigration Solutions"
 * className="h-9 w-auto" />. The lockup below still applies.
 */

type Variant = 'dark' | 'light';

function Monogram({ variant, className }: { variant: Variant; className?: string }) {
  const onDark = variant === 'light';
  // Unique per variant so the header and footer marks never share a gradient id.
  const gradId = `tis-silver-${variant}`;

  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      role="img"
      aria-label="Tashfeen Immigration Solutions"
    >
      {onDark ? (
        <defs>
          {/* Brushed steel: bright shoulder, mid body, soft return highlight. */}
          <linearGradient id={gradId} x1="8%" y1="0%" x2="92%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="28%" stopColor="#dfe5ec" />
            <stop offset="55%" stopColor="#98a3b3" />
            <stop offset="78%" stopColor="#c9d2dd" />
            <stop offset="100%" stopColor="#7d8899" />
          </linearGradient>
        </defs>
      ) : null}

      {/* The T: broad chamfered crossbar folding into a tapered stem. */}
      <path
        fill={onDark ? `url(#${gradId})` : '#0d1b2b'}
        d="M12 14 H116 V36 L94 58 H76 L70 106 L64 118 L58 106 L52 58 H34 L12 36 Z"
      />

      {/* The fold: a darker plane down the right of the stem so the mark reads as
          folded metal rather than a flat silhouette. */}
      <path
        fill={onDark ? '#5c6879' : '#213a54'}
        fillOpacity={onDark ? 0.55 : 1}
        d="M64 14 L76 58 L70 106 L64 118 Z"
      />
    </svg>
  );
}

export function Logo({
  variant = 'dark',
  showWordmark = true,
  className = '',
}: {
  variant?: Variant;
  showWordmark?: boolean;
  className?: string;
}) {
  const onDark = variant === 'light';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Monogram variant={variant} className="h-9 w-9 shrink-0" />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`text-[1.02rem] font-bold uppercase tracking-[0.14em] ${
              onDark
                ? 'bg-gradient-to-br from-white via-[#dfe5ec] to-[#98a3b3] bg-clip-text text-transparent'
                : 'text-ink-900'
            }`}
          >
            Tashfeen
          </span>
          <span
            className={`mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.26em] ${
              onDark ? 'text-ink-300' : 'text-ink-500'
            }`}
          >
            Immigration Solutions
          </span>
        </span>
      ) : null}
    </span>
  );
}
