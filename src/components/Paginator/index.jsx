import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Button, Wrapper, Span } from './style';

const Paginator = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Wrapper>
      {!isFirst ? (
        <Button
          cover
          to={prevPage}
          direction="right"
          bg={colors.background}
        >
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
        <Button
          cover
          to={nextPage}
          direction="left"
          bg={colors.background}
        >
          Próxima
        </Button>
      ) : (
        <Button as="button" disabled>
          Próxima
        </Button>
      )}
    </Wrapper>
  );
};

export default Paginator;
