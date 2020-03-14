import React from 'react';
import Head from 'next/head';
import App from 'next/app';

import '../css/tailwind.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>
            Admin Yitech | The fast & visual way to understand your users!
          </title>
        </Head>
          <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
