import React from 'react'
import db from '../../db'
import {CarsGrid} from '../../components/CarsGrid'

export const Favorite = () => {
  const [cars, setCars] = React.useState([])

  const fetchFavorites = () => {
    db.favorite
      .orderBy('date')
      .reverse()
      .limit(20)
      .toArray()
      .then(cars => setCars(cars))
  }

  React.useEffect(() => {
   fetchFavorites()
  }, [])

  return (
    <CarsGrid 
      cars={cars} 
      title="Favorite" 
      onRemove={fetchFavorites} 
      removable 
    />
  )
}
