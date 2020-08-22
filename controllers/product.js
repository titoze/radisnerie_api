const pool = require('../database/credentials').pool;

const getProduct = async (request, response) => {
  let sqlRequest

  if (request.query.id && request.query.id !== 'all' && !!Number(request.query.id)) {
    sqlRequest = `select * from "Products" where id = ${request.query.id}`
  } else if (request.query.id && request.query.id === 'all') {
    sqlRequest = 'SELECT * FROM "Products"'
  } else {
    response.status(404).json({error: 'Invalid params used in url.'})
    return
  }

  const results = await pool.query(sqlRequest)

  if (results.rows.length === 0) {
    response.status(404).json('No product(s) were found.')
    return
  }
  
  response.status(200).json(results.rows)
}

const addProduct = (request, response) => {
  pool.query(`INSERT INTO "Products" ("name", "description", "price", "image", "stock", "productCategoryId","sellable") VALUES ('${request.body.name}', '${request.body.description}', '${request.body.price}', '${request.body.image}', '${request.body.stock}', '${request.body.productCategoryId}', '${request.body.sellable}')`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Product succesfully added')
  })
}

const updateProduct = (request, response) => {
  const date = new Date().toLocaleString()
  
   pool.query(`Update "Products" SET "name" = '${request.body.name}', "description" = '${request.body.description}', "price" = '${request.body.price}', "image" = '${request.body.image}', "stock" = '${request.body.stock}', "productCategoryId" = '${request.body.productCategoryId}', "sellable" = '${request.body.sellable}', "updatedAt" = '${date}' where id = ${request.body.id}`, (error, results) => {
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