const queryDB = require('../dbconfig')

module.exports = (auth, title, text, callback) => {
  queryDB('INSERT INTO articles(auth_id, auth, title, content) VALUES((SELECT id FROM user WHERE username=?), ?, ?, ?)', [auth, auth, title, text], (err, results, fields) => {
    callback(err, results, fields)
  })
}