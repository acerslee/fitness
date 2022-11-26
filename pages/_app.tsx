import GlobalStyle from '../styles/globalStyle'
import type { AppProps } from 'next/app'
import { Auth } from '@supabase/ui'

import { supabase } from '../database/supabase'

import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Auth.UserContextProvider supabaseClient={supabase}>
    <>
      <GlobalStyle />
      <SEO />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
    // </Auth.UserContextProvider>
  )
}

export default MyApp
