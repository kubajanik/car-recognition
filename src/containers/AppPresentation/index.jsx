import React from 'react'
import styles from './style.module.scss'

export const AppPresentation = () => {
  return (
    <div className={styles.presentation}>
      <h1>CAR RECOGNITION</h1>
      <img src="app.png" width="300" alt="app" />
      <p>Try it on your mobile</p>
    </div>
  )
}
