'use client';

import { ArrowLink } from '@/app/_components/arrow-link';
import { PATHS } from '@/app/_utils/constants/paths.constants';
import { flex } from 'ds/patterns';
import { useTranslations } from 'next-intl';

interface ProjectNavigationProps {
  previousProject: { slug: string; name: string; translationKey?: string } | null;
  nextProject: { slug: string; name: string; translationKey?: string } | null;
  locale: string;
}

export const ProjectNavigation = ({
  previousProject,
  nextProject,
  locale,
}: ProjectNavigationProps) => {
  const t = useTranslations('navigation');
  const projectT = useTranslations();

  return (
    <div className={flex({ justify: 'space-between' })}>
      {previousProject && (
        <ArrowLink 
          href={PATHS.project(previousProject.slug)}
          direction="left"
        >
          {t('previous')}: {previousProject.translationKey ? projectT(previousProject.translationKey) : previousProject.name}
        </ArrowLink>
      )}
      {nextProject && (
        <ArrowLink 
          href={PATHS.project(nextProject.slug)}
        >
          {t('next')}: {nextProject.translationKey ? projectT(nextProject.translationKey) : nextProject.name}
        </ArrowLink>
      )}
    </div>
  );
}; 