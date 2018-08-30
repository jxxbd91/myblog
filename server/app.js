const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers/routers');

const Router = express.Router();

const app = express();
app.use(bodyParser());

app.listen(7890);

// 路由
app.use('/api/user', routers.user);