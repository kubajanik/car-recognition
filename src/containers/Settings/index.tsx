import React, {FC} from 'react'
import useDarkMode from 'use-dark-mode'
import {Header} from '../../components/Header'
import {Choices} from '../../components/Choices'
import {ColorPicker} from '../../components/ColorPicker'
import styles from './style.module.scss'
import {useTranslation, setLanguage, getLanguage} from 'react-multi-lang'
import {usePrimaryColor} from '../../hooks'
import {RouteComponentProps} from '@reach/router'

export const Settings: FC<RouteComponentProps> = () => {
  const darkMode = useDarkMode()
  const t = useTranslation()
  const [color, setColor] = usePrimaryColor()

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

      <div>
        <div>{t('settings.color')}</div>
        <ColorPicker
          defaultColor={color}
          colors={[
            '#fd3f3f', 
            '#0087ff', 
            '#00a534', 
            '#9c64ff'
          ]}
          onChange={color => setColor(color)}
        />
      </div>
    </div>
  )
}
