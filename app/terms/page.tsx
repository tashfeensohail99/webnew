import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Prose, CTASection } from '@/components/ui';
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
      <PageHero
        eyebrow="Terms of use"
        title="What this website is, and what it isn’t"
        subtitle="The limits of what we publish here — set out plainly, before you rely on any of it."
      />

      <Prose>
        {/* NOTE FOR THE FIRM (does not render): a lawyer should add the standard clauses
            (ownership, liability, governing law) before treating this as final. The core
            boundaries below are accurate and safe to publish. */}

        <h2>This site is information, not advice</h2>
        <p>
          Everything published here is general information about how immigration systems work. It is
          not advice about <em>your</em> case, because we have not seen your case.
        </p>
        <p>
          Immigration rules change constantly — sometimes in a single announcement, sometimes
          retroactively. We date our pages and we correct them when we learn something has changed.
          But <strong>a page you read today may have been overtaken by an announcement this
          morning</strong>, and no website can be a substitute for someone looking at your actual
          situation.
        </p>
        <p>
          Where we state a rule, we try to point you at the government source that says so. If the
          two ever disagree, the government is right and we are wrong — tell us, and we will fix the
          page.
        </p>

        <h2>Reading this site does not make us your lawyers</h2>
        <p>
          Nor does messaging us a question. We act for you only once we have both agreed the work in
          writing and you have engaged us. Until then, please do not send us anything confidential or
          time-critical and assume it is being acted on.
        </p>

        <h2>What we don’t promise</h2>
        <p>
          No visa outcome. Not here, not anywhere, not ever — for the reasons set out in full on our{' '}
          <Link href="/no-guarantee-policy">no-guarantee policy</Link>. If any page on this site ever
          reads as though it promises you an approval, that page is wrong and we want to know about
          it.
        </p>

        <h2>Links to other sites</h2>
        <p>
          We link to government sources deliberately, so you can verify us. We do not control those
          sites and they may change without us noticing.
        </p>

        {/* NOTE FOR THE FIRM (does not render): a lawyer should supply the standard clauses
            — content ownership, limitation of liability, governing law and jurisdiction
            (Pakistan and Canada), and how changes are notified. Left out deliberately rather
            than copied from another firm's site. */}
        <h2>Questions about these terms</h2>
        <p>
          We operate in Pakistan and Canada. If anything here is unclear, or you want to know how it
          applies to you, message us on WhatsApp and ask — we would rather explain it than have you
          guess.
        </p>

        <p className="text-sm text-ink-400">
          {site.name}. These terms cover the website at {site.url}. They are not the terms of any
          engagement — that is a separate agreement you would sign.
        </p>
      </Prose>

      <CTASection
        eyebrow="Ask before you assume"
        title="Not sure how any of this applies to you?"
        subtitle="Message us and ask. We would rather explain it than have you guess — and we’ll tell you honestly where you stand before you engage us."
        page="terms-cta"
        waMessage="Hi, I have a question about your terms of use."
      />
    </>
  );
}
