const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

