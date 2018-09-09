const Router = require('express').Router();
const publishRouter = require('./publish');
const articleList = require('./articleList')

Router.post('/index', (req, res, next) => {
  res.end();
})

Router.post('/publish', publishRouter)

Router.post('/initList', articleList)

module.exports = Router