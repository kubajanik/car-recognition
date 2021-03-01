import React from 'react'
import LogoImg from '../../images/logo.png'
import styles from './style.module.scss'

export const Logo = () => (
  <img 
    className={styles.logo}
    src={LogoImg} 
    alt="logo"
  />
)