import styles from '../../styles/PostPage.module.scss'
import img1 from '../../../public/azulEpreto.png'

import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Header } from "@/components/header"
import { Footer } from "@/components/Footer"

import { Variables } from "graphql-request"
import { loadPostById } from '@/api/loadPostById'

interface IPostsProps {
  attributes: {
    content: string,
    createdAt: string,
    title: string,
    authorName: string
  }
}

export default function Post() {
  const { query } = useRouter()

  const [posts, setPosts] = useState<IPostsProps>()

  useEffect(() => {
    const id: Variables = {
      id: query.id
    }

    loadPostById(id).then((response: any) => {
      console.log(response.post.data)
      setPosts(response.post.data)
    }).catch((error) => {
      console.log(error)
      console.clear()
    })
    
  }, [query.id])

  return (
    <div>
      <Header title={posts ? posts.attributes.title : ''} />

      <div className={styles.postPageContainer} >
        <span> { posts? posts.attributes.createdAt.slice(0, 10) : '' } </span>

        <div className={styles.postText} >
          { posts ? posts.attributes.content : '' }
        </div>

        <div className={styles.postAuthor} >
          <div>
            <img src={img1.src} alt="" />
          </div>

          <div>
            <h3> { posts? posts.attributes.authorName : '' } </h3>
            <p> Software Developer </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}