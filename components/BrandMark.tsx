/**
 * The gold "T" mark on brand navy, for the generated favicon and app icons
 * (app/icon.tsx, app/apple-icon.tsx). Satori-safe: flexbox and inline SVG only.
 * Same path as the social card's mark in app/opengraph-image.tsx.
 */
export function BrandMark({ px }: { px: number }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #13294a 0%, #0d1b2b 60%, #081320 100%)',
      }}
    >
      <svg width={px} height={px} viewBox="0 0 128 128">
        <path d="M14 16 H114 V36 L92 58 H74 L68 110 L64 118 L60 110 L54 58 H36 L14 36 Z" fill="#e4cd92" />
      </svg>
    </div>
  );
}
