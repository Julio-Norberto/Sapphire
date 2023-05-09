import styles from '../../styles/AuthorComponent.module.scss'

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
    <div>
      Author component
    </div>
  )
}