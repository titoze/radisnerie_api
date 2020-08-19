const apiManager = require('../helpers/apiManager')
const pool = require('../database/credentials').pool

const getBasket = async (request, response) => {
  let sqlRequest
  let results

  if (request.query.id !== 'all') {
    sqlRequest = `select * from "Baskets" where id = ${request.query.id}`
  } else {
    sqlRequest = 'SELECT * FROM "Baskets"'
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
    result.products = await pool.query(`select "Products".* from "BasketProducts" inner join "Products" on "Products"."id" = "BasketProducts"."productId" where "BasketProducts"."basketId" = ${result.id}`).then(response => response.rows)
    result.products.forEach(product => apiManager.deleteUselessAttributes(product))
    apiManager.deleteUselessAttributes(result)
  }

  response.status(200).json(results)
}

const addBasket = async (request, response) => {
  try {
    const response = await pool.query(`INSERT INTO "Baskets" ("name", "price") VALUES ('${request.body.name}', '${request.body.price}') returning id`)
    const id = response.rows[0].id

    if (request.body.products.length > 0) {
      for (let product of request.body.products) {
        await pool.query(`INSERT INTO "BasketProducts" ("productId", "basketId") VALUES ('${product}', '${id}')`)
      }
    }
  } catch (err) {
    if (err.code === '23505') {
      response.status(404).json({
        error: 'Basket already in database.'
      })
      return
    }
    throw err
  }

  response.status(200).json('Basket succesfully added')
}

const updateBasket = async (request, response) => {
  const date = new Date().toLocaleString()

  try {
    await pool.query(`Update "Baskets" SET "name" = '${request.body.name}', "price" = '${request.body.price}', "updatedAt" = '${date}' where id = ${request.body.id}`)
    const products = await pool.query(`Select * from "BasketProducts" where "basketId" = ${request.body.id}`).then(response => response.rows.map(element => element.productId))

    for (let product of request.body.products) {
      if (products.includes(product)) {
        continue
      }

      if (!products.includes(product)) {
        await pool.query(`INSERT INTO "BasketProducts" ("productId", "basketId") VALUES ('${product}', '${request.body.id}')`)
      }
    }

    for (let element of products) {
      if (!request.body.products.includes(element)) {
        await pool.query(`Delete from "BasketProducts" where "productId" = ${element} and "basketId" = ${request.body.id}`)
      }
    }

  } catch (err) {
    throw err
  }

  response.status(200).json('Basket succesfully Updated')
}

const deleteBasket = async (request, response) => {
  try {
    await pool.query(`Delete from "BasketProducts" where "basketId" = ${request.body.id}`)
    await pool.query(`Delete from "Baskets" where id = ${request.body.id}`)
  } catch (err) {
    throw err
  }

  response.status(200).json('Basket succesfully Deleted')
}

module.exports = {
  getBasket,
  addBasket,
  updateBasket,
  deleteBasket
}