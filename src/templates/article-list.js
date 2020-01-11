import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Paginator from "../components/Paginator"

const path = require("path")

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

      {postList.map(
        (
          {
            node: {
              fields: { slug },
              frontmatter: { date, title, image },
              timeToRead,
            },
          },
          i
        ) => (
          <>
            <PostItem
              slug={slug}
              date={date}
              timeToRead={timeToRead}
              title={title}
              image={path.resolve(image || "assets/image/default.jpg")}
              key={`sans-titre-post-item-${i}`}
            />
          </>
        )
      )}
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
            image
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
