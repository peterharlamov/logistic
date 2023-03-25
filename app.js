const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`)

app.listen(port, (error => {
    error ? console.log(error) : console.log(`Connected to port: ${port}`)
}))

app.use(express.static("pages"))
app.use(express.static("styles"))

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

app.get('/info', (req, res) => {
    res.sendFile(createPath('info'))
})

app.get('/workspace', (req, res) => {
    res.sendFile(createPath("workspace"))
})

app.use((req, res) => {
    res
    .status(404)
    .sendFile(createPath('error'))
})