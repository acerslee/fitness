import { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import { useAppSelector } from 'hooks/redux'

import { PrimaryButton, SecondaryButton } from 'ui/Button'

const PreAuthButtons: FC = () => {
  const router = useRouter()
  const { authState } = useAppSelector((state) => state.auth)
  const supabaseClient = useSupabaseClient()

  return (
    <ButtonContainer>
      {authState ? (
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
