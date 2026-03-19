# Release Notes — MyTripTip.com v1.0

> Initial release candidate. 2026-03-19.

## What's Included

### Published Articles (3)

| Article | URL | Revenue Type |
|---|---|---|
| Where to Stay in Seoul for First-Time Visitors | `/seoul/where-to-stay/` | Hotel (Booking.com) |
| Korea eSIM vs Pocket WiFi vs Roaming | `/basics/esim-vs-pocket-wifi/` | SIM (Airalo) |
| Booking.com vs Agoda vs Trip.com for Korea Hotels | `/compare/booking-vs-agoda-vs-tripdotcom/` | Hotel (Booking.com, Agoda, Trip.com) |

### Draft Articles (4 — not publicly visible)

| Article | URL (when published) | Revenue Type |
|---|---|---|
| ICN Airport to Seoul | `/seoul/icn-airport-to-seoul/` | AdSense |
| Best DMZ Tours from Seoul | `/seoul/best-dmz-tours/` | Tour (Viator) |
| Viator vs Klook vs KKday for Korea Tours | `/compare/viator-vs-klook-vs-kkday/` | Tour (Viator, Klook, KKday) |
| Where to Stay in Busan | `/busan/where-to-stay/` | Hotel (Booking.com) |

### Site Infrastructure

- **Framework:** Astro 6 with Tailwind CSS v4 and MDX
- **Pages:** 19 total (3 articles, 11 hub/category, 4 footer, 1 homepage)
- **Components:** 14 reusable Astro components
- **Layouts:** 3 (BaseLayout, ArticleLayout, HubLayout)
- **SEO:** JSON-LD (Article, Breadcrumb, Organization), canonical URLs, OG images, sitemap
- **Affiliate system:** Centralized partner config with auto-resolving CTA placeholders
- **Content schema:** Validated frontmatter via Astro Content Collections

### Key Features

- **CTA auto-resolution:** All `YOUR_AFFILIATE_LINK_*` placeholders resolve to partner homepages at build time. When real tracking IDs are added to `affiliates.ts`, CTAs auto-upgrade to tracked affiliate URLs site-wide.
- **Draft system:** Articles with `draft: true` are excluded from routes, sitemap, and hub listings.
- **Dynamic noindex:** Hub pages with zero published articles automatically get `noindex, nofollow` and are excluded from sitemap.
- **Breadcrumb logic:** City articles breadcrumb to destination hub, korea-wide articles breadcrumb to category hub.
- **Default OG image:** `public/images/og-default.jpg` (1200x630) serves as fallback for all pages without a custom image.

## What's Not Included Yet

- Real affiliate tracking IDs (all partners use placeholder IDs)
- Google Analytics / GA4 integration
- Google AdSense code slots
- Custom OG images per article
- Real logo (SVG placeholder in use)
- Deployment to production host

## Known Limitations

- Affiliate CTAs currently link to partner homepages without tracking — functional but not monetized
- 6 hub pages show "coming soon" placeholder content (noindexed)
- No search functionality
- No email newsletter integration
- Mobile navigation is functional but basic

## Pre-Deploy Requirements

See `DEPLOY.md` for deployment instructions.
See `PUBLISH_CHECKLIST.md` for per-article fact-check status and publish order.
