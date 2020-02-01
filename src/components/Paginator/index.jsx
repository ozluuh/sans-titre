import React from "react"

import { Button, Wrapper, Span } from "./style"

const Paginator = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <Wrapper>
    {!isFirst ? (
      <Button cover to={prevPage} direction="right" bg="#faf9f8">
        Anterior
      </Button>
    ) : (
      <Button as="button" disabled>
        Anterior
      </Button>
    )}
    <Span>
      {currentPage} de {numPages}
    </Span>
    {!isLast ? (
      <Button cover to={nextPage} direction="left" bg="#faf9f8">
        Próxima
      </Button>
    ) : (
      <Button as="button" disabled>
        Próxima
      </Button>
    )}
  </Wrapper>
)

export default Paginator
