const Router = require('express').Router()
const publishRouter = require('./publish')
const articleList = require('./articleList')
const articleDetail = require('./articleDetail')

Router.post('/index', (req, res, next) => {
  res.end();
})

Router.post('/publish', publishRouter)

Router.post('/initList', articleList)

Router.post('/articleDetail', articleDetail)

module.exports = Router