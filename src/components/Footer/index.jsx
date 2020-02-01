import React from "react"

import { Wrapper, Text, GatsbyLink } from "./style"

const Footer = ({ title }) => (
  <Wrapper>
    <Text>
      © 2019 - 2020{" "}
      <GatsbyLink cover to="/" direction="up" bg="#faf9f8">
        {title}
      </GatsbyLink>{" "}
      - Todos os direitos reservados.
    </Text>
  </Wrapper>
)

export default Footer
