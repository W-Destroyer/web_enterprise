var express = require('express');
var router = express.Router();

router.use('/basic', require('./api/index'));

router.use('/user', require('./api/user'));

router.use('/product', require('./api/product'));

module.exports = router;
