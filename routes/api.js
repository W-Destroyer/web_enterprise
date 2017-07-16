var express = require('express');
var api = express.Router();

api.use('/', require('./api/index'));

api.use('/user', require('./api/user'));

api.use('/product', require('./api/product'));

module.exports = api;
