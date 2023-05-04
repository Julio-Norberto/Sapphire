import styles from '../../styles/Posts.module.scss'

import image1 from '../../../public/oazulEbranco.png'
import image2 from '../../../public/verdeEbranco.png'
import image3 from '../../../public/roxoEbranco.png'

import { PostCard } from '../PostCard'
import { useEffect, useState } from 'react'
import { loadPosts } from '@/api/loadPosts'


interface IPosts {
  image: any
  category: string
  title: string
  summary: string
  id: string
}

export const Posts = () => {
  useEffect(() => {
    loadPosts().then((r: any) => {
      const arr: any[] = r.posts.data
      setPosts(arr)
    })
  }, [])

  const [posts, setPosts] = useState<any[]>()

  return (
    <main className={styles.postsContainer} >
      { posts ? posts.map((post) => (
        <PostCard key={post.id} image={post.attributes.cover.data.attributes.url} category={post.attributes.categoryPost} title={post.attributes.title} summary={post.attributes.excerpt} id={post.id} />
      )) : <p> Ainda não temos posts no momento... :) </p> }
    </main>
  )
}