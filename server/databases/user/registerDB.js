const queryDB = require('../dbconfig')
const uuidV4 = require('uuid/v4')

exports.findUser = (userName, callback) => {
  queryDB('SELECT * FROM user WHERE username=?', [userName], (err, results, fields) => {
    callback(err, results, fields)
  })
}

exports.register = (userName, password, callback) => {
  queryDB('INSERT INTO user VALUES(?, ?, ?)', [uuidV4().replace(/\-/g, ''), userName, password], (err, results, fields) => {
    callback(err, results, fields)
  })
}