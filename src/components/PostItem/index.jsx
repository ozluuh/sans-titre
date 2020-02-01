import React from "react"

import { Wrapper, Title, Text, GatsbyLink } from "./style"

const path = require("path")

const Card = ({ title, description, date, author, slug }) => {
  return (
    <Wrapper>
      <Title>
        <GatsbyLink cover to={path.resolve(slug)} direction="down" bg="#faf9f8">
          {title}
        </GatsbyLink>
      </Title>
      <Text>{description}</Text>
      <Text>
        Publicado em{" "}
        <GatsbyLink cover to={path.resolve(slug)} direction="down" bg="#faf9f8">
          {date + " "}
        </GatsbyLink>
        por {author}
      </Text>
    </Wrapper>
  )
}

export default Card
