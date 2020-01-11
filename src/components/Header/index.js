import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { SocialLinks, MenuLinks } from "../Data"
import getThemeColor from "../../utils/getThemeColor"

import "./style.css"

const Header = () => (
  <header className="site-header">
    <h3 className="site-title">
      <AniLink
        cover
        direction="down"
        duration={0.8}
        bg={getThemeColor()}
        to="/"
      >
        Sans Titre
      </AniLink>
    </h3>
    <nav className="menu-list">
      <MenuLinks />
      <SocialLinks />
    </nav>
    <div className="dropdown">
      <button className="dropbtn">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div className="dropdown-content">
        <MenuLinks />
        <SocialLinks showLabel />
      </div>
    </div>
  </header>
)

export default Header
