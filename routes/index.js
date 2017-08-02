var express = require('express');
var router = express.Router();
var async = require('async');
var request = require('request');
var nws = require('../nws/nws');

/* GET home page. */
router.get('/', (req, res) => {

    var listBanner = cb => request(nws('/sysconfig/banner/listall'), (err, result) => {
        if(err)
            return cb(err)
        cb(null, result);
    });
    var listNews = cb => request(nws('/news/showCount'), (err, result1) => {
        if(err)
            return cb(err);
        var data = {
            length: result1.body.data
        }
        request(nws('/news/list'), data, (err, result2) => {
            if(err)
                return cb(err);
            cb(null, result2)
        })
    })
    var listFriendLink = cb => request(nws('/sysconfig/friendlink/listall'), (err, result) => {
        if(err) 
            return cb(err);
        cb(null, result);
    })
    var listClassify = cb => request(nws('/classify/listall'), (err, result) => {
        if(err)
            return cb(err)
        cb(null, result);
    })
    // var abou
    async.parallel([listFriendLink, listClassify, listBanner, listNews], (err, result) => {
        var friendLinkList = JSON.parse(result[0].body).data;
        var classifyList = JSON.parse(result[1].body);
        var bannerList = JSON.parse(result[2].body);
        var newsList = JSON.parse(result[3].body);
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
                newsList: newsList
            }
        });
    })
});

router.get('/about', (req, res) => {
    var listBanner = cb => request(nws('/sysconfig/banner/listall'), (err, result) => {
        if(err)
            return cb(err)
        cb(null, result);
    });

    var listFriendLink = cb => request(nws('/sysconfig/friendlink/listall'), (err, result) => {
        if(err) 
            return cb(err);
        cb(null, result);
    });

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = JSON.parse(result[0].body);
        var friendLinkList = JSON.parse(result[1].body);
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
    var listBanner = cb => request(nws('/sysconfig/banner/listall'), (err, result) => {
        if(err)
            return cb(err)
        cb(null, result);
    });

    var listFriendLink = cb => request(nws('/sysconfig/friendlink/listall'), (err, result) => {
        if(err) 
            return cb(err);
        cb(null, result);
    });
    
    var listClassify = cb => request(nws('/classify/listall'), (err, result) => {
        if(err)
            return cb(err)
        cb(null, result);
    })

    async.parallel([listBanner, listFriendLink, listClassify], (err, result) => {

        var bannerList = JSON.parse(result[0].body);
        var friendLinkList = JSON.parse(result[1].body);
        var classifyList = JSON.parse(result[2].body);

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
    var productInfo = cb => request(nws('/product/getdetail'), {form: data}, (err, result) => {
        if(err)
            return cb(err);
        cb(null, result);
    });

    var listFriendLink = cb => request(nws('/sysconfig/friendlink/listall'), (err, result) => {
        if(err) 
            return cb(err);
        cb(null, result);
    });

    async.parallel([productInfo, listFriendLink], (err, result) => {

        var productInfo = JSON.parse(result[0].body);
        var friendLinkList = JSON.parse(result[1].body);
        var title = productInfo['p_name'] + "-江西艾麦达科技";
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
    var listBanner = cb => request(nws('/sysconfig/banner/listall'), (err, result) => {
        if(err)
            return cb(err)
        cb(null, result);
    });

    var listFriendLink = cb => request(nws('/sysconfig/friendlink/listall'), (err, result) => {
        if(err) 
            return cb(err);
        cb(null, result);
    });

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = JSON.parse(result[0].body);
        var friendLinkList = JSON.parse(result[1].body);

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
    var listBanner = cb => request(nws('/sysconfig/banner/listall'), (err, result) => {
        if(err)
            return cb(err)
        cb(null, result);
    });

    var listFriendLink = cb => request(nws('/sysconfig/friendlink/listall'), (err, result) => {
        if(err) 
            return cb(err);
        cb(null, result);
    });

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = JSON.parse(result[0].body);
        var friendLinkList = JSON.parse(result[1].body);

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
    var listBanner = cb => request(nws('/sysconfig/banner/listall'), (err, result) => {
        if(err)
            return cb(err)
        cb(null, result);
    });

    var listFriendLink = cb => request(nws('/sysconfig/friendlink/listall'), (err, result) => {
        if(err) 
            return cb(err);
        cb(null, result);
    });

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = JSON.parse(result[0].body);
        var friendLinkList = JSON.parse(result[1].body);

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
    var listBanner = cb => request(nws('/sysconfig/banner/listall'), (err, result) => {
        if(err)
            return cb(err)
        cb(null, result);
    });

    var listFriendLink = cb => request(nws('/sysconfig/friendlink/listall'), (err, result) => {
        if(err) 
            return cb(err);
        cb(null, result);
    });

    async.parallel([listBanner, listFriendLink], (err, result) => {

        var bannerList = JSON.parse(result[0].body);
        var friendLinkList = JSON.parse(result[1].body);

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
    res.render('shownews');
});

module.exports = router;
