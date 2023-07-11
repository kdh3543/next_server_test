'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

function Client() {
  const [text, setText] = useState('')
  function postData(value: any) {
    const res = axios({
      method: 'POST',
      url: '/api/test',
      data: {
        data: value,
      },
    })
    return res
  }

  const changeData = (e: any) => {
    setText(e.target.value)
  }
  const apiTest = async () => {
    const res = await postData(text)
    console.log(res.data)
  }
  return (
    <>
      <div>client</div>
      <input type="text" onChange={(e) => changeData(e)} />
      <button onClick={apiTest}>click!</button>
    </>
  )
}

export default Client
