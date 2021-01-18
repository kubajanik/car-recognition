import React from 'react'
import {createPortal} from 'react-dom'
import styles from './style.module.scss'
import {IoMdClose, IoMdHeartEmpty, IoMdHeart} from 'react-icons/io'
import db from '../../db'

const CarInfoModal = ({make, model, onClose}) => {
  const [car, setCar] = React.useState(null)
  const [isFavorite, setIsFavorite] = React.useState(false)
  
  React.useEffect(() => {
    const fetch = async () => {
      let car = await db.history.get({make, model})
      if (car) {
        setCar(car)
        return
      }

      const response = await window.fetch(`/.netlify/functions/car-info?make=${make}&model=${model}`)
      car = await response.json()
      if (car) {
        setCar(car)
        db.history.put(car)
      }
    }

    fetch()
  }, [make, model])

  React.useEffect(() => {
    db.favorite.get({make, model})
      .then(car => setIsFavorite(Boolean(car)))
  }, [make, model])

  const favorite = async () => {
    await db.favorite.put(car)
    setIsFavorite(true)
  }

  const unfavorite = async () => {
    await db.favorite.where({make, model}).delete()
    setIsFavorite(false)
  }
  
  return createPortal(
    <div className={styles.modal} >
      <div>
        {isFavorite ? <IoMdHeart onClick={unfavorite} /> : <IoMdHeartEmpty onClick={favorite} />}
        <h2>{make} {model}</h2>
        <IoMdClose onClick={onClose} />
      </div>
      <img src={car?.image} alt="" />
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