const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "logistic"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected! MySql");
})