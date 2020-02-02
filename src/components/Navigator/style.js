import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import theme from "../../styles/theme"

const Wrapper = styled.aside`
  display: flex;
  position: fixed;
  right: 0;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${theme.white};

  ${media.lessThan("medium")`
    left: 0;
    bottom: 0;
    border-top: 1px solid rgba(96, 94, 92, 0.4);
  `}

  ${media.greaterThan("medium")`
    border: 1px solid rgba(96, 94, 92, 0.4);
    border-right: none;
    flex-direction: column;
    top: 50%;
    transform: translateY(-50%);
  `}
`
const IconWrapper = styled.span`
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 0;
  color: ${theme.neutralPrimary};
  transition: transform 0.25s;

  ${media.greaterThan("medium")`
    flex: 1;
    width: 70px;
    padding: 15px 10px;
  `}

  &:hover {
    color: ${theme.neutralSecondary};

    ${media.greaterThan("medium")`
        transform: scale(1.5);
    `}
  }
`
const GatsbyLink = styled(AniLink)`
  color: inherit;
`

export { Wrapper, IconWrapper, GatsbyLink }
