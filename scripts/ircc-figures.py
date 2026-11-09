"""Builds lib/ircc-pakistan.json from IRCC's open-data spreadsheets. Standard library only.

Run this by hand after IRCC publishes new monthly tables, then read the diff before
committing: the page prints whatever this file holds.

  1. Download these five files into an empty folder, from
     https://www.ircc.canada.ca/opendata-donneesouvertes/data/
       EN_ODP-PR-Citz.xlsx
       EN_ODP-PR-CitzImmCat.xlsx
       EN_ODP-TR-Study-IS_CITZ_sign_date.xlsx
       EN_ODP-TR-Work-IMP CITZ.xlsx
       EN_ODP-TR-Work-TFWP CITZ.xlsx
  2. python -I scripts/ircc-figures.py <that folder>

IRCC rounds every figure to the nearest 5 and shows anything from 0 to 5 as "--",
which is stored here as null. Annual totals are taken from IRCC's own total column,
never added up from months, because rounding and repeat permit holders make the two
differ. The script stops rather than write a file that fails its checks.
"""
import datetime
import json
import pathlib
import re
import sys
import xml.etree.ElementTree as ET
import zipfile

M = '{http://schemas.openxmlformats.org/spreadsheetml/2006/main}'
RID = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id'
MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
COUNTRY = 'Pakistan'
FILES = {
    'pr': 'EN_ODP-PR-Citz.xlsx',
    'study': 'EN_ODP-TR-Study-IS_CITZ_sign_date.xlsx',
    'imp': 'EN_ODP-TR-Work-IMP CITZ.xlsx',
    'tfwp': 'EN_ODP-TR-Work-TFWP CITZ.xlsx',
}
CATEGORY_FILE = 'EN_ODP-PR-CitzImmCat.xlsx'
GROUPS = {
    'Economic - Total': 'economic',
    'Sponsored Family - Total': 'family',
    'Resettled Refugee & Protected Person in Canada - Total': 'refugee',
    'All Other Immigration - Total': 'other',
}
DETAIL = {
    'Skilled Worker': 'skilledWorker',
    'Canadian Experience': 'canadianExperience',
    'Provincial Nominee Program': 'provincialNominee',
    'Sponsored Spouse or Partner': 'spouse',
    'Sponsored Parent or Grandparent': 'parent',
}


def column(ref):
    n = 0
    for ch in re.match(r'[A-Z]+', ref).group(0):
        n = n * 26 + ord(ch) - 64
    return n - 1


def read_sheet(path):
    with zipfile.ZipFile(path) as z:
        shared = []
        if 'xl/sharedStrings.xml' in z.namelist():
            for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall(M + 'si'):
                shared.append(''.join(t.text or '' for t in si.iter(M + 't')))
        rels = {r.get('Id'): r.get('Target') for r in ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))}
        first = ET.fromstring(z.read('xl/workbook.xml')).find(M + 'sheets')[0]
        target = rels[first.get(RID)].lstrip('/')
        target = target if target.startswith('xl/') else 'xl/' + target
        grid = []
        for r in ET.fromstring(z.read(target)).find(M + 'sheetData'):
            row = {}
            for c in r.findall(M + 'c'):
                t, v = c.get('t'), c.find(M + 'v')
                if t == 'inlineStr':
                    row[column(c.get('r'))] = ''.join(x.text or '' for x in c.iter(M + 't'))
                elif v is not None:
                    row[column(c.get('r'))] = shared[int(v.text)] if t == 's' else v.text
            grid.append(row)
    return grid


def number(cell):
    """A cell as an integer, or None where IRCC shows "--"."""
    text = str(cell if cell is not None else '').replace(',', '').strip()
    if text == '--':
        return None
    if not re.fullmatch(r'\d+(\.0)?', text):
        raise SystemExit(f'Unexpected value in a data cell: {cell!r}')
    return int(float(text))


def columns(grid):
    """Maps every data column to (year, month) or (year, 'total') from the three header rows."""
    year, out = None, {}
    for col in range(max(max(r) for r in grid[2:5] if r) + 1):
        if re.fullmatch(r'\d{4}', str(grid[2].get(col, '')).strip()):
            year = str(grid[2][col]).strip()
        total = re.fullmatch(r'(\d{4}) Total', str(grid[3].get(col, '')).strip())
        month = str(grid[4].get(col, '')).strip()
        if total:
            out[col] = (total.group(1), 'total')
        elif month in MONTHS and year:
            out[col] = (year, month)
    return out


def series_from(row, cols):
    totals, months = {}, {}
    for col, (year, what) in cols.items():
        if col not in row:
            continue
        if what == 'total':
            totals[year] = number(row[col])
        else:
            months.setdefault(year, {})[what] = number(row[col])
    return {'totals': totals, 'months': months}


def source_date(grid):
    for row in reversed(grid):
        for cell in row.values():
            m = re.search(r'Source: IRCC, (\w+ \d{1,2}, \d{4})', str(cell))
            if m:
                return datetime.datetime.strptime(m.group(1), '%B %d, %Y').date().isoformat()
    raise SystemExit('No source date found')


def main():
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    folder = pathlib.Path(sys.argv[1])
    out = {'series': {}, 'groups': {}, 'detail': {}}
    dates = set()

    for key, name in FILES.items():
        grid = read_sheet(folder / name)
        cols = columns(grid)
        rows = [r for r in grid[5:] if str(r.get(0, '')).strip() == COUNTRY]
        if len(rows) != 1:
            raise SystemExit(f'{name}: expected one {COUNTRY} row, found {len(rows)}')
        out['series'][key] = series_from(rows[0], cols)
        dates.add(source_date(grid))

    grid = read_sheet(folder / CATEGORY_FILE)
    cols = columns(grid)
    dates.add(source_date(grid))
    end = next((i for i, r in enumerate(grid) if str(r.get(0, '')).strip() == f'{COUNTRY} - Total'), None)
    if end is None:
        raise SystemExit(f'{CATEGORY_FILE}: no {COUNTRY} block')
    start = end
    while start > 5 and not str(grid[start - 1].get(0, '')).strip().endswith(' - Total'):
        start -= 1
    block_total = series_from(grid[end], cols)['totals']
    for r in grid[start:end]:
        group, detail = str(r.get(1, '')).strip(), str(r.get(3, '')).strip()
        if group in GROUPS:
            out['groups'][GROUPS[group]] = series_from(r, cols)['totals']
        if detail in DETAIL:
            out['detail'][DETAIL[detail]] = series_from(r, cols)['totals']

    # Checks. Any failure stops the run and leaves the existing file alone.
    if len(dates) != 1:
        raise SystemExit(f'Files come from different releases: {sorted(dates)}')
    if set(out['groups']) != set(GROUPS.values()) or set(out['detail']) != set(DETAIL.values()):
        raise SystemExit('A permanent-resident category is missing')
    pr = out['series']['pr']
    if block_total != pr['totals']:
        raise SystemExit('The two permanent-resident files disagree on Pakistan totals')
    years = sorted(pr['totals'])
    latest = years[-1]
    covered = [m for m in MONTHS if m in pr['months'][latest]]
    if covered != MONTHS[:len(covered)] or not covered:
        raise SystemExit('The latest year does not run continuously from January')
    for key, s in out['series'].items():
        if sorted(s['totals']) != years:
            raise SystemExit(f'{key}: years differ from the permanent-resident file')
        for y in years:
            have = [v for v in s['months'][y].values() if v is not None]
            added, total = sum(have), s['totals'][y]
            if total is None:
                raise SystemExit(f'{key} {y}: no annual total')
            if y != latest and len(s['months'][y]) != 12:
                raise SystemExit(f'{key} {y}: expected 12 months')
            slack = 40 if key == 'pr' else max(120, added // 8)
            if abs(added - total) > slack:
                raise SystemExit(f'{key} {y}: months add to {added}, IRCC total is {total}')
    for y in years:
        parts = sum(g[y] or 0 for g in out['groups'].values())
        if abs(parts - pr['totals'][y]) > 25:
            raise SystemExit(f'{y}: category groups add to {parts}, total is {pr["totals"][y]}')

    out = {
        'country': COUNTRY,
        'ircc': dates.pop(),
        'read': datetime.date.today().isoformat(),
        'years': years,
        'latestYear': latest,
        'monthsInLatestYear': covered,
        **out,
    }
    target = pathlib.Path(__file__).resolve().parent.parent / 'lib' / 'ircc-pakistan.json'
    target.write_text(json.dumps(out, indent=1) + '\n', encoding='utf8')
    print('wrote', target.name, 'years', years[0], 'to', latest, 'months', covered[-1], 'IRCC date', out['ircc'])
    for key, s in out['series'].items():
        print(key, {y: s['totals'][y] for y in years[-4:]})
    print('groups', {k: {y: v[y] for y in years[-3:]} for k, v in out['groups'].items()})


main()
