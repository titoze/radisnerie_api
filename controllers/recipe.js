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
    sqlRequest = `select "Recipes".* from "Recipes" inner join "RecipeProducts" on "Recipes".id = "RecipeProducts"."recipeId" inner join "Products" on "Products".id = "RecipeProducts"."productId" where lower("Products"."name") like lower('${request.query.products}')`
  } else if(request.query.products && request.query.products.split(',').length > 1) {
    const products = request.query.products.split(',')
    sqlRequest = `select "Recipes".* from "Recipes" inner join "RecipeProducts" on "Recipes".id = "RecipeProducts"."recipeId" inner join "Products" on "Products".id = "RecipeProducts"."productId" where lower("Products"."name") like lower('${products[0]}')`

    for (let index = 1; index < products.length; index++) {
      sqlRequest += ` or lower("Products"."name") like lower('${products[index]}') `
    }

    sqlRequest += ` group by "Recipes".id having count("Recipes".id) > ${products.length - 1}`
  } else if(request.query.tags && request.query.tags.split(',').length === 1) {
    sqlRequest = `select "Recipes".* from "Recipes" inner join "RecipeTags" on "RecipeTags"."recipeId" = "Recipes".id where lower("RecipeTags"."name") like lower('${request.query.tags}')`
  } else if(request.query.tags && request.query.tags.split(',').length > 1) {
    const tags = request.query.tags.split(',')
    sqlRequest = `select "Recipes".* from "Recipes" inner join "RecipeTags" on "RecipeTags"."recipeId" = "Recipes".id where lower("RecipeTags"."name") like lower('${tags[0]}')`

    for (let index = 1; index < tags.length; index++) {
      sqlRequest += ` or lower("RecipeTags"."name") like lower('${tags[index]}') `
    }

    sqlRequest += ` group by "Recipes".id having count("Recipes".id) > ${tags.length - 1}`
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
    result.products = await pool.query(`select "Products".*, "RecipeProducts"."unity","RecipeProducts"."quantity" from "RecipeProducts" inner join "Products" on "Products"."id" = "RecipeProducts"."productId" where "RecipeProducts"."recipeId" = ${result.id}`).then(response => response.rows)
    result.tags = await pool.query(`SELECT * from "RecipeTags" where "RecipeTags"."recipeId" = ${result.id}`).then(response => response.rows.map(tag => tag.name))
    result.steps = await pool.query(`SELECT * from "RecipeSteps" where "RecipeSteps"."recipeId" = ${result.id}`).then(response => response.rows)
    result.products.forEach(product => apiManager.deleteUselessAttributes(product, ['createdAt', 'updatedAt']))
    result.steps.forEach(step => apiManager.deleteUselessAttributes(step, ['createdAt', 'updatedAt']))
    apiManager.deleteUselessAttributes(result, ['createdAt', 'updatedAt'])
  }

  response.status(200).json(results)
}

const addRecipe = async (request, response) => {
  try {
    const response = await pool.query(`INSERT INTO "Recipes" ("name", "caloric", "realisationTime", "difficulty") VALUES ('${request.body.name}', '${request.body.caloric}', '${request.body.realisationTime}', '${request.body.difficulty}') returning id`)
    const id = response.rows[0].id
    console.log(id)

    if (request.body.products.length > 0) {
      for (let product of request.body.products) {
        await pool.query(`INSERT INTO "RecipeProducts" ("productId", "recipeId", "unity", "quantity") VALUES ('${product.id}', '${id}', '${product.unity}', '${product.quantity}')`)
      }
    }

    if (request.body.tags.length > 0) {
      for (let tag of request.body.tags) {
        await pool.query(`INSERT INTO "RecipeTags" ("recipeId", "name") VALUES ('${id}', '${tag}')`)
      }
    }

    if (request.body.steps.length > 0) {
      for (let step of request.body.steps) {
        await pool.query(`INSERT INTO "RecipeSteps" ("recipeId", "details", "order") VALUES ('${id}', '${step.details}', '${step.order}')`)
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
    const productsInRecipe = await pool.query(`Select * from "RecipeProducts" where "recipeId" = ${request.body.id}`).then(response => response.rows.map(element => element.productId))
    const productsInRequest = request.body.products.map(element => element.id)
    const tagsInRecipe = await pool.query(`Select * from "RecipeTags" where "recipeId" = ${request.body.id}`).then(response => response.rows.map(element => element.name))
    const stepsInRecipe = await pool.query(`Select * from "RecipeSteps" where "recipeId" = ${request.body.id}`).then(response => response.rows.map(element => element.order))
    const stepsInRequest = request.body.steps.map(element => element.order)
    for (let product of request.body.products) {
      if (productsInRecipe.includes(product.id)) {
        await pool.query(`UPDATE "RecipeProducts" SET "unity" = '${product.unity}', "quantity" = '${product.quantity}' where "RecipeProducts"."recipeId" = ${request.body.id} and "RecipeProducts"."productId" = ${product.id}`)
      }

      if (!productsInRecipe.includes(product.id)) {
        await pool.query(`INSERT INTO "RecipeProducts" ("productId", "recipeId", "unity", "quantity") VALUES ('${product.id}', '${request.body.id}', '${product.unity}', '${product.quantity}')`)
      }
    }

    for (let tag of request.body.tags) {
      if (tagsInRecipe.includes(tag)) {
        continue
      }

      if (!tagsInRecipe.includes(tag)) {
        await pool.query(`INSERT INTO "RecipeTags" ("recipeId", "name") VALUES ('${request.body.id}', '${tag}')`)
        continue
      }
    }

    for (let step of request.body.steps) {
      if (stepsInRecipe.includes(step.order)) {
        await pool.query(`update "RecipeSteps" set "details" = '${step.details}' where "RecipeSteps"."id" = ${request.body.id}`)
        continue
      }

      if (!tagsInRecipe.includes(step)) {
        await pool.query(`INSERT INTO "RecipeSteps" ("recipeId", "details", "order") VALUES ('${request.body.id}', '${step.details}', '${step.order}')`)
        continue
      }
    }

    for (let element of productsInRecipe) {
      if (!productsInRequest.includes(element)) {
        await pool.query(`Delete from "RecipeProducts" where "productId" = ${element} and "recipeId" = ${request.body.id}`)
      }
    }

    for (let element of tagsInRecipe) {
      if (!request.body.tags.includes(element)) {
        await pool.query(`Delete from "RecipeTags" where "name" = '${element}' and "recipeId" = ${request.body.id}`)
      }
    }

    for (let element of stepsInRecipe) {
      if (!stepsInRequest.includes(element)) {
        await pool.query(`Delete from "RecipeSteps" where "order" = '${element}' and "recipeId" = ${request.body.id}`)
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