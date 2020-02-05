import { createGlobalStyle, css } from 'styled-components';
import media from 'styled-media-query';

export default createGlobalStyle`
body {
    overflow-x: hidden;
	background-color: ${props => props.theme.colors.background};
}
`;

export const WrapperStyle = css`
padding: 0 1em;
transition: padding 0.25s;
line-height: 24px;

${media.greaterThan('medium')`padding: 0 6em;`}
`;
