import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, pathnames } from './app/i18n/config';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(es|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
}; 