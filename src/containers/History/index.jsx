import React from 'react'
import db from '../../db'
import styles from './style.module.css'

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
    <div className={styles.history}>
      <h2>History</h2>
      {cars.map(car => (
        <div key={`${car.make} ${car.model}`}>
          <img src={car.image} alt="car" />
        </div>
      ))}
    </div>
  )
}
