/**
 * Single source of truth for the facts the marketing site states publicly.
 *
 * Anything a customer could act on — a fee, a deadline, a credential — lives
 * here so the site can never contradict itself across pages. On a YMYL site a
 * figure that drifts between two pages is a liability, not a typo.
 *
 * TODO(tashfeen): every value marked PLACEHOLDER must be replaced with a real,
 * verified fact before this site goes live. Do not guess them.
 */

export const site = {
  name: 'Tashfeen Immigration Solutions',
  shortName: 'Tashfeen Immigration',
  url: 'https://tashfeenimmigrationsolutions.com',
  /** An international firm — Canada, USA, UK and Europe. Not a Canada-only shop. */
  tagline: 'Immigration, handled by real lawyers.',

  /**
   * The WhatsApp Business number every CTA opens.
   *
   * DO NOT set this by hand. It is fetched at build time from the CRM's ACTIVE
   * WhatsAppChannel (see lib/wa-channel.ts) — the CRM is the single source of
   * truth. Hardcoding it here would mean switching the active channel in the
   * admin panel silently leaves the website pointing at a dead number.
   *
   * The env var below is only a local-dev escape hatch.
   */
  whatsappNumberFallback: process.env.NEXT_PUBLIC_WA_NUMBER ?? '',

  /**
   * The consultation is FREE. It was PKR 5,000 and creditable until 2026-07-21.
   *
   * Removing it took the site's honesty argument with it. The old copy read:
   * "a firm that earns nothing until you sign has every reason to tell you that
   * you qualify" — which, once the fee is gone, describes us. So the anchor had
   * to move from money to something else we can actually be held to.
   *
   * It is now a WRITTEN SUMMARY OF WHERE YOU STAND, given before money is
   * discussed. Deliberately a summary and not "we'll put the no in writing":
   * a real answer is often "not yet" or "depends what your documents show", and
   * promising a clean no would turn every honest maybe into a broken promise
   * the client holds in a WhatsApp thread — and a representation a regulator
   * could test us against.
   *
   * Two phrasings are BANNED anywhere on this site, for reasons that cost more
   * than they look:
   *   - "find out if you qualify" / "check your eligibility" — implies WE make
   *     the determination. A visa officer does. It also contradicts
   *     /no-guarantee-policy.
   *   - "book your FREE consultation!" — the literal register of the scam ads
   *     this audience has been warned about. Free has to read as confident,
   *     not as bait.
   */
  consult: {
    free: true,
    /** One-liner for hero subtitles and CTA subheads. */
    promise: 'A free consultation, and a written summary of where you stand.',
    /** What "free" actually costs them. Never let free imply no effort. */
    costsYou:
      'It costs you an hour and straight answers about your own history — including anything that has gone wrong before. Nothing else.',
  },

  /**
   * Real, visitable offices. Three of them, on two continents — this is the
   * firm's strongest answer to "are you a scam?", and the reason a Gulf-based
   * client trusts a Pakistani firm with a Canadian file.
   *
   * One canonical address string per office. It must match Google Business
   * Profile character-for-character or the local-SEO signal splits.
   *
   * PHONE: both Pakistan offices publish the SAME number, and it is also the
   * WhatsApp number the header fetches from the CRM at build time. It is
   * hardcoded here rather than derived, which means switching the active
   * WhatsAppChannel in the admin panel will NOT update it — if that number ever
   * changes, this file has to change too. Accepted deliberately: an office
   * line is a property of the office, not of whichever channel is active.
   *
   * MAP LINKS: share.google short links, resolved 2026-07-21 to confirm they
   * are not swapped — the Lahore link resolves to "DHA Haly Tower" (matching
   * the Lahore address) and the Islamabad link to the "Tashfeen Barristers and
   * Solicitors" profile. They are opaque, so re-check them if either office
   * moves; a stale one fails silently.
   */
  offices: [
    {
      city: 'Lahore',
      country: 'Pakistan',
      address: 'Office #201 & 202, 2nd Floor, HALY TOWER, Sector R, DHA Phase 2, Lahore',
      hours: 'Monday to Saturday, 9 am – 6 pm',
      phone: '+92 335 000 1111',
      mapUrl: 'https://share.google/gtClNV4K8xnskwPqS',
    },
    {
      city: 'Islamabad',
      country: 'Pakistan',
      // Supplied 2026-07-21. Punctuation normalised to match the Lahore entry's
      // house style — the raw string read "Sector F DHA, 2, 45730", which reads
      // as a mangled paste rather than an address. VERIFY THIS AGAINST THE
      // GOOGLE BUSINESS PROFILE before relying on it: it is emitted as
      // schema.org streetAddress, and a mismatch splits the local-SEO signal
      // instead of reinforcing it.
      address:
        'Office 3029B, 3rd Floor, World Trade Centre, Giga Mall, Sector F, DHA Phase 2, Islamabad 45730',
      hours: 'Monday to Saturday, 9 am – 6 pm',
      phone: '+92 335 000 1111',
      mapUrl: 'https://share.google/ceGjVWMzhtxhtq60o',
    },
    {
      city: 'Mississauga',
      country: 'Canada',
      address: '', // TODO(tashfeen)
      hours: '',
      phone: '',
      mapUrl: '',
    },
  ],

  /**
   * Social profiles. All five are treated as the firm's own presence per the
   * firm's instruction, so they all go into the footer with a plain label and
   * all appear in schema.org `sameAs` on the organisation entity.
   *
   * Note: the LinkedIn and TikTok URLs resolve to personal profiles rather than
   * dedicated company pages. For a founder-run practice this is a conscious
   * choice, not a bug. If a company page is created later, swap the `href` in
   * place and leave everything else alone.
   *
   * URLs are stored in canonical form. Both raw links the firm sent carried
   * session-only tracking suffixes that would mean nothing — or, in Facebook's
   * case, actively break — for anyone else loading them:
   *   • `?notif_id=…&notif_t=profile_plus_admin_invite&ref=notif` on the
   *     Facebook link is a single-use admin-invite token keyed to the inviter's
   *     session; the clean handle form `/<handle>` is what to publish.
   *   • `?isSelfProfile=true` on the LinkedIn link is LinkedIn's own "this is
   *     my own profile view" indicator — it only means anything when the
   *     logged-in viewer owns the profile. Stripped.
   */
  social: [
    {
      platform: 'Facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/Tashfeenbarristerssolicitors',
      icon: 'facebook',
    },
    {
      platform: 'Instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/tashfeen_barristers_solicitors/',
      icon: 'instagram',
    },
    {
      platform: 'YouTube',
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UC7yaY91cb22ZPnBPJyGBNBg',
      icon: 'youtube',
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tashfeen-sohail-abbas-gondal-95918a241/',
      icon: 'linkedin',
    },
    {
      platform: 'TikTok',
      label: 'TikTok',
      href: 'https://www.tiktok.com/@tashfeen.sohail.g',
      icon: 'tiktok',
    },
  ],
} as const;

/**
 * The destinations the firm actually works. Order = prominence in nav and on the
 * homepage, and it is set by what they SELL, not by what sounds impressive.
 *
 * Depth is deliberately uneven: Canada has 90 signed agreements behind it, the
 * USA has 2, and Schengen has none yet. Giving each country an identical stack
 * of pages would be doorway spam — Google is explicit about this, and a page
 * with nothing real to say ranks for nothing and damages the pages that do.
 * So: Canada gets a full hub, USA/UK get honest route pages, Europe gets one
 * page until demand justifies more.
 */
export type Destination = {
  slug: string;
  name: string;
  /** Nav label — short. */
  short: string;
  /** One line, in the customer's words, on why people go there. */
  blurb: string;
  /** 'hub' = full section with spokes · 'page' = one honest page. */
  depth: 'hub' | 'page';
};

export const destinations: Destination[] = [
  {
    slug: 'canada',
    name: 'Canada',
    short: 'Canada',
    blurb:
      'Work permits without a job offer, visit visas, and refusals fixed. Our largest practice — and we have an office in Canada.',
    depth: 'hub',
  },
  {
    slug: 'usa',
    name: 'United States',
    short: 'USA',
    blurb: 'Investor and intra-company routes for business owners, and visitor visas.',
    depth: 'page',
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    short: 'UK',
    blurb: 'Business, work and visitor routes for Pakistani applicants.',
    depth: 'page',
  },
  {
    slug: 'europe',
    name: 'Europe & Schengen',
    short: 'Europe',
    blurb: 'Schengen visitor visas, and residence routes into Europe.',
    depth: 'page',
  },
];

/**
 * The lawyers. This is the single most valuable asset on the site — every
 * competitor in this market is an anonymous "agent", and a named, checkable
 * lawyer is the one thing they cannot copy.
 *
 * Each entry drives: the homepage trust strip, /about/our-team, and the
 * "Reviewed by" byline on every advice page. Order matters — the first entry is
 * treated as the lead lawyer and is the one named on the homepage.
 *
 * PLACEHOLDER: could not be read from the CRM — the portal has 30 active staff
 * but zero designations and zero photos, and nobody is flagged as legal. The
 * firm is supplying this list. Until then the site renders an honest gap rather
 * than an invented name.
 */
export type Lawyer = {
  /** Full name as it appears on their licence. */
  name: string;
  /** Licence / registration + issuing body, e.g. "Advocate, High Court" or "RCIC #R######". */
  credential: string;
  /** What they actually handle — used on the team page, not decoration. */
  practice: string;
  /** Year they began practising. Omit rather than approximate. */
  since?: string;
  /** Public register entry so a sceptical reader can verify without asking us. */
  verifyUrl?: string;
  /** Path under /public. A real photograph — never a stock image. */
  photo?: string;
  /**
   * Unconfirmed placeholder. Renders visibly as a gap and HARD-FAILS the
   * production build (see assertLawyersPublishable). Delete the flag only when
   * every other field on the entry is true and checkable.
   */
  demo?: true;
};

/**
 * The published roster. EMPTY on purpose — the firm has not yet supplied
 * confirmable credentials, so the team page renders a dignified "profiles coming
 * soon" state rather than fabricating anything. That is a deliberate launch
 * decision, not an oversight.
 *
 * To publish the real team, paste one entry per lawyer below:
 *
 *   { name: 'Full Name As On Licence',
 *     credential: 'Advocate, High Court' | 'RCIC #R######',   // + issuing body
 *     practice: 'What they actually handle',
 *     since: '2015',                        // optional; omit rather than guess
 *     verifyUrl: 'https://public-register/...',  // optional but ideal
 *     photo: '/team/name.jpg' },            // a real photograph, never stock
 *
 * Names the firm has NAMED but not yet credentialed (do NOT publish a guessed
 * credential for any of them — attached to a real person it is a false claim
 * about a regulated qualification):
 *   • Raja Arslan Arslan  (CRM; confirm spelling on the licence)
 *   • Abdullah Tippu       (CRM; confirm spelling on the licence)
 *   • Ayesha               (not in CRM — full name needed)
 *   • Ayesha               (second person, same first name — must disambiguate)
 *
 * assertLawyersPublishable() below HARD-FAILS the production build on any entry
 * missing a credential/practice or still flagged demo:true — so it is impossible
 * to accidentally ship an unconfirmed one.
 */
export const lawyers: Lawyer[] = [];

/**
 * The founder, as confirmed by the firm on 2026-10-23: name, title, and the
 * office the portrait was taken in. Deliberately nothing more — no years in
 * practice, no qualifications, no quotes in his name — until the firm supplies
 * them. This is NOT a lawyer entry: it never feeds `ReviewedBy`, and no
 * credential is implied. The photo was supplied by the firm.
 */
export const founder = {
  name: 'Tashfeen Sohail Abbas Gondal',
  title: 'Founder & CEO',
  office: 'Lahore',
  linkedin: 'https://www.linkedin.com/in/tashfeen-sohail-abbas-gondal-95918a241/',
  photo: {
    /** /public path stem; files exist at each width in `widths`. */
    stem: '/team/tashfeen-sohail-abbas-gondal',
    widths: [480, 720, 960],
    width: 960,
    height: 1280,
  },
} as const;

/**
 * Refuses to build for production while any placeholder remains.
 *
 * The whole promise of this site is "we are real lawyers, go and check". Demo
 * entries shipping to the live domain would falsify precisely that claim, on
 * the one page it is made. A visible banner is not enough — banners get
 * overlooked at 2am on a launch day. This throws.
 */
export function assertLawyersPublishable(): void {
  if (process.env.NODE_ENV !== 'production') return;
  const bad = lawyers.filter((l) => l.demo || !l.credential.trim() || !l.practice.trim());
  if (bad.length) {
    throw new Error(
      `Refusing to build: ${bad.length} lawyer(s) still placeholder — ${bad
        .map((l) => l.name)
        .join(', ')}. Fill in credential + practice and remove \`demo: true\` in lib/site.ts. ` +
        'Never invent a credential for a named person.',
    );
  }
}

/** Lawyers that are safe to state publicly. Empty while the roster is demo. */
export const publishableLawyers = (): Lawyer[] => lawyers.filter((l) => !l.demo);

/** The lawyer named on the homepage and on bylines where only one fits. */
export const leadLawyer = (): Lawyer | undefined => publishableLawyers()[0];

/** Canonical service codes — must match SERVICE_TYPE_CODES in the backend so a
 *  web lead lands in the CRM with a serviceInterest the funnel report understands.
 *  Note C11 has no code of its own: it maps to WORK_PERMIT. */
export const SERVICE = {
  WORK_PERMIT: 'WORK_PERMIT',
  VISIT_VISA: 'VISIT_VISA',
  JR_RESUBMISSION: 'JR_RESUBMISSION',
  STUDY_VISA: 'STUDY_VISA',
} as const;

export type ServiceCode = (typeof SERVICE)[keyof typeof SERVICE];
