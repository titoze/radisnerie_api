const apiManager = require('../helpers/apiManager')
const pool = require('../database/credentials').pool

const getRecipe = async (request, response) => {
  let sqlRequest
  let results

  if (request.query.id && request.query.id !== 'all' && !!Number(request.query.id)) {
    sqlRequest = `select * from "Recipes" where id = ${request.query.id}`
  } else if (request.query.id && request.query.id === 'all') {
    sqlRequest = 'SELECT * FROM "Recipes"'
  } else if(request.query.difficulty) {
    sqlRequest = `SELECT * FROM "Recipes" where "Recipes"."difficulty" = '${request.query.difficulty}'`
  } else if(request.query.products && request.query.products.split(',').length === 1) {
    sqlRequest = `select "Recipes".* from "Recipes" inner join "RecipeProducts" on "Recipes".id = "RecipeProducts"."recipeId" inner join "Products" on "Products".id = "RecipeProducts"."productId" where lower("Products"."name") like '${request.query.products}'`
  } else if(request.query.products && request.query.products.split(',').length > 1) {
    const products = request.query.products.split(',')
    sqlRequest = `select "Recipes".* from "Recipes" inner join "RecipeProducts" on "Recipes".id = "RecipeProducts"."recipeId" inner join "Products" on "Products".id = "RecipeProducts"."productId" where lower("Products"."name") like '${products[0]}'`

    for (let index = 1; index < products.length; index++) {
      sqlRequest += ` or lower("Products"."name") like '${products[index]}' `
    }

    sqlRequest += ` group by "Recipes".id having count("Recipes".id) > ${products.length - 1}`
  } else {
    response.status(404).json({error: 'Invalid params used in url.'})
    return
  }

  try {
    results = await pool.query(sqlRequest).then(response => response.rows)
  } catch (err) {
    response.status(404).json({
      error: 'An error occured during the process.'
    })
    return err
  }


  if (results.length === 0) {
    response.status(404).json({error: "No recipe(s) were found."})
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
    const response = await pool.query(`INSERT INTO "Recipes" ("name", "caloric", "realisationTime", "difficulty") VALUES ('${request.body.name}', '${request.body.caloric}', '${request.body.realisationTime}', '${request.body.difficulty}') returning id`)
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
    await pool.query(`Update "Recipes" SET "name" = '${request.body.name}', "caloric" = '${request.body.caloric}', "realisationTime" = '${request.body.realisationTime}', "difficulty" = '${request.body.difficulty}', "updatedAt" = '${date}' where id = ${request.body.id}`)
    const products = await pool.query(`Select * from "RecipeProducts" where "recipeId" = ${request.body.id}`).then(response => response.rows.map(element => element.productId))

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