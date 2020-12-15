import React from 'react'
import styles from './style.module.css'
import {IoIosQrScanner as CaptureIcon} from 'react-icons/io'

export const Capture = () => {
  const video = React.useRef()
  const canvas = React.useRef()
  
  const [stream, setStream] = React.useState()
  const [wasCaptured, setWasCaptured] = React.useState(false)

  const getConnectedDevices = async type => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
  }

  const openCamera = async cameraId => {
    return await navigator.mediaDevices.getUserMedia({video: {deviceId: cameraId}});
  }

  const capturePhoto = async () => {
    video.current.pause()
    setWasCaptured(true)

    const imageCapture = new ImageCapture(stream.getVideoTracks()[0])
    const imageBitmap = await imageCapture.grabFrame()

    canvas.current.width = imageBitmap.width
    canvas.current.height = imageBitmap.height
    canvas.current.getContext('2d').drawImage(imageBitmap, 0, 0)
  }

  React.useEffect(() => {
    getConnectedDevices('videoinput')
      .then(async cameras => {
        const stream = await openCamera(cameras[1].deviceId)
        video.current.srcObject = stream
  
        setStream(stream)
      })
  }, [])

  return (
    <div className={styles.capture}>
      {wasCaptured ?
        <canvas ref={canvas} /> :
        <video autoPlay ref={video} />
      }

      <CaptureIcon 
        className={wasCaptured && styles.animate} 
        onClick={capturePhoto}
      />
    </div>
  )
}
