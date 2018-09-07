const loginDB = require('../../databases/user/loginDB')
const { createRes } = require('../routerUtils')
const svgCaptcha = require('svg-captcha')

module.exports = Router => {
  Router.post('/login', (req, res, next) => {
    let { userName, password, captcha = '' } = req.body
    if (!Object.keys(req.cookies).find(item => item.includes('error_count'))) {
      req.session[userName + '_errcount'] = 0
      res.cookie('error_count', true, {
        httpOnly: true
      })
    }
    if (req.session[userName + '_errcount'] > 2 && (!captcha || (captcha && captcha.toLowerCase() !== req.session.captcha.toLowerCase()))) {
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
          })
          res.cookie('error_count', true, {
            maxAge: 0
          })
          req.session.user = userName;
          res.send(json).end()
        } else {
          req.session[userName + '_errcount'] = req.session[userName + '_errcount'] ? (req.session[userName + '_errcount'] + 1) : 1
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