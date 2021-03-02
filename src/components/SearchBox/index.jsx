import React from 'react'
import {IoIosSearch} from 'react-icons/io'
import {CgClose} from 'react-icons/cg'
import styles from './style.module.scss'

export const SearchBox = ({value, onChange}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const inputRef = React.useRef()
  const Icon = isOpen ? CgClose : IoIosSearch
  
  return (
    <div className={styles.search}>
      <Icon 
        onClick={() => {
          setIsOpen(!isOpen)
          
          if (!isOpen) {
            inputRef.current.focus()
          }
        }}
      />
      <input 
        placeholder="Search for a car"
        ref={inputRef}
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
