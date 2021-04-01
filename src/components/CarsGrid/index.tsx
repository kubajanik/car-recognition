import React, {FC, MouseEvent} from 'react'
import {CarItem} from '../CarItem'
import {Header} from '../Header'
import {SearchBox} from '../SearchBox'
import {Empty} from '../Empty'
import {useSearch} from 'react-use-search'
import {VscTrash} from 'react-icons/vsc'
import db, {Car} from '../../db'
import styles from './style.module.scss'

interface Props {
  cars: Car[];
  title: string;
  clearAll: () => void;
  removable?: boolean;
}

export const CarsGrid: FC<Props> = ({cars, title, clearAll, removable = false}) => {
  const [filteredCars, query, handleChange] = useSearch(
    cars, 
    ({make, model}, query) => (new RegExp(query, 'i')).test(make + ' ' + model), 
    {filter: true}
  )

  const unfavorite = async (e: MouseEvent, {make, model}: Car) => {
    e.stopPropagation()
    
    await db.favorite.where({make, model}).delete()
  }

  return (
    <>
      <div className={styles.top}>
        <SearchBox value={query} onChange={handleChange} />
        <Header>{title}</Header>
        <VscTrash onClick={clearAll} />
      </div>

      {filteredCars.length === 0 ? (
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
