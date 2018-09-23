const queryDB = require('../dbconfig')

exports.findUser = (userName, callback) => {
  queryDB('SELECT * FROM user WHERE username=?', [userName], (err, results, fields) => {
    callback(err, results, fields)
  })
}

exports.register = (userName, password, callback) => {
  queryDB('INSERT INTO user VALUES(?, ?)', [userName, password], (err, results, fields) => {
    callback(err, results, fields)
  })
}