import React from 'react';
import { ThemeProvider } from 'styled-components';

import IDatabase from '../../src/types/Database';
import QuizScreen from '../../src/screens/Quiz';

const ExternalQuiz = (data: IDatabase) => (
  <ThemeProvider theme={data.theme}>
    <QuizScreen data={data} />
  </ThemeProvider>
);

export const getServerSideProps = async (context: any) => {
  const [project, user] = context.query.id.split('_');

  const data = await fetch(`https://${project}.${user}.vercel.app/api/db`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Response invalid');
    })
    .then(response => response)
    .catch(error => {
      console.error(error);
    });

  return {
    props: {
      ...data,
    },
  };
};

export default ExternalQuiz;
