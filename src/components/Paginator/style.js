import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { shade } from 'polished';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding-top: 2em;
  transition: padding 0.25s;
  justify-content: center;
`;
const ButtonStyle = css`
  border: none;
  outline: none;
  border-radius: 5px;
  display: inline-block;
  font-family: Arial;
  font-size: 1em;
  font-weight: bold;
  padding: 15px 20px;
  text-decoration: none;
`;
const Button = styled(AniLink)`
  ${ButtonStyle}
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  transition: color 0.25s, background 0.25s;

  &:not(:disabled):hover {
    background-color: ${props =>
      shade(
        props.theme.shade.paginator.boxShadow,
        props.theme.colors.primary
      )};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props =>
      shade(
        props.theme.shade.paginator.background,
        props.theme.colors.background
      )};
  }
`;
const Span = styled.span`
  ${ButtonStyle}
  color: ${props => props.theme.colors.text};
  transition: color 0.25s;
`;

export { Wrapper, Button, Span };
