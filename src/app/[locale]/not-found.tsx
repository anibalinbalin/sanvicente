'use client';

import { css } from 'ds/css';
import Link from 'next/link';
import { link } from 'ds/recipes';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className={css({ textAlign: 'center', py: '3xl' })}>
      <h2 className={css({ textStyle: 'serif', mb: 'l' })}>{t('title')}</h2>
      <p className={css({ mb: 'l' })}>{t('description')}</p>
      <Link href="/" className={link({ color: 'primary' })}>
        {t('returnHome')}
      </Link>
    </div>
  );
} 