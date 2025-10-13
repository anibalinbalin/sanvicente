import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '../i18n/config';
import { Analytics } from '@vercel/analytics/react';
import { basierCircle, jetbrainsMono, untitledSerif } from '@/app/_styles/fonts';
import { css } from 'ds/css';
import { Navigation } from '@/app/_components/navigation/navigation';
import { Footer } from '@/app/_components/footer/footer';
import '../_styles/global.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`../i18n/locales/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout(props: Props) {
  const { locale } = await props.params;
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className={container}>
        <div className={wrapper}>
          <Navigation />
          <main className={main}>{props.children}</main>
          <Footer />
        </div>
      </div>
    </NextIntlClientProvider>
  );
}

const container = css({
  w: 'full',
  bgColor: 'uiBg',
  h: 'full',
  minH: 'screenH',
  display: 'flex',
  alignItems: 'center',
  flexDir: 'column',
  px: 's',
});

const wrapper = css({
  gridTemplateAreas: `'nav'
                      'main'
                      'footer'`,
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr auto',
  display: 'grid',
  maxW: 'channel',
  w: 'full',
  h: 'full',
  minH: 'screenH',
  pos: 'relative',
  zIndex: 'init',
});

const main = css({
  w: 'full',
  zIndex: 1,
  gridArea: 'main',
}); 