export const useCarRecognition = () => {
  const recognize = async (image) => {
    const headers = new Headers()
    headers.append('X-Access-Token', process.env.REACT_APP_SIGHTHOUND_API_TOKEN)
    headers.append('Content-Type', 'application/octet-stream')
  
    const requestOptions = {
      method: 'POST',
      headers,
      body: image
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

  return {recognize}
}