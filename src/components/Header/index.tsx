import React, {FC} from 'react'
import styles from './style.module.scss'

interface Props {
  children: string;
}

export const Header: FC<Props> = ({children}) => (
  <h2 className={styles.header}>{children}</h2>
)
