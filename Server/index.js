const express = require('express')
const app = express()
const db = require('./database')

// Set the server port 
const port = process.env.PORT || 5000

// Add JSON parser to the app
app.use(express.json())


app.post('/database/select/:id', (req, res) => {
  const id = req.params.id
  console.log(id)

  const username = req.body.email
  const password = req.body.password
  const sql = 'SELECT account_id FROM account WHERE username = ? AND password= ?'

  db.query(sql, [username, password], (err, rows, fields) => {
    if(err) console.log(err)
    else if(rows.length === 0){
      console.log("The username or password was incorrect")
      res.json("INVALID")
    } 
    else{
      res.json(rows)
    }
  })
})

app.listen(port, () => console.log(`Listening on port: ${port}!`))