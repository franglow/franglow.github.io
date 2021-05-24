const dotenv = require('dotenv');

dotenv.config();
const { githubApiQuery } = require('./src/utils/github-api');

module.exports = {
  siteMetadata: {
    title: `Fran's web site`,
    siteUrl: `https://franglow.github.io/`,
    description: 'This is an awesome personal website!',
    bioplus:
      'At the moment my focus is on the awesome framework Gatsby which this website is based on. Please check the projects below through which I was improving my JavaScript skills during the past months.',
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
          github_login: process.env.GITHUB_LOGIN,
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
