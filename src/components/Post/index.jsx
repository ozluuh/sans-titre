import React from 'react';

import {
  Article,
  Title,
  Author,
  Body,
  Dedicate,
  Date,
  TextDate
} from './style';

const Post = ({ data }) => {
  const { html: content, frontmatter } = data;
  const {
    date: postDate,
    title: postTitle,
    author: postAuthor,
    dedicate: postDedicate
  } = frontmatter;

  return (
    <Article>
      <Title>{postTitle}</Title>
      <Author>{postAuthor}</Author>
      {postDedicate.length > 0 && (
        <Dedicate>{postDedicate}</Dedicate>
      )}
      <Body
        dangerouslySetInnerHTML={{ __html: content }}
      ></Body>
      <TextDate>
        Publicado originalmente em{' '}
        <Date pubdate>{postDate}</Date>
      </TextDate>
    </Article>
  );
};

export default Post;
