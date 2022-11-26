import GlobalStyle from '../styles/globalStyle'
import type { AppProps } from 'next/app'

import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <SEO />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
