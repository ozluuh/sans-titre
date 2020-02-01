import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import theme from "./theme"

const Wrapper = styled.section``
const Title = styled.h1`
  text-align: center;
`
const Text = styled.p`
  color: ${theme.neutralPrimary};
`
const Button = styled(AniLink)`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  display: inline-block;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 20px;
  box-shadow: inset 0px 1px 3px 0px ${theme.themeTertiary};
  background-color: ${theme.themePrimary};
  color: ${theme.white};
  text-shadow: 0px -1px 0px ${theme.neutralPrimary};

  &:not(:disabled):hover {
    background-color: ${theme.themeSecondary};
  }
`

export { Wrapper, Title, Text, Button }
