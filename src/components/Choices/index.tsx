import React, {FC} from 'react'
import styles from './style.module.scss'
import {Button} from '../Button'

interface Props {
  options: {value: any, label: string}[];
  onChange: (value: any) => void;
  defaultValue: any;
}

export const Choices: FC<Props> = ({onChange, options, defaultValue}) => {
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
