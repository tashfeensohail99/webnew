import type { ReactNode } from 'react';

/**
 * Options side by side. A real table on tablets and up. On phones each row
 * stacks into a labelled block, because most visitors are on phones and a
 * sideways-scrolling table of sentences is hard to read.
 *
 * The roles are explicit because `display: block` removes a table's built-in
 * semantics in some browsers. Rule for content: restate what the page already
 * says. A table is not the place for a new fact or a fee.
 */
export function CompareTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  /** The first column heads the row labels. */
  columns: string[];
  rows: { label: ReactNode; cells: ReactNode[] }[];
}) {
  return (
    <div className="mt-8 rounded-2xl border border-rule bg-paper">
      <table role="table" className="block w-full text-left text-sm sm:table">
        <caption className="sr-only">{caption}</caption>
        <thead role="rowgroup" className="hidden border-b border-rule text-xs uppercase tracking-[0.12em] text-ink-500 sm:table-header-group">
          <tr role="row">
            {columns.map((c) => (
              <th key={c} role="columnheader" scope="col" className="px-4 py-3 font-semibold">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup" className="block divide-y divide-rule sm:table-row-group">
          {rows.map((r, i) => (
            <tr key={i} role="row" className="block px-4 py-4 sm:table-row sm:p-0">
              <th role="rowheader" scope="row" className="block font-semibold text-ink-900 sm:table-cell sm:px-4 sm:py-3 sm:align-top">
                {r.label}
              </th>
              {r.cells.map((c, j) => (
                <td key={j} role="cell" className="mt-3 block text-ink-600 sm:mt-0 sm:table-cell sm:px-4 sm:py-3 sm:align-top">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gold-600 sm:hidden">{columns[j + 1]}</span>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
