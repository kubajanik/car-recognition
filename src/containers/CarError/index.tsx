import {FC} from 'react'
import {MdError} from 'react-icons/md'
import {Button} from '../../components/Button'
import {navigate, RouteComponentProps} from '@reach/router'
import {useTranslation} from 'react-multi-lang'
import styles from './style.module.scss'

export const CarError: FC<RouteComponentProps> = () => {
  const t = useTranslation()

  return (
    <div className={styles.modal}>
      <div />
      
      <div>
        <MdError />
        <p>{t('car-error.message')}</p>
      </div>

      <Button onClick={() => navigate(-1)}>
        {t('car-error.button')}
      </Button>
    </div>
  )
}
