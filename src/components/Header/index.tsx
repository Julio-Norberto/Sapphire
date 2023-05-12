import styles from '../../styles/Header.module.scss'
import logo from '../../../public/logo.png'

type HeaderProps = {
  title?: string
  component?: React.ReactNode
}

export const Header = ({ title, component }: HeaderProps) => {
  return (
    <header>

      <div className={styles.menuContainer}>
        <div className={styles.logo}>
            <a href='/' > <img height={58} src={logo.src} alt="sapphire logo" /> </a>
        </div>

        <div className={styles.menu}>
          <ul>
            <li>
              <a href="/category/5">Fundamentals</a>
            </li>

            <li>
              <a href="/category/2">Front-end</a>
            </li>

            <li>
              <a href="/category/3">Back-end</a>
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