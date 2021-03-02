import React from 'react'
import {Logo} from '../Logo'
import {useTranslation} from 'react-multi-lang'
import styles from './style.module.scss'

export const Empty = () => {
  const t = useTranslation()

  return (
    <div className={styles.empty}>
      <Logo />
      <p>{t('cars-grid.empty')}</p>
    </div>
  )
}