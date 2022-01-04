import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Advent Cosmetics</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;