import React from 'react'
import styles from './App.module.scss'
import {Navigation} from './components/Navigation'
import {Router} from '@reach/router'
import {Capture} from './containers/Capture'
import {History} from './containers/History'
import {Home} from './containers/Home'
import {Favorite} from './containers/Favorite'
import {CarInfo} from './containers/CarInfo'
import {AppPresentation} from './containers/AppPresentation'
import {Tutorial} from './containers/Tutorial'
import {Settings} from './containers/Settings'
import {useInstallPrompt} from './hooks'
import isMobile from 'ismobilejs'
import useDarkMode from 'use-dark-mode'
import './style.css'

export default function App() {
  const [prompt, install] = useInstallPrompt()
  useDarkMode()

  if (!isMobile(window.navigator).any) {
    return <AppPresentation />
  }

  if (window.localStorage.getItem('tutorial-skipped') === null) {
    return <Tutorial />
  }

  return (
    <div className={styles.container}>
      <Router className={styles.router}>
        <Home path="/" install={install} prompt={prompt} />
        <Favorite path="/favorite" />
        <Capture path="/capture" />
        <History path="/history" />
        <Settings path="/settings" />
        <CarInfo path="/car/:make/:model" />
      </Router>
      <Navigation />
    </div>
  )
}
