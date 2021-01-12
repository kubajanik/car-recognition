import React from 'react'
import {createPortal} from 'react-dom'
import styles from './style.module.css'
import {IoMdClose, IoMdHeartEmpty} from 'react-icons/io'
import db from '../../db'

const CarInfoModal = ({make, model, onClose}) => {
  const [car, setCar] = React.useState(null)
  
  React.useEffect(() => {
    const fetch = async () => {
      let car = await db.history.where({make, model}).first()
      if (car) {
        setCar(car)
        return
      }

      const response = await fetch(`/.netlify/functions/car-info?make=${make}&model=${model}`)
      car = await response.json()
      if (car) {
        setCar(car)
        db.history.put(car)
      }
    }

    fetch()
  }, [])
  
  return createPortal(
    <div className={styles.modal} >
      <div>
        <IoMdHeartEmpty />
        <h2>{make} {model}</h2>
        <IoMdClose onClick={onClose} />
      </div>
      <img src={car?.image} alt=""/>
    </div>,
    document.getElementById('modal')
  )
}

export const useCarInfo = () => {
  const [car, setCar] = React.useState(null)

  const show = (make, model) => setCar({make, model})
  const hide = () => setCar(null)

  const CarInfo = () => (
    car ? <CarInfoModal make={car.make} model={car.model} onClose={hide} /> : null
  )

  return {show, CarInfo}
} 