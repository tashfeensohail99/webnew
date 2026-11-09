import SECTIONS from '@/lib/page-sections.json';

const sections: Record<string, { id: string; label: string }[]> = SECTIONS;

/**
 * A closed contents list under the hero of long guides. The median guide runs to
 * about 20 phone screens, and this lets a reader go straight to one part.
 *
 * Built by scripts/build-sections.mjs from the page's own section headings, so
 * it cannot drift from them. Server-rendered: no script, and the list reaches
 * only the pages that show one.
 */
export function OnThisPage({ path }: { path: string }) {
  const items = sections[path];
  if (!items?.length) return null;
  return (
    <nav aria-label="On this page" className="mx-auto max-w-6xl px-4 pt-8">
      <details className="rounded-2xl border border-rule bg-paper">
        <summary className="cursor-pointer px-5 py-3 text-sm font-semibold text-ink-900">On this page</summary>
        <ol className="grid gap-x-8 gap-y-1 px-5 pb-4 text-sm sm:grid-cols-2">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className="inline-flex min-h-6 items-center text-accent-500 link-underline">
                {i.label}
              </a>
            </li>
          ))}
        </ol>
      </details>
    </nav>
  );
}
