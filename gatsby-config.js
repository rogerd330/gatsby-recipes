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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-179039194-1",
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c89v3ldpp2uf`,
        accessToken: `gR79XR2sare5Gr_-OPehnwmFzi-OHwSM_sDPrkIHGA8`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}
