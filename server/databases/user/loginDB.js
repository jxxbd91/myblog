const queryDB = require('../dbconfig');

const createSql = (username, password) => `SELECT * FROM user WHERE username=${username} AND password=${password}`;

module.exports = (username, password, callback) => {
  queryDB('SELECT * FROM user WHERE username=? AND password=?', [username, password], (err, results, fields) => {
    callback(err, results, fields);
  })
}