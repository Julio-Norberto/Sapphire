import styles from '@/styles/Home.module.scss'

import { Header } from '@/components/header'
import { Posts } from '@/components/Posts'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header title={`Conteúdo bruto entregue para você de maneira totalmente lapidada`} />
      <Posts />
      <Footer />
    </main>
  )
}
