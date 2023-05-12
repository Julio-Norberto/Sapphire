import { useRouter } from 'next/router'
import styles from '../../styles/PostCard.module.scss'

interface IPostCardProps {
  image: any
  category?: string
  title: string
  summary: string
  id?: string
  categoryId?: string
}

export const PostCard = ({ image, category, title, summary, id, categoryId }: IPostCardProps) => {
  const { push } = useRouter()

  return (
    <div className={styles.postCardContainer} >
      <div className={styles.postCardImage}>
        <img width={`100%`} height={`200px`} src={image} alt="Capa do post" />
        <p onClick={() => push(`/category/${categoryId}`)} > { category } </p>
      </div>

      <div className={styles.postCardText}>
        <h2> <a href={`/post/${id}`}> { title } </a> </h2>
        <p>
          { summary }
        </p>
      </div>
    </div>
  )
}