import {FC} from 'react'
import {Button} from '../../components/Button'
import {navigate, RouteComponentProps} from '@reach/router'
import {useTranslation} from 'react-multi-lang'
import styles from './style.module.scss'
import {ErrorInfo} from '../../components/ErrorInfo'

export const CarError: FC<RouteComponentProps> = () => {
  const t = useTranslation()

  return (
    <div className={styles.modal}>
      <div />
      
      <ErrorInfo error={t('car-error.message')} />

      <Button onClick={() => navigate(-1)}>
        {t('car-error.button')}
      </Button>
    </div>
  )
}
