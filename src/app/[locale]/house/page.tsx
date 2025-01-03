import * as React from 'react';
import { css } from 'ds/css';
import { stack } from 'ds/patterns';
import { VisuallyHiddenRoot } from '@/app/_components/visually-hidden';
import { Metadata } from 'next';
import { PATHS } from '@/app/_utils/constants/paths.constants';
import Image from 'next/image';
import { BackToLink } from '@/app/_components/back-to-link';
import { getTranslations, getLocale } from 'next-intl/server';
import { locales } from '@/app/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const title = 'House';
const description = 'House page';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const url = new URL(`${PATHS.base}${PATHS.house(params.locale)}`);

  return {
    title,
    description,
    robots: 'follow, index',
    openGraph: {
      url,
      type: 'website',
      locale: params.locale,
      title,
      description,
    },
  };
}

interface Props {
  params: {
    locale: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function HousePage({
  params,
  searchParams,
}: Props) {
  const t = await getTranslations('house');
  const currentLocale = await getLocale();
  const galleryPath = PATHS.gallery(currentLocale);

  return (
    <div>
      <VisuallyHiddenRoot>
        <h1>{t('title')}</h1>
      </VisuallyHiddenRoot>
      <div className={stack({ gap: '3xl' })}>
        <BackToLink href={galleryPath}>Back to home</BackToLink>

        <section className={stack({ gap: 'm' })}>
          <h2 className={css({ textStyle: 'base', lineHeight: 'tight', color: 'text2', fontSize: '1' })}>
            {t('fauna.title')}
          </h2>
          <div className={stack({ gap: 's' })}>
            <p className={css({ textStyle: 'body' })}>{t('fauna.description1')}</p>
            <p className={css({ textStyle: 'body' })}>{t('fauna.description2')}</p>
            <p className={css({ textStyle: 'body' })}>{t('fauna.description3')}</p>
            <p className={css({ textStyle: 'body' })}>{t('fauna.description4')}</p>
          </div>
        </section>

        <section className={stack({ gap: 'm' })}>
          <h2 className={css({ textStyle: 'base', lineHeight: 'tight', color: 'text2', fontSize: '1' })}>
            {t('flora.title')}
          </h2>
          <div className={stack({ gap: 's' })}>
            <p className={css({ textStyle: 'body' })}>{t('flora.description1')}</p>
            <p className={css({ textStyle: 'body' })}>{t('flora.description2')}</p>
            <p className={css({ textStyle: 'body' })}>{t('flora.description3')}</p>
          </div>
        </section>

        <section className={stack({ gap: 'm' })}>
          <h2 className={css({ textStyle: 'base', lineHeight: 'tight', color: 'text2', fontSize: '1' })}>
            {t('technology.title')}
          </h2>
          <div className={stack({ gap: 'l' })}>
            <div className={stack({ gap: 's' })}>
              <h3 className={css({ textStyle: 'base', fontSize: '1', lineHeight: 'tight' })}>
                {t('technology.wifi.title')}
              </h3>
              <p className={css({ textStyle: 'body' })}>{t('technology.wifi.description')}</p>
              <p className={css({ textStyle: 'body' })}>{t('technology.wifi.networks')}</p>
              <p className={css({ textStyle: 'body' })}>{t('technology.wifi.password')}</p>
              <p className={css({ textStyle: 'body' })}>{t('technology.wifi.note')}</p>
            </div>
            <div className={stack({ gap: 's' })}>
              <h3 className={css({ textStyle: 'base', fontSize: '1', lineHeight: 'tight' })}>
                {t('technology.audio.title')}
              </h3>
              <p className={css({ textStyle: 'body' })}>{t('technology.audio.description')}</p>
            </div>
          </div>
        </section>

        <section className={stack({ gap: 'm' })}>
          <h2 className={css({ textStyle: 'base', lineHeight: 'tight', color: 'text2', fontSize: '1' })}>
            {t('kitchen.title')}
          </h2>
          <div className={stack({ gap: 'l' })}>
            <div className={stack({ gap: 's' })}>
              <h3 className={css({ textStyle: 'base', fontSize: '1', lineHeight: 'tight' })}>
                {t('kitchen.extractor.title')}
              </h3>
              <p className={css({ textStyle: 'body' })}>{t('kitchen.extractor.description')}</p>
            </div>
            <div className={stack({ gap: 's' })}>
              <h3 className={css({ textStyle: 'base', fontSize: '1', lineHeight: 'tight' })}>
                {t('kitchen.oven.title')}
              </h3>
              <p className={css({ textStyle: 'body' })}>{t('kitchen.oven.description')}</p>
              <div className={css({ position: 'relative', width: '100%', height: '300px' })}>
                <Image
                  src="/assets/house/owen.png"
                  alt={t('kitchen.oven.title')}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className={stack({ gap: 's' })}>
              <h3 className={css({ textStyle: 'base', fontSize: '1', lineHeight: 'tight' })}>
                {t('kitchen.cooktop.title')}
              </h3>
              <p className={css({ textStyle: 'body' })}>{t('kitchen.cooktop.description')}</p>
              <ol className={stack({ gap: '2xs' })}>
                <li className={css({ textStyle: 'body' })}>{t('kitchen.cooktop.steps.1')}</li>
                <li className={css({ textStyle: 'body' })}>{t('kitchen.cooktop.steps.2')}</li>
                <li className={css({ textStyle: 'body' })}>{t('kitchen.cooktop.steps.3')}</li>
              </ol>
              <div className={css({ position: 'relative', width: '100%', height: '300px' })}>
                <Image
                  src="/assets/house/cooktop.png"
                  alt={t('kitchen.cooktop.title')}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={stack({ gap: 'm' })}>
          <h2 className={css({ textStyle: 'base', lineHeight: 'tight', color: 'text2', fontSize: '1' })}>
            {t('laundry.title')}
          </h2>
          <div className={stack({ gap: 'l' })}>
            <div className={stack({ gap: 's' })}>
              <h3 className={css({ textStyle: 'base', fontSize: '1', lineHeight: 'tight' })}>
                {t('laundry.washer.title')}
              </h3>
              <p className={css({ textStyle: 'body' })}>{t('laundry.washer.description')}</p>
            </div>
            <div className={stack({ gap: 's' })}>
              <h3 className={css({ textStyle: 'base', fontSize: '1', lineHeight: 'tight' })}>
                {t('laundry.dryer.title')}
              </h3>
              <p className={css({ textStyle: 'body' })}>{t('laundry.dryer.description')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 