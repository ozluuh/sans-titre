import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import {
  Description,
  Title,
  Wrapper,
  GatsbyLink
} from './style';

const Header = ({ title, tagline }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Title>
        <GatsbyLink
          cover
          to="/"
          direction="down"
          bg={colors.background}
        >
          {title}
        </GatsbyLink>
      </Title>
      <Description>{tagline}</Description>
    </Wrapper>
  );
};

export default Header;
