const express = require('express')
const cors = require('cors')
const connect = require('./connection')
const mobile = require('./routes/mobile')
const user = require('./routes/user')
const discount = require('./routes/discount')
const createAdmin = require('./createAdmin')
const app = express();
app.use(cors())
app.use(mobile)
app.use(user)
app.use(discount)
connect();
createAdmin();



app.listen(3000, (err) =>{
    if(err){
        console.log(err)
    } else {
        console.log('server is running on 3000')
    }
        

})