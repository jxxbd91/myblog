const queryDB = require('../dbconfig')

// 查找全部
exports.findAllArticles = (sltAll, pgBeg, pgEnd, callback) => {
  if (sltAll) {
    queryDB('SELECT `title`, `article_id`, `auth`, `create_time`, `like`, `views`, `auth_id`, `imgs`, `abstract`, (SELECT COUNT(*) FROM articles) AS total FROM articles', [], (err, results, fields) => {
      callback(err, results, fields)
    })
  } else {
    findByPage(pgBeg, pgEnd, callback)
  }
}

// 按照作者查找
exports.findByAuth = (sltAll, auth_id, pgBeg, pgEnd, callback) => {
  if (sltAll) {
    queryDB('SELECT `article_id`, `auth`, `create_time`, `like`, `views`, `auth_id`, `imgs`, `abstract`, (SELECT COUNT(*) FROM articles WHERE auth_id = ?) AS total FROM articles WHERE auth_id = ?', [auth_id, auth_id], (err, results, fields) => {
      callback(err, results, fields)
    })
  } else {
    findByPageAll(pgBeg, pgEnd, auth_id, callback)
  }
}

// 分页查找
exports.findByPage = (pgBeg, pgEnd, callback) => {
  queryDB('SELECT `article_id`, `auth`, `create_time`, `like`, `views`, `auth_id`, `imgs`, `abstract`, (SELECT COUNT(*) FROM articles) AS total FROM articles limit ?, ?', [pgBeg, pgEnd], (err, results, fields) => {
    callback(err, results, fields)
  })
}

exports.findByPageAll = (pgBeg, pgEnd, auth_id, callback) => {
  queryDB('SELECT `article_id`, `auth`, `create_time`, `like`, `views`, `auth_id`, `imgs`, `abstract`, (SELECT COUNT(*) FROM articles WHERE auth_id = ?) AS total FROM articles WHERE auth_id = ? limit ?, ?', [auth_id, auth_id, pgBeg, pgEnd], (err, results, fields) => {
    callback(err, results, fields)
  })
}
