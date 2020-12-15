import React from 'react'
import styles from './App.module.css'
import {Navigation} from './components/Navigation'

export default function App() {
  return (
    <div className={styles.container}>
      <div></div>
      <Navigation />
    </div>
  )
}
