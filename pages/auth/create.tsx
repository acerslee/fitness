import type { NextPage } from 'next'
import React, { useState, useRef, SyntheticEvent } from 'react'
import { useRouter } from 'next/router'

import Checkbox from '../../components/Checkbox'

import WebContainer from '../../ui/Container'
import TextInput from '../../ui/TextInput'
import Button from '../../ui/Button'

const CreateAccountPage: NextPage = () => {
  const router = useRouter()

  const [termsAccepted, setTermsAccepted] = useState<boolean>(false)
  const usernameRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()

    router.push('/home')
  }

  const submittable = usernameRef && passwordRef && termsAccepted

  return (
    <WebContainer>
      <form onSubmit={onSubmit}>
        <TextInput
          size={'small'}
          label={'Enter username'}
          onChange={(value) => {
          }}
        />
        <TextInput
          size={'small'}
          label={'Enter password'}
          onChange={(value) => {
          }}
          password
        />
        <Checkbox
          checked={termsAccepted}
          onChange={() => {
            if (termsAccepted) {
              setTermsAccepted(false)
            } else {
              setTermsAccepted(true)
            }
          }}
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

export default CreateAccountPage
