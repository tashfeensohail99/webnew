import Link from 'next/link';
import type { PakistanFact } from '@/lib/from-pakistan';

/**
 * "What is different when you apply from Pakistan?" — a short list of official,
 * Pakistan-specific facts (GEO plan G05). Each item links the official page it
 * comes from, and the whole list carries the date it was checked. The facts live
 * once, in lib/from-pakistan.tsx, and are recorded in lib/facts.ts.
 */
export function FromPakistan({ items, checked }: { items: PakistanFact[]; checked: string }) {
  return (
    <div className="mt-8 max-w-3xl">
      <ul className="divide-y divide-rule rounded-2xl border border-rule bg-paper">
        {items.map((f) => (
          <li key={f.key} className="p-5 sm:p-6">
            <p className="font-semibold text-ink-900">{f.title}</p>
            <p className="mt-2 text-ink-600 text-pretty">{f.text}</p>
            <p className="mt-2 text-sm text-ink-500">
              Source:{' '}
              {f.sources.map((s, i) => (
                <span key={s.href}>
                  {i ? ', ' : ''}
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent-500 link-underline">
                    {s.label}
                  </a>
                </span>
              ))}
              {f.more ? (
                <>
                  {' · '}
                  <Link href={f.more.href} className="font-semibold text-accent-500 link-underline">
                    {f.more.label}
                  </Link>
                </>
              ) : null}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink-500 text-pretty">
        Checked against the official pages on {checked}. Rules change, so follow the links before you rely on
        any of this.
      </p>
    </div>
  );
}
