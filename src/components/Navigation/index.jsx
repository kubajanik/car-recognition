import React from 'react'
import {Link} from '@reach/router'
import {FaHome, FaRegHeart} from 'react-icons/fa'
import {IoMdQrScanner} from 'react-icons/io'
import {RiHistoryFill} from 'react-icons/ri'
import {GoSettings} from 'react-icons/go'
import styles from './style.module.scss'
import {useTranslation} from 'react-multi-lang'

export const Navigation = () => {
  const t = useTranslation()

  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <FaHome />
        {t('home.title')}
      </Link>
      <Link to="/favorite">
        <FaRegHeart />
        {t('favorite.title')}
      </Link>
      <Link to="/capture">
        <IoMdQrScanner />
        {t('capture.title')}
      </Link>
      <Link to="/history">
        <RiHistoryFill />
        {t('history.title')}
      </Link>
      <Link to="/settings">
        <GoSettings />
        {t('settings.title')}
      </Link>
    </nav>
  )
}