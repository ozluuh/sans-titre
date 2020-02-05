import React from 'react';
import Helmet from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const path = require('path');

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription =
    description || site.siteMetadata.description;

  const url = site.siteMetadata.siteUrl;
  const ogImage = `${path.join(
    url,
    path.resolve(image || 'assets/image/default.jpg')
  )}`;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
       {
          name: `HandheldFriendly`,
          content: 'True'
        },
        {
          name: `MobileOptimized`,
          content: '320'
        },
        // Site Verification
        {
          name: `google-site-verification`,
          content:
            'vbCv5zpXHJmeRCS0PRV4bDB1QuEatTLfeSnRGNXJ7xM'
        },
        {
          name: `msvalidate.01`,
          content: '81D116EEC72389F389AF165B90DDFD66'
        },
        {
          name: `p:domain_verify`,
          content: 'a247985518e058367f725d4b7b07b3aa'
        },
        {
          name: `yandex-verification`,
          content: '8ca6f17ac0b89fe6'
        },
        // SEO
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        { property: `og:image`, content: ogImage },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        { property: `twitter:image:src`, content: ogImage },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
