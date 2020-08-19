const pool = require('../database/credentials').pool
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUser = async (request, response) => {
  try {
    let creditCards = []
    let commands = []
    let sqlRequest = 'SELECT * FROM "Users"'

    if (request.query.id !== 'all') {
      sqlRequest = `SELECT * from "Users" where id = ${request.query.id}`
      creditCards = await pool.query(`SELECT * from "CreditCards" where "userId" = ${request.query.id}`).then(response => response.rows)
      commands = await pool.query(`SELECT * from "Commands" where "userId" = ${request.query.id} order by date desc`).then(response => response.rows)
    }
    let results = await pool.query(sqlRequest).then(response => response.rows)

    for (let result of results) {
      result.creditCards = creditCards
      result.commands = commands
    }

    response.status(200).json(results)
  } catch (err) {
    response.status(404).json('User could not be found.')
    throw err
  }
}

const addUser = async (request, response) => {
  const encryptedPassword = await bcrypt.hash(request.body.password, 10)
  pool.query(`INSERT INTO "Users" ("firstname", "lastname", "email", "address", "additional_address", "city", "zip", "password", "is_premium") VALUES ('${request.body.firstname}', '${request.body.lastname}', '${request.body.email}', '${request.body.address}', '${request.body.additional_address}', '${request.body.city}', '${request.body.zip}', '${encryptedPassword}', '${request.body.is_premium}')`, (error, results) => {
    if (error) {
      if (error.code === '23505') {
        response.status(404).json({
          error: 'Email already in database.'
        })
        return
      }

      throw error
    }
    response.status(200).json('User succesfully added')
  })
}

const updateUser = (request, response) => {
  const date = new Date().toLocaleString()

  pool.query(`Update "Users" SET "firstname" = '${request.body.firstname}', "lastname" = '${request.body.lastname}', "email" = '${request.body.email}', "address" = '${request.body.address}', "additional_address" = '${request.body.additional_address}', "city" = '${request.body.city}', "zip" = '${request.body.zip}', "password" = '${request.body.password}', "is_premium" = '${request.body.is_premium}', "updatedAt" = '${date}' where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('User succesfully Updated')
  })
}

const deleteUser = (request, response) => {
  pool.query(`Delete from "Users" where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('User succesfully Deleted')
  })
}

const login = async (request, response) => {
  const user = await pool.query(`SELECT * from "Users" where "email" like '${request.body.email}'`).then(response => response.rows)
  
  if (user.length === 0) {
    response.status(404).json({error:'User not found.'})
    return
  }

  if (await bcrypt.compare(request.body.password, user[0].password)) {
    jsonWebToken = {
      userId: user[0].id,
      email: user[0].email,
      token: jwt.sign(
          {},
          'RSA_PRIVATE_KEY',
          {
              algorithm: 'HS256',
              expiresIn: "24h",
              subject: user[0].email
           }
      )
    }

    response.status(200).json(jsonWebToken)
  } else {
    response.status(404).json({error: 'Invalid Password.'})
  }
}

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  login
}