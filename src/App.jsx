import React from 'react'
import styles from './App.module.scss'
import {Navigation} from './components/Navigation'
import {Router} from '@reach/router'
import {Capture} from './containers/Capture'
import {History} from './containers/History'
import {Home} from './containers/Home'
import {Favorite} from './containers/Favorite'
import {CarInfo} from './containers/CarInfo'

export default function App() {
  return (
    <div className={styles.container}>
      <Router className={styles.router}>
        <Home path="/" />
        <Favorite path="/favorite" />
        <Capture path="/capture" />
        <History path="/history" />
        <CarInfo path="/car/:make/:model" />
      </Router>
      <Navigation />
    </div>
  )
}
