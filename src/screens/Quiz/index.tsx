import React, { useCallback, useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useRouter } from 'next/router';

import Question from '../../components/Question';
import Button from '../../components/Button';
import GihubCorner from '../../components/GithubCorner';
import QuizBackground from '../../components/QuizBackground';
import Widget from '../../components/Widget';
import IDatabase from 'types/Database';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

interface IQuizPageProps {
  data: IDatabase;
  backgroundImage?: string;
}

const QuizScreen: React.FC<IQuizPageProps> = ({ data, backgroundImage }) => {
  const router = useRouter();
  const { name: tempName } = router.query;
  const name = tempName ? tempName : 'Anônimo';

  const totalQuestions = data.questions.length;
  const [question, setQuestion] = useState(data.questions[0]);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [screenState, setScreenState] = useState(screenStates.LOADING);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2000);
  }, []);

  const handleGoToHome = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleSubmit = useCallback(
    isCorrect => {
      const nextQuestion = currentQuestion + 1;

      if (totalQuestions <= nextQuestion) {
        setScreenState(screenStates.RESULT);
      } else {
        setCurrentQuestion(nextQuestion);
        setQuestion(data.questions[nextQuestion]);
      }

      setTotalAnswers(isCorrect ? totalAnswers + 1 : totalAnswers);
    },
    [currentQuestion, totalAnswers, totalQuestions, data.questions],
  );

  return (
    <QuizBackground backgroundImage={!backgroundImage ? data.bg : undefined}>
      {screenState === screenStates.LOADING && (
        <Widget title="Carregando perguntas...">
          <div style={{ textAlign: 'center' }}>
            <Loader type="Oval" color="#ffd96a" height={40} width={40} />
            <p
              style={{
                marginBottom: 0,
                fontWeight: 700,
                fontSize: 16,
                marginTop: 5,
              }}
            >
              Carregando
            </p>
          </div>
        </Widget>
      )}

      {screenState === screenStates.QUIZ && (
        <Question
          question={question}
          onSubmit={handleSubmit}
          questionIndex={currentQuestion + 1}
          totalQuestions={totalQuestions}
        />
      )}

      {screenState === screenStates.RESULT && (
        <Widget title="Resultados" chevronLeft>
          {totalQuestions === totalAnswers ? (
            <h3>Parabéns, {name}</h3>
          ) : (
            <h3>Não foi dessa vez, {name}</h3>
          )}
          <p>
            Você acertou {totalAnswers} de {totalQuestions}
          </p>
          <strong>Tente novamente, quando quiser</strong>
          <Button
            type="button"
            onClick={handleGoToHome}
            style={{ marginTop: 20 }}
          >
            Tentar Novamente
          </Button>
        </Widget>
      )}
      <GihubCorner projectUrl="https://github.com/gabriel-nt" />
    </QuizBackground>
  );
};

export default QuizScreen;
