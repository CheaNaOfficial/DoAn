const mysql = require("mysql2/promise");
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password: "",
    database:"my_do_an",
    port:3308,
    connectionLimit:10,
    namedPlaceholders:true,
})
module.exports = db;