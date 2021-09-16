const Mongoose = require('mongoose')

const companySchema = new Mongoose.Schema({
    document: String,
    name: String,
    phone: String,
    email: String,
    situation: String,
    status: String,
    date: {
      type: Date,
      default: Date.now
    }
})

const CompanyModel = Mongoose.model('company', companySchema);

const dataToModel = (data) => {
  return {
    document: data.cnpj,
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

  static async find(document) {
    return await CompanyModel.find({ 'document': document }, function (err, data) {
      if (err) console.error(err)
    })
  }
}
