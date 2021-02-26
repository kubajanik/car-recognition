import React from 'react'
import styles from './style.module.scss'
import {Button} from '../Button'

export const Choices = ({onChange, options, defaultValue}) => {
  const [currentValue, setCurrentValue] = React.useState(defaultValue)
  
  return (
    <div className={styles.choices}>
      {options.map(({value, label}, index) => (
        <Button 
          key={index}
          data-current={currentValue === value}
          onClick={() => {
            setCurrentValue(value)

            if (currentValue !== value) {
              onChange(value)
            }
          }}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
