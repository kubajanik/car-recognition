const {JSDOM} = require('jsdom')
const {get} = require('axios')

exports.handler = async function(event, context) {
  const {make, model} = event.queryStringParameters
  console.log(event.queryStringParameters)
  const {data} = await get(`https://www.carsguide.com.au/${make}/${model}`)
  const dom = new JSDOM(data)
  
  const {src} = dom.window.document.querySelector('.fg-img')
  const {textContent} = dom.window.document.querySelector('.field-item p')

  return {
    statusCode: 200,
    body: JSON.stringify({
      make,
      model,
      image: 'https:' + src,
      description: textContent
    })
  }
}