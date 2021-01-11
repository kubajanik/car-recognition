import React from 'react'
import {createPortal} from 'react-dom'
import styles from './style.module.css'
import {IoMdClose, IoMdHeartEmpty} from 'react-icons/io'
import db from '../../db'

const CarInfoModal = ({make, model, onClose}) => {
  const [car, setCar] = React.useState(null)
  
  React.useEffect(() => {
    window.fetch(`/.netlify/functions/car-info?make=${make}&model=${model}`)
      .then(res => res.json())
      .then(json => setCar(json))
      .catch(err => alert(err))
  }, [])
  
  React.useEffect(() => {
    if (car) {
      db.history.put({...car, date: new Date()})
    }
  }, [car])
  
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