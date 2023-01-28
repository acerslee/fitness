import { FC, useState, useEffect, useRef, lazy, Suspense } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import styled from 'styled-components'

import TextInput from '../../ui/TextInput'
import Button from '../../ui/Button'
import WebContainer from '../../ui/Container'

import { setUsername } from '../../store/userDataSlice'
import { useAppDispatch } from '../../hooks/redux'

const AccountContent = lazy(() => import('./components/AccountContent'))

const AccountPage: FC = () => {
  const user = useUser()
  const dispatch = useAppDispatch()

  const [missingData, setMissingData] = useState<boolean>(false)

  const usernameRef = useRef<HTMLInputElement | null>(null)

  // initial useeffect to fetch the logged in user's data
  useEffect(() => {
    getAccountData()
  }, [])

  const getAccountData = async (): Promise<void> => {
    try {
      const { data } = await axios.post('/api/getAccount', { user: user?.id })
      if (!data[0].username) {
        setMissingData(true)
        return
      } else {
        dispatch(setUsername(data[0].username))
      }
    } catch (e) {
      console.error(e)
    }
  }

  const accountDataSubmission = async (): Promise<void> => {
    try {
      const response = await axios.post('/api/updateAccount', {
        id: user?.id,
        username: usernameRef.current?.value,
      })
      if (response.data === 'Success') {
        dispatch(setUsername(usernameRef.current?.value as string))
        setMissingData(false)
        return
      }
    } catch (e) {
      console.error(e)
    }
  }

  // Missing username content
  if (missingData) {
    return (
      <Suspense
        fallback={
          <Spinner
            animation="border"
            variant="primary"
          />
        }
      >
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
      </Suspense>
    )
  }

  // Default content view
  return (
    <Suspense
      fallback={
        <Spinner
          animation="border"
          variant="primary"
        />
      }
    >
      <AccountPageContainer>
        <AccountContent />
      </AccountPageContainer>
    </Suspense>
  )
}

const AccountPageContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export default AccountPage
