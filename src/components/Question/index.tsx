import React, { useCallback, useEffect, useState } from 'react';

import Button from '../Button';
import Widget from '../Widget';
import Alternative from './style';

interface IQuestionProps {
  questionIndex: number;
  totalQuestions: number;
  question: {
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: Array<string>;
  };
  onSubmit(answer: boolean): any;
}

const Question: React.FC<IQuestionProps> = ({
  question,
  totalQuestions,
  onSubmit,
  questionIndex,
}) => {
  const [answer, setAnswer] = useState(-1);
  const [rightAnswer, setRightAnswer] = useState(-1);
  const [questionSubmitted, setQuestionSubmitted] = useState(false);

  useEffect(() => {
    setAnswer(-1);
    setRightAnswer(question.answer);
  }, [question]);

  const handleSelectAlternative = useCallback(selectedAlternative => {
    setAnswer(selectedAlternative);
  }, []);

  const handleConfirmAnswer = useCallback(
    e => {
      e.preventDefault();
      setQuestionSubmitted(true);

      setTimeout(() => {
        setQuestionSubmitted(false);
        onSubmit(answer === rightAnswer);
      }, 2000);
    },
    [onSubmit, rightAnswer, answer],
  );

  return (
    <Widget
      title={`Pergunta ${questionIndex} de ${totalQuestions}`}
      image={question.image}
      chevronLeft
    >
      <h2>{question.title}</h2>
      <p>{question.description}</p>

      <form onSubmit={handleConfirmAnswer}>
        {question.alternatives.map((alternative: string, index: any) => {
          const isSelected = answer === index;
          const isCorrect = answer === rightAnswer;
          const alternativeStatus = isCorrect ? 'success' : 'error';

          return (
            <Alternative
              key={alternative}
              type="button"
              onClick={() => {
                handleSelectAlternative(index);
              }}
              isSelected={isSelected}
              initial="base"
              animate={questionSubmitted && isSelected && alternativeStatus}
              transition={{ duration: 0.45 }}
              variants={{
                success: { scale: [1, 1.02, 1.02, 1.02, 0.98, 1] },
                error: { x: ['0%', '-2.0%', '2.0%', '-2.0%', '2.0%', '0%'] },
                base: {},
              }}
              alternativeStatus={questionSubmitted && alternativeStatus}
            >
              {alternative}
            </Alternative>
          );
        })}

        <Button type="submit" disabled={answer === -1}>
          CONFIRMAR
        </Button>
      </form>
    </Widget>
  );
};

export default Question;
