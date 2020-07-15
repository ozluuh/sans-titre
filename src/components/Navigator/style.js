import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { shade } from 'polished';
import styled from 'styled-components';
import media, { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({ medium: '767px' });

const Wrapper = styled.aside`
  display: flex;
  position: fixed;
  right: 0;
  justify-content: space-around;
  padding: 5px 10px;
  background: ${props => props.theme.colors.background};
  transition: background 0.25s, border 0.25s;

  ${customMedia.lessThan('medium')`
    left: 0;
    bottom: 0;
    border-top: 1px solid ${props =>
      shade(
        props.theme.shade.navigator.text,
        props.theme.colors.text
      )};
  `}

  ${media.greaterThan('medium')`
    border: 1px solid ${props =>
      shade(
        props.theme.shade.navigator.text,
        props.theme.colors.text
      )};
    border-right: none;
    flex-direction: column;
    top: 50%;
    transform: translateY(-50%);
  `}
`;
const IconWrapper = styled.span`
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 0;
  color: ${props => props.theme.colors.text};
  transition: transform 0.25s, color 0.25s;

  ${media.greaterThan('medium')`
    flex: 1;
    width: 70px;
    padding: 15px 10px;
  `}

  &:hover {
    color: ${props =>
      shade(
        props.theme.shade.navigator.text,
        props.theme.colors.text
      )};

    ${media.greaterThan('medium')`
        transform: scale(1.5);
    `}
  }
`;
const GatsbyLink = styled(AniLink)`
  color: inherit;
`;

export { Wrapper, IconWrapper, GatsbyLink };
