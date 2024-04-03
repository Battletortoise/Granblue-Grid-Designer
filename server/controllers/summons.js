const summonModel = require('../models/summons.js');

const summonController = (req, res) => {
  summonModel((err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  })
};

module.exports = summonController;