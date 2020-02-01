import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import theme from "../../styles/theme"

const Wrapper = styled.footer`
  padding: 30px;

  ${media.lessThan("medium")`
    padding-bottom: 70px;
  `}
`
const Text = styled.p`
  text-align: center;
  color: ${theme.neutralPrimary};
`
const GatsbyLink = styled(AniLink)`
  text-decoration: none;
  color: ${theme.themePrimary};

  &:hover {
    text-decoration: underline;
  }
`

export { Wrapper, Text, GatsbyLink }
