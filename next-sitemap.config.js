/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sanvicente.house',
  generateRobotsTxt: true,
  exclude: [
    '/server-sitemap-index.xml',
    '/en/images/server-sitemap.xml',
    '/es/images/server-sitemap.xml',
    '/all',
    '/now',
  ],
  additionalPaths: async (config) => {
    const result = [];

    // Add localized homepage routes
    result.push({ loc: '/es', changefreq: 'daily', priority: 1.0 });
    result.push({ loc: '/en', changefreq: 'daily', priority: 1.0 });

    // Add localized house tips pages
    result.push({ loc: '/es/house', changefreq: 'weekly', priority: 0.8 });
    result.push({ loc: '/en/house', changefreq: 'weekly', priority: 0.8 });

    // Add localized floor plans pages
    result.push({ loc: '/es/planos', changefreq: 'weekly', priority: 0.8 });
    result.push({ loc: '/en/planos', changefreq: 'weekly', priority: 0.8 });

    // Add localized images gallery pages
    result.push({ loc: '/es/images', changefreq: 'weekly', priority: 0.7 });
    result.push({ loc: '/en/images', changefreq: 'weekly', priority: 0.7 });

    return result;
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.sanvicente.house/server-sitemap-index.xml',
    ],
  },
};
