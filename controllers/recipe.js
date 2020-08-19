const apiManager = require('../helpers/apiManager')
const pool = require('../database/credentials').pool

const getRecipe = async (request, response) => {
  let sqlRequest
  let results

  if (request.query.id !== 'all') {
    sqlRequest = `select * from "Recipes" where id = ${request.query.id}`
  } else {
    sqlRequest = 'SELECT * FROM "Recipes"'
  }

  try {
    results = await pool.query(sqlRequest).then(response => response.rows)
  } catch (err) {
    response.status(404).json({
      error: 'An error occured during the process.'
    })
    return err
  }

  for (let result of results) {
    result.products = await pool.query(`select "Products".* from "RecipeProducts" inner join "Products" on "Products"."id" = "RecipeProducts"."productId" where "RecipeProducts"."recipeId" = ${result.id}`).then(response => response.rows)
    result.products.forEach(product => apiManager.deleteUselessAttributes(product))
    apiManager.deleteUselessAttributes(result)
  }

  response.status(200).json(results)
}

const addRecipe = async (request, response) => {
  try {
    const response = await pool.query(`INSERT INTO "Recipes" ("name", "caloric") VALUES ('${request.body.name}', '${request.body.caloric}') returning id`)
    const id = response.rows[0].id

    if (request.body.products.length > 0) {
      for (let product of request.body.products) {
        await pool.query(`INSERT INTO "RecipeProducts" ("productId", "recipeId") VALUES ('${product}', '${id}')`)
      }
    }
  } catch (err) {
    if (err.code === '23505') {
      response.status(404).json({
        error: 'Recipe already in database.'
      })
      return
    }
    throw err
  }

  response.status(200).json('Recipe succesfully added')
}

const updateRecipe = async (request, response) => {
  const date = new Date().toLocaleString()

  try {
    await pool.query(`Update "Recipes" SET "name" = '${request.body.name}', "caloric" = '${request.body.caloric}', "updatedAt" = '${date}' where id = ${request.body.id}`)
    const products = await pool.query(`Select * from "RecipeProducts" where "recipeId" = ${request.body.id}`).then(response => response.rows.map(element => element.productId))
    console.log(products)
    for (let product of request.body.products) {
      if (products.includes(product)) {
        continue
      }

      if (!products.includes(product)) {
        await pool.query(`INSERT INTO "RecipeProducts" ("productId", "recipeId") VALUES ('${product}', '${request.body.id}')`)
      }
    }

    for (let element of products) {
      if (!request.body.products.includes(element)) {
        await pool.query(`Delete from "RecipeProducts" where "productId" = ${element} and "recipeId" = ${request.body.id}`)
      }
    }

  } catch (err) {
    throw err
  }

  response.status(200).json('Recipe succesfully Updated')
}

const deleteRecipe = async (request, response) => {
  try {
    await pool.query(`Delete from "RecipeProducts" where "recipeId" = ${request.body.id}`)
    await pool.query(`Delete from "Recipes" where id = ${request.body.id}`)
  } catch (err) {
    throw err
  }

  response.status(200).json('Recipe succesfully Deleted')
}

module.exports = {
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe
}