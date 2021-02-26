import React from 'react'
import useDarkMode from 'use-dark-mode'
import {Header} from '../../components/Header'
import {Toggle} from '../../components/Toggle'
import styles from './style.module.scss'

export const Settings = () => {
  const darkMode = useDarkMode()

  return (
    <div className={styles.settings}>
      <Header>Settings</Header>

      <div>
        <div>Dark Mode</div>
        <Toggle on={darkMode.value} onChange={darkMode.toggle} />
      </div>
    </div>
  )
}
