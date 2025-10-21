/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sanvicente.house',
  generateRobotsTxt: true,
  exclude: [
    '/server-sitemap-index.xml',
    '/en/images/server-sitemap.xml',
    '/es/images/server-sitemap.xml',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://sanvicente.house/server-sitemap-index.xml',
    ],
  },
};
