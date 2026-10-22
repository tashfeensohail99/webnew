/**
 * Menu icons — one small stroked glyph per menu item, in the same line style
 * as the site's `Icon` set (24px box, 1.7 stroke, round joins).
 *
 * Kept OUT of lib/nav.ts on purpose: the nav file is the site's information
 * architecture, and the icon is presentation. Icons are keyed by href, so a
 * page listed in two menus (Super Visa is under Visit AND Family) shows the
 * same icon in both. An href with no entry simply renders no icon.
 */

const GLYPHS = {
  compass: (<><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></>),
  zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  briefcase: (<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></>),
  leaf: <path d="M5 19c0-8 5-13.5 15-15-1 10-6.5 15-15 15zM5 19l7.5-7.5" />,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" />,
  layers: <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3zM3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5" />,
  map: <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" />,
  pin: (<><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  anchor: (<><circle cx="12" cy="5" r="2" /><path d="M12 7v14M4 13a8 8 0 0 0 16 0M8 10h8" /></>),
  tree: <path d="M12 3 6 11h3l-4 6h14l-4-6h3L12 3zM12 17v4" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  growth: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />,
  fileCheck: <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5M9 14l2 2 4-4" />,
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  transfer: <path d="M4 8h14l-3-3M20 16H6l3 3" />,
  cap: <path d="M2 9l10-5 10 5-10 5L2 9zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v5" />,
  building: <path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M14 9h4a2 2 0 0 1 2 2v10M3 21h18M8 7h2M8 11h2M8 15h2" />,
  key: (<><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M16 7l3 3M14 9l2 2" /></>),
  users: (<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.3.6 3.5 2.6 3.5 6" /></>),
  bridge: <path d="M2 17h20M4 17v-5M20 17v-5M2 11.5C5 8 8 7 12 7s7 1 10 4.5M8 17V9M12 17V7.5M16 17V9" />,
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3z" /></>),
  doc: <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5M9 13h6M9 17h6" />,
  landmark: <path d="M3 21h18M5 21v-9M9.5 21v-9M14.5 21v-9M19 21v-9M2 10l10-6 10 6H2z" />,
  wallet: <path d="M19 9V6a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V7M17 14.5h.01" />,
  alert: <path d="M12 3 2 20h20L12 3zM12 10v4M12 17h.01" />,
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  stairs: <path d="M3 20h5v-5h5v-5h5V5h3" />,
  home: <path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-5h4v5" />,
  child: (<><circle cx="12" cy="6" r="2.5" /><path d="M12 9v6M8 12h8M9 21l3-6 3 6" /></>),
  calendar: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  plane: <path d="M2 12l19-7-7 19-2.5-8.5L2 12z" />,
  phone: (<><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>),
  search: (<><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /></>),
  refresh: <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" />,
  scale: <path d="M12 3v18M7 7h10M6 7l-3 6a3 3 0 0 0 6 0L6 7zM18 7l-3 6a3 3 0 0 0 6 0l-3-6zM8 21h8" />,
  redo: <path d="M9 14 4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3" />,
  shieldAlert: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM12 8v5M12 16h.01" />,
  shield: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9 12l2 2 4-4" />,
  calculator: (<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" /></>),
  checklist: <path d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />,
  language: <path d="M4 6h8M8 6v12M13 18l3.5-9 3.5 9M14.2 15h4.6" />,
  clipboard: (<><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4V3h6v1M9 13l2 2 4-4" /></>),
  gauge: (<><path d="M4 17a8 8 0 1 1 16 0M12 17l4-5" /><circle cx="12" cy="17" r="1" /></>),
  info: (<><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5h.01" /></>),
  play: (<><rect x="2.5" y="5" width="19" height="14" rx="3.5" /><path d="M10 9.2v5.6l4.8-2.8L10 9.2z" /></>),
  receipt: <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3zM9 8h6M9 12h6M9 16h3" />,
} as const;

export type NavIconName = keyof typeof GLYPHS;

const BY_HREF: Record<string, NavIconName> = {
  // Section landing pages — the icons on the top-bar labels. (Family,
  // Refused? and About reuse their hub items' entries below.)
  '/immigration-programs': 'leaf',
  '/work-permits': 'briefcase',
  '/study-in-canada': 'cap',
  '/visitor-visa': 'plane',
  '/tools': 'calculator',

  // Canada PR
  '/canada-immigration-from-pakistan': 'compass',
  '/express-entry': 'zap',
  '/express-entry/federal-skilled-worker': 'briefcase',
  '/express-entry/canadian-experience-class': 'leaf',
  '/express-entry/federal-skilled-trades': 'wrench',
  '/express-entry/category-based-draws': 'layers',
  '/pnp': 'map',
  '/pnp/ontario': 'pin',
  '/pnp/british-columbia': 'pin',
  '/pnp/alberta': 'pin',
  '/pnp/saskatchewan': 'pin',
  '/pnp/manitoba': 'pin',
  '/pnp/nova-scotia': 'pin',
  '/pnp/new-brunswick': 'pin',
  '/pnp/prince-edward-island': 'pin',
  '/pnp/newfoundland-labrador': 'pin',
  '/atlantic-immigration-program': 'anchor',
  '/rural-community-immigration': 'tree',
  '/caregivers': 'heart',
  '/business-immigration': 'growth',
  '/quebec-immigration': 'chat',
  // Work
  '/work-permits/lmia': 'fileCheck',
  '/work-permits/global-talent-stream': 'code',
  '/work-permits/intra-company-transfer': 'transfer',
  '/work-permits/post-graduation': 'cap',
  '/work-permits/caregivers': 'heart',
  '/work-permit-canada': 'building',
  '/work-permits/lmia-exempt': 'key',
  '/work-permits/spousal-open-work-permit': 'users',
  '/work-permits/international-experience-canada': 'globe',
  '/work-permits/bridging-open-work-permit': 'bridge',
  // Study
  '/study-in-canada/study-permit': 'cap',
  '/study-in-canada/provincial-attestation-letter': 'doc',
  '/study-in-canada/designated-learning-institutions': 'landmark',
  '/study-in-canada/proof-of-funds': 'wallet',
  '/study-in-canada/refusals': 'alert',
  '/study-in-canada/working-while-studying': 'briefcase',
  '/study-in-canada/study-permit-extension': 'clock',
  '/study-in-canada/bringing-family': 'users',
  '/study-in-canada/study-to-permanent-residence': 'stairs',
  // Family
  '/family-sponsorship': 'home',
  '/family-sponsorship/spouse-partner': 'heart',
  '/family-sponsorship/parents-grandparents': 'users',
  '/family-sponsorship/dependent-children': 'child',
  // Visit
  '/canada-visit-visa': 'plane',
  '/visitor-visa/super-visa': 'calendar',
  '/visitor-visa/eta': 'phone',
  '/visitor-visa/extension': 'clock',
  '/visitor-visa/business-visitor': 'briefcase',
  '/visitor-visa/invitation-letter': 'mail',
  // Refused
  '/canada-visa-refused': 'alert',
  '/refusals/gcms-notes': 'search',
  '/refusals/reconsideration': 'refresh',
  '/refusals/judicial-review': 'scale',
  '/refusals/re-applying': 'redo',
  '/refusals/misrepresentation': 'shieldAlert',
  // Tools
  '/tools/crs-calculator': 'calculator',
  '/tools/fsw-67-calculator': 'checklist',
  '/tools/clb-converter': 'language',
  '/tools/work-permit-eligibility': 'clipboard',
  '/tools/visit-visa-refusal-risk': 'gauge',
  // About
  '/about': 'info',
  '/about/our-team': 'users',
  '/fees': 'receipt',
  '/updates': 'play',
  '/work-permit-canada/business-plan': 'doc',
  '/work-permit-canada/refusals': 'alert',
  '/no-guarantee-policy': 'shield',
  '/book-consultation': 'calendar',
  '/immigration-consultant-lahore': 'pin',
  '/immigration-consultant-islamabad': 'pin',
};

export function NavIcon({ href, className = 'h-4 w-4' }: { href: string; className?: string }) {
  const name = BY_HREF[href];
  if (!name) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {GLYPHS[name]}
    </svg>
  );
}

/** Whether a menu item has an icon — lets a caller skip the icon tile entirely. */
export function hasNavIcon(href: string): boolean {
  return href in BY_HREF;
}
