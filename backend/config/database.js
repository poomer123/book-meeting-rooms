const mysql = require('mysql')
const connection = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'meeting-room',
    charset         : 'utf8'
})

module.exports = connection