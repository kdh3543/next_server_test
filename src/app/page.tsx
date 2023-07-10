import { useState } from 'react'
import styles from './page.module.css'
import axios from 'axios'

export default function Home() {
  const apiTest = async () => {
    const response = await axios({
      method: 'POST',
      url: '/api/test',

      data: '123',
    })
    console.log('들어옴', response.data)
  }
  return (
    <main className={styles.main}>
      <div>
        <div>server test</div>
        <br />
        <button onClick={apiTest}>click!</button>
      </div>
    </main>
  )
}
