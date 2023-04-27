import styles from '../../styles/Footer.module.scss'
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export const Footer = () => {
  return (
    <footer className={styles.footerContainer} >
      <div className={styles.footerIcons} >
        <a href="https://www.instagram.com/julionorberto_s/" target='_blank'> <InstagramLogo alt='Instagram logo' color='#1B98E0' size={32} /> </a>
        <a href="https://www.linkedin.com/in/julio-norberto/" target='_blank'> <LinkedinLogo alt='LinkedIn logo' color='#1B98E0' size={32} /> </a>
      </div>

      <div className={styles.footerText} >
        <p>Sapphire - 2023</p>
        
        <span>
          <a href="https://www.freepik.com/free-vector/blue-black-abstract-background_23651431.htm#page=4&query=background vectors&position=8&from_view=search&track=robertav1">Image by Sketchepedia</a> on Freepik
        </span>
        
      </div>
    </footer>
  )
}