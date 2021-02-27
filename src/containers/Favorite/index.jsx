import React from 'react'
import db from '../../db'
import {CarsGrid} from '../../components/CarsGrid'
import {useLiveQuery} from 'dexie-react-hooks'
import {useTranslation} from 'react-multi-lang'

export const Favorite = () => {
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
    />
  )
}
