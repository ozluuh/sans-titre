import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO title={post.frontmatter.title} image={post.frontmatter.image} />
      <Post object={post} nextContent={next} previousContent={previous} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt-br", formatString: "DD MMM, YYYY")
        title
        image
        author
        dedicate
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
