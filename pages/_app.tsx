import GlobalStyle from '../styles/globalStyle'
import type { AppProps } from 'next/app'

import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
