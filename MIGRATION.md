# Migration: Puck + Supabase → static Cloudflare Pages site

**Status: code complete and live on Cloudflare Pages; DNS cutover pending.**

The site is archived as a static Next export — no Puck CMS, no Supabase, no
Vercel runtime. Visitor output verified **byte-identical** to the old site.
Content is now managed by editing `content/*.json` directly and committing
to `main` (Cloudflare rebuilds).

## Done

- Prod Supabase `puck` table exported to committed `content/*.json`
  (+ `content/_puck-dump.json` raw archive). Pages render from disk via
  Puck `<Render>` — same components, same data.
- `next build` → static `out/` (`output: 'export'`); catch-all routes via
  `generateStaticParams`. Custom Cloudinary `next/image` loader (no Vercel
  image service).
- Feeds = `force-static` route handlers at `/feed.xml|atom|json`.
- Removed editor (`/edit`), `/api/puck`, `/login`, auth, `middleware.ts`,
  Supabase libs and `@supabase/*` deps.
- 13 × 301 redirects → `public/_redirects`; redirected `/blog/*` and
  `proposals/*` content deleted (proposals 404 by design). Content-type
  fixes in `public/_headers` (atom/json).
- PR #237 merged to `main`. Cloudflare Pages project `measuredco-site`
  builds `main` → `measuredco-site.pages.dev`, validated byte-identical to
  production (pages, redirects, headers, feeds, sitemap, 404s).
- Vercel frozen via Ignored Build Step `exit 0`; still serving
  `measured.co` (old build) until DNS moves.

## Remaining actions

### 1. DNS move + domain cutover — main blocker

Cloudflare Pages **requires the zone on Cloudflare DNS** (keeping DNS at
Namecheap is Enterprise-only "CNAME setup"). DNS must move. Email is Google
Workspace, so do this in **two phases** — email risk and web risk never
overlap.

**Phase A — move the zone, change nothing observable**

1. Add `measured.co` as a Cloudflare zone; let it auto-import, then **diff
   and manually add anything missed**. Must be present and exact:
   - `MX` ×5 — `aspmx.l.google.com`, `alt1`/`alt2.aspmx.l.google.com`,
     `aspmx2`/`aspmx3.googlemail.com`
   - `TXT @` SPF — `v=spf1 include:_spf.google.com ~all`
   - `TXT @` verifications — `google-site-verification=…`, `MS=ms19276944`,
     `openai-domain-verification=…`, `1password-site-verification=…`,
     `slack-domain-verification=…`
   - `TXT google._domainkey` — DKIM (`v=DKIM1; k=rsa; p=…`)
   - leave apex `A 76.76.21.21` and `www CNAME cname.vercel-dns.com` as-is
2. If DNSSEC is enabled at Namecheap, disable it there **before** the
   nameserver change (re-enable in Cloudflare afterward if wanted).
3. Switch nameservers Namecheap → Cloudflare. Nothing should change: site
   still on Vercel, email still flows. Verify, then continue.

**Phase B — swap web to Pages (within Cloudflare, reversible)**

4. Pages project → Custom domains → add `measured.co` **and**
   `www.measured.co`. Cloudflare swaps apex/www to proxied Pages targets.
5. Canonical host = **apex `measured.co`** (already what the app's
   `<link rel=canonical>`, OG `url`, sitemap, feeds emit — no app change).
   Add `www → apex` 301 via a Cloudflare Redirect Rule (now available with
   the zone on Cloudflare) **or** a `public/_redirects` line
   `https://www.measured.co/*  https://measured.co/:splat  301` placed
   **below** the existing `/blog/*` rules (so `www/blog/puck-*` reaches
   puckeditor.com in one hop).
6. Verify `measured.co` + `www` serve from Pages, cert active, redirects
   fire, body identical to old site.
7. Delete the Vercel project. Rollback before step 7 = revert the web
   records in Cloudflare (seconds), or nameservers back to Namecheap.

### 2. Cleanup / tech debt (non-blocking)

- **Double `f_auto,q_auto`** in Cloudinary URLs — both
  [components/Image](components/Image/index.tsx) `resolveSrc` and
  [lib/cloudinary-loader.ts](lib/cloudinary-loader.ts) prepend it. Valid
  chained transforms, visually identical. Tidy by stripping a leading
  `f_auto,q_auto/` in the loader, or dropping it from `resolveSrc`.
- **`getPosts` all-or-nothing** — [lib/get-posts.ts](lib/get-posts.ts)
  returns `undefined` for the whole list if any `blog.json` Archive slug
  lacks a content file → silently empties feed **and** sitemap. Harden to
  skip-and-continue. Matters when hand-editing content.
- Delete local `.env.local` / `.env.production.local` (dead Supabase keys).
- Delete the merged `static` branch (local + origin) once confirmed.

### 3. Optional follow-up (out of scope)

Shed remaining Next client JS (`next/link`→`<a>`, `next/image`→`<img>`,
`next/font`→`@font-face`) only if it ever proves a problem — high drift
risk, not needed for the archive goal.

## Reference

- **Cloudflare project**: `measuredco-site`, account `Measured`
  (`005e461b1bac074ca0d50cd3e4a16494`). Production branch `main`, build
  `pnpm build`, output `out`, `NODE_VERSION=24` (also pinned via `.nvmrc`).
- **Deploy gotcha**: the Cloudflare Pages GitHub App is scoped to specific
  repos on the `measuredco` org — `measuredco-site` must be in that repo
  scope or PR/branch builds silently don't run ("disconnected" banner,
  while the production branch still builds — misleading).
- **Content editing**: edit `content/*.json`, commit to `main`, Cloudflare
  rebuilds. Original data backed up in `content/_puck-dump.json`.
- **History**: full phase-by-phase rationale is in git — PR #237 and the
  commits preceding it — if ever needed.
