# Publish Checklist — MyTripTip.com

> Last updated: 2026-03-19
> Total articles: 7 (3 published, 4 draft)

## CTA Link Status

All CTABlock placeholder links (`YOUR_AFFILIATE_LINK_*`) are auto-resolved by the component at build time:
- If a real tracking ID is configured in `src/utils/affiliates.ts` → full affiliate URL with tracking
- If no real ID yet (current state) → partner's official homepage (e.g., `https://www.booking.com`)
- `rel` attribute adjusts automatically: `nofollow sponsored` for real affiliate links, `nofollow` for homepage fallbacks

**Current state:** All 8 partners have placeholder IDs. All CTAs link to official partner homepages. Functional but not monetized.

**To activate affiliate revenue:** Replace `YOUR_*` values in `src/utils/affiliates.ts` with real tracking IDs. All CTAs across all articles update automatically on next build.

---

## Article Status

### 1. Where to Stay in Seoul for First-Time Visitors

| Field | Value |
|---|---|
| File | `seoul/where-to-stay.mdx` |
| URL | `/seoul/where-to-stay/` |
| Status | **Published** (`draft: false`) |
| Page type | Commercial |
| Monetization | hotel (Booking.com) |
| CTA links | 1x Booking.com → resolves to homepage |
| Affiliate readiness | Functional without affiliate — CTA links to booking.com homepage |

**Publish verdict: Publishable now**

Manual fact checks before confidence:
- [ ] Hotel price ranges per area (Myeongdong $80–200, Hongdae $50–150, Insadong $60–150, Gangnam $100–300)
- [ ] AREX Express travel time to Seoul Station (stated: 43 min)
- [ ] AREX direct train to Hongik University (stated: 51 min, no transfer)
- [ ] Cherry blossom timing (stated: late March–mid April)

Risk: Low. All numbers are ranges. Structural claims about neighborhoods and subway lines are stable.

---

### 2. Korea eSIM vs Pocket WiFi vs Roaming

| Field | Value |
|---|---|
| File | `basics/esim-vs-pocket-wifi.mdx` |
| URL | `/basics/esim-vs-pocket-wifi/` |
| Status | **Published** (`draft: false`) |
| Page type | Utility |
| Monetization | sim (Airalo) |
| CTA links | 2x Airalo → resolves to homepage |
| Affiliate readiness | Functional without affiliate — CTA links to airalo.com homepage |

**Publish verdict: Publishable now**

Manual fact checks before confidence:
- [ ] Airalo Korea plans starting price (stated: around $5 for 1 GB)
- [ ] Holafly unlimited pricing (stated: $20–30 for 7 days)
- [ ] eSIM2Fly pricing (stated: $10–15 for 6 GB over 8 days)
- [ ] iPhone eSIM support (stated: iPhone XS onward) — verify no newer cutoff
- [ ] Samsung eSIM support (stated: Galaxy S20 onward) — verify no newer cutoff
- [ ] Kakao T international signup status (stated: can sign up with email/international number "in many cases")

Risk: Low. Pricing uses ranges and hedging language ("starting around", "typically"). Device compatibility is durable.

---

### 3. Booking.com vs Agoda vs Trip.com for Korea Hotels

| Field | Value |
|---|---|
| File | `compare/booking-vs-agoda-vs-tripdotcom.mdx` |
| URL | `/compare/booking-vs-agoda-vs-tripdotcom/` |
| Status | **Published** (`draft: false`) |
| Page type | Compare |
| Monetization | hotel (Booking.com primary, Agoda, Trip.com) |
| CTA links | 3x (Booking.com, Agoda, Trip.com) → all resolve to homepages |
| Affiliate readiness | Functional without affiliate — CTAs link to partner homepages |

**Publish verdict: Publishable now**

Manual fact checks before confidence:
- [ ] Booking.com Genius Level 2 benefits (stated: 10–15% discounts, free breakfast, room upgrades after 2 stays)
- [ ] Agoda parent company (stated: Booking Holdings subsidiary) — stable fact
- [ ] Trip.com parent company (stated: Trip.com Group, formerly Ctrip) — stable fact
- [ ] Korea tourist tax (stated: no separate tourist tax) — verify still accurate

Risk: Very low. Platform comparisons are structural. Loyalty program details are the most volatile but already hedged.

---

### 4. ICN Airport to Seoul: AREX, Airport Bus, and Private Transfer

| Field | Value |
|---|---|
| File | `seoul/icn-airport-to-seoul.mdx` |
| URL | `/seoul/icn-airport-to-seoul/` |
| Status | **Draft** (`draft: true`) |
| Page type | Utility |
| Monetization | adsense (soft Booking.com CTA at end) |
| CTA links | 1x Booking.com → resolves to homepage |
| Affiliate readiness | Ready — utility page, CTA is soft |

**Publish verdict: Publishable after quick fact verification**

Manual fact checks needed:
- [ ] AREX All-Stop fare (stated: under 5,000 KRW / ~$3–4) — verify current fare
- [ ] AREX Express fare (stated: ~9,500 KRW / ~$7) — verify current fare
- [ ] AREX All-Stop travel time to Seoul Station (stated: ~58 min) — verify
- [ ] AREX Express travel time (stated: ~43 min) — verify
- [ ] AREX frequency: All-Stop every 6–12 min, Express every 30–40 min — verify
- [ ] AREX last departure time (stated: around 11:00–11:30 PM) — verify with AREX schedule
- [ ] Airport bus fare (stated: ~15,000–18,000 KRW / ~$12–14) — verify
- [ ] Airport bus routes 6001, 6002, 6005, 6015 — verify destinations still match
- [ ] Private transfer price range (stated: $50–90+) — spot check on Klook/Viator
- [ ] Terminal 2 AREX addition (stated: add ~6 min) — verify

Risk: Medium. Transport article depends on current fares and schedules. Numbers are already softened with ranges and "about" language, but should be verified against official AREX website.

---

### 5. Best DMZ Tours from Seoul

| Field | Value |
|---|---|
| File | `seoul/best-dmz-tours.mdx` |
| URL | `/seoul/best-dmz-tours/` |
| Status | **Draft** (`draft: true`) |
| Page type | Commercial |
| Monetization | tour (Viator primary) |
| CTA links | 3x Viator → all resolve to homepage |
| Affiliate readiness | Ready — CTAs link to viator.com homepage |

**Publish verdict: Publishable after JSA status verification**

Manual fact checks needed:
- [ ] **JSA currently open to tourists** (critical — reopened 2023, verify 2026 status)
- [ ] Half-day tour price range (stated: $45–65) — spot check on Viator
- [ ] Full-day + JSA tour price range (stated: $80–120) — spot check on Viator
- [ ] DMZ + Nami Island combo price range (stated: $70–100) — spot check
- [ ] JSA age restriction (stated: typically 10–12) — verify current policy
- [ ] JSA dress code specifics — verify current military policy
- [ ] Typical pickup locations (stated: Gwanghwamun, Myeongdong) — verify on Viator listings
- [ ] Tour durations: half-day 5–6h, full-day 8–10h, combo 10–12h — verify

Risk: Medium. JSA access status is the critical variable — if JSA is closed, the full-day section needs a disclaimer. Price ranges and tour structures are soft enough to be durable.

---

### 6. Viator vs Klook vs KKday for Korea Tours

| Field | Value |
|---|---|
| File | `compare/viator-vs-klook-vs-kkday.mdx` |
| URL | `/compare/viator-vs-klook-vs-kkday/` |
| Status | **Draft** (`draft: true`) |
| Page type | Compare |
| Monetization | tour (Viator primary, Klook, KKday) |
| CTA links | 3x (Viator, Klook, KKday) → all resolve to homepages |
| Affiliate readiness | Ready — CTAs link to partner homepages |

**Publish verdict: Publishable after quick fact verification**

Manual fact checks needed:
- [ ] Viator cancellation policy (stated: generally free cancellation up to 24 hours) — verify current default
- [ ] Klook cancellation terms — verify they still vary by listing
- [ ] KKday niche Korea tours claim — browse KKday.com to confirm they list unique Korea experiences
- [ ] Tripadvisor ownership of Viator — verify still accurate
- [ ] Klook headquarters (stated: Hong Kong-based) — verify
- [ ] KKday headquarters (stated: Taiwan-based) — verify

Risk: Low. Platform comparisons are structural. Cancellation policy claims are already hedged with "generally" and "always check."

---

### 7. Where to Stay in Busan for First-Time Visitors

| Field | Value |
|---|---|
| File | `busan/where-to-stay.mdx` |
| URL | `/busan/where-to-stay/` |
| Status | **Draft** (`draft: true`) |
| Page type | Commercial |
| Monetization | hotel (Booking.com primary) |
| CTA links | 2x Booking.com → resolve to homepage |
| Affiliate readiness | Ready — CTAs link to booking.com homepage |

**Publish verdict: Publishable after quick fact verification**

Manual fact checks needed:
- [ ] Haeundae hotel price ranges (stated: budget $70, mid $100–180, luxury $250+)
- [ ] Seomyeon hotel price ranges (stated: budget $50, mid $70–120)
- [ ] Nampo hotel price ranges (stated: budget $40, mid $60–100)
- [ ] Subway lines: Line 2 for Haeundae, Lines 1+2 for Seomyeon, Line 1 for Nampo — verify
- [ ] Busan Station to Seomyeon (stated: 2 stops, ~5 min on Line 1) — verify
- [ ] Gimhae Airport to Haeundae (stated: ~70 min via light rail + Line 2) — verify
- [ ] Gwangalli nearest station (stated: Geumnyeonsan on Line 2, 10–15 min walk) — verify
- [ ] BIFF timing (stated: October) — verify current year schedule
- [ ] KTX fare range (stated: 55,000–60,000 KRW / ~$40–45) — verify
- [ ] Express bus fare range (stated: 30,000–35,000 KRW / ~$25–27) — verify

Risk: Low-medium. Neighborhood characteristics are stable. Hotel prices and transit info are the most volatile but use ranges.

---

## Recommended Publish Order

### Batch 1 — Publish now (already live, verified structure)
1. **seoul/where-to-stay** — already published, low risk
2. **basics/esim-vs-pocket-wifi** — already published, low risk
3. **compare/booking-vs-agoda-vs-tripdotcom** — already published, low risk

### Batch 2 — Publish after quick verification (1–2 hours of fact-checking)
4. **compare/viator-vs-klook-vs-kkday** — structural comparison, lowest risk among drafts. Verify Viator cancellation policy and platform details.
5. **busan/where-to-stay** — mirrors proven Seoul template. Verify subway lines and hotel price ranges on Booking.com.
6. **seoul/icn-airport-to-seoul** — verify AREX fares and schedule on official AREX website.

### Batch 3 — Publish after specific verification
7. **seoul/best-dmz-tours** — requires confirming JSA is currently open to tourists. If closed, add a disclaimer before publishing.

---

## Affiliate Link Activation Checklist

When partner accounts are approved, update tracking IDs in `src/utils/affiliates.ts`:

| Partner | Config Key | Current ID | Priority |
|---|---|---|---|
| Booking.com | `booking` | `YOUR_BOOKING_AID` | Phase 1 — apply first |
| Viator | `viator` | `YOUR_VIATOR_PID` | Phase 1 — apply first |
| Airalo | `airalo` | `YOUR_AIRALO_REF` | Phase 1 — apply first |
| Agoda | `agoda` | `YOUR_AGODA_CID` | Phase 2 |
| Trip.com | `tripdotcom` | `YOUR_TRIPDOTCOM_AID` | Phase 2 |
| Klook | `klook` | `YOUR_KLOOK_AID` | Phase 2 |
| KKday | `kkday` | `YOUR_KKDAY_CID` | Phase 2 |
| GetYourGuide | `getyourguide` | `YOUR_GYG_PARTNER_ID` | Phase 2 |

After updating any ID, rebuild (`npm run build`) and all CTAs across all articles auto-upgrade to tracked affiliate URLs with `rel="nofollow sponsored"`.
