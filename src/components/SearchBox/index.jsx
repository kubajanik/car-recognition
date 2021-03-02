import React from 'react'
import {IoIosSearch as SearchIcon} from 'react-icons/io'
import {CgClose as CloseIcon} from 'react-icons/cg'
import {useTranslation} from 'react-multi-lang'
import styles from './style.module.scss'

export const SearchBox = ({value, onChange}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const Icon = isOpen ? CloseIcon : SearchIcon
  const t = useTranslation()
  
  return (
    <div className={styles.search}>
      <Icon 
        onClick={e => {
          setIsOpen(!isOpen)
          
          e.target.nextElementSibling.focus()
        }}
      />
      <input 
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
