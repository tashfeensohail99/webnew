import Link from 'next/link';

const COPY = {
  general: {
    title: 'Not sure this route fits you?',
    body: 'Tell us your situation on the consultation form. It’s free, and you don’t have to decide anything.',
    cta: 'Book a consultation',
  },
  refusal: {
    title: 'Have a refusal letter in front of you?',
    body: 'Send it to us through the consultation form, and we’ll tell you what it says and which options look open.',
    cta: 'Have your refusal read',
  },
} as const;

/**
 * A prompt halfway down the longest guides, which otherwise go about 16 phone
 * screens without one. It points to the form because form enquiries are the ones
 * that become clients. It makes no claim about who will read the enquiry.
 */
export function MidPagePrompt({ kind = 'general' }: { kind?: keyof typeof COPY }) {
  const c = COPY[kind];
  return (
    <aside aria-label="Consultation" className="border-y border-rule bg-gold-500/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-serif text-xl text-ink-900 text-balance">{c.title}</p>
          <p className="mt-1 text-sm text-ink-600 text-pretty">{c.body}</p>
        </div>
        <Link href="/book-consultation" prefetch={false} className="btn btn-gold shrink-0 self-start sm:self-center">
          {c.cta}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}
