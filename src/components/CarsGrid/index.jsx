import React from 'react'
import {CarItem} from '../CarItem'
import {Header} from '../Header'
import db from '../../db'
import styles from './style.module.scss'

export const CarsGrid = ({cars, title, removable = false}) => {
  const unfavorite = async (e, {make, model}) => {
    e.stopPropagation()
    await db.favorite.where({make, model}).delete()
  }

  return (
    <>
      <Header>{title}</Header>
      <div className={styles.grid}>
        {cars.map((car, index) => (
          <CarItem 
            car={car} 
            key={index} 
            onRemove={unfavorite}
            removable={removable}
          />
        ))}
      </div>
    </>
  )
}
