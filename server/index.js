const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const mysqlStore = require('koa-mysql-session');
const router = require('./routers/index.js');
const static = require('koa-static');

const { findAllArtice } = require('./lib/mysql.js');
const app = new Koa();

const THIRTY_MINTUES = 30 * 60 * 1000;
const config= {
    user: "root",
    password: "shenmin#520",
    database: "nodesql",
    host: "118.25.45.75"
}

app.keys = ['your-session-secret']
app.use(session({
        store: new mysqlStore(config),
        rolling: true,
        cookie: {
            maxage:THIRTY_MINTUES
        }
}))

app.use(static(path.join(__dirname, './public')));
app.use(bodyParser());
app.use(router.routes());
app.use(mysqlStore());

findAllArtice()
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})




app.listen(7070);