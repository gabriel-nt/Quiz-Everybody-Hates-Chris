import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import List from '../src/components/List';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GihubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';

const Home: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState('');

  const handleChangeInput = useCallback(e => {
    const { value } = e.target;
    setName(value);
  }, []);

  const handleFormSubmit = useCallback(
    e => {
      e.preventDefault();
      router.push(`/quiz?name=${name}`);
    },
    [name, router],
  );

  return (
    <QuizBackground>
      <QuizLogo />
      <Widget title="Todo Mundo Odeia o Chris">
        <p>
          Teste os seus conhecimentos sobre a série de Todo Mundo odeia o Chris
          e diverta-se criando o seu AluraQuiz
        </p>

        <form onSubmit={handleFormSubmit}>
          <Input
            name="user"
            type="text"
            value={name}
            placeholder="Diz aí seu nome para jogar :)"
            handleChangeInput={handleChangeInput}
          />

          <Button type="submit" disabled={!name}>
            JOGAR
          </Button>
        </form>
      </Widget>

      <Widget title="Quizes da Galera">
        <p>
          Dá uma olhada nesses quizes incríveis que o pessola da Imersão React
          fez:
        </p>
        <List items={db.external} />
      </Widget>

      <Footer />

      <GihubCorner projectUrl="https://github.com/gabriel-nt" />
    </QuizBackground>
  );
};

export default Home;
