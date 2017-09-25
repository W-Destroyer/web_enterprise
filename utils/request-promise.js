const rp = require('request-promise');

const requestPromise = rp.defaults({transform: autoParse})

function autoParse(body, response, resolveWithFullResponse) {
    // FIXME: The content type string could contain additional values like the charset.
    // Consider using the `content-type` library for a robust comparison.
    // console.log(response.headers['content-type'])
    if (/application\/json/.test(response.headers['content-type'])) {
        return JSON.parse(body);
    } else if (response.headers['content-type'] === 'text/html') {
        // return $.load(body);
        return body;
    } else {
        return body;
    }
}



module.exports = requestPromise;