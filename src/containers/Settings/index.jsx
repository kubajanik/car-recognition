import React from 'react'
import useDarkMode from 'use-dark-mode'
import {Header} from '../../components/Header'
import {Choices} from '../../components/Choices'
import styles from './style.module.scss'

export const Settings = () => {
  const darkMode = useDarkMode()

  return (
    <div className={styles.settings}>
      <Header>Settings</Header>

      <div>
        <div>Dark Mode</div>
        <Choices 
          defaultValue={darkMode.value}
          onChange={darkMode.toggle}
          options={[
            {value: true, label: 'On'},
            {value: false, label: 'Off'}
          ]}
        />
      </div>
    </div>
  )
}
