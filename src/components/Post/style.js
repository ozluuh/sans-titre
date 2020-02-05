import { shade } from 'polished';
import styled from 'styled-components';

import { WrapperStyle } from '../../styles/global';

const Article = styled.article`
  ${WrapperStyle}
`;
const Title = styled.h1`
  font-size: 1.75em;
  font-weight: lighter;
  color: ${props =>
    shade(
      props.theme.shade.post.title,
      props.theme.colors.primary
    )};
  transition: color 0.25s;
`;
const Author = styled.em`
  display: block;
  font-size: 1.15em;
  color: ${props =>
    shade(
      props.theme.shade.post.author,
      props.theme.colors.text
    )};
  transition: color 0.25s;
`;
const Body = styled.div`
  padding-top: 30px;
  font-size: 1.125em;
  color: ${props => props.theme.colors.text};
  transition: color 0.25s;
`;
const Dedicate = styled.cite`
  display: block;
  color: ${props =>
    shade(
      props.theme.shade.post.dedicate,
      props.theme.colors.text
    )};
  transition: color 0.25s;
`;
const TextDate = styled.p`
  padding-top: 10px;
  font-style: italic;
  font-size: 0.875em;
  color: ${props =>
    shade(
      props.theme.shade.post.textDate,
      props.theme.colors.text
    )};
  transition: color 0.25s;
`;
const Date = styled.time``;

export {
  Article,
  Title,
  Author,
  Body,
  Dedicate,
  Date,
  TextDate
};
