const { createRes } = require('../routerUtils')
const { findAllArticles, findByAuth } = require('../../databases/home/articleListDB')
const { Utils } = require('../../common/utils')

// 处理查询结果
// 处理totalNum
const queryResults = results => {
  return {
    totalNum: (results[0] || {total: 0}).total,
    resList: results.filter(item => {
      delete item.total
      return item
    })
  }
}

module.exports = (req, res, next) => {
  let sltAll = false
  let { authId, pageSize = 0, pageNum = 0 } = req.body
  // 处理分页数据
  if (!Utils.isNumber(pageSize)) {
    pageSize = 0
  }
  if (Utils.isNumber(pageNum)) {
    pageNum = 0
  }
  if (pageNum + pageSize === 0) {
    sltAll = true
  }  
  
  let pgBeg = (pageNum - 1) * pageSize
  let pgEnd = pgBeg + pageSize - 1

  if (authId) { // 按照用户查找
    findByAuth(sltAll, authId, pgBeg, pgEnd, (err, results, fields) => {
      if (err) {
        res.json(createRes({
          msg: '数据查询出错',
          code: '502',
          result: err
        }))
      } else {
        res.json(createRes({
          msg: '查询成功',
          code: '200',
          result: queryResults(results)
        }))
      }
    })
  } else { // 全部查找
    findAllArticles(sltAll, pgBeg, pgEnd, (err, results, fields) => {
      if (err) {
        res.json(createRes({
          msg: '数据查询出错',
          code: '502',
          result: err
        }))
      } else {
        res.json(createRes({
          msg: '查询成功',
          code: '200',
          result: queryResults(results)
        }))
      }
    })
  }
}