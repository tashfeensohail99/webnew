import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

/**
 * ⚠️ LAWYER REVIEW REQUIRED BEFORE LAUNCH.
 *
 * What follows is an accurate description of what THIS WEBSITE does, which is
 * almost nothing: it is statically generated, sets no cookies, runs no analytics,
 * ships no client JavaScript and has no forms. That is unusual and worth stating
 * plainly — it is verifiable by anyone who opens dev tools, and this audience has
 * good reason to be suspicious.
 *
 * What it does NOT cover, and a lawyer must supply:
 *   • how the firm handles client data once someone becomes a client (passports,
 *     CNICs, bank statements — the CRM holds all of it)
 *   • retention periods
 *   • the lawful basis / consent posture under Pakistani law (PECA and the draft
 *     data-protection regime), plus GDPR/UK-GDPR exposure via the firm's ~114 UK
 *     contacts and its Canadian office (PIPEDA)
 *   • the named contact for data requests
 *
 * Do not let a designer or a copywriter fill those in. A privacy notice that
 * describes handling the firm does not actually do is worse than none: it is a
 * written, dated misstatement about exactly the data this audience most fears
 * losing.
 */
export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What this website collects (almost nothing), and what happens to your information when you contact us.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-rule bg-ink-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h1 className="font-serif text-4xl leading-tight text-balance">Privacy</h1>
          <p className="mt-4 max-w-2xl text-ink-200 text-pretty">
            Short version: this website collects nothing about you. Here is the longer version.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14">
        {/* Build-time gate: this page must not ship until a lawyer has signed it off. */}
        <div className="mb-10 rounded border border-dashed border-accent-500 bg-accent-50 p-5">
          <p className="text-sm text-ink-600">
            <strong className="text-ink-900">Draft — not for launch.</strong> The website sections
            below are accurate. The sections covering how the firm handles client data, retention,
            lawful basis and data requests must be written by a lawyer before this site goes live —
            see the notes in <code className="font-mono text-xs">app/privacy/page.tsx</code>.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-balance">What this website collects</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Nothing. There are no forms on this site, no cookies, no analytics, no tracking pixels and
          no advertising scripts. Every page is a static file. We do not know you visited.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          You do not have to take our word for that — open your browser’s developer tools and look.
          It is one of the few claims on any immigration website you can check in ten seconds.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          Our hosting provider keeps ordinary server logs, as every web host does. We do not use them
          to identify anyone.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">When you message us on WhatsApp</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          The buttons on this site open WhatsApp on your own phone with a message ready to send. We
          receive nothing until <em>you</em> press send.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          When you do, WhatsApp delivers it to us — so it passes through Meta, under{' '}
          <a
            href="https://www.whatsapp.com/legal/privacy-policy"
            className="font-semibold text-accent-500 underline"
            rel="noopener nofollow"
            target="_blank"
          >
            WhatsApp’s own privacy policy
          </a>
          , not ours. We then receive your phone number, your WhatsApp display name, and whatever you
          wrote.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          Those messages carry a short reference code such as{' '}
          <code className="font-mono text-sm">[Ref: WP-7K2M]</code>. It identifies which page you
          came from — so the right person answers you, and so we know which pages are useful. It says
          nothing about <em>you</em>. It is not an identifier, and it is not shared with anyone.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          We keep those conversations so that whoever picks up your case can see what you have
          already told us, rather than making you repeat it.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">What we will never ask you for here</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Your CNIC or passport, to book a meeting. No legitimate firm needs your identity documents
          before it has spoken to you, and if anyone asks for them up front — us included — that
          alone should give you pause.
        </p>

        {/* TODO(tashfeen): the sections below need a lawyer. Do not invent them. */}
        <h2 className="mt-12 font-serif text-3xl text-balance">If you become a client</h2>
        <div className="mt-4 rounded border border-dashed border-rule p-5">
          <p className="text-sm text-ink-400">
            [To be written by counsel: what documents we hold, why, for how long, who inside the firm
            can see them, whether anything leaves Pakistan, and how to ask us for a copy or for
            deletion. Must address Pakistani law, and — because of the firm’s Canadian office and
            UK-based clients — PIPEDA and UK GDPR.]
          </p>
        </div>

        <h2 className="mt-12 font-serif text-3xl text-balance">Contact</h2>
        <div className="mt-4 rounded border border-dashed border-rule p-5">
          <p className="text-sm text-ink-400">
            [Named person and address for data questions and requests.]
          </p>
        </div>
        <p className="mt-6 text-ink-600 text-pretty">
          You can also simply come to an office and ask —{' '}
          <Link href="/about" className="font-semibold text-accent-500 underline">
            we have three
          </Link>
          .
        </p>

        <p className="mt-12 text-sm text-ink-400">
          {site.name}. This page describes the website at {site.url}.
        </p>
      </article>
    </>
  );
}
