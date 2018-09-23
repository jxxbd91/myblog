const publishDB = require('../../databases/home/publishDB')
const { createRes } = require('../routerUtils')

module.exports = (req, res, next) => {
  let {text, title} = req.body
  if (!title || !text) {
    res.json(createRes({
      msg: '标题或内容不能为空',
      code: '402'
    })).end()
  } else {
    publishDB(req.session.user, title, text, (err, results, fields) => {
      if (err) {
        res.json(createRes({
          code: '505',
          msg: '发表失败',
          result: err
        })).end()
      } else {
        res.json(createRes({
          code: '200',
          msg: '发表成功'
        })).end()
      }
    })
  }
}