import React from 'react'
import {CarItem} from '../CarItem'
import {Header} from '../Header'
import {SearchBox} from '../SearchBox'
import {Empty} from '../Empty'
import {useSearch} from 'react-use-search'
import db from '../../db'
import styles from './style.module.scss'

export const CarsGrid = ({cars, title, removable = false}) => {
  const [filteredCars, query, handleChange] = useSearch(
    cars, 
    ({make, model}, query) => (new RegExp(query, 'i')).test(make + ' ' + model), 
    {filter: true}
  )

  const unfavorite = async (e, {make, model}) => {
    e.stopPropagation()
    await db.favorite.where({make, model}).delete()
  }

  return (
    <>
      <div className={styles.top}>
        <SearchBox value={query} onChange={handleChange} />
        <Header>{title}</Header>
      </div>

      {cars.length === 0 ? (
        <Empty />
      ) : (
        <div className={styles.grid}>
          {filteredCars.map((car, index) => (
            <CarItem
              car={car}
              key={index}
              onRemove={unfavorite}
              removable={removable}
            />
          ))}
        </div>
      )}
    </>
  );
}
