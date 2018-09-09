const queryDB = require('../dbconfig');

module.exports = (username, password, callback) => {
  queryDB('SELECT * FROM user WHERE username=? AND password=?', [username, password], (err, results, fields) => {
    callback(err, results, fields);
  })
}