module.exports = Router => {
  Router.get('/register', (req, res, next) => {
    res.send('success').end();
  })
}