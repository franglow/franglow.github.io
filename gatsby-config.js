const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Frontend & Product Engineer`,
    author: 'Fran Cortez',
    avatar: '/fran-avatar.jpg',
    siteUrl: `https://franglow.github.io/`,
    description:
      'Fran Cortez — frontend and product engineer in Berlin, more than ten years on the web, building with AI as the default.',
    bioplus:
      'More than ten years building for the web — accessibility for Walt Disney Parks and Resorts Online, the check-in platform at LAN Airlines, and the component system behind Savings United’s campaign sites. I build with AI as the default: I direct the tools, review what they produce, and own what ships. Today I turn vague goals from founders and small teams into live sites such as base-pages.com and carma-retreats.com.',
  },
  flags: { PRESERVE_FILE_DOWNLOAD_CACHE: true, PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    process.env.GOOGLE_ANALYTICS && {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    'gatsby-plugin-react-helmet',
  ].filter(Boolean),
};
