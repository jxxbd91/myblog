const express = require('express');
const routers = require('./routers/routers')

const Router = express.Router();

const app = express();

app.listen(3000);

app.get('/', (req, res, next) => {
  res.send('hello world').end();
})

// 路由
app.use('/user', routers.user);