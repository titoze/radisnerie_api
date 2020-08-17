require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  host: process.env.db_host,
  database: process.env.db_name,
  port: process.env.db_port,
  user: process.env.db_username,
  password: process.env.db_password
})

module.exports = { pool }