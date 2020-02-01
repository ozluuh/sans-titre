import styled from "styled-components"

import theme from "../../styles/theme"

const Article = styled.article`
  padding: 0 1em;
  transition: padding 0.25s;
  line-height: 24px;

  @media (min-width: 768px) {
    padding: 0 6em;
  }
`
const Title = styled.h1`
  font-size: 1.75em;
  font-weight: lighter;
  color: ${theme.themeSecondary};
`
const Author = styled.em`
  display: block;
  font-size: 1.15em;
  color: ${theme.neutralSecondary};
`
const Body = styled.div`
  padding-top: 30px;
  font-size: 1.125em;
  color: ${theme.neutralPrimary};
`
const Dedicate = styled.cite`
  display: block;
  color: ${theme.neutralSecondary};
`
const TextDate = styled.p`
  padding-top: 10px;
  font-style: italic;
  font-size: 0.875em;
  color: ${theme.neutralPrimary};
`
const Date = styled.time``

export { Article, Title, Author, Body, Dedicate, Date, TextDate }
