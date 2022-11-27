import type { NextPage } from 'next'
import React, { useState, SyntheticEvent } from 'react'
import { useRouter } from 'next/router'

import WebContainer from '../../ui/Container'
import TextInput from '../../ui/TextInput'
import Button from '../../ui/Button'

const LoginPage: NextPage = () => {
  const router = useRouter()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()

    router.push('/home')
  }

  const submittable = username && password

  return (
    <WebContainer>
      <form onSubmit={onSubmit}>
        <TextInput
          size={'small'}
          label={'Enter username'}
          onChange={(value) => {
            setUsername(value)
          }}
        />
        <TextInput
          size={'small'}
          label={'Enter password'}
          onChange={(value) => {
            setPassword(value)
          }}
          password
        />
        <Button
          label={'Click'}
          size="large"
          type="submit"
          disabled={!submittable}
        />
      </form>
    </WebContainer>
  )
}

export default LoginPage
