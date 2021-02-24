const {JSDOM} = require('jsdom')
const {get} = require('axios')

exports.handler = async event => {
  const {make, model} = event.queryStringParameters
  const {data} = await get(`https://www.carsguide.com.au/${make}/${model}`)
  const {window} = new JSDOM(data)
  
  const {src} = window.document.querySelector('.fg-img')

  let images = window.document.querySelectorAll('.vs-model--image img[data-src]')
  images = [...images].map(img => 
    'https:' + img.dataset.src.replace('vehicle_icon', 'hero_low')
  )

  let cars = window.document.querySelectorAll('.vs-model--title > :first-child')
  cars = [...cars].map(name => {
    const [make, model] = name.textContent.split(' ')
    return {make, model}
  })

  const similar = cars.map((car, index) => ({...car, image: images[index]}))

  return {
    statusCode: 200,
    body: JSON.stringify({
      make,
      model,
      image: 'https:' + src,
      similar
    })
  }
}