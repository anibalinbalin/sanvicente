import { css } from 'ds/css';
import { stack } from 'ds/patterns';
import { BackToLink } from '../_components/back-to-link';
import { PATHS } from '../_utils/constants/paths.constants';
import { getProjects } from '../_utils/helpers/projects.helpers';
import { ThemeImage } from '../_components/theme-image';
import { useLocale } from 'next-intl';

export const metadata = {
  title: 'All Images',
  description: 'View all images in a single page',
};

export default function AllImages() {
  const projects = getProjects();
  const locale = useLocale();

  return (
    <div className={stack({ gap: 'xl' })}>
      <div>
        <BackToLink href={`/${locale}${PATHS.home}`}>Back to home</BackToLink>
        <h1 className={css({ textStyle: 'heading' })}>All Images</h1>
      </div>
      <div className={stack({ gap: 'xl' })}>
        {projects.map((project) => {
          return project.media.map((media, mediaIndex) => (
            <div
              key={`${project.id}-${mediaIndex}`}
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
                alt={`${project.name} - Image ${mediaIndex + 1}`}
                width={1920}
                height={1080}
                style={{ width: '100%', height: 'auto' }}
                quality={85}
                sizes="100vw"
              />
            </div>
          ));
        })}
      </div>
    </div>
  );
} 