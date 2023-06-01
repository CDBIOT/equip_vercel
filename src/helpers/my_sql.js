const mysql = require('mysql')
const my_sql = mysql.createConnection({

host: "localhost",
user: "root",
password: "",
database:"blog_posts" 
})

module.exports = my_sql;