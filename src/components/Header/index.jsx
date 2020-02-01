import React from "react"

import { Description, Title, Wrapper, GatsbyLink } from "./style"

const Header = ({ title, tagline }) => (
  <Wrapper>
    <Title>
      <GatsbyLink cover to="/" direction="down" bg="#faf9f8">
        {title}
      </GatsbyLink>
    </Title>
    <Description>{tagline}</Description>
  </Wrapper>
)

export default Header
