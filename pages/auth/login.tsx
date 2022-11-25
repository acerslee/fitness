import type { NextPage } from 'next'
import React, { useRef, SyntheticEvent} from 'react'
import { useRouter } from 'next/router'

import WebContainer from '../../ui/Container'
import TextInput from '../../ui/TextInput'
import Button from '../../ui/Button'

const LoginPage: NextPage = () => {
  const router = useRouter()
  const username = useRef<HTMLInputElement | null>(null)
  const password = useRef<HTMLInputElement | null>(null)

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()

    username.current?.value

    router.push('/home')
  }

  return (
    <WebContainer>
      <form onSubmit = {onSubmit}>
        <TextInput ref={username} size={'small'} label={'Enter username'} />
        <TextInput ref={password} size={'small'} label={'Enter password'} />
        <Button label={'Click'} size='large' type='submit' />
      </form>
    </WebContainer>
  )
}

export default LoginPage