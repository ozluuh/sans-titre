import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import theme from "../../styles/theme"

const Wrapper = styled.header`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.white};
`
const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: lighter;
  font-variant: small-caps;
`
const Description = styled.p`
  font-size: 1.125rem;
  color: ${theme.themeTertiary};

  @media (max-width: 980px) {
    display: none;
  }
`
const GatsbyLink = styled(AniLink)`
  text-decoration: none;
  color: ${theme.themePrimary};
`

export { Wrapper, Title, Description, GatsbyLink }
