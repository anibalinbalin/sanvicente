import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import { locales, defaultLocale } from './app/i18n/config';

export default getRequestConfig(async () => {
  const now = new Date();
  const headersList = await headers();
  const locale = headersList.get('x-next-intl-locale') || defaultLocale;
  
  return {
    locale,
    messages: (await import(`./app/i18n/locales/${locale}/common.json`)).default,
    timeZone: 'America/Montevideo',
    now
  };
}); 