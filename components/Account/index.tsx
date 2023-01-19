import { FC, useState, useEffect, useRef, lazy, Suspense} from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import styled from 'styled-components'

import TextInput from '../../ui/TextInput'
import Button from '../../ui/Button'
import WebContainer from '../../ui/Container'

const AccountPage: FC = () => {
  const user = useUser()

  const [missingData, setMissingData] = useState<boolean>(false)
  const [makingCall, setMakingCall] = useState<boolean>(false)

  const usernameRef = useRef<HTMLInputElement | null>(null)

  // initial useeffect to fetch the logged in user's data
  useEffect(() => {
    getAccountData()
  }, [])

  const getAccountData = async (): Promise<void> => {
    setMakingCall(true)
    try {
      const { data } = await axios.post('/api/getAccount', { user: user?.id })
      if (!data[0].username) {
        setMissingData(true)
        return
      }
    } catch(e) {
      console.error(e)
    } finally {
      setMakingCall(false)
    }
  }

  const accountDataSubmission = async (): Promise<void> => {
    setMakingCall(true)
    try {
      const response = await axios.post('/api/updateAccount', {
        id: user?.id,
        username: usernameRef.current?.value,
      })
      if (response.data === 'Success') {
        setMissingData(false)
        return
      }
    } catch (e) {
      console.error(e)
    } finally {
      setMakingCall(false)
    }
  }

  // Loading state
  if (makingCall)
    return (
      <Spinner
        animation="border"
        variant="primary"
      />
    )

  console.log(missingData)


  // Missing username content
  if (missingData) {
    return (
      <AccountPageContainer>
        <WebContainer>
          <TextInput
            size={'large'}
            ref={usernameRef}
            label={'Please enter username'}
            required
          />
          <Button
            size={'large'}
            label={'Submit'}
            buttonStyle={'primary'}
            onClick={accountDataSubmission}
          />
        </WebContainer>
      </AccountPageContainer>
    )
  }


  return <AccountPageContainer>hi</AccountPageContainer>
}

const AccountPageContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export default AccountPage
