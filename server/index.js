const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()

require('dotenv').config()

app.use(express.json())



app.use('/', express.static(path.join(__dirname, '..client/index.html')))
app.use(express.static(path.join(__dirname, '../client')))















app.listen(port, () =>{
    console.log('Docked at port' + port)
})