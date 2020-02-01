import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Paginator from "../components/Paginator"
import { Article } from "../components/Post/style"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 <= 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <Article as="div">
        {postList.map(
          (
            {
              node: {
                fields: { slug },
                frontmatter: { date, title, author },
                excerpt,
              },
            },
            i
          ) => (
            <PostItem
              slug={slug}
              title={title}
              description={excerpt}
              date={date}
              author={author}
              key={`sans-titre-post-item-${i}`}
            />
          )
        )}
      </Article>
      <Paginator
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD MMM, YYYY")
            title
            author
          }
          timeToRead
          excerpt(pruneLength: 125)
        }
      }
    }
  }
`

export default BlogList
