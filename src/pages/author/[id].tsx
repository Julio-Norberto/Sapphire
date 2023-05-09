import { Header } from '@/components/header'
import styles from '../../styles/AuthorPage.module.scss'

import { useRouter } from "next/router"
import { Footer } from '@/components/Footer'
import { useEffect, useState } from 'react'
import { Variables } from 'graphql-request'
import { loadAuthorById } from '@/api/loadAuthorById'
import { PostCard } from '@/components/PostCard'

interface IPostsProps {
  id: string,
  attributes: {
    title: string,
    excerpt: string,
    category: {
      data: {
        attributes: {
          displayName: string
        }
      }
    },
    cover: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

export default function Author() {
  const { query } = useRouter()

  const [authorPosts, setAuthorPosts] = useState<IPostsProps[]>()

  useEffect(() => {
    const id: Variables = {
      id: query.id
    }

    loadAuthorById(id).then((response: any) => {
      console.log(response.author.data)
      setAuthorPosts(response.author.data.attributes.posts.data)
    }).catch((error) => {
      console.log(error)
      console.clear()
    })


  }, [query.id])

  return (
    <div>
      <header>
        <Header />
      </header>

      <div className={styles.authorPageContainer}>
        {authorPosts?.map((post) => (
          <PostCard
            key={post.id} 
            category={post.attributes.category.data.attributes.displayName} 
            title={post.attributes.title}
            summary={post.attributes.excerpt}
            image={post.attributes.cover.data.attributes.url}
            id={post.id} 
          />
        ))}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}