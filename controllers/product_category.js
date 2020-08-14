const pool = require('../database/credentials').pool;

module.exports = {
     list(request, response) {
        pool.query('SELECT * FROM "ProductCategories"', (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
        })
      }
};