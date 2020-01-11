import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta
          name="google-site-verification"
          content="vbCv5zpXHJmeRCS0PRV4bDB1QuEatTLfeSnRGNXJ7xM"
        />
        <meta name="msvalidate.01" content="81D116EEC72389F389AF165B90DDFD66" />
        <meta
          name="p:domain_verify"
          content="a247985518e058367f725d4b7b07b3aa"
        />
        <meta name="yandex-verification" content="8ca6f17ac0b89fe6" />
        {props.headComponents}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Mono|Montserrat&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"
        />
      </head>
      <body {...props.bodyAttributes} className="light">
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              window.__onThemeChange = function() {};

              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                document.body.className = newTheme;
                window.__onThemeChange(newTheme);
              }

              var preferredTheme;

              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { }

              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);

                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }

              setTheme(preferredTheme || 'light');
            })();
          `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
