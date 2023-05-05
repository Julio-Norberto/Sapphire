import styles from '../../styles/Loading.module.scss'
import classNames from 'classnames'

export const Loading = () => {
  return (
    <div className={
      classNames(
        styles.spinner,
        styles.animated
      )
    } >
    </div>
  )
}