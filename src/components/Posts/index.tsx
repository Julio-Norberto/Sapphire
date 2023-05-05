import styles from '../../styles/Posts.module.scss'

import { PostCard } from '../PostCard'
import { useEffect, useState } from 'react'
import { loadPosts } from '@/api/loadPosts'
import { Loading } from '../Loading'

export const Posts = () => {
  useEffect(() => {
    loadPosts().then((r: any) => {
      const arr: any[] = r.posts.data
      setPosts(arr)
      setLoading(false)
    })
  }, [])

  const [posts, setPosts] = useState<any[]>()
  const [loading, setLoading] = useState(true)

  return (
    <main className={styles.postsContainer} >
      { loading ? <Loading /> : posts ? posts.map((post) => (
        <PostCard key={post.id} image={post.attributes.cover.data.attributes.url} category={post.attributes.categoryPost} title={post.attributes.title} summary={post.attributes.excerpt} id={post.id} />
      )) : <p>Não temos posts no momento...</p> }
    </main>
  )
}