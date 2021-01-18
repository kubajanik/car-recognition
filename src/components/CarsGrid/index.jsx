import React from 'react'
import {useCarInfo} from '../../containers/CarInfo'
import styles from './style.module.scss'

export const CarsGrid = ({cars, title}) => {
  const {show, CarInfo} = useCarInfo()

  return (
    <div className={styles.grid}>
      <h2>{title}</h2>
      
      {cars.map((car, index) => (
        <div key={index} onClick={() => show(car.make, car.model)}>
          <img src={car.image} alt="car" />
        </div>
      ))}

      <CarInfo />
    </div>
  )
}
