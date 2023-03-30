const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const auth = require("/Repositories/logistic/auth")
// const database = require('D:/Repositories/logistic/database.js')

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

app.get('/register', (req, res) => {
    res.sendFile(createPath("register"))
})

app.get('/login', (req, res) => {
    res.sendFile(createPath("login"))
})

app.use((req, res) => {
    res
    .status(404)
    .sendFile(createPath('error'))
})