/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/favicon_io/android-chrome-512x512.png",
      },
    },
  ],
};
