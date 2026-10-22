'use client';

import { useState } from 'react';

/**
 * A YouTube video that costs nothing until it is played.
 *
 * A real embed pulls ~1 MB of YouTube JavaScript on page load. This shows the
 * video's thumbnail with a play button and only swaps in the (privacy-enhanced,
 * youtube-nocookie) player when someone clicks — so the page stays fast and
 * the video is still one tap away. Pair it with VideoObject JSON-LD on the page.
 */
export function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#081320] shadow-[0_24px_48px_-24px_rgba(8,19,32,0.6)] ring-1 ring-black/10">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 block w-full"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-90 transition-opacity duration-200 group-hover:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff0000] shadow-lg transition-transform duration-200 group-hover:scale-105">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-7 w-7 fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
