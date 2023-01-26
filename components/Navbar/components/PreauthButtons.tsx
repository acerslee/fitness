import { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useSelector } from 'react-redux'

import { PrimaryButton, SecondaryButton } from '../../../ui/Button'
import { AuthState } from '../../../store/authSlice'

const PreAuthButtons: FC = () => {
  const router = useRouter()
  const user = useSelector((state: AuthState) => state.authState)
  const supabaseClient = useSupabaseClient()

  return (
    <ButtonContainer>
      {user ? (
        <PrimaryButton
          onClick={() => supabaseClient.auth.signOut()}
          label={'Sign out'}
          size="medium"
        />
      ) : (
        <>
          <PrimaryButton
            onClick={() => router.push('/auth/login')}
            label={'Login'}
            size="medium"
          />
          <SecondaryButton
            onClick={() => router.push('/auth/create')}
            label={'Sign up'}
            size="medium"
          />
        </>
      )}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export default PreAuthButtons
