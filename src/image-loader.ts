'use client';

import { WIDTHS } from './image-widths.mjs';

// Maps a local photo to the pre-built copy closest to the requested width
// (see scripts/build-image-variants.mjs). Anything else is served as-is.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  const m = src.match(/^(\/(?:assets|images)\/.+)\.(?:webp|jpe?g|png)$/i);
  if (!m) return src;
  const w = WIDTHS.find((x) => x >= width) ?? WIDTHS[WIDTHS.length - 1];
  // Encode spaces etc.: a raw space inside srcset splits the URL in two.
  return encodeURI(`/_r${decodeURI(m[1])}.w${w}.webp`);
}
