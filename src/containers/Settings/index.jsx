import React from 'react'
import {Header} from '../../components/Header'
import {Toggle} from '../../components/Toggle'
import styles from './style.module.scss'

export const Settings = () => {
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    document.body.dataset.dark = theme === 'dark'
  }, [theme])

  return (
    <div className={styles.settings}>
      <Header>Settings</Header>

      <div>
        <div>Dark Mode</div>
        <Toggle on={theme === 'dark'} onChange={value => setTheme(value ? 'dark' : 'light')} />
      </div>
    </div>
  )
}
