// Writes resized WebP copies of every photo in public/assets and public/images
// to public/_r/<same path>.w<width>.webp, used by src/image-loader.ts.
// Also writes src/image-dims.json with each photo's real size.
// Originals are never modified. Runs before dev and build; skips up-to-date files.
import { readdir, stat, mkdir, writeFile } from 'node:fs/promises';
import { join, relative, dirname, extname } from 'node:path';
import sharp from 'sharp';
import { WIDTHS } from '../src/image-widths.mjs';

const ROOT = new URL('../public/', import.meta.url).pathname;
const OUT = join(ROOT, '_r');
const SOURCES = ['assets', 'images'];
const EXT = new Set(['.webp', '.jpg', '.jpeg', '.png']);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (EXT.has(extname(e.name).toLowerCase())) yield p;
  }
}

const mtime = (p) => stat(p).then((s) => s.mtimeMs, () => 0);

let made = 0, kept = 0;
const jobs = [];
const dims = {};
for (const s of SOURCES) {
  for await (const src of walk(join(ROOT, s))) {
    const rel = relative(ROOT, src);
    const md = await sharp(src).metadata();
    const turned = (md.orientation ?? 1) >= 5;
    dims['/' + rel] = turned ? [md.height, md.width] : [md.width, md.height];
    const base = join(OUT, rel.slice(0, -extname(rel).length));
    const srcTime = await mtime(src);
    for (const w of WIDTHS) {
      const out = `${base}.w${w}.webp`;
      if ((await mtime(out)) >= srcTime) { kept++; continue; }
      jobs.push(async () => {
        await mkdir(dirname(out), { recursive: true });
        await sharp(src).rotate().resize({ width: w, withoutEnlargement: true })
          .webp({ quality: 78, effort: 5 }).toFile(out);
        made++;
      });
    }
  }
}
// Small pool: the dev box has 2 cores.
const pool = Array.from({ length: 2 }, async () => { while (jobs.length) await jobs.shift()(); });
await Promise.all(pool);
// Real pixel sizes, so images reserve the right space before they load.
await writeFile(new URL('../src/image-dims.json', import.meta.url), JSON.stringify(dims, null, 1) + '\n');
console.log(`image variants: ${made} written, ${kept} up to date`);
