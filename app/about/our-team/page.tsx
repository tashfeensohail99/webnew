import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, SectionHeading, Callout, Icon, CTASection } from '@/components/ui';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { lawyers, site, SERVICE, assertLawyersPublishable } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Lawyers',
  description:
    'The qualified lawyers who review every case at Tashfeen Immigration Solutions. Real names, real credentials — check them before you pay anyone.',
  alternates: { canonical: '/about/our-team' },
};

const CHECK_STEPS = [
  {
    title: 'Look our lawyers up',
    body: 'Ask us for the name and the licence number of whoever will handle your file. A real credential is on a public register you can search yourself.',
  },
  {
    title: 'Come to the office',
    body: 'We have real doors on two continents — Lahore, Islamabad and Mississauga. Walk in, sit down, and see who you are dealing with.',
  },
  {
    title: 'Verify before you pay',
    body: 'Do all of this before a single rupee changes hands. Any firm that won’t give you a name to check is telling you something.',
  },
];

export default function TeamPage() {
  // Fails the production build while any entry is still a placeholder. This page
  // makes the claim the whole site rests on — "we are real lawyers, go and check"
  // — so it is the one page that must never render an unverified credential.
  assertLawyersPublishable();

  const demoCount = lawyers.filter((l) => l.demo).length;

  return (
    <>
      <PageHero
        eyebrow="The people behind your file"
        title="The lawyers who will actually handle your case"
        subtitle="Most immigration firms in Pakistan won’t tell you who is working on your file. Here are ours, by name — so you can check us out before you trust us with anything."
      >
        <Link href="/book-consultation" className="btn btn-gold">
          Book a consultation
          <span aria-hidden="true">→</span>
        </Link>
        <WhatsAppCta
          variant="ghost"
          intent={{
            service: SERVICE.WORK_PERMIT,
            page: 'our-team',
            targetCountry: 'Canada',
            message: 'Hi, I’d like to know who would handle my case.',
          }}
        >
          Ask us who handles your file
        </WhatsAppCta>
      </PageHero>

      {/* ============================ THE ROSTER ============================ */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Our lawyers"
          title="Named counsel, not anonymous agents"
          subtitle="Every case here is read by a qualified lawyer. When their individual profiles are published, each one will carry a credential you can verify on a public register."
        />

        <div className="mt-12">
          {demoCount > 0 ? (
            <div className="mb-8 rounded-2xl border border-dashed border-gold-500 bg-gold-50 p-6 sm:p-7">
              <p className="font-serif text-xl text-ink-900 text-balance">
                Preview only — {demoCount} {demoCount === 1 ? 'entry is' : 'entries are'} unconfirmed.
              </p>
              <p className="mt-3 max-w-3xl text-sm text-ink-600 text-pretty">
                The names are real. The credentials are blank on purpose: nobody has invented one.
                Fill in <code className="font-mono text-xs">lawyers[]</code> in{' '}
                <code className="font-mono text-xs">lib/site.ts</code> — full name as it appears on
                the licence, the credential and its issuing body, what they practise, and where
                possible a public-register link. The production build refuses to run until every
                placeholder is gone, so this banner cannot reach the live site.
              </p>
            </div>
          ) : null}

          {lawyers.length === 0 ? (
            // Roster not yet published. A dignified public state — never fabricate a
            // name or credential to fill it. The trust section below carries the page.
            <Callout title="Individual profiles are on their way">
              <p className="text-pretty">
                We’re finalising the profiles of the qualified lawyers who review the cases here —
                name, qualification, and where you can independently verify each one. Until they’re
                up, the most important thing still holds:{' '}
                <strong className="text-ink-900">
                  ask us who will handle your file, and we’ll tell you, by name.
                </strong>
              </p>
              <p className="mt-5">
                <Link href="/book-consultation" className="font-semibold text-accent-500 link-underline">
                  Book a consultation and ask us directly →
                </Link>
              </p>
            </Callout>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lawyers.map((l, i) => (
                <li
                  key={`${l.name}-${i}`}
                  className={`card flex flex-col p-7 ${
                    l.demo ? 'border border-dashed border-gold-500 bg-gold-50/40' : ''
                  }`}
                >
                  {l.photo ? (
                    // Plain <img>: these are a handful of small, static portraits. next/image
                    // would add a runtime dependency and a loader for no measurable gain.
                    <img
                      src={l.photo}
                      alt={`${l.name}, ${l.credential}`}
                      width={96}
                      height={96}
                      className="mb-5 h-24 w-24 rounded-full object-cover ring-1 ring-gold-500/20"
                      loading="lazy"
                    />
                  ) : (
                    <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gold-50 text-gold-600 ring-1 ring-gold-500/20">
                      <Icon name="user" className="h-9 w-9" />
                    </div>
                  )}
                  <h3 className="font-serif text-xl">{l.name}</h3>

                  {/* A blank credential renders as an explicit gap. It must never read as
                      a qualification, and it must never be silently omitted — an empty
                      space under a lawyer's name looks like an oversight; this looks like
                      what it is. */}
                  {l.credential ? (
                    <p className="mt-1 text-sm font-semibold text-gold-600">{l.credential}</p>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-ink-400">
                      Credential not yet confirmed
                    </p>
                  )}

                  {l.practice ? (
                    <p className="mt-3 flex-1 text-ink-600 text-pretty">{l.practice}</p>
                  ) : (
                    <p className="mt-3 flex-1 text-sm text-ink-400 text-pretty">
                      Practice area to be supplied by the firm.
                    </p>
                  )}

                  {l.since ? (
                    <p className="mt-4 text-sm text-ink-400">Practising since {l.since}</p>
                  ) : null}
                  {l.verifyUrl ? (
                    <a
                      href={l.verifyUrl}
                      className="mt-4 inline-block text-sm font-semibold text-accent-500 link-underline"
                      rel="noopener nofollow"
                      target="_blank"
                    >
                      Verify on the public register →
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      {/* ========================= CHECK US BEFORE YOU PAY ========================= */}
      {/* The invitation to check us out. Only a real firm can afford to make it. */}
      <Section tone="alt">
        <SectionHeading
          eyebrow="The test of a real firm"
          title="Check us before you pay us"
          subtitle="You have almost certainly heard about someone losing their savings to an immigration agent. That fear is reasonable — and the answer to it is not a promise. It is a name you can look up."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {CHECK_STEPS.map((step, i) => (
            <li key={step.title} className="card flex flex-col p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-serif text-lg text-ink-950">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl">{step.title}</h3>
              <p className="mt-2 flex-1 text-ink-600 text-pretty">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Callout>
            <p className="text-pretty">
              Look our lawyers up. Come to the office. Ask us for the licence number and check it
              yourself. A named person on a public register is the one thing an anonymous agent can
              never offer you.
            </p>
            <p className="mt-5">
              <Link href="/book-consultation" className="font-semibold text-accent-500 link-underline">
                Book a consultation — PKR {site.consultFee.amount.toLocaleString()}, credited to your
                fee →
              </Link>
            </p>
          </Callout>
        </div>
      </Section>

      {/* =============================== CTA =============================== */}
      <CTASection
        eyebrow="Start with a conversation"
        title="Ask us who will handle your case"
        subtitle={`A paid consultation, PKR ${site.consultFee.amount.toLocaleString()}, credited to your fee if you go ahead — and an honest answer either way, from a lawyer, not a salesperson.`}
        page="our-team-cta"
        waMessage="Hi, I’d like to book a consultation and ask who would handle my case."
      />
    </>
  );
}
