const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

//Importing perceptronTest.js
const perceptronTest = require('./routes/perceptronTest')
app.use('/api/perceptronTest', require('./routes/perceptronTest'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
