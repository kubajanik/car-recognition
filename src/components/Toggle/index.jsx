import React from 'react'
import styles from './style.module.scss'
import {Button} from '../Button'

export const Toggle = ({onChange, on = false}) => {
  return (
    <div className={styles.toggle}>
      {[true, false].map(value => (
        <Button 
          key={value}
          data-on={value === on}
          onClick={() => onChange(value)}
        >
          {value ? 'On' : 'Off'}
        </Button>
      ))}
    </div>
  )
}
