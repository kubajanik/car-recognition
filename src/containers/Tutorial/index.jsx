import React from 'react'
import {useSwipeable} from 'react-swipeable'
import styles from './style.module.scss'

export const Tutorial = () => {
  const [current, setCurrent] = React.useState(0)

  const steps = [
    <>
      <img src="/icon-192.png" alt="app" width="100" />
      <p>Welcome to</p>
      <h1>CAR RECOGNITION</h1>
      <p>Search in the physical world</p>
    </>,
    <>
      <img src="/app.png" alt="app" width="80" />
      <h2>Capture an Image</h2>
      <p>Scan any car to learn more about it</p>
    </>,
    <>
      <img src="/app.png" alt="app" width="100" />
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
    onTap: () => {
      if (current < steps.length - 1) {
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
      <div className={styles.step}>
        {steps[current]}
      </div>

      <div>
        <div className={styles.dots}>
          {steps.map((_, i) => (
            <span key={i} data-active={i === current}>•</span>
          ))}
        </div>

        <button className={styles.skip} onClick={() => skip()}>Skip tutorial</button>
      </div>
    </div>
  )
}
