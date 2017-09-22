const express = require('express');
const router = express.Router();
const request = require('request');
const nws = require('../../nws/nws');

const rp = require('../../utils/request-promise');

router.get('/list', (req, res) => {
    var data = {
        start: 0,
        length: 12,
        type: req.query.type
    }
    rp(nws('/product/listall'), {
        qs: data
    }).then(body => {
        res.sendJSON(body)
    }).catch(err => {
        res.sendJSON(err);
    });
});

module.exports = router;
