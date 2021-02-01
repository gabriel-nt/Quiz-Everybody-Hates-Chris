import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

interface IListProps {
  items: Array<string>;
}

const List: React.FC<IListProps> = ({ items }) => {
  return (
    <Container>
      {items.map(quiz => {
        const [project, user] = quiz
          .replace(/\//g, '')
          .replace('https:', '')
          .replace('.vercel.app', '')
          .split('.');

        return (
          <li key={quiz}>
            <Link href={`/quiz/${project}_${user}`}>
              <a>{`${user}/${project}`}</a>
            </Link>
          </li>
        );
      })}
    </Container>
  );
};

export default List;
