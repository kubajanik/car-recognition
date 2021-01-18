import React from 'react'
import db from '../../db'
import styles from './style.module.scss'
import {useCarInfo} from '../CarInfo'

export const Favorite = () => {
  const [cars, setCars] = React.useState([])
  const {show, CarInfo} = useCarInfo()

  React.useEffect(() => {
    db.favorite
      .orderBy('date')
      .reverse()
      .limit(20)
      .toArray()
      .then(cars => setCars(cars))
  }, [])

  return (
    <>
      <div className={styles.favorite}>
        <h2>Favorite</h2>
        {cars.map((car, index) => (
          <div key={index} onClick={() => show(car.make, car.model)}>
            <img src={car.image} alt="car" />
          </div>
        ))}
      </div>

      <CarInfo />
    </>
  )
}
