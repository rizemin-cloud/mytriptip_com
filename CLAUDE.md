# MyTripTip.com — Project Rules

## Identity
- English content site for first-time travelers to Korea
- NOT a personal blog — decision-focused, SEO-optimized, affiliate-monetized
- Domain: mytriptip.com
- Language: English only (Korean expansion via /ko/ later with hreflang)

## Tech Stack
- Framework: Astro 6 (static site generation)
- Styling: Tailwind CSS v4 (configured in src/styles/global.css, NOT tailwind.config)
- Content: Astro Content Collections with MDX via glob loader
- Content config: src/content.config.ts (Astro 5+ location)
- Deployment: TBD (Cloudflare Pages or Vercel)

## Architecture Rules
- All articles live in `src/content/articles/{destination}/` as MDX files
- Every article MUST have complete frontmatter matching the schema in content.config.ts
- Pages in `src/pages/` are routing shells — no long-form content in page files
- Dynamic article rendering via `src/pages/[...slug].astro`
- Content components are in `src/components/`
- Layouts: BaseLayout (html shell) → ArticleLayout (articles) / HubLayout (hub/category)
- MDX imports MUST use aliases: `@components/`, `@layouts/`, `@utils/` (defined in tsconfig.json)

## Content Rules
- Every article helps the reader make ONE decision
- Template order: Quick answer → Best for / Not ideal for → Top picks → Comparison table → Detailed explanation → CTA block → FAQ (UX only) → Related guides
- Every article shows: Last updated (updatedDate in frontmatter), Author, Affiliate disclosure, Comparison basis
- No price-locked titles (e.g., "hotel for $49")
- No real-time regulatory info (visas, tax refunds) in early phase
- No AI-translation artifacts — write natural English
- No emojis unless explicitly requested

## Content Production Rules
- Use real brand/platform names (Booking.com, Agoda, Airalo, Viator, etc.)
- Use real hotel names ONLY when verified — otherwise use area-based recommendations
- Affiliate link placeholders: `YOUR_AFFILIATE_LINK_BOOKING`, `YOUR_AFFILIATE_LINK_AGODA`, etc.
- Do NOT fabricate deep links or tracking URLs
- Item counts by article type:
  - Platform comparisons: 3 items
  - eSIM comparisons: 3–4 items
  - Area comparisons: 3–4 areas
  - Hotel recommendations: 5–6 properties (max 7)
  - Tour recommendations: 4–6 options (max 6)
- Never add weak filler items to hit a number — fewer strong options with clear guidance
- Prioritize quality, reviewability, and template consistency over length

## SEO Rules
- Structured data: Article + Breadcrumb + Organization (JSON-LD via src/utils/seo.ts)
- Every page: unique title, meta description, canonical URL, OG image
- Sitemap via @astrojs/sitemap (auto-generated)
- robots.txt in public/
- FAQ structured data is NOT used (low visibility for new sites)
- Internal link flow: Acquisition → Comparison → Booking page

## Affiliate Rules
- Phase 1: Booking.com (hotels), Viator (tours), Airalo (eSIM), AdSense
- Phase 2 (after 5K monthly visitors): Skyscanner, Agoda, Trip.com, Klook, KKday, GetYourGuide
- All partners defined in `src/utils/affiliates.ts` (booking, viator, airalo, klook, agoda, tripdotcom, kkday, getyourguide)
- Affiliate link placeholders in MDX: `YOUR_AFFILIATE_LINK_{PARTNER_KEY}` (e.g., `YOUR_AFFILIATE_LINK_BOOKING`)
- Every page with affiliate links MUST include AffiliateDisclosure component
- `primaryCTA` frontmatter field: set to the main affiliate partner key for the article (e.g., `booking` for hotel pages, `viator` for tour pages)
- Hotel/Tour pages: affiliate CTA priority, minimal ads
- Info/Utility pages: AdSense-friendly layout with soft affiliate

## Page Type Classification
Every article falls into one of four types. The type determines CTA density and ad strategy:

| Page Type | monetizationType | CTA Style | Ad Strategy | Examples |
|-----------|-----------------|-----------|-------------|----------|
| Commercial | hotel, tour, sim | 2–3 CTABlocks + HotelCard/TourCard | Minimal ads | where-to-stay, best-hotels, best-tours |
| Compare | hotel, tour, sim | 1 CTABlock per platform | Minimal ads | booking-vs-agoda, viator-vs-klook |
| Utility | adsense | 0–1 soft CTABlock at end | AdSense-friendly | t-money-guide, airport-to-seoul |
| Itinerary | mixed | 1 hotel CTA + 1 tour CTA + 1 basics link | Moderate ads | 4-days-in-seoul |

Rules:
- Commercial pages prioritize affiliate CTAs, minimize ads
- Utility pages prioritize AdSense, use soft affiliate only at end
- Compare pages get one CTA per compared platform (max 3–4)
- Itinerary pages bridge all types — link to 1 hotel + 1 tour + 1 basics article minimum

## URL Structure
- Trailing slashes enforced (astro.config trailingSlash: 'always')
- Hubs: /seoul/, /busan/, /jeju/
- Articles: /{destination}/{slug}/ via [...slug].astro
- Categories: /where-to-stay/, /tours-tickets/, /transport/, /sim-money/, /itineraries/, /compare/, /travel-basics/
- Footer: /about/, /editorial-policy/, /affiliate-disclosure/, /contact/

## Internal Linking
- Seoul hub ↔ Seoul articles
- Busan hub ↔ Busan articles
- Jeju hub ↔ Jeju articles
- Every itinerary links to: 1 hotel + 1 tour + 1 basics article
- Every compare page links to relevant commercial pages

## File Naming
- MDX content: kebab-case (`where-to-stay.mdx`)
- Astro components: PascalCase (`HotelCard.astro`)
- TypeScript utils: camelCase (`affiliates.ts`)
- Image assets: kebab-case in `public/images/`

## Do NOT
- Create files not needed for the current task
- Add features beyond what is requested
- Add comments/docstrings to unchanged code
- Over-engineer with abstractions for single-use patterns
- Create README or docs unless explicitly asked
