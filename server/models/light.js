const db = require('../db.js');

const light = (callback) => {
  let query = 'SELECT * FROM light';
  db.query(query)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      callback(err);
    })
};

module.exports = light;