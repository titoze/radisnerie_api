const pool = require('../database/credentials').pool;

const getProduct = (request, response) => {
  let sqlRequest = 'SELECT * FROM "Products"'

  if (request.body.id !== 'ALL') {
    sqlRequest = `select * from "Products" where id = ${request.body.id}`
  }

  pool.query(sqlRequest, (error, results) => {
    if (error) {
      response.status(404).json('Product could not be found.')
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addProduct = (request, response) => {
  pool.query(`INSERT INTO "Products" ("name", "description", "price", "image", "stock", "productCategoryId") VALUES ('${request.body.name}', '${request.body.description}', '${request.body.price}', '${request.body.image}', '${request.body.stock}', '${request.body.productCategoryId}')`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Product succesfully added')
  })
}

const updateProduct = (request, response) => {
  const date = new Date().toLocaleString()
  
   pool.query(`Update "Products" SET "name" = '${request.body.name}', "description" = '${request.body.description}', "price" = '${request.body.price}', "image" = '${request.body.image}', "stock" = '${request.body.stock}', "productCategoryId" = '${request.body.productCategoryId}', "updatedAt" = '${date}' where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Product succesfully Updated')
  })
}

const deleteProduct = (request, response) => {
  pool.query(`Delete from "Products" where id = ${request.body.id}`, (error, results) => {
   if (error) {
     throw error
   }
   response.status(200).json('User succesfully Deleted')
 })
}

module.exports = {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
};