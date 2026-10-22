# tashfeenimmigrationsolutions.com

The public marketing site for **Tashfeen Immigration Solutions** — an international
immigration firm with offices in Lahore, Islamabad and Canada.

Next.js 15 (App Router) · React 19 · Tailwind 4 · TypeScript. Every page is
statically prerendered; there are no client components.

## Run it

```bash
npm install
cp .env.example .env      # then set NEXT_PUBLIC_WA_NUMBER
npm run dev               # http://localhost:3000
```

## Configuration

| Variable | Required | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_WA_NUMBER` | **yes** | WhatsApp Business number in E.164 digits, no `+` (e.g. `923001234567`). Every CTA opens it. |

**The production build fails without it — deliberately.** An unset value produces
`https://wa.me/?text=…`, a link that opens WhatsApp with no recipient. It looks
fine in review and silently loses every enquiry.

## How enquiries reach the CRM

Every CTA is a plain `<a href>` to `wa.me` — no chat widget, no script. It costs
0 bytes, survives ad blockers, and opens the app the audience already lives in.

Each link carries a ref token in the message body:

```
wa.me/92XXXXXXXXXX?text=Hi, I'd like … [Ref: WP-7K2M]
```

That token is the only thing that survives the hop from browser → Meta → our
webhook, which sees just the sender's number and the message text. The CRM parses
it on the first inbound, stamps `sourceChannel='website'` + `serviceInterest` +
`targetCountry`, then hands off to the existing round-robin. Without it, every
website lead is indistinguishable from cold WhatsApp traffic and the site looks
like it does nothing.

Token prefixes map to canonical CRM service codes (`lib/wa.ts`):
`WP-` work permit · `VV-` visit visa · `JR-` refusal/judicial review · `SV-` study.

> **Status, checked 2026-10-22 against the CRM repo (`tashfeensohail99/tafai`):**
> the webhook does **not** parse this token yet. A website WhatsApp chat lands in
> the CRM inbox as an ordinary `sourceChannel='whatsapp'` lead; the `[Ref: …]`
> text is only visible in its first message. The consultation form
> (`POST /public/leads/website`) is attributed correctly — source `WEBSITE`,
> round-robined to a sales agent.

## Where the facts live

`lib/site.ts` is the single source of truth for anything a customer could act on —
fees, offices, the lawyer roster. One place, so no two pages can contradict each
other. On a site where people make life decisions, a figure that drifts between
two pages is a liability, not a typo.

**Anything marked `TODO(tashfeen)` or `PLACEHOLDER` is a real fact only the firm
has. Do not guess them.** Currently outstanding: the lawyer roster, fee ranges,
timelines, Islamabad + Canada office addresses.

## Editorial rules

These are load-bearing, not style preferences:

- **Never promise or imply a visa outcome.** Decisions are made by visa officers.
  It is also an instant credibility failure with Google, which holds immigration
  content ("your money or your life") to a high bar.
- **No success-rate percentages.** Counts with denominators, or nothing.
- **Name the lawyer on every advice page.** In a market of anonymous agents, a
  checkable professional is the one thing competitors cannot copy.
- **Write in customer language, not programme codes.** Nobody searches "C11" or
  "EB2-NIW" — they search "work permit without a job offer".
- **Real photographs only.** A scam-wary audience spots stock imagery instantly.

## Redirects

`next.config.js` maps the handful of URLs worth keeping from the old WordPress
site. Every target must be a page that exists — a redirect into a 404 burns the
old URL's equity *and* dead-ends a real person. A `PENDING` list tracks entries
waiting on their target page.
