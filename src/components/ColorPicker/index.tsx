import React, {FC} from 'react'
import styles from './style.module.scss'

interface Props {
  colors: string[];
  defaultColor: string;
  onChange: (color: string) => void;
}

export const ColorPicker: FC<Props> = ({colors, defaultColor, onChange}) => {
  const [currentColor, setCurrentColor] = React.useState(defaultColor)

  return (
    <div className={styles.picker}>
      {colors.map(color => (
        <div 
          key={color}
          className={styles.color} 
          style={{background: color}} 
          data-current={currentColor === color}
          onClick={() => {
            setCurrentColor(color)
            onChange(color)
          }}
        >
          {currentColor === color && '✓'}
        </div>
      ))}
    </div>
  )
}
