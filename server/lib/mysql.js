const mysql = require('mysql');
const config = require('../config/default.config.js');

const pool = mysql.createPool({
    host: config.dataBase.HOST,
    user: config.dataBase.USERNAME,
    password: config.dataBase.PASSWORD,
    database : config.dataBase.DATABASE
});

let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
            } else {
                console.log(sql)
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })
}

article = `
    create table if not exists article(
        id INT NOT NUll AUTO_INCREMENT,
        title VARCHAR(40) NOT NUll,
        abstract VARCHAR(100) NOT NULL,
        content VARCHAR(200) NOT NULL
    )
`

let createTable = (sql) => {
    return query(sql, [])
}

// 建表
createTable(article)

// 查询所有文章
let findAllArtice = () => {
    let _sql = `
        SELECT * FROM article
    `
    return query(_sql)
}

module.exports = {
    findAllArtice,
}