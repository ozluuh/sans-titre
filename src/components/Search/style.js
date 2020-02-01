import styled from "styled-components"

import theme from "../../styles/theme"

const Wrapper = styled.div`
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-Stats-text {
    color: ${theme.neutralSecondary};
  }

  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }

  .ais-SearchBox {
    padding-top: 6rem;
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-color: ${theme.neutralSecondary};
    display: flex;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    width: 100%;
  }

  .ais-SearchBox-input:focus {
    color: ${theme.neutralPrimary};
    outline: none;
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-SearchBox,
  .ais-SearchBox-form,
  .ais-SearchBox-input {
    width: 100%;
    box-sizing: border-box;
  }

  .ais-Hits ul {
    list-style: none;
  }
  .ais-Hits-list {
    width: 100%;
    margin: 0;
  }
`

export { Wrapper }
