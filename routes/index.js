var express = require('express');
var router = express.Router();
var async = require('async');
var request = require('request');
var nws = require('../nws/nws');
// var rp = require('request-promise');
var rp = require('../utils/request-promise');
/* GET home page. */
router.get('/', (req, res) => {
    var listBanner = cb => rp(nws('/sysconfig/banner/list')).then(body => {
        cb(null, body.data)
    }).catch(err => cb(err));

    var listFriendLink = cb => rp(nws('/sysconfig/friendlink/list')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    var listClassify = cb => rp(nws('/classify/listall')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    // var listNews = cb => rp(nws('/news/showCount')).then(body => {
    //     return rp({
    //         uri: nws('/news/list'),
    //         qs: {
    //             length: body.data
    //         }
    //     })
    // }).then(body => {
    //     cb(null, body.data)
    // }).catch(err => cb(err));

    async.parallel([listBanner, listFriendLink, listClassify], (err, result) => {
        
        var bannerList = result[0];
        var friendLinkList = result[1];
        var classifyList = result[2];
        // var newsList = result[3];
        res.render('index', {
            title: '网站首页 - 江西艾麦达科技',
            initialProps: {
                sysconfig: {
                    title: '江西艾麦达科技',
                    phone: '',
                    friendLinkList: friendLinkList,
                },
                bannerList: bannerList,
                classifyList: classifyList,
                newsList: []//newsList
            }
        });
    })
});

router.get('/about', (req, res) => {
    var listBanner = cb => rp(nws('/sysconfig/banner/list')).then(body => {
        cb(null, body.data)
    }).catch(err => cb(err));

    var listFriendLink = cb => rp(nws('/sysconfig/friendlink/list')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    // var listClassify = cb => rp(nws('/classify/listall')).then(body => {
    //     cb(null, body.data);
    // }).catch(err => cb(err));

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = result[0];
        var friendLinkList = result[1];
        res.render('about', {
            title: '公司简介 - 江西艾麦达科技',
            initialProps: {
                sysconfig: {
                    title: '江西艾麦达科技',
                    phone: '',
                    friendLinkList: friendLinkList,
                },
                bannerList: bannerList,
            }
        });
    });
});

router.get('/product', (req, res) => {
    var listBanner = cb => rp(nws('/sysconfig/banner/list')).then(body => {
        cb(null, body.data)
    }).catch(err => cb(err));

    var listFriendLink = cb => rp(nws('/sysconfig/friendlink/list')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    var listClassify = cb => rp(nws('/classify/listall')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    async.parallel([listBanner, listFriendLink, listClassify], (err, result) => {

        var bannerList = result[0];
        var friendLinkList = result[1];
        var classifyList = result[2];

        res.render('product', {
            title: '产品 - 江西艾麦达科技',
            initialProps: {
                sysconfig: {
                    title: '江西艾麦达科技',
                    phone: '',
                    friendLinkList: friendLinkList,
                },
                bannerList: bannerList,
                classifyList: classifyList
            }
        });
    });
});

router.get('/product/:id', (req, res) => {
    var data = {
        productId: req.params.id
    }

    var productInfo = cb => rp(nws('/product/detail'), {
        qs: data
    }).then(body => {
        console.log(body);
        cb(null, body.data);
    }).catch(err => {
        console.log(err)
        cb(err)

    });

    var listFriendLink = cb => rp(nws('/sysconfig/friendlink/list')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    async.parallel([productInfo, listFriendLink], (err, result) => {

        var productInfo = result[0];
        var friendLinkList = result[1];
        var title = productInfo.name + "-江西艾麦达科技";
        res.render('showproduct', {
            title: title,
            initialProps: {
                sysconfig: {
                    title: '江西艾麦达科技',
                    phone: '',
                    friendLinkList: friendLinkList,
                },
                productInfo: productInfo
            }
        });
    });
});

router.get('/news', (req, res) => {
    var listBanner = cb => rp(nws('/sysconfig/banner/list')).then(body => {
        cb(null, body.data)
    }).catch(err => cb(err));

    var listFriendLink = cb => rp(nws('/sysconfig/friendlink/list')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = result[0];
        var friendLinkList = result[1];

        res.render('news', {
            title: '网站博客 - 江西艾麦达科技',
            initialProps: {
                sysconfig: {
                    title: '江西艾麦达科技',
                    phone: '',
                    friendLinkList: friendLinkList,
                },
                bannerList: bannerList,
                // classList: classList
            }
        });
    });
});

router.get('/shownews/:id', (req, res) => {
    var data = {
        newsId: req.params.id
    }
    res.render('news');
})

router.get('/service', (req, res) => {
    var listBanner = cb => rp(nws('/sysconfig/banner/list')).then(body => {
        cb(null, body.data)
    }).catch(err => cb(err));

    var listFriendLink = cb => rp(nws('/sysconfig/friendlink/list')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = result[0];
        var friendLinkList = result[1];

        res.render('service', {
            title: '售后服务 - 江西艾麦达科技',
            initialProps: {
                sysconfig: {
                    title: '江西艾麦达科技',
                    phone: '',
                    friendLinkList: friendLinkList,
                },
                bannerList: bannerList,
                // classList: classList
            }
        });
    });
});

router.get('/messages', (req, res) => {
    var listBanner = cb => rp(nws('/sysconfig/banner/list')).then(body => {
        cb(null, body.data)
    }).catch(err => cb(err));

    var listFriendLink = cb => rp(nws('/sysconfig/friendlink/list')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = result[0];
        var friendLinkList = result[1];

        res.render('message', {
            title: '在线留言 - 江西艾麦达科技',
            initialProps: {
                sysconfig: {
                    title: '江西艾麦达科技',
                    phone: '',
                    friendLinkList: friendLinkList,
                },
                bannerList: bannerList,
                // classList: classList
            }
        });
    });
});

router.get('/contact', (req, res) => {
    var listBanner = cb => rp(nws('/sysconfig/banner/list')).then(body => {
        cb(null, body.data)
    }).catch(err => cb(err));

    var listFriendLink = cb => rp(nws('/sysconfig/friendlink/list')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = result[0];
        var friendLinkList = result[1];

        res.render('contact', {
            title: '联系我们 - 江西艾麦达科技',
            initialProps: {
                sysconfig: {
                    title: '江西艾麦达科技',
                    phone: '',
                    friendLinkList: friendLinkList,
                },
                bannerList: bannerList,
                // classList: classList
            }
        });
    });
});

router.get('/shownews', (req, res) => {
    var listBanner = cb => rp(nws('/sysconfig/banner/listall')).then(body => {
        cb(null, body)
    }).catch(err => cb(err));

    var listFriendLink = cb => rp(nws('/sysconfig/listFriendlink')).then(body => {
        cb(null, body.data);
    }).catch(err => cb(err));
    res.render('shownews');
});

module.exports = router;
