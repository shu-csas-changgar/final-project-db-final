const express = require('express')
const app = express()
const mysql = require('mysql')
const db = require('./database')

// Set the server port 
const port = process.env.PORT || 5000

// Add JSON parser to the app
app.use(express.json())


app.post('/log', (req, res) => {
  const username = req.body.email
  const password = req.body.password
  const sql = 'SELECT username, password FROM account WHERE username = ? AND password = ?'

  db.query(sql, [username, password], (err, rows, fields) => {
    if(err) console.log(err)
    else if(rows.length === 0) res.json("INVALID")
    else{
      rows.map( x => console.log(x.username))
      res.json(rows)
    }
  })
})

app.listen(port, () => console.log(`Listening on port: ${port}!`))