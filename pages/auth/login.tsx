import type { NextPage } from 'next'
import React, { useState, SyntheticEvent, useRef } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import { Row, Col } from 'react-bootstrap'

import WebContainer from '../../ui/Container'
import TextInput from '../../ui/TextInput'
import { PrimaryButton } from '../../ui/Button'
import styled from 'styled-components'

const LoginPage: NextPage = () => {
  const router = useRouter()
  // const [username, setUsername] = useState<string>('')
  // const [password, setPassword] = useState<string>('')

  const usernameRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()

    console.log(usernameRef?.current?.value)

    if (usernameRef && passwordRef) {
      // signIn()
      // router.push('/home')
    }
  }

  const submittable = !!usernameRef && !!passwordRef

  return (
    <WebContainer>
      <Row>
        <FormContainer xs={'auto'}>
          <form onSubmit={onSubmit}>
            <TextInput
              ref={usernameRef}
              size={'small'}
              label={'Enter username'}
              onChange={(value) => {
                // setUsername(value)
              }}
            />
            <TextInput
              size={'small'}
              label={'Enter password'}
              onChange={(value) => {
                // setPassword(value)3
              }}
              password
            />
            <PrimaryButton
              label={'Click'}
              size="large"
              type="submit"
              disabled={!submittable}
            />
          </form>
        </FormContainer>
      </Row>
    </WebContainer>
  )
}

const FormContainer = styled(Col)``

export default LoginPage
