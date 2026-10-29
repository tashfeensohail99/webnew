import { NAV, type NavGroup, type NavItem } from './nav';
import { ROUTES } from './routes';
import { POSTS } from './blog';

/**
 * Where a page sits in the site — derived from the nav, so breadcrumbs and
 * "related guides" can never disagree with the menu.
 *
 * Pure functions over NAV/ROUTES; used by the client components that read the
 * current path (Breadcrumbs, RelatedGuides).
 */

export type Crumb = { href: string; label: string };

/** Section names as a trail reads them. The menu labels ("Refused?", "Work")
 *  are tuned for a crowded header, not for a breadcrumb. */
const GROUP_LABEL: Record<string, string> = {
  '/immigration-programs': 'Canada PR',
  '/work-permits': 'Work permits',
  '/study-in-canada': 'Study in Canada',
  '/family-sponsorship': 'Family sponsorship',
  '/visitor-visa': 'Visit Canada',
  '/canada-visa-refused': 'Visa refusals',
  '/tools': 'Free tools',
  '/about': 'About',
};

/** Hub pages whose menu label is a sentence ("How the PNP works"). */
const PAGE_LABEL: Record<string, string> = {
  '/express-entry': 'Express Entry',
  '/pnp': 'Provincial Nominee Programs',
  '/family-sponsorship': 'Family sponsorship',
  '/canada-visa-refused': 'Visa refusals',
  '/canada-visit-visa': 'Canada visitor visa',
  '/usa': 'United States',
  '/uk': 'United Kingdom',
  '/europe': 'Europe',
  '/privacy': 'Privacy',
  '/terms': 'Terms',
  '/canada-immigration-from-pakistan': 'Immigrate from Pakistan',
  '/immigration-consultant-lahore': 'Lahore office',
  '/immigration-consultant-islamabad': 'Islamabad office',
  '/canadian-immigration-lawyer-pakistan': 'Choosing a lawyer',
};

const ROUTE_SET = new Set(ROUTES.map((r) => r.path));

/** Blog posts aren't in the menu, so their crumb label comes from lib/blog.ts. */
const POST_LABEL: Record<string, string> = Object.fromEntries(POSTS.map((p) => [`/blog/${p.slug}`, p.short]));

const live = (i: NavItem) => i.status === 'live';

function itemLabel(path: string): string | undefined {
  for (const g of NAV)
    for (const c of g.columns)
      for (const i of c.items) if (i.href === path && live(i)) return i.label;
  return undefined;
}

function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.length <= 3 && w !== 'and' ? w.toUpperCase() : w[0]!.toUpperCase() + w.slice(1)))
    .join(' ');
}

export function labelFor(path: string): string {
  return PAGE_LABEL[path] ?? POST_LABEL[path] ?? GROUP_LABEL[path] ?? itemLabel(path) ?? titleCase(path.split('/').pop() ?? '');
}

/** The menu group a page belongs to. A page listed in two groups (Super Visa is
 *  under Visit AND Family) goes to the group whose landing URL prefixes it. */
export function groupFor(path: string): NavGroup | undefined {
  const inGroup = (g: NavGroup) =>
    g.status === 'live' && (g.href === path || g.columns.some((c) => c.items.some((i) => i.href === path && live(i))));
  const groups = NAV.filter(inGroup);
  return groups.find((g) => g.href && path.startsWith(`${g.href}/`)) ?? groups[0];
}

/** Home → section → (parent hub) → this page. Only links to pages that exist. */
export function trailFor(path: string): Crumb[] {
  if (path === '/') return [];
  const crumbs: Crumb[] = [{ href: '/', label: 'Home' }];
  const group = groupFor(path);
  if (group?.href && group.href !== path) {
    crumbs.push({ href: group.href, label: GROUP_LABEL[group.href] ?? group.label });
  }
  const parent = path.slice(0, path.lastIndexOf('/'));
  if (parent && parent !== group?.href && ROUTE_SET.has(parent)) {
    crumbs.push({ href: parent, label: labelFor(parent) });
  }
  crumbs.push({ href: path, label: labelFor(path) });
  return crumbs;
}

/** Other live pages in the same menu group — same column first, then the rest. */
export function relatedFor(path: string, max = 8): { group: string; items: NavItem[] } | null {
  const group = groupFor(path);
  if (!group) return null;
  const own = group.columns.find((c) => c.items.some((i) => i.href === path));
  const ordered = [...(own?.items ?? []), ...group.columns.flatMap((c) => c.items)];
  const seen = new Set<string>([path]);
  const items = ordered.filter((i) => live(i) && !seen.has(i.href) && (seen.add(i.href), true)).slice(0, max);
  if (items.length < 2) return null;
  return { group: group.href ? (GROUP_LABEL[group.href] ?? group.label) : group.label, items };
}
