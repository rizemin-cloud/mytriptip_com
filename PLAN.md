# MyTripTip.com — 프로젝트 기획안

## 1. 사이트 컨셉

**Practical Korea Travel**
부제: Bookable Korea guides for first-time visitors

- 타깃: 영어권 첫 방한 여행자
- 성격: 감성 매거진이 아닌 **결정형 가이드 사이트**
- 핵심 질문 4가지:
  - 어디에 묵어야 하는지
  - 공항에서 어떻게 이동하는지
  - 어떤 투어를 예약할지
  - eSIM/교통카드를 뭘 사야 하는지
- 모든 글은 읽고 나서 사용자가 **하나의 결정**을 하게 만들어야 함

---

## 2. 수익 구조

### Phase 1 (초기)

| 카테고리 | 파트너 | 비고 |
|---------|--------|------|
| Hotel | Booking.com (1순위) | Awin/CJ 네트워크 통해 가입, 예약당 revenue 비율 커미션 |
| Tour | Viator (1순위) | 8% 커미션, 트래픽/팔로워 최소치 없이 가입 가능 |
| SIM | Airalo | 10% 커미션, 200+ 목적지 |
| Ads | Google AdSense | affiliate links와 같은 페이지 병행 가능 |

### Phase 2 (트래픽 확보 후)

| 카테고리 | 파트너 | 조건 |
|---------|--------|------|
| 항공 메타 | Skyscanner | 월 5,000명+ 고유 방문자, HTTPS, 최신 여행 콘텐츠 필요 |
| Hotel 보강 | Agoda, Trip.com | Agoda: $200 booking × 5% = $10 예시 |
| Tour 보강 | Klook, KKday, GetYourGuide | 각각 공식 affiliate 프로그램 운영 중 |

---

## 3. 메뉴 구조

### 상단 메뉴 (영어)

- Start Here
- Seoul
- Busan
- Jeju
- Where to Stay
- Tours & Tickets
- Transport
- SIM & Money
- Itineraries
- Compare
- Travel Basics

### 푸터 (필수)

- About
- Editorial Policy
- Affiliate Disclosure
- Contact

---

## 4. URL 구조

```
/
/start-here/
/seoul/
  /seoul/where-to-stay/
  /seoul/best-family-hotels/
/busan/
/jeju/
/where-to-stay/
/tours-tickets/
/transport/
/sim-money/
/itineraries/
/compare/
/travel-basics/
```

다국어 확장 시: 영문 root 유지 + `/ko/`로 한국어 추가 (hreflang 구성)

---

## 5. 페이지 템플릿

### 본문 구조

1. Quick answer
2. Best for / Not ideal for
3. Top picks or decision summary
4. Comparison table
5. Detailed explanation
6. CTA block
7. FAQ (UX용, SEO 우선순위 낮음)
8. Related guides

### 글 상단 필수 표시

- Last updated
- Reviewed by / Author
- Affiliate disclosure
- Comparison basis

### 구조화 데이터

- Article + Breadcrumb + Organization 우선
- FAQ rich results는 일반 사이트에서 노출 제한되므로 UX용으로만 사용

---

## 6. 수익 동선

### A. Hotel pages
- 예: "Where to Stay in Seoul", "Best Family Hotels in Busan"
- 흐름: 검색 유입 → 지역 비교 → 호텔 카드 → Check prices 클릭
- 수익: Hotel stack 중심, 광고 최소

### B. Tour pages
- 예: "Best DMZ Tours from Seoul"
- 흐름: 검색 유입 → 투어 타입 비교 → cancellation/meeting point/length 비교 → See available tours 클릭
- 수익: Tour stack 중심, 광고 최소

### C. Utility/Info pages
- 예: "Korea eSIM vs Pocket WiFi", "Korea Travel Budget"
- 흐름: 검색 유입 → 빠른 해결 → 중간 광고 → 관련 상품 추천
- 수익: AdSense + soft affiliate

### D. Compare pages
- 예: "Booking.com vs Agoda vs Trip.com for Korea Hotels"
- 흐름: 검색 유입 → 플랫폼 선택 → best-for 요약 → Go to partner 클릭
- 수익: 높은 전환 페이지

---

## 7. 첫 30개 글 목록

> H = Hotel stack, T = Tour stack, S = SIM stack, A = AdSense

### Seoul cluster (1~10)

| # | 제목 | 의도 | 수익 |
|---|------|------|------|
| 1 | Where to Stay in Seoul for First-Time Visitors | 지역 비교 | H |
| 2 | Myeongdong vs Hongdae vs Gangnam: Where Should You Stay in Seoul? | 비교 | H |
| 3 | Best Hotels in Myeongdong for First-Time Visitors | 호텔 선택 | H |
| 4 | Best Family Hotels in Seoul | 가족 숙소 | H |
| 5 | ICN Airport to Seoul: AREX vs Airport Bus vs Private Transfer | 교통 선택 | A + H |
| 6 | Best DMZ Tours from Seoul | 투어 선택 | T |
| 7 | Best Nami Island Day Trips from Seoul | 투어 선택 | T |
| 8 | 4 Days in Seoul: A First-Time Itinerary | 일정 | A + H + T |
| 9 | Korea eSIM for Seoul: What Actually Works at ICN | eSIM 선택 | S + A |
| 10 | Best Things to Do in Seoul at Night | 액티비티 탐색 | T + A |

### Busan cluster (11~16)

| # | 제목 | 의도 | 수익 |
|---|------|------|------|
| 11 | Where to Stay in Busan for First-Time Visitors | 지역 비교 | H |
| 12 | Haeundae vs Seomyeon vs Nampo: Best Area to Stay in Busan | 비교 | H |
| 13 | Best Hotels in Haeundae, Busan | 호텔 선택 | H |
| 14 | Best Family Hotels in Busan | 가족 숙소 | H |
| 15 | Seoul to Busan: KTX vs Bus vs Flight | 교통 선택 | A |
| 16 | 2 Days in Busan: A First-Time Itinerary | 일정 | A + H |

### Jeju cluster (17~20)

| # | 제목 | 의도 | 수익 |
|---|------|------|------|
| 17 | Where to Stay in Jeju for First-Time Visitors | 지역 비교 | H |
| 18 | Jeju City vs Seogwipo: Where Should You Stay? | 비교 | H |
| 19 | Do You Need a Rental Car in Jeju? | 이동 수단 결정 | A |
| 20 | Jeju Car Rental Guide for Foreigners | 렌터카 결정 | A |

### Korea basics cluster (21~25)

| # | 제목 | 의도 | 수익 |
|---|------|------|------|
| 21 | Korea eSIM vs Pocket WiFi vs Roaming: What Should You Buy? | 연결 상품 비교 | S + A |
| 22 | T-money Card Guide for Foreign Visitors | 교통카드 이해 | A |
| 23 | Best Time to Visit Korea by Month | 시즌 판단 | A |
| 24 | Korea Travel Budget: 5, 7, and 10 Day Cost Guide | 예산 계산 | A + H |
| 25 | Where to Stay in Korea for 7 Days: Seoul Only vs Seoul + Busan vs Seoul + Jeju | 루트 결정 | H + A |

### Compare / Money pages (26~30)

| # | 제목 | 의도 | 수익 |
|---|------|------|------|
| 26 | Booking.com vs Agoda vs Trip.com for Korea Hotels | OTA 선택 | H |
| 27 | Viator vs Klook vs KKday for Korea Tours | 플랫폼 선택 | T |
| 28 | Half-Day vs Full-Day vs Private DMZ Tours: Which One Is Worth It? | 투어 타입 비교 | T |
| 29 | Best Day Trips from Seoul for First-Time Visitors | 체험 비교 | T + A |
| 30 | Everland vs Lotte World for Families | 테마파크 결정 | T + A |

---

## 8. 우선 발행 순서 (첫 10개)

1. Where to Stay in Seoul for First-Time Visitors
2. Myeongdong vs Hongdae vs Gangnam
3. Best Family Hotels in Seoul
4. Best DMZ Tours from Seoul
5. Korea eSIM vs Pocket WiFi vs Roaming
6. Booking.com vs Agoda vs Trip.com for Korea Hotels
7. Where to Stay in Busan for First-Time Visitors
8. Where to Stay in Jeju for First-Time Visitors
9. 4 Days in Seoul: A First-Time Itinerary
10. Viator vs Klook vs KKday for Korea Tours

> 호텔/투어/플랫폼 비교/eSIM이 초반 수익화를 가장 빨리 만들기 때문

---

## 9. 내부링크 구조

- Seoul hub → 1~10번 글 상호 연결
- Busan hub → 11~16번 글 상호 연결
- Jeju hub → 17~20번 글 상호 연결
- 모든 itinerary 페이지는 최소:
  - 호텔 글 1개
  - 투어 글 1개
  - basics 글 1개 연결
- 모든 compare 페이지는 해당 상업 페이지로 연결
  - 예: 26번 → 1, 3, 4, 11, 13, 14, 17, 18
- **흐름**: 유입 글 → 비교 글 → 예약 글

---

## 10. 운영 원칙

- 실시간 규정성 정보는 초반에 피하기 (비자, 세금 환급, 입국 규정 등)
- 가격 박제형 제목 피하기 (예: "2026 Seoul hotel for $49")
- 직접 비교표와 직접 정리한 지도/체크리스트 넣기
- AI 번역문처럼 보이는 문장 금지
- 작성자 페이지와 업데이트 날짜 반드시 표시
- Google people-first content 기준 준수: original information, real usefulness, clear authorship, trust
