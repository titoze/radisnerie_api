const pool = require('../database/credentials').pool;

const getRetailer = async (request, response) => {
  let sqlRequest

  if (request.query.id && request.query.id !== 'all' && !!Number(request.query.id)) {
    sqlRequest = `select * from "Retailers" where id = ${request.query.id}`
  } else if (request.query.id && request.query.id === 'all') {
    sqlRequest = 'SELECT * FROM "Retailers"'
  } else {
    response.status(404).json({error: 'Invalid params used in url.'})
    return
  }

  const results = await pool.query(sqlRequest)

  if (results.rows.length === 0) {
    response.status(404).json('No Retailer(s) were found.')
    return
  }
  
  response.status(200).json(results.rows)
}

const addRetailer = (request, response) => {
  pool.query(`INSERT INTO "Retailers" ("name", "owner_firstname", "owner_lastname", "city", "zip", "address","additional_address","phone","email") VALUES ('${request.body.name}', '${request.body.owner_firstname}', '${request.body.owner_lastname}', '${request.body.city}', '${request.body.zip}', '${request.body.address}', '${request.body.additional_address}', '${request.body.phone}', '${request.body.email}')`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Retailer succesfully added')
  })
}

const updateRetailer = (request, response) => {
  const date = new Date().toLocaleString()
  
   pool.query(`Update "Retailers" SET "name" = '${request.body.name}', "owner_firstname" = '${request.body.owner_firstname}', "owner_lastname" = '${request.body.owner_lastname}', "city" = '${request.body.city}', "zip" = '${request.body.zip}', "address" = '${request.body.address}', "additional_address" = '${request.body.additional_address}', "phone" = '${request.body.phone}', "email" = '${request.body.email}', "updatedAt" = '${date}' where id = ${request.body.id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('Retailer succesfully Updated')
  })
}

const deleteRetailer = (request, response) => {
  pool.query(`Delete from "Retailers" where id = ${request.body.id}`, (error, results) => {
   if (error) {
     throw error
   }
   response.status(200).json('Retailer succesfully Deleted')
 })
}

module.exports = {
  getRetailer,
  addRetailer,
  updateRetailer,
  deleteRetailer
};