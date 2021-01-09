import React from 'react'
import db from '../../db'
import styles from './style.module.css'

export const History = () => {
  const [cars, setCars] = React.useState([])

  React.useEffect(() => {
    db.history.reverse().toArray()
      .then(cars => setCars(cars))
  }, [])

  return (
    <div className={styles.history}>
      {cars.map(car => (
        <div>
          <img src={car.image} alt="car" />
        </div>
      ))}
    </div>
  )
}
