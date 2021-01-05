import React from 'react'
import styles from './style.module.css'
import {IoIosQrScanner as CaptureIcon} from 'react-icons/io'
import {CarInfo} from '../CarInfo'

export const Capture = () => {
  const video = React.useRef()
  const canvas = React.useRef()
  
  const [stream, setStream] = React.useState()
  const [wasCaptured, setWasCaptured] = React.useState(false)
  const [car, setCar] = React.useState(null)

  const getConnectedDevices = async type => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
  }

  const openCamera = async cameraId => {
    return await navigator.mediaDevices.getUserMedia({video: {deviceId: cameraId}});
  }

  const canvasToBlob = async canvas => {
    return new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.5))
  }

  const capturePhoto = async () => {
    setWasCaptured(true)

    const imageCapture = new ImageCapture(stream.getVideoTracks()[0])
    const imageBitmap = await imageCapture.grabFrame()

    canvas.current.width = imageBitmap.width
    canvas.current.height = imageBitmap.height
    canvas.current.getContext('2d').drawImage(imageBitmap, 0, 0)

    const image = await canvasToBlob(canvas.current)

    const headers = new Headers()
    headers.append('X-Access-Token', import.meta.env.SNOWPACK_PUBLIC_SIGHTHOUND_API_TOKEN)
    headers.append('Content-Type', 'application/octet-stream')

    const requestOptions = {
      method: 'POST',
      headers,
      body: image
    }

    fetch('https://dev.sighthoundapi.com/v1/recognition?objectType=vehicle', requestOptions)
      .then(response => response.json())
      .then(result => {
        setWasCaptured(false)

        const {make, model} = result.objects[0].vehicleAnnotation.attributes.system
        setCar({make: make.name, model: model.name})
      })
      .catch(error => alert(error))
  }

  React.useEffect(() => {
    getConnectedDevices('videoinput')
      .then(async cameras => {
        const stream = await openCamera(cameras[1].deviceId)
        video.current.srcObject = stream
  
        setStream(stream)
      })
  }, [wasCaptured])

  return (
    <>
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
      {car && <CarInfo make={car.make} model={car.model} />}
    </>
  )
}
