const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const routers = require('./routers/routers');

const app = express();
app.use(bodyParser());
// 传入参数给cookie添加签名
app.use(cookieParser('asdjlfkjasdlfjlasdkjf'));

// 增加session中间件
app.use(session({
  name: 'hasLogined',
  secret: 'asdjlfkjasdlfjlasdkjf',
  // resave: false,
  // saveUninitialized: true,
  rolling: true, // 每次
  cookie: {
    signed: true,
    maxAge: 2 * 60 * 1000,
    httpOnly: true
  }
}));
app.listen(10240);

app.use((req, res, next) => {
  // req.session._garbage = Date();
  // req.session.touch();
  if (req.url.includes('/api/user')) {
    next()
  } else if (!req.session.user) {
    res.status(401).json({
      res_code: 401,
      res_msg: '尚未登录',
      res_req: req.url
    })
  } else {
    next()
  }
})

// 路由
app.use('/api/user', routers.user);
app.use('/api/home', routers.home)