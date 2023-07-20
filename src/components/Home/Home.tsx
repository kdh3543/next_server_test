'use client'
import { useState } from 'react'
import styles from '@/app/page.module.css'
import Client from '@/app/client'
import Signup from '@/app/signup'
import { HOME_CATEGORY } from './home.data'

export default function Home() {
  const [category, setCategory] = useState('')
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>category</div>
        <div className={styles.category}>
          {HOME_CATEGORY.map((list) => (
            <button key={list.id} onClick={() => setCategory(list.title)}>
              {list.title}
            </button>
          ))}
        </div>
        <br />
        {category === 'client' && <Client />}
        {category === 'signup' && <Signup />}
      </div>
    </main>
  )
}
