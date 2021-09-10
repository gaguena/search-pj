
const axios = require('axios');

module.exports = class CompanyService {

    async find(cnpj) {
        try {
            let response = await axios.get(`${process.env.COMPANY_INTEGRATION}/${cnpj}`);
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}
