const path = require("path")

const queries = require("./src/utils/algolia_queries")

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Sans Titre`,
    description: `A arte da escrita sobre um outro ponto de vista.`,
    author: `@OzRulez`,
    siteUrl: `https://sanstitre.com.br`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        // eslint-disable-next-line no-undef
        path: path.join(__dirname, `static`, `assets`, `album`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // eslint-disable-next-line no-undef
        path: path.join(__dirname, `static`, `assets`, `image`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        // eslint-disable-next-line no-undef
        path: path.join(__dirname, `posts`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        // eslint-disable-next-line no-undef
        path: path.join(__dirname, `static`, `data`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: `uploads`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        // eslint-disable-next-line no-undef
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        // eslint-disable-next-line no-undef
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        // eslint-disable-next-line no-undef
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sans Titre Project`,
        short_name: `Sans Titre`,
        start_url: `/`,
        background_color: `#faf9f8`,
        theme_color: `#faf9f8`,
        display: `minimal-ui`,
        icon: path.resolve("static/assets/image/favicon.png"), // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ],
}
