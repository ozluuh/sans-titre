import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Article } from "../components/Post/style"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <Article as="div">
      <Search />
    </Article>
  </Layout>
)

export default SearchPage
