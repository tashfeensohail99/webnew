import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

/**
 * ⚠️ LAWYER REVIEW REQUIRED BEFORE LAUNCH.
 *
 * These are terms for USING THE WEBSITE — what the pages are and are not. They
 * are deliberately NOT terms of engagement: what the firm owes a paying client,
 * fees, refunds, liability and termination belong in the signed agreement, drafted
 * by the firm's own lawyers. Do not let this page grow into that.
 *
 * The one clause that carries real weight here is the "this is not advice"
 * boundary. On a site whose whole strategy is publishing genuinely useful legal
 * information, the line between "useful information" and "advice you relied on"
 * is exactly where a complaint would land. Counsel must set that wording.
 */
export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for using this website, and the limits of what is published here.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-rule bg-ink-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h1 className="font-serif text-4xl leading-tight text-balance">Terms of use</h1>
          <p className="mt-4 max-w-2xl text-ink-200 text-pretty">
            What this website is, and — more importantly — what it isn’t.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14">
        <div className="mb-10 rounded border border-dashed border-accent-500 bg-accent-50 p-5">
          <p className="text-sm text-ink-600">
            <strong className="text-ink-900">Draft — not for launch.</strong> Requires review by a
            lawyer on the firm’s team before this site goes live. See{' '}
            <code className="font-mono text-xs">app/terms/page.tsx</code>.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-balance">This site is information, not advice</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Everything published here is general information about how immigration systems work. It is
          not advice about <em>your</em> case, because we have not seen your case.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          Immigration rules change constantly — sometimes in a single announcement, sometimes
          retroactively. We date our pages and we correct them when we learn something has changed.
          But <strong className="text-ink-900">a page you read today may have been overtaken by an
          announcement this morning</strong>, and no website can be a substitute for someone looking
          at your actual situation.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          Where we state a rule, we try to point you at the government source that says so. If the
          two ever disagree, the government is right and we are wrong — tell us, and we will fix the
          page.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">Reading this site does not make us your lawyers</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Nor does messaging us a question. We act for you only once we have both agreed the work in
          writing and you have engaged us. Until then, please do not send us anything confidential or
          time-critical and assume it is being acted on.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">What we don’t promise</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          No visa outcome. Not here, not anywhere, not ever — for the reasons set out in full on our{' '}
          <Link href="/no-guarantee-policy" className="font-semibold text-accent-500 underline">
            no-guarantee policy
          </Link>
          . If any page on this site ever reads as though it promises you an approval, that page is
          wrong and we want to know about it.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">Links to other sites</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          We link to government sources deliberately, so you can verify us. We do not control those
          sites and they may change without us noticing.
        </p>

        {/* TODO(tashfeen): counsel to supply. Deliberately left empty rather than filled
            with boilerplate copied from another firm — which is both a copyright problem
            and a set of promises nobody here has read. */}
        <h2 className="mt-12 font-serif text-3xl text-balance">The rest</h2>
        <div className="mt-4 rounded border border-dashed border-rule p-5">
          <p className="text-sm text-ink-400">
            [To be written by counsel: content ownership and permitted use, limitation of liability,
            governing law and jurisdiction — noting the firm operates in Pakistan and Canada — and
            how changes to these terms are notified.]
          </p>
        </div>

        <p className="mt-12 text-sm text-ink-400">
          {site.name}. These terms cover the website at {site.url}. They are not the terms of any
          engagement — that is a separate agreement you would sign.
        </p>
      </article>
    </>
  );
}
