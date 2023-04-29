import styles from '../../styles/Posts.module.scss'

import image1 from '../../../public/oazulEbranco.png'
import image2 from '../../../public/verdeEbranco.png'
import image3 from '../../../public/roxoEbranco.png'

import { PostCard } from '../PostCard'


interface IPosts {
  image: any
  category: string
  title: string
  summary: string
}

// Temporary Mock
const posts: IPosts[] = [
  {
    image: image1.src,
    category: 'TypeScript',
    title: 'Usando TypeScript POO da forma certa',
    summary: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis sit alias optio doloremque praesentium'
  },
  {
    image: image2.src,
    category: 'Back-end',
    title: 'Multi Threading com Go',
    summary: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis sit alias optio doloremque praesentium'
  },
  {
    image: image3.src,
    category: 'Banco de dados',
    title: 'Prisma - O Guia definitivo',
    summary: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis sit alias optio doloremque praesentium'
  },
]

export const Posts = () => {
  return (
    <main className={styles.postsContainer} >
      { posts.map((post) => (
        <PostCard image={post.image} category={post.category} title={post.title} summary={post.summary} />
      )) }
    </main>
  )
}