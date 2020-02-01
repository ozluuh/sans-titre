import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import theme from "../../styles/theme"

const Wrapper = styled.section`
  padding: 20px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`
const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 20px;
`
const Text = styled.p`
  font-size: 18px;
  color: ${theme.neutralPrimary};

  & + & {
    margin-top: 10px;
  }
`
const GatsbyLink = styled(AniLink)`
  text-decoration: none;
  color: ${theme.themeSecondary};

  &:hover {
    text-decoration: underline;
  }
`

export { Wrapper, Title, Text, GatsbyLink }
