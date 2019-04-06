const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const email = "Josh"
const password = "password"

// Add JSON parser to the app
app.use(express.json())

app.get('/login', (req, res) =>{
  res.json({response: "The message was recieved"})
  //res.send("You are connected")
  console.log("data was sent")

})

app.post('/log', (req, res) => {
  console.log(req.body.email)
  req.body.email === email && req.body.password === password ? res.json({res: "OK"}) : res.json({res: "NO"})
})

app.listen(port, () => console.log(`Listening on port: ${port}!`))