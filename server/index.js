const express = require('express')
const mongoose = require('mongoose')
const db = require('../db/index.js')
const app = express()
const PORT = 8080 || process.env.PORT

app.use(express.static('client/dist'))
app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/get', (req, res) => {
  console.log('GET HEARD!', req.query)
  db.Name.find()
    .then(response => {
      console.log('NAME FIND: ', response)
    })
    .catch(err => console.log('ERROR', err))
  res.send('GET request was successful')
})

app.post('/post', (req, res) => {
  console.log('POST HEARD!', req.query)
  db.save(req.body)
  res.send('POST request was successful')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})