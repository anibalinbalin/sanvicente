import { getProjects } from '@/app/_utils/helpers/projects.helpers';
import { getServerSideSitemap } from 'next-sitemap';
import { PATHS } from '@/app/_utils/constants/paths.constants';

export async function GET() {
  const projects = getProjects();
  return getServerSideSitemap(
    projects.map((project) => ({
      loc: `${PATHS.base}${PATHS.project(project.slug)}`,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })),
  );
}
