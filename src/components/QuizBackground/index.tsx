import React from 'react';

import { Container, Background } from './styles';

interface IQuizBackground {
  children: React.ReactNode;
  backgroundImage?: string;
}

const QuizBackground: React.FC<IQuizBackground> = ({
  backgroundImage,
  children,
}) => {
  return (
    <Background backgroundImage={backgroundImage}>
      <Container>{children}</Container>
    </Background>
  );
};

export default QuizBackground;
