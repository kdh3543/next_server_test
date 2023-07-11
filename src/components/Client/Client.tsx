'use client'

import axios from 'axios'
import { useEffect } from 'react'

function Client({ props }: any) {
  useEffect(() => {
    apiTest()
  }, [])
  const apiTest = async () => {
    let response: any = null
    console.log('....')
    try {
      response = await axios({
        method: 'POST',
        url: '/api/test',
        data: '123',
      })
    } catch (err) {
      console.log('err', err)
    }

    console.log('들어옴', response.data)
  }
  return (
    <>
      <div>client</div>

      <button onClick={() => props.apiTest}>click!</button>
    </>
  )
}

export default Client
