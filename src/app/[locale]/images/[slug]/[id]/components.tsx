'use client';

import * as React from 'react';
import { flex, stack } from 'ds/patterns';
import { BackToLink } from '@/app/_components/back-to-link';
import { css } from 'ds/css';
import { ThemeImage } from '@/app/_components/theme-image';
import type { ProjectMedia as ProjectMediaType, ProjectClient } from '@/data/projects/types';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { PATHS } from '@/app/_utils/constants/paths.constants';

interface ProjectHeaderProps {
  name?: string;
  client?: ProjectClient;
  media: ProjectMediaType[];
  translationKey?: string;
}

export const ProjectHeader = ({ name, client, media, translationKey }: ProjectHeaderProps) => {
  const locale = useLocale();
  const t = useTranslations();
  const navT = useTranslations('navigation');
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark';
  const photoCount = isDark ? media.filter(item => item.darkUrl).length : media.length;

  return (
    <div>
      <BackToLink href={PATHS.gallery(locale)}>{navT('back.gallery')}</BackToLink>
      <div
        className={flex({
          wrap: 'wrap',
          gap: '3xs',
          justify: 'space-between',
          align: 'baseline',
          direction: { base: 'column', bp2: 'row' },
        })}
      >
        <h1 className={css({ textStyle: 'heading' })}>
          {translationKey ? t(translationKey) : name}
        </h1>
        {client != null && (
          <h2
            className={css({
              textStyle: 'base',
              color: 'text2',
              fontSize: '1',
            })}
          >
            {client.translationKey ? t(client.translationKey, { count: photoCount }) : client.name}
          </h2>
        )}
      </div>
    </div>
  );
};

interface ProjectMediaProps {
  media: ProjectMediaType[];
}

export const ProjectMedia = ({ media }: ProjectMediaProps) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark';
  const filteredMedia = isDark 
    ? media.filter(item => item.darkUrl) 
    : media;

  return (
    <div
      className={css({
        display: 'grid',
        gap: 's',
      })}
    >
      {filteredMedia.map(({ mediaType, url, darkUrl, width, height }, idx) => {
        if (mediaType == null) return null;

        return (
          <div
            className={css({
              rounded: 'card',
              overflow: 'hidden',
              bgColor: 'slate8',
              w: 'full',
            })}
            key={`${idx}-${theme || 'light'}`}
          >
            <ThemeImage
              src={url}
              darkSrc={darkUrl}
              alt=""
              width={width}
              height={height}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              sizes="100vw"
              quality={100}
              priority={idx < 2}
              onError={(e) => {
                console.error('Error loading image:', url, e);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}; 