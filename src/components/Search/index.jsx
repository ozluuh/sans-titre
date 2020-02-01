import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import { Wrapper } from "./style.js"
import Hit from "./Hit"

const algolia = {
  // eslint-disable-next-line no-undef
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  // eslint-disable-next-line no-undef
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  // eslint-disable-next-line no-undef
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => (
  <Wrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox translations={{ placeholder: `Busque aqui...` }} />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
          },
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </Wrapper>
)

export default Search
