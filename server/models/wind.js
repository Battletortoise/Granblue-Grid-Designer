const db = require('../db.js');

const wind = (callback) => {
  let query = 'SELECT * FROM wind';
  db.query(query)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      callback(err);
    })
};

module.exports = wind;