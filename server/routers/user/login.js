const loginDB = require('../../databases/user/loginDB')
const { createRes } = require('../routerUtils')

module.exports = Router => {
  Router.post('/login', (req, res, next) => {
    console.log(req.body)
    let {userName, password} = req.body;
    loginDB(userName, password, (err, results, fields) => {
      if (results.length > 0) {
        let json = createRes({
          code: '200',
          msg: '登录成功'
        })
        res.send(json).end()
      } else {
        let json = createRes({
          code: '401',
          msg: '登录失败'
        })
        res.send(json).end()
      }
    })
  })
}