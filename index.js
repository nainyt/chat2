const path = require('path')
const express = require('express')
const app = express();


// setting static files on the server
app.use('/',express.static(path.join(__dirname,'client')))

const PORT = process.env.PORT || 5000

const server = app.listen(PORT ,() => console.log("express app is listening at port:"+PORT))
