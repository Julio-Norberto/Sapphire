import styles from '../../styles/Category.module.scss'

import { loadCategoryById } from "@/api/loadCategoryById";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/PostCard";
import { Header } from "@/components/header";
import { Variables } from "graphql-request";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Posts = {
  id: string
  attributes: {
    title: string
    excerpt: string
    cover: {
      data: {
        attributes: {
          alternativeText: string
          url: string
        }
      }
    }
  }
}

interface ICategoryProps {
  displayName: string
}

export default function Category() {

  const { query } = useRouter()

  const [category, setCategory] = useState<ICategoryProps>()
  const [posts, setPosts] = useState<Posts[]>()

  useEffect(() => {
    const id: Variables = {
      id: query.id
    }

    loadCategoryById(id).then((response: any) => {
      setCategory(response.category.data.attributes)
      setPosts(response.category.data.attributes.posts.data)
    }).catch((error) => {
      console.log(error)
      console.clear()
    })


  }, [query.id])

  return(
    <div>
      <div>
        <Header title={category ? category.displayName : ''} />
      </div>

      <div className={styles.categoryContainer} >
         { posts ? posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id} 
            title={post.attributes.title} 
            summary={post.attributes.excerpt} 
            image={post.attributes.cover.data.attributes.url} 
          />
         )) : '' }
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}