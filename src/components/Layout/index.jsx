import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from "../../styles/global";
import MeyerReset from '../../styles/reset';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePersistedState';
import Footer from '../Footer';
import Header from '../Header';
import Navigator from '../Navigator';
import { Wrapper, Container } from './style';

const Layout = ({ children }) => {
  const [theme, setTheme] = usePersistedState(
    'theme',
    dark
  );

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  const {
    site: {
      siteMetadata: { title, description }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <MeyerReset />
          <GlobalStyle />
        <Wrapper id="App">
          <TransitionPortal level="top">
            <Header title={title} tagline={description} />
          </TransitionPortal>
          <Container>{children}</Container>
          <Footer title={title} />
          <TransitionPortal level="top">
            <Navigator toggleTheme={toggleTheme} />
          </TransitionPortal>
        </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
