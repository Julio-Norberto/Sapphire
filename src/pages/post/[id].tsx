import styles from '../../styles/PostPage.module.scss'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Header } from "@/components/header"
import { Footer } from "@/components/Footer"

import { Variables } from "graphql-request"
import { loadPostById } from '@/api/loadPostById'
import { Loading } from '@/components/Loading'

interface IPostsProps {
  attributes: {
    content: string,
    createdAt: string,
    title: string,
    authorName: string,
  }
}

type Author = {
  displayName: string,
  title?: string
  photo: {
    data: {
      attributes: {
        alternativeText: string,
        url: string,
      }
    }
  }
}

export default function Post() {
  const { query, push } = useRouter()

  const [posts, setPosts] = useState<IPostsProps>()
  const [author, setAuthor] = useState<Author>()
  const [authorId, setAuthorId] = useState<string>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id: Variables = {
      id: query.id
    }

    loadPostById(id).then((response: any) => {
      setPosts(response.post.data)
      setAuthor(response.post.data.attributes.author.data.attributes)
      setAuthorId(response.post.data.attributes.author.data.id)
      setLoading(false)
    }).catch((error) => {
      console.log(error)
      console.clear()
    })
    
  }, [query.id])

  return (
    <div>
      <Header component={ loading ? <Loading /> : '' } title={posts ? posts.attributes.title : ''} />

      <div className={styles.postPageContainer} >
        <span> { posts? posts.attributes.createdAt.slice(0, 10) : '' } </span>

        <div className={styles.postText} >
          <ReactMarkdown 
            children={posts ? posts.attributes.content : ''} 
            remarkPlugins={[remarkGfm]}  
            rehypePlugins={[rehypeRaw]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </div>

        <div className={styles.postAuthor} >
          <div>
            <img src={author ? author.photo.data.attributes.url : ''} alt={`${author ? author.photo.data.attributes.alternativeText : ''}`} />
          </div>

          <div>
            <h3 onClick={() => push(`/author/${authorId}`)} > { author ? author.displayName : '' } </h3>
            <p> { author?.title ? author.title : 'Autor do post' } </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}