const dotenv = require('dotenv');

dotenv.config();
const { githubApiQuery } = require('./src/utils/github-api');

module.exports = {
  siteMetadata: {
    title: `Frontend & Product Engineer`,
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
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: 'https://api.github.com/graphql', // default Github GraphQL v4 API endpoint

        // token: required by the GitHub API
        token: process.env.GITHUB_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: githubApiQuery,

        // variables: defaults to variables needed for a search query
        variables: {
          github_login: 'franglow',
        },
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
