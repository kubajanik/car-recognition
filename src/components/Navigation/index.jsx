import React from 'react'
import {Link} from '@reach/router'
import {FaHome, FaRegHeart} from 'react-icons/fa'
import {IoMdQrScanner} from 'react-icons/io'
import {RiHistoryFill} from 'react-icons/ri'
import {GoSettings} from 'react-icons/go'
import styles from './style.module.scss'

export const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to="/">
      <FaHome />
      Home
    </Link>
    <Link to="/favorite">
      <FaRegHeart />
      Favorite
    </Link>
    <Link to="/capture">
      <IoMdQrScanner />
      Capture
    </Link>
    <Link to="/history">
      <RiHistoryFill />
      History
    </Link>
    <Link to="/settings">
      <GoSettings />
      Settings
    </Link>
  </nav>
)