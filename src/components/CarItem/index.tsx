import React, {FC, MouseEvent} from 'react'
import {navigate, useMatch} from '@reach/router'
import styles from './style.module.scss'
import {IoMdClose} from 'react-icons/io'
import {Car} from '../../db'

interface Props {
  car: Car;
  removable?: boolean;
  onRemove?: (e: MouseEvent, car: Car) => void
}

export const CarItem: FC<Props> = ({car, removable = false, onRemove = () => {}}) => {
  const match = useMatch('/car/:make/:model')

  const showCarInfo = () => {
    navigate(`/car/${car.make}/${car.model}`, {replace: Boolean(match)})
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
