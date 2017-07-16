var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    
    res.render('index', { title: '网站首页 - 江西艾麦达科技', page: 'index'});
});

router.get('/news', (req, res) => {

});

router.get('/product', (req, res) => {

});

router.get('/contact', (req, res) => {

});

// router.get('/product', (req, res) => {

// });

// router.get('/product', (req, res) => {

// });

// router.get('/product', (req, res) => {

// });

// router.get('/product', (req, res) => {

// });
module.exports = router;
