'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

/**
 * The hero globe, loaded only where it is shown.
 *
 * The globe is ~87 KB of inline SVG, and server-rendering it put it into the
 * homepage HTML twice (the markup plus Next's RSC payload) — on phones too,
 * where it is hidden. That weight sat in front of the headline and pushed
 * mobile LCP past 2.5 s. Now it is a separate chunk fetched only once the
 * viewport is lg (64rem) or wider, so a phone never downloads it.
 *
 * The wrapper in app/page.tsx is aspect-square, the same box the SVG fills,
 * so the globe fading in on desktop moves nothing (no CLS).
 */
const HeroCanada = dynamic(() => import('./HeroCanada').then((m) => m.HeroCanada), { ssr: false });

export function HeroGlobe() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 64rem)');
    const sync = () => setShow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return show ? (
    <div className="globe-in h-full w-full">
      <HeroCanada />
    </div>
  ) : null;
}
