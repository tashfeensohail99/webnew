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
  // Unique per variant so the header and footer marks never share gradient ids.
  const silver = `tis-silver-${variant}`;
  const fold = `tis-fold-${variant}`;

  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      role="img"
      aria-label="Tashfeen Immigration Solutions"
    >
      <defs>
        {/* Brushed steel: bright shoulder, mid body, soft return highlight. */}
        <linearGradient id={silver} x1="10%" y1="0%" x2="88%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="26%" stopColor="#e3e8ee" />
          <stop offset="54%" stopColor="#9aa5b4" />
          <stop offset="76%" stopColor="#ccd4de" />
          <stop offset="100%" stopColor="#788899" />
        </linearGradient>
        {/* The shadowed plane of the fold — same metal, turned away from the light. */}
        <linearGradient id={fold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8c97a6" />
          <stop offset="100%" stopColor="#5d6875" />
        </linearGradient>
      </defs>

      {/* The navy tile. This is part of the mark, not a backdrop we added: the
          brand asset is a silver T ON navy, so the tile travels with it. Without
          it, the T has to be recoloured for light backgrounds and stops being
          silver at all — which is exactly what went wrong before. */}
      <rect x="0" y="0" width="128" height="128" rx="20" fill="#16283f" />

      {/* The T: broad chamfered crossbar folding into a tapered stem. */}
      <path
        fill={`url(#${silver})`}
        d="M22 30 H106 V48 L88 66 H74 L69 104 L64 114 L59 104 L54 66 H40 L22 48 Z"
      />
      {/* The fold down the right of the stem, so it reads as folded metal
          rather than a flat silhouette. */}
      <path fill={`url(#${fold})`} d="M64 30 L74 66 L69 104 L64 114 Z" />
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
