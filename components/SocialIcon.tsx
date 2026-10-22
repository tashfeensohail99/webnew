/**
 * Brand-coloured social marks for the footer's "Follow us" row.
 *
 * Deliberately NOT part of the stroked `Icon` set in ui.tsx: the firm asked
 * for the recognisable full-colour app marks, so each network is a 48×48
 * tile in its own brand colour with the glyph in white. Solid tiles read the
 * same on the white footer and the navy one, which is why nothing here needs
 * a theme override.
 *
 * The Facebook, LinkedIn and TikTok glyphs are the CC0 Simple Icons shapes;
 * Instagram and YouTube are drawn from primitives. All five are the marks the
 * networks publish for exactly this use (linking to a profile), which is the
 * one context in which reproducing them is expected rather than a problem.
 */

export type SocialName = 'facebook' | 'instagram' | 'youtube' | 'linkedin' | 'tiktok';

const FACEBOOK_F =
  'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z';

const LINKEDIN_IN =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';

const TIKTOK_NOTE =
  'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z';

export function SocialIcon({ name, className = 'h-10 w-10' }: { name: SocialName; className?: string }) {
  const svg = { viewBox: '0 0 48 48', className, 'aria-hidden': true } as const;

  switch (name) {
    case 'facebook':
      return (
        <svg {...svg}>
          {/* The glyph is a disc with the "f" carved out, so a white disc
              underneath is what turns the cut-out white. */}
          <circle cx="24" cy="24" r="23" fill="#ffffff" />
          <path d={FACEBOOK_F} fill="#1877F2" transform="scale(2)" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...svg}>
          <defs>
            <radialGradient id="social-ig" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="9%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285aeb" />
            </radialGradient>
          </defs>
          <rect width="48" height="48" rx="12" fill="url(#social-ig)" />
          <rect x="11" y="11" width="26" height="26" rx="7.5" fill="none" stroke="#ffffff" strokeWidth="2.6" />
          <circle cx="24" cy="24" r="6.2" fill="none" stroke="#ffffff" strokeWidth="2.6" />
          <circle cx="31.4" cy="16.6" r="1.7" fill="#ffffff" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...svg}>
          <rect width="48" height="48" rx="12" fill="#ff0000" />
          <path d="M19.5 16.5v15l12.5-7.5z" fill="#ffffff" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...svg}>
          {/* Same trick as Facebook: the "in" is a hole in the blue square. */}
          <rect x="1" y="1" width="46" height="46" rx="4" fill="#ffffff" />
          <path d={LINKEDIN_IN} fill="#0a66c2" fillRule="evenodd" transform="scale(2)" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...svg}>
          <rect width="48" height="48" rx="12" fill="#010101" />
          {/* The cyan/red fringes are the mark's signature; white sits on top. */}
          <path d={TIKTOK_NOTE} fill="#25f4ee" transform="translate(11 11)" />
          <path d={TIKTOK_NOTE} fill="#fe2c55" transform="translate(13 13)" />
          <path d={TIKTOK_NOTE} fill="#ffffff" transform="translate(12 12)" />
        </svg>
      );
  }
}
