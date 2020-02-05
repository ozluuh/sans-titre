import {shade} from "polished"
import styled from 'styled-components';

import { WrapperStyle } from '../../styles/global';

const Wrapper = styled.div`
  ${WrapperStyle}

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-Stats-text {
    color: ${props => shade(0.60, props.theme.colors.text)};
    transition: color 0.25s;
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
    color: ${props => shade(0.55, props.theme.colors.text)};
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-color: ${props => shade(0.65, props.theme.colors.text)};
    display: flex;
    font-size: 1.6em;
    padding: 0.7rem 1rem;
    width: 100%;
    transition: color 0.25s;
  }

  .ais-SearchBox-input:focus {
    color: ${props => shade(0.25, props.theme.colors.text)};
    transition: color 0.25s;
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
`;

export { Wrapper };
