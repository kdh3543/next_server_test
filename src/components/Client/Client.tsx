'use client'
import styles from '@/app/page.module.css'
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
  const getCampApi = async () => {
    const res = await axios({
      method: 'get',
      // url: '/api/getApi',
      url: 'https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=WIN&MobileApp=gocamp&serviceKey=W87DOAeFblCeoq76UkfcBttIcSgClKzxgmr7P9SxT4dV0s0ugyH1yPAa16ZvPLPNJ5Hpn%252FFi7%20vEVeNZb8DvQQQ%253D%253D',
    })
    console.log(res)
  }

  return (
    <>
      <div className={styles.server}>server test</div>
      <br />
      <div>client</div>
      <input type="text" onChange={(e) => changeData(e)} />
      <button onClick={apiTest}>click!</button>
      <button onClick={getCampApi}>getApi!</button>
    </>
  )
}

export default Client
