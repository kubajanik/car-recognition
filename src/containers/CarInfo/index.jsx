import React from 'react'
import styles from './style.module.css'
import {IoMdClose, IoMdHeartEmpty} from 'react-icons/io'

export const CarInfo = ({make, model, onClose}) => {
  const [car, setCar] = React.useState({})

  React.useEffect(() => {
    window.fetch(`/.netlify/functions/car-info?make=${make}&model=${model}`)
      .then(res => res.json())
      .then(json => setCar(json))
      .catch(err => alert(err))
  }, [make, model])

  return (
    <div className={styles.modal} >
      <div>
        <IoMdHeartEmpty />
        <h2>{make} {model}</h2>
        <IoMdClose onClick={onClose} />
      </div>
      <img src={car?.image} alt=""/>
    </div>
  )
}