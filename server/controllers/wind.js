const windModel = require('../models/wind.js');

const windController = (req, res) => {
  windModel((err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  })
};

module.exports = windController;