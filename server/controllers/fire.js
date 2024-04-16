const fireModel = require('../models/fire.js');

const fireController = (req, res) => {
  fireModel((err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  })
};

module.exports = fireController;