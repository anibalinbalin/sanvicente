import './_styles/global.css';
import { basierCircle, untitledSerif, jetbrainsMono } from './_styles/fonts';
import { Providers } from './providers';
import { Metadata } from 'next';
import { css } from 'ds/css';
import { Analytics } from '@vercel/analytics/react';
import { PATHS } from '@/app/_utils/constants/paths.constants';

const title = 'San Vicente';
const description =
  'San Vicente';

export const metadata: Metadata = {
  metadataBase: new URL(PATHS.base),
  robots: 'follow, index',
  title: {
    template: '%s | San Vicente',
    default: title,
  },
  description,
  openGraph: {
    url: PATHS.base,
    type: 'website',
    locale: 'en_US',
    title,
    description,
  },
  // twitter: {
  //   creator: '@jennings_hunter',
  //   site: '@jennings_hunter',
  //   card: 'summary_large_image',
  // },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      suppressHydrationWarning
      className={`${basierCircle.variable} ${untitledSerif.variable} ${jetbrainsMono.variable}`}
    >
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