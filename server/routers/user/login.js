const loginDB = require('../../databases/user/loginDB')

module.exports = Router => {
  Router.post('/login', (req, res, next) => {
    console.log(req.body)
    let {userName, password} = req.body;
    loginDB(userName, password, (err, results, fields) => {
      if (results.length > 0) {
        res.send('登录成功').end()
      } else {
        res.status(401).send('登录失败').end()
      }
    })
  })
}