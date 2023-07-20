import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: '잘못된 method임' })
    return
  }

  const { id, pw } = req.body
  console.log(id, pw)
  if (!id || !pw) {
    return res.status(400).json({ message: '정보 없어' })
  }
  const parseUsersJSON = getUserDB()
  fs.writeFileSync(
    'public/db/users.json',
    JSON.stringify([...parseUsersJSON, { id, pw }], null, 4)
  )

  res.status(200).json('성공~~!!')
}

const getUserDB = () => {
  const readUsers = fs.readFileSync('public/db/users.json', {
    encoding: 'utf-8',
  })
  const parseUsersJSON = readUsers.length > 0 ? JSON.parse(readUsers) : []
  return parseUsersJSON
}
