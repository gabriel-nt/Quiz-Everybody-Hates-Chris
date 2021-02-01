import React from 'react';
import { FooterWrapper } from './style';

const Footer: React.FC = props => (
  <FooterWrapper
    {...props}
    animate="show"
    initial="hidden"
    variants={{
      show: { opacity: 1, y: '0' },
      hidden: { opacity: 0, y: '50%' },
    }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
  >
    <a href="https://www.alura.com.br/">
      <img
        src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
        alt="Logo Alura"
      />
    </a>
    <p>
      Orgulhosamente criado por Gabriel Teixeira durante a{' '}
      <a href="https://www.alura.com.br/">
        <span>Imersão Next da Alura</span>
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
