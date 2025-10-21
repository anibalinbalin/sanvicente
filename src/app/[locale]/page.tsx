import * as React from 'react';
import { VisuallyHiddenRoot } from '@/app/_components/visually-hidden';
import { flex, grid, hstack, stack } from 'ds/patterns';
import { css, cx } from 'ds/css';
import Link from 'next/link';
import { link } from 'ds/recipes';
import { PATHS } from '@/app/_utils/constants/paths.constants';
import { token } from 'ds/tokens';
import ArrowRightIcon from '@/app/_components/icons/ArrowRightIcon';
import { getProjects } from '@/app/_utils/helpers/projects.helpers';
import { ProjectCard } from '@/app/_components/project-card';
import { useTranslations } from 'next-intl';
import { MapClientWrapper } from '@/app/_components/map-client-wrapper';
import { useLocale } from 'next-intl';
import { ThemeImage } from '@/app/_components/theme-image';

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <div>
      <VisuallyHiddenRoot>
        <h1>{t('title')}</h1>
      </VisuallyHiddenRoot>
      <div className={stack({ gap: '3xl' })}>
        <IntroductionSection />
        <WorkSection>
          <ProjectGrid />
        </WorkSection>
        <ConnectSection />
      </div>
    </div>
  );
}

const IntroductionSection = () => {
  const t = useTranslations('home.introduction');
  
  return (
    <section className={stack({ gap: 'xl' })}>
      <div className={stack({ gap: 'm' })}>
        <h2
          className={css({
            textStyle: 'serif',
            lineHeight: 'tight',
          })}
          aria-label='Who is Hunter Jennings'
        >
          {t('title')}
        </h2>
        <p className={css({ textStyle: 'body' })}>
          {t('subtitle')}
        </p>
      </div>
      <div className={css({ w: 'full', maxW: '800px', mx: 'auto', rounded: 'card', overflow: 'hidden' })}>
        <ThemeImage
          src="/assets/frontpage/IMG_1271.webp"
          darkSrc="/assets/frontpage/night_frontpage.webp"
          alt="Pueblo San Vicente"
          width={2000}
          height={1500}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>
      <MapClientWrapper />
      <div className={stack({ gap: 'xs' })}>
        <h2
          className={css({ textStyle: 'base', color: 'text2', fontSize: '1' })}
        >
          Descripción
        </h2>
        <p className={css({ textStyle: 'base', whiteSpace: 'pre-line' })}>
          {t('description')}
        </p>
      </div>
    </section>
  );
};

const WorkSection = ({ children }: { children?: React.ReactNode }) => {
  const t = useTranslations('home.gallery');

  return (
    <section id="gallery" className={stack({ gap: 's' })}>
      <h2 className={css({ textStyle: 'base', lineHeight: 'tight' })}>
        {t('title')}
      </h2>
      {children}
    </section>
  );
};

const ProjectGrid = () => {
  const projects = getProjects();

  return (
    <div
      className={grid({
        gap: 'm',
        columns: { base: 1, bp1: 2, bp2: 3 },
      })}
    >
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectCard
            project={project}
            sizes='(max-width: 449px) 100vw, (max-width: 767px) 50vw, 33vw'
          />
        </div>
      ))}
    </div>
  );
};

const ArrowLink = ({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) => {
  return (
    <div className={hstack()}>
      <Link
        href={href}
        className={cx(
          link({
            color: 'secondary',
          }),
          css({ fontSize: '1', lineHeight: 'tight' }),
        )}
        style={{ display: 'block' }}
      >
        {children}
      </Link>
      <ArrowRightIcon aria-hidden color={token('colors.slate11')} />
    </div>
  );
};

const ConnectSection = () => {
  const t = useTranslations('home.connect');
  const locale = useLocale();
  
  return (
    <section className={stack({ gap: 'm' })}>
      <h2 className={css({ textStyle: 'base', lineHeight: 'tight' })}>
        {t('title')}
      </h2>
      <div className={stack({ gap: 'xl' })}>
        <p className={css({ textStyle: 'body' })}>
          {t('subtitle')}
        </p>
        <ul className={stack({ gap: 's' })}>
          <ConnectLinkListItem label={t('links.whatsapp')}>
            <ConnectListLink href={PATHS.twitter}>
              +598 99108220
            </ConnectListLink>
          </ConnectLinkListItem>
          <ConnectLinkListItem label={t('links.email')}>
            <ConnectListLink href={PATHS.email}>
              laurafuentesaro@gmail.com
            </ConnectListLink>
          </ConnectLinkListItem>
          <ConnectListLink href={`/${locale}${PATHS.house}`}>
            {t('links.houseTips')}
          </ConnectListLink>
          <ConnectListLink href={`/${locale}${PATHS.amenities}`}>
            {t('links.amenities')}
          </ConnectListLink>
          <ConnectListLink href={`/${locale}${PATHS.planos}`}>
            {t('links.planos')}
          </ConnectListLink>
        </ul>
      </div>
    </section>
  );
};

interface ConnectLinkListItemProps {
  label: string;
}

const ConnectLinkListItem = ({
  label,
  children,
}: React.PropsWithChildren<ConnectLinkListItemProps>) => {
  return (
    <li className={css({ display: 'flex', gap: 's', alignItems: 'center', flexWrap: 'wrap' })}>
      <h3
        className={css({
          textStyle: 'base',
          fontSize: '1',
          lineHeight: 'tight',
        })}
      >
        {label}
      </h3>
      <div>{children}</div>
    </li>
  );
};

const ConnectListLink = ({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) => {
  return (
    <Link
      className={cx(
        link({
          color: 'secondary',
        }),
        css({ display: 'inline-block', lineHeight: 'tight', fontSize: '1' }),
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
