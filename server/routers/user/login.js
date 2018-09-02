const loginDB = require('../../databases/user/loginDB')
const { createRes } = require('../routerUtils')

module.exports = Router => {
  Router.post('/login', (req, res, next) => {
    let {userName, password} = req.body;
    loginDB(userName, password, (err, results, fields) => {
      if (results.length > 0) {
        let json = createRes({
          code: '200',
          msg: '登录成功'
        })
        // cookie设置签名
        res.cookie('user', userName, {
          signed: true
        });
        req.session.user = 'abcdefg';
        res.send(json).end()
      } else {
        let json = createRes({
          code: '402',
          msg: '登录失败'
        })
        res.send(json).end()
      }
    })
  })
}