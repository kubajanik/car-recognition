import React from 'react'
import {Button} from '../../components/Button'
import styles from './style.module.scss'
import Logo from '../../images/logo.png'
import {useTranslation} from 'react-multi-lang'

export const Home = ({install, prompt}) => {
  const t = useTranslation()

  return (
    <div className={styles.home}>
      <div></div>
      
      <div>
        <img src={Logo} alt="logo"/>
        <p>{t('home.welcome')}</p>
        <h1>CAR RECOGNITION</h1>
      </div>

      <Button onClick={install} style={{opacity: prompt && 100}}>{t('home.install')}</Button>
    </div>
  )
}
