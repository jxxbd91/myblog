const Router = require('express').Router();

Router.post('/index', (req, res, next) => {
  res.end();
})

module.exports = Router