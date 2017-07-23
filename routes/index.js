var express = require('express');
var router = express.Router();
var async = require('async');
var request = require('request');
var nws = require('../nws/nws');

/* GET home page. */
router.get('/', (req, res) => {
    // var getBaseinfo = cb => {
    //     request(nws('/getBaseinfo'), (err, result) => {
    //         if(err) 
    //             return cb(err);
    //         cb(null, result);
    //     })
    // }
    // var getBanner = cb => {
    //     request(nws('/getBaseinfo'), (err, result) => {
    //         if(err) 
    //             return cb(err);
    //         cb(null, result);
    //     })
    // }
    var getFriendLinkList = cb => {
        request(nws('/sysconfig/getFriendLink'), (err, result) => {
            if(err) 
                return cb(err);
            cb(null, result);
        })
    }
    
    async.parallel([getFriendLinkList], (err, result) => {
        console.log(err)
        // var baseinfo = result[0].body;
        // var bannerList = result[1].body;
        var friendLinkList = result[0].body;
        res.render('index', {
            title: '网站首页 - 江西艾麦达科技',
            initialProps: {
                baseinfo: {
                    title: '江西艾麦达科技',
                    friendLink: [],
                    phone: ''
                },
                // bannerList: bannerList,
                friendLinkList: friendLinkList
            }
        });
    })
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: '公司简介 - 江西艾麦达科技',
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
});

router.get('/product', (req, res) => {
    res.render('product', {
        title: '产品 - 江西艾麦达科技',
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
});

router.get('/news', (req, res) => {
    res.render('news', {
        title: '网站博客 - 江西艾麦达科技',
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
});

router.get('/service', (req, res) => {
    res.render('service', {
        title: '售后服务 - 江西艾麦达科技',
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
});

router.get('/messages', (req, res) => {
    res.render('message', {
        title: '在线留言 - 江西艾麦达科技',
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
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: '联系我们 - 江西艾麦达科技',
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
});

router.get('/shownews', (req, res) => {
    res.render('shownews');
})
module.exports = router;
