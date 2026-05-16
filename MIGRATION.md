# Migration: Puck + Supabase → static site

Goal: archive this site as a **static build**, removing Puck-as-CMS and
Supabase, while keeping the rendered output **functionally and visually
identical** for visitors. Content stays in the repo as JSON and is edited
directly in code. Deploy target moves from Vercel → Cloudflare Pages.

## Decided stack

- **Keep Next.js**, built as a **static export** (`output: 'export'`) —
  reuses every existing component + Puck `<Render>` unchanged, so visitor
  output is guaranteed identical. Not migrating to Astro/Eleventy.
- **Drop Vercel entirely.** The static `out/` artifact has no Node server,
  serverless functions, or image service. Removing middleware, API routes,
  image optimization, and redirects/rewrites (Phases 3–6) eliminates every
  Vercel-runtime dependency.
- **CI/CD**: GitHub Actions runs `next build`, deploys `out/` to Cloudflare
  Pages. (Alt: Cloudflare native Git integration — decide in Phase 7.)

### What "static" means here (3 runtimes)

1. **Build time** — Next runs in CI to compile + pre-render every page.
2. **Server** — none. No Node/serverless/image service; Cloudflare serves
   static files only. This is what removes the Vercel dependency.
3. **Browser** — pre-rendered HTML is hydrated by a Next-generated JS
   bundle (React + Next client runtime: `<Link>` nav, hydration). Client
   interactivity (e.g. `SiteHeader` nav) is preserved and behaves
   identically. This is *not* a Next-free site; it's a Next-built static
   site whose client JS still carries Next framework code — the deliberate
   trade for "guaranteed identical + minimal work".

## Guiding constraints

- Consumer-facing output must remain identical (same components, same data).
- Keep `@measured/puck` **only** as a render library (`<Render>`); drop the
  editor, auth, and Supabase entirely.
- Content source of truth = `content/*.json` (exported from prod Supabase).
- Manage occasional copy tweaks by editing the JSON files directly.

## Key architectural facts

- Pages already render via `<Render config={config} data={data} />`. Puck is
  not in the request path beyond rendering — low-risk migration.
- Supabase only provided page JSON keyed by `path`. Now exported locally.
- Fonts via `next/font` in [app/layout.tsx](app/layout.tsx): `localFont`
  (Inter, local `.woff2` in repo) + `Roboto_Mono` (`next/font/google`).
  Build-time only, self-hosted, static-export-safe. Caveat: the Google
  font is fetched **during the build**, so CI needs network access.
- Routes: `/` ([app/page.tsx](app/page.tsx)), `/blog` (list,
  [app/blog/page.tsx](app/blog/page.tsx)), `/blog/[...puckPath]`,
  catch-all `[...puckPath]`, plus editor/api/login (to be deleted).

## Status

- [x] Export prod Supabase `puck` table → `content/` (56 pages + raw dump)
- [ ] Phase 1 — data layer: read `content/` instead of Supabase
- [ ] Phase 2 — static params for catch-all routes
- [ ] Phase 3 — static export config (`output: 'export'`, images)
- [ ] Phase 4 — feeds as build-time static files
- [ ] Phase 5 — remove editor/auth/Supabase code + deps
- [ ] Phase 6 — translate redirects/rewrites → Cloudflare `_redirects`
- [ ] Phase 7 — Cloudflare Pages deploy config
- [ ] Phase 8 — parity verification vs production

## Phases

### Phase 1 — Data layer

- Rewrite [lib/get-page-res.ts](lib/get-page-res.ts) to read
  `content/<path>.json` from disk, returning the **same shape**
  (`{ status, data: { data } }`) so callers/`getPosts` are unchanged.
- Remove Supabase fetch/tagging logic.

### Phase 2 — Static params

- Add `generateStaticParams` to [app/[...puckPath]/page.tsx](app/[...puckPath]/page.tsx)
  and [app/blog/[...puckPath]/page.tsx](app/blog/[...puckPath]/page.tsx),
  enumerated from the `content/` tree.
- Exclude redirected `/blog/*` paths (Phase 6) and all `proposals/*`
  (dropped — decision 2). After deletion they won't be in `content/`,
  so enumeration from disk handles this automatically.

### Phase 3 — Static export

- `next.config.js`: add `output: 'export'`.
- Images: components use `next/image` with remote Cloudinary
  ([components/Image](components/Image/index.tsx),
  [components/Banner](components/Banner/index.tsx)). Use a **custom
  Cloudinary loader** (decision 1) so transformations/markup match prod.
- `redirects()`/`rewrites()` are unsupported under `output: 'export'` —
  move to Cloudflare (Phase 6).

### Phase 4 — Feeds

- API routes (`app/api/feed/*`) don't work with static export.
- Generate `feed.xml` / `feed.atom` / `feed.json` at build time into
  `public/` via a prebuild script using [lib/generate-feed.ts](lib/generate-feed.ts).
- Preserve current URLs (`/feed.xml`, `/feed.atom`, `/feed.json`).

### Phase 5 — Remove management layer

Delete: `app/edit/`, `app/api/puck/`, `app/login/`, `middleware.ts`,
`lib/supabase*.ts`, `lib/use-user.ts`, `lib/get-user-server.ts`.
Drop deps: `@supabase/*` (3), `@measured/puck` editor usage stays as Render.
Remove `@supabase/auth-ui-*`.

### Phase 6 — Redirects → Cloudflare `_redirects`

Translate from [next.config.js](next.config.js#L11-L87):
- `/blog/inter-problems` → `/blog/font-distribution-problems` (301)
- ~11 `/blog/puck-*` etc. → `https://puckeditor.com/...` (301)
- Feed rewrites `/feed.xml` → static file (handled in Phase 4)

Then delete the now-redundant content files for every redirected
`/blog/*` slug (decision 3) and all `content/proposals/*` (decision 2).

### Phase 7 — Cloudflare Pages + CI

- Build command `next build`, output dir `out/`.
- `public/_redirects` and optional `public/_headers`.
- `trailingSlash`: keep Next default `false` (decision 5) — no change.
- Remove any Vercel-specific config/files.
- CI: GitHub Actions workflow (`next build` → deploy `out/` to Cloudflare
  Pages) **or** Cloudflare native Git integration. → DECISION NEEDED.

### Phase 8 — Parity verification

- `next build` clean.
- Diff/spot-check rendered HTML for: `/`, `/about`, `/work`, `/work/bt`,
  `/blog`, a blog post, `/contact` vs production.
- Confirm `sitemap.xml`, `robots.txt`, `manifest`, feeds generated.

## Decisions (resolved)

1. **Image optimization** → custom **Cloudinary loader** (preserves
   transformations; most parity-safe). Not `unoptimized`.
2. **`proposals/puck-platform-recipe/*`** → **drop**. Don't build these
   pages; delete their `content/` files. Not in sitemap, so URLs 404 (no
   redirect — acceptable, never publicly linked).
3. **Redirected `/blog/*`** → **preserve the redirects** (Phase 6), but
   **delete the underlying content JSON** (301'd away, content unused).
4. **`content/_puck-dump.json`** → **commit** as an archive (no harm).
5. **`trailingSlash`** → **preserve current behaviour**. Current
   `next.config.js` sets nothing → Next default `trailingSlash: false`
   (no trailing slash). Keep default; no config change, no URL churn.

## Future / optional (out of scope for this migration)

If the residual Next client JS later proves undesirable, a *separate*
follow-up could shed Next from the browser entirely — e.g. replace
`next/link` with plain `<a>`, `next/image` with `<img>`/`<picture>`,
`next/font` with hand-written `@font-face`, drop the Next client runtime. This would move toward a framework-light static
site but carries behaviour/drift risk, so it is intentionally **not** part
of this migration. Revisit only if a concrete problem appears.

## Rollback

`static` branch isolates this work; `main` remains the Puck/Supabase site
until cutover. Supabase data is backed up in `content/_puck-dump.json`.
