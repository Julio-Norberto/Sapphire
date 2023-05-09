import styles from '../../styles/AuthorComponent.module.scss'
import { LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'

type AuthorProps = {
  image: string,
  alternativeText: string,
  name: string,
  description: string,
  linkedinURL: string,
  instagramURL: string
}

export const AuthorComponent = ({ name, image, alternativeText, description, linkedinURL, instagramURL }: AuthorProps) => {
  return (
    <div className={styles.authorComponentContainer} >
      <div className={styles.authorImage}>
        <img src={image} alt={`${alternativeText}`} />
      </div>

      <div className={styles.authorText} >
        <h2> {name} </h2>
        <p> {description} </p>
      </div>

      <div className={styles.authorSocials}>
        <a href={instagramURL} target='_blank'> <InstagramLogo alt='Instagram logo' color='#1B98E0' size={32} /> </a>
        <a href={linkedinURL} target='_blank'> <LinkedinLogo alt='LinkedIn logo' color='#1B98E0' size={32} /> </a>
      </div>
    </div>
  )
}