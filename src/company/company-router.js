const express = require('express')
const BadRequestException = require('../core/badrequest-exception')
const CompanyService = require('./company-service')

module.exports = app => {
  const router = express.Router()
  router.get('/:cnpj', async (req, resp) => {
    try {
      const data = await new CompanyService().find(req.params.cnpj)
      resp.send(data)
    } catch (err) {
      if (err instanceof BadRequestException) {
        resp.status(401).send(err.message)
      }
      resp.status(400).send(err.message)
    }
  })
  app.use('/companys', router)
}
