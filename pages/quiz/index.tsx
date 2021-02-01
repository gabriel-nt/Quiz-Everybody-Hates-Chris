import React from 'react';

import db from '../../db.json';
import QuizScreen from 'screens/Quiz';
import backgroundImage from '../../assets/background.png';

const QuizPage: React.FC = () => (
  <QuizScreen data={db} backgroundImage={backgroundImage} />
);

export default QuizPage;
