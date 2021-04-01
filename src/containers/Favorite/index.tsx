import React, {FC} from 'react'
import db from '../../db'
import {CarsGrid} from '../../components/CarsGrid'
import {useLiveQuery} from 'dexie-react-hooks'
import {useTranslation} from 'react-multi-lang'
import {RouteComponentProps} from '@reach/router'

export const Favorite: FC<RouteComponentProps> = () => {
  const cars = useLiveQuery(() => db.favorite.reverse().sortBy('date'))
  const t = useTranslation()
  
  if (!cars) {
    return null
  }

  return (
    <CarsGrid 
      cars={cars} 
      title={t('favorite.title')}
      removable 
      clearAll={() => {
        db.favorite.clear()
      }}
    />
  )
}
