import React from 'react'
import styles from './style.module.css'
import {IoMdClose, IoMdHeartEmpty} from 'react-icons/io'

export const CarInfo = ({make, model}) => {
  const [car, setCar] = React.useState({})

  React.useEffect(() => {
    window.fetch(`/api/car-info?make=${make}&model=${model}`)
      .then(res => res.json())
      .then(json => setCar(json))
      .catch(err => alert(err))
  }, [])

  return (
    <div className={styles.modal}>
      <div>
        <IoMdHeartEmpty />
        <IoMdClose />
      </div>
      <img src={car?.image} alt=""/>
      <h2>{car?.make} {car?.model}</h2>
    </div>
  )
}