import React from 'react'
import {navigate, useMatch} from '@reach/router'
import styles from './style.module.scss'
import {IoMdClose} from 'react-icons/io'

export const CarItem = ({car, removable, onRemove}) => {
  const match = useMatch('/car/:make/:model')

  const showCarInfo = () => {
    navigate(`/car/${car.make}/${car.model}`, {replace: match})
  }

  return (
    <div 
      onClick={() => showCarInfo()}
      className={styles.item}
    >
      <img src={car.image} alt="car" />
      {removable && <IoMdClose className={styles.close} onClick={e => onRemove(e, car)} />}
    </div>
  )
}
