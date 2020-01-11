import React from "react"

import { SocialLinks } from "../Data"

import "./style.css"

const Footer = () => (
  <footer className="footer">
    <SocialLinks />
    <div className="post-date">
      <a href="/">
        Sans Titre | A arte da escrita sobre um outro ponto de vista por Luís
        Paulino
      </a>
    </div>
  </footer>
)

export default Footer
