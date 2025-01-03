import { getRequestConfig } from 'next-intl/server';
 
export const locales = ['en', 'es'];
export const defaultLocale = 'en';
 
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./locales/${locale}/common.json`)).default
})); 