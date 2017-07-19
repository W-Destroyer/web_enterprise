var request = require('request');

var nwsConf = require('../config/nws.config');

// class Nws {
//     get(options, data) {
//         return new Promise((resolve, reject) => {
//             request.get()
//         })
//     }
//     post(options, data) {
//         return new Promise((resolve, reject) => {

//         })
//     }
// }

// module.exports = Nws;

module.exports = function(options, data) {
    // var opts = {};
    var url = nwsConf.url + options;
    return new Promise((resolve, reject) => {
        request(url, data, (err, result) => {
            if(err)
                return reject(err);
            resolve(result);
        });
    })
}