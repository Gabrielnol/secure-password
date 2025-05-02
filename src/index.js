const express = require('express')
const app = express()
const { PORT } = process.env
const {
	SecurityController
} = require('./controller')

app.use(express.json())

app.listen(PORT, () => {
	console.log('Server is up and running!')
})

app.post('/validate-password', (req, res) => {
	const controller = new SecurityController(req, res)
	res.json(controller.validatePassword())
})