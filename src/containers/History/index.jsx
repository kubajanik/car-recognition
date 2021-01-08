import React from 'react'
import db from '../../db'

export const History = () => {
  const [cars, setCars] = React.useState([])

  React.useEffect(() => {
    db.history.reverse().toArray()
      .then(cars => setCars(cars))
  }, [])

  return (
    <ul>
      {cars.map(car => (
        <li>{car.make} {car.model}</li>
      ))}
    </ul>
  )
}
