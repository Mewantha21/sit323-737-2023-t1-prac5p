const express = require ('express')
const app = express()

app.get ('/', (req, res) => res.send('This is a test'))
app.listen (8080, () => console.log('Server running'))