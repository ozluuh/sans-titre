import styled from "styled-components"

import theme from "../../styles/theme"

const Wrapper = styled.section`
  display: block;
  padding: 0 1em;
  margin-top: 50px;
  transition: padding 0.25s;

  @media (min-width: 768px) {
    padding: 0 6em;
  }
`
const Title = styled.h3`
  font-size: 1.125em;
  color: ${theme.neutralSecondary};
`

export { Wrapper, Title }
