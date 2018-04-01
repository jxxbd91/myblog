const { findAllArtice } = require('../lib/mysql.js');

module.exports = function init(ctx, next) {
    findAllArtice()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
    // ctx.response.body = 'hello'
    next();
}