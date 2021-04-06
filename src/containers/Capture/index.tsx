import React, {FC, MouseEvent} from 'react'
import styles from './style.module.scss'
import {IoIosQrScanner as CaptureIcon} from 'react-icons/io'
import {navigate, RouteComponentProps} from '@reach/router'
import {canvasToBlob, recognizeCar} from '../../utils'
import Webcam from 'react-webcam'
import {ErrorInfo} from '../../components/ErrorInfo'

export const Capture: FC<RouteComponentProps> = () => {
  const [cameraActive, setCameraActive] = React.useState(false)
  const [error, setError] = React.useState('')

  const webcam = React.useRef<Webcam>(null)
  
  const capture = async (event: MouseEvent) => {
    const button = event.target as HTMLButtonElement
    button.dataset.animate = 'true'

    webcam?.current?.video?.pause()

    const canvas = webcam?.current?.getCanvas() as HTMLCanvasElement
    const photo = await canvasToBlob(canvas)

    const {car, error} = await recognizeCar(photo);

    if (error) {
      return navigate('/car/error')
    }

    navigate(`car/${car?.make}/${car?.model}`)
  }

  if (error) {
    return <ErrorInfo error={error} />
  }

  return (
    <div className={styles.capture}>
      <Webcam 
        audio={false}
        ref={webcam}
        videoConstraints={{
          facingMode: 'environment'
        }}
        onUserMedia={({active}) => setCameraActive(active)}
        onUserMediaError={() => setError('No access to camera')}
      />

      {cameraActive && <CaptureIcon onClick={capture} />}
    </div>
  )
}
