const mysql = require('mysql')

// Create a connection
const connection = mysql.createConnection({
    //Server properties
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'login'
  })
 
  connection.connect((err) => {
    if(err) console.log(err)
    else console.log(`Connected to database on id: ${connection.threadId}`)
  })
  module.exports = connection