import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Header from "../Header"
import Footer from "../Footer"
import ChangeThemeButton from "../ChangeThemeButton"

import "./style.css"
import "../../styles/reset.css"
import "../../styles/theme.css"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <TransitionPortal level="top">
        <Header />
      </TransitionPortal>
      <div className="posts-wrapper">{children}</div>
      <ChangeThemeButton />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
