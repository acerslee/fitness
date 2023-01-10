// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { supabase } from '../../database/supabase'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user } = req.body
    console.log(user)

    const response = await supabase
      .from('profiles')
      .select(`username, avatar_url`)
      .eq('id', user)
      .single()

    console.log('repsonse', response)

    res.status(200).send('Success')
  } catch (e: any) {
    if (e && e.status !== 406) {
      res.status(e.status).send('api called failed')
    }

    res.status(500).send('api call failed')
  }
}
