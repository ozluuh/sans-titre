import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Article } from "../components/Post/style"

import { Wrapper, Title, Text, Button } from "../styles/notFoundPage"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Wrapper>
      <Article as="div">
        <Title>404</Title>
        <Text>Você acredita? A página ainda não existe. ='(</Text>
        <Button to="/">
          Que tal explorar o blog enquanto essa página não aparece, hein?
        </Button>
      </Article>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
