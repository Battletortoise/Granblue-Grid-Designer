const db = require('../db.js');

const fire = (callback) => {
  let query = 'SELECT * FROM fire';
  db.query(query)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      callback(err);
    })
};

module.exports = fire;