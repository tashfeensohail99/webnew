import Link from 'next/link';
import { founder } from '@/lib/site';
import { SocialIcon } from '@/components/SocialIcon';

/**
 * The founder's portrait, framed — on the homepage and the About page.
 *
 * Every fact here comes from `founder` in lib/site.ts (name, title, office),
 * as the firm confirmed it. The copy around it describes how the FIRM works —
 * things already stated across the site — and puts no words in his mouth.
 *
 * The photo is served as plain responsive JPEGs (480/720/960w) rather than
 * through next/image: there is no image optimiser on the server, and a
 * portrait this size doesn't need one.
 */
export function FounderFeature({ eyebrow = 'The name on the door' }: { eyebrow?: string }) {
  const { photo } = founder;
  const src = (w: number) => `${photo.stem}-${w}.jpg`;

  return (
    <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
      {/* ── Portrait ─────────────────────────────────────────────── */}
      {/* On phones the figure is 1rem narrower than the column so the offset
          frame (and its halo) stays inside the gutter — no sideways scroll. */}
      <figure className="relative mr-auto w-[calc(100%-1rem)] max-w-sm sm:mx-auto sm:w-full sm:max-w-md lg:col-span-5 lg:max-w-none">
        {/* Gold halo + offset frame: the "glorify" — depth without effects
            that cost anything to render. */}
        <div aria-hidden="true" className="absolute -inset-3 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(195,161,92,0.35),transparent)] blur-2xl sm:-inset-6" />
        <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] border-2 border-gold-500/70 sm:translate-x-4 sm:translate-y-4" />
        <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-25px_rgba(8,19,32,0.55)] ring-1 ring-black/5">
          <img
            src={src(720)}
            srcSet={photo.widths.map((w) => `${src(w)} ${w}w`).join(', ')}
            sizes="(min-width: 1024px) 440px, (min-width: 640px) 448px, 92vw"
            width={photo.width}
            height={photo.height}
            alt={`${founder.name}, ${founder.title} of Tashfeen Immigration Solutions, at the firm’s ${founder.office} office`}
            loading="lazy"
            decoding="async"
            className="block aspect-[3/4] w-full object-cover"
          />
          {/* Fade so the name plate reads on any part of the photo. */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#081320]/85 to-transparent" />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0d1b2b] shadow-sm backdrop-blur">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 text-[#a8873f]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {founder.office} office
          </span>
          <figcaption className="absolute inset-x-5 bottom-5 text-white">
            <span className="block font-serif text-2xl leading-tight">{founder.name}</span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-[#e4cd92]">
              {founder.title}
            </span>
          </figcaption>
        </div>
      </figure>

      {/* ── Words ───────────────────────────────────────────────── */}
      <div className="lg:col-span-7">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-2 mt-4 text-balance">
          A firm with a <span className="text-gold-600">name</span> — and a face — you can check
        </h2>
        <p className="lede mt-6">
          Tashfeen Immigration Solutions carries its founder’s name, {founder.name} — so every file
          the firm takes on carries it too.
        </p>
        <p className="mt-4 text-ink-600 text-pretty">
          In a market that has learned to distrust anonymous agents, that is the point: a real
          person, a real office, and a way of working you can hold us to. A qualified lawyer reads
          your case. You get a written summary of where you stand before any money is discussed. And
          if the honest answer is “don’t apply”, that is what you hear.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            ['Real offices', 'Lahore, Islamabad & Mississauga'],
            ['Lawyer-led', 'Every case read by counsel'],
            ['In writing', 'Where you stand, before fees'],
          ].map(([h, s]) => (
            <li key={h} className="rounded-2xl border border-rule bg-paper px-4 py-4">
              <span className="block font-serif text-lg">{h}</span>
              <span className="mt-0.5 block text-sm text-ink-600">{s}</span>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href="/book-consultation" className="btn btn-gold">
            Talk to a lawyer — free
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href={founder.linkedin}
            rel="me noopener"
            target="_blank"
            className="tap inline-flex items-center gap-2 font-semibold text-ink-800 link-underline"
          >
            <SocialIcon name="linkedin" className="h-6 w-6" />
            Connect on LinkedIn
          </a>
          <Link href="/immigration-consultant-lahore" className="tap font-semibold text-accent-500 link-underline">
            Visit the Lahore office →
          </Link>
        </div>
      </div>
    </div>
  );
}
