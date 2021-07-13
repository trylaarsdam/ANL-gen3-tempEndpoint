const express = require('express')
const app = express()
const port = 80
app.use(express.json()) // for parsing application/json
const fs = require('fs');



app.get('/', (req, res) => {
  res.send('anl gen3 mote temp endpoint')
})

app.post('/api/v1/data', (req, res) => {
  fs.appendFile('log.json', JSON.stringify(req.body), function (err) {
    if (err) throw err;
    console.log('saved');
  });
})

app.get('/api/v1/data', (req, res) => {
  fs.readFile('log.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  res.send(data);
})
})

app.listen(port);
