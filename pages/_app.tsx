import { useState } from 'react'
import type { AppProps } from 'next/app'
import { Auth } from '@supabase/ui'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'

import GlobalStyle from '../styles/globalStyle'
import '../styles/custom.scss'

import { supabase } from '../database/supabase'

import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps<{ initialSession: Session}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      {/* <Auth.UserContextProvider supabaseClient={supabase}> */}
        <GlobalStyle />
        <SEO />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      {/* </Auth.UserContextProvider>/ */}
    </SessionContextProvider>
  )
}

export default MyApp
