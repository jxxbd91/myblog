const queryDB = require('../dbconfig');

const createSql = (username, password) => `SELECT * FROM user WHERE username=${username} AND password=${password}`;

module.exports = (username, password, callback) => {
  console.log(username, password)
  queryDB('SELECT * FROM user WHERE username=? AND password=?', [username, password], (err, results, fields) => {
    console.log(err);
    console.log(results);
    callback(err, results, fields);
  })
}