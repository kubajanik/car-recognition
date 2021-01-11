const {JSDOM} = require('jsdom')
const {get} = require('axios')

exports.handler = async event => {
  const {make, model} = event.queryStringParameters
  const {data} = await get(`https://www.carsguide.com.au/${make}/${model}`)
  const dom = new JSDOM(data)
  
  const {src} = dom.window.document.querySelector('.fg-img')

  return {
    statusCode: 200,
    body: JSON.stringify({
      make,
      model,
      image: 'https:' + src
    })
  }
}