import * as React from 'react';
import { PATHS } from '@/app/_utils/constants/paths.constants';
import { css } from 'ds/css';
import { stack, flex } from 'ds/patterns';
import { getProject, getProjects } from '@/app/_utils/helpers/projects.helpers';
import { notFound } from 'next/navigation';
import { BackToLink } from '@/app/_components/back-to-link';
import { ThemeImage } from '@/app/_components/theme-image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

interface Props {
  params: {
    slug: string;
    locale: string;
    id: string;
  };
}

export default async function ProjectPage({ params }: Props) {
  // In Next.js 15, we don't need to await params directly
  const { slug: projectSlug, locale, id } = params;
  
  const [project, projects, t] = await Promise.all([
    getProject(projectSlug),
    getProjects(),
    getTranslations()
  ]);

  if (!project) {
    notFound();
  }

  // Find the current project index and adjacent projects
  const currentIndex = projects.findIndex(p => p.slug === projectSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className={stack({ gap: 'xl' })}>
      <div>
        <BackToLink href={`/${locale}${PATHS.home}`}>{t('navigation.back.gallery')}</BackToLink>
        <h1 className={css({ textStyle: 'heading' })}>{t(`projects.${project.slug.replace('-', '_')}`)}</h1>
      </div>
      <div className={stack({ gap: 'xl' })}>
        {project.media.map((media, index) => (
          <div
            key={`${project.id}-${index}`}
            className={css({
              w: 'full',
              rounded: 'card',
              overflow: 'hidden',
              bgColor: 'slate8',
            })}
          >
            <ThemeImage
              src={media.url}
              darkSrc={media.darkUrl}
              alt={`${t(`projects.${project.slug.replace('-', '_')}`)} - ${t('images.count', { count: index + 1 })}`}
              width={1920}
              height={1080}
              style={{ width: '100%', height: 'auto' }}
              quality={85}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        ))}
      </div>
      <div className={flex({ justify: 'space-between', align: 'center' })}>
        {prevProject ? (
          <Link
            href={PATHS.project(prevProject.slug, id)}
            className={css({
              textDecoration: 'none',
              color: 'text2',
              _hover: { color: 'text1' },
            })}
          >
            ← {t(`projects.${prevProject.slug.replace('-', '_')}`)}
          </Link>
        ) : (
          <div />
        )}
        {nextProject ? (
          <Link
            href={PATHS.project(nextProject.slug, id)}
            className={css({
              textDecoration: 'none',
              color: 'text2',
              _hover: { color: 'text1' },
            })}
          >
            {t(`projects.${nextProject.slug.replace('-', '_')}`)} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
