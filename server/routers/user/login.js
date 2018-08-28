module.exports = Router => {
  Router.post('/login', (req, res, next) => {
    console.log(req.body)
    res.send(req.body).end()
  })
}