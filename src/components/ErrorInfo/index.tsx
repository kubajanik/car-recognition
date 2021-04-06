import {FC} from 'react'
import {MdError} from 'react-icons/md'
import styles from './style.module.scss'

interface Props {
  error: string;
}

export const ErrorInfo: FC<Props> = ({error}) => (
  <div className={styles.error}>
    <MdError />
    <p>{error}</p>
  </div>
)