
const axios = require('axios')
const BadRequestException = require('../core/badrequest-exception')
const StatusCheck = require('../core/check-status')

module.exports = class CompanyService {
  async find (cnpj) {
    try {
      const { data } = await axios.get(`${process.env.COMPANY_INTEGRATION}/${cnpj}`)
      if (StatusCheck.isInvalid(data.situacao)) {
        throw BadRequestException(data.message)
      }
      return data
    } catch (error) {
      console.error(error)
    }
  }
}
