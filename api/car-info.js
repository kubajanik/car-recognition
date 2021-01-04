const {JSDOM} = require('jsdom')
const {get} = require('axios')

module.exports = async (req, res) => {
  const {make, model} = req.query
  const {data} = await get(`https://www.carsguide.com.au/${make}/${model}`)
  const dom = new JSDOM(data)

  const {src} = dom.window.document.querySelector('.fg-img')
  const {textContent} = dom.window.document.querySelector('.field-item p')

  res.json({
    make,
    model,
    image: src.slice(2),
    description: textContent
  })
}