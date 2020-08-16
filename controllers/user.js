const pool = require('../database/credentials').pool

const getUser = (request, response) => {
  let sqlRequest = 'SELECT * FROM "Users"'

  if (request.body.id !== 'ALL') {
    sqlRequest = `select * from "Users" where id = ${request.body.id}`
  }

  pool.query(sqlRequest, (error, results) => {
    if (error) {
      response.status(404).json('User could not be found.')
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addUser = (request, response) => {
   pool.query(`INSERT INTO "Users" ("firstname", "lastname", "email", "address", "additional_address", "city", "zip", "password", "is_premium") VALUES ('${request.body.firstname}', '${request.body.lastname}', '${request.body.email}', '${request.body.address}', '${request.body.additional_address}', '${request.body.city}', '${request.body.zip}', '${request.body.password}', '${request.body.is_premium}')`, (error, results) => {
    if (error) {
      if (error.code === '23505') {
        response.status(404).json({error: 'Email already in database.'})
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

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser
}