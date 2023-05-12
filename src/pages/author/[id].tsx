import styles from '../../styles/AuthorPage.module.scss'

import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { Variables } from 'graphql-request'

import { loadAuthorById } from '@/api/loadAuthorById'
import { PostCard } from '@/components/PostCard'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AuthorComponent } from '@/components/AuthorComponent'
import { Loading } from '@/components/Loading'

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

interface AuthorProps {
  displayName: string,
  description: string,
  linkedinURL: string,
  instagramURL: string,
  photo: {
    data: {
      attributes: {
        alternativeText: string,
        url: string
      }
    }
  }
}

export default function Author() {
  const { query } = useRouter()

  const [authorPosts, setAuthorPosts] = useState<IPostsProps[]>()
  const [author, setAuthor] = useState<AuthorProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id: Variables = {
      id: query.id
    }

    loadAuthorById(id).then((response: any) => {
      console.log(response.author.data)
      setAuthor(response.author.data.attributes)
      setAuthorPosts(response.author.data.attributes.posts.data)
      setLoading(false)
    }).catch((error) => {
      console.log(error)
      console.clear()
      setLoading(false)
    })


  }, [query.id])

  return (
    <div>
      <header>
        <Header 
          component={ 
            loading ? (
              <Loading />
            ) : (
              <AuthorComponent 
                image={author ? author?.photo.data.attributes.url : ''} 
                alternativeText={author ? author?.photo.data.attributes.alternativeText : ''} 
                description={author ? author?.description : ''}
                name={author ? author?.displayName : ''}
                instagramURL={author ? author?.instagramURL: ''}
                linkedinURL={author ? author?.linkedinURL: ''}
              />
            )
          } 
        />
      </header>

      <div className={styles.mainDiv} >
        <div>
          <h1> { loading ? '' : `Todos os Posts de ${author?.displayName}` } </h1>
        </div>

        <div className={styles.authorPageContainer}>
          { loading ? (
            <Loading /> 
          ) : (
            authorPosts?.map((post) => (
              <PostCard
                key={post.id} 
                category={post.attributes.category.data.attributes.displayName} 
                title={post.attributes.title}
                summary={post.attributes.excerpt}
                image={post.attributes.cover.data.attributes.url}
                id={post.id} 
              />
            ))
          ) }
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}