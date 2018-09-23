const { findUser, register } = require('../../databases/user/registerDB')
const { createRes } = require('../routerUtils')

module.exports = Router => {
  Router.post('/register', (req, res, next) => {
    // 获取请求参数
    let { userName, password } = req.body

    if (!userName || !password) {
      res.json(createRes({
        code: '202',
        msg: '用户名密码不能为空'
      }))
    } else {
      // 查询是否存在当前用户
      findUser(userName, (err, results, fields) => {
        console.log(userName)
        // 对结果进行判断
        if (results && results.length > 0) {
          res.json(createRes({
            code: '202',
            msg: '当前注册的用户已存在'
          })).end()
        } else {
          register(userName, password, (err, results, fields) => {
            res.json(createRes({
              code: '200',
              msg: '注册成功'
            }))
          })
        }
      })
    }
  })
}