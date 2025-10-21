import { getServerSideSitemapIndex } from 'next-sitemap';

export async function GET() {
  return getServerSideSitemapIndex([
    'https://sanvicente.house/en/images/server-sitemap.xml',
    'https://sanvicente.house/es/images/server-sitemap.xml',
  ]);
}
