import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/images': '/images',
    '/images/[slug]': {
      en: '/images/[slug]',
      es: '/images/[slug]',
    },
    '/images/[slug]/[id]': {
      en: '/images/[slug]/[id]',
      es: '/images/[slug]/[id]',
    },
    '/house': '/house',
  },
});

export type AppPathnames = keyof typeof routing.pathnames;
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
