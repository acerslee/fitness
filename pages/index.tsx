import { useEffect } from 'react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import styled from 'styled-components'

import AccountPage from '../components/Account'

import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { setAuthState, setAuthUserId } from '../store/authSlice'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const dispatch = useAppDispatch()
  const { authState } = useAppSelector(state => state.auth)

  useEffect(() => {
    if (session && !authState) {
      dispatch(setAuthState(!!session.user.role))
      dispatch(setAuthUserId(session.user.id))
    }
  }, [])

  return (
    <MainContainer>
      {!session ? (
        <Auth
          providers={['google']}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <>
          <AccountPage />
        </>
      )}
    </MainContainer>
  )
}

const MainContainer = styled.main`
  // display: flex;
  // justify-content: center;
`

export default Home
