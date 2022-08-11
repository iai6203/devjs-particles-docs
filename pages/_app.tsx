import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | devJS-Particles Docs"
        description="devJS-Particles Official Documents"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
