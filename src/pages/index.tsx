import { ABeeZee } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

import { Header } from '@/components/header'

export default function Home() {
  return (
    <main>
      <Header title={`Conteúdo bruto entregue para você de maneira totalmente lapidada`} />
      <h1 className={styles.title}>main</h1>
    </main>
  )
}
