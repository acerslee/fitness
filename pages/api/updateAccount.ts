// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { supabase } from '../../database/supabase'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user, updates } = req.body
    console.log(user)

    const response = await supabase
      .from('profiles')
      .upsert(updates)
      .eq('user_id', user)

    console.log('response', response)

    res.status(201).send('Success')
  } catch (e) {
    console.error('error', e)
    res.status(500).send('api call failed')
  }
}
