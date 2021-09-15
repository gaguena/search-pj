
const axios = require('axios')
const BadRequestException = require('../core/exception/badrequest-exception')
const StatusCheck = require('../core/util/check-status')
const Company = require('../model/company-model')

module.exports = class CompanyService {
  async find (cnpj) {
    try {
      const { data } = await axios.get(`${process.env.COMPANY_INTEGRATION}/${cnpj}`)
      if (StatusCheck.isInvalid(data.situacao)) {
        throw BadRequestException(data.message)
      }
      return Company.save(data)
    } catch (error) {
      console.error(error)
    }
  }
}
