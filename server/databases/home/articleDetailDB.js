const queryDB = require('../dbconfig')

// 按照id查询详情
exports.findById = (article_id, callback) => {
  queryDB('SELECT * FROM articles WHERE article_id=?', [article_id], (err, results, fields) => {
    callback(err, results, fields)
  })
}