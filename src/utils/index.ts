export const canvasToBlob = async (canvas: HTMLCanvasElement): Promise<Blob> => {
  return new Promise(resolve => 
    canvas.toBlob(blob => {
      resolve(blob as Blob)
    }, 'image/jpeg', 0.5)
  )
}

interface RecognitionResult {
  car?: {
    make: string,
    model: string
  },
  error?: string
}

export const recognizeCar = async (photo: Blob): Promise<RecognitionResult> => {
  const headers = new Headers()
  headers.append('X-Access-Token', process.env.REACT_APP_SIGHTHOUND_API_TOKEN!)
  headers.append('Content-Type', 'application/octet-stream')

  const requestOptions = {
    method: 'POST',
    headers,
    body: photo
  }

  try {
    const response = await fetch('https://dev.sighthoundapi.com/v1/recognition?objectType=vehicle', requestOptions)
    const {objects} = await response.json()

    if (!objects.length) {
      throw new Error('Cannot recognize')
    }

    const {make, model} = objects[0].vehicleAnnotation.attributes.system
    const car = {
      make: make.name,
      model: model.name
    }
    
    return {car}
  } catch (error) {
    return {error}
  }
}