const loginDB = require('../../databases/user/loginDB')
const { createRes } = require('../routerUtils')
const svgCaptcha = require('svg-captcha')

module.exports = Router => {
  let errCount = 1
  Router.post('/login', (req, res, next) => {
    let { userName, password, captcha = '' } = req.body
    if (errCount > 3 && captcha && captcha.toLowerCase() !== req.session.captcha.toLowerCase()) {
      res.json(createRes({
        code: '402',
        msg: '图形验证码错误'
      })).end()
    } else {
      loginDB(userName, password, (err, results, fields) => {
        if (results && results.length > 0) {
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
          errCount++
          let json = createRes({
            code: '402',
            msg: '登录失败'
          })
          res.send(json).end()
        }
      })
    }
  })

  Router.get('/captcha', (req, res, next) => {
    let cp = svgCaptcha.create()
    req.session.captcha = cp.text
    res.type('svg')
    res.status(200).send(cp.data).end()
  })
}