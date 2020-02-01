import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Header from "../Header"
import Footer from "../Footer"
import Navigator from "../Navigator"
import GlobalStyle from "../../styles/global"

import { Wrapper, Container } from "./style"

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Wrapper id="App">
      <GlobalStyle />
      <TransitionPortal level="top">
        <Header title={title} tagline={description} />
      </TransitionPortal>
      <Container>{children}</Container>
      <Footer title={title} />
      <TransitionPortal level="top">
        <Navigator />
      </TransitionPortal>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
