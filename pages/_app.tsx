import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'

// hooks
import usePageLoading from '../hooks/usePageLoading'

// components
import Loader from '../components/Loader'

function MyApp({ Component, pageProps }: AppProps) {
  const { isPageLoading } = usePageLoading()

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | devJS-Particles Docs"
        description="devJS-Particles Official Documents"
      />
      <Component {...pageProps} />
      {isPageLoading && <Loader />}
    </>
  )
}

export default MyApp
