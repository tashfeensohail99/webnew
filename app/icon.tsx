import { ImageResponse } from 'next/og';
import { BrandMark } from '@/components/BrandMark';

/**
 * The site favicon — the gold "T" mark on brand navy.
 *
 * Google shows a site's favicon beside every mobile search result; before this
 * the site had none (/favicon.ico was a 404), so results carried a blank
 * placeholder. 192px: a multiple of 48, as Google asks, and large enough for
 * Android home screens. Generated at build time, no fonts needed. The mark is
 * centred with room to survive the circular crop Google applies.
 */
export const size = { width: 192, height: 192 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(<BrandMark px={118} />, size);
}
