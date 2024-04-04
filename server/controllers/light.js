const lightModel = require('../models/light.js');

const lightController = (req, res) => {
  lightModel((err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  })
};

module.exports = lightController;