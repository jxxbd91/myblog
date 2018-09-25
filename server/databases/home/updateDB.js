const queryDB = require('../dbconfig')

exports.editById = (articleId, editInfo, callback) => {
  // 枚举允许修改的字段
  const editAbleFields = ['title', 'content', 'imgs']
  // 生成sql语句
  let subSql = 'UPDATE articles SET '
  editAbleFields.forEach((item, index) => {
    subSql += item + '=?'
    if (index !== editAbleFields.length-1) {
      subSql += ', '
    }
  })
  subSql += ' WHERE article_id=?'
  console.log(subSql)
  console.log([...editAbleFields.map(item => editInfo[item]), articleId])
  queryDB(subSql, [...editAbleFields.map(item => editInfo[item]), articleId], (err, results, fields) => {
    callback(err, results, fields)
  })
}
