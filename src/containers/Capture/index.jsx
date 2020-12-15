import React from 'react'
import styles from './style.module.css'

export const Capture = () => {
  const video = React.useRef()

  const getConnectedDevices = async type => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
  }

  const openCamera = async cameraId => {
    return await navigator.mediaDevices.getUserMedia({video: {deviceId: cameraId}});
  }

  getConnectedDevices('videoinput')
    .then(async cameras => {
      const stream = await openCamera(cameras[1].deviceId)
      video.current.srcObject = stream
    })

  return (
    <div className={styles.capture} onClick={savePhoto}>
      <video autoPlay ref={video} />
    </div>
  )
}
