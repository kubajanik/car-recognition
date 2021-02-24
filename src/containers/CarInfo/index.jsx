import React from 'react'
import styles from './style.module.scss'
import {IoMdClose, IoMdHeartEmpty, IoMdHeart} from 'react-icons/io'
import db from '../../db'
import {navigate} from '@reach/router'
import Logo from '../../images/logo.png'
import {CarItem} from '../../components/CarItem'

export const CarInfo = ({make, model}) => {
  const [car, setCar] = React.useState(null)
  const [isFavorite, setIsFavorite] = React.useState(false)
  
  React.useEffect(() => {
    const fetch = async () => {
      setCar(null)

      let car = await db.history.get({make, model})
      if (car) {
        setCar(car)
        return
      }

      const response = await window.fetch(`/.netlify/functions/car-info?make=${make}&model=${model}`)
      car = await response.json()
      if (car) {
        setCar(car)
        db.history.put({...car, date: new Date()})
      }
    }

    fetch()
  }, [make, model])

  React.useEffect(() => {
    db.favorite.get({make, model})
      .then(car => setIsFavorite(Boolean(car)))
  }, [make, model])

  const favorite = async () => {
    await db.favorite.put({...car, date: new Date()})
    setIsFavorite(true)
  }

  const unfavorite = async () => {
    await db.favorite.where({make, model}).delete()
    setIsFavorite(false)
  }
  
  return (
    <div className={styles.modal} data-loading={!car}>
      {car 
        ? <>
            <div className={styles.topbar}>
              {isFavorite ? <IoMdHeart onClick={unfavorite} /> : <IoMdHeartEmpty onClick={favorite} />}
              <IoMdClose onClick={() => navigate(-1)} />
            </div>
            <img className={styles.image} src={car?.image} alt="" />

            <h2>{make} {model}</h2>

            <div className={styles.similar}>
              {car.similar.map((car, index) => (
                <CarItem car={car} key={index} />
              ))}
            </div>
          </>
        : <img className={styles.loader} src={Logo} alt="loader"/>
      }
    </div>
  )
}