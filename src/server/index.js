const express = require('express')
const app = express()
const dummyData = require('./../db/lib/dummy_data')

// db methods*********
const methods = require('./../db/index')
// *******************



var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World! How are you doing?'))

app.listen(3001, () => console.log('Example app listening on port 3001! We are all awesome'))

// saves user and gets its karma-points
app.get('/users', (req, res) => {
    var user = dummyData.dummy
    methods.save(user, (result) => {
        res.json(result)
    })
})

