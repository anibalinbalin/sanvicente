import { Project } from '@/data/projects/types';
import { css } from 'ds/css';
import { stack } from 'ds/patterns';
import { linkBox } from 'ds/patterns/link-box';
import Link from 'next/link';
import { AspectRatioRoot } from './aspect-ratio';
import { ThemeImage } from './theme-image';
import { useLocale, useTranslations } from 'next-intl';
import { PATHS } from '@/app/_utils/constants/paths.constants';

interface ProjectCardProps {
  project: Project;
  sizes?: string;
}

export const ProjectCard = ({ project, sizes = '100vw' }: ProjectCardProps) => {
  const { featureMediaNarrow, slug, category, name, translationKey, categoryTranslationKey, media } = project;
  const src = featureMediaNarrow.url;
  const darkSrc = featureMediaNarrow.darkUrl;
  const locale = useLocale();
  const t = useTranslations();
  const photoCount = media?.length || 0;

  return (
    <Link
      href={PATHS.project(slug)}
      data-testid={slug}
      className={css({
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        _hover: {
          opacity: 0.9,
        },
      })}
    >
      <div className={stack({ gap: 's' })}>
        <div
          className={css({
            rounded: 'card',
            bgColor: 'slate8',
            pos: 'relative',
            overflow: 'hidden',
          })}
        >
          <AspectRatioRoot ratio={220 / 275} style={{ position: 'relative' }}>
            <ThemeImage
              src={src}
              darkSrc={darkSrc}
              priority
              alt={translationKey ? t(translationKey) : name}
              fill
              style={{ objectFit: 'cover' }}
              quality={85}
              sizes={sizes}
            />
          </AspectRatioRoot>
        </div>
        <div className={css({ px: '3xs' })}>
          <h3
            className={css({
              textStyle: 'base',
              lineHeight: 'tight',
              fontSize: '1',
              pb: '3xs',
            })}
          >
            {translationKey ? t(translationKey) : name} ({t('images.count', { count: photoCount })})
          </h3>
          <p
            className={css({
              textStyle: 'base',
              color: 'text2',
              fontSize: '1',
            })}
          >
            {categoryTranslationKey ? t(categoryTranslationKey) : category}
          </p>
        </div>
      </div>
    </Link>
  );
};
