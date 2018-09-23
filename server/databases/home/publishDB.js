const queryDB = require('../dbconfig')
const uuidV4 = require('uuid/v4')

module.exports = (auth, title, text, callback) => {
  queryDB('INSERT INTO articles(article_id, auth_id, auth, title, content) VALUES(?, (SELECT user_id FROM user WHERE username=?), ?, ?, ?)', [uuidV4().replace(/\-/g, ''), auth, auth, title, text], (err, results, fields) => {
    callback(err, results, fields)
  })
}