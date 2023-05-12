import styles from '../../styles/Posts.module.scss'

import { PostCard } from '../PostCard'
import { useEffect, useState } from 'react'
import { loadPosts } from '@/api/loadPosts'
import { Loading } from '../Loading'

interface IPostProps {
  id: string
  attributes: {
    excerpt: string
    title: string
    cover: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    category: {
      data: {
        id: string
        attributes: {
          displayName: string
        }
      }
    }
  }
}

export const Posts = () => {
  useEffect(() => {
    loadPosts().then((r: any) => {
      const arr: any[] = r.posts.data
      setPosts(arr)
      setLoading(false)
    })
  }, [])

  const [posts, setPosts] = useState<IPostProps[]>()
  const [loading, setLoading] = useState(true)

  return (
    <main className={styles.postsContainer} >
      { loading ? <Loading /> : posts ? posts.map((post) => (
        <PostCard 
          key={post.id} 
          image={post.attributes.cover.data.attributes.url} 
          category={post.attributes.category.data.attributes.displayName} 
          title={post.attributes.title} 
          summary={post.attributes.excerpt} 
          id={post.id} 
          categoryId={post.attributes.category.data.id}
        />
      )) : <p>Não temos posts no momento...</p> }
    </main>
  )
}