const dotenv = require('dotenv');
const express = require('express');

const app = express();

dotenv.config();

const port = process.env.PORT || 3001;


app.listen(port, function () {
  console.log(`Start app listening on port ${port}!`);
});
