import React, {FC} from 'react'
import {Button} from '../../components/Button'
import styles from './style.module.scss'
import {Logo} from '../../components/Logo'
import {useTranslation} from 'react-multi-lang'
import {RouteComponentProps} from '@reach/router'

interface Props extends RouteComponentProps {
  install: () => void;
  prompt: Event | undefined;
}

export const Home: FC<Props> = ({install, prompt}) => {
  const t = useTranslation()

  return (
    <div className={styles.home}>
      <div></div>
      
      <div>
        <Logo />
        <p>{t('home.welcome')}</p>
        <h1>CAR RECOGNITION</h1>
      </div>

      <Button onClick={install} style={{opacity: prompt && 100}}>{t('home.install')}</Button>
    </div>
  )
}
