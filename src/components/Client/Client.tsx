'use client'

import axios from 'axios'
import { useEffect } from 'react'

function Client({ props }: any) {
  async function getData() {
    const res = await axios({
      method: 'POST',
      url: '/api/test',
      data: {
        data: 123,
      },
    })
    return res
  }
  useEffect(() => {
    getData().then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <>
      <div>client</div>

      <button onClick={() => props.apiTest}>click!</button>
    </>
  )
}

export default Client
