import React from 'react'
import db from '../../db'
import {CarsGrid} from '../../components/CarsGrid'

export const History = () => {
  const [cars, setCars] = React.useState([])

  React.useEffect(() => {
    db.history
      .orderBy('date')
      .reverse()
      .limit(20)
      .toArray()
      .then(cars => setCars(cars))
  }, [])

  return (
    <CarsGrid cars={cars} title="History" />
  )
}
