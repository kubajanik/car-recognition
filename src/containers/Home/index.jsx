import React from 'react'
import styles from './style.module.scss'

export const Home = ({install, prompt}) => {
  return (
    <div className={styles.home}>
      <div></div>
      
      <div>
        <img src="icon-192.png" alt="logo"/>
        <p>Welcome to</p>
        <h1>CAR RECOGNITION</h1>
        <p>Search in the physical world</p>
      </div>

      <button onClick={install} style={{opacity: prompt && 100}}>Install</button>
    </div>
  )
}
