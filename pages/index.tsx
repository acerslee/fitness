import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import AccountPage from '../components/Account'

import { setAuthState, setAuthUserId } from '../store/authSlice'
import { useEffect } from 'react'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const dispatch = useDispatch()
  // @ts-ignore
  const auth = useSelector((state) => state.auth.authState)

  useEffect(() => {
    if (session && !auth) {
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
