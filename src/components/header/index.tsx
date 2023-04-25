import styles from '../../styles/Header.module.scss'
import logo from '../../../public/logo.png'

type HeaderProps = {
  title?: string
  component?: React.ReactNode
}

export const Header: React.FunctionComponent<HeaderProps> = ({ title, component }) => {
  return (
    <header>

      <div className={styles.menuContainer}>
        <div className={styles.logo}>
            <a> <img height={58} src={logo.src} alt="" /> </a>
        </div>

        <div className={styles.menu}>
          <ul>
            <li>
              <a href="#">Mini-cursos</a>
            </li>

            <li>
              <a href="#">Front-end</a>
            </li>

            <li>
              <a href="#">Back-end</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.cover} >
        { title ? <h1> {title} </h1> : component }
      </div>
      
    </header>
  )
}