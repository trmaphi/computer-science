const express = require('express')
const app = express()

let count = 0

app
  .get('/resource', (req, res) => {
    count++
    const msg = `count is ${count}`
    console.log(msg)
    res
      .set('Access-Control-Allow-Origin', '*')
      .set('Cache-Control', 'public, max-age=30')
      .send(msg)
  })
  .post('/resource', (req, res) => {
    count++
    const msg = `count is ${count}`
    console.log(msg)
    res
      .set('Access-Control-Allow-Origin', '*')
      .set('Cache-Control', 'public, max-age=30')
      .set('Content-Location', 'http://localhost:3000/resource')
      .set('Location', 'http://localhost:3000/resource')
      .status(201)
      .send(msg)
  })
  .set('etag', false)
  .disable('x-powered-by')
  .listen(3000, () => {
    console.log('Example app listening on port 3000!')
  })
