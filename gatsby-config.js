const path = require("path")
const queries = require("./src/utils/algolia_queries")
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Sans Titre",
    description: "a blog about the art of writting",
    author: "@ozrulez",
    siteUrl: "https://sanstitre.com.br",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    // First to be compatible with Netlify CMS
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
        name: `uploads`,
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
    `gatsby-transformer-remark`,
    // Algolia Search Engine
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
      resolve: "gatsby-plugin-exclude",
      options: { paths: ["/assets/album/**"] },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
  ],
}
