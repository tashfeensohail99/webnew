import { ImageResponse } from 'next/og';

/**
 * The site-wide social preview card (1200×630), used by Open Graph and
 * Twitter for every page that doesn't define its own. Before this, shared
 * links — including the firm's own social profiles — rendered with a blank
 * image. Generated at build time; no external fonts so there's nothing to
 * fetch. Brand navy ground + gold accent, matching the site.
 */
export const runtime = 'nodejs';
export const alt = 'Tashfeen Immigration Solutions — Canadian immigration, handled by real lawyers.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'radial-gradient(1100px 520px at 80% -10%, rgba(195,161,92,0.22), transparent 60%), linear-gradient(160deg, #0f2135 0%, #0d1b2b 46%, #081320 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* Angular T mark */}
          <svg width="64" height="64" viewBox="0 0 128 128">
            <path d="M14 16 H114 V36 L92 58 H74 L68 110 L64 118 L60 110 L54 58 H36 L14 36 Z" fill="#e4cd92" />
          </svg>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1,
            }}
          >
            <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: 6, color: '#ffffff' }}>
              TASHFEEN
            </span>
            <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: 7, color: '#c3a15c', marginTop: 8 }}>
              IMMIGRATION SOLUTIONS
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: 4, color: '#e4cd92', marginBottom: 24 }}>
            IMMIGRATION, BY QUALIFIED LAWYERS
          </span>
          <span style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.1, color: '#ffffff' }}>
            Canadian immigration, handled
          </span>
          <span style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.1, color: '#ffffff' }}>
            by <span style={{ color: '#e4cd92', marginLeft: 18 }}>real lawyers.</span>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 24, color: '#c7d2e0' }}>
          <span>Offices in Pakistan &amp; Canada</span>
          <span style={{ color: '#5a6b82' }}>•</span>
          <span>Free consultation</span>
          <span style={{ color: '#5a6b82' }}>•</span>
          <span>No outcome promises</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
