import { useState } from 'react'
import type { AppProps } from 'next/app'
import { Auth } from '@supabase/ui'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'

import GlobalStyle from '../styles/globalStyle'
import '../styles/custom.scss'

import { wrapper, store }from '../store/store'

import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Provider } from 'react-redux'

function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <Provider store={store}>
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <GlobalStyle />
      <SEO />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionContextProvider>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)