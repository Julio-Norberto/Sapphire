import { useRouter } from "next/router"
import styles from '../../styles/PostPage.module.scss'
import { Header } from "@/components/header"
import { Footer } from "@/components/Footer"

import img1 from '../../../public/azulEpreto.png'

export default function Post() {
  const { query } = useRouter()

  return (
    <div>
      <Header title={`Titulo do post ${query.id}`} />

      <div className={styles.postPageContainer} >
        <span> 14/04/2023 </span>

        <div className={styles.postText} >
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur quasi consectetur saepe aliquid corrupti dicta, minus nam libero dolor provident eligendi recusandae nisi ratione, reiciendis numquam enim nesciunt! Possimus!
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur quasi consectetur saepe aliquid corrupti dicta, minus nam libero dolor provident eligendi recusandae nisi ratione, reiciendis numquam enim nesciunt! Possimus!
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur quasi consectetur saepe aliquid corrupti dicta, minus nam libero dolor provident eligendi recusandae nisi ratione, reiciendis numquam enim nesciunt! Possimus!
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur quasi consectetur saepe aliquid corrupti dicta, minus nam libero dolor provident eligendi recusandae nisi ratione, reiciendis numquam enim nesciunt! Possimus!
          </p>
        </div>

        <div className={styles.postAuthor} >
          <div>
            <img src={img1.src} alt="" />
          </div>

          <div>
            <h3> Júlio Norberto </h3>
            <p> Software Developer </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}