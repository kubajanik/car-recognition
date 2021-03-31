import React, {FC} from 'react'
import {Logo} from '../Logo'
import {useTranslation} from 'react-multi-lang'
import styles from './style.module.scss'

export const Empty: FC = () => {
  const t = useTranslation()

  return (
    <div className={styles.empty}>
      <Logo />
      <p>{t('cars-grid.empty')}</p>
    </div>
  )
}