const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const someArray = ['element1', 'some other string', 'element3']
const users = ['vera', 'karl']

app.use(cors())

const myCustomMiddleware = (req, res, next) => {
	console.log('middleware triggered')
	next()
}

const myCustomMiddleware2 = (req, res, next) => {
	console.log('middleware for all')
	next()
}

app.use(myCustomMiddleware2)

app.get('/', (req, res) => res.send(someArray))

app.get('/users', (req, res) => res.send(users))

app.get('/route1', (req, res) => res.send('Hello route1!'))

app.get('/route2', (req, res) => res.send('Hello route2!'))

app.get('/route3', myCustomMiddleware, (req, res) => res.send('Hello route3!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
