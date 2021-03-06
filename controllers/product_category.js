const pool = require('../database/credentials').pool;

const getProductCategory = (request, response) => {
  let sqlRequest = 'SELECT * FROM "ProductCategories"'

  if (request.query.id !== 'all') {
    sqlRequest = `select * from "ProductCategories" where id = ${request.query.id}`
  }

  pool.query(sqlRequest, (error, results) => {
    if (error) {
      response.status(404).json('Product Category could not be found.')
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addProductCategory = (request, response) => {
  pool.query(`INSERT INTO "ProductCategories" ("name") VALUES ('${request.body.name}')`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Product Category succesfully added')
  })
}

const updateProductCategory = (request, response) => {
  const date = new Date().toLocaleString()
  
   pool.query(`Update "ProductCategories" SET "name" = '${request.body.name}', "updatedAt" = '${date}' where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Product Category succesfully Updated')
  })
}

const deleteProductCategory = (request, response) => {
  pool.query(`Delete from "ProductCategories" where id = ${request.body.id}`, (error, results) => {
   if (error) {
     throw error
   }
   response.status(200).json('Product Category succesfully Deleted')
 })
}

module.exports = {
  getProductCategory,
  addProductCategory,
  updateProductCategory,
  deleteProductCategory
};