const { createRes } = require('../routerUtils')
const { editById } = require('../../databases/home/updateDB')

module.exports = (req, res, next) => {
  let { articleId, title, content, imgs } = req.body
  editById(articleId, {title, content, imgs}, (err, results, fields) => {
    if (err) {
      res.json(createRes({
        msg: '修改失败',
        code: '502',
        result: err
      }))
    } else {
      res.json(createRes({
        msg: '修改成功',
        code: '200'
      }))
    }
  })
}