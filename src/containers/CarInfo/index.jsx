import React from 'react'
import styles from './style.module.scss'
import {IoMdClose, IoMdHeartEmpty, IoMdHeart} from 'react-icons/io'
import db from '../../db'
import {navigate} from '@reach/router'
import {Logo} from '../../components/Logo'
import {CarItem} from '../../components/CarItem'
import Carmax from '../../images/carmax.png'
import Autotrader from '../../images/autotrader.png'
import Truecar from '../../images/truecar.png'

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

            <div>
              <h2>{make} {model}</h2>

              <div className={styles.links}>
                <div>
                  <img src={Carmax} alt=""/>
                  <a target="_blank" href={`https://www.otomoto.pl/osobowe/${make}/${model}`}>To the shop</a>
                </div>
                <div>
                  <img src={Autotrader} alt=""/>
                  <a target="_blank" href={`https://www.autotrader.com/cars-for-sale/all-cars/${make}/${model}`}>To the shop</a>
                </div>
                <div>
                  <img src={Truecar} alt=""/>
                  <a target="_blank" href={`https://www.truecar.com/used-cars-for-sale/listings/${make}/${model}`}>To the shop</a>
                </div>
              </div>

              <div className={styles.similar}>
                <h3>Similar results</h3>
                <div>
                  {car.similar.map((car, index) => (
                    <CarItem car={car} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </>
        : <Logo animated />
      }
    </div>
  )
}