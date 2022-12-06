import { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { PrimaryButton, SecondaryButton } from '../../../ui/Button'

const PreAuthButtons: FC = () => {
  const router = useRouter()

  return (
    <ButtonContainer>
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
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export default PreAuthButtons
