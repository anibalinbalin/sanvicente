import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;
export const defaultLocale = 'en' as const;

export const pathnames = {
  '/': '/',
  '/images': '/images',
  '/images/[slug]': {
    en: '/images/[slug]',
    es: '/images/[slug]'
  },
  '/images/[slug]/[id]': {
    en: '/images/[slug]/[id]',
    es: '/images/[slug]/[id]'
  },
  '/house': '/house',
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames; 