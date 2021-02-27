import React from 'react'
import db from '../../db'
import {CarsGrid} from '../../components/CarsGrid'
import {useLiveQuery} from 'dexie-react-hooks'
import {useTranslation} from 'react-multi-lang'

export const History = () => {
  const cars = useLiveQuery(() => db.history.reverse().sortBy('date'))
  const t = useTranslation()

  if (!cars) {
    return null
  }

  return (
    <CarsGrid cars={cars} title={t('history.title')} />
  )
}
