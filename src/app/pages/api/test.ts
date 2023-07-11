import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  }
  console.log('....')
  res.status(200).json({ message: '요청이 성공적으로 수행되었습니다.' })
}
