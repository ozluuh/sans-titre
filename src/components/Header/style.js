import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { shade } from 'polished';
import styled from 'styled-components';
import media from 'styled-media-query';

const Wrapper = styled.header`
  background: ${props =>
    shade(0.15, props.theme.colors.background)} !important;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  top: 0;
  left: 0;
  right: 0;
  transition: background 0.25s;
`;
const Title = styled.h1`
  font-size: 1.75em;
  font-weight: lighter;
  font-variant: small-caps;
`;
const Description = styled.p`
  font-size: 1.125em;
  color: ${props =>
    shade(-0.15, props.theme.colors.primary)};
  transition: color 0.25s;

  ${media.lessThan('medium')`display: none;`}
`;
const GatsbyLink = styled(AniLink)`
  text-decoration: none;
  color: ${props =>
    shade(
      props.theme.shade.header.primary,
      props.theme.colors.primary
    )};
  transition: color 0.25s;
`;

export { Wrapper, Title, Description, GatsbyLink };
