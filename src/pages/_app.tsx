import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <title> Cefalia X - Boilerplate</title>
    <link rel="shortcut icon" href="/img/favicon.ico"/>
    <link rel='manifest' href='/manifest.json' />
    <meta name="description" content=" A simple project starter to work with Typescript, React, NextJS and Styled Components" />
    </Head>
    <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
