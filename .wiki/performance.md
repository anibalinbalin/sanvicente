# Load speed

How the site stays fast. Measured 2026-11-02 with Lighthouse mobile at night (dark theme), home page:
production before 41 (10.6 MB, LCP 18.4 s); after 97 (1.06 MB, LCP 2.2 s). Gallery `/en/images/exterior`: 25 MB, LCP 82.6 s -> 608 KB, LCP 3.3 s, CLS 0.
Reference point: justinschueler.com scored 94 under the same test.

## Static pages
- Every `[locale]` layout and page calls `setRequestLocale(locale)`. Without it next-intl reads request headers and the whole site renders per request (it did until 2026-11-02: every route was a Vercel cache MISS, cold TTFB about 1.9 s).
- `images/[slug]` has `generateStaticParams` for every gallery. Only `images/[slug]/[id]` renders on demand.
- The footer weather fetch revalidates every 60 s, so pages are ISR (`s-maxage=60`), still served from cache.
- A component that calls hooks (`useTranslations`) cannot be `async`; unwrap `params` with `React.use()` there (home page).

## Images
- `scripts/build-image-variants.mjs` (run by `dev` and `build`) writes WebP copies at 640/1080/1920 wide to `public/_r/` and real pixel sizes to `src/image-dims.json`. Both are gitignored and rebuilt on every Vercel build (about 30 s clean). Originals are never touched.
- `src/image-loader.ts` is the Next custom loader: maps `/assets/...` and `/images/...` to the closest copy. It URL-encodes paths, because a raw space (e.g. `Dining area`) in `srcset` breaks the whole entry. Vercel's paid image optimizer is not used.
- Set `sizes` to the real rendered width; the content column is 700 px (`channel` token).
- `data.ts` `width`/`height` are not reliable (29 of 77 had the wrong ratio). `ThemeImage` uses `image-dims.json` instead.

## Day/night photos
- `ThemeImage` renders both versions, lazy, hidden by CSS on the `.light-theme`/`.dark-theme` class. Hidden lazy images are never downloaded, so a visitor fetches only one version. Above-the-fold photos pass `priority`, which becomes `fetchPriority="high"` (they can't be eager or preloaded without loading both).
- `src/app/_utils/helpers/theme-script.ts` runs in `<head>` before paint: in auto mode it computes Montevideo sunset with suncalc's formula (verified identical over a year) and stores the theme for next-themes. Without it, night visitors got day photos first and night photos only after hydration.

## Checking
- `bun run check`: every referenced image path has its copies. With `BASE=http://127.0.0.1:<port>` it also checks key pages return 200 and every image URL on them resolves.
- Lighthouse on this dev box: blocking time swings 150-2500 ms between runs (2 slow cores); compare LCP and bytes, not TBT.
