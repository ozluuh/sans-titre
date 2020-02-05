import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { shade } from 'polished';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 20px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const Title = styled.h1`
  font-size: 1.375em;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-size: 1.125em;
  color: ${props => props.theme.colors.text};
  transition: color 0.25s;

  & + & {
    margin-top: 10px;
  }
`;
const GatsbyLink = styled(AniLink)`
  text-decoration: none;
  color: ${props =>
    shade(
      props.theme.shade.header.primary,
      props.theme.colors.primary
    )};

  &:hover {
    text-decoration: underline;
  }
`;

export { Wrapper, Title, Text, GatsbyLink };
