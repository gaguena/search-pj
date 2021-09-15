const Mongoose = require('mongoose')

const companySchema = new Mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    situation: String,
    status: String
})

const CompanyModel = db.model('company', companySchema);

const dataToModel = (data) => {
  return {
    name: data.nome,
    phone: data.telefone,
    email: data.email,
    situation: data.situacao,
    status: data.status
  }
}

module.exports = class Company {

  static save(data) {
    let company = dataToModel(data)
    new CompanyModel(company).save()
    return company;
  }
}
