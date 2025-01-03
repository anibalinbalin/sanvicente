import { type Project } from '@/data/projects/types';
import { getProject, getProjects } from '@/app/_utils/helpers/projects.helpers';
import { notFound } from 'next/navigation';
import { css } from 'ds/css';
import { stack, flex } from 'ds/patterns';
import { BackToLink } from '@/app/_components/back-to-link';
import { PATHS } from '@/app/_utils/constants/paths.constants';
import { ThemeImage } from '@/app/_components/theme-image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

interface Props {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug, locale } = await params;
  const [project, projects, t] = await Promise.all([
    getProject(slug),
    getProjects(),
    getTranslations()
  ]);

  if (!project) {
    notFound();
  }

  // Find the current project index and adjacent projects
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className={stack({ gap: 'xl' })}>
      <div>
        <BackToLink href={`/${locale}${PATHS.home}`}>{t('navigation.back.gallery')}</BackToLink>
        <h1 className={css({ textStyle: 'heading' })}>
          {project.translationKey ? t(project.translationKey) : project.name}
        </h1>
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
              alt={`${project.translationKey ? t(project.translationKey) : project.name} - ${t('images.count', { count: index + 1 })}`}
              width={1920}
              height={1080}
              style={{ width: '100%', height: 'auto' }}
              quality={85}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className={flex({ justify: 'space-between', align: 'center' })}>
        {prevProject ? (
          <Link
            href={PATHS.project(prevProject.slug)}
            className={css({
              textDecoration: 'none',
              color: 'text2',
              _hover: { color: 'text1' },
            })}
          >
            ← {prevProject.translationKey ? t(prevProject.translationKey) : prevProject.name}
          </Link>
        ) : (
          <div />
        )}
        {nextProject ? (
          <Link
            href={PATHS.project(nextProject.slug)}
            className={css({
              textDecoration: 'none',
              color: 'text2',
              _hover: { color: 'text1' },
            })}
          >
            {nextProject.translationKey ? t(nextProject.translationKey) : nextProject.name} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
} 