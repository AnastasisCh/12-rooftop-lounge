export type Theme = 'dark' | 'light';
export type Culture = 'el' | 'en';

export const SITE_CONFIG = {
  api: {
    baseUrl: 'http://localhost:5007',
    market: 'rooftop-lounge',
  },
  theme: {
    default: 'dark' as Theme,
    colors: {
      dark: {
        background: '#0a0a1e',
        surface: '#120d2e',
        surfaceAlt: '#1c1640',
        text: '#f0eeff',
        textMuted: 'rgba(240,238,255,0.45)',
        accent: '#c9a87c',
        accentHover: '#e4c49a',
        border: 'rgba(201,168,124,0.18)',
        navBg: 'rgba(10,10,30,0.97)',
        overlay: 'rgba(10,10,30,0.7)',
      },
      light: {
        background: '#f8f7ff',
        surface: '#ffffff',
        surfaceAlt: '#ede8ff',
        text: '#0a0a1e',
        textMuted: 'rgba(10,10,30,0.5)',
        accent: '#7b5b2a',
        accentHover: '#5a3e15',
        border: 'rgba(123,91,42,0.2)',
        navBg: 'rgba(248,247,255,0.97)',
        overlay: 'rgba(248,247,255,0.7)',
      },
    },
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1400&q=80',
    about: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=70',
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=70',
      'https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?w=600&q=70',
    ],
  },
  business: {
    name: 'Rooftop Lounge',
    address: 'Ερμού 88, Ταράτσα 8ου, Αθήνα',
    addressEn: '88 Ermou St, 8th Floor Rooftop, Athens',
    phone: '+30 210 325 6600',
    email: 'hello@rooftoplounge.gr',
    hours: 'Καθημερινά 18:00–02:00',
    hoursEn: 'Daily 18:00–02:00',
    social: { instagram: 'https://www.instagram.com/rooftopathens', facebook: 'https://www.facebook.com/rooftopathens' },
  },
  reservation: {
    defaultTime: '19:00',
    defaultPartySize: 2,
  },
  location: {
    lat: 37.9761,
    lng: 23.7272,
    zoom: 15,
    mapsUrl: 'https://www.google.com/maps?q=37.9761,23.7272',
  },
};
