const express = require('express')
const app = express()
const port = 3000

const myCustomMiddleware = (req, res, next) => {
	console.log('middleware triggered')
	next()
}

const myCustomMiddleware2 = (req, res, next) => {
	console.log('middleware for all')
	next()
}

app.use(myCustomMiddleware2)

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/route1', (req, res) => res.send('Hello route1!'))

app.get('/route2', (req, res) => res.send('Hello route2!'))

app.get('/route3', myCustomMiddleware, (req, res) => res.send('Hello route3!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
