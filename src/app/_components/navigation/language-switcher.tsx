'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { TranslateIcon } from '../icons/TranslateIcon';
import { css, cx, cva } from 'ds/css';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, pathnames } from '@/app/i18n/config';

const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales, pathnames });

export const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={switchLocale}
      className={cx(circle({ size: 15 }), iconButton({ isActive: false }))}
      aria-label={`Change language to ${locale === 'en' ? 'Spanish' : 'English'}`}
      disabled={isPending}
    >
      <TranslateIcon />
    </button>
  );
};

const circle = cva({
  base: {
    display: 'block',
    transitionDuration: 'default',
    transitionTimingFunction: 'default',
    transitionProperty: 'color',
    gridArea: '1 / 1 / 1 / 1',
    zIndex: 2,
  },
  variants: {
    size: {
      15: {
        width: '15px',
        height: '15px',
      },
    },
  },
});

const iconButton = cva({
  base: {
    display: 'block',
    transitionDuration: 'default',
    transitionTimingFunction: 'default',
    transitionProperty: 'color',
    gridArea: '1 / 1 / 1 / 1',
    zIndex: 2,
    cursor: 'pointer',
    outline: 'none',
    _focus: {
      outline: 'none',
      boxShadow: 'none'
    }
  },
  variants: {
    isActive: {
      true: {
        color: 'slate12',
      },
      false: {
        color: 'slate8',
        _hover: {
          color: 'slate12',
        },
      },
    },
  },
}); 