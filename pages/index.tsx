import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import styled from 'styled-components'

import AccountPage from '../components/Account/Account'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <MainContainer>
      {!session ? (
        <Auth
          providers={['google']}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa}}
          theme="dark"
        />
      ) : (
        <>
        <p>Accoutn page goes here</p>
        <AccountPage />
        </>
      )}
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
`

export default Home