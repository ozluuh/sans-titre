import styled, {
  createGlobalStyle,
  keyframes
} from 'styled-components';
import media from 'styled-media-query';

const alternateColor = keyframes`
from {color: #ff005a;}
  to {color: #06d6a0;}
`;
const textShadowAltColor = keyframes`
from {text-shadow: -1px -1px 1px #ee2677, 1px 1px 1px #06d6a0;}
  to {text-shadow: -1px -1px 1px #06d6a0, 1px 1px 1px #ee2677;}
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background: #000;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 256px;
  font-weight: 900;
  color: #000;
  text-shadow: -1px -1px 1px #ee2677, 1px 1px 1px #06d6a0;
  letter-spacing: 3px;
  animation: ${textShadowAltColor} 5s alternate infinite;

  ${media.lessThan('medium')`
    font-size: 200px;
  `}

  ${media.lessThan('small')`
    font-size: 100px;
  `}
`;
const Description = styled.h2`
  width: 100%;
  position: absolute;
  top: 0.9em;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: #fff;
  text-shadow: 1px 1px 0px #06d6a0;
  text-transform: uppercase;

  ${media.lessThan('medium')`
    font-size: 20px;
  `}

  ${media.lessThan('small')`
    font-size: 16px;
    top: 0;
  `}
`;
const Emoji = styled.span`
  font: initial;
  font-size: 200px;
  letter-spacing: -1px;

  ${media.lessThan('medium')`
    font-size: 144px;
  `}

  ${media.lessThan('small')`
    font-size: 88px;
  `}
`;
const Body = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan('small')`
    margin-top: 30px;
    height: 70px;
  `}
`;
const Text = styled.p`
  font-size: 18px;
  color: #fff;
  text-shadow: -1px -1px 0px #ee2677;
  text-transform: uppercase;
`;
const Button = styled.a`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  color: #ff005a;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid;
  border-radius: 5px;
  background: transparent;
  padding: 10px 40px;
  font-size: 14px;
  transition: 0.25s color;
  animation: ${alternateColor} 1.5s alternate infinite;

  &:hover {
    animation-duration: 0.45s;
  }
`;
const HideableSpan = styled.span`
  ${media.lessThan('small')`
    display: none;
  `}
`;

export {
  Wrapper,
  Header,
  Title,
  Description,
  Body,
  Text,
  Button,
  Emoji,
  HideableSpan
};

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  font-size: 100%;
  font-family: 'Montserrat', sans-serif;
}
`;
