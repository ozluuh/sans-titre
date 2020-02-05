import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Wrapper, Text, GatsbyLink } from './style';

const Footer = ({ title }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Text>
        © 2019 - 2020{' '}
        <GatsbyLink
          cover
          to="/"
          direction="up"
          bg={colors.background}
        >
          {title}
        </GatsbyLink>{' '}
        - Todos os direitos reservados.
      </Text>
    </Wrapper>
  );
};

export default Footer;
