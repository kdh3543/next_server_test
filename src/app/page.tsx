import styles from './page.module.css'
import axios from 'axios'
import Client from '@/components/Client/Client'
import { use, useEffect } from 'react'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        main
        <div className={styles.server}>server test</div>
        <br />
        <Client />
      </div>
    </main>
  )
}
