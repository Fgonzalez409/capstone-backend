const mysql2 = require("mysql2")
require("dotenv").config()

const {DB_HOST, DB_PASSWORD, DB_USER, DB_DATABASE, DB_PORT} = process.env


const pool = mysql2.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    connectionLimit: 100,
    port: DB_PORT
  })

  module.exports = pool