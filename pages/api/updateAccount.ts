// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../database/supabase'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id, username } = req.body

    const { data, error, status } = await supabase
      .from('profiles')
      .update({ full_name: username })
      .eq('id', id)

    res.status(status).end()
  } catch (e) {
    console.error('error', e)
    res.status(500).send('api call failed')
  }
}
