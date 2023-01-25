const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors  = require('cors');
const taskRoute = require('./router/task-route');
const app = express()

const port = 8080;

const dBurl = "mongodb+srv://root:root@ayushcluster.uvgwk8l.mongodb.net/todoDB"

mongoose.connect(dBurl, (err) => {
    if(err) {
        console.log("Db is not connecting")
    }else{
        console.log("Db Connected")
    }
})

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/task', taskRoute);

app.listen(port, () => {
    console.log("Server is connected ", port)
})