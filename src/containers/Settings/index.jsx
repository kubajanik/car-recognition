import React from 'react'
import useDarkMode from 'use-dark-mode'
import {Header} from '../../components/Header'
import {Choices} from '../../components/Choices'
import styles from './style.module.scss'
import {useTranslation, setLanguage, getLanguage} from 'react-multi-lang'

export const Settings = () => {
  const darkMode = useDarkMode()
  const t = useTranslation()

  return (
    <div className={styles.settings}>
      <Header>{t('settings.title')}</Header>

      <div>
        <div>{t('settings.language')}</div>
        <Choices 
          defaultValue={getLanguage()}
          onChange={language => {
            setLanguage(language)
            localStorage.setItem('language', language)
          }}
          options={[
            {value: 'en', label: t('settings.english')},
            {value: 'pl', label: t('settings.polish')}
          ]}
        />
      </div>

      <div>
        <div>{t('settings.dark-mode')}</div>
        <Choices 
          defaultValue={darkMode.value}
          onChange={darkMode.toggle}
          options={[
            {value: true, label: t('settings.on')},
            {value: false, label: t('settings.off')}
          ]}
        />
      </div>
    </div>
  )
}
