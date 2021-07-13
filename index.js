const express = require('express')
const app = express()
const port = 80
app.use(express.json()) // for parsing application/json

var data = []

app.get('/', (req, res) => {
  res.send('anl gen3 mote temp endpoint')
})

app.post('/api/v1/data', (req, res) => {
  data.push(req.body)
})

app.get('/api/v1/data', (req, res) => {
  res.send(JSON.stringify(data))
})

app.listen(port);
