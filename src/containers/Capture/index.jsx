import React from 'react'
import styles from './style.module.scss'
import {IoIosQrScanner as CaptureIcon} from 'react-icons/io'
import {navigate} from '@reach/router'
import {canvasToBlob, recognizeCar} from '../../utils'
import Webcam from 'react-webcam'

export const Capture = () => {
  const webcam = React.useRef()

  const capture = async (event) => {
    event.target.dataset.animate = true

    webcam.current.video.pause()

    const canvas = webcam.current.getCanvas()
    const photo = await canvasToBlob(canvas)

    const {car, error} = await recognizeCar(photo);

    if (error) {
      return navigate('/car/error')
    }

    navigate(`car/${car.make}/${car.model}`)
  }

  return (
    <div className={styles.capture}>
      <Webcam 
        audio={false}
        ref={webcam}
        videoConstraints={{
          facingMode: 'environment'
        }}
      />

      <CaptureIcon onClick={capture} />
    </div>
  )
}
