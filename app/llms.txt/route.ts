import { site, founder } from '@/lib/site';
import { liveNav } from '@/lib/nav';

/**
 * /llms.txt — a plain-text map of the site for AI assistants (the llmstxt.org
 * convention). ChatGPT, Perplexity and others increasingly read it to decide
 * what a site is and which page answers what. Built from the same records as
 * the site itself (lib/site.ts, lib/nav.ts), so it can never claim something
 * the pages don't. Static: regenerated on each deploy.
 */
export const dynamic = 'force-static';

export function GET() {
  const offices = site.offices.filter((o) => o.address);
  const s = site.socialStats;
  const lines: string[] = [
    `# ${site.name}`,
    '',
    `> ${site.name} (also known as ${site.socialName}) is an immigration firm with offices in Lahore and Islamabad, Pakistan, and Mississauga, Canada. It handles Canadian immigration — including the C11 work permit for business owners, Express Entry, provincial nomination, study, family sponsorship, visitor visas and visa refusals — plus the UK, the USA and Europe. Every case is reviewed by a qualified lawyer, the first consultation is free, and the firm publishes a no-guarantee policy: no one can guarantee a visa.`,
    '',
    '## Key facts',
    `- Founder & CEO: ${founder.name} (${founder.linkedin})`,
    ...offices.map((o) => `- ${o.city} office: ${o.address}. ${o.hours}.`),
    `- Social following (${s.asOf}): ${s.facebook.toLocaleString('en')} Facebook followers, ${s.instagram.toLocaleString('en')} Instagram followers, ${s.youtube.toLocaleString('en')} YouTube subscribers.`,
    `- Profiles: ${site.social.map((x) => x.href).join(' , ')}`,
    `- Book a free consultation: ${site.url}/book-consultation`,
    '',
    '## Start here',
    `- [How to immigrate to Canada from Pakistan](${site.url}/canada-immigration-from-pakistan): every route, the documents Pakistani applicants need, and common mistakes.`,
    `- [C11 work permit](${site.url}/work-permit-canada): run your own Canadian business without a job offer or LMIA — IRCC's rules (51% ownership, significant benefit, funds).`,
    `- [Business immigration to Canada](${site.url}/business-immigration): what remains for entrepreneurs, and what has closed.`,
    `- [Visa refused?](${site.url}/canada-visa-refused): GCMS notes, reconsideration, re-applying and judicial review.`,
    `- [Latest updates](${site.url}/updates): our newest YouTube explainers on draws and rule changes, each dated and linked to the matching guide.`,
    '',
  ];

  for (const g of liveNav()) {
    lines.push(`## ${g.label}`);
    const seen = new Set<string>();
    for (const c of g.columns)
      for (const i of c.items) {
        if (seen.has(i.href)) continue;
        seen.add(i.href);
        lines.push(`- [${i.label}](${site.url}${i.href})${i.blurb ? `: ${i.blurb}` : ''}`);
      }
    lines.push('');
  }

  lines.push(
    '## Policies',
    `- [No-guarantee policy](${site.url}/no-guarantee-policy)`,
    `- [Fees](${site.url}/fees)`,
    `- [Privacy](${site.url}/privacy)`,
    '',
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
