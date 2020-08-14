require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'radisnerie_dev',
  port: 5432,
  user: process.env.db_username,
  password: process.env.db_password

})

module.exports = { pool }