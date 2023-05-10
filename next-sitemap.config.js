/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://reel-riot.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
