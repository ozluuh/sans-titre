import React from "react"

import { ArrowUpward as ArrowUp } from "styled-icons/material/ArrowUpward"
import { Home } from "styled-icons/material/Home"
import { Search } from "styled-icons/material/Search"
import { InvertColors } from "styled-icons/material/InvertColors"

import { Wrapper, IconWrapper, GatsbyLink } from "./style"

const Navigator = () => (
  <Wrapper>
    <IconWrapper title="Principal">
      <GatsbyLink cover to="/" direction="left" bg="#faf9f8">
        <Home />
      </GatsbyLink>
    </IconWrapper>
    <IconWrapper title="Busca">
      <GatsbyLink cover to="/search" direction="left" bg="#faf9f8">
        <Search />
      </GatsbyLink>
    </IconWrapper>
    <IconWrapper title={`Tema Dark`} style={{ display: "none" }}>
      <InvertColors />
    </IconWrapper>
    <IconWrapper
      title="Topo"
      onClick={() => {
        window.scroll({ top: 0, behavior: "smooth" })
      }}
    >
      <ArrowUp />
    </IconWrapper>
  </Wrapper>
)

export default Navigator
