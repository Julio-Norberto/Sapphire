import { Header } from '@/components/header'
import styles from '../../styles/AuthorPage.module.scss'

import { useRouter } from "next/router"
import { Footer } from '@/components/Footer'

export default function Author() {
  const { query } = useRouter()

  return (
    <div>
      <header>
        <Header />
      </header>

      <div className={styles.posts}>

      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}