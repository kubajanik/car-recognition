import React from 'react'
import LogoImg from '../../images/logo.png'
import styles from './style.module.scss'

export const Logo = ({animated}) => (
  <img 
    className={styles.logo}
    data-animated={animated}
    src={LogoImg} 
    alt="logo"
  />
)