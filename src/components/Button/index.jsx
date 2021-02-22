import React from 'react'
import styles from './style.module.scss'

export const Button = ({children, ...restProps}) =>(
  <button className={styles.button} {...restProps}>{children}</button>
)
