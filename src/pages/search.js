import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import MiscPageLayout from "../components/MiscPageLayout"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <MiscPageLayout>
      <Search />
    </MiscPageLayout>
  </Layout>
)

export default SearchPage
