import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    min-height: 100vh;
  }
  
  a {
    text-decoration: none;
    color: unset;
  }

  button {
    border: none;
    cursor: pointer;
  }

  body {
    color: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family:  'Lato', sans-serif;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  let url = '';
  if (typeof window !== 'undefined') url = window.location.href ?? '';

  const { theme } = db;

  return (
    <>
      <Head>
        <title>{db.title}</title>
        <meta name="title" content={db.title} />
        <meta name="description" content={db.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={db.title} />
        <meta property="twitter:description" content={db.description} />
        <meta property="twitter:image" content={db.bg} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
