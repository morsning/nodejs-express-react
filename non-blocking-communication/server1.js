const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/route1', (req, res) => res.send('Hello route1!'))

app.get('/route2', (req, res) => {longCount(); res.send('Hello route2!')})

function longCount() {
for (let i = 0; i < 1000000; i++) {
console.log(i)
}
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
