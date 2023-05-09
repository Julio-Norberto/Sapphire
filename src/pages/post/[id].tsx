import styles from '../../styles/PostPage.module.scss'

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
    authorName: string,
  }
}

type Author = {
  alternativeText: string,
  url: string,
  authorTitle?: string
}

export default function Post() {
  const { query, push } = useRouter()

  const [posts, setPosts] = useState<IPostsProps>()
  const [author, setAuthor] = useState<Author>()
  const [authorId, setAuthorId] = useState<string>()

  useEffect(() => {
    const id: Variables = {
      id: query.id
    }

    loadPostById(id).then((response: any) => {
      setPosts(response.post.data)
      setAuthor(response.post.data.attributes.author.data.attributes.photo.data.attributes)
      setAuthorId(response.post.data.attributes.author.data.id)
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
            <img src={author?.url} alt={`${author?.alternativeText}`} />
          </div>

          <div>
            <h3 onClick={() => push(`/author/${authorId}`)} > { posts? posts.attributes.authorName : 'John Doe' } </h3>
            <p> { author?.authorTitle ? author.authorTitle : 'Software Developer' } </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}