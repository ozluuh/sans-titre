import React from 'react';

import PostItem from '../PostItem';
import { Wrapper, Title } from './style';

const RealatedPosts = ({ nextContent, prevContent }) => {
  return (
    <Wrapper>
      <Title>Confira também</Title>
      {prevContent && (
        <PostItem
          slug={prevContent.fields.slug}
          title={prevContent.frontmatter.title}
          description={prevContent.excerpt}
          date={prevContent.frontmatter.date}
          author={prevContent.frontmatter.author}
        />
      )}
      {nextContent && (
        <PostItem
          slug={nextContent.fields.slug}
          title={nextContent.frontmatter.title}
          description={nextContent.excerpt}
          date={nextContent.frontmatter.date}
          author={nextContent.frontmatter.author}
        />
      )}
    </Wrapper>
  );
};

export default RealatedPosts;
