# Galleries and night mode

- Gallery data lives in `src/data/projects/data.ts`. Each media item has `url` (day) and an optional `darkUrl` (night).
- In dark mode, `src/app/[locale]/images/[slug]/[id]/components.tsx` shows only items that have a `darkUrl`, and `ThemeImage` renders nothing when dark mode has no `darkSrc`. A gallery with no `darkUrl` at all is empty at night.
- Night photos live in `public/assets/images_night/<Gallery>/`. Night shots stored with the day photos (e.g. `ext_night_pergola_*`) use their own path as `darkUrl`.
- Commit 651f7b7 removed all Exterior `darkUrl`s; they were restored on 2026-10-31 by pairing the remaining night photos with day photos of the same subject.
- Living Room still has no night photos, so it is empty in dark mode.
