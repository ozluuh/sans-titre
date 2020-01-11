const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Add slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `pages` directory into `/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

// Create post pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/article.js`)
  const blogListTemplate = path.resolve(`./src/templates/article-list.js`)

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD MMM, YYYY")
              image
            }
            timeToRead
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD MMM, YYYY")
              image
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD MMM, YYYY")
              image
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    // Create blog post pages.
    posts.forEach(({ node, next, previous }) => {
      createPage({
        // Path for this page — required
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
          previousPost: previous,
          nextPost: next,
        },
      })
    })

    // Posts in page
    const postsPerPage = 3
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}
