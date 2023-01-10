import { FC, useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import axios from 'axios'



const AccountPage: FC = () => {
  const supabase = useSupabaseClient()
  const user = useUser()

  useEffect(() => {
    axios.post('/api/getAccount', { user: user?.id })
  }, [])

  return <></>
}

export default AccountPage