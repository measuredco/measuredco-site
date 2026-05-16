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
- [x] Phase 1 — data layer: read `content/` instead of Supabase
- [x] Phase 2 — static params for catch-all routes
- [x] Phase 3 — static export config (`output: 'export'`, images)
- [x] Phase 4 — feeds as build-time static files
- [ ] Phase 5 — remove editor/auth/Supabase code + deps
- [x] Phase 6 — translate redirects/rewrites → Cloudflare `_redirects`
- [x] Phase 7 — Cloudflare Pages deploy config
- [x] Phase 8 — parity verification vs production (local; CF preview pending)

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

### Phase 4 — Feeds  ✅ done

- API routes (`app/api/feed/*`) removed.
- Implemented as **static route handlers** at the real URLs:
  `app/feed.xml|feed.atom|feed.json/route.ts`, each `force-static`,
  reusing [lib/generate-feed.ts](lib/generate-feed.ts). Next emits them
  as static files in `out/` at `/feed.xml` etc. — no rewrites, no extra
  build script (deviation from original "prebuild script" idea; simpler
  and Next-native).
- Cloudflare serves `.xml`/`.json` with correct content-type by
  extension; `/feed.atom` needs an explicit `application/atom+xml`
  rule in `_headers` (Phase 7).

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

### Phase 7 — Cloudflare Pages + CI  ✅ done

**Deploy method: Cloudflare native Git integration** (decided). No CI
workflow or secrets in the repo — Cloudflare builds on push.

Cloudflare Pages → Create project → Connect to Git → this repo, then:

| Setting              | Value                          |
| -------------------- | ------------------------------ |
| Framework preset     | Next.js (Static HTML Export)   |
| Build command        | `pnpm build`                   |
| Build output dir     | `out`                          |
| Root directory       | `/`                            |
| Production branch    | `main` (after merge of `static`) |
| Env var              | `NODE_VERSION` = `24` (also pinned via `.nvmrc`) |

- pnpm auto-detected from `packageManager` + `pnpm-lock.yaml`; install
  command default (`pnpm install`).
- `public/_redirects` → `out/_redirects` (13 × 301).
- `public/_headers` → `out/_headers` (atom/json content-types).
- `trailingSlash`: Next default `false` (decision 5) — unchanged.
- No Vercel files in repo; removed `.vercel` from `.gitignore` and the
  `start` script (replaced with `preview` = `serve out`). Cleaned
  `.env.local.example` (no env vars needed).
- Local `.env.local` / `.env.production.local` still hold old Supabase
  keys (gitignored, unused) — delete locally at leisure.
- Post-cutover: in the Cloudflare/Vercel dashboards, point the
  `measured.co` domain at the Pages project and decommission Vercel.

### Phase 8 — Parity verification  ✅ done (local)

Verified static export vs live `https://measured.co`:

- `next build` clean → 47 pages + feeds + sitemap/robots/manifest.
- 7 routes (`/`, `/about`, `/work`, `/work/bt`, `/blog`, a blog post,
  `/contact`): title, description, canonical, OG tags (incl. Cloudinary
  OG images), `h1`, JSON-LD, nav — **all match**.
- Visible body text **byte-identical** on `/`, blog post, `/work/bt`.
- `feed.xml`: 26 items, identical title set vs prod.
- `sitemap.xml`: 34 URLs, identical set vs prod.
- `out/404.html` present; redirected slugs absent (so CF `_redirects`
  fires cleanly).

**Verified on the Cloudflare preview deployment**
(`b7d44136.measuredco-site.pages.dev`, branch `static`):

- [x] All 13 `_redirects` return 301 with correct targets (internal
      `/blog/inter-problems` + puckeditor.com externals); non-redirected
      control post 200.
- [x] `/feed.xml` `application/xml`, `/feed.atom` `application/atom+xml`,
      `/feed.json` `application/feed+json` (`_headers` applied).
- [x] All pages 200; `proposals/*` + unknown → 404; sitemap/robots/
      manifest correct content-types.
- [x] Body text **byte-identical** to production on `/`, blog post,
      `/work/bt` (served unaltered by Cloudflare edge).

### Deployment gotcha (resolved)

The Cloudflare Pages GitHub App is scoped to **specific repos** on the
`measuredco` org. Until `measuredco-site` was added to that scope, the
project showed "disconnected from your Git account" and **no PR/branch
preview builds ran** (the production branch could still build from stored
config — misleading). Fix: GitHub → org Settings → GitHub Apps →
Cloudflare Pages → Configure → add `measuredco-site`, then push to
re-trigger. Create the project via **Workers & Pages → Create → Pages →
Connect to Git** (not Direct Upload / Workers import).

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

## Cleanups / tech debt (non-blocking)

- **Double `f_auto,q_auto` in Cloudinary URLs.** `resolveSrc` in
  [components/Image](components/Image/index.tsx) already prepends
  `f_auto,q_auto`, and [lib/cloudinary-loader.ts](lib/cloudinary-loader.ts)
  prepends another `f_auto,q_<q>,c_limit,w_<width>` transform → URLs look
  like `/upload/f_auto,q_auto,c_limit,w_640/f_auto,q_auto/v.../img.jpg`.
  Valid chained Cloudinary transforms, output is visually identical, so
  left as-is to avoid changing `resolveSrc` mid-migration. Tidy later by
  either stripping a leading `f_auto,q_auto/` in the loader or dropping
  the additions from `resolveSrc` (the loader now owns sizing/format).

- **`getPosts` all-or-nothing failure.**
  [lib/get-posts.ts](lib/get-posts.ts) `return`s `undefined` for the whole
  list if *any* slug listed in `blog.json`'s Archive lacks a content file.
  Not triggered today (verified), but when hand-editing content: adding an
  Archive slug without its `content/blog/<slug>.json` will silently empty
  the feed **and** sitemap. Harden to skip-and-continue (`continue`
  instead of `return`) when convenient.

## Future / optional (out of scope for this migration)

If the residual Next client JS later proves undesirable, a *separate*
follow-up could shed Next from the browser entirely — e.g. replace
`next/link` with plain `<a>`, `next/image` with `<img>`/`<picture>`,
`next/font` with hand-written `@font-face`, drop the Next client runtime. This would move toward a framework-light static
site but carries behaviour/drift risk, so it is intentionally **not** part
of this migration. Revisit only if a concrete problem appears.

## Cutover order (do BEFORE merging)

Vercel is still the live origin and is Git-connected with production
branch `main`. Merging PR #237 would auto-rebuild `main` on Vercel — and
Vercel **ignores `_redirects`/`_headers`** (Cloudflare-only), so the live
site would lose the 13 redirects (→ 404) and `proposals/*` (→ 404) until
DNS moves. Build still succeeds; it's a correctness/SEO regression, not a
hard break.

**Freeze Vercel first (one toggle, removes all risk):**

1. Vercel project → Settings → Git → **disable/pause production
   deployments** (or disconnect the Git integration). Vercel keeps
   serving the current known-good old build, untouched.
2. Merge PR #237 → `main` (squash). Cloudflare rebuilds `main` = the
   migrated site, with `_redirects`/`_headers`, succeeds.
3. Verify `measuredco-site.pages.dev`.
4. Do the DNS cutover below.
5. Confirm live on Pages, then delete the project from Vercel.

Rollback at any point = revert the Namecheap records (TTL 300); Vercel's
old build is still intact until step 5.

## Domain cutover (DNS)

Current state (verified via DNS):

- DNS managed at **Namecheap** (`dns1/dns2.registrar-servers.com`) — not
  Cloudflare, not delegated to Vercel.
- Apex `measured.co` → `A 76.76.21.21` (Vercel apex IP), TTL 300.
- `www.measured.co` → `CNAME cname.vercel-dns.com` (Vercel), TTL ~1800.

Wrinkle: Pages provides a CNAME target (`measuredco-site.pages.dev`), not
an IP, and a CNAME is invalid at the apex. Options:

1. **Namecheap ALIAS at apex** (BasicDNS supports ALIAS) →
   `measuredco-site.pages.dev`; keep DNS at Namecheap. ✅ recommended,
   minimal blast radius — email/other records untouched.
2. Apex → `www` redirect, only `www` on Pages.
3. Move the `measured.co` zone to Cloudflare (change Namecheap
   nameservers): one-click apex+www + flattening/proxy, but a full DNS
   migration — must replicate MX/SPF/DKIM/TXT + subdomains or break email.

Safe sequence (Option 1):

1. Pages → Custom domains → add `measured.co` + `www.measured.co`;
   Cloudflare states the exact records and issues the cert on validation.
2. (Optional) lower `www` TTL to 300 a day ahead (apex already 300).
3. Namecheap: apex `A 76.76.21.21` → **ALIAS `measuredco-site.pages.dev`**;
   `www` CNAME → **`measuredco-site.pages.dev`**.
4. Verify domain serves from Pages (cert, pages, redirects).
5. Only then remove the domain from Vercel and decommission. Rollback =
   revert the two Namecheap records (fast, TTL 300).

## Rollback

`static` branch isolates this work; `main` remains the Puck/Supabase site
until cutover. Supabase data is backed up in `content/_puck-dump.json`.
