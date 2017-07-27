const express = require('express');
const router = express.Router();
const request = require('request');
const nws = require('../../nws/nws');

router.get('/listByType', (req, res) => {
    var type = req.query.type;
    request(nws('/product/showcount'), (err, result, body) => {
        if(err)
            return res.sendJSON(err);
        body = JSON.parse(body)
        if(body.code != 0)
            return res.sendJSON(body)
        var len = body.data;
        request(nws('/product/listProduct'), {
            form: {start: 0, length: len, type: type}
        }, (err, result) => {
            if(err)
                return res.sendJSON(err);
            res.sendJSON(result.body)
        })
    });
});

module.exports = router;
