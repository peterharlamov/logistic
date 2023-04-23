const mysql = require('mysql');
const express = require('express')
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "logistic"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected! MySql")
})
