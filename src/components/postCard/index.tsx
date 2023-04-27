import styles from '../../styles/PostCard.module.scss'

interface IPostCardProps {
  image: any
  category: string
  title: string
  summary: string
}

export const PostCard = ({ image, category, title, summary }: IPostCardProps) => {
  return (
    <div className={styles.postCardContainer} >
      <div className={styles.postCardImage}>
        <img width={`100%`} height={`200px`} src={image.src} alt="" />
        <p> { category } </p>
      </div>

      <div className={styles.postCardText}>
        <h2> { title } </h2>
        <p>
          { summary }
        </p>
      </div>
    </div>
  )
}