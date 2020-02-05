import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Wrapper, Title, Text, GatsbyLink } from './style';

const path = require('path');

const Card = ({
  title,
  description,
  date,
  author,
  slug
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Title>
        <GatsbyLink
          cover
          to={path.resolve(slug)}
          direction="down"
          bg={colors.background}
        >
          {title}
        </GatsbyLink>
      </Title>
      <Text>{description}</Text>
      <Text>
        Publicado em{' '}
        <GatsbyLink
          cover
          to={path.resolve(slug)}
          direction="down"
          bg={colors.background}
        >
          {date + ' '}
        </GatsbyLink>
        por {author}
      </Text>
    </Wrapper>
  );
};

export default Card;
