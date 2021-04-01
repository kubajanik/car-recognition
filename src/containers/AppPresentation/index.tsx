import {FC} from 'react'
import styles from './style.module.scss'
import App from '../../images/app.png'

export const AppPresentation: FC = () => {
  return (
    <div className={styles.presentation}>
      <h1>CAR RECOGNITION</h1>
      <img src={App} width="300" height="745" alt="app" />
      <p>Try it on your mobile</p>
    </div>
  )
}
