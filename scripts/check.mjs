// Fails if any local photo path referenced in src/ is missing its resized copies.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { WIDTHS } from '../src/image-widths.mjs';

const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : /\.(tsx?|json)$/.test(f) && files.push(p); });
walk('src');
const refs = new Set();
for (const f of files) for (const m of readFileSync(f, 'utf8').matchAll(/['"`](\/(?:assets|images)\/[^'"`]+\.(?:webp|jpe?g|png))['"`]/gi)) refs.add(m[1]);
const missing = [];
for (const r of refs) {
  if (!existsSync(join('public', r))) { missing.push(`original missing: ${r}`); continue; }
  for (const w of WIDTHS) { const v = join('public/_r', r.slice(0, -extname(r).length) + `.w${w}.webp`); if (!existsSync(v)) missing.push(`variant missing: ${v}`); }
}
console.log(`${refs.size} image paths checked`);
if (missing.length) { console.error(missing.join('\n')); process.exit(1); }

// With a running server (BASE=http://127.0.0.1:3317 bun run check), also check
// that key pages are 200 and every srcset/src URL on them resolves.
const BASE = process.env.BASE;
if (BASE) {
  const routes = ['/en', '/es', '/en/house', '/en/planos', '/en/images/exterior', '/es/images/dining-area'];
  let bad = 0;
  for (const r of routes) {
    const res = await fetch(BASE + r);
    const html = await res.text();
    if (res.status !== 200) { console.error(`${r}: HTTP ${res.status}`); bad++; continue; }
    const urls = new Set();
    for (const m of html.matchAll(/(?:srcSet|src)="([^"]+)"/g))
      for (const part of m[1].split(', ')) { const u = part.trim().split(' ')[0]; if (u.startsWith('/_r/')) urls.add(u); }
    for (const u of urls) { const s = (await fetch(BASE + u, { method: 'HEAD' })).status; if (s !== 200) { console.error(`${r}: ${u} -> ${s}`); bad++; } }
    console.log(`${r}: 200, ${urls.size} image URLs ok`);
  }
  if (bad) process.exit(1);
} else {
  console.log('Set BASE to a running server to also check pages and image URLs.');
}
