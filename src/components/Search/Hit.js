import React from 'react';

import PostItem from '../PostItem';

const Hit = ({ hit }) => (
  <section>
    <PostItem
      slug={hit.fields.slug}
      date={hit.date}
      title={hit.title}
      description={hit.excerpt}
      author={hit.author}
    />
  </section>
);

export default Hit;
