const express = require('express')
const cors = require('cors')
const connect = require('./connection')
const mobile = require('./routes/mobile')
const user = require('./routes/user')
const discount = require('./routes/discount')

// createAdmin file check - agar file nahi hai to crash nahi hoga
let createAdmin;
try {
  createAdmin = require('./createAdmin');
} catch (e) {
  console.log('createAdmin file not found, skipping...');
}

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(mobile)
app.use(user)
app.use(discount)

connect();

if (createAdmin) {
  createAdmin();
}

app.get('/', (req, res) => {
  res.send("Mobile Store API Running")
})

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('server is running on 3000')
  }
})