/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My First Gatsby Site with GraphQL`,
    description: `My First Front End Site`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c89v3ldpp2uf`,
        accessToken: `gR79XR2sare5Gr_-OPehnwmFzi-OHwSM_sDPrkIHGA8`,
      },
    },
    `gatsby-plugin-sass`
  ],
}
