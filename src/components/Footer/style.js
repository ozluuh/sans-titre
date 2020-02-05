import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { shade } from 'polished';
import styled from 'styled-components';
import media from 'styled-media-query';

const Wrapper = styled.footer`
  padding: 30px;

  ${media.lessThan('medium')`
    padding-bottom: 70px;
  `}
`;
const Text = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.text};
  transition: color 0.25s;
`;
const GatsbyLink = styled(AniLink)`
  text-decoration: none;
  color: ${props =>
    shade(
      props.theme.shade.header.primary,
      props.theme.colors.primary
    )};
  transition: color 0.25s;

  &:hover {
    text-decoration: underline;
  }
`;

export { Wrapper, Text, GatsbyLink };
