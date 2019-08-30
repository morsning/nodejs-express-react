const express = require('express')
const app = express()
const port = 3001
const http = require('http')

app.get('/', (req, res) => res.send('hello world'))

app.get('/route1', (req, res) => res.send('Hello route1!'))

app.get('/route2', (req, res) => {makeRequest(); res.send('Hello route2!')})

function makeRequest() {
console.log("make request")
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/route2',
  method: 'GET'
}

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.end()
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
