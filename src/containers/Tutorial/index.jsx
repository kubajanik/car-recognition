import React from 'react'
import {useSwipeable} from 'react-swipeable'
import {Button} from '../../components/Button'
import {Logo} from '../../components/Logo'
import styles from './style.module.scss'
import Capture from '../../images/capture.png'
import Favorite from '../../images/favorite.png'

export const Tutorial = () => {
  const [current, setCurrent] = React.useState(0)

  const steps = [
    <>
      <Logo />
      <p>Welcome to</p>
      <h1>CAR RECOGNITION</h1>
    </>,
    <>
      <img src={Capture} alt="capture" width="100" />
      <h2>Capture an Image</h2>
      <p>Scan any car to learn more about it</p>
    </>,
    <>
      <img src={Favorite} alt="favorite" width="100" />
      <h2>Add to Favorites</h2>
      <p>Save interesting scan results to view later</p>
    </>
  ]

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (current < steps.length - 1) {
        setCurrent(current + 1)
      }
    },
    onSwipedRight: () => {
      if (current > 0) {
        setCurrent(current - 1)
      }
    },
    onTap: ({event}) => {
      if (event.target.tagName !== 'BUTTON' && current < steps.length - 1) {
        setCurrent(current + 1)
      }
    }
  })
  
  const skip = () => {
    window.localStorage.setItem('tutorial-skipped', true)
    window.location.reload()
  }

  return (
    <div {...handlers} className={styles.tutorial}>
        {steps.map((step, i) => (
          <div 
            key={i}
            className={styles.step}
            data-active={i === current}
          >
            {step}
          </div>  
        ))}

      <div>
        <div className={styles.dots}>
          {steps.map((_, i) => (
            <span key={i} data-active={i === current}>•</span>
          ))}
        </div>

        <Button onClick={() => skip()}>Skip tutorial</Button>
      </div>
    </div>
  )
}
