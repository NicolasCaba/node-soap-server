const envConfig = require('./config/env');
const soap = require('soap');
const express = require('express');
const app = express();

app.listen(process.env.PORT, () => {
  console.log('Server listen on port ', process.env.PORT);
})

