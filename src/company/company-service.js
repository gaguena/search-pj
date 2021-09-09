
const axios = require('axios');

class CompanyService {

    async find(cnpj) {
        try {
            let response = await axios.get(`/${cnpj}`);
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}
