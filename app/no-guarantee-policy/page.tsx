import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { SERVICE } from '@/lib/site';

/**
 * The most important page on the site, and the one every competitor refuses to
 * write.
 *
 * It is linked from the footer of every page — so it must exist, and it must say
 * the thing plainly. Every immigration regulator prohibits guaranteeing outcomes;
 * the entire Pakistani market advertises the opposite. Stating the rule clearly,
 * and telling people how to check anyone who breaks it, is simultaneously the
 * legally required position, the strongest trust signal available, and a filter
 * that pushes unqualified traffic away before it reaches the sales team.
 *
 * Attack the CLAIM, never a named firm — naming competitors invites defamation
 * exposure and breaches legal-marketing rules, and it isn't necessary: the reader
 * does the identification themselves.
 */
export const metadata: Metadata = {
  title: 'Can Anyone Guarantee You a Visa? No.',
  description:
    'No consultant can guarantee a visa — not us, not anyone. Why the promise is always false, and how to check anyone who makes it.',
  alternates: { canonical: '/no-guarantee-policy' },
};

export default function NoGuaranteePage() {
  return (
    <>
      <section className="border-b border-rule bg-ink-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <h1 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Can anyone guarantee you a visa?
          </h1>
          <p className="mt-5 text-3xl font-semibold">No. And that includes us.</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="font-serif text-3xl text-balance">Why the promise is always false</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          Your visa is decided by a visa officer employed by another country’s government. That
          officer does not know us, does not answer to us, and is not permitted to. There is no
          relationship, no arrangement, and no amount of money that changes their decision.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          So when someone guarantees you a visa, only two things can be true. Either they are lying
          to you to take your fee — or they are planning to do something dishonest with your
          application, which is far worse, because{' '}
          <strong className="text-ink-900">
            it is your name on it, and it is you who carries the consequences
          </strong>{' '}
          for years afterwards, not them.
        </p>

        <h2 className="mt-12 font-serif text-3xl text-balance">What we promise instead</h2>
        <dl className="mt-6 space-y-5">
          {[
            [
              'We will tell you if your case is weak.',
              'Before you pay us. A weak application filed today is a refusal on your record that follows you into every future application, to every country.',
            ],
            [
              'We will tell you not to apply, when that is the answer.',
              'Even though it earns us less than taking the case would.',
            ],
            [
              'We will show you the rule, not our opinion of it.',
              'If we tell you something is required, we will point you at the government page that says so, so you can read it yourself.',
            ],
            [
              'We will tell you what went wrong if it is refused.',
              'Including if the mistake was ours.',
            ],
          ].map(([term, def]) => (
            <div key={term} className="border-l-2 border-accent-500 pl-4">
              <dt className="font-semibold">{term}</dt>
              <dd className="mt-1 text-ink-600 text-pretty">{def}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 font-serif text-3xl text-balance">How to check anyone — including us</h2>
        <p className="mt-4 text-ink-600 text-pretty">
          You do not have to take our word for any of this. Ask any firm, including this one:
        </p>
        <ul className="mt-5 space-y-2 text-ink-600">
          {[
            'Who exactly will handle my file, and what is their name?',
            'What is their licence or registration number, and which body issued it?',
            'Where can I look that up myself?',
            'Can I come to your office?',
            'What is your fee, and what part of it goes to the government rather than to you?',
          ].map((q) => (
            <li key={q} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span className="text-pretty">{q}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-ink-600 text-pretty">
          A firm that answers all five plainly may still not be right for you. A firm that avoids any
          of them has told you what you need to know.
        </p>

        <div className="mt-12 rounded border border-rule bg-accent-50 p-6">
          <h2 className="font-serif text-2xl text-balance">The phrases worth walking away from</h2>
          <p className="mt-4 text-ink-600 text-pretty">
            “Guaranteed visa.” “100% success rate.” “Approval or your money back.” “We have contacts
            in the embassy.” “Pay after approval.” “We can get it done quietly.”
          </p>
          <p className="mt-4 text-ink-600 text-pretty">
            None of these are things an honest firm can offer. The last two are worth leaving the
            room over.
          </p>
        </div>

        <p className="mt-10 text-ink-600 text-pretty">
          If you have already paid someone who promised you a guarantee, it is worth speaking to
          somebody about where you stand — whether or not that somebody is us.
        </p>
      </article>

      <section className="border-t border-rule bg-paper-alt">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-serif text-3xl text-balance">Ask us the five questions</h2>
          <p className="mt-4 text-ink-600 text-pretty">
            We would rather you checked. Ask, and then go and verify the answers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCta
              intent={{
                service: SERVICE.WORK_PERMIT,
                page: 'no-guarantee-policy',
                message: 'Hi, I’d like to ask about your credentials and how you work.',
              }}
            >
              Ask us
            </WhatsAppCta>
            <Link
              href="/about/our-team"
              className="rounded border border-rule bg-paper px-5 py-3 font-semibold text-ink-800 hover:bg-paper-alt"
            >
              See who we are
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
