const express = require('express')
const consign = require('consign')
const dotenv = require('dotenv')
const db = require('./db')


module.exports = () => {

  const app = express()

  dotenv.config()

  const port = process.env.PORT || 3001

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  db()

  consign()
    .include('src/router')
    .into(app)

  app.listen(port, () => {
    console.log(`Start app listening on port ${port}!`)
  })
}
