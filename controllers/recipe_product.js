const pool = require('../database/credentials').pool;

const getRecipeProduct = (request, response) => {
  let sqlRequest = 'SELECT * FROM "RecipeProducts"'

  if (request.query.id !== 'all') {
    sqlRequest = `select * from "RecipeProducts" where id = ${request.query.id}`
  }

  pool.query(sqlRequest, (error, results) => {
    if (error) {
      response.status(404).json('Recipe Product could not be found.')
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addRecipeProduct = (request, response) => {
  pool.query(`INSERT INTO "RecipeProducts" ("productId", "recipeId") VALUES ('${request.body.productId}', '${request.body.recipeId}')`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Recipe Product succesfully added')
  })
}

const updateRecipeProduct = (request, response) => {
  const date = new Date().toLocaleString()
  
   pool.query(`Update "RecipeProducts" SET "recipeId" = '${request.body.recipeId}', "productId" = '${request.body.productId}', "updatedAt" = '${date}' where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Recipe Product succesfully Updated')
  })
}

const deleteRecipeProduct = (request, response) => {
  pool.query(`Delete from "RecipeProducts" where id = ${request.body.id}`, (error, results) => {
   if (error) {
     throw error
   }
   response.status(200).json('Recipe Product succesfully Deleted')
 })
}

module.exports = {
  getRecipeProduct,
  addRecipeProduct,
  updateRecipeProduct,
  deleteRecipeProduct
};