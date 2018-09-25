const { createRes } = require('../routerUtils')
const { findById } = require('../../databases/home/articleDetailDB')

module.exports = (req, res, next) => {
  let { articleId } = req.body
  findById(articleId, (err, results, fields) => {
    if (err) {
      res.json(createRes({
        msg: '查询失败',
        code: '502',
        result: err
      }))
    } else {
      res.json(createRes({
        msg: '查询成功',
        code: 200,
        result: results
      }))
    }
  })
}