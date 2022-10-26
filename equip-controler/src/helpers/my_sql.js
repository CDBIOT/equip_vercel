const mysql = require('mysql')
const my_sql = mysql.createConnection({

host: "localhost",
user: "root",
password: "Prog_2022",
database:"equipamentos" 
})

module.exports = my_sql;