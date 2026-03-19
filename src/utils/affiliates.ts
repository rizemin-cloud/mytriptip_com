export interface AffiliatePartner {
  name: string;
  label: string;
  baseUrl: string;
  trackingParam: string;
  trackingId: string;
}

const partners: Record<string, AffiliatePartner> = {
  booking: {
    name: 'booking',
    label: 'Booking.com',
    baseUrl: 'https://www.booking.com',
    trackingParam: 'aid',
    trackingId: 'YOUR_BOOKING_AID',
  },
  viator: {
    name: 'viator',
    label: 'Viator',
    baseUrl: 'https://www.viator.com',
    trackingParam: 'pid',
    trackingId: 'YOUR_VIATOR_PID',
  },
  airalo: {
    name: 'airalo',
    label: 'Airalo',
    baseUrl: 'https://www.airalo.com',
    trackingParam: 'ref',
    trackingId: 'YOUR_AIRALO_REF',
  },
  klook: {
    name: 'klook',
    label: 'Klook',
    baseUrl: 'https://www.klook.com',
    trackingParam: 'aid',
    trackingId: 'YOUR_KLOOK_AID',
  },
  agoda: {
    name: 'agoda',
    label: 'Agoda',
    baseUrl: 'https://www.agoda.com',
    trackingParam: 'cid',
    trackingId: 'YOUR_AGODA_CID',
  },
  tripdotcom: {
    name: 'tripdotcom',
    label: 'Trip.com',
    baseUrl: 'https://www.trip.com',
    trackingParam: 'aid',
    trackingId: 'YOUR_TRIPDOTCOM_AID',
  },
  kkday: {
    name: 'kkday',
    label: 'KKday',
    baseUrl: 'https://www.kkday.com',
    trackingParam: 'cid',
    trackingId: 'YOUR_KKDAY_CID',
  },
  getyourguide: {
    name: 'getyourguide',
    label: 'GetYourGuide',
    baseUrl: 'https://www.getyourguide.com',
    trackingParam: 'partner_id',
    trackingId: 'YOUR_GYG_PARTNER_ID',
  },
};

export function getPartner(name: string): AffiliatePartner | undefined {
  return partners[name];
}

export function buildAffiliateUrl(
  partnerName: string,
  path: string = '',
): string {
  const partner = partners[partnerName];
  if (!partner) return '#';
  const separator = path.includes('?') ? '&' : '?';
  return `${partner.baseUrl}${path}${separator}${partner.trackingParam}=${partner.trackingId}`;
}

export function getAllPartners(): AffiliatePartner[] {
  return Object.values(partners);
}
