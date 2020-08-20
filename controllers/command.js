const apiManager = require('../helpers/apiManager')
const pool = require('../database/credentials').pool

const getCommand = async (request, response) => {
  let sqlRequest
  let results
  let clientInformation

  if (request.query.id === 'all') {
    sqlRequest = 'SELECT * FROM "Commands"'
  }  else if (request.query.userId) {
    sqlRequest = `SELECT * FROM "Commands" where "Commands"."userId" = ${Number(request.query.userId)}`
  } else if (request.query.id !== 'all') {
    sqlRequest = `select * from "Commands" where id = ${request.query.id}`
  } else {
    response.status(404).json({error: 'Something went wrong.'})
    return
  }

  try {
    results = await pool.query(sqlRequest).then(response => response.rows)
    clientInformation = await pool.query(`select * from "Users" where id = ${results[0].userId}`).then(response => response.rows)
  } catch (err) {
    response.status(404).json({
      error: 'An error occured during the process.'
    })
    return err
  }

  for (let result of results) {
    result.baskets = await pool.query(`select "Baskets".* from "CommandBaskets" inner join "Baskets" on "Baskets"."id" = "CommandBaskets"."basketId" where "CommandBaskets"."commandId" = ${result.id}`).then(response => response.rows)
    result.baskets.forEach(product => apiManager.deleteUselessAttributes(product))
    result.client = clientInformation
    delete result.userId
    apiManager.deleteUselessAttributes(result)
  }

  response.status(200).json(results)
}

const addCommand = async (request, response) => {
  try {
    let totalPrice = 0
    const response = await pool.query(`INSERT INTO "Commands" ("userId", "price", "address", "additional_address", "city", "zip", "deliveryDate") VALUES ('${request.body.userId}', '0', '${request.body.address}', '${request.body.additional_address}', '${request.body.city}', '${request.body.zip}', '${request.body.deliveryDate}') returning id`)
    const id = response.rows[0].id

    if (request.body.baskets.length > 0) {
      for (let basket of request.body.baskets) {
        const basketPrice = await pool.query(`SELECT price from "Baskets" where "Baskets"."id" = ${basket}`).then(response => response.rows)
        console.log(basketPrice)
        totalPrice +=  basketPrice[0].price
        await pool.query(`INSERT INTO "CommandBaskets" ("basketId", "commandId") VALUES ('${basket}', '${id}')`)
      }
    }

    await pool.query(`UPDATE "Commands" set "price" = ${totalPrice} where id = ${id}`)
  } catch (err) {
    if (err.code === '23505') {
      response.status(404).json({
        error: 'Command already in database.'
      })
      return
    }
    throw err
  }

  response.status(200).json('Command succesfully added')
}

const updateCommand = async (request,response) => {
  const result = await pool.query(`UPDATE "Commands" set "deliveryStatus" = '${request.body.deliveryStatus}' where id = ${request.body.id}`)

  if(result.rowCount = 0) {
    response.status(404).json({error: 'An error occured while updating your command status.'})
  }
 

  response.status(200).json('Command status successfully updated !')
}


module.exports = {
  getCommand,
  addCommand,
  updateCommand
}