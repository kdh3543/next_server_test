import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  }
  const { data } = req.body
  const parseTestJSON = getTestDB()
  fs.writeFileSync(
    'public/db/test.json',
    JSON.stringify([...parseTestJSON, { data }])
  )
  res.status(200).json({ message: '요청이 성공적으로 수행되었습니다.' })
}

const getTestDB = () => {
  const readTest = fs.readFileSync('public/db/test.json', { encoding: 'utf-8' })
  const parseTestJSON = readTest.length > 0 ? JSON.parse(readTest) : []
  return parseTestJSON
}
