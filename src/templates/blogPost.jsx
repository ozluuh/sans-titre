import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Post from '../components/Post';
import RelatedPosts from '../components/RelatedPosts';
import SEO from '../components/seo';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Post data={post} />
      <RelatedPosts nextContent={next} prevContent={previous} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt-br", formatString: "DD MMM, YYYY [às] HH:mm")
        title
        author
        dedicate
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
