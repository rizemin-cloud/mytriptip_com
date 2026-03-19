# Deployment Guide — MyTripTip.com

## Prerequisites

- Node.js 18+
- npm 9+
- Domain: `mytriptip.com` (DNS configured)

## Local Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Static output to dist/
npm run preview    # Preview built site locally
```

## Build Verification

Before any deployment, run:

```bash
npm run build
```

Expected output: 19 pages, 0 errors. The build is static — `dist/` contains plain HTML/CSS/JS files.

## Deployment Options

### Option A: Cloudflare Pages (Recommended)

1. Push repository to GitHub
2. Connect repo to Cloudflare Pages at https://dash.cloudflare.com/
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18 (set via environment variable `NODE_VERSION=18`)
4. Set custom domain: `mytriptip.com`
5. Cloudflare handles HTTPS, CDN, and cache automatically

### Option B: Vercel

1. Push repository to GitHub
2. Import repo at https://vercel.com/new
3. Framework: Astro (auto-detected)
4. Build settings are auto-configured
5. Set custom domain: `mytriptip.com`

### Option C: Manual / Other Hosts

The `dist/` folder contains static HTML files. Upload to any static hosting provider:

```bash
npm run build
# Upload contents of dist/ to your host
```

## Post-Deploy Checklist

After first deployment:

- [ ] Verify `https://mytriptip.com` loads correctly
- [ ] Verify `https://mytriptip.com/sitemap-index.xml` is accessible
- [ ] Submit sitemap to Google Search Console: `https://mytriptip.com/sitemap-index.xml`
- [ ] Verify OG image works: share any article URL on Twitter/Facebook preview tools
- [ ] Set up Google Analytics (GA4) — add tracking snippet to BaseHead.astro
- [ ] Apply for Google AdSense when traffic reaches threshold
- [ ] Apply for affiliate programs: Booking.com, Viator, Airalo

## Affiliate Link Activation

When affiliate partner accounts are approved:

1. Edit `src/utils/affiliates.ts`
2. Replace `YOUR_*` placeholder IDs with real tracking IDs
3. Rebuild and redeploy
4. All CTAs across the site auto-update — no content changes needed

## Sitemap Maintenance

When a hub page gets its first published article, remove it from the `noindexPages` exclusion list in `astro.config.mjs`. The hub page's `noindex` meta tag is removed automatically when it has content, but the sitemap filter must be updated manually.

## Publishing Draft Articles

1. Open the article's MDX file in `src/content/articles/`
2. Change `draft: true` to `draft: false`
3. Update `publishDate` and `updatedDate` to current date
4. Update the sitemap filter in `astro.config.mjs` if this article populates a previously-empty hub
5. Rebuild and redeploy
