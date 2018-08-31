const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers/routers');

const app = express();
app.use(bodyParser());

app.listen(10240);

// 路由
app.use('/api/user', routers.user);