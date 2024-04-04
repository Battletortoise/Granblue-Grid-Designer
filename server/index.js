require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const wind = require('./controllers/wind.js');
const fire = require('./controllers/fire.js');
const light = require('./controllers/light.js');
const summons = require('./controllers/summons.js');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));

const PORT = process.env.PORT || 3000;

app.get('/wind', (req, res) => {
  wind(req, res);
});
app.get('/fire', (req, res) => {
  fire(req, res);
});
app.get('/light', (req, res) => {
  light(req, res);
});
app.get('/summons', (req, res) => {
  summons(req, res);
});


app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});

