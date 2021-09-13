const express = require('express')
const consign = require('consign')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

consign()
  .include('src/company/company-router.js')
  .into(app)

app.listen(port, function () {
  console.log(`Start app listening on port ${port}!`)
})
