import { site } from '@/lib/site';
import { SocialIcon, type SocialName } from '@/components/SocialIcon';

/**
 * "890K+ people follow us" — the firm's real social reach, on the homepage.
 *
 * Numbers come from `site.socialStats` (read off the public profiles, dated);
 * the headline total is the sum of the counted platforms, rounded DOWN so it
 * is never an overstatement. TikTok is linked without a number because its
 * count could not be read — a guessed figure would be a claim we can't back.
 */
const compact = (n: number) =>
  new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: n < 100_000 ? 1 : 0 }).format(n);

export function SocialProof() {
  const s = site.socialStats;
  const total = s.facebook + s.instagram + s.youtube;
  const headline = `${Math.floor(total / 10_000) * 10}K+`; // 892,520 -> "890K+"

  const href = (icon: SocialName) => site.social.find((x) => x.icon === icon)?.href ?? '#';
  const tiles: { icon: SocialName; label: string; count?: number; noun: string }[] = [
    { icon: 'facebook', label: 'Facebook', count: s.facebook, noun: 'followers' },
    { icon: 'instagram', label: 'Instagram', count: s.instagram, noun: 'followers' },
    { icon: 'youtube', label: 'YouTube', count: s.youtube, noun: 'subscribers' },
    { icon: 'tiktok', label: 'TikTok', noun: 'Follow us' },
  ];

  return (
    <section aria-labelledby="social-proof-heading" className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-14">
        <div className="max-w-md">
          <p className="eyebrow">Our community</p>
          <h2 id="social-proof-heading" className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-5xl">
            <span className="text-gold-600">{headline}</span> people follow our updates
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Daily immigration news, draw results and explainers — and the questions people actually
            ask us — across Facebook, Instagram, YouTube and TikTok.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-0 lg:w-[36rem] lg:shrink-0">
          {tiles.map((t) => (
            <li key={t.icon}>
              <a
                href={href(t.icon)}
                rel="me noopener"
                target="_blank"
                className="card group flex h-full flex-col items-start p-5 transition-transform hover:-translate-y-0.5"
              >
                <SocialIcon name={t.icon} className="h-10 w-10" />
                <span className="mt-4 font-serif text-3xl leading-none">
                  {t.count ? compact(t.count) : '—'}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {t.count ? `${t.label} ${t.noun}` : `${t.noun} on ${t.label}`}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-6 text-xs text-ink-400">
        Counts from our public profiles, {s.asOf}.
      </p>
    </section>
  );
}
