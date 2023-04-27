import styles from '../../styles/PostCard.module.scss'
import defaultImage from '../../../public/azulEpreto.png'

export const PostCard = () => {
  return (
    <div className={styles.postCardContainer} >
      <div className={styles.postCardImage}>
        <img width={`100%`} height={`200px`} src={defaultImage.src} alt="" />
        <p>Category</p>
      </div>

      <div className={styles.postCardText}>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}