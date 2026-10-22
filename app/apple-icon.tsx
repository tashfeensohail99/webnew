import { ImageResponse } from 'next/og';
import { BrandMark } from '@/components/BrandMark';

/** iOS home-screen icon (180×180, Apple's size). Same mark as the favicon. */
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(<BrandMark px={110} />, size);
}
