import { ABeeZee } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

import { Header } from '@/components/header'

export default function Home() {
  return (
    <main>
      <Header />
      <h1 className={styles.title}>main</h1>
    </main>
  )
}
