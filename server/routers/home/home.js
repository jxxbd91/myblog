const Router = require('express').Router()
const publishRouter = require('./publish')
const articleList = require('./articleList')
const articleDetail = require('./articleDetail')
const updateArticle = require('./updateArticle')

Router.post('/index', (req, res, next) => {
  res.end();
})

Router.post('/publish', publishRouter)

Router.post('/initList', articleList)

Router.post('/articleDetail', articleDetail)

Router.post('/editArticle', updateArticle)

module.exports = Router