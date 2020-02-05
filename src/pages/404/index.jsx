/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import SEO from '../../components/seo';
import GlobalStyle, {
  Wrapper,
  Header,
  Title,
  Description,
  Body,
  Text,
  Button,
  Emoji,
  HideableSpan
} from './style';

const NotFoundPage = () => (
  <Wrapper id="App">
    <SEO title="404: Not Found" />
    <GlobalStyle />
    <Header class="title">
      <Title>
        4
        <Emoji role="img" aria-label="Sad Tears">
          &#x1F62D;
        </Emoji>
        4
      </Title>
      <Description>
        <HideableSpan>Ué?</HideableSpan> Cadê você meu
        filho?
      </Description>
    </Header>
    <Body class="content">
      <Text>
        <HideableSpan>Enquanto não é criada,</HideableSpan>{' '}
        que tal voltar a página
      </Text>
      <Button href="/">Principal</Button>
    </Body>
  </Wrapper>
);

export default NotFoundPage;
