import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
    formats: ['image/webp'],
  },
  allowedDevOrigins: ['10.10.11.186', 'claude-code-sec.tailf626.ts.net'],
  compress: true,
  poweredByHeader: false,
};

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
export default withNextIntl(nextConfig);
