import React, {FC} from 'react'
import LogoImg from '../../images/logo.png'
import styles from './style.module.scss'

interface Props {
  animated?: boolean;
}

export const Logo: FC<Props> = ({animated = false}) => (
  <img 
    className={styles.logo}
    data-animated={animated}
    src={LogoImg} 
    alt="logo"
  />
)