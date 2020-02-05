import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import Search from '../../components/Search';

import { Wrapper } from './style';

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <Wrapper>
      <Search />
    </Wrapper>
  </Layout>
);

export default SearchPage;
