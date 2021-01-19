import React from 'react'
import db from '../../db'
import {CarsGrid} from '../../components/CarsGrid'
import {useLiveQuery} from 'dexie-react-hooks'

export const Favorite = () => {
  const cars = useLiveQuery(() => db.favorite.reverse().sortBy('date'))

  if (!cars) {
    return null
  }

  return (
    <CarsGrid 
      cars={cars} 
      title="Favorite" 
      removable 
    />
  )
}
