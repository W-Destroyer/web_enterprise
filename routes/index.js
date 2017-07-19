var express = require('express');
var router = express.Router();
var async = require('async');

var nws = require('../nws/nws');

/* GET home page. */
router.get('/', (req, res) => {
    // var pageData = {};
    // var getBaseinfo = cb => nws('/getBaseinfo').then(data => cb(null, data)).catch(err => cb(err));
    // var getBanner = cb => nws('/getBanner').then(data => cb(null, data)).catch(err => cb(err));
    // var getClassList = cb => nws('/getClassList').then(data => cb(null, data)).catch(err => cb(err));
    // async.parallel([getBaseinfo, getBanner, getClassList], (err, result) => {
    //     var baseinfo = result[0].body;
    //     var bannerList = result[1].body;
    //     var classList = result[2].body;
        res.render('index', {
            title: '网站首页 - 江西艾麦达科技',
            initialProps: {
                baseinfo: {
                    title: '江西艾麦达科技',
                    friendLink: [],
                    phone: ''
                },
                // bannerList: bannerList,
                // classList: classList
            }
        });
    // })
});

router.get('/about', (req, res) => {
    res.render('index', { title: '网站首页 - 江西艾麦达科技'});
});

router.get('/product', (req, res) => {
    res.render('index', { title: '网站首页 - 江西艾麦达科技'});
});

router.get('/news', (req, res) => {
    res.render('index', { title: '网站首页 - 江西艾麦达科技'});
});

router.get('/service', (req, res) => {
    res.render('index', { title: '网站首页 - 江西艾麦达科技'});
});

router.get('/messages', (req, res) => {
    res.render('index', { title: '网站首页 - 江西艾麦达科技'});
});

router.get('/contact', (req, res) => {
    res.render('index', { title: '网站首页 - 江西艾麦达科技'});
});

module.exports = router;
