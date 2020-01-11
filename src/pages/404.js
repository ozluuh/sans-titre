import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import "./style.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div style={{ textAlign: "center" }}>
      <h1 className="notFoundTitle">404</h1>
      <p style={{ color: "var(--text)", transition: "0.25s" }}>
        Você acredita? A página ainda não existe. ='(
      </p>
      <AniLink to="/" className="paginator-button paginator-active">
        Que tal explorar o blog enquanto essa página não aparece, hein?
      </AniLink>
    </div>
  </Layout>
)

export default NotFoundPage
