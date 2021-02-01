import styled from 'styled-components';
import image from '../../../assets/background.png';

interface IBackgroundProps {
  backgroundImage?: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 340px;
  margin-left: 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const Background = styled.div<IBackgroundProps>`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) =>
    backgroundImage ? backgroundImage : image});
  background-color: ${({ backgroundImage, theme }) =>
    backgroundImage ? theme.colors.mainBg : '#ffd96a'};
  flex: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: '';
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({ backgroundImage, theme }) =>
            backgroundImage ? theme.colors.mainBg : '#ffd96a'}
        ),
        url(${({ backgroundImage }) =>
          backgroundImage ? backgroundImage : image});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;
