var express = require('express');
const CompanyService = require('./company-service');


module.exports = app => {
    var router = express.Router();
    router.get('/:cnpj', async (req, resp) => {
        try {
            let data = await new CompanyService().find(req.params.cnpj);
            resp.send(data);
        } catch (err) {
            resp.status(401).send(err.message);
        }
    });
    app.use('/companys', router);
}