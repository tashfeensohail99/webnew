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
        {/*
          Sourced, not assumed. Meta's WhatsApp Business Platform Cloud API terms (last
          updated 2 Apr 2026) state: "You are the Controller of Company Personal Data and
          Meta Platforms Ireland Limited is the Processor" — and define Company Personal
          Data to include phone numbers, message CONTENT, personal identifiers and message
          metadata. So the firm carries controller responsibility for everything a client
          sends over WhatsApp. Meta is not the backstop here; the firm is.
          https://www.facebook.com/legal/WhatsApp-Business-Platform-Cloud-API

          FOR COUNSEL: the Ireland-vs-Inc. split turns on where the contracting entity is
          "located" (US/Canada/Brazil ⇒ Meta Platforms, Inc.). The Mississauga office may
          change which Meta entity is processor. Also confirm whether any staff use the
          consumer WhatsApp Business App rather than the Cloud API — different terms, and
          this paragraph would not be true of it.
        */}
        <p className="mt-4 text-ink-600 text-pretty">
          One thing worth being straight about: under WhatsApp’s own business terms,{' '}
          <strong className="text-ink-900">we are responsible for that conversation, not Meta.</strong>{' '}
          Meta carries the messages; what happens to them afterwards is on us.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">What we will never ask you for here</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Your CNIC or passport, to book a meeting. No legitimate firm needs your identity documents
          before it has spoken to you, and if anyone asks for them up front — us included — that
          alone should give you pause.
        </p>

        {/*
          The honest version of the law, from research dated 2026-07-17:

          Pakistan has NO data protection statute in force. Drafts exist (2018, 2021, the
          May 2023 MoITT draft that reached the Senate); none passed. PECA 2016 is criminal
          law — s.16 punishes misuse of identity information, but it imposes no consent,
          security, retention, breach-notice or access duties on a business. So a Pakistani
          firm holding passports is, as a matter of statute, largely unregulated.

          That is a fact worth stating plainly rather than hiding, because the honest
          conclusion favours the firm: the binding standard here is CANADIAN. PIPEDA
          applies to commercial activity in Ontario (no substantially-similar provincial
          law covers it), and the Mississauga office is commercial activity.

          FOR COUNSEL — the UK GDPR question, researched to primary sources:

          Art. 3(2)(a) catches a non-UK firm whose processing relates to "the offering of
          goods or services... to data subjects in the United Kingdom" (read directly at
          legislation.gov.uk/eur/2016/679/article/3). The test is INTENT TO TARGET, not
          client nationality. On the documented factors — ICO's own internal territorial-
          scope note (FOI IC-327905-Y2Y5, released 5 Sep 2024) and EDPB Guidelines 3/2018 —
          the indicia of targeting are GBP pricing, .co.uk domains, UK-paid search, UK
          marketing, UK phone numbers, UK testimonials. This site has NONE of them, and
          English alone is explicitly weak (it is a business language of Pakistan, so it
          signals nothing about the UK). "Mere accessibility" of a website is expressly
          NOT enough.

          So the marketing indicia point AWAY from scope. What points toward it is that the
          firm knowingly and repeatedly serves real UK-resident clients — and no example in
          either guidance squarely addresses that middle case. GENUINE JUDGMENT CALL.

          Note the site's zero-tracking design also closes the Art. 3(2)(b) monitoring
          route: no analytics, no pixels, nothing observing UK visitors' behaviour. That
          hook cannot be triggered by a page that does not watch anybody.

          If in scope, Art. 27 requires a UK representative in writing. Its exemption is
          CONJUNCTIVE — occasional AND not large-scale Art. 9/Art. 10 data AND unlikely to
          result in a risk. Correction worth having: passports, CNICs, bank statements and
          education records are NOT Art. 9 special-category data (Art. 9(1) covers race,
          politics, religion, trade union, genetic, biometric-ID, health, sex life). So that
          limb does not disqualify us automatically. But "occasional" means outside the
          regular course of business — which ongoing casework plainly is not — so the
          exemption still looks hard to reach. Lawyer's call, not ours.

          Still genuinely open:
            • Confirm the PDP Bill has not passed between Mar and Jul 2026 (secondaries
              only; nobody read the Gazette).
            • Do our files hold Art. 9 data in substance — health, religion, sexual
              orientation surfacing in spousal/asylum matters — or Art. 10 criminal-
              conviction data via character/admissibility disclosures? Not the documents
              themselves, but what is inside them.
            • BE&OE / Protector of Emigrants duties: applies to licensed Overseas
              Employment Promoters (labour recruiters). If we are a pure visa/immigration
              advisory we are likely outside it entirely — but that turns on our actual
              service mix.
        */}
        <h2 className="mt-12 font-serif text-3xl text-balance">The law that applies to your documents</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Here is something most Pakistani firms will not tell you:{' '}
          <strong className="text-ink-900">
            Pakistan has no data protection law in force.
          </strong>{' '}
          A bill has been drafted, redrafted and shelved since 2018. The cybercrime act that does
          exist punishes people who steal your data — it says almost nothing about what a business
          holding your passport must do to look after it.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          So when a firm in this market tells you your documents are “fully protected under the law”,
          ask them which law. There generally isn’t one.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          We think the absence of a rule is not a reason to have no standard. Because we operate an
          office in Canada, Canadian federal privacy law reaches part of what we do — and rather than
          run two standards, we would rather hold the whole firm to the higher one.
        </p>
        <div className="mt-6 rounded border border-dashed border-rule p-5">
          <p className="text-sm text-ink-400">
            [Counsel to confirm and finalise: the exact scope of PIPEDA across the Pakistani offices,
            whether UK GDPR is engaged, and whether the commitment above is stated as a binding
            undertaking or a policy. Do not publish the sentence above until that is settled — it is
            a promise, and promises are enforceable.]
          </p>
        </div>

        <h2 className="mt-12 font-serif text-3xl text-balance">If you become a client</h2>
        <div className="mt-4 rounded border border-dashed border-rule p-5">
          <p className="text-sm text-ink-400">
            [To be written by counsel: what documents we hold, why, who inside the firm can see them,
            whether anything leaves Pakistan, and how to ask us for a copy or for deletion.]
          </p>
        </div>

        {/*
          Researched to primary sources 2026-07-17. The AML question is ANSWERED, not open:

          AMLA 2010 s.2(xxxiv) defines "reporting entity" as financial institutions +
          DNFBPs + anyone notified in the Gazette. The DNFBP list at s.2(xii) is closed,
          and the Federal Government's notification implementing the catch-all —
          S.R.O. (I)/2019, Finance Division, dated 23 Dec 2019, read directly at
          https://www.fmu.gov.pk/docs/DNFBP_Notification_Dec_23_2019_2.pdf — designates
          exactly four sectors: accountants, dealers in precious metals/stones, real estate
          agents, and lawyers. Immigration consultants are not there. So AMLA's retention
          duties (s.7(4): 10 years for STR/CTR records; s.7C: 5 years for CDD and
          transaction records) do NOT bind this firm.

          Conclusion: no Pakistani law mandates a retention period for these files.
          Retention is therefore a CHOICE, and the only real constraint is PIPEDA
          Principle 4.5 — keep only as long as necessary for the stated purpose.

          FOR COUNSEL, three live caveats:
            • The Gazette catch-all is open-ended. The Federal Government can notify this
              sector as a DNFBP at any time by a new SRO. This is a snapshot, not a
              guarantee. Re-check https://www.fmu.gov.pk/circulars-notifications/
            • The firm handles client money (fees, government charges). Charging your own
              fee is not the DNFBP "managing client money" limb — but the boundary is a
              lawyer's call, not ours.
            • Emigration Ordinance 1979 ss.17/18/19/22 ARE listed as AMLA Schedule-I
              PREDICATE offences. That is criminal exposure for individuals who commit
              emigration fraud — a different thing entirely from a reporting duty — but it
              is worth the firm understanding the distinction.

          Also verified and discarded: the "Punjab Travel Professionals Regulation Act 2012"
          that surfaces in searches is INDIAN Punjab legislation, not Pakistani. It does not
          apply. Do not let it back in.
        */}
        <h2 className="mt-12 font-serif text-3xl text-balance">How long we keep your documents</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          No Pakistani law tells us. There is no statute setting a retention period for immigration
          files, and the anti-money-laundering rules that force banks, jewellers and estate agents to
          keep records for years do not cover firms like ours.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          Which means how long we hold your passport scan is{' '}
          <strong className="text-ink-900">a decision we make, not one imposed on us</strong> — so it
          is a fair thing to hold us to.
        </p>
        <div className="mt-6 rounded border border-dashed border-rule p-5">
          <p className="text-sm text-ink-400">
            [Counsel to set the actual period and the deletion process. The research is done: the
            firm is not an AML reporting entity, so no mandatory period applies and this is a genuine
            choice — see the notes in this file. It should be justified against PIPEDA Principle 4.5
            (keep only as long as necessary), not picked to be convenient.]
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
