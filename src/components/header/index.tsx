import styles from '../../styles/Header.module.scss'
import logo from '../../../public/logo.png'

export const Header: React.FunctionComponent = () => {
  return (
    <header>

      <div className={styles.menuContainer}>
        <div className='logo'>
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
        <h1>Conteúdo bruto entregue para você <br /> de maneira totalmente lapidada</h1>
      </div>
      
    </header>
  )
}