import styled, { css } from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import theme from "../../styles/theme"

const Wrapper = styled.div`
  display: flex;
  padding-top: 2em;
  transition: padding 0.25s;
  justify-content: center;
`
const ButtonStyle = css`
  border: none;
  outline: none;
  border-radius: 5px;
  display: inline-block;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 20px;
  text-decoration: none;
`
const Button = styled(AniLink)`
  ${ButtonStyle}
  cursor: pointer;
  box-shadow: inset 0px 1px 3px 0px ${theme.themeTertiary};
  background-color: ${theme.themePrimary};
  color: ${theme.white};
  text-shadow: 0px -1px 0px ${theme.neutralPrimary};

  &:not(:disabled):hover {
    background-color: ${theme.themeSecondary};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.neutralSecondary};
    box-shadow: inset 0px 1px 3px 0px ${theme.neutralSecondary};
  }
`
const Span = styled.span`
  ${ButtonStyle}
  color: ${theme.neutralSecondary};
  text-shadow: 0px -1px 0px ${theme.white};
`

export { Wrapper, Button, Span }
