const apiManager = require('../helpers/apiManager')
const pool = require('../database/credentials').pool;

const getDelivery = async (request, response) => {
  let sqlRequest

  if (request.query.id && request.query.id !== 'all' && !!Number(request.query.id)) {
    sqlRequest = `select * from "Deliveries" where id = ${request.query.id}`
  } else if (request.query.id && request.query.id === 'all') {
    sqlRequest = 'SELECT * FROM "Deliveries"'
  } else if (request.query.retailerId && !!Number(request.query.retailerId)) {
    sqlRequest = `SELECT * FROM "Deliveries" where "Deliveries"."retailerId" = ${request.query.retailerId}`
  } else {
    response.status(404).json({error: 'Invalid params used in url.'})
    return
  }

  const results = await pool.query(sqlRequest)

  if (results.rows.length === 0) {
    response.status(404).json('No delivery(ies) were found.')
    return
  }

  for (let result of results.rows) {
    result.products = await pool.query(`select "DeliveryProducts".*, "Products"."name" from "DeliveryProducts"  inner join "Products" on "DeliveryProducts"."productId" = "Products".id where "DeliveryProducts"."deliveryId" = ${result.id}`).then(response => response.rows)
    result.products.forEach(product => apiManager.deleteUselessAttributes(product, ['createdAt', 'updatedAt','id','deliveryId','productId']))
  }

  response.status(200).json(results.rows)
}

const addDelivery = (request, response) => {
  pool.query(`INSERT INTO "Deliveries" ("retailerId", "price") VALUES ('${request.body.retailerId}', '${request.body.price}')`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Delivery succesfully added')
  })
}

const updateDelivery = (request, response) => {
  const date = new Date().toLocaleString()
  
   pool.query(`Update "Deliveries" SET "retailerId" = '${request.body.retailerId}',"price" = '${request.body.price}',"status" = '${request.body.status}', "updatedAt" = '${date}' where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Delivery succesfully Updated')
  })
}

const deleteDelivery = (request, response) => {
  pool.query(`Delete from "Deliveries" where id = ${request.body.id}`, (error, results) => {
   if (error) {
     throw error
   }
   response.status(200).json('Delivery succesfully Deleted')
 })
}

module.exports = {
  getDelivery,
  addDelivery,
  updateDelivery,
  deleteDelivery
};