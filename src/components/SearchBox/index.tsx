import React, {ChangeEvent, FC} from 'react'
import {IoIosSearch as SearchIcon} from 'react-icons/io'
import {CgClose as CloseIcon} from 'react-icons/cg'
import {useTranslation} from 'react-multi-lang'
import styles from './style.module.scss'

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: FC<Props> = ({value, onChange}) => {
  const input = React.useRef<HTMLInputElement>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const Icon = isOpen ? CloseIcon : SearchIcon
  const t = useTranslation()
  
  return (
    <div className={styles.search}>
      <Icon 
        onClick={() => {
          setIsOpen(!isOpen)
          input.current?.focus()
        }}
      />
      <input 
        ref={input}
        placeholder={t('cars-grid.search')}
        data-is-open={isOpen} 
        onBlur={e => {
          setIsOpen(false)
          
          e.target.value = ''
          onChange(e)
        }}
        value={value} 
        onChange={onChange} 
      />  
    </div>
  )
}
