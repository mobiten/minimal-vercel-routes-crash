import 'styles/globals.css'
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { IntlProvider } from 'react-intl'

function RingB2CApp({ Component, pageProps }): JSX.Element {
  const router = useRouter()
  return (
    <IntlProvider locale={router.locale} defaultLocale={router.defaultLocale}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Zilla+Slab:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default RingB2CApp
