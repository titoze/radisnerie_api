const pool = require('../database/credentials').pool

const getCreditCard = (request, response) => {
  pool.query(`select * from "CreditCards" where id = ${request.body.id}`, (error, results) => {
    if (error) {
      response.status(404).json('Credit Card could not be found.')
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addCreditCard = (request, response) => {
  pool.query(`INSERT INTO "CreditCards" ("numbers", "userId") VALUES ('${request.body.numbers}', '${request.body.userId}')`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Credit Card succesfully added')
  })
}

const updateCreditCard = (request, response) => {
  const date = new Date().toLocaleString()
  
   pool.query(`Update "CreditCards" SET "numbers" = '${request.body.numbers}', "updatedAt" = '${date}' where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Credit Card succesfully Updated')
  })
}

const deleteCreditCard = (request, response) => {
   pool.query(`Delete from "CreditCards" where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Credit Card succesfully Deleted')
  })
}

module.exports = {
  getCreditCard,
  addCreditCard,
  updateCreditCard,
  deleteCreditCard
}