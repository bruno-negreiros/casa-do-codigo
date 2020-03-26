require('marko/node-require').install();
require('marko/express');

const express = require('express'); // retorna uma função
const app = express();
const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;