/**
 * The old WordPress site is a cloned shop-theme demo carrying another firm's
 * branding alongside its theme's demo pages. Only the URLs that are genuinely
 * ours are worth their PageRank; everything else is left to 404 rather than
 * redirected — bulk-redirecting unrelated pages to the homepage reads to Google
 * as a soft 404 and transfers nothing. (Search Console, 2026-10-29: none of the
 * ~216 legacy 404s has an external link pointing at it.)
 *
 * [oldPath, newPath] — one hop each, no chains.
 *
 * EVERY TARGET MUST BE A PAGE THAT EXISTS. A redirect into a 404 is worse than
 * no redirect: it burns the old URL's equity and dead-ends a real person who
 * clicked a Google result. So entries point at the deepest page built SO FAR,
 * and get re-pointed to their spoke as each one ships — see PENDING below.
 */
const LEGACY_REDIRECTS = [
  ['/what-is-c11-entrepreneur-work-permit', '/work-permit-canada'],
  ['/the-canadian-c11-work-permit-everything-you-need-to-know', '/work-permit-canada'],
  ['/what-is-judicial-review', '/refusals/judicial-review'],
  ['/reasons-behind-visa-rejection', '/canada-visa-refused'],
  ['/canada-immigration', '/'],
  ['/canadian-programs', '/'],
  ['/migrate-to-canada-from-dubai-and-be-a-part-of-a-vibrant-culture', '/'],
  ['/migrate-to-canada-from-uae-in-2022', '/'],
  ['/best-immigration-lawyers-in-pakistan', '/canadian-immigration-lawyer-pakistan'],
  ['/enquiry-consultation', '/book-consultation'],
  ['/privacy-policy-2', '/privacy'],
  // The full slugs of these two posts aren't recorded anywhere (Search Console
  // truncates them), so match on the stem.
  ['/how-to-raise-your-express-entry-crs-score:rest(.*)', '/tools/crs-calculator'],
  ['/importance-of-crs-for-canadian-immigration:rest(.*)', '/tools/crs-calculator'],
];

/**
 * PENDING — add these back the moment their target page ships:
 *   /approved-cases                       → /success-stories
 *   /reasons-behind-visa-rejection        → a common-refusal-reasons spoke
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // NOTE: `output: 'standalone'` was removed. Railway builds this with Railpack
  // (there is no Dockerfile) and starts it with `next start`, which warns and
  // misbehaves under standalone output — the runtime served a stale build. If a
  // Docker image is reintroduced, re-add standalone AND set the start command to
  // `node .next/standalone/server.js`, copying public/ and .next/static in.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Keep the HTML off long-lived CDN caches. Next's default for fully static
  // pages is `s-maxage=31536000`, which Railway's edge honoured for a year and
  // made deploys appear not to land. Revalidate hourly, serve stale briefly.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
    ];
  },

  // Crawlers and older browsers request /favicon.ico directly, whatever the
  // <link rel="icon"> says. Serve the generated app/icon.tsx PNG there rather
  // than a 404 (which was also the console error Lighthouse flagged).
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/icon' }];
  },

  async redirects() {
    // permanent:true emits 308, not 301. Google treats the two identically for
    // ranking signals, and 308 additionally preserves the request method — so
    // this is correct, just not the status people expect to see.
    //
    // www → the main address. Both hosts are attached to the Railway service,
    // so without this the whole site answers twice. The canonical tags already
    // point at the main address; this makes visitors and links land there too.
    // Legacy paths requested on www go straight to their final page — still one
    // hop, per the rule above. Query strings are carried through by Next.
    const MAIN = 'https://tashfeenimmigrationsolutions.com';
    const WWW = [{ type: 'host', value: 'www.tashfeenimmigrationsolutions.com' }];
    return [
      ...LEGACY_REDIRECTS.map(([source, destination]) => ({
        source,
        has: WWW,
        destination: `${MAIN}${destination}`,
        permanent: true,
      })),
      { source: '/:path*', has: WWW, destination: `${MAIN}/:path*`, permanent: true },
      ...LEGACY_REDIRECTS.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
