const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

