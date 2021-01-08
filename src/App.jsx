import React from 'react'
import styles from './App.module.css'
import {Navigation} from './components/Navigation'
import {Router} from '@reach/router'
import {Capture} from './containers/Capture'
import {History} from './containers/History'

export default function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Capture path="/capture" />
        <History path="/history" />
      </Router>
      <Navigation />
    </div>
  )
}
