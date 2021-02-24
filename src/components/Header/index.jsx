import React from 'react'
import styles from './style.module.scss'

export const Header = ({children}) => (
  <h2 className={styles.header}>{children}</h2>
)
