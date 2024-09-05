/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  siteUrl: dev ? 'http://localhost:3000' : 'https://velingrad24.com',
};

// add your private routes here
const exclude = [
  '/dashboard*',
  '/settings*',
  '/onboarding*',
  '/blog/tags*',
  '/auth*',
];
 
/** @type {import('next-sitemap').IConfig} */
const config = {
  exclude,
  // .. the configuration above
};
 
export default config;