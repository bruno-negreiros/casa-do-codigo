const express = require('express'); // retorna uma função
const app = express();

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;