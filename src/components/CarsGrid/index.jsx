import React from 'react'
import styles from './style.module.scss'
import {IoMdClose} from 'react-icons/io'
import db from '../../db'
import {navigate} from '@reach/router'

export const CarsGrid = ({cars, title, removable = false}) => {
  const unfavorite = async (e, car) => {
    e.stopPropagation()
    await db.favorite.where({...car}).delete()
  }

  return (
    <div className={styles.grid}>
      <h2>{title}</h2>
      
      {cars.map((car, index) => (
        <div 
          key={index} 
          onClick={() => navigate(`car/${car.make}/${car.model}`)}
          className={styles.item}
        >
          <img src={car.image} alt="car" />
          {removable && <IoMdClose className={styles.close} onClick={e => unfavorite(e, car)} />}
        </div>
      ))}
    </div>
  )
}
