const pool = require('../database/credentials').pool

const getRecipe = (request, response) => {
  let sqlRequest

  if (request.body.id !== 'ALL') {
    sqlRequest = `select * from "Recipes" where id = ${request.body.id}`
  } else {
    sqlRequest = 'SELECT * FROM "Recipes"'
  }

  pool.query(sqlRequest, (error, results) => {
    if (error) {
      response.status(404).json('User could not be found.')
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addRecipe = (request, response) => {
   pool.query(`INSERT INTO "Recipes" ("name", "caloric") VALUES ('${request.body.name}', '${request.body.caloric}')`, (error, results) => {
    if (error) {
      if (error.code === '23505') {
        response.status(404).json({error: 'Recipe already in database.'})
        return
      }

      throw error
    }
    response.status(200).json('Recipe succesfully added')
  })
}

const updateRecipe = (request, response) => {
  const date = new Date().toLocaleString()

   pool.query(`Update "Recipes" SET "name" = '${request.body.name}', "caloric" = '${request.body.caloric}', "updatedAt" = '${date}' where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Recipe succesfully Updated')
  })
}

const deleteRecipe = (request, response) => {
   pool.query(`Delete from "Recipes" where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Recipe succesfully Deleted')
  })
}

module.exports = {
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe
}