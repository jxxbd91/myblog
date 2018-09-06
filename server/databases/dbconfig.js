const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'myblog',
  port: '3306'
})

module.exports = function (sql, options, callback) {
  pool.getConnection((err, conn) => {
    if (err) {
      callback(err, null, null)
    } else {
      conn.query(sql, options, (err, result, fields) => {
        conn.release();
        callback(err, result, fields);
      })
    }
  })
}