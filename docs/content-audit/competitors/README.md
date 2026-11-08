# Competitor research evidence (SEO Step 2)

Collected 8 November 2026. Nothing here changes the website.

| File | What it is | How far to trust it |
|---|---|---|
| `serp-2026-11-08.json` | Page-one results for 11 target searches on Google.com.pk | Observed: one location, one day. Not tracked rankings. |
| `links-2026-11-08.json` | The site's links from Search Console, plus public mentions of rivals | Own links verified. Rival link metrics unavailable. Mentions are not confirmed links. |
| `competitor-scan.json` | Home page and sitemap signals for 14 sites | Observed by script. Section counts match words in URL paths. Licence numbers and years are what each firm says about itself; none were checked against a regulator's register. |
| `competitor-pages.json` | One page per topic per site, structure only | Pages are auto-matched, so several are off-topic. The report uses only like-for-like pages. Internal link counts include menus. |

`competitor-scan.mjs`, `competitor-pages.mjs` and `serp-extract.js` regenerate the scans. Records of page structure and signals only, never page copy.

`ma-law.org.pk` appeared in results but could not be reached from this machine, so it has no scan.

To re-check: repeat the same 11 searches from a Pakistani connection with `&hl=en&gl=pk&pws=0`, and compare with Search Console for the same weeks.
