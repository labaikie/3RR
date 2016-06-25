const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config/config')
const routes = require('./config/routes')
const mongoose = require('mongoose')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', routes)

mongoose.connect(config.database)

app.listen(config.port)
console.log(`listening on port:${config.port}`)

module.exports = app
