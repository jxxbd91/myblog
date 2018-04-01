const Route = require('koa-router');
const init = require('./init.js');


const router = new Route();

router.get('/init', init);

module.exports = router;