const postsQuery = `
{
    posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }) {
        edges {
            node {
                objectID : id
                fields {
                    slug
                }
                frontmatter {
                    date_timestamp: date
                    date(locale: "pt-br", formatString: "DD MMM, YYYY")
                    title
                    dedicate
                    categories
                    tags
                    image
                }
                excerpt(pruneLength: 1000)
            }
        }
    }
}
`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    // eslint-disable-next-line no-undef
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings: {
      attributesToSnipet: ["excerpt:20"],
    },
  },
]

module.exports = queries
