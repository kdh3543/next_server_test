import { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url =
    'https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=WIN&MobileApp=gocamp&serviceKey=W87DOAeFblCeoq76UkfcBttIcSgClKzxgmr7P9SxT4dV0s0ugyH1yPAa16ZvPLPNJ5Hpn%252FFi7%20vEVeNZb8DvQQQ%253D%253D'
  let path = ''
  try {
    const response = await axios.get(url)
    console.log(response.data)
    path = response.data
  } catch (e) {
    console.log('에러발생')
  }
  return res.status(200).json({ data: path })
}
