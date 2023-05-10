/** @type {import('next-sitemap').IConfig} */
module.exports = {
   siteUrl: 'https://mantine-template-one.vercel.app',
   generateRobotsTxt: true,
   robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
   },
};
