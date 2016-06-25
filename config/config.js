'use strict'
const database = process.env.DB || 'mongodb://localhost/3rr'
const port     = process.env.PORT

module.exports = { database, port }
