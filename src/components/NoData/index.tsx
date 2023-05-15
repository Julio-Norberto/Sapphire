import styles from '../../styles/NoData.module.scss'
import astronaut from '../../../public/Astronaut helmet-amico.svg'

export const NoData = () => {
  return(
    <div className={styles.container} >
      <h2>Ops... Ainda não temos Posts dessa categoria.</h2>
      <p><a href='/' >Clique e continue desbravando o espaço do nosso conteúdo</a> </p>
      <img src={astronaut.src} alt="imagem do capacete de um astronauta com detalhes azuis" />
    </div>
  )
}