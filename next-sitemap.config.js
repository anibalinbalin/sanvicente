/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sanvicente.home',
  generateRobotsTxt: true,
  exclude: [
    '/server-sitemap-index.xml',
    '/work/server-sitemap.xml',
    '/writing/element-test',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.hunterjennings.dev/server-sitemap-index.xml',
    ],
  },
};
