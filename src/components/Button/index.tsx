import React, {ButtonHTMLAttributes, FC} from 'react'
import styles from './style.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button: FC<Props> = ({children, ...restProps}) => (
  <button className={styles.button} {...restProps}>{children}</button>
)
