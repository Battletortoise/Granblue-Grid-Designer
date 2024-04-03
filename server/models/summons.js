const db = require('../db.js');

const summons = (callback) => {
  let query = 'SELECT * FROM summons';
  db.query(query)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      callback(err);
    })
};

module.exports = summons;