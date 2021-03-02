import React from 'react'
import {Logo} from '../Logo'
import styles from './style.module.scss'

export const Empty = () => (
  <div className={styles.empty}>
    <Logo />
    <p>No cars to show</p>
  </div>
)