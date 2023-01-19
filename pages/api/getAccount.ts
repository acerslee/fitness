// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../database/supabase'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user } = req.body

    const response = await supabase
      .from('profiles')
      .select(`username, avatar_url, full_name`)
      .eq('id', user)

    res.status(200).send(response.data)
  } catch (e: any) {
    res.status(500).send('api call failed')
  }
}
