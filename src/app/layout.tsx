import './_styles/global.css';
import { basierCircle, untitledSerif, jetbrainsMono } from './_styles/fonts';
import { Providers } from './providers';
import { Metadata } from 'next';
import { css } from 'ds/css';
import { Analytics } from '@vercel/analytics/react';
import { PATHS } from '@/app/_utils/constants/paths.constants';

const defaultTitle = 'Alquiler Casa San Vicente 2026 | José Ignacio, Uruguay';
const description =
  'Alquiler casa San Vicente 2026 cerca de José Ignacio y Manantiales. Casa de estilo nórdico con 3 dormitorios, espacios abiertos y jardines. Ideal para vacaciones de verano en Uruguay.';

export const metadata: Metadata = {
  metadataBase: new URL(PATHS.base),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    template: '%s | San Vicente House',
    default: defaultTitle,
  },
  description,
  keywords: [
    'alquiler casa jose ignacio',
    'alquiler casa jose ignacio 2026',
    'alquiler casa san vicente 2026',
    'alquiler casa manantiales',
    'alquiler casa la barra',
    'alquiler verano 2026',
    'casa verano jose ignacio 2026',
    'alquiler temporario uruguay',
    'alquiler vacaciones maldonado',
    'pueblo san vicente',
    'casa de playa uruguay',
    'casa campo y playa uruguay',
    'alquiler casa punta del este',
    'san vicente house',
  ],
  category: 'travel',
  alternates: {
    canonical: PATHS.base,
    languages: {
      es: `${PATHS.base}/es`,
      en: `${PATHS.base}/en`,
    },
  },
  openGraph: {
    url: PATHS.base,
    type: 'website',
    siteName: 'San Vicente House',
    locale: 'es_UY',
    title: defaultTitle,
    description,
    images: [
      {
        url: '/assets/frontpage/IMG_1271.webp',
        width: 1200,
        height: 900,
        alt: 'Exterior de Casa San Vicente rodeada de naturaleza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description,
    images: ['/assets/frontpage/IMG_1271.webp'],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'VacationRental',
  '@id': 'https://sanvicente.house/#vacation-rental',
  identifier: 'san-vicente-house-jose-ignacio',
  name: 'San Vicente House',
  description:
    'Casa de alquiler temporal en Pueblo San Vicente, a minutos de José Ignacio y Manantiales. Espacios abiertos, 3 dormitorios y jardines rodeados de naturaleza para disfrutar el verano 2026.',
  url: 'https://sanvicente.house',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pueblo San Vicente',
    addressRegion: 'Maldonado',
    addressCountry: 'UY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.8333,
    longitude: -54.75,
  },
  numberOfBedrooms: 3,
  numberOfBathroomsTotal: 3,
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 150,
    unitCode: 'MTK',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Beach access', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'BBQ grill', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Gym', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free parking on premises', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wifi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Washer', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Heating', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Indoor fireplace', value: true },
  ],
  image: [
    'https://sanvicente.house/assets/frontpage/IMG_1271.webp',
    'https://sanvicente.house/assets/frontpage/night_frontpage.webp',
    'https://sanvicente.house/assets/images/Dining area/dinning_IMG_7951.webp',
    'https://sanvicente.house/assets/images/Bedroom_1/bath1_IMG_8483.webp',
    'https://sanvicente.house/assets/images/Bedroom_2/dorm2_IMG_8482.webp',
    'https://sanvicente.house/assets/images/Bedroom_3/dorm3_IMG_8485.webp',
    'https://sanvicente.house/assets/images/Exterior/ext_IMG_7972.webp',
    'https://sanvicente.house/assets/images/Additional_Photos/guest_bathroom_IMG_7958.webp',
  ],
  telephone: '+598-99-108-220',
  email: 'laurafuentesaro@gmail.com',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      suppressHydrationWarning
      className={`${basierCircle.variable} ${untitledSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={css({
          minH: '100vh',
          bgColor: 'bg',
          color: 'text1',
        })}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
} 
