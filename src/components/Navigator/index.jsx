import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { ArrowUpward as ArrowUp } from 'styled-icons/material/ArrowUpward';
import { Home } from 'styled-icons/material/Home';
import { InvertColors } from 'styled-icons/material/InvertColors';
import { Search } from 'styled-icons/material/Search';

import { Wrapper, IconWrapper, GatsbyLink } from './style';

const Navigator = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Wrapper>
      <IconWrapper title="Principal">
        <GatsbyLink
          cover
          to="/"
          direction="left"
          bg={colors.background}
        >
          <Home />
        </GatsbyLink>
      </IconWrapper>
      <IconWrapper title="Busca">
        <GatsbyLink
          cover
          to="/search"
          direction="left"
          bg={colors.background}
        >
          <Search />
        </GatsbyLink>
      </IconWrapper>
      <IconWrapper
        title={`Mudar para tema ${
          title === 'light' ? 'escuro' : 'claro'
        }`}
        onClick={toggleTheme}
      >
        <InvertColors />
      </IconWrapper>
      <IconWrapper
        title="Topo"
        onClick={() => {
          window.scroll({ top: 0, behavior: 'smooth' });
        }}
      >
        <ArrowUp />
      </IconWrapper>
    </Wrapper>
  );
};

export default Navigator;
