const Router = require('express').Router();
require('./login')(Router)
require('./register')(Router)

module.exports = Router