'use client'
import { useState } from 'react'
import styles from '@/app/page.module.css'
import Client from '@/components/Client/Client'

export default function Home() {
  const [category, setCategory] = useState('')
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>category</div>
        <div className={styles.category}>
          <button onClick={() => setCategory('Client')}>Client</button>
          <button onClick={() => setCategory('login')}>login</button>
          {/* <div>
            <Client />
          </div> */}
          {/* <div>login</div> */}
        </div>
        {category === 'Client' && <Client />}
      </div>
    </main>
  )
}
