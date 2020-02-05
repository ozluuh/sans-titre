const path = require('path');

const siteMetadata = require('./config/metadata');
const queries = require('./src/utils/algolia_queries');
require('dotenv').config();

const pluginConfig = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-transition-link`,
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      // eslint-disable-next-line no-undef
      path: `${__dirname}/src/pages`,
      ignore: [`**/style.(js|ts)?(x)`]
    }
  },
  // First to be compatible with Netlify CMS
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uploads`,
      // eslint-disable-next-line no-undef
      path: path.resolve(`${__dirname}/static/assets/album`)
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `image`,
      // eslint-disable-next-line no-undef
      path: path.resolve(`${__dirname}/static/assets/image`)
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      // eslint-disable-next-line no-undef
      path: path.resolve(`${__dirname}/posts`)
    }
  },
  {
    resolve: `gatsby-plugin-netlify-cms`,
    options: {
      htmlTitle: `ST | CMS`,
      // eslint-disable-next-line no-undef
      htmlFavicon: `${__dirname}/static/assets/image/favicon.ico`
    }
  },
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: "Roboto",
            variants: ["400", "700"],
            fontDisplay: 'swap',
          },
          {
            family: "Montserrat",
            variants: ["700", "900"],
            fontDisplay: 'swap',
          },
        ],
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Sans Titre Blog`,
      short_name: siteMetadata.title,
      description: siteMetadata.description,
      start_url: `/`,
      background_color: `#faf9f8`,
      theme_color: `#323130`,
      display: `standalone`,
      // eslint-disable-next-line no-undef
      icon: `${__dirname}/static/assets/image/favicon.png`
    }
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              })
            })
          },
          query: `
          {
            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    image
                    author
                  }
                  excerpt(pruneLength: 450, truncate: true, format: HTML)
                }
              }
            }
          }
          `,
          output: "/feed.xml",
          title: "Sans Titre — RSS Feed",
        },
      ],
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-sitemap`
];

// eslint-disable-next-line no-undef
if (process.env.ENVIRON !== 'devl') {
  const algolia = {
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
      enablePartialUpdates: true
    }
  };

  pluginConfig.push(algolia);
}

module.exports = {
  siteMetadata,
  plugins: pluginConfig
};
